import {
  faqItems,
  freeModules,
  proModules,
  roadmapItems,
  services,
  siteLinks
} from "../../data/modules.js";

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
const filterLabels = {
  all: "All",
  free: "Free",
  pro: "Pro",
  service: "Services",
  roadmap: "Roadmap"
};

let currentFilter = "all";
let renderedItems = [];

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
          <dt>Version</dt>
          <dd>${escapeHtml(item.version)}</dd>
        </div>
        <div>
          <dt>Price</dt>
          <dd>${escapeHtml(item.price)}</dd>
        </div>
      </dl>
      <div class="card-actions">
        ${ctaMarkup(item)}
        <button class="details-button" type="button" data-details-index="${index}">Details</button>
      </div>
    </article>
  `;
}

function renderCatalog(filter = currentFilter) {
  currentFilter = filter;
  renderedItems = allCatalogItems.filter((item) => itemMatchesFilter(item, filter));
  catalogGrid.innerHTML = renderedItems.map(cardTemplate).join("");
  catalogCount.textContent = `${filterLabels[filter]}: ${renderedItems.length} cards`;
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
  faqList.innerHTML = faqItems
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
    <button class="details-button js-dialog-close" type="button">Close</button>
  `;

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
}

function bindEvents() {
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => setActiveFilter(tab.dataset.filter));
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
renderFaq();
renderCatalog();
bindEvents();
