import {
  faqItems,
  freeModules,
  proModules,
  roadmapItems,
  services,
  siteLinks
} from "../../data/modules.js?v=20260617-design-refresh-7";
import {
  defaultLanguage,
  faqTranslations,
  itemTranslations,
  languageStorageKey,
  supportedLanguages,
  uiText
} from "../../data/i18n.js?v=20260617-design-refresh-7";

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

function languageFromQuery() {
  const params = new URLSearchParams(window.location.search);
  return normalizeLanguage(params.get("lang"));
}

function languageFromStorage() {
  try {
    return normalizeLanguage(window.localStorage.getItem(languageStorageKey));
  } catch {
    return null;
  }
}

function resolveInitialLanguage() {
  return languageFromQuery() || languageFromStorage() || defaultLanguage;
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

function itemMatchesFilter(item, filter) {
  return filter === "all" || item.type === filter;
}

function ctaMarkup(item) {
  if (item.disabled) {
    return `<button class="card-cta is-disabled" type="button" disabled>${escapeHtml(item.ctaLabel)}</button>`;
  }

  const isAnchor = item.ctaUrl?.startsWith("#");
  const isMail = item.ctaUrl?.startsWith("mailto:");
  const target = isAnchor || isMail ? "" : ' target="_blank" rel="noopener noreferrer"';
  return `<a class="card-cta" href="${escapeHtml(item.ctaUrl)}"${target}>${escapeHtml(item.ctaLabel)}</a>`;
}

function catalogImagePath(item) {
  const languageSuffix = currentLanguage === "ru" ? "-ru" : "";
  return `./assets/img/catalog/${item.technicalName}${languageSuffix}.png`;
}

function cardImageMarkup(item) {
  return `<img class="card-image" src="${escapeHtml(item.image ?? catalogImagePath(item))}" alt="${escapeHtml(item.imageAlt ?? `${item.title} preview`)}" loading="lazy">`;
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
        <button class="details-button" type="button" data-details-index="${index}">${escapeHtml(getNestedText("catalog.details"))}</button>
      </div>
    </article>
  `;
}

function queueReveal(elements) {
  elements.forEach((element, index) => {
    element.classList.add("reveal");
    element.style.setProperty("--reveal-delay", `${Math.min(index, 8) * 45}ms`);

    if (revealObserver) {
      revealObserver.observe(element);
    } else {
      element.classList.add("is-visible");
    }
  });
}

function renderCatalog(filter = currentFilter) {
  currentFilter = filter;
  renderedItems = allCatalogItems.filter((item) => itemMatchesFilter(item, filter)).map(localizeItem);
  catalogGrid.innerHTML = renderedItems.map(cardTemplate).join("");
  catalogCount.textContent = `${getFilterLabel(filter)}: ${renderedItems.length} ${getNestedText("catalog.cards")}`;
  queueReveal([...catalogGrid.querySelectorAll(".catalog-card")]);
}

function setActiveFilter(filter) {
  tabs.forEach((tab) => {
    const isActive = tab.dataset.filter === filter;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
  renderCatalog(filter);
}

function renderFaq() {
  const faqList = document.querySelector("#faqList");
  faqList.innerHTML = localizedFaqItems()
    .map(
      (item) => `
        <details>
          <summary>${escapeHtml(item.question)}</summary>
          <p>${escapeHtml(item.answer)}</p>
        </details>
      `
    )
    .join("");
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
  currentLanguage = normalized;
  if (persist) saveLanguage(normalized);
  applyStaticTranslations();
  renderFaq();
  renderCatalog(currentFilter);

  const url = new URL(window.location.href);
  url.searchParams.set("lang", normalized);
  window.history.replaceState({}, "", url);
}

function bindEvents() {
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => setActiveFilter(tab.dataset.filter));
  });

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.languageOption));
  });

  document.querySelectorAll("[data-filter-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      const filter = link.dataset.filterLink;
      if (!filter) return;
      event.preventDefault();
      document.querySelector("#modules").scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveFilter(filter);
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
      ".hero-copy > *, .hero-media, .featured-card, .service-grid > *, .paid-note, .roadmap-layout > *, .faq-grid > *"
    )
  ]);
}

function realignInitialHash() {
  const hash = window.location.hash;
  if (!hash) return;

  const target = document.querySelector(hash);
  if (!target) return;

  const align = () => {
    const headerHeight = document.querySelector(".site-header")?.getBoundingClientRect().height ?? 0;
    const top = window.scrollY + target.getBoundingClientRect().top - headerHeight - 12;
    window.scrollTo({ top: Math.max(0, top), behavior: "auto" });
  };

  window.requestAnimationFrame(align);
  window.setTimeout(align, 450);
  window.setTimeout(align, 900);
  window.setTimeout(align, 1800);
  window.addEventListener("load", () => window.setTimeout(align, 120), { once: true });
}

setConfiguredLinks();
applyStaticTranslations();
initMotion();
renderFaq();
renderCatalog();
bindEvents();
realignInitialHash();
