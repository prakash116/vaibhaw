// Global site constants shared across components.
export const site = {
  name: "RestoCare",
  tagline: "Software, AI & Restaurant Technology",
  email: "support@restocare.in",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  address: "Prabhadevi, Mumbai, Maharashtra 400025, India",
  socials: [
    { label: "LinkedIn", href: "#", icon: "Linkedin" },
    { label: "X / Twitter", href: "#", icon: "Twitter" },
    { label: "Instagram", href: "#", icon: "Instagram" },
    { label: "GitHub", href: "#", icon: "Github" },
    { label: "YouTube", href: "#", icon: "Youtube" },
  ],
} as const;

export const navSections = [
  { id: "services", label: "Services" },
  { id: "products", label: "Products" },
  { id: "industries", label: "Industries" },
  { id: "work", label: "Work" },
  { id: "process", label: "Process" },
  { id: "contact", label: "Contact" },
] as const;
