import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.theeasterntradegroup.com/"),
  title: "THE EASTERN TRADE GROUP",
  description:
    "We believe in innovation and, more importantly, the innovators themselves.",
  // Placeholders for metadata images and other properties
  openGraph: {
    title: "THE EASTERN TRADE GROUP",
    description:
      "We believe in innovation and, more importantly, the innovators themselves.",
    url: "https://www.theeasterntradegroup.com/", // Replace with your website URL
    type: "website",
    images: [
      {
        url: "./assets/logo_background_left.png", // Replace with your image path
        width: 1200,
        height: 630,
        alt: "THE EASTERN TRADE GROUP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "THE EASTERN TRADE GROUP",
    description:
      "We believe in innovation and, more importantly, the innovators themselves.",
    images: ["./assets/logo_background_left.png"], // Replace with your image path
  },
  icons: {
    icon: "./assets/logo_background_left.png", // Replace with your favicon path
    shortcut: "./assets/logo_background_left.png", // Replace with your shortcut icon path
    apple: "./assets/logo_background_left.png", // Replace with your Apple touch icon path
  },
  authors: [{ name: "Yahya Gadiid", url: "jadiid.co.uk" }], // Replace with the author or company name
  keywords: ["innovation", "trade", "technology", "business"], // Replace with relevant keywords
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
