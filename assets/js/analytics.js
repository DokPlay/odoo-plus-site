const analyticsConfig = {
  // Fill these IDs to activate tracking. Empty values keep external analytics disabled.
  ga4MeasurementId: "",
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

function loadGa4() {
  if (!hasGa4() || window.gtag) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
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

function enableAnalytics() {
  if (analyticsReady) return;
  analyticsReady = true;
  loadGa4();
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
    enableAnalytics();
    trackEvent("analytics_consent_accept", {
      event_label: currentLanguage()
    });
    removeConsentBanner();
  });

  banner.querySelector("[data-analytics-reject]").addEventListener("click", () => {
    setStoredConsent(consentRejected);
    removeConsentBanner();
  });

  document.body.append(banner);
}

bindTrackedClicks();
bindScrollDepth();

if (getStoredConsent() === consentAccepted) {
  enableAnalytics();
} else {
  renderConsentBanner();
}
