import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://taelor-demo.vercel.app"),
  title: "Taelor.ai - AI-Powered Styling for Modern Men",
  description:
    "Discover your perfect style with AI-curated clothing rentals. Effortless fashion, delivered monthly.",
  generator: "v0.app",
  openGraph: {
    title: "Taelor.ai - AI-Powered Styling for Modern Men",
    description:
      "Discover your perfect style with AI-curated clothing rentals. Effortless fashion, delivered monthly.",
    images: [
      {
        url: "/thumbnail-04.png",
        width: 1200,
        height: 630,
        alt: "Taelor.ai - AI-Powered Menswear",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taelor.ai - AI-Powered Styling for Modern Men",
    description:
      "Discover your perfect style with AI-curated clothing rentals. Effortless fashion, delivered monthly.",
    images: ["/thumbnail-04.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
