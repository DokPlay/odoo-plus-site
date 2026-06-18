import {
  faqItems,
  freeModules,
  proModules,
  roadmapItems,
  services,
  siteLinks
} from "../../data/modules.js?v=20260619-seo-1";
import {
  defaultLanguage,
  faqTranslations,
  itemTranslations,
  languageStorageKey,
  supportedLanguages,
  uiText
} from "../../data/i18n.js?v=20260619-seo-1";

const assetVersion = "20260619-seo-1";

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

const allCatalogItems = [
  ...freeModules,
  ...proModules,
  ...services,
  ...roadmapItems
];

const catalogGrid = document.querySelector("#catalogGrid");
const catalogCount = document.querySelector("#catalogCount");
const tabs = [...document.querySelectorAll(".tab")];
const dialog = document.querySelector("#moduleDialog");
const languageButtons = [...document.querySelectorAll("[data-language-option]")];
const siteHeader = document.querySelector(".site-header");
const backToTop = document.querySelector(".back-to-top");
const countUpElements = [...document.querySelectorAll("[data-count-up]")];

let currentFilter = "all";
let renderedItems = [];
let currentLanguage = resolveInitialLanguage();
let revealObserver;

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const badgeClass = (type) => {
  if (type === "free") return "badge-free";
  if (type === "pro") return "badge-pro";
  if (type === "service") return "badge-service";
  return "badge-roadmap";
};

function getNestedText(key) {
  return uiText[currentLanguage]?.[key] ?? uiText[defaultLanguage]?.[key] ?? key;
}

function getFilterLabel(filter) {
  const key = filter === "service" ? "catalog.service" : `catalog.${filter}`;
  return getNestedText(key);
}

function normalizeLanguage(language) {
  if (!language) return null;
  const normalized = String(language).toLowerCase().split("-")[0];
  return supportedLanguages.includes(normalized) ? normalized : null;
}

function resolveInitialLanguage() {
  return normalizeLanguage(document.documentElement.lang) || (window.location.pathname.startsWith("/ru/") ? "ru" : defaultLanguage);
}

function saveLanguage(language) {
  try {
    window.localStorage.setItem(languageStorageKey, language);
  } catch {
    // Private browsing or blocked storage should not break language switching.
  }
}

function localizeItem(item) {
  return {
    ...item,
    ...(itemTranslations[currentLanguage]?.[item.technicalName] ?? {})
  };
}

function localizedFaqItems() {
  return faqTranslations[currentLanguage] ?? faqItems;
}

function setConfiguredLinks() {
  document.querySelectorAll("[data-site-link]").forEach((link) => {
    const key = link.dataset.siteLink;
    if (!siteLinks[key]) return;
    link.href = siteLinks[key];
  });
}

function setLegalLinks() {
  document.querySelectorAll("[data-legal-link]").forEach((link) => {
    link.href = `/${link.dataset.legalLink}.html`;
  });
}

function itemMatchesFilter(item, filter) {
  return filter === "all" || item.type === filter;
}

function trackEventForItem(item) {
  if (item.type === "free") return "click_github";
  if (item.type === "pro") return "click_pro_module";
  if (item.type === "service") return "click_contact_email";
  if (item.type === "roadmap") return "click_roadmap_card";
  return "click_module_card";
}

function trackAttributes(item, eventName = trackEventForItem(item)) {
  return ` data-track="${eventName}" data-track-label="${escapeHtml(item.technicalName)}" data-track-module="${escapeHtml(item.technicalName)}" data-track-type="${escapeHtml(item.type)}"`;
}

function ctaMarkup(item) {
  if (item.disabled) {
    return `<button class="card-cta is-disabled" type="button" disabled>${escapeHtml(item.ctaLabel)}</button>`;
  }

  const isAnchor = item.ctaUrl?.startsWith("#");
  const isMail = item.ctaUrl?.startsWith("mailto:");
  const target = isAnchor || isMail ? "" : ' target="_blank" rel="noopener noreferrer"';
  return `<a class="card-cta" href="${escapeHtml(item.ctaUrl)}"${target}${trackAttributes(item)}>${escapeHtml(item.ctaLabel)}</a>`;
}

function catalogImagePath(item) {
  const languageSuffix = currentLanguage === "ru" ? "-ru" : "";
  return `/assets/img/catalog/${item.technicalName}${languageSuffix}.png?v=${assetVersion}`;
}

function cardImageMarkup(item) {
  return `<img class="card-image" src="${escapeHtml(item.image ?? catalogImagePath(item))}" width="1000" height="660" alt="${escapeHtml(item.imageAlt ?? `${item.title} preview`)}" loading="lazy" decoding="async">`;
}

function cardTemplate(item, index) {
  return `
    <article class="catalog-card catalog-card-${escapeHtml(item.type)} catalog-card-with-image">
      ${cardImageMarkup(item)}
      <div class="card-topline">
        <span class="badge ${badgeClass(item.type)}">${escapeHtml(item.badge)}</span>
        <span>${escapeHtml(item.status)}</span>
      </div>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.description)}</p>
      <dl class="card-meta">
        <div>
          <dt>${escapeHtml(getNestedText("catalog.version"))}</dt>
          <dd>${escapeHtml(item.version)}</dd>
        </div>
        <div>
          <dt>${escapeHtml(getNestedText("catalog.price"))}</dt>
          <dd>${escapeHtml(item.price)}</dd>
        </div>
      </dl>
      <div class="card-actions">
        ${ctaMarkup(item)}
        <button class="details-button" type="button" data-details-index="${index}"${trackAttributes(item, "click_module_details")}>${escapeHtml(getNestedText("catalog.details"))}</button>
      </div>
    </article>
  `;
}

function queueReveal(elements, options = {}) {
  const { immediate = false, stagger = 45 } = options;

  elements.forEach((element, index) => {
    element.classList.add("reveal");
    element.style.setProperty("--reveal-delay", `${Math.min(index, 8) * stagger}ms`);

    if (immediate) {
      element.classList.add("is-visible");
    } else if (revealObserver) {
      revealObserver.observe(element);
    } else {
      element.classList.add("is-visible");
    }
  });
}

function renderCatalog(filter = currentFilter) {
  currentFilter = filter;
  catalogGrid.classList.add("is-filtering");
  renderedItems = allCatalogItems.filter((item) => itemMatchesFilter(item, filter)).map(localizeItem);
  catalogGrid.innerHTML = renderedItems.map(cardTemplate).join("");
  catalogCount.textContent = `${getFilterLabel(filter)}: ${renderedItems.length} ${getNestedText("catalog.cards")}`;
  queueReveal([...catalogGrid.querySelectorAll(".catalog-card")], { immediate: true, stagger: 24 });
  window.requestAnimationFrame(() => catalogGrid.classList.remove("is-filtering"));
}

function initCountUp() {
  if (!countUpElements.length) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const run = (element) => {
    if (element.dataset.counted === "true") return;
    element.dataset.counted = "true";
    const target = Number(element.dataset.countUp);
    if (!Number.isFinite(target) || prefersReducedMotion) {
      element.textContent = String(target);
      return;
    }

    const duration = 900;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = String(Math.round(target * eased));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  };

  if (!("IntersectionObserver" in window)) {
    countUpElements.forEach(run);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        run(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.5 }
  );
  countUpElements.forEach((element) => observer.observe(element));
}

function headerHeight() {
  return document.querySelector(".site-header")?.getBoundingClientRect().height ?? 0;
}

function alignElementBelowHeader(target, gap = 12) {
  if (!target) return;
  const top = window.scrollY + target.getBoundingClientRect().top - headerHeight() - gap;
  const safeTop = Math.max(0, top);
  forceScrollTop(safeTop);
}

function forceScrollTop(top) {
  const scroller = document.scrollingElement ?? document.documentElement;
  window.scrollTo({ top, behavior: "auto" });
  scroller.scrollTo({ top, behavior: "auto" });
  scroller.scrollTop = top;
  document.documentElement.scrollTop = top;
  document.body.scrollTop = top;
}

function scrollTargetIntoPlace(target, gap = 12) {
  if (!target) return false;
  const top = window.scrollY + target.getBoundingClientRect().top - headerHeight() - gap;
  const safeTop = Math.max(0, top);
  forceScrollTop(safeTop);
  return true;
}

function lockScrollToTarget(target, gap = 12) {
  if (!scrollTargetIntoPlace(target, gap)) return false;
  window.setTimeout(() => scrollTargetIntoPlace(target, gap), 0);
  window.setTimeout(() => scrollTargetIntoPlace(target, gap), 80);
  window.setTimeout(() => scrollTargetIntoPlace(target, gap), 260);
  window.setTimeout(() => scrollTargetIntoPlace(target, gap), 700);
  window.setTimeout(() => scrollTargetIntoPlace(target, gap), 1200);
  return true;
}

function scrollToHash(hash) {
  if (!hash || hash === "#") return false;
  return lockScrollToTarget(document.querySelector(hash));
}

function scrollToCatalog() {
  const heading = document.querySelector("#modules .section-heading") ?? document.querySelector("#modules");
  return lockScrollToTarget(heading, window.innerWidth <= 640 ? 8 : 12);
}

function isCatalogNearViewport() {
  const catalog = document.querySelector("#modules");
  if (!catalog) return false;
  const rect = catalog.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.75 && rect.bottom > headerHeight();
}

function scheduleCatalogAlignment() {
  const catalog = document.querySelector("#modules");
  if (!catalog) return;
  window.requestAnimationFrame(() => alignElementBelowHeader(catalog));
  window.setTimeout(() => alignElementBelowHeader(catalog), 180);
  window.setTimeout(() => alignElementBelowHeader(catalog), 520);
  window.setTimeout(() => alignElementBelowHeader(catalog), 1400);
  window.setTimeout(() => alignElementBelowHeader(catalog), 2600);
}

function setActiveFilter(filter, keepCatalogAligned = false) {
  tabs.forEach((tab) => {
    const isActive = tab.dataset.filter === filter;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
  renderCatalog(filter);

  if (keepCatalogAligned) {
    scheduleCatalogAlignment();
  }
}

function renderFaq() {
  const faqList = document.querySelector("#faqList");
  faqList.innerHTML = localizedFaqItems()
    .map(
      (item) => `
        <details class="faq-item">
          <summary aria-expanded="false">${escapeHtml(item.question)}</summary>
          <p>${escapeHtml(item.answer)}</p>
        </details>
      `
    )
    .join("");

  faqList.querySelectorAll(".faq-item").forEach((details) => {
    const summary = details.querySelector("summary");
    let toggledByPointer = false;
    const setOpen = (isOpen) => {
      details.open = isOpen;
      summary?.setAttribute("aria-expanded", String(isOpen));
    };

    summary?.addEventListener("pointerup", (event) => {
      event.preventDefault();
      toggledByPointer = true;
      setOpen(!details.open);
      window.setTimeout(() => {
        toggledByPointer = false;
      }, 0);
    });

    summary?.addEventListener("click", (event) => {
      event.preventDefault();
      if (toggledByPointer) return;
      setOpen(!details.open);
    });

    summary?.addEventListener("keydown", (event) => {
      if (!["Enter", " "].includes(event.key)) return;
      event.preventDefault();
      setOpen(!details.open);
    });

    details.addEventListener("toggle", () => {
      summary?.setAttribute("aria-expanded", String(details.open));
    });
  });
}

function openDetails(item) {
  dialog.querySelector("#dialogBadge").textContent = item.badge;
  dialog.querySelector("#dialogBadge").className = `badge ${badgeClass(item.type)}`;
  dialog.querySelector("#dialogTitle").textContent = item.title;
  dialog.querySelector("#dialogDescription").textContent = item.description;
  dialog.querySelector("#dialogTechName").textContent = item.technicalName;
  dialog.querySelector("#dialogVersion").textContent = item.version;
  dialog.querySelector("#dialogStatus").textContent = item.status;
  dialog.querySelector("#dialogPrice").textContent = item.price;
  dialog.querySelector("#dialogDetails").textContent = item.details;
  dialog.querySelector("#dialogActions").innerHTML = `
    ${ctaMarkup(item)}
    <button class="details-button js-dialog-close" type="button">${escapeHtml(getNestedText("dialog.close"))}</button>
  `;

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
}

function applyStaticTranslations() {
  document.documentElement.lang = currentLanguage;
  document.title = getNestedText("meta.title");
  setLegalLinks();

  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = getNestedText("meta.description");

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.content = getNestedText("meta.title");

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) ogDescription.content = getNestedText("meta.ogDescription");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = getNestedText(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", getNestedText(element.dataset.i18nAriaLabel));
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.setAttribute("alt", getNestedText(element.dataset.i18nAlt));
  });

  document.querySelectorAll("[data-i18n-src-en]").forEach((element) => {
    const languageKey = `i18nSrc${currentLanguage[0].toUpperCase()}${currentLanguage.slice(1)}`;
    const localizedSource = element.dataset[languageKey] ?? element.dataset.i18nSrcEn;
    if (localizedSource) element.setAttribute("src", localizedSource);
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.languageOption === currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function setLanguage(language, persist = true) {
  const normalized = normalizeLanguage(language) ?? defaultLanguage;
  const keepCatalogAligned = isCatalogNearViewport();
  currentLanguage = normalized;
  if (persist) saveLanguage(normalized);
  applyStaticTranslations();
  renderFaq();
  renderCatalog(currentFilter);

  if (keepCatalogAligned) {
    scheduleCatalogAlignment();
  }

  const url = new URL(window.location.href);
  url.searchParams.delete("lang");
  window.history.replaceState({}, "", url);
}

function bindEvents() {
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => setActiveFilter(tab.dataset.filter, true));
  });

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.languageOption));
  });

  window.addEventListener("scroll", () => {
    const isScrolled = window.scrollY > 18;
    siteHeader?.classList.toggle("is-scrolled", isScrolled);
    backToTop?.classList.toggle("is-visible", window.scrollY > 800);
  }, { passive: true });

  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.querySelectorAll("[data-filter-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      const filter = link.dataset.filterLink;
      if (!filter) return;
      event.preventDefault();
      setActiveFilter(filter, false);
      window.setTimeout(() => scrollToCatalog(), 0);
    });
  });

  document.querySelectorAll('a[href^="#"]:not([data-filter-link])').forEach((link) => {
    link.addEventListener("click", (event) => {
      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;
      if (!scrollToHash(hash)) return;
      event.preventDefault();
      window.history.pushState({}, "", hash);
    });
  });

  catalogGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-details-index]");
    if (!button) return;
    const item = renderedItems[Number(button.dataset.detailsIndex)];
    if (item) openDetails(item);
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog || event.target.closest(".js-dialog-close")) {
      dialog.close();
    }
  });
}

function initMotion() {
  if (!("IntersectionObserver" in window)) return;

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.14 }
  );

  queueReveal([
    ...document.querySelectorAll(
      ".hero-copy > *, .hero-media, .service-grid > *, .workflow-step, .paid-note, .roadmap-layout > *, .faq-grid > *"
    )
  ]);

  initCountUp();
}

function alignCurrentHashTarget() {
  const hash = window.location.hash;
  if (!hash) return false;

  const target = document.querySelector(hash);
  if (!target) return false;

  alignElementBelowHeader(target);
  return true;
}

function scheduleHashAlignment() {
  window.requestAnimationFrame(alignCurrentHashTarget);
  window.setTimeout(alignCurrentHashTarget, 0);
  window.setTimeout(alignCurrentHashTarget, 450);
  window.setTimeout(alignCurrentHashTarget, 900);
  window.setTimeout(alignCurrentHashTarget, 1800);
  window.setTimeout(alignCurrentHashTarget, 2600);
}

function watchHashAlignment() {
  let attempts = 0;
  const watcher = window.setInterval(() => {
    attempts += 1;
    if (alignCurrentHashTarget() || attempts >= 36) {
      window.clearInterval(watcher);
    }
  }, 180);
}

function realignInitialHash() {
  scheduleHashAlignment();
  watchHashAlignment();
  window.addEventListener("hashchange", () => {
    scheduleHashAlignment();
    watchHashAlignment();
  });
  window.addEventListener("load", () => window.setTimeout(alignCurrentHashTarget, 120), { once: true });
}

setConfiguredLinks();
applyStaticTranslations();
initMotion();
renderFaq();
renderCatalog();
bindEvents();
realignInitialHash();
