import {
  faqItems,
  freeModules,
  proModules,
  roadmapItems,
  services,
  siteLinks
} from "../../data/modules.js?v=20260610-linkedin";
import {
  defaultLanguage,
  faqTranslations,
  itemTranslations,
  languageStorageKey,
  russianTimeZones,
  supportedLanguages,
  uiText
} from "../../data/i18n.js?v=20260610-linkedin";

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

function browserLooksRussian() {
  const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
  const hasRussianLanguage = languages.some((language) => /^ru\b/i.test(language));
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return hasRussianLanguage || russianTimeZones.includes(timeZone);
}

function resolveInitialLanguage() {
  return languageFromQuery() || languageFromStorage() || (browserLooksRussian() ? "ru" : defaultLanguage);
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

function cardTemplate(item, index) {
  return `
    <article class="catalog-card catalog-card-${escapeHtml(item.type)}">
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

function renderCatalog(filter = currentFilter) {
  currentFilter = filter;
  renderedItems = allCatalogItems.filter((item) => itemMatchesFilter(item, filter)).map(localizeItem);
  catalogGrid.innerHTML = renderedItems.map(cardTemplate).join("");
  catalogCount.textContent = `${getFilterLabel(filter)}: ${renderedItems.length} ${getNestedText("catalog.cards")}`;
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

setConfiguredLinks();
applyStaticTranslations();
renderFaq();
renderCatalog();
bindEvents();
