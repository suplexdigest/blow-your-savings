import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "BlowYourSavings — Luxury Items You Didn't Know You Needed",
    template: "%s — BlowYourSavings",
  },
  description:
    "The ultimate scroll of high-end luxury items. Watches, supercars, tech, fashion, and more — curated for people with expensive taste and zero self-control.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
