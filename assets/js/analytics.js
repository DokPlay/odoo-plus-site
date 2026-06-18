const analyticsConfig = {
  // Fill these IDs to activate tracking. Empty values keep external analytics disabled.
  ga4MeasurementId: "G-QYCQDM5F0C",
  yandexMetrikaId: "109974481",
  clarityProjectId: ""
};

const consentStorageKey = "cp_analytics_consent_v1";
const consentAccepted = "accepted";
const consentRejected = "rejected";

const consentCopy = {
  en: {
    text: "We use analytics to understand how visitors use the website and improve the project.",
    accept: "Accept",
    reject: "Reject"
  },
  ru: {
    text: "Мы используем аналитику, чтобы понимать, как посетители используют сайт, и улучшать проект.",
    accept: "Принять",
    reject: "Отклонить"
  }
};

let analyticsReady = false;
let ga4Loaded = false;
let yandexMetrikaLoaded = false;
const trackedScrollDepths = new Set();

function configured(value, placeholderPrefix) {
  return Boolean(value && !value.includes("XXXX") && value !== placeholderPrefix);
}

function hasGa4() {
  return configured(analyticsConfig.ga4MeasurementId, "G-");
}

function hasClarity() {
  return configured(analyticsConfig.clarityProjectId, "");
}

function hasYandexMetrika() {
  return configured(analyticsConfig.yandexMetrikaId, "");
}

function currentLanguage() {
  return document.documentElement.lang?.toLowerCase().startsWith("ru") ? "ru" : "en";
}

function getStoredConsent() {
  try {
    return window.localStorage.getItem(consentStorageKey);
  } catch {
    return null;
  }
}

function setStoredConsent(value) {
  try {
    window.localStorage.setItem(consentStorageKey, value);
  } catch {
    // Consent storage can be blocked; analytics still follows the current click choice.
  }
}

function loadScript(src, attributes = {}) {
  const script = document.createElement("script");
  script.async = true;
  script.src = src;
  Object.entries(attributes).forEach(([key, value]) => script.setAttribute(key, value));
  document.head.append(script);
}

function ensureGtag() {
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
  }
}

function googleConsentState(consentValue) {
  return {
    analytics_storage: consentValue === consentAccepted ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied"
  };
}

function setDefaultGoogleConsent() {
  if (!hasGa4()) return;
  ensureGtag();
  window.gtag("consent", "default", {
    ...googleConsentState(getStoredConsent()),
    wait_for_update: 500
  });
}

function updateGoogleConsent(consentValue) {
  if (!hasGa4()) return;
  ensureGtag();
  window.gtag("consent", "update", googleConsentState(consentValue));
}

function loadGa4() {
  if (!hasGa4() || ga4Loaded) return;
  ga4Loaded = true;
  ensureGtag();
  loadScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(analyticsConfig.ga4MeasurementId)}`);
  window.gtag("js", new Date());
  window.gtag("config", analyticsConfig.ga4MeasurementId, {
    anonymize_ip: true,
    send_page_view: true
  });
}

function loadClarity() {
  if (!hasClarity() || window.clarity) return;
  window.clarity = function clarity() {
    (window.clarity.q = window.clarity.q || []).push(arguments);
  };
  loadScript(`https://www.clarity.ms/tag/${encodeURIComponent(analyticsConfig.clarityProjectId)}`);
}

function ensureYandexMetrika() {
  if (typeof window.ym === "function") return;
  window.ym = function ym() {
    (window.ym.a = window.ym.a || []).push(arguments);
  };
  window.ym.l = Number(new Date());
}

function loadYandexMetrika() {
  if (!hasYandexMetrika() || yandexMetrikaLoaded) return;
  yandexMetrikaLoaded = true;
  window.dataLayer = window.dataLayer || [];
  ensureYandexMetrika();

  const tagUrl = `https://mc.yandex.ru/metrika/tag.js?id=${encodeURIComponent(analyticsConfig.yandexMetrikaId)}`;
  const alreadyLoaded = Array.from(document.scripts).some((script) => script.src === tagUrl);
  if (!alreadyLoaded) {
    loadScript(tagUrl);
  }

  window.ym(Number(analyticsConfig.yandexMetrikaId), "init", {
    ssr: true,
    webvisor: true,
    clickmap: true,
    ecommerce: "dataLayer",
    referrer: document.referrer,
    url: location.href,
    accurateTrackBounce: true,
    trackLinks: true
  });
}

function enableAnalytics() {
  if (analyticsReady) return;
  analyticsReady = true;
  loadGa4();
  loadYandexMetrika();
  loadClarity();
}

function trackEvent(eventName, params = {}) {
  if (getStoredConsent() !== consentAccepted) return;

  const eventParams = {
    event_category: "engagement",
    ...params
  };

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, eventParams);
  }

  if (typeof window.clarity === "function") {
    window.clarity("event", eventName);
  }

  if (hasYandexMetrika() && typeof window.ym === "function") {
    window.ym(Number(analyticsConfig.yandexMetrikaId), "reachGoal", eventName, eventParams);
  }
}

function labelForElement(element) {
  return element.dataset.trackLabel || element.getAttribute("href") || element.textContent.trim().replace(/\s+/g, " ");
}

function bindTrackedClicks() {
  document.addEventListener("click", (event) => {
    const target = event.target.closest("[data-track]");
    if (!target) return;

    trackEvent(target.dataset.track, {
      event_label: labelForElement(target),
      link_url: target.href || undefined,
      module_id: target.dataset.trackModule || undefined,
      module_type: target.dataset.trackType || undefined
    });
  });
}

function bindScrollDepth() {
  window.addEventListener("scroll", () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollable <= 0) return;

    const depth = Math.round((window.scrollY / scrollable) * 100);
    [50, 90].forEach((threshold) => {
      if (depth < threshold || trackedScrollDepths.has(threshold)) return;
      trackedScrollDepths.add(threshold);
      trackEvent(`scroll_${threshold}`, {
        event_label: `${threshold}%`
      });
    });
  }, { passive: true });
}

function removeConsentBanner() {
  document.querySelector(".analytics-consent")?.remove();
}

function renderConsentBanner() {
  if (getStoredConsent()) return;

  const copy = consentCopy[currentLanguage()];
  const banner = document.createElement("div");
  banner.className = "analytics-consent";
  banner.setAttribute("role", "region");
  banner.setAttribute("aria-label", "Analytics consent");
  banner.innerHTML = `
    <p>${copy.text}</p>
    <div class="analytics-consent-actions">
      <button class="button button-primary" type="button" data-analytics-accept>${copy.accept}</button>
      <button class="button button-secondary" type="button" data-analytics-reject>${copy.reject}</button>
    </div>
  `;

  banner.querySelector("[data-analytics-accept]").addEventListener("click", () => {
    setStoredConsent(consentAccepted);
    updateGoogleConsent(consentAccepted);
    enableAnalytics();
    trackEvent("analytics_consent_accept", {
      event_label: currentLanguage()
    });
    removeConsentBanner();
  });

  banner.querySelector("[data-analytics-reject]").addEventListener("click", () => {
    setStoredConsent(consentRejected);
    updateGoogleConsent(consentRejected);
    removeConsentBanner();
  });

  document.body.append(banner);
}

setDefaultGoogleConsent();
bindTrackedClicks();
bindScrollDepth();

if (getStoredConsent() === consentAccepted) {
  updateGoogleConsent(consentAccepted);
  enableAnalytics();
} else {
  renderConsentBanner();
}
