import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "CAIES Fondation",
    template: "CAIES Fondation - %s",
  },
  description: "CAIES Foundation pioneers sustainable solutions via advanced research, employing AI, ML, and geospatial tech for multidimensional impact.",
  twitter: {
    card: "summary_large_image",
    site: "@CaiesF",
    title: "CAIES Fondation",
    description: "CAIES Foundation pioneers sustainable solutions via advanced research, employing AI, ML, and geospatial tech for multidimensional impact.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}