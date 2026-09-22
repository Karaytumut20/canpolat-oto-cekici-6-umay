import type { Metadata } from "next";
import { MobileBottomBar } from "@/components/mobile-bottom-bar";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: "Sancaktepe Çekici | Umay Oto Kurtarıcı - Çekmeköy, Sultanbeyli, Pendik",
  description:
    "Sancaktepe Paşaköy merkezli Umay Oto Kurtarıcı; Sancaktepe, Çekmeköy, Sultanbeyli ve Pendik'te 7/24 oto çekici, oto kurtarma ve yol yardım sunar. 0530 955 94 52.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteConfig.domain,
    siteName: siteConfig.name,
    title: "Sancaktepe Çekici | Umay Oto Kurtarıcı - Çekmeköy, Sultanbeyli, Pendik",
    description:
      "Sancaktepe, Çekmeköy, Sultanbeyli ve Pendik genelinde 7/24 kayar kasa oto çekici ve yol yardım.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sancaktepe Çekici | Umay Oto Kurtarıcı - Çekmeköy, Sultanbeyli, Pendik",
    description:
      "Sancaktepe, Çekmeköy, Sultanbeyli ve Pendik genelinde 7/24 oto çekici ve yol yardım.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,600;0,700;0,800;0,900;1,700;1,800&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <MobileBottomBar />
      </body>
    </html>
  );
}
