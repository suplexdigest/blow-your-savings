import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#d4a853",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "BlowYourSavings — Luxury Items You Didn't Know You Needed",
    template: "%s — BlowYourSavings",
  },
  description:
    "The ultimate scroll of high-end luxury items. Watches, supercars, tech, fashion, and more — curated for people with expensive taste and zero self-control.",
  manifest: "/manifest.json",
  openGraph: {
    title: "BlowYourSavings — Luxury Items You Didn't Know You Needed",
    description: "Endless luxury. Endless scrolling. Endless temptation.",
    type: "website",
    siteName: "BlowYourSavings",
  },
  twitter: {
    card: "summary_large_image",
    title: "BlowYourSavings",
    description: "Endless luxury. Endless scrolling. Endless temptation.",
  },
  robots: { index: true, follow: true },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="apple-touch-icon" href="/icons/icon-192.svg" />
        <meta name="impact-site-verification" content="b040c1af-8029-4fad-8a2d-bd73af866536" />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
        <ServiceWorkerRegistration />
      </body>
    </html>
  );
}
