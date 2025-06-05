import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";

const poppins = Poppins({
    weight: ["100", "400", "500", "600", "700", "800", "900"],
    subsets: ["devanagari"],
    variable: "--font-poppins"
})

export const metadata: Metadata = {
  metadataBase: new URL("https://caienvsus.org"),
  title: {
    default: "CAIES Fondation",
    template: "CAIES Fondation - %s",
  },
  referrer: 'origin-when-cross-origin',
  authors: [{ name: 'Sushant Singh' }, { name: 'Eshan Singh' }],
  description: "CAIES Foundation pioneers sustainable solutions via advanced research, employing AI, ML, and geospatial tech for multidimensional impact.",
  twitter: {
    card: "summary_large_image",
    site: "@CaiesF",
    title: "CAIES Fondation",
    description: "CAIES Foundation pioneers sustainable solutions via advanced research, employing AI, ML, and geospatial tech for multidimensional impact.",
  },
  creator: 'Eshan Singh',
  openGraph: {
    title: "CAIES Fondation - Home",
    description: "CAIES Foundation pioneers sustainable solutions via advanced research, employing AI, ML, and geospatial tech for multidimensional impact.",
    url: 'https://caienvsus.org',
    siteName: 'CAIES Fondation',
    images: [
      {
        url: '/assets/img/og-image.png',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots:{
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  category: 'Non-Profit Organization',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html>
  );
}
