import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const SITE = {
  name: "RestoCare",
  title: "RestoCare — Premium Software, AI & Restaurant Solutions",
  description:
    "RestoCare builds enterprise-grade software, AI automation, and restaurant technology. We design and ship premium web apps, mobile apps, SaaS platforms and cloud solutions for startups and enterprises.",
  url: "https://restocare.in",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: "%s · RestoCare",
  },
  description: SITE.description,
  keywords: [
    "AI automation",
    "web development",
    "mobile apps",
    "SaaS development",
    "restaurant software",
    "RestoCare",
    "Make My Restaurant",
    "cloud solutions",
    "UI/UX design",
  ],
  authors: [{ name: "RestoCare" }],
  openGraph: {
    type: "website",
    url: SITE.url,
    title: SITE.title,
    description: SITE.description,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#E53935",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-surface text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-500 focus:px-5 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
