import type { Metadata } from "next";
import HomeClient from "./home-client";

export const metadata: Metadata = {
  title: "Sugo Product Company — Fractional Product Leadership",
  description:
    "Fractional product leadership for busy founders. Make better product decisions and execute with confidence — without hiring full-time.",
  openGraph: {
    title: "Sugo Product Company — Fractional Product Leadership",
    description: "Fractional product leadership for busy founders.",
    siteName: "Sugo Product Company",
  },
};

export default function HomePage() {
  return <HomeClient />;
}
