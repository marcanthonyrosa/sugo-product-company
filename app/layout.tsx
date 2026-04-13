import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_DESC =
  "Fractional product leadership for busy founders—clear decisions and execution without a full-time hire yet.";

export const metadata: Metadata = {
  title: "Sugo Product Company — Fractional Product Leadership",
  description: SITE_DESC,
  metadataBase: new URL("https://sugoproduct.co"),
  openGraph: {
    title: "Sugo Product Company — Fractional Product Leadership",
    description: SITE_DESC,
    siteName: "Sugo Product Company",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sugo Product Company — Fractional Product Leadership",
    description: SITE_DESC,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Nav />
        <main id="main-content" className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
