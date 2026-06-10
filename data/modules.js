export const siteLinks = {
  githubFreeModules: "https://github.com/DokPlay/odoo-community-plus-addons",
  boostyProfile: "https://boosty.to/example",
  email: "mailto:your-email@example.com",
  linkedin: "https://www.linkedin.com/in/example-profile",
  telegram: "https://t.me/example",
  siteUrl: "https://dokplay.github.io/odoo-plus-site/"
};

const githubModuleUrl = (technicalName) =>
  `${siteLinks.githubFreeModules}/tree/19.0/${technicalName}`;

const boostyPostUrl = (slug) =>
  `https://boosty.to/example/posts/${slug}-placeholder`;

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
    status: "Planned",
    badge: "Free",
    version: "Odoo 19.0 Community",
    price: "Free",
    description: "Quick invoice status visibility for finance and operations follow-up.",
    details:
      "Planned report module for open, paid, overdue and review-needed invoices in small Odoo Community databases.",
    ctaLabel: "View on GitHub",
    ctaUrl: githubModuleUrl("cp_invoice_status_report")
  },
  {
    type: "free",
    technicalName: "cp_simple_sales_report",
    title: "Simple Sales Report",
    status: "Planned",
    badge: "Free",
    version: "Odoo 19.0 Community",
    price: "Free",
    description: "Lightweight sales summaries for day-to-day Community Edition use.",
    details:
      "Planned module for compact sales reporting without heavy analytics setup or Enterprise-only assumptions.",
    ctaLabel: "View on GitHub",
    ctaUrl: githubModuleUrl("cp_simple_sales_report")
  },
  {
    type: "free",
    technicalName: "cp_duplicate_checker",
    title: "Duplicate Finder",
    status: "Planned",
    badge: "Free",
    version: "Odoo 19.0 Community",
    price: "Free",
    description: "Find potential duplicate partners, products and operational records.",
    details:
      "Planned data-quality helper for safer cleanup before migrations, imports and day-to-day database maintenance.",
    ctaLabel: "View on GitHub",
    ctaUrl: githubModuleUrl("cp_duplicate_checker")
  },
  {
    type: "free",
    technicalName: "cp_user_role_templates",
    title: "User Role Templates",
    status: "Planned",
    badge: "Free",
    version: "Odoo 19.0 Community",
    price: "Free",
    description: "Reusable role templates for consistent user onboarding.",
    details:
      "Planned administrator utility for documenting and applying common role patterns in Community installations.",
    ctaLabel: "View on GitHub",
    ctaUrl: githubModuleUrl("cp_user_role_templates")
  },
  {
    type: "free",
    technicalName: "cp_export_xlsx_lite",
    title: "Export XLSX Lite",
    status: "Planned",
    badge: "Free",
    version: "Odoo 19.0 Community",
    price: "Free",
    description: "Simple XLSX exports for operational lists and lightweight reports.",
    details:
      "Planned export helper for common business views where a small spreadsheet is enough.",
    ctaLabel: "View on GitHub",
    ctaUrl: githubModuleUrl("cp_export_xlsx_lite")
  },
  {
    type: "free",
    technicalName: "cp_activity_reminder_lite",
    title: "Activity Reminder Lite",
    status: "Planned",
    badge: "Free",
    version: "Odoo 19.0 Community",
    price: "Free",
    description: "Reminder visibility for overdue activities and follow-up work.",
    details:
      "Planned lightweight reminder board for teams that need clearer activity discipline in Odoo Community.",
    ctaLabel: "View on GitHub",
    ctaUrl: githubModuleUrl("cp_activity_reminder_lite")
  },
  {
    type: "free",
    technicalName: "cp_product_margin_lite",
    title: "Product Margin Lite",
    status: "Planned",
    badge: "Free",
    version: "Odoo 19.0 Community",
    price: "Free",
    description: "Basic product margin visibility for sales and catalog review.",
    details:
      "Planned module for practical margin checks without positioning it as full accounting or Enterprise analytics.",
    ctaLabel: "View on GitHub",
    ctaUrl: githubModuleUrl("cp_product_margin_lite")
  },
  {
    type: "free",
    technicalName: "cp_backup_notice",
    title: "Backup Notice",
    status: "Planned",
    badge: "Free",
    version: "Odoo 19.0 Community",
    price: "Free",
    description: "Visible backup and maintenance notices for administrators.",
    details:
      "Planned admin helper for keeping backup expectations visible before upgrades, imports and risky changes.",
    ctaLabel: "View on GitHub",
    ctaUrl: githubModuleUrl("cp_backup_notice")
  },
  {
    type: "free",
    technicalName: "cp_quick_menu",
    title: "Quick Menu",
    status: "Planned",
    badge: "Free",
    version: "Odoo 19.0 Community",
    price: "Free",
    description: "Fast shortcuts for common screens and repeated business actions.",
    details:
      "Planned productivity helper for administrators and users who move between common Odoo records all day.",
    ctaLabel: "View on GitHub",
    ctaUrl: githubModuleUrl("cp_quick_menu")
  }
];

export const proModules = [
  {
    type: "pro",
    technicalName: "cp_dashboard_pro",
    title: "Dashboard Pro",
    status: "Coming soon",
    badge: "Pro",
    version: "Odoo 19.0 Community",
    price: "$49 placeholder",
    description: "Clean sales, invoices and inventory dashboards for Odoo 19 Community.",
    details:
      "Planned paid module. The final card should link to a dedicated Boosty post with ZIP, INSTALL.md, CHANGELOG.md and LICENSE.txt in the closed section.",
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
    price: "$69 placeholder",
    description: "Practical access-control review tools for administrators and integrators.",
    details: "Planned paid module for clearer access review and permission maintenance workflows.",
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
    price: "$79 placeholder",
    description: "Additional accounting report views for Odoo Community installations.",
    details: "Planned paid reporting module for businesses that need clearer accounting-oriented summaries.",
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
    price: "$59 placeholder",
    description: "Guided imports with safer review steps before data reaches production.",
    details: "Planned paid module for structured import preparation, checks and operator guidance.",
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
    price: "$89 placeholder",
    description: "Migration readiness review before upgrading or moving an Odoo database.",
    details: "Planned paid module for technical review signals. Real migrations still require careful project-specific analysis.",
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
    price: "$99 placeholder",
    description: "Connector roadmap for WooCommerce and Odoo Community workflows.",
    details: "Planned paid connector. Final scope should be confirmed against real store requirements before release.",
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
    price: "$119 placeholder",
    description: "Connector roadmap for Shopify stores and Odoo Community operations.",
    details: "Planned paid connector with final scope reserved for concrete store and catalog workflows.",
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
    price: "$69 placeholder",
    description: "Barcode-assisted inventory workflows for warehouse operations.",
    details: "Planned paid module for practical inventory scanning flows in Community installations.",
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
    price: "$59 placeholder",
    description: "Purchase approval steps for small teams that need clearer control.",
    details: "Planned paid approval workflow for purchase operations and accountability.",
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
    price: "$49 placeholder",
    description: "Recurring invoice support for predictable repeat billing workflows.",
    details: "Planned paid module for repeat billing scenarios in Odoo Community Edition.",
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
    version: "Odoo 17.0-19.0 by request",
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
    price: "Request customization",
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
    price: "Placeholder",
    description: "Prepare separate paid Boosty posts for Pro releases.",
    details: "Each Pro module should receive its own Boosty URL before the button becomes active.",
    ctaLabel: "Boosty placeholder",
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
    question: "Where are paid Pro modules stored?",
    answer:
      "The site only links to external paid access pages. Paid ZIP archives, private source code and payment secrets must not be stored on GitHub Pages."
  },
  {
    question: "Is this an official Odoo project?",
    answer:
      "No. This is an independent project and is not affiliated with Odoo S.A. Odoo is a trademark of Odoo S.A."
  }
];
