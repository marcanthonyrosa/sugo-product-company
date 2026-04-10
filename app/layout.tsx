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

export const metadata: Metadata = {
  title: "Sugo Product Company — Fractional Product Leadership",
  description:
    "Senior product thinking for early-stage founders, without the full-time overhead.",
  metadataBase: new URL("https://sugoproduct.co"),
  openGraph: {
    title: "Sugo Product Company — Fractional Product Leadership",
    description:
      "Fractional product leadership for busy founders. Make better product decisions and execute with confidence — without hiring full-time.",
    siteName: "Sugo Product Company",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sugo Product Company — Fractional Product Leadership",
    description:
      "Fractional product leadership for busy founders. Senior product thinking, without the full-time overhead.",
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
