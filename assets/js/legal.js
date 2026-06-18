import {
  defaultLanguage,
  languageStorageKey,
  supportedLanguages
} from "../../data/i18n.js?v=20260617-ux-tz-v2-38";

const pageText = {
  en: {
    brandAria: "Community Plus Addons home",
    navModules: "Modules",
    navServices: "Services",
    navRoadmap: "Roadmap",
    navFaq: "FAQ",
    navContact: "Contact",
    github: "GitHub",
    languageAria: "Language selector",
    updated: "Last updated: June 18, 2026.",
    pages: {
      privacy: {
        title: "Privacy Policy",
        documentTitle: "Privacy Policy | OdooCustom"
      },
      terms: {
        title: "Terms",
        documentTitle: "Terms | OdooCustom"
      },
      refund: {
        title: "Refund Policy",
        documentTitle: "Refund Policy | OdooCustom"
      }
    }
  },
  ru: {
    brandAria: "Главная Community Plus Addons",
    navModules: "Модули",
    navServices: "Услуги",
    navRoadmap: "План",
    navFaq: "FAQ",
    navContact: "Контакты",
    github: "GitHub",
    languageAria: "Выбор языка",
    updated: "Обновлено: 18 июня 2026.",
    pages: {
      privacy: {
        title: "Конфиденциальность",
        documentTitle: "Конфиденциальность | OdooCustom"
      },
      terms: {
        title: "Условия",
        documentTitle: "Условия | OdooCustom"
      },
      refund: {
        title: "Возврат",
        documentTitle: "Возврат | OdooCustom"
      }
    }
  }
};

function normalizeLanguage(language) {
  if (!language) return null;
  const normalized = String(language).toLowerCase().split("-")[0];
  return supportedLanguages.includes(normalized) ? normalized : null;
}

function languageFromQuery() {
  return normalizeLanguage(new URLSearchParams(window.location.search).get("lang"));
}

function languageFromStorage() {
  try {
    return normalizeLanguage(window.localStorage.getItem(languageStorageKey));
  } catch {
    return null;
  }
}

function saveLanguage(language) {
  try {
    window.localStorage.setItem(languageStorageKey, language);
  } catch {
    // Blocked storage should not break legal pages.
  }
}

function setIndexLinks(language) {
  document.querySelectorAll("[data-index-anchor]").forEach((link) => {
    link.href = `./index.html?lang=${language}${link.dataset.indexAnchor}`;
  });
}

function applyLanguage(language, persist = true) {
  const current = normalizeLanguage(language) ?? defaultLanguage;
  const copy = pageText[current];
  const pageId = document.body.dataset.legalPage;
  const pageCopy = copy.pages[pageId] ?? copy.pages.terms;

  if (persist) saveLanguage(current);

  document.documentElement.lang = current;
  document.title = pageCopy.documentTitle;
  document.querySelector("[data-legal-title]").textContent = pageCopy.title;
  document.querySelector("[data-legal-updated]").textContent = copy.updated;
  document.querySelector("[data-legal-brand]").setAttribute("aria-label", copy.brandAria);
  document.querySelector("[data-legal-language-switcher]").setAttribute("aria-label", copy.languageAria);

  document.querySelector("[data-legal-nav='modules']").textContent = copy.navModules;
  document.querySelector("[data-legal-nav='services']").textContent = copy.navServices;
  document.querySelector("[data-legal-nav='roadmap']").textContent = copy.navRoadmap;
  document.querySelector("[data-legal-nav='faq']").textContent = copy.navFaq;
  document.querySelector("[data-legal-nav='contact']").textContent = copy.navContact;
  document.querySelector("[data-legal-github]").textContent = copy.github;

  document.querySelectorAll("[data-legal-lang]").forEach((section) => {
    section.hidden = section.dataset.legalLang !== current;
  });

  document.querySelectorAll("[data-language-option]").forEach((button) => {
    const isActive = button.dataset.languageOption === current;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  setIndexLinks(current);

  const url = new URL(window.location.href);
  url.searchParams.set("lang", current);
  window.history.replaceState({}, "", url);
}

document.querySelectorAll("[data-language-option]").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.languageOption));
});

applyLanguage(languageFromQuery() || languageFromStorage() || defaultLanguage, false);
