export const siteLinks = {
  githubFreeModules: "https://github.com/DokPlay/odoo-community-plus-addons",
  githubModuleHealthChecker: "https://github.com/DokPlay/odoo-community-plus-addons/tree/19/cp_module_health_checker",
  boostyProfile: "https://boosty.to/dokplaytv",
  email: "mailto:serrggeejjj@gmail.com",
  linkedin: "https://www.linkedin.com/in/%D1%81%D0%B5%D1%80%D0%B3%D0%B5%D0%B9-%D1%81%D0%BD%D0%B0%D1%82%D0%BA%D0%B8%D0%BD-85563a3ab/",
  telegram: "https://t.me/example",
  siteUrl: "https://odoocustom.online/"
};

const githubModuleUrl = (technicalName) => {
  if (technicalName === "cp_module_health_checker") {
    return siteLinks.githubModuleHealthChecker;
  }
  return siteLinks.githubFreeModules;
};

const boostyPostUrl = (slug) =>
  `${siteLinks.boostyProfile}/posts/${slug}`;

const mailtoSubject = (subject) =>
  `${siteLinks.email}?subject=${encodeURIComponent(subject)}`;

export const freeModules = [
  {
    type: "free",
    technicalName: "cp_module_health_checker",
    title: "Module Health Checker",
    status: "Ready",
    badge: "Free",
    version: "Odoo 19.0 Community",
    price: "Free",
    description: "Check installed Odoo modules, metadata, licenses and dependency issues.",
    details:
      "A lightweight health scan for Community installations. It focuses on module metadata, dependency visibility and quick review signals without paid-code or migration automation.",
    ctaLabel: "View on GitHub",
    ctaUrl: githubModuleUrl("cp_module_health_checker")
  },
  {
    type: "free",
    technicalName: "cp_invoice_status_report",
    title: "Invoice Status Report",
    status: "Coming soon",
    badge: "Free",
    version: "Odoo 19.0 Community",
    price: "Free",
    description: "Quick invoice status visibility for finance and operations follow-up.",
    details:
      "Planned report module for open, paid, overdue and review-needed invoices in small Odoo Community databases.",
    ctaLabel: "Coming soon",
    disabled: true
  },
  {
    type: "free",
    technicalName: "cp_simple_sales_report",
    title: "Simple Sales Report",
    status: "Coming soon",
    badge: "Free",
    version: "Odoo 19.0 Community",
    price: "Free",
    description: "Lightweight sales summaries for day-to-day Community Edition use.",
    details:
      "Planned module for compact sales reporting without heavy analytics setup or Enterprise-only assumptions.",
    ctaLabel: "Coming soon",
    disabled: true
  },
  {
    type: "free",
    technicalName: "cp_duplicate_checker",
    title: "Duplicate Finder",
    status: "Coming soon",
    badge: "Free",
    version: "Odoo 19.0 Community",
    price: "Free",
    description: "Find potential duplicate partners, products and operational records.",
    details:
      "Planned data-quality helper for safer cleanup before migrations, imports and day-to-day database maintenance.",
    ctaLabel: "Coming soon",
    disabled: true
  },
  {
    type: "free",
    technicalName: "cp_user_role_templates",
    title: "User Role Templates",
    status: "Coming soon",
    badge: "Free",
    version: "Odoo 19.0 Community",
    price: "Free",
    description: "Reusable role templates for consistent user onboarding.",
    details:
      "Planned administrator utility for documenting and applying common role patterns in Community installations.",
    ctaLabel: "Coming soon",
    disabled: true
  },
  {
    type: "free",
    technicalName: "cp_export_xlsx_lite",
    title: "Export XLSX Lite",
    status: "Coming soon",
    badge: "Free",
    version: "Odoo 19.0 Community",
    price: "Free",
    description: "Simple XLSX exports for operational lists and lightweight reports.",
    details:
      "Planned export helper for common business views where a small spreadsheet is enough.",
    ctaLabel: "Coming soon",
    disabled: true
  },
  {
    type: "free",
    technicalName: "cp_activity_reminder_lite",
    title: "Activity Reminder Lite",
    status: "Coming soon",
    badge: "Free",
    version: "Odoo 19.0 Community",
    price: "Free",
    description: "Reminder visibility for overdue activities and follow-up work.",
    details:
      "Planned lightweight reminder board for teams that need clearer activity discipline in Odoo Community.",
    ctaLabel: "Coming soon",
    disabled: true
  },
  {
    type: "free",
    technicalName: "cp_product_margin_lite",
    title: "Product Margin Lite",
    status: "Coming soon",
    badge: "Free",
    version: "Odoo 19.0 Community",
    price: "Free",
    description: "Basic product margin visibility for sales and catalog review.",
    details:
      "Planned module for practical margin checks without positioning it as full accounting or Enterprise analytics.",
    ctaLabel: "Coming soon",
    disabled: true
  },
  {
    type: "free",
    technicalName: "cp_backup_notice",
    title: "Backup Notice",
    status: "Coming soon",
    badge: "Free",
    version: "Odoo 19.0 Community",
    price: "Free",
    description: "Visible backup and maintenance notices for administrators.",
    details:
      "Planned admin helper for keeping backup expectations visible before upgrades, imports and risky changes.",
    ctaLabel: "Coming soon",
    disabled: true
  },
  {
    type: "free",
    technicalName: "cp_quick_menu",
    title: "Quick Menu",
    status: "Coming soon",
    badge: "Free",
    version: "Odoo 19.0 Community",
    price: "Free",
    description: "Fast shortcuts for common screens and repeated business actions.",
    details:
      "Planned productivity helper for administrators and users who move between common Odoo records all day.",
    ctaLabel: "Coming soon",
    disabled: true
  }
];

export const proModules = [
  {
    type: "pro",
    technicalName: "cp_module_health_checker_pro",
    title: "Module Health Checker Pro",
    status: "Coming soon",
    badge: "Pro",
    version: "Odoo 19.0 Community",
    price: "Coming soon",
    description: "Advanced module audits with XML, Python API, migration and PDF report checks.",
    details:
      "Planned Pro extension for deeper module health work: advanced XML view checks, deprecated Python API scanning, migration readiness hints and exportable PDF audit reports.",
    ctaLabel: "Coming soon",
    ctaUrl: boostyPostUrl("module-health-checker-pro"),
    image: "./assets/img/module-health-pro.png",
    imageAlt: "Module Health Checker Pro preview",
    disabled: true
  },
  {
    type: "pro",
    technicalName: "cp_dashboard_pro",
    title: "Dashboard Pro",
    status: "Coming soon",
    badge: "Pro",
    version: "Odoo 19.0 Community",
    price: "$79",
    description: "Clean sales, invoices and inventory dashboards for Odoo 19 Community.",
    details:
      "Sales, invoice and inventory KPI panels for daily management, with compact charts and quick operational summaries.",
    ctaLabel: "Coming soon",
    ctaUrl: boostyPostUrl("dashboard-pro"),
    disabled: true
  },
  {
    type: "pro",
    technicalName: "cp_access_manager_pro",
    title: "Access Manager Pro",
    status: "Coming soon",
    badge: "Pro",
    version: "Odoo 19.0 Community",
    price: "$129",
    description: "Practical access-control review tools for administrators and integrators.",
    details: "Access review tools for users, groups, sensitive menus and permission conflicts in one administrator workspace.",
    ctaLabel: "Coming soon",
    ctaUrl: boostyPostUrl("access-manager-pro"),
    disabled: true
  },
  {
    type: "pro",
    technicalName: "cp_accounting_reports_pro",
    title: "Accounting Reports Pro",
    status: "Coming soon",
    badge: "Pro",
    version: "Odoo 19.0 Community",
    price: "$99",
    description: "Additional accounting report views for Odoo Community installations.",
    details: "Extra financial summaries for invoices, receivables, payables and period review in Odoo Community installations.",
    ctaLabel: "Coming soon",
    ctaUrl: boostyPostUrl("accounting-reports-pro"),
    disabled: true
  },
  {
    type: "pro",
    technicalName: "cp_import_wizard_pro",
    title: "Import Wizard Pro",
    status: "Coming soon",
    badge: "Pro",
    version: "Odoo 19.0 Community",
    price: "$69",
    description: "Guided imports with safer review steps before data reaches production.",
    details: "Guided CSV and XLSX imports with preview, validation hints and safer operator steps before loading production data.",
    ctaLabel: "Coming soon",
    ctaUrl: boostyPostUrl("import-wizard-pro"),
    disabled: true
  },
  {
    type: "pro",
    technicalName: "cp_migration_assistant_pro",
    title: "Migration Assistant Pro",
    status: "Coming soon",
    badge: "Pro",
    version: "Odoo 19.0 Community",
    price: "$109",
    description: "Migration readiness review before upgrading or moving an Odoo database.",
    details: "Readiness checks for modules, dependencies and risky records before upgrades or database moves.",
    ctaLabel: "Coming soon",
    ctaUrl: boostyPostUrl("migration-assistant-pro"),
    disabled: true
  },
  {
    type: "pro",
    technicalName: "cp_woo_connector_pro",
    title: "WooCommerce Connector Pro",
    status: "Coming soon",
    badge: "Pro",
    version: "Odoo 19.0 Community",
    price: "$399",
    description: "WooCommerce and Odoo Community connector for store operations.",
    details: "Sync tools for WooCommerce orders, customers, products and stock visibility in Odoo workflows.",
    ctaLabel: "Coming soon",
    ctaUrl: boostyPostUrl("woo-connector-pro"),
    disabled: true
  },
  {
    type: "pro",
    technicalName: "cp_shopify_connector_pro",
    title: "Shopify Connector Pro",
    status: "Coming soon",
    badge: "Pro",
    version: "Odoo 19.0 Community",
    price: "$189",
    description: "Shopify and Odoo Community connector for store operations.",
    details: "Store connector tools for Shopify catalog, order and stock workflows with practical operational review inside Odoo.",
    ctaLabel: "Coming soon",
    ctaUrl: boostyPostUrl("shopify-connector-pro"),
    disabled: true
  },
  {
    type: "pro",
    technicalName: "cp_inventory_barcode_pro",
    title: "Inventory Barcode Pro",
    status: "Coming soon",
    badge: "Pro",
    version: "Odoo 19.0 Community",
    price: "$45",
    description: "Barcode-assisted inventory workflows for warehouse operations.",
    details: "Barcode-assisted receiving, picking and stock checks for teams that need faster warehouse operations.",
    ctaLabel: "Coming soon",
    ctaUrl: boostyPostUrl("inventory-barcode-pro"),
    disabled: true
  },
  {
    type: "pro",
    technicalName: "cp_purchase_approval_pro",
    title: "Purchase Approval Pro",
    status: "Coming soon",
    badge: "Pro",
    version: "Odoo 19.0 Community",
    price: "$69",
    description: "Purchase approval steps for small teams that need clearer control.",
    details: "Purchase approval steps with responsibility tracking for small teams that need clearer control before confirming orders.",
    ctaLabel: "Coming soon",
    ctaUrl: boostyPostUrl("purchase-approval-pro"),
    disabled: true
  },
  {
    type: "pro",
    technicalName: "cp_recurring_invoice_pro",
    title: "Recurring Invoice Pro",
    status: "Coming soon",
    badge: "Pro",
    version: "Odoo 19.0 Community",
    price: "$79",
    description: "Recurring invoice support for predictable repeat billing workflows.",
    details: "Recurring invoice helpers for repeat billing, renewal follow-up and predictable customer invoicing routines.",
    ctaLabel: "Coming soon",
    ctaUrl: boostyPostUrl("recurring-invoice-pro"),
    disabled: true
  }
];

export const services = [
  {
    type: "service",
    technicalName: "custom_module_development",
    title: "Custom module development",
    status: "Available by request",
    badge: "Service",
    version: "Odoo 17.0-19.0",
    price: "Request quote",
    description: "Private Odoo modules for your business workflow.",
    details: "Use this for workflows that should not become public open-source modules.",
    ctaLabel: "Request quote",
    ctaUrl: mailtoSubject("Custom Odoo module development")
  },
  {
    type: "service",
    technicalName: "odoo_setup",
    title: "Odoo setup",
    status: "Available by request",
    badge: "Service",
    version: "Odoo 19.0 focus",
    price: "Contact by email",
    description: "Installation and configuration for stable Odoo environments.",
    details: "Suitable for initial setup, module installation, environment checks and practical configuration work.",
    ctaLabel: "Contact by email",
    ctaUrl: mailtoSubject("Odoo setup request")
  },
  {
    type: "service",
    technicalName: "report_development",
    title: "Report development",
    status: "Available by request",
    badge: "Service",
    version: "Odoo 17.0-19.0",
    price: "Request report",
    description: "Custom sales, invoice, inventory and accounting reports.",
    details: "A good fit when standard screens do not answer the business question clearly enough.",
    ctaLabel: "Request report",
    ctaUrl: mailtoSubject("Odoo report development")
  },
  {
    type: "service",
    technicalName: "migration_check",
    title: "Migration check",
    status: "Available by request",
    badge: "Service",
    version: "Odoo 17.0-19.0",
    price: "Request audit",
    description: "Technical review before upgrading or moving an Odoo database.",
    details: "Legacy Odoo 16.0 work is available only after technical review and should not be treated as default support.",
    ctaLabel: "Request audit",
    ctaUrl: mailtoSubject("Odoo migration check")
  },
  {
    type: "service",
    technicalName: "free_module_adaptation",
    title: "Free module adaptation",
    status: "Available by request",
    badge: "Service",
    version: "Odoo 19.0 Community",
    price: "By request",
    description: "Adapt open-source modules from this project to your database.",
    details: "Useful when a public module is close to the need but your database requires safe adjustments.",
    ctaLabel: "Request customization",
    ctaUrl: mailtoSubject("Free module adaptation")
  }
];

export const roadmapItems = [
  {
    type: "roadmap",
    technicalName: "roadmap_free_modules",
    title: "10 Free modules",
    status: "In progress",
    badge: "Roadmap",
    version: "Odoo 19.0 Community",
    price: "Free",
    description: "Complete the first public set of lightweight Community modules.",
    details: "The catalog keeps planned Free modules visible so users can see the direction before every module is released.",
    ctaLabel: "View catalog",
    ctaUrl: "#modules"
  },
  {
    type: "roadmap",
    technicalName: "roadmap_pro_modules",
    title: "10 Pro modules",
    status: "Later",
    badge: "Roadmap",
    version: "Odoo 19.0 Community",
    price: "$79-$399",
    description: "Prepare separate paid Boosty posts for Pro releases.",
    details: "Each Pro module should receive its own Boosty URL before the button becomes active.",
    ctaLabel: "Boosty soon",
    ctaUrl: siteLinks.boostyProfile
  },
  {
    type: "roadmap",
    technicalName: "roadmap_services",
    title: "Service offers",
    status: "Ready to discuss",
    badge: "Roadmap",
    version: "Odoo 17.0-19.0",
    price: "Quote",
    description: "Use setup and custom development services for first real customer requests.",
    details: "Services remain visible because they can become useful before every productized module is finished.",
    ctaLabel: "Contact",
    ctaUrl: mailtoSubject("Odoo services")
  }
];

export const faqItems = [
  {
    question: "Which Odoo version is the main target?",
    answer:
      "Primary focus is Odoo 19.0 Community Edition. Custom development and setup can be discussed for Odoo 17.0, 18.0 and 19.0."
  },
  {
    question: "Can you work with Odoo 16.0?",
    answer:
      "Legacy Odoo 16.0 work is available only by request and after technical review, because it is not the main support promise of this site."
  },
  {
    question: "Where will paid Pro modules be available?",
    answer: "Paid Pro modules will be available on Boosty."
  },
  {
    question: "Is this an official Odoo project?",
    answer:
      "No. This is an independent project and is not affiliated with Odoo S.A. Odoo is a trademark of Odoo S.A."
  }
];
