export const supportedLanguages = ["en", "ru"];
export const defaultLanguage = "en";
export const languageStorageKey = "cp_site_language_v2";

const catalogImage = (technicalName) =>
  `./assets/img/catalog/${technicalName}-ru.png`;

const catalogImageAlt = (title) =>
  `Превью ${title}`;

export const russianTimeZones = [
  "Europe/Kaliningrad",
  "Europe/Moscow",
  "Europe/Samara",
  "Asia/Yekaterinburg",
  "Asia/Omsk",
  "Asia/Novosibirsk",
  "Asia/Barnaul",
  "Asia/Tomsk",
  "Asia/Krasnoyarsk",
  "Asia/Irkutsk",
  "Asia/Chita",
  "Asia/Yakutsk",
  "Asia/Vladivostok",
  "Asia/Magadan",
  "Asia/Sakhalin",
  "Asia/Srednekolymsk",
  "Asia/Kamchatka",
  "Asia/Anadyr"
];

export const uiText = {
  en: {
    "meta.title": "Custom Odoo 19 Community Addons | Free and Pro Modules",
    "meta.description":
      "A ready free addon, planned Free and Pro cards, and custom setup services for Odoo 19 Community Edition.",
    "meta.ogDescription": "A ready free Odoo Community addon, planned module cards, Pro add-ons and custom setup services.",
    "brand.aria": "Community Plus Addons home",
    "nav.aria": "Primary navigation",
    "nav.modules": "Modules",
    "nav.services": "Services",
    "nav.roadmap": "Roadmap",
    "nav.contact": "Contact",
    "nav.github": "GitHub",
    "language.aria": "Language selector",
    "language.en": "EN",
    "language.ru": "RU",
    "hero.title": "Custom Addons for Odoo 19 Community",
    "hero.subtitle": "A ready free module, planned module cards, Pro add-ons and custom setup for stable Odoo installations.",
    "hero.body":
      "Built for developers, integrators and small businesses that need practical Odoo improvements without unnecessary complexity.",
    "hero.freeCta": "View Free Modules",
    "hero.proCta": "Explore Pro Modules",
    "hero.setupCta": "Request Custom Setup",
    "hero.supportAria": "Version support summary",
    "hero.supportMain": "Main supported version: Odoo 19.0 Community",
    "hero.supportRequest": "17.0 and 18.0 by request",
    "hero.supportLegacy": "16.0 legacy only after review",
    "hero.mediaAria": "Project preview",
    "hero.mediaAlt": "Preview card for Odoo 19 Free and Pro addons with GitHub and Boosty links",
    "featured.title": "Featured Modules",
    "featured.body": "Start with the ready open-source utility, then follow planned Free and Pro cards as they become available.",
    "featured.healthAlt": "Module Health Checker interface preview",
    "featured.healthBadge": "Free",
    "featured.healthTitle": "Module Health Checker",
    "featured.healthText": "Check installed modules, metadata, licenses and dependency issues in Odoo 19 Community.",
    "featured.dashboardAlt": "Dashboard Pro analytics preview",
    "featured.dashboardBadge": "Pro roadmap",
    "featured.dashboardTitle": "Dashboard Pro",
    "featured.dashboardText": "Clean sales, invoices and inventory dashboards planned for paid Boosty access.",
    "featured.serviceBadge": "Service",
    "featured.serviceTitle": "Custom Setup",
    "featured.serviceText": "Installation, configuration, report development and private modules for real database workflows.",
    "services.title": "Custom Odoo Setup & Module Development",
    "services.lead": "Need a custom report, private workflow, migration check or module adaptation?",
    "services.body":
      "We develop and customize addons for Odoo 17.0, 18.0 and 19.0. Legacy Odoo 16.0 work is available only by request and after technical review.",
    "services.emailCta": "Contact by email",
    "services.linkedinCta": "Linked",
    "services.listAria": "Available service categories",
    "services.customTitle": "Custom module development",
    "services.customText": "Private Odoo modules for your business workflow.",
    "services.setupTitle": "Odoo setup",
    "services.setupText": "Installation and configuration for stable environments.",
    "services.migrationTitle": "Migration check",
    "services.migrationText": "Technical review before upgrading or moving a database.",
    "catalog.title": "Module Catalog",
    "catalog.body": "Filter Free, Pro, Services and Roadmap cards without reloading the page.",
    "catalog.boosty": "Boosty profile",
    "catalog.filtersAria": "Catalog filters",
    "catalog.all": "All",
    "catalog.free": "Free",
    "catalog.pro": "Pro",
    "catalog.service": "Services",
    "catalog.roadmap": "Roadmap",
    "catalog.cards": "cards",
    "catalog.version": "Version",
    "catalog.price": "Price",
    "catalog.details": "Details",
    "catalog.paidNoteTitle": "Paid modules note",
    "catalog.paidNoteBody": "Paid Pro modules are available on Boosty. After purchase, access to the selected module opens there.",
    "roadmap.title": "Roadmap",
    "roadmap.body":
      "First stage: publish the website, keep all module cards visible, then replace planned cards as Free and Pro releases become ready.",
    "roadmap.ready": "Ready",
    "roadmap.readyText": "Module Health Checker and site launch",
    "roadmap.next": "Next",
    "roadmap.nextText": "More Free utilities for reports, exports and reminders",
    "roadmap.later": "Later",
    "roadmap.laterText": "Pro dashboards, connectors and migration tooling",
    "faq.title": "FAQ",
    "faq.body": "Short answers for installation, version support, payment links and project independence.",
    "legal.aria": "Legal disclaimer",
    "legal.title": "This project is not affiliated with Odoo S.A.",
    "legal.body": "Odoo is a trademark of Odoo S.A. All modules are independently developed for Odoo Community Edition.",
    "footer.body": "Independent custom addons, setup services and a Free/Pro roadmap for Odoo Community Edition.",
    "footer.github": "Ready module on GitHub",
    "footer.boosty": "Boosty",
    "footer.linkedin": "Linked",
    "dialog.closeAria": "Close details",
    "dialog.technicalName": "Technical name",
    "dialog.version": "Version",
    "dialog.status": "Status",
    "dialog.price": "Price",
    "dialog.close": "Close"
  },
  ru: {
    "meta.title": "Кастомные модули Odoo 19 Community | бесплатные и Pro-модули",
    "meta.description":
      "Готовый бесплатный модуль, плановые Free и Pro-карточки, а также услуги настройки для Odoo 19 Community Edition.",
    "meta.ogDescription": "Готовый бесплатный модуль Odoo Community, плановые карточки, Pro-дополнения и услуги настройки.",
    "brand.aria": "Главная Community Plus Addons",
    "nav.aria": "Основная навигация",
    "nav.modules": "Модули",
    "nav.services": "Услуги",
    "nav.roadmap": "План",
    "nav.contact": "Контакты",
    "nav.github": "GitHub",
    "language.aria": "Выбор языка",
    "language.en": "EN",
    "language.ru": "RU",
    "hero.title": "Кастомные модули для Odoo 19 Community",
    "hero.subtitle": "Готовый бесплатный модуль, плановые карточки, Pro-дополнения и кастомная настройка для стабильных установок Odoo.",
    "hero.body":
      "Для разработчиков, интеграторов и малого бизнеса, которым нужны практичные улучшения Odoo без лишней сложности.",
    "hero.freeCta": "Смотреть бесплатные модули",
    "hero.proCta": "Открыть Pro модули",
    "hero.setupCta": "Заказать настройку",
    "hero.supportAria": "Сводка поддержки версий",
    "hero.supportMain": "Основная версия: Odoo 19.0 Community",
    "hero.supportRequest": "17.0 и 18.0 по запросу",
    "hero.supportLegacy": "16.0 только после анализа",
    "hero.mediaAria": "Превью проекта",
    "hero.mediaAlt": "Превью карточки Odoo 19 с бесплатными и Pro-модулями со ссылками GitHub и Boosty",
    "featured.title": "Избранные модули",
    "featured.body": "Начните с готовой открытой утилиты, а плановые Free и Pro-карточки отслеживайте по мере готовности.",
    "featured.healthAlt": "Превью интерфейса проверки модулей",
    "featured.healthBadge": "Бесплатно",
    "featured.healthTitle": "Проверка модулей",
    "featured.healthText": "Проверка установленных модулей, метаданных, лицензий и проблем зависимостей в Odoo 19 Community.",
    "featured.dashboardAlt": "Превью аналитики Dashboard Pro",
    "featured.dashboardBadge": "Pro в плане",
    "featured.dashboardTitle": "Панель управления Pro",
    "featured.dashboardText": "Аккуратные панели продаж, счетов и склада, запланированные для платного доступа через Boosty.",
    "featured.serviceBadge": "Услуга",
    "featured.serviceTitle": "Кастомная настройка",
    "featured.serviceText": "Установка, настройка, разработка отчетов и приватных модулей под реальные бизнес-процессы.",
    "services.title": "Настройка Odoo и разработка модулей",
    "services.lead": "Нужен кастомный отчет, приватный процесс, проверка миграции или адаптация модуля?",
    "services.body":
      "Мы разрабатываем и дорабатываем модули для Odoo 17.0, 18.0 и 19.0. Работа с legacy Odoo 16.0 доступна только по запросу и после технического анализа.",
    "services.emailCta": "Написать на email",
    "services.linkedinCta": "Linked",
    "services.listAria": "Категории услуг",
    "services.customTitle": "Разработка кастомных модулей",
    "services.customText": "Приватные Odoo-модули под бизнес-процессы вашей компании.",
    "services.setupTitle": "Настройка Odoo",
    "services.setupText": "Установка и конфигурация стабильных Odoo-окружений.",
    "services.migrationTitle": "Проверка миграции",
    "services.migrationText": "Технический аудит перед обновлением или переносом базы.",
    "catalog.title": "Каталог модулей",
    "catalog.body": "Фильтруйте бесплатные, Pro, услуги и плановые карточки без перезагрузки страницы.",
    "catalog.boosty": "Boosty профиль",
    "catalog.filtersAria": "Фильтры каталога",
    "catalog.all": "Все",
    "catalog.free": "Бесплатные",
    "catalog.pro": "Pro",
    "catalog.service": "Услуги",
    "catalog.roadmap": "План",
    "catalog.cards": "карточек",
    "catalog.version": "Версия",
    "catalog.price": "Цена",
    "catalog.details": "Подробнее",
    "catalog.paidNoteTitle": "Важно о платных модулях",
    "catalog.paidNoteBody": "Платные Pro-модули доступны на Boosty. После покупки там откроется доступ к выбранному модулю.",
    "roadmap.title": "План развития",
    "roadmap.body":
      "Первый этап: опубликовать сайт, показать все карточки модулей и постепенно обновлять их по мере готовности бесплатных и Pro-релизов.",
    "roadmap.ready": "Готово",
    "roadmap.readyText": "Проверка модулей и запуск сайта",
    "roadmap.next": "Далее",
    "roadmap.nextText": "Больше бесплатных утилит для отчетов, экспорта и напоминаний",
    "roadmap.later": "Позже",
    "roadmap.laterText": "Pro-панели, коннекторы и инструменты миграции",
    "faq.title": "FAQ",
    "faq.body": "Короткие ответы про установку, версии, оплату и независимость проекта.",
    "legal.aria": "Юридический дисклеймер",
    "legal.title": "Этот проект не связан с Odoo S.A.",
    "legal.body": "Odoo является товарным знаком Odoo S.A. Все модули разрабатываются независимо для Odoo Community Edition.",
    "footer.body": "Независимые кастомные модули, услуги настройки и Free/Pro-план для Odoo Community Edition.",
    "footer.github": "Готовый модуль на GitHub",
    "footer.boosty": "Boosty",
    "footer.linkedin": "Linked",
    "dialog.closeAria": "Закрыть подробности",
    "dialog.technicalName": "Техническое имя",
    "dialog.version": "Версия",
    "dialog.status": "Статус",
    "dialog.price": "Цена",
    "dialog.close": "Закрыть"
  }
};

export const itemTranslations = {
  ru: {
    cp_module_health_checker: {
      title: "Проверка модулей",
      status: "Готово",
      badge: "Бесплатно",
      version: "Odoo 19.0 Community",
      price: "Бесплатно",
      description: "Проверка установленных модулей, метаданных, лицензий и проблем зависимостей.",
      details:
        "Легкая проверка здоровья Community-установки. Фокус на метаданных модулей, видимости зависимостей и быстрых сигналах для ревью без платного кода и автоматизации миграций.",
      ctaLabel: "Открыть на GitHub",
      image: catalogImage("cp_module_health_checker"),
      imageAlt: catalogImageAlt("Проверка модулей")
    },
    cp_invoice_status_report: {
      title: "Отчет по статусам счетов",
      status: "Скоро",
      badge: "Бесплатно",
      version: "Odoo 19.0 Community",
      price: "Бесплатно",
      description: "Быстрая видимость статусов счетов для финансового и операционного контроля.",
      details: "Планируемый отчет по открытым, оплаченным, просроченным и требующим проверки счетам.",
      ctaLabel: "Скоро",
      image: catalogImage("cp_invoice_status_report"),
      imageAlt: catalogImageAlt("Отчет по статусам счетов")
    },
    cp_simple_sales_report: {
      title: "Простой отчет продаж",
      status: "Скоро",
      badge: "Бесплатно",
      version: "Odoo 19.0 Community",
      price: "Бесплатно",
      description: "Легкие сводки продаж для ежедневной работы в Community Edition.",
      details: "Планируемый модуль компактной отчетности по продажам без тяжелой аналитики и Enterprise-зависимостей.",
      ctaLabel: "Скоро",
      image: catalogImage("cp_simple_sales_report"),
      imageAlt: catalogImageAlt("Простой отчет продаж")
    },
    cp_duplicate_checker: {
      title: "Поиск дублей",
      status: "Скоро",
      badge: "Бесплатно",
      version: "Odoo 19.0 Community",
      price: "Бесплатно",
      description: "Поиск возможных дублей партнеров, товаров и операционных записей.",
      details: "Планируемый помощник по качеству данных перед миграциями, импортами и обслуживанием базы.",
      ctaLabel: "Скоро",
      image: catalogImage("cp_duplicate_checker"),
      imageAlt: catalogImageAlt("Поиск дублей")
    },
    cp_user_role_templates: {
      title: "Шаблоны ролей пользователей",
      status: "Скоро",
      badge: "Бесплатно",
      version: "Odoo 19.0 Community",
      price: "Бесплатно",
      description: "Повторно используемые шаблоны ролей для аккуратного онбординга пользователей.",
      details: "Планируемая утилита администратора для описания и применения типовых ролей в Community-установках.",
      ctaLabel: "Скоро",
      image: catalogImage("cp_user_role_templates"),
      imageAlt: catalogImageAlt("Шаблоны ролей пользователей")
    },
    cp_export_xlsx_lite: {
      title: "Экспорт XLSX Lite",
      status: "Скоро",
      badge: "Бесплатно",
      version: "Odoo 19.0 Community",
      price: "Бесплатно",
      description: "Простые XLSX-выгрузки для рабочих списков и легких отчетов.",
      details: "Планируемый помощник экспорта для типовых бизнес-представлений, где достаточно небольшой таблицы.",
      ctaLabel: "Скоро",
      image: catalogImage("cp_export_xlsx_lite"),
      imageAlt: catalogImageAlt("Экспорт XLSX Lite")
    },
    cp_activity_reminder_lite: {
      title: "Напоминания Lite",
      status: "Скоро",
      badge: "Бесплатно",
      version: "Odoo 19.0 Community",
      price: "Бесплатно",
      description: "Видимость просроченных активностей и задач для follow-up.",
      details: "Планируемая легкая доска напоминаний для команд, которым нужна прозрачная дисциплина активностей.",
      ctaLabel: "Скоро",
      image: catalogImage("cp_activity_reminder_lite"),
      imageAlt: catalogImageAlt("Напоминания Lite")
    },
    cp_product_margin_lite: {
      title: "Маржа товаров Lite",
      status: "Скоро",
      badge: "Бесплатно",
      version: "Odoo 19.0 Community",
      price: "Бесплатно",
      description: "Базовая видимость маржи товаров для продаж и проверки каталога.",
      details: "Планируемый модуль практичных проверок маржи без позиционирования как полноценная бухгалтерская аналитика.",
      ctaLabel: "Скоро",
      image: catalogImage("cp_product_margin_lite"),
      imageAlt: catalogImageAlt("Маржа товаров Lite")
    },
    cp_backup_notice: {
      title: "Уведомление о бэкапах",
      status: "Скоро",
      badge: "Бесплатно",
      version: "Odoo 19.0 Community",
      price: "Бесплатно",
      description: "Видимые уведомления о бэкапах и обслуживании для администраторов.",
      details: "Планируемый admin-helper для напоминаний перед обновлениями, импортами и рискованными изменениями.",
      ctaLabel: "Скоро",
      image: catalogImage("cp_backup_notice"),
      imageAlt: catalogImageAlt("Уведомление о бэкапах")
    },
    cp_quick_menu: {
      title: "Быстрое меню",
      status: "Скоро",
      badge: "Бесплатно",
      version: "Odoo 19.0 Community",
      price: "Бесплатно",
      description: "Быстрые ярлыки для частых экранов и повторяющихся действий.",
      details: "Планируемый помощник продуктивности для администраторов и пользователей, которые часто переходят между записями.",
      ctaLabel: "Скоро",
      image: catalogImage("cp_quick_menu"),
      imageAlt: catalogImageAlt("Быстрое меню")
    },
    cp_module_health_checker_pro: {
      title: "Проверка модулей Pro",
      status: "Скоро",
      badge: "Pro",
      version: "Odoo 19.0 Community",
      price: "Скоро",
      description: "Расширенный аудит модулей: XML, Python API, миграция и PDF-отчеты.",
      details:
        "Планируемое Pro-расширение для глубокой проверки модулей: расширенная проверка XML-представлений, поиск устаревших Python API, подсказки готовности к миграции и выгружаемые PDF-отчеты аудита.",
      ctaLabel: "Скоро"
    },
    cp_dashboard_pro: {
      title: "Панель управления Pro",
      status: "Скоро",
      badge: "Pro",
      version: "Odoo 19.0 Community",
      price: "$79",
      description: "Аккуратные панели продаж, счетов и склада для Odoo 19 Community.",
      details:
        "KPI-панели по продажам, счетам и складу для ежедневного контроля, с компактными графиками и быстрыми операционными сводками.",
      ctaLabel: "Скоро"
    },
    cp_access_manager_pro: {
      title: "Менеджер доступа Pro",
      status: "Скоро",
      badge: "Pro",
      version: "Odoo 19.0 Community",
      price: "$129",
      description: "Практичные инструменты ревью прав доступа для администраторов и интеграторов.",
      details: "Инструменты ревью прав для пользователей, групп, чувствительных меню и конфликтов доступа в одном рабочем месте администратора.",
      ctaLabel: "Скоро"
    },
    cp_accounting_reports_pro: {
      title: "Бухгалтерские отчеты Pro",
      status: "Скоро",
      badge: "Pro",
      version: "Odoo 19.0 Community",
      price: "$99",
      description: "Дополнительные бухгалтерские отчеты для установок Odoo Community.",
      details: "Дополнительные финансовые сводки по счетам, дебиторке, кредиторке и проверке периода в Odoo Community.",
      ctaLabel: "Скоро"
    },
    cp_import_wizard_pro: {
      title: "Мастер импорта Pro",
      status: "Скоро",
      badge: "Pro",
      version: "Odoo 19.0 Community",
      price: "$69",
      description: "Пошаговые импорты с безопасными проверками перед попаданием данных в production.",
      details: "Пошаговые CSV и XLSX-импорты с предпросмотром, подсказками валидации и более безопасными действиями оператора перед загрузкой данных.",
      ctaLabel: "Скоро"
    },
    cp_migration_assistant_pro: {
      title: "Помощник миграции Pro",
      status: "Скоро",
      badge: "Pro",
      version: "Odoo 19.0 Community",
      price: "$109",
      description: "Проверка готовности перед обновлением или переносом базы Odoo.",
      details: "Проверки готовности модулей, зависимостей и рискованных записей перед обновлением или переносом базы.",
      ctaLabel: "Скоро"
    },
    cp_woo_connector_pro: {
      title: "WooCommerce коннектор Pro",
      status: "Скоро",
      badge: "Pro",
      version: "Odoo 19.0 Community",
      price: "$399",
      description: "Коннектор WooCommerce и Odoo Community для операционной работы магазина.",
      details: "Инструменты синхронизации заказов, клиентов, товаров и остатков WooCommerce с рабочими процессами Odoo.",
      ctaLabel: "Скоро"
    },
    cp_shopify_connector_pro: {
      title: "Shopify коннектор Pro",
      status: "Скоро",
      badge: "Pro",
      version: "Odoo 19.0 Community",
      price: "$189",
      description: "Коннектор Shopify и Odoo Community для операционной работы магазина.",
      details: "Инструменты для каталога, заказов и остатков Shopify с практичным операционным контролем внутри Odoo.",
      ctaLabel: "Скоро"
    },
    cp_inventory_barcode_pro: {
      title: "Складские штрихкоды Pro",
      status: "Скоро",
      badge: "Pro",
      version: "Odoo 19.0 Community",
      price: "$45",
      description: "Складские процессы со штрихкодами для операционной работы.",
      details: "Сканирование при приемке, подборе и проверке остатков для команд, которым нужны более быстрые складские операции.",
      ctaLabel: "Скоро"
    },
    cp_purchase_approval_pro: {
      title: "Согласование закупок Pro",
      status: "Скоро",
      badge: "Pro",
      version: "Odoo 19.0 Community",
      price: "$69",
      description: "Этапы согласования закупок для небольших команд с понятным контролем.",
      details: "Этапы согласования закупок с отслеживанием ответственности для команд, которым нужен контроль перед подтверждением заказов.",
      ctaLabel: "Скоро"
    },
    cp_recurring_invoice_pro: {
      title: "Повторные счета Pro",
      status: "Скоро",
      badge: "Pro",
      version: "Odoo 19.0 Community",
      price: "$79",
      description: "Поддержка повторных счетов для предсказуемого регулярного биллинга.",
      details: "Помощники для повторных счетов, продлений и регулярных сценариев выставления счетов клиентам.",
      ctaLabel: "Скоро"
    },
    custom_module_development: {
      title: "Разработка кастомных модулей",
      status: "По запросу",
      badge: "Услуга",
      version: "Odoo 17.0-19.0",
      price: "Оценка",
      description: "Приватные Odoo-модули под бизнес-процессы вашей компании.",
      details: "Подходит для процессов, которые не должны становиться публичными открытыми модулями.",
      ctaLabel: "Запросить оценку"
    },
    odoo_setup: {
      title: "Настройка Odoo",
      status: "По запросу",
      badge: "Услуга",
      version: "Фокус Odoo 19.0",
      price: "Email",
      description: "Установка и конфигурация стабильных Odoo-окружений.",
      details: "Подходит для первичной настройки, установки модулей, проверки окружения и практичной конфигурации.",
      ctaLabel: "Написать email"
    },
    report_development: {
      title: "Разработка отчетов",
      status: "По запросу",
      badge: "Услуга",
      version: "Odoo 17.0-19.0",
      price: "Отчет",
      description: "Кастомные отчеты по продажам, счетам, складу и бухгалтерии.",
      details: "Хороший вариант, когда стандартные экраны не отвечают на бизнес-вопрос достаточно ясно.",
      ctaLabel: "Запросить отчет"
    },
    migration_check: {
      title: "Проверка миграции",
      status: "По запросу",
      badge: "Услуга",
      version: "Odoo 17.0-19.0",
      price: "Аудит",
      description: "Техническое ревью перед обновлением или переносом базы Odoo.",
      details: "Odoo 16.0 доступна только после технического анализа и не является базовым обещанием поддержки.",
      ctaLabel: "Запросить аудит"
    },
    free_module_adaptation: {
      title: "Адаптация бесплатных модулей",
      status: "По запросу",
      badge: "Услуга",
      version: "Odoo 19.0 Community",
      price: "По запросу",
      description: "Адаптация открытых модулей проекта под вашу базу.",
      details: "Полезно, когда публичный модуль близок к задаче, но база требует аккуратных изменений.",
      ctaLabel: "Запросить адаптацию"
    },
    roadmap_free_modules: {
      title: "10 бесплатных модулей",
      status: "В работе",
      badge: "План",
      version: "Odoo 19.0 Community",
      price: "Бесплатно",
      description: "Завершить первый публичный набор легких Community-модулей.",
      details: "Каталог показывает планируемые бесплатные модули заранее, чтобы пользователи видели направление проекта.",
      ctaLabel: "Смотреть каталог"
    },
    roadmap_pro_modules: {
      title: "10 Pro модулей",
      status: "Позже",
      badge: "План",
      version: "Odoo 19.0 Community",
      price: "$79-$399",
      description: "Подготовить отдельные платные посты Boosty для Pro-релизов.",
      details: "Каждый Pro-модуль должен получить отдельную Boosty-ссылку до активации кнопки покупки.",
      ctaLabel: "Boosty скоро"
    },
    roadmap_services: {
      title: "Услуги",
      status: "Можно обсуждать",
      badge: "План",
      version: "Odoo 17.0-19.0",
      price: "Оценка",
      description: "Использовать услуги настройки и разработки для первых реальных заявок.",
      details: "Услуги остаются заметными, потому что могут быть полезны раньше полной готовности продуктовых модулей.",
      ctaLabel: "Связаться"
    }
  }
};

export const faqTranslations = {
  ru: [
    {
      question: "Какая версия Odoo основная?",
      answer:
        "Основной фокус - Odoo 19.0 Community Edition. Кастомная разработка и настройка обсуждаются для Odoo 17.0, 18.0 и 19.0."
    },
    {
      question: "Можно ли работать с Odoo 16.0?",
      answer:
        "Работы по legacy Odoo 16.0 доступны только по запросу и после технического анализа, потому что это не основное обещание поддержки сайта."
    },
    {
      question: "Где будут платные Pro-модули?",
      answer: "Платные Pro-модули будут доступны на Boosty."
    },
    {
      question: "Это официальный проект Odoo?",
      answer:
        "Нет. Это независимый проект, не связанный с Odoo S.A. Odoo является товарным знаком Odoo S.A."
    }
  ]
};
