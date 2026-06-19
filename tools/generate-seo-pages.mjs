import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const siteOrigin = "https://www.odoocustom.online";
const assetVersion = "20260619-pro-live-1";
const lastmod = "2026-06-19";

const externalLinks = {
  github: "https://github.com/DokPlay/odoo-community-plus-addons",
  githubModule:
    "https://github.com/DokPlay/odoo-community-plus-addons/tree/19/cp_module_health_checker",
  githubIssues: "https://github.com/DokPlay/odoo-community-plus-addons/issues",
  boosty: "https://boosty.to/dokplaytv",
  email: "mailto:serrggeejjj@gmail.com",
  emailSetup:
    "mailto:serrggeejjj@gmail.com?subject=Odoo%20custom%20module%20request",
  linkedin:
    "https://www.linkedin.com/in/%D1%81%D0%B5%D1%80%D0%B3%D0%B5%D0%B9-%D1%81%D0%BD%D0%B0%D1%82%D0%BA%D0%B8%D0%BD-85563a3ab/"
};

const homePath = (lang) => (lang === "ru" ? "/ru/" : "/");
const fullUrl = (path) => `${siteOrigin}${path}`;
const filePathForRoute = (route) => {
  if (route === "/") return "index.html";
  return `${route.replace(/^\/|\/$/g, "")}/index.html`;
};

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const jsonLd = (data) =>
  `<script type="application/ld+json">${JSON.stringify(data, null, 2)}</script>`;

const route = (en, ru) => ({ en, ru });

const servicePages = [
  {
    key: "custom-development",
    route: route(
      "/services/custom-odoo-module-development/",
      "/ru/services/razrabotka-moduley-odoo/"
    ),
    en: {
      title: "Custom Odoo Module Development for Odoo 19 Community",
      shortTitle: "Custom Odoo module development",
      description:
        "Private Odoo 19 Community modules for reports, workflows, integrations and database-specific business logic.",
      lead:
        "Build a module around the way your company actually works instead of changing Odoo core or relying on fragile manual steps.",
      cta: "Request module estimate",
      cluster: "custom Odoo module development",
      intro:
        "This service is for Odoo Community installations that need a focused private module: a workflow screen, a report, an approval step, a data-quality helper, or a small integration around an existing database.",
      tasksTitle: "Typical tasks",
      tasks: [
        "New Odoo models, menus, actions and access rules",
        "Workflow helpers for sales, invoices, inventory, CRM or administration",
        "Private reports and list views that match a real operating process",
        "Small integrations where a full connector would be unnecessary",
        "Safe adaptation of open-source modules from this project"
      ],
      includedTitle: "What the work includes",
      included: [
        "Scope review from your Odoo version, installed apps and required process",
        "Odoo-native module structure with manifest, security, views and model code",
        "Clear version focus for Odoo 19.0 Community, with 18.0 and 17.0 by request",
        "Delivery notes so the module can be installed, reviewed and updated later"
      ],
      processTitle: "Development process",
      process: [
        "You send the workflow, screenshots or a short screen recording.",
        "I confirm the data models, access rules and user path.",
        "The module is built as a separate add-on without editing Odoo core.",
        "You receive the module files, install notes and follow-up limitations."
      ],
      limitsTitle: "Limits",
      limits: [
        "No promise of Enterprise-only functionality in Community unless it is rebuilt as custom behavior.",
        "No direct production database changes without approval and backup planning.",
        "Legacy Odoo 16.0 work requires technical review first."
      ],
      faq: [
        [
          "Do you edit Odoo core files?",
          "No. The preferred approach is a separate custom module so updates and reviews remain manageable."
        ],
        [
          "Can the module stay private?",
          "Yes. Public modules and private customer modules should be separated from the start."
        ],
        [
          "What should I send first?",
          "Odoo version, installed apps, the required workflow, and screenshots of the screens involved."
        ]
      ]
    },
    ru: {
      title: "Разработка модулей Odoo 19 Community на заказ",
      shortTitle: "Разработка модулей Odoo",
      description:
        "Приватные модули Odoo 19 Community для отчетов, процессов, интеграций и бизнес-логики под конкретную базу.",
      lead:
        "Доработка делается отдельным модулем под реальный процесс компании, без правки ядра Odoo и хрупких ручных обходов.",
      cta: "Запросить оценку модуля",
      cluster: "разработка модулей Odoo",
      intro:
        "Услуга подходит для Odoo Community, когда нужен приватный модуль: экран рабочего процесса, отчет, согласование, проверка данных или небольшая интеграция вокруг существующей базы.",
      tasksTitle: "Типовые задачи",
      tasks: [
        "Новые модели, меню, действия и права доступа Odoo",
        "Помощники процессов для продаж, счетов, склада, CRM или администрирования",
        "Приватные отчеты и списки под реальную операционную работу",
        "Небольшие интеграции, где полноценный коннектор избыточен",
        "Безопасная адаптация open-source модулей этого проекта"
      ],
      includedTitle: "Что входит",
      included: [
        "Разбор объема по версии Odoo, установленным приложениям и нужному процессу",
        "Odoo-native структура модуля: manifest, security, views и model code",
        "Фокус на Odoo 19.0 Community, версии 18.0 и 17.0 обсуждаются отдельно",
        "Заметки по установке, проверке и дальнейшему обновлению"
      ],
      processTitle: "Процесс разработки",
      process: [
        "Вы присылаете процесс, скриншоты или короткую запись экрана.",
        "Я подтверждаю модели данных, права доступа и путь пользователя.",
        "Модуль собирается отдельным аддоном без изменения ядра Odoo.",
        "Вы получаете файлы модуля, инструкцию установки и ограничения."
      ],
      limitsTitle: "Ограничения",
      limits: [
        "Enterprise-only функциональность не обещается в Community, если ее нужно отдельно не реализовывать.",
        "Никаких прямых изменений production-базы без согласования и плана бэкапа.",
        "Работа с legacy Odoo 16.0 только после технического анализа."
      ],
      faq: [
        [
          "Вы правите ядро Odoo?",
          "Нет. Базовый подход - отдельный модуль, чтобы обновления и ревью оставались управляемыми."
        ],
        [
          "Модуль может остаться приватным?",
          "Да. Публичные модули и приватные клиентские доработки лучше разделять сразу."
        ],
        [
          "Что прислать для оценки?",
          "Версию Odoo, установленные приложения, нужный процесс и скриншоты затронутых экранов."
        ]
      ]
    }
  },
  {
    key: "setup",
    route: route("/services/odoo-community-setup/", "/ru/services/nastroyka-odoo-community/"),
    en: {
      title: "Odoo Community Setup Services",
      shortTitle: "Odoo Community setup",
      description:
        "Odoo 19 Community setup, module installation, environment checks and practical configuration support.",
      lead:
        "Get a stable Odoo Community environment with the right add-ons, clear settings and fewer surprises during first use.",
      cta: "Request setup help",
      cluster: "Odoo Community setup",
      intro:
        "Setup work focuses on making the environment understandable and maintainable: installed apps, add-on paths, module updates, basic configuration and the first practical checks.",
      tasksTitle: "Setup tasks",
      tasks: [
        "Odoo Community environment review",
        "Custom add-on path and module installation checks",
        "Apps list update and module visibility troubleshooting",
        "Basic workflow configuration for a small team",
        "Notes for backup, update and maintenance routines"
      ],
      includedTitle: "What you receive",
      included: [
        "A short technical scope before work starts",
        "Practical configuration changes with clear boundaries",
        "Install or update notes for modules used in the setup",
        "A list of risks that should not be handled blindly in production"
      ],
      processTitle: "Setup process",
      process: [
        "Confirm the Odoo version, hosting type and installed apps.",
        "Review the add-on paths and current module state.",
        "Apply agreed configuration or module installation steps.",
        "Document what changed and what should be checked next."
      ],
      limitsTitle: "Limits",
      limits: [
        "Server administration and hosting access are separate from module configuration.",
        "Database migration is handled as a separate review.",
        "Accounting localization or legal compliance should be checked with a qualified local specialist."
      ],
      faq: [
        ["Can you install free modules?", "Yes, when they are compatible with the target Odoo version."],
        ["Do you need admin access?", "Usually yes for setup work, but access should be limited to the agreed environment."],
        ["Is this for Odoo Enterprise?", "The site focuses on Odoo Community. Enterprise cases need separate review."]
      ]
    },
    ru: {
      title: "Настройка Odoo Community",
      shortTitle: "Настройка Odoo Community",
      description:
        "Настройка Odoo 19 Community, установка модулей, проверка окружения и практичная конфигурация.",
      lead:
        "Стабильное окружение Odoo Community с понятными модулями, настройками и меньшим количеством сюрпризов при запуске.",
      cta: "Запросить настройку",
      cluster: "настройка Odoo Community",
      intro:
        "Настройка фокусируется на понятности и поддерживаемости окружения: установленные приложения, пути аддонов, обновление модулей, базовая конфигурация и первые практические проверки.",
      tasksTitle: "Задачи настройки",
      tasks: [
        "Проверка окружения Odoo Community",
        "Проверка пути кастомных аддонов и установки модулей",
        "Обновление списка приложений и диагностика видимости модулей",
        "Базовая настройка рабочих процессов небольшой команды",
        "Заметки по бэкапам, обновлениям и обслуживанию"
      ],
      includedTitle: "Что вы получаете",
      included: [
        "Короткий технический объем работ до старта",
        "Практичные изменения конфигурации в согласованных границах",
        "Заметки по установке или обновлению задействованных модулей",
        "Список рисков, которые нельзя делать вслепую в production"
      ],
      processTitle: "Процесс настройки",
      process: [
        "Подтверждаем версию Odoo, тип хостинга и установленные приложения.",
        "Проверяем пути аддонов и текущее состояние модулей.",
        "Выполняем согласованные шаги настройки или установки.",
        "Фиксируем изменения и следующие проверки."
      ],
      limitsTitle: "Ограничения",
      limits: [
        "Администрирование сервера и доступ к хостингу отделены от настройки модулей.",
        "Миграция базы оформляется как отдельный аудит.",
        "Бухгалтерскую локализацию и юридические требования должен проверять профильный специалист."
      ],
      faq: [
        ["Можно установить бесплатные модули?", "Да, если они совместимы с целевой версией Odoo."],
        ["Нужен доступ администратора?", "Обычно да, но только к согласованному окружению."],
        ["Это для Odoo Enterprise?", "Сайт сфокусирован на Odoo Community. Enterprise-кейсы требуют отдельного анализа."]
      ]
    }
  },
  {
    key: "migration",
    route: route("/services/odoo-migration-review/", "/ru/services/audit-migracii-odoo/"),
    en: {
      title: "Odoo Migration Review for Custom Modules",
      shortTitle: "Odoo migration review",
      description:
        "Technical review for Odoo custom modules before upgrading from Odoo 18 to Odoo 19 or moving a database.",
      lead:
        "Before an upgrade, find the module, dependency and data risks that are expensive to discover during the actual migration.",
      cta: "Request migration review",
      cluster: "Odoo 18 to 19 module migration",
      intro:
        "A migration review is an analysis step, not a blind production change. It looks at installed modules, custom code, dependencies, views, manifests and likely upgrade blockers.",
      tasksTitle: "Review focus",
      tasks: [
        "Installed module inventory and dependency visibility",
        "Manifest and version compatibility checks",
        "Custom module risk notes for Odoo 19",
        "Obvious view, model and security changes that may break",
        "Prioritized list of work before a full migration"
      ],
      includedTitle: "Deliverable",
      included: [
        "A readable issue list grouped by severity",
        "A short recommendation for next steps",
        "Clear separation between quick fixes, risky refactors and unknowns",
        "No production migration unless separately approved"
      ],
      processTitle: "Review process",
      process: [
        "Collect the target Odoo version and module list.",
        "Inspect custom modules and known dependency risks.",
        "Flag likely Odoo 19 compatibility issues.",
        "Deliver a migration-readiness summary."
      ],
      limitsTitle: "Limits",
      limits: [
        "The review does not guarantee a full successful migration by itself.",
        "Deep data migration, accounting reconciliation and production cutover are separate tasks.",
        "Third-party proprietary modules can only be assessed from the code or documentation you are allowed to share."
      ],
      faq: [
        ["Is this the same as migration implementation?", "No. This page is for the analysis stage before implementation."],
        ["Can you review only custom modules?", "Yes. That is often the safest first step."],
        ["Do you need a database dump?", "Usually the first review can start from module code and metadata; database access is a separate decision."]
      ]
    },
    ru: {
      title: "Аудит миграции Odoo и кастомных модулей",
      shortTitle: "Аудит миграции Odoo",
      description:
        "Технический аудит кастомных модулей Odoo перед обновлением с Odoo 18 на Odoo 19 или переносом базы.",
      lead:
        "До обновления лучше найти риски модулей, зависимостей и данных, чем обнаружить их в момент реальной миграции.",
      cta: "Запросить аудит миграции",
      cluster: "миграция Odoo 18 на 19",
      intro:
        "Аудит миграции - это этап анализа, а не слепое изменение production. Проверяются установленные модули, кастомный код, зависимости, views, manifests и вероятные блокеры обновления.",
      tasksTitle: "Фокус аудита",
      tasks: [
        "Инвентаризация установленных модулей и зависимостей",
        "Проверка manifest и совместимости версий",
        "Риски кастомных модулей при переходе на Odoo 19",
        "Очевидные изменения views, models и security, которые могут сломаться",
        "Приоритетный список работ до полноценной миграции"
      ],
      includedTitle: "Результат",
      included: [
        "Понятный список проблем по критичности",
        "Короткая рекомендация по следующим шагам",
        "Разделение быстрых правок, рискованных рефакторингов и неизвестных",
        "Без production-миграции, если она отдельно не согласована"
      ],
      processTitle: "Процесс аудита",
      process: [
        "Собираем целевую версию Odoo и список модулей.",
        "Проверяем кастомные модули и известные риски зависимостей.",
        "Фиксируем вероятные проблемы совместимости с Odoo 19.",
        "Передаем итог по готовности к миграции."
      ],
      limitsTitle: "Ограничения",
      limits: [
        "Сам аудит не гарантирует полноценную успешную миграцию.",
        "Глубокая миграция данных, сверка учета и production-cutover - отдельные задачи.",
        "Сторонние закрытые модули можно оценивать только по коду или документации, которыми вы вправе делиться."
      ],
      faq: [
        ["Это то же самое, что миграция?", "Нет. Эта страница про этап анализа до реализации."],
        ["Можно проверить только кастомные модули?", "Да. Часто это самый безопасный первый шаг."],
        ["Нужна выгрузка базы?", "Первый обзор обычно можно начать с кода модулей и метаданных; доступ к базе обсуждается отдельно."]
      ]
    }
  },
  {
    key: "reports",
    route: route("/services/custom-odoo-reports/", "/ru/services/otchety-odoo-na-zakaz/"),
    en: {
      title: "Custom Odoo Reports for Odoo Community",
      shortTitle: "Custom Odoo reports",
      description:
        "Custom Odoo reports for sales, invoices, inventory and accounting visibility in Odoo Community installations.",
      lead:
        "Turn repeated manual checks into a report that answers the business question directly inside Odoo.",
      cta: "Request report estimate",
      cluster: "custom Odoo reports",
      intro:
        "Report work is useful when standard Odoo screens contain the data but not the answer. The goal is a compact view, export or dashboard-like page that supports daily decisions.",
      tasksTitle: "Report examples",
      tasks: [
        "Invoice status and overdue follow-up reports",
        "Sales summaries for managers and operators",
        "Inventory visibility and product margin checks",
        "Accounting-oriented operational summaries",
        "Export-friendly lists for recurring spreadsheet work"
      ],
      includedTitle: "What the report includes",
      included: [
        "Metric definition and data-source review",
        "Odoo list, pivot, graph, wizard or custom page depending on the task",
        "Access rights aligned with the users who should see the report",
        "Notes for limitations, exclusions and future improvements"
      ],
      processTitle: "Report process",
      process: [
        "Confirm the exact question the report must answer.",
        "Identify the Odoo models and fields involved.",
        "Build the report as a module or a safe module extension.",
        "Review the result with sample records before production use."
      ],
      limitsTitle: "Limits",
      limits: [
        "A report is not a replacement for correcting broken source data.",
        "Accounting figures may require local accounting validation.",
        "Heavy BI dashboards should be scoped separately."
      ],
      faq: [
        ["Can reports export to XLSX?", "Yes, when the data shape and user workflow make export useful."],
        ["Can you use existing Odoo views?", "Yes. Native views are preferred when they solve the task cleanly."],
        ["What examples should I send?", "Send the current manual spreadsheet or screenshots of the data you check now."]
      ]
    },
    ru: {
      title: "Отчеты Odoo на заказ для Odoo Community",
      shortTitle: "Отчеты Odoo на заказ",
      description:
        "Кастомные отчеты Odoo по продажам, счетам, складу и операционному учету в Odoo Community.",
      lead:
        "Повторяющиеся ручные проверки можно превратить в отчет, который отвечает на бизнес-вопрос прямо в Odoo.",
      cta: "Запросить оценку отчета",
      cluster: "отчеты Odoo на заказ",
      intro:
        "Разработка отчетов полезна, когда стандартные экраны Odoo содержат данные, но не дают готового ответа. Цель - компактный view, export или dashboard-like страница для ежедневных решений.",
      tasksTitle: "Примеры отчетов",
      tasks: [
        "Статусы счетов и контроль просрочек",
        "Сводки продаж для руководителей и операторов",
        "Видимость склада и проверка маржи товаров",
        "Операционные сводки для учета",
        "Списки для регулярной выгрузки в таблицы"
      ],
      includedTitle: "Что входит в отчет",
      included: [
        "Определение метрик и проверка источников данных",
        "Odoo list, pivot, graph, wizard или custom page по задаче",
        "Права доступа для пользователей, которым нужен отчет",
        "Заметки по ограничениям, исключениям и будущим улучшениям"
      ],
      processTitle: "Процесс",
      process: [
        "Фиксируем точный вопрос, на который должен отвечать отчет.",
        "Определяем модели и поля Odoo.",
        "Собираем отчет как модуль или безопасное расширение модуля.",
        "Проверяем результат на примерах до использования в production."
      ],
      limitsTitle: "Ограничения",
      limits: [
        "Отчет не заменяет исправление некорректных исходных данных.",
        "Бухгалтерские показатели могут требовать проверки локальным специалистом.",
        "Тяжелые BI-панели лучше оценивать отдельным объемом."
      ],
      faq: [
        ["Можно выгружать XLSX?", "Да, если структура данных и процесс пользователя делают экспорт полезным."],
        ["Можно использовать стандартные Odoo views?", "Да. Нативные views предпочтительны, если чисто решают задачу."],
        ["Какие примеры прислать?", "Текущую ручную таблицу или скриншоты данных, которые сейчас проверяются."]
      ]
    }
  }
];

const modulePage = {
  route: route("/modules/module-health-checker/", "/ru/modules/module-health-checker/"),
  technicalName: "cp_module_health_checker",
  license: "LGPL-3",
  version: "19.0.1.0.0",
  en: {
    title: "Module Health Checker for Odoo 19 Community",
    shortTitle: "Module Health Checker",
    description:
      "Free Odoo 19 Community addon for checking installed modules, metadata, licenses, versions and dependency issues.",
    lead:
      "A free module that gives administrators and integrators a quick health scan of installed Odoo Community modules.",
    badge: "Free addon",
    cta: "View module on GitHub",
    doesTitle: "What the module does",
    does: [
      "Scans installed modules in Odoo 19 Community",
      "Shows metadata, versions, licenses and dependency signals",
      "Creates persistent scan records and issue lines",
      "Separates informational notes from warning and critical states",
      "Keeps the free scope focused on module health, not automated migration"
    ],
    audienceTitle: "Who it helps",
    audience: [
      "Odoo Community administrators",
      "Integrators reviewing a customer database",
      "Developers checking custom modules before support work",
      "Small teams that need a simple module inventory"
    ],
    installTitle: "Installation",
    installIntro:
      "Copy the add-on into your Odoo custom addons path, update the apps list and install CP Module Health Checker from the Apps menu.",
    installCode:
      "git clone https://github.com/DokPlay/odoo-community-plus-addons.git\n# Copy cp_module_health_checker to your Odoo 19 addons path\n# Update Apps List, then install CP Module Health Checker",
    limitsTitle: "Known limitations",
    limits: [
      "It does not migrate modules automatically.",
      "It does not scan arbitrary GitHub repositories.",
      "It does not replace manual code review for complex custom modules.",
      "It is built for Odoo 19 Community first."
    ],
    changelogTitle: "Changelog",
    changelog: [
      "19.0.1.0.0: initial free release with module health scans and persistent issue lines."
    ],
    facts: [
      ["Technical name", "cp_module_health_checker"],
      ["Supported version", "Odoo 19.0 Community"],
      ["License", "LGPL-3"],
      ["Author", "DokPlay"],
      ["Last updated", "June 19, 2026"]
    ]
  },
  ru: {
    title: "Проверка модулей Odoo 19 Community",
    shortTitle: "Проверка модулей",
    description:
      "Бесплатный модуль Odoo 19 Community для проверки установленных модулей, метаданных, лицензий, версий и зависимостей.",
    lead:
      "Бесплатный модуль для администраторов и интеграторов, который быстро показывает состояние установленных модулей Odoo Community.",
    badge: "Бесплатный модуль",
    cta: "Открыть модуль на GitHub",
    doesTitle: "Что делает модуль",
    does: [
      "Сканирует установленные модули Odoo 19 Community",
      "Показывает метаданные, версии, лицензии и сигналы по зависимостям",
      "Создает записи сканов и строки проблем",
      "Разделяет информационные заметки, предупреждения и критические состояния",
      "Держит бесплатный scope на проверке здоровья модулей, без автоматической миграции"
    ],
    audienceTitle: "Кому полезно",
    audience: [
      "Администраторам Odoo Community",
      "Интеграторам при ревью клиентской базы",
      "Разработчикам перед поддержкой кастомных модулей",
      "Небольшим командам, которым нужна простая инвентаризация модулей"
    ],
    installTitle: "Установка",
    installIntro:
      "Скопируйте аддон в custom addons path Odoo, обновите список приложений и установите CP Module Health Checker из меню Apps.",
    installCode:
      "git clone https://github.com/DokPlay/odoo-community-plus-addons.git\n# Скопируйте cp_module_health_checker в addons path Odoo 19\n# Обновите список приложений и установите CP Module Health Checker",
    limitsTitle: "Известные ограничения",
    limits: [
      "Модуль не выполняет миграцию автоматически.",
      "Модуль не сканирует произвольные GitHub-репозитории.",
      "Модуль не заменяет ручное ревью сложных кастомных модулей.",
      "Основной фокус - Odoo 19 Community."
    ],
    changelogTitle: "История изменений",
    changelog: [
      "19.0.1.0.0: первый бесплатный релиз со сканами здоровья модулей и строками проблем."
    ],
    facts: [
      ["Техническое имя", "cp_module_health_checker"],
      ["Поддерживаемая версия", "Odoo 19.0 Community"],
      ["Лицензия", "LGPL-3"],
      ["Автор", "DokPlay"],
      ["Обновлено", "19 июня 2026"]
    ]
  }
};

const articlePages = [
  {
    key: "install-addon",
    route: route(
      "/blog/how-to-install-custom-addon-odoo-19/",
      "/ru/blog/kak-ustanovit-modul-odoo-19/"
    ),
    en: {
      title: "How to Install Custom Addons in Odoo 19 Community",
      shortTitle: "Install custom addons",
      description:
        "A practical checklist for installing a custom Odoo 19 Community addon, updating the apps list and checking common mistakes.",
      lead:
        "Custom add-ons are safest when they are installed as separate modules in a known addons path, not copied into Odoo core.",
      sections: [
        [
          "Before you start",
          [
            "Confirm the target Odoo version and the module's supported version.",
            "Make a backup if you are working with a real database.",
            "Check that the module folder contains a valid __manifest__.py file.",
            "Keep third-party and private modules in a custom addons path."
          ]
        ],
        [
          "Basic installation flow",
          [
            "Copy the module folder into the custom addons path.",
            "Restart Odoo if the environment does not watch file changes.",
            "Enable developer mode and update the Apps List.",
            "Search for the module by its display name or technical name.",
            "Install the module and review the first screen it adds."
          ]
        ],
        [
          "Common mistakes",
          [
            "The folder name does not match the expected technical module name.",
            "The addons path in the Odoo config does not include the folder location.",
            "A dependency listed in the manifest is missing.",
            "The module was copied inside another folder, so Odoo cannot see the manifest."
          ]
        ]
      ],
      cta: "Need help with installation? Send your Odoo version and module name."
    },
    ru: {
      title: "Как установить кастомный модуль в Odoo 19 Community",
      shortTitle: "Установка модуля",
      description:
        "Практический чек-лист установки кастомного модуля Odoo 19 Community, обновления списка приложений и проверки типовых ошибок.",
      lead:
        "Кастомные аддоны безопаснее ставить отдельными модулями в понятный addons path, а не копировать внутрь ядра Odoo.",
      sections: [
        [
          "Перед началом",
          [
            "Подтвердите целевую версию Odoo и поддерживаемую версию модуля.",
            "Сделайте бэкап, если работаете с реальной базой.",
            "Проверьте, что в папке модуля есть корректный __manifest__.py.",
            "Храните сторонние и приватные модули в custom addons path."
          ]
        ],
        [
          "Базовый сценарий установки",
          [
            "Скопируйте папку модуля в custom addons path.",
            "Перезапустите Odoo, если окружение не подхватывает изменения файлов.",
            "Включите режим разработчика и обновите список приложений.",
            "Найдите модуль по названию или техническому имени.",
            "Установите модуль и проверьте первый экран, который он добавляет."
          ]
        ],
        [
          "Типовые ошибки",
          [
            "Имя папки не совпадает с ожидаемым техническим именем модуля.",
            "В конфиге Odoo не указан путь к папке аддонов.",
            "Не установлена зависимость из manifest.",
            "Модуль скопирован внутрь лишней папки, и Odoo не видит manifest."
          ]
        ]
      ],
      cta: "Нужна помощь с установкой? Пришлите версию Odoo и имя модуля."
    }
  },
  {
    key: "update-apps",
    route: route("/blog/how-to-update-apps-list-odoo-19/", "/ru/blog/kak-obnovit-spisok-prilozheniy-odoo-19/"),
    en: {
      title: "How to Update the Apps List in Odoo 19",
      shortTitle: "Update Apps List",
      description:
        "How to make Odoo 19 detect a new custom module after copying it into an addons path.",
      lead:
        "If a module is in the right folder but missing from Apps, the Apps List and addons path are the first places to check.",
      sections: [
        [
          "What the update does",
          [
            "Odoo scans configured addons paths.",
            "It reads manifests and updates module metadata in the database.",
            "It does not install every discovered module automatically."
          ]
        ],
        [
          "Checklist",
          [
            "Enable developer mode.",
            "Open Apps and update the Apps List.",
            "Clear the Apps search filters if the module is still hidden.",
            "Search by technical name if the display name is different.",
            "Check server logs if the module manifest has a syntax problem."
          ]
        ],
        [
          "When it still does not appear",
          [
            "Confirm the custom addons path is in odoo.conf.",
            "Confirm the manifest file is directly inside the module folder.",
            "Check dependencies and XML syntax before trying again."
          ]
        ]
      ],
      cta: "If the module is still invisible, send the addons path and module folder structure."
    },
    ru: {
      title: "Как обновить список приложений Odoo 19",
      shortTitle: "Обновление списка приложений",
      description:
        "Как заставить Odoo 19 увидеть новый кастомный модуль после копирования в addons path.",
      lead:
        "Если модуль лежит в правильной папке, но не виден в Apps, сначала проверяются Apps List и addons path.",
      sections: [
        [
          "Что делает обновление",
          [
            "Odoo сканирует настроенные addons paths.",
            "Читает manifests и обновляет метаданные модулей в базе.",
            "Не устанавливает все найденные модули автоматически."
          ]
        ],
        [
          "Чек-лист",
          [
            "Включите режим разработчика.",
            "Откройте Apps и обновите Apps List.",
            "Снимите фильтры поиска, если модуль скрыт.",
            "Ищите по техническому имени, если display name отличается.",
            "Проверьте server logs, если в manifest синтаксическая ошибка."
          ]
        ],
        [
          "Если модуль все равно не появился",
          [
            "Убедитесь, что custom addons path указан в odoo.conf.",
            "Проверьте, что manifest лежит прямо внутри папки модуля.",
            "Проверьте зависимости и XML-синтаксис перед повторной попыткой."
          ]
        ]
      ],
      cta: "Если модуль всё еще не виден, пришлите addons path и структуру папки модуля."
    }
  },
  {
    key: "manifest-checklist",
    route: route("/blog/odoo-19-module-manifest-checklist/", "/ru/blog/kak-proverit-manifest-modulya-odoo/"),
    en: {
      title: "Odoo 19 Module Manifest Checklist",
      shortTitle: "Manifest checklist",
      description:
        "A checklist for Odoo 19 __manifest__.py files: dependencies, data files, license, version and website fields.",
      lead:
        "The manifest is small, but it controls how Odoo discovers, installs and describes a module.",
      sections: [
        [
          "Required basics",
          [
            "Use a clear name and summary.",
            "Set the Odoo-versioned module version.",
            "Declare only dependencies that are really needed.",
            "Use a correct license value.",
            "Keep data files ordered by load requirements."
          ]
        ],
        [
          "Useful fields",
          [
            "website should point to the exact module page when one exists.",
            "author should be consistent across the project.",
            "application and installable should match how the module is intended to appear.",
            "assets should be used only when the module actually ships web assets."
          ]
        ],
        [
          "Review questions",
          [
            "Can the module install on a clean Odoo 19 Community database?",
            "Are security files loaded before views that rely on access?",
            "Are demo files separated from production data?"
          ]
        ]
      ],
      cta: "The free Module Health Checker helps make module metadata easier to review."
    },
    ru: {
      title: "Как проверить manifest модуля Odoo 19",
      shortTitle: "Чек-лист manifest",
      description:
        "Чек-лист __manifest__.py для Odoo 19: зависимости, data files, лицензия, версия и website.",
      lead:
        "Manifest маленький, но именно он управляет обнаружением, установкой и описанием модуля в Odoo.",
      sections: [
        [
          "Обязательная база",
          [
            "Используйте понятное name и summary.",
            "Укажите версию модуля в формате под Odoo.",
            "Объявляйте только реально нужные зависимости.",
            "Используйте корректное значение license.",
            "Расставляйте data files в порядке загрузки."
          ]
        ],
        [
          "Полезные поля",
          [
            "website лучше вести на точную страницу модуля, если она есть.",
            "author должен быть последовательным по проекту.",
            "application и installable должны отражать способ использования модуля.",
            "assets нужны только если модуль действительно поставляет web-ассеты."
          ]
        ],
        [
          "Вопросы для ревью",
          [
            "Устанавливается ли модуль на чистую базу Odoo 19 Community?",
            "Загружаются ли security files до views, которым нужны права?",
            "Отделены ли demo files от production data?"
          ]
        ]
      ],
      cta: "Бесплатный Module Health Checker помогает быстрее проверять метаданные модулей."
    }
  },
  {
    key: "missing-deps",
    route: route("/blog/how-to-fix-missing-module-dependencies-in-odoo/", "/ru/blog/chto-delat-s-otsutstvuyuschey-zavisimostyu-modulya-odoo/"),
    en: {
      title: "How to Fix Missing Module Dependencies in Odoo",
      shortTitle: "Missing dependencies",
      description:
        "What to check when Odoo says that a module dependency is missing or cannot be installed.",
      lead:
        "A missing dependency is usually a path, version or manifest problem, not a reason to edit the module blindly.",
      sections: [
        [
          "Start with the manifest",
          [
            "Open __manifest__.py and read the depends list.",
            "Confirm every dependency exists in the configured addons paths.",
            "Check whether the dependency is Community, Enterprise, custom or third-party."
          ]
        ],
        [
          "Check the environment",
          [
            "Update the Apps List after adding missing modules.",
            "Confirm the module folder is not nested too deeply.",
            "Read the Odoo log for the first real error, not the last cascade."
          ]
        ],
        [
          "Avoid unsafe shortcuts",
          [
            "Do not delete a dependency from the manifest unless you know the code no longer uses it.",
            "Do not copy paid or proprietary modules into a project without rights.",
            "Do not install modules on production without backup planning."
          ]
        ]
      ],
      cta: "For Odoo 19 Community, keep dependencies free and explicit whenever possible."
    },
    ru: {
      title: "Что делать с отсутствующей зависимостью модуля Odoo",
      shortTitle: "Отсутствующие зависимости",
      description:
        "Что проверить, если Odoo сообщает, что зависимость модуля отсутствует или не может быть установлена.",
      lead:
        "Отсутствующая зависимость обычно связана с путем, версией или manifest, а не с необходимостью вслепую править модуль.",
      sections: [
        [
          "Начните с manifest",
          [
            "Откройте __manifest__.py и прочитайте depends.",
            "Проверьте, что каждая зависимость есть в настроенных addons paths.",
            "Определите тип зависимости: Community, Enterprise, custom или third-party."
          ]
        ],
        [
          "Проверьте окружение",
          [
            "Обновите Apps List после добавления недостающих модулей.",
            "Убедитесь, что папка модуля не вложена слишком глубоко.",
            "Читайте первый настоящий error в логе Odoo, а не последний каскадный."
          ]
        ],
        [
          "Избегайте небезопасных сокращений",
          [
            "Не удаляйте зависимость из manifest, если не знаете, что код ее больше не использует.",
            "Не копируйте платные или закрытые модули без прав.",
            "Не устанавливайте модули на production без плана бэкапа."
          ]
        ]
      ],
      cta: "Для Odoo 19 Community лучше держать зависимости бесплатными и явно указанными."
    }
  },
  {
    key: "migrate-18-19",
    route: route("/blog/how-to-migrate-a-custom-module-from-odoo-18-to-19/", "/ru/blog/kak-perenesti-modul-s-odoo-18-na-19/"),
    en: {
      title: "How to Migrate a Custom Module from Odoo 18 to 19",
      shortTitle: "Migrate 18 to 19",
      description:
        "A practical review path before adapting a custom Odoo 18 module for Odoo 19 Community.",
      lead:
        "Migration starts with reading the module and its dependencies, not by changing version numbers and hoping the install works.",
      sections: [
        [
          "Review first",
          [
            "List the module dependencies and check whether they exist in Odoo 19.",
            "Inspect models, fields, XML views, security and scheduled actions.",
            "Check custom JavaScript or assets separately."
          ]
        ],
        [
          "Adapt carefully",
          [
            "Update the manifest only after compatibility work is understood.",
            "Fix removed fields or changed model names with explicit code changes.",
            "Test installation on a clean Odoo 19 database before touching production data."
          ]
        ],
        [
          "What to document",
          [
            "Changed dependencies.",
            "Views or fields that were replaced.",
            "Known limitations that still require user acceptance."
          ]
        ]
      ],
      cta: "A migration review can turn unknown risk into a scoped task list."
    },
    ru: {
      title: "Как перенести кастомный модуль с Odoo 18 на Odoo 19",
      shortTitle: "Миграция 18 на 19",
      description:
        "Практический путь ревью перед адаптацией кастомного модуля Odoo 18 для Odoo 19 Community.",
      lead:
        "Миграция начинается с чтения модуля и зависимостей, а не с замены номера версии в надежде, что установка пройдет.",
      sections: [
        [
          "Сначала ревью",
          [
            "Составьте список зависимостей и проверьте их наличие в Odoo 19.",
            "Проверьте models, fields, XML views, security и scheduled actions.",
            "Кастомный JavaScript и assets проверяйте отдельно."
          ]
        ],
        [
          "Адаптируйте аккуратно",
          [
            "Обновляйте manifest только после понимания совместимости.",
            "Исправляйте удаленные поля или измененные модели явными правками кода.",
            "Проверяйте установку на чистой базе Odoo 19 до production-данных."
          ]
        ],
        [
          "Что документировать",
          [
            "Измененные зависимости.",
            "Views или fields, которые были заменены.",
            "Известные ограничения, которые требуют подтверждения пользователя."
          ]
        ]
      ],
      cta: "Аудит миграции превращает неизвестный риск в понятный список задач."
    }
  },
  {
    key: "module-vs-core",
    route: route("/blog/odoo-community-customization-module-vs-core-modification/", "/ru/blog/pochemu-odoo-luchshe-dorabatyvat-modulyami-a-ne-menyat-yadro/"),
    en: {
      title: "Odoo Community Customization: Module vs Core Modification",
      shortTitle: "Module vs core",
      description:
        "Why Odoo Community customizations should usually be delivered as separate modules instead of changing Odoo core files.",
      lead:
        "A separate module keeps the business change visible, reviewable and easier to remove or upgrade later.",
      sections: [
        [
          "Why modules are safer",
          [
            "They keep custom behavior outside the Odoo source tree.",
            "They make installation and rollback easier to understand.",
            "They can declare dependencies and access rules explicitly."
          ]
        ],
        [
          "When core edits become risky",
          [
            "Updates may overwrite changes.",
            "Future developers may not know what was changed.",
            "Testing becomes harder because the customization is hidden inside standard code."
          ]
        ],
        [
          "Better customization pattern",
          [
            "Use inheritance for models and views.",
            "Keep data and security files inside the module.",
            "Document the business reason in the module notes or README."
          ]
        ]
      ],
      cta: "For most Odoo Community improvements, start with a clean custom module."
    },
    ru: {
      title: "Почему Odoo лучше дорабатывать модулями, а не менять ядро",
      shortTitle: "Модуль или правка ядра",
      description:
        "Почему доработки Odoo Community обычно лучше оформлять отдельными модулями, а не изменять файлы ядра Odoo.",
      lead:
        "Отдельный модуль делает бизнес-изменение видимым, проверяемым и более простым для удаления или обновления.",
      sections: [
        [
          "Почему модули безопаснее",
          [
            "Кастомное поведение остается вне исходников Odoo.",
            "Установку и откат проще понять.",
            "Зависимости и права доступа объявляются явно."
          ]
        ],
        [
          "Почему правки ядра рискованны",
          [
            "Обновления могут перезаписать изменения.",
            "Следующий разработчик может не знать, что именно было изменено.",
            "Тестирование сложнее, потому что доработка спрятана внутри стандартного кода."
          ]
        ],
        [
          "Лучший паттерн доработки",
          [
            "Используйте inheritance для models и views.",
            "Держите data и security files внутри модуля.",
            "Документируйте бизнес-причину в notes или README модуля."
          ]
        ]
      ],
      cta: "Для большинства улучшений Odoo Community стоит начинать с чистого кастомного модуля."
    }
  }
];

const catalogItems = [
  ["free", "cp_module_health_checker", "Module Health Checker", "Проверка модулей", "Ready", "Готово", "Free", "Бесплатно", "Odoo 19.0 Community", "Check installed Odoo modules, metadata, licenses and dependency issues.", "Проверка установленных модулей, метаданных, лицензий и проблем зависимостей."],
  ["free", "cp_invoice_status_report", "Invoice Status Report", "Отчет по статусам счетов", "Coming soon", "Скоро", "Free", "Бесплатно", "Odoo 19.0 Community", "Quick invoice status visibility for finance and operations follow-up.", "Быстрая видимость статусов счетов для финансового и операционного контроля."],
  ["free", "cp_simple_sales_report", "Simple Sales Report", "Простой отчет продаж", "Coming soon", "Скоро", "Free", "Бесплатно", "Odoo 19.0 Community", "Lightweight sales summaries for day-to-day Community Edition use.", "Легкие сводки продаж для ежедневной работы в Community Edition."],
  ["free", "cp_duplicate_checker", "Duplicate Finder", "Поиск дублей", "Coming soon", "Скоро", "Free", "Бесплатно", "Odoo 19.0 Community", "Find potential duplicate partners, products and operational records.", "Поиск возможных дублей партнеров, товаров и операционных записей."],
  ["free", "cp_export_xlsx_lite", "Export XLSX Lite", "Экспорт XLSX Lite", "Coming soon", "Скоро", "Free", "Бесплатно", "Odoo 19.0 Community", "Simple XLSX exports for operational lists and lightweight reports.", "Простые XLSX-выгрузки для рабочих списков и легких отчетов."],
  ["pro", "cp_dashboard_pro", "Dashboard Pro", "Панель управления Pro", "Coming soon", "Скоро", "Pro", "Pro", "Odoo 19.0 Community", "Clean sales, invoices and inventory dashboards for Odoo 19 Community.", "Аккуратные панели продаж, счетов и склада для Odoo 19 Community."],
  ["pro", "cp_migration_assistant_pro", "Migration Assistant Pro", "Помощник миграции Pro", "Available", "Доступен", "Pro", "Pro", "Odoo 19.0 Community", "Migration readiness review before upgrading or moving an Odoo database.", "Проверка готовности перед обновлением или переносом базы Odoo."],
  ["service", "custom_module_development", "Custom module development", "Разработка кастомных модулей", "Available by request", "По запросу", "Service", "Услуга", "Odoo 17.0-19.0", "Private Odoo modules for your business workflow.", "Приватные Odoo-модули под бизнес-процессы вашей компании."],
  ["service", "odoo_setup", "Odoo setup", "Настройка Odoo", "Available by request", "По запросу", "Service", "Услуга", "Odoo 19.0 focus", "Installation and configuration for stable Odoo environments.", "Установка и конфигурация стабильных Odoo-окружений."],
  ["service", "report_development", "Report development", "Разработка отчетов", "Available by request", "По запросу", "Service", "Услуга", "Odoo 17.0-19.0", "Custom sales, invoice, inventory and accounting reports.", "Кастомные отчеты по продажам, счетам, складу и бухгалтерии."]
];

const homeCopy = {
  en: {
    title: "Odoo 19 Community Addons & Custom Module Development",
    metaTitle: "Odoo 19 Community Addons & Custom Module Development | OdooCustom",
    description:
      "Free Odoo 19 Community addons and custom module development: reports, migration reviews, dashboards, setup and workflow automation.",
    subtitle:
      "Free open-source tools, planned Pro modules and custom setup for stable Odoo Community installations.",
    body:
      "OdooCustom publishes practical Odoo 19 Community add-ons and provides custom module development for developers, integrators and small businesses.",
    freeCta: "View Free Modules",
    serviceCta: "Request Custom Development",
    moduleTitle: "Featured Odoo Module",
    moduleBody:
      "Start with Module Health Checker, a ready free add-on for reviewing installed modules, metadata, licenses and dependency issues.",
    servicesTitle: "Odoo Services",
    servicesLead:
      "Custom development, setup, migration review and reports are available by request.",
    servicesBody:
      "Send your Odoo version, installed apps and required workflow. You will get a practical scope and estimate.",
    howTitle: "How it works",
    howBody: "A simple workflow for module review, custom development and support.",
    howSteps: [
      ["Review", "Send the Odoo version, installed apps and the workflow that needs improvement."],
      ["Scope", "Get a practical scope: setup, report, private module, migration review or adaptation."],
      ["Delivery", "Receive the result with install notes, version focus and clear follow-up steps."]
    ],
    catalogTitle: "Module Catalog",
    catalogBody:
      "Free modules, planned Pro modules and service cards. Released modules get their own indexable pages.",
    blogTitle: "Odoo 19 Guides",
    blogBody:
      "Useful technical articles bring search traffic from people solving real Odoo problems.",
    roadmapTitle: "Roadmap",
    roadmapBody:
      "First stage: publish the bilingual website, keep useful module cards visible, and replace planned cards as releases become ready.",
    faqTitle: "FAQ",
    faqBody: "Short answers for installation, version support, payment links and project independence.",
    faq: [
      ["Which Odoo version is the main target?", "Primary focus is Odoo 19.0 Community Edition. Custom development can be discussed for Odoo 17.0, 18.0 and 19.0."],
      ["Where is the Russian version?", "The Russian version has its own indexable URL at /ru/ and its own localized pages."],
      ["Where will paid Pro modules be available?", "Pro modules are coming soon. Each released Pro module will get its own Boosty access link."],
      ["Is this an official Odoo project?", "No. This is an independent project and is not affiliated with Odoo S.A."]
    ],
    legalTitle: "This project is not affiliated with Odoo S.A.",
    legalBody: "Odoo is a trademark of Odoo S.A. All modules are independently developed for Odoo Community Edition."
  },
  ru: {
    title: "Модули Odoo 19 Community и разработка на заказ",
    metaTitle: "Модули Odoo 19 Community и разработка на заказ | OdooCustom",
    description:
      "Бесплатные модули Odoo 19 Community, доработка, отчеты, аудит миграции, настройка и разработка кастомных бизнес-процессов.",
    subtitle:
      "Бесплатные open-source инструменты, плановые Pro-модули и кастомная настройка для стабильных установок Odoo Community.",
    body:
      "OdooCustom публикует практичные модули Odoo 19 Community и помогает с разработкой кастомных модулей для разработчиков, интеграторов и малого бизнеса.",
    freeCta: "Смотреть бесплатные модули",
    serviceCta: "Запросить разработку",
    moduleTitle: "Главный модуль Odoo",
    moduleBody:
      "Начните с Module Health Checker: готового бесплатного аддона для проверки установленных модулей, метаданных, лицензий и зависимостей.",
    servicesTitle: "Услуги Odoo",
    servicesLead:
      "Разработка, настройка, аудит миграции и отчеты доступны по запросу.",
    servicesBody:
      "Пришлите версию Odoo, установленные приложения и нужный процесс. В ответ будет понятный объем работ и оценка.",
    howTitle: "Как это работает",
    howBody: "Простой процесс для ревью модулей, кастомной разработки и поддержки.",
    howSteps: [
      ["Анализ", "Пришлите версию Odoo, установленные приложения и процесс, который нужно улучшить."],
      ["Оценка", "Получите понятный объем: настройка, отчет, приватный модуль, аудит миграции или адаптация."],
      ["Передача", "Получите результат с инструкцией установки, фокусом по версиям и дальнейшими шагами."]
    ],
    catalogTitle: "Каталог модулей",
    catalogBody:
      "Бесплатные модули, плановые Pro-модули и услуги. Выпущенные модули получают отдельные индексируемые страницы.",
    blogTitle: "Гайды по Odoo 19",
    blogBody:
      "Полезные технические статьи приводят людей из поиска по реальным проблемам Odoo.",
    roadmapTitle: "План развития",
    roadmapBody:
      "Первый этап: опубликовать двуязычный сайт, оставить полезные карточки модулей и заменять плановые карточки по мере готовности релизов.",
    faqTitle: "FAQ",
    faqBody: "Короткие ответы про установку, версии, оплату и независимость проекта.",
    faq: [
      ["Какая версия Odoo основная?", "Основной фокус - Odoo 19.0 Community Edition. Кастомная разработка обсуждается для Odoo 17.0, 18.0 и 19.0."],
      ["Где английская версия?", "Английская версия находится на главном URL /, русская - на отдельном индексируемом URL /ru/."],
      ["Где будут платные Pro-модули?", "Pro-модули скоро появятся. Каждый выпущенный Pro-модуль получит отдельную Boosty-ссылку."],
      ["Это официальный проект Odoo?", "Нет. Это независимый проект, не связанный с Odoo S.A."]
    ],
    legalTitle: "Этот проект не связан с Odoo S.A.",
    legalBody: "Odoo является товарным знаком Odoo S.A. Все модули разрабатываются независимо для Odoo Community Edition."
  }
};

const navCopy = {
  en: {
    modules: "Modules",
    services: "Services",
    blog: "Blog",
    roadmap: "Roadmap",
    faq: "FAQ",
    contact: "Contact",
    github: "GitHub",
    footer:
      "Independent Odoo Community addons, custom development and practical setup services.",
    privacy: "Privacy",
    terms: "Terms",
    refund: "Refund"
  },
  ru: {
    modules: "Модули",
    services: "Услуги",
    blog: "Блог",
    roadmap: "План",
    faq: "FAQ",
    contact: "Контакты",
    github: "GitHub",
    footer:
      "Независимые модули Odoo Community, кастомная разработка и практичные услуги настройки.",
    privacy: "Конфиденциальность",
    terms: "Условия",
    refund: "Возврат"
  }
};

function badgeClass(type) {
  if (type === "free") return "badge-free";
  if (type === "pro") return "badge-pro";
  if (type === "service") return "badge-service";
  return "badge-roadmap";
}

function getPagePair(page) {
  return page.route ?? route("/", "/ru/");
}

function alternateTags(page) {
  const pair = getPagePair(page);
  return [
    `<link rel="alternate" hreflang="en" href="${fullUrl(pair.en)}" />`,
    `<link rel="alternate" hreflang="ru" href="${fullUrl(pair.ru)}" />`,
    `<link rel="alternate" hreflang="x-default" href="${fullUrl(pair.en)}" />`
  ].join("\n    ");
}

function graphSchema(lang, page, extra = []) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteOrigin}/#website`,
        name: "OdooCustom",
        alternateName: "Odoo Custom",
        url: `${siteOrigin}/`,
        inLanguage: lang
      },
      {
        "@type": "Organization",
        "@id": `${siteOrigin}/#organization`,
        name: "OdooCustom",
        url: `${siteOrigin}/`,
        sameAs: [externalLinks.github, externalLinks.boosty, externalLinks.linkedin]
      },
      ...extra
    ]
  };
}

function breadcrumbSchema(lang, items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: fullUrl(item.path)
    })),
    inLanguage: lang
  };
}

function head({ lang, page, title, description, path, ogImage = "/assets/img/hero-preview.png", schema = [] }) {
  const locale = lang === "ru" ? "ru_RU" : "en_US";
  const alternateLocale = lang === "ru" ? "en_US" : "ru_RU";
  return `  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <link rel="canonical" href="${fullUrl(path)}" />
    ${alternateTags(page)}
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="OdooCustom" />
    <meta property="og:locale" content="${locale}" />
    <meta property="og:locale:alternate" content="${alternateLocale}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:image" content="${fullUrl(ogImage)}" />
    <meta property="og:url" content="${fullUrl(path)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${fullUrl(ogImage)}" />
    <link rel="icon" href="/assets/img/favicon.svg" type="image/svg+xml" />
    <link rel="stylesheet" href="/assets/css/styles.css?v=${assetVersion}" />
    ${jsonLd(graphSchema(lang, page, schema))}
  </head>`;
}

function header(lang, currentPage) {
  const copy = navCopy[lang];
  const home = homePath(lang);
  const pair = getPagePair(currentPage);
  return `    <header class="site-header">
      <a class="brand" href="${home}#top" aria-label="OdooCustom home">
        <span class="brand-mark" aria-hidden="true">OC</span>
        <span class="brand-text">OdooCustom</span>
      </a>
      <nav class="site-nav" aria-label="${lang === "ru" ? "Основная навигация" : "Primary navigation"}">
        <a href="${home}#modules" data-track="click_nav_modules">${copy.modules}</a>
        <a href="${home}#services" data-track="click_nav_services">${copy.services}</a>
        <a href="${home}#blog" data-track="click_nav_blog">${copy.blog}</a>
        <a href="${home}#roadmap" data-track="click_nav_roadmap">${copy.roadmap}</a>
        <a href="${home}#faq" data-track="click_nav_faq">${copy.faq}</a>
        <a href="${home}#contact" data-track="click_nav_contact">${copy.contact}</a>
      </nav>
      <div class="header-controls">
        <div class="language-switcher" aria-label="${lang === "ru" ? "Выбор языка" : "Language selector"}">
          <a class="language-button${lang === "en" ? " is-active" : ""}" href="${pair.en}" hreflang="en" data-track="language_switch_en">EN</a>
          <a class="language-button${lang === "ru" ? " is-active" : ""}" href="${pair.ru}" hreflang="ru" data-track="language_switch_ru">RU</a>
        </div>
        <a class="header-action" href="${externalLinks.github}" target="_blank" rel="noopener noreferrer" data-track="click_github" data-track-label="header_github">${copy.github}</a>
      </div>
    </header>`;
}

function footer(lang) {
  const copy = navCopy[lang];
  const home = homePath(lang);
  return `    <footer class="site-footer" id="contact">
      <div class="container footer-grid">
        <div>
          <a class="brand footer-brand" href="${home}#top" aria-label="OdooCustom home">
            <span class="brand-mark" aria-hidden="true">OC</span>
            <span class="brand-text">OdooCustom</span>
          </a>
          <p>${copy.footer}</p>
        </div>
        <div class="footer-links">
          <a href="${externalLinks.github}" target="_blank" rel="noopener noreferrer" data-track="click_github" data-track-label="footer_github">GitHub</a>
          <a href="${externalLinks.boosty}" target="_blank" rel="noopener noreferrer" data-track="click_boosty" data-track-label="footer_boosty">Boosty</a>
          <a href="${externalLinks.email}" data-track="click_contact_email" data-track-label="footer_email">serrggeejjj@gmail.com</a>
          <a href="${externalLinks.linkedin}" target="_blank" rel="noopener noreferrer" data-track="click_linkedin" data-track-label="footer_linkedin">LinkedIn</a>
          <a href="/privacy.html" data-track="click_legal_link" data-track-label="privacy">${copy.privacy}</a>
          <a href="/terms.html" data-track="click_legal_link" data-track-label="terms">${copy.terms}</a>
          <a href="/refund.html" data-track="click_legal_link" data-track-label="refund">${copy.refund}</a>
          <span>Copyright 2026 DokPlay</span>
        </div>
      </div>
    </footer>`;
}

function shell({ lang, page, title, description, path, body, bodyClass = "", schema = [], ogImage }) {
  return `<!doctype html>
<html lang="${lang}">
${head({ lang, page, title, description, path, schema, ogImage })}
  <body class="${bodyClass}" data-page="${page.key ?? "home"}">
${header(lang, page)}
${body}
${footer(lang)}
    <script type="module" src="/assets/js/analytics.js?v=20260619-metrika-1"></script>
  </body>
</html>
`;
}

function homePage(lang) {
  const copy = homeCopy[lang];
  const page = { key: "home", route: route("/", "/ru/") };
  const path = homePath(lang);
  const serviceCards = servicePages
    .map((service) => {
      const item = service[lang];
      return `<a class="mini-card" href="${service.route[lang]}" data-track="click_service_page" data-track-label="${service.key}">
              <span class="badge badge-service">${lang === "ru" ? "Услуга" : "Service"}</span>
              <h3>${escapeHtml(item.shortTitle)}</h3>
              <p>${escapeHtml(item.description)}</p>
            </a>`;
    })
    .join("\n");
  const blogCards = articlePages
    .map((article) => {
      const item = article[lang];
      return `<a class="mini-card" href="${article.route[lang]}" data-track="click_blog_article" data-track-label="${article.key}">
              <span class="mini-card-meta">${lang === "ru" ? "Гайд Odoo 19" : "Odoo 19 guide"}</span>
              <h3>${escapeHtml(item.shortTitle)}</h3>
              <p>${escapeHtml(item.description)}</p>
            </a>`;
    })
    .join("\n");
  const catalogCards = catalogItems
    .map(([type, technicalName, titleEn, titleRu, statusEn, statusRu, badgeEn, badgeRu, version, descEn, descRu]) => {
      const title = lang === "ru" ? titleRu : titleEn;
      const status = lang === "ru" ? statusRu : statusEn;
      const badge = lang === "ru" ? badgeRu : badgeEn;
      const desc = lang === "ru" ? descRu : descEn;
      const suffix = lang === "ru" ? "-ru" : "";
      return `<article class="catalog-card catalog-card-${type} catalog-card-with-image">
              <img class="card-image" src="/assets/img/catalog/${technicalName}${suffix}.png?v=${assetVersion}" width="1000" height="660" alt="${escapeHtml(title)} preview" loading="lazy" decoding="async" />
              <div class="card-topline">
                <span class="badge ${badgeClass(type)}">${escapeHtml(badge)}</span>
                <span>${escapeHtml(status)}</span>
              </div>
              <h3>${escapeHtml(title)}</h3>
              <p>${escapeHtml(desc)}</p>
              <dl class="card-meta">
                <div><dt>${lang === "ru" ? "Версия" : "Version"}</dt><dd>${escapeHtml(version)}</dd></div>
                <div><dt>${lang === "ru" ? "Тип" : "Type"}</dt><dd>${escapeHtml(badge)}</dd></div>
              </dl>
            </article>`;
    })
    .join("\n");
  const faq = copy.faq
    .map(
      ([question, answer]) =>
        `<details class="faq-item"><summary aria-expanded="false">${escapeHtml(question)}</summary><p>${escapeHtml(answer)}</p></details>`
    )
    .join("\n");

  const body = `    <main id="top">
      <section class="hero section-band">
        <div class="container hero-grid">
          <div class="hero-copy">
            <h1>${escapeHtml(copy.title)}</h1>
            <p class="hero-subtitle">${escapeHtml(copy.subtitle)}</p>
            <p class="hero-body">${escapeHtml(copy.body)}</p>
            <div class="hero-actions" aria-label="${lang === "ru" ? "Основные действия" : "Primary actions"}">
              <a class="button button-primary" href="#modules" data-filter-link="free" data-track="click_free_modules" data-track-label="hero_free">${copy.freeCta}</a>
              <a class="button button-secondary" href="${servicePages[0].route[lang]}" data-track="click_custom_development" data-track-label="hero_services">${copy.serviceCta}</a>
              <a class="button button-ghost" href="${externalLinks.emailSetup}" data-track="click_contact_email" data-track-label="hero_email">${lang === "ru" ? "Написать email" : "Contact by email"}</a>
            </div>
            <div class="support-line" aria-label="${lang === "ru" ? "Поддержка версий" : "Version support"}">
              <span>${lang === "ru" ? "Основная версия: Odoo 19.0 Community" : "Main supported version: Odoo 19.0 Community"}</span>
              <span>${lang === "ru" ? "17.0 и 18.0 по запросу" : "17.0 and 18.0 by request"}</span>
              <span>${lang === "ru" ? "16.0 только после анализа" : "16.0 legacy only after review"}</span>
            </div>
            <div class="trust-row" aria-label="${lang === "ru" ? "Сигналы доверия" : "Trust signals"}">
              <span>${lang === "ru" ? "Бесплатные open-source модули" : "Free open-source modules"}</span>
              <span>LGPL-3</span>
              <span>Odoo 19 Community</span>
              <span>${lang === "ru" ? "Не связано с Odoo S.A." : "Not affiliated with Odoo S.A."}</span>
            </div>
          </div>
          <div class="hero-media" aria-label="${lang === "ru" ? "Превью проекта" : "Project preview"}">
            <img src="/assets/img/${lang === "ru" ? "hero-preview-ru" : "hero-preview"}.png?v=${assetVersion}" width="1200" height="820" alt="${lang === "ru" ? "Превью OdooCustom с бесплатными и Pro-модулями" : "OdooCustom preview with Free and Pro Odoo modules"}" />
          </div>
        </div>
      </section>

      <section class="section-wrap" aria-labelledby="featured-title">
        <div class="container">
          <div class="section-heading">
            <h2 id="featured-title">${copy.moduleTitle}</h2>
            <p>${copy.moduleBody}</p>
          </div>
          <div class="featured-grid">
            <a class="featured-card featured-card-link" href="${modulePage.route[lang]}" data-track="click_module_page" data-track-label="module_health_checker">
              <img src="/assets/img/${lang === "ru" ? "module-health-ru" : "module-health"}.png?v=${assetVersion}" width="1000" height="660" alt="${lang === "ru" ? "Интерфейс проверки модулей Odoo" : "Module Health Checker interface preview"}" />
              <div class="featured-copy">
                <span class="badge badge-free">${lang === "ru" ? "Бесплатно" : "Free"}</span>
                <span class="featured-meta">${lang === "ru" ? "Готово / Odoo 19.0 Community" : "Ready / Odoo 19.0 Community"}</span>
                <h3>${modulePage[lang].shortTitle}</h3>
                <p>${modulePage[lang].description}</p>
                <span class="featured-link-hint">${lang === "ru" ? "Открыть страницу модуля" : "Open module page"}</span>
              </div>
            </a>
            <a class="featured-card featured-card-link" href="${servicePages[0].route[lang]}" data-track="click_service_page" data-track-label="featured_custom_development">
              <img src="/assets/img/catalog/custom_module_development${lang === "ru" ? "-ru" : ""}.png?v=${assetVersion}" width="1000" height="660" alt="${lang === "ru" ? "Разработка модулей Odoo" : "Custom Odoo module development"}" />
              <div class="featured-copy">
                <span class="badge badge-service">${lang === "ru" ? "Услуга" : "Service"}</span>
                <span class="featured-meta">${lang === "ru" ? "По запросу" : "Available by request"}</span>
                <h3>${servicePages[0][lang].shortTitle}</h3>
                <p>${servicePages[0][lang].description}</p>
                <span class="featured-link-hint">${lang === "ru" ? "Открыть услугу" : "Open service"}</span>
              </div>
            </a>
            <a class="featured-card featured-card-link featured-text-card" href="#blog" data-track="click_nav_blog" data-track-label="featured_blog">
              <span class="badge badge-roadmap">${lang === "ru" ? "Контент" : "Guides"}</span>
              <span class="featured-meta">${lang === "ru" ? "Для поиска и пользователей" : "For search and users"}</span>
              <h3>${copy.blogTitle}</h3>
              <p>${copy.blogBody}</p>
              <span class="featured-link-hint">${lang === "ru" ? "Смотреть статьи" : "View articles"}</span>
            </a>
          </div>
        </div>
      </section>

      <section class="service-band" id="services" aria-labelledby="services-title">
        <div class="container service-grid">
          <div>
            <h2 id="services-title">${copy.servicesTitle}</h2>
            <p class="service-lead">${copy.servicesLead}</p>
            <p>${copy.servicesBody}</p>
            <div class="service-actions">
              <a class="button button-primary" href="${externalLinks.emailSetup}" data-track="click_contact_email" data-track-label="services_email">${lang === "ru" ? "Написать на email" : "Contact by email"}</a>
              <a class="button button-secondary" href="${externalLinks.linkedin}" target="_blank" rel="noopener noreferrer" data-track="click_linkedin" data-track-label="services_linkedin">LinkedIn</a>
            </div>
          </div>
          <div class="service-list" aria-label="${lang === "ru" ? "Страницы услуг" : "Service pages"}">
            ${servicePages
              .map((service) => `<a href="${service.route[lang]}"><strong>${service[lang].shortTitle}</strong><span>${service[lang].description}</span></a>`)
              .join("\n")}
          </div>
        </div>
      </section>

      <section class="section-wrap how-section" aria-labelledby="how-title">
        <div class="container">
          <div class="section-heading">
            <h2 id="how-title">${copy.howTitle}</h2>
            <p>${copy.howBody}</p>
          </div>
          <div class="workflow-grid">
            ${copy.howSteps
              .map(
                ([title, text], index) => `<article class="workflow-step">
              <span class="workflow-index">${String(index + 1).padStart(2, "0")}</span>
              <h3>${escapeHtml(title)}</h3>
              <p>${escapeHtml(text)}</p>
            </article>`
              )
              .join("\n")}
          </div>
        </div>
      </section>

      <section class="section-wrap catalog-section" id="modules" aria-labelledby="modules-title">
        <div class="container">
          <div class="section-heading section-heading-wide">
            <div>
              <h2 id="modules-title">${copy.catalogTitle}</h2>
              <p>${copy.catalogBody}</p>
            </div>
            <a class="text-link" href="${externalLinks.boosty}" target="_blank" rel="noopener noreferrer" data-track="click_boosty" data-track-label="catalog_boosty">Boosty</a>
          </div>
          <div class="tabs" role="tablist" aria-label="${lang === "ru" ? "Фильтры каталога" : "Catalog filters"}">
            <button class="tab is-active" type="button" role="tab" aria-selected="true" aria-controls="catalogGrid" data-filter="all" data-track="filter_catalog_all">${lang === "ru" ? "Все" : "All"}</button>
            <button class="tab" type="button" role="tab" aria-selected="false" aria-controls="catalogGrid" data-filter="free" data-track="filter_catalog_free">${lang === "ru" ? "Бесплатные" : "Free"}</button>
            <button class="tab" type="button" role="tab" aria-selected="false" aria-controls="catalogGrid" data-filter="pro" data-track="filter_catalog_pro">Pro</button>
            <button class="tab" type="button" role="tab" aria-selected="false" aria-controls="catalogGrid" data-filter="service" data-track="filter_catalog_service">${lang === "ru" ? "Услуги" : "Services"}</button>
          </div>
          <p class="catalog-count" id="catalogCount" aria-live="polite">${lang === "ru" ? "Все:" : "All:"} ${catalogItems.length} ${lang === "ru" ? "карточек" : "cards"}</p>
          <div class="catalog-grid" id="catalogGrid">${catalogCards}</div>
          <div class="paid-note">
            <h3>${lang === "ru" ? "Важно о плановых модулях" : "Planned module note"}</h3>
            <p>${lang === "ru" ? "Для Coming Soon карточек не создаются отдельные индексируемые страницы, пока нет полноценного описания и релиза." : "Coming Soon cards do not get separate indexable pages until there is a complete description and release."}</p>
          </div>
        </div>
      </section>

      <section class="section-wrap blog-preview" id="blog" aria-labelledby="blog-title">
        <div class="container">
          <div class="section-heading">
            <h2 id="blog-title">${copy.blogTitle}</h2>
            <p>${copy.blogBody}</p>
          </div>
          <div class="mini-card-grid">${blogCards}</div>
        </div>
      </section>

      <section class="roadmap-band" id="roadmap" aria-labelledby="roadmap-title">
        <div class="container roadmap-layout">
          <div>
            <h2 id="roadmap-title">${copy.roadmapTitle}</h2>
            <p>${copy.roadmapBody}</p>
          </div>
          <ol class="roadmap-steps">
            <li><span>${lang === "ru" ? "Готово" : "Ready"}</span> <span>${lang === "ru" ? "Двуязычная структура, Google verification и страница модуля" : "Bilingual structure, Google verification and module page"}</span></li>
            <li><span>${lang === "ru" ? "Далее" : "Next"}</span> <span>${lang === "ru" ? "Больше Free utilities и технических статей" : "More Free utilities and technical articles"}</span></li>
            <li><span>${lang === "ru" ? "Позже" : "Later"}</span> <span>${lang === "ru" ? "Pro-панели, коннекторы и инструменты миграции" : "Pro dashboards, connectors and migration tooling"}</span></li>
          </ol>
        </div>
      </section>

      <section class="section-wrap" id="faq" aria-labelledby="faq-title">
        <div class="container faq-grid">
          <div class="section-heading faq-heading">
            <h2 id="faq-title">${copy.faqTitle}</h2>
            <p>${copy.faqBody}</p>
          </div>
          <div class="faq-list" id="faqList">${faq}</div>
        </div>
      </section>

      <section class="legal-band" aria-label="${lang === "ru" ? "Юридический дисклеймер" : "Legal disclaimer"}">
        <div class="container legal-layout">
          <strong>${copy.legalTitle}</strong>
          <span>${copy.legalBody}</span>
        </div>
      </section>
    </main>

    <button class="back-to-top" type="button" aria-label="${lang === "ru" ? "Наверх" : "Back to top"}"></button>

    <dialog class="module-dialog" id="moduleDialog" aria-labelledby="dialogTitle">
      <button class="dialog-close js-dialog-close" type="button" aria-label="${lang === "ru" ? "Закрыть подробности" : "Close details"}"></button>
      <div class="dialog-body">
        <span class="badge" id="dialogBadge"></span>
        <h2 id="dialogTitle"></h2>
        <p id="dialogDescription"></p>
        <dl class="dialog-meta">
          <div><dt>${lang === "ru" ? "Техническое имя" : "Technical name"}</dt><dd id="dialogTechName"></dd></div>
          <div><dt>${lang === "ru" ? "Версия" : "Version"}</dt><dd id="dialogVersion"></dd></div>
          <div><dt>${lang === "ru" ? "Статус" : "Status"}</dt><dd id="dialogStatus"></dd></div>
          <div><dt>${lang === "ru" ? "Цена" : "Price"}</dt><dd id="dialogPrice"></dd></div>
        </dl>
        <p class="dialog-extra" id="dialogDetails"></p>
        <div class="dialog-screenshots" id="dialogScreenshots" hidden></div>
        <div class="dialog-actions" id="dialogActions"></div>
      </div>
    </dialog>
    <script type="module" src="/assets/js/main.js?v=${assetVersion}"></script>`;

  return shell({
    lang,
    page,
    title: copy.metaTitle,
    description: copy.description,
    path,
    body,
    bodyClass: "home-page",
    ogImage: lang === "ru" ? "/assets/img/hero-preview-ru.png" : "/assets/img/hero-preview.png",
    schema: [
      {
        "@type": "Service",
        "@id": `${siteOrigin}/#service`,
        name: lang === "ru" ? "Разработка модулей Odoo" : "Custom Odoo module development",
        provider: { "@id": `${siteOrigin}/#organization` },
        areaServed: "Worldwide",
        serviceType: lang === "ru" ? "Разработка и настройка Odoo Community" : "Odoo Community custom development",
        url: fullUrl(path),
        description: copy.description,
        inLanguage: lang
      }
    ]
  });
}

function list(items) {
  return `<ul class="check-list">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("\n")}</ul>`;
}

function breadcrumbs(lang, page, currentTitle) {
  const home = lang === "ru" ? "Главная" : "Home";
  return `<nav class="breadcrumb" aria-label="${lang === "ru" ? "Хлебные крошки" : "Breadcrumb"}">
      <a href="${homePath(lang)}">${home}</a>
      <span aria-hidden="true">/</span>
      <span>${escapeHtml(currentTitle)}</span>
    </nav>`;
}

const serviceImageMap = {
  "custom-development": "custom_module_development",
  setup: "odoo_setup",
  migration: "migration_check",
  reports: "report_development"
};

const articleImageMap = {
  "install-addon": "module-health",
  "update-apps": "site-desktop-catalog",
  "manifest-checklist": "catalog/cp_module_health_checker",
  "missing-deps": "catalog/cp_duplicate_checker",
  "migrate-18-19": "catalog/cp_migration_assistant_pro",
  "module-vs-core": "catalog/custom_module_development"
};

function localizedAsset(baseName, lang) {
  if (baseName.includes("/")) {
    const [folder, file] = baseName.split("/");
    return `/assets/img/${folder}/${file}${lang === "ru" ? "-ru" : ""}.png?v=${assetVersion}`;
  }

  if (["module-health", "hero-preview"].includes(baseName)) {
    return `/assets/img/${baseName}${lang === "ru" ? "-ru" : ""}.png?v=${assetVersion}`;
  }

  return `/assets/img/${baseName}.png?v=${assetVersion}`;
}

function servicePage(lang, service) {
  const copy = service[lang];
  const path = service.route[lang];
  const page = { key: service.key, route: service.route };
  const serviceImage = localizedAsset(`catalog/${serviceImageMap[service.key] ?? "custom_module_development"}`, lang);
  const estimateTitle = lang === "ru" ? "Срок оценки" : "Estimate timing";
  const estimateText =
    lang === "ru"
      ? "Первичная оценка готовится после получения версии Odoo, списка установленных приложений, скриншотов процесса и примеров записей. Если данных не хватает, сначала фиксируется короткий список уточнений."
      : "The first estimate is prepared after reviewing the Odoo version, installed apps, workflow screenshots and sample records. If the input is incomplete, the first reply is a focused clarification list.";
  const exampleTitle = lang === "ru" ? "Пример результата" : "Example deliverable";
  const exampleText =
    lang === "ru"
      ? "Результат оформляется как отдельный модуль, настройка, отчет или аудит с понятными ограничениями, ссылками на связанные страницы и дальнейшими шагами."
      : "The result is delivered as a separate module, setup change, report or review with clear limitations, related links and follow-up steps.";
  const faq = copy.faq
    .map(([question, answer]) => `<details class="faq-item"><summary>${escapeHtml(question)}</summary><p>${escapeHtml(answer)}</p></details>`)
    .join("\n");
  const related = [
    modulePage,
    ...servicePages.filter((item) => item.key !== service.key).slice(0, 2)
  ]
    .map((item) => `<a class="mini-card" href="${item.route[lang]}"><h3>${escapeHtml(item[lang].shortTitle)}</h3><p>${escapeHtml(item[lang].description)}</p></a>`)
    .join("\n");
  const body = `    <main class="content-page-main" id="top">
      <section class="content-hero section-band">
        <div class="container content-hero-layout">
          <div>
            ${breadcrumbs(lang, page, copy.shortTitle)}
            <h1>${escapeHtml(copy.title)}</h1>
            <p class="hero-subtitle">${escapeHtml(copy.lead)}</p>
            <p class="hero-body">${escapeHtml(copy.intro)}</p>
            <div class="hero-actions">
              <a class="button button-primary" href="${externalLinks.emailSetup}" data-track="click_contact_email" data-track-label="${service.key}_hero">${escapeHtml(copy.cta)}</a>
              <a class="button button-secondary" href="${homePath(lang)}#services">${lang === "ru" ? "Все услуги" : "All services"}</a>
            </div>
          </div>
          <aside class="content-summary" aria-label="${lang === "ru" ? "Кратко" : "Summary"}">
            <span class="badge badge-service">${lang === "ru" ? "Услуга" : "Service"}</span>
            <dl>
              <div><dt>${lang === "ru" ? "Кластер" : "Search cluster"}</dt><dd>${escapeHtml(copy.cluster)}</dd></div>
              <div><dt>${lang === "ru" ? "Версии" : "Versions"}</dt><dd>Odoo 17.0-19.0</dd></div>
              <div><dt>${lang === "ru" ? "Фокус" : "Focus"}</dt><dd>Odoo Community</dd></div>
            </dl>
          </aside>
        </div>
      </section>
      <div class="container content-layout">
        <article class="content-main">
          <section class="rich-section">
            <h2>${escapeHtml(copy.tasksTitle)}</h2>
            ${list(copy.tasks)}
          </section>
          <section class="rich-section">
            <h2>${escapeHtml(copy.includedTitle)}</h2>
            ${list(copy.included)}
          </section>
          <section class="rich-section">
            <h2>${exampleTitle}</h2>
            <p>${exampleText}</p>
            <div class="image-pair">
              <img src="${serviceImage}" width="1000" height="660" alt="${escapeHtml(copy.shortTitle)} interface example" loading="lazy" />
              <img src="/assets/img/site-desktop-catalog.png?v=${assetVersion}" width="1365" height="768" alt="${lang === "ru" ? "Пример каталога OdooCustom" : "OdooCustom catalog example"}" loading="lazy" />
            </div>
          </section>
          <section class="rich-section">
            <h2>${escapeHtml(copy.processTitle)}</h2>
            <ol class="number-list">${copy.process.map((item) => `<li>${escapeHtml(item)}</li>`).join("\n")}</ol>
          </section>
          <section class="rich-section">
            <h2>${estimateTitle}</h2>
            <p>${estimateText}</p>
          </section>
          <section class="rich-section">
            <h2>${escapeHtml(copy.limitsTitle)}</h2>
            ${list(copy.limits)}
          </section>
          <section class="rich-section">
            <h2>FAQ</h2>
            <div class="faq-list">${faq}</div>
          </section>
        </article>
        <aside class="content-aside">
          <div class="aside-panel">
            <h2>${lang === "ru" ? "Связанные страницы" : "Related pages"}</h2>
            <div class="related-list">${related}</div>
          </div>
        </aside>
      </div>
      <section class="content-cta">
        <div class="container legal-layout">
          <strong>${escapeHtml(copy.cta)}</strong>
          <a class="button button-primary" href="${externalLinks.emailSetup}" data-track="click_contact_email" data-track-label="${service.key}_bottom">${lang === "ru" ? "Написать" : "Send request"}</a>
        </div>
      </section>
    </main>`;

  return shell({
    lang,
    page,
    title: `${copy.title} | OdooCustom`,
    description: copy.description,
    path,
    body,
    bodyClass: "content-page",
    schema: [
      breadcrumbSchema(lang, [
        { name: lang === "ru" ? "Главная" : "Home", path: homePath(lang) },
        { name: copy.shortTitle, path }
      ]),
      {
        "@type": "Service",
        name: copy.title,
        description: copy.description,
        provider: { "@id": `${siteOrigin}/#organization` },
        areaServed: "Worldwide",
        serviceType: copy.cluster,
        url: fullUrl(path),
        inLanguage: lang
      }
    ]
  });
}

function moduleDetailPage(lang) {
  const copy = modulePage[lang];
  const path = modulePage.route[lang];
  const page = { key: "module-health-checker", route: modulePage.route };
  const body = `    <main class="content-page-main" id="top">
      <section class="content-hero section-band">
        <div class="container content-hero-layout">
          <div>
            ${breadcrumbs(lang, page, copy.shortTitle)}
            <h1>${escapeHtml(copy.title)}</h1>
            <p class="hero-subtitle">${escapeHtml(copy.lead)}</p>
            <div class="hero-actions">
              <a class="button button-primary" href="${externalLinks.githubModule}" target="_blank" rel="noopener noreferrer" data-track="click_github" data-track-label="module_health_hero">${copy.cta}</a>
              <a class="button button-secondary" href="${externalLinks.githubIssues}" target="_blank" rel="noopener noreferrer" data-track="click_github_issue" data-track-label="module_health_issues">Issue tracker</a>
            </div>
          </div>
          <aside class="content-summary">
            <span class="badge badge-free">${escapeHtml(copy.badge)}</span>
            <dl>
              ${copy.facts.map(([key, value]) => `<div><dt>${escapeHtml(key)}</dt><dd>${escapeHtml(value)}</dd></div>`).join("\n")}
            </dl>
          </aside>
        </div>
      </section>
      <div class="container content-layout">
        <article class="content-main">
          <section class="rich-section">
            <h2>${escapeHtml(copy.doesTitle)}</h2>
            ${list(copy.does)}
          </section>
          <section class="rich-section">
            <h2>${escapeHtml(copy.audienceTitle)}</h2>
            ${list(copy.audience)}
          </section>
          <section class="rich-section">
            <h2>${lang === "ru" ? "Скриншоты" : "Screenshots"}</h2>
            <div class="image-pair">
              <img src="/assets/img/${lang === "ru" ? "module-health-ru" : "module-health"}.png?v=${assetVersion}" width="1000" height="660" alt="${escapeHtml(copy.shortTitle)} screenshot" loading="lazy" />
              <img src="/assets/img/catalog/cp_module_health_checker${lang === "ru" ? "-ru" : ""}.png?v=${assetVersion}" width="1000" height="660" alt="${escapeHtml(copy.shortTitle)} catalog card" loading="lazy" />
              <img src="/assets/img/site-desktop-catalog.png?v=${assetVersion}" width="1365" height="768" alt="${lang === "ru" ? "Каталог OdooCustom на desktop" : "OdooCustom desktop catalog"}" loading="lazy" />
              <img src="/assets/img/site-mobile-catalog.png?v=${assetVersion}" width="390" height="844" alt="${lang === "ru" ? "Каталог OdooCustom на mobile" : "OdooCustom mobile catalog"}" loading="lazy" />
              <img src="/assets/img/module-github-link.png?v=${assetVersion}" width="1200" height="675" alt="${lang === "ru" ? "Ссылка модуля на GitHub" : "Module GitHub link"}" loading="lazy" />
            </div>
          </section>
          <section class="rich-section">
            <h2>${escapeHtml(copy.installTitle)}</h2>
            <p>${escapeHtml(copy.installIntro)}</p>
            <pre class="code-block"><code>${escapeHtml(copy.installCode)}</code></pre>
          </section>
          <section class="rich-section">
            <h2>${escapeHtml(copy.limitsTitle)}</h2>
            ${list(copy.limits)}
          </section>
          <section class="rich-section">
            <h2>${escapeHtml(copy.changelogTitle)}</h2>
            ${list(copy.changelog)}
          </section>
        </article>
        <aside class="content-aside">
          <div class="aside-panel">
            <h2>${lang === "ru" ? "Действия" : "Actions"}</h2>
            <a class="button button-primary" href="${externalLinks.githubModule}" target="_blank" rel="noopener noreferrer" data-track="click_github" data-track-label="module_health_aside">${lang === "ru" ? "GitHub модуль" : "GitHub module"}</a>
            <a class="button button-secondary" href="${servicePages[0].route[lang]}">${servicePages[0][lang].shortTitle}</a>
          </div>
        </aside>
      </div>
    </main>`;

  return shell({
    lang,
    page,
    title: `${copy.title} | ${lang === "ru" ? "Бесплатный модуль" : "Free Addon"}`,
    description: copy.description,
    path,
    body,
    bodyClass: "content-page",
    ogImage: lang === "ru" ? "/assets/img/module-health-ru.png" : "/assets/img/module-health.png",
    schema: [
      breadcrumbSchema(lang, [
        { name: lang === "ru" ? "Главная" : "Home", path: homePath(lang) },
        { name: copy.shortTitle, path }
      ]),
      {
        "@type": "SoftwareApplication",
        name: copy.shortTitle,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Odoo 19.0 Community",
        softwareVersion: modulePage.version,
        license: "https://www.gnu.org/licenses/lgpl-3.0.html",
        url: fullUrl(path),
        downloadUrl: externalLinks.githubModule,
        author: { "@id": `${siteOrigin}/#organization` },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock"
        },
        description: copy.description,
        inLanguage: lang
      }
    ]
  });
}

function articlePage(lang, article) {
  const copy = article[lang];
  const path = article.route[lang];
  const page = { key: article.key, route: article.route };
  const articleImage = localizedAsset(articleImageMap[article.key] ?? "hero-preview", lang);
  const practicalTitle = lang === "ru" ? "Команды, скриншот и типовые ошибки" : "Commands, screenshot and common errors";
  const practicalIntro =
    lang === "ru"
      ? "Ниже практический блок, который помогает проверить шаги без догадок: команда, визуальный ориентир и ошибки, которые стоит искать первыми."
      : "The block below keeps the article practical: one command/check, one visual reference and the first errors to inspect.";
  const commandSnippet =
    article.key === "update-apps"
      ? "odoo-bin -c odoo.conf -d your_database -u base --stop-after-init"
      : article.key === "manifest-checklist"
        ? "python -m py_compile __manifest__.py\npython - <<'PY'\nimport ast, pathlib\nast.literal_eval(pathlib.Path('__manifest__.py').read_text(encoding='utf-8'))\nPY"
        : article.key === "missing-deps"
          ? "grep -R \"depends\" __manifest__.py\n# then update the Apps List after adding missing addons"
          : article.key === "migrate-18-19"
            ? "grep -R \"version\\|depends\" __manifest__.py\n# review models, views, security and assets before changing version numbers"
            : article.key === "module-vs-core"
              ? "grep -R \"_inherit\\|inherit_id\" custom_addons/\n# prefer inheritance in a separate addon over editing Odoo core"
              : "git clone https://github.com/DokPlay/odoo-community-plus-addons.git\n# copy the module folder into your custom addons path";
  const commonErrors =
    lang === "ru"
      ? [
          "Odoo не видит модуль из-за неверного addons path или лишней вложенной папки.",
          "Manifest содержит зависимость, которой нет в текущем окружении.",
          "Первый настоящий error в логе скрыт выше каскадных ошибок загрузки."
        ]
      : [
          "Odoo cannot see the module because the addons path or folder nesting is wrong.",
          "The manifest declares a dependency that is missing from the current environment.",
          "The first real log error is often above later cascade errors."
        ];
  const sections = copy.sections
    .map(([title, items]) => `<section class="rich-section"><h2>${escapeHtml(title)}</h2>${list(items)}</section>`)
    .join("\n");
  const body = `    <main class="content-page-main" id="top">
      <section class="content-hero section-band">
        <div class="container content-hero-layout">
          <div>
            ${breadcrumbs(lang, page, copy.shortTitle)}
            <h1>${escapeHtml(copy.title)}</h1>
            <p class="hero-subtitle">${escapeHtml(copy.lead)}</p>
            <div class="meta-strip">
              <span>${lang === "ru" ? "Гайд Odoo 19" : "Odoo 19 guide"}</span>
              <span>${lastmod}</span>
              <span>Odoo Community</span>
            </div>
          </div>
          <aside class="content-summary">
            <span class="badge badge-roadmap">${lang === "ru" ? "Статья" : "Article"}</span>
            <p>${escapeHtml(copy.description)}</p>
          </aside>
        </div>
      </section>
      <div class="container content-layout">
        <article class="content-main">
          ${sections}
          <section class="rich-section">
            <h2>${practicalTitle}</h2>
            <p>${practicalIntro}</p>
            <div class="image-pair">
              <img src="${articleImage}" width="1000" height="660" alt="${escapeHtml(copy.shortTitle)} screenshot" loading="lazy" />
              <img src="/assets/img/module-github-link.png?v=${assetVersion}" width="1200" height="675" alt="${lang === "ru" ? "Пример ссылки на GitHub" : "GitHub link example"}" loading="lazy" />
            </div>
            <pre class="code-block"><code>${escapeHtml(commandSnippet)}</code></pre>
            ${list(commonErrors)}
          </section>
          <section class="rich-section">
            <h2>${lang === "ru" ? "Следующий шаг" : "Next step"}</h2>
            <p>${escapeHtml(copy.cta)}</p>
            <div class="hero-actions">
              <a class="button button-primary" href="${externalLinks.emailSetup}" data-track="click_contact_email" data-track-label="${article.key}_cta">${lang === "ru" ? "Написать по задаче" : "Ask about your task"}</a>
              <a class="button button-secondary" href="${modulePage.route[lang]}">${modulePage[lang].shortTitle}</a>
            </div>
          </section>
        </article>
        <aside class="content-aside">
          <div class="aside-panel">
            <h2>${lang === "ru" ? "Похожие материалы" : "Related guides"}</h2>
            <div class="related-list">
              ${articlePages
                .filter((item) => item.key !== article.key)
                .slice(0, 3)
                .map((item) => `<a class="mini-card" href="${item.route[lang]}"><h3>${escapeHtml(item[lang].shortTitle)}</h3><p>${escapeHtml(item[lang].description)}</p></a>`)
                .join("\n")}
            </div>
          </div>
        </aside>
      </div>
    </main>`;

  return shell({
    lang,
    page,
    title: `${copy.title} | OdooCustom`,
    description: copy.description,
    path,
    body,
    bodyClass: "content-page article-page",
    schema: [
      breadcrumbSchema(lang, [
        { name: lang === "ru" ? "Главная" : "Home", path: homePath(lang) },
        { name: copy.shortTitle, path }
      ]),
      {
        "@type": "Article",
        headline: copy.title,
        description: copy.description,
        author: { "@id": `${siteOrigin}/#organization` },
        publisher: { "@id": `${siteOrigin}/#organization` },
        datePublished: lastmod,
        dateModified: lastmod,
        mainEntityOfPage: fullUrl(path),
        inLanguage: lang
      }
    ]
  });
}

function sitemap(routes) {
  const entries = routes
    .map(
      (path) => `  <url>
    <loc>${fullUrl(path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${path.includes("/blog/") ? "monthly" : "weekly"}</changefreq>
    <priority>${path === "/" || path === "/ru/" ? "1.0" : path.includes("/modules/") ? "0.9" : "0.8"}</priority>
  </url>`
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;
}

async function writeRoute(routePath, html) {
  const relativePath = filePathForRoute(routePath);
  const target = join(rootDir, relativePath);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, html, "utf8");
}

async function main() {
  const routes = [];

  for (const lang of ["en", "ru"]) {
    const path = homePath(lang);
    routes.push(path);
    await writeRoute(path, homePage(lang));
  }

  for (const lang of ["en", "ru"]) {
    routes.push(modulePage.route[lang]);
    await writeRoute(modulePage.route[lang], moduleDetailPage(lang));
  }

  for (const service of servicePages) {
    for (const lang of ["en", "ru"]) {
      routes.push(service.route[lang]);
      await writeRoute(service.route[lang], servicePage(lang, service));
    }
  }

  for (const article of articlePages) {
    for (const lang of ["en", "ru"]) {
      routes.push(article.route[lang]);
      await writeRoute(article.route[lang], articlePage(lang, article));
    }
  }

  await writeFile(join(rootDir, "sitemap.xml"), sitemap(routes), "utf8");
  await writeFile(
    join(rootDir, "googleaaf615dabec28921.html"),
    "google-site-verification: googleaaf615dabec28921.html\n",
    "utf8"
  );
  await writeFile(
    join(rootDir, "yandex_e96016ef98c18752.html"),
    `<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    </head>
    <body>Verification: e96016ef98c18752</body>
</html>`,
    "utf8"
  );
  await writeFile(
    join(rootDir, "BingSiteAuth.xml"),
    `<?xml version="1.0"?>
<users>
\t<user>99E41D64E4A365A3AEF9AF0E022B6E7F</user>
</users>`,
    "utf8"
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
