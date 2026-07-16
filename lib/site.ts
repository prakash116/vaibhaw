// Global site constants shared across components.
export const isStaticExport = process.env.NEXT_PUBLIC_STATIC_EXPORT === "true";
const configuredPublicBasePath = process.env.NEXT_PUBLIC_BASE_PATH;
export const publicBasePath =
  configuredPublicBasePath === "/" ? "" : configuredPublicBasePath ?? "";

export function assetPath(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${publicBasePath}${normalized}`;
}

export const site = {
  name: "AureviaTech",
  tagline: "Software, AI & Restaurant Technology",
  email: "aureviatech15@gmail.com",
  phone: "+91 83687 08750",
  whatsapp: "918368708750",
  address: "C9/193, Sector 7, Rohini, Delhi - 110085, India",
  mapUrl: "https://maps.app.goo.gl/JFThzxfZaXzRuKxs5",
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
