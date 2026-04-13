import type { Metadata } from "next";
import HomeClient from "./home-client";

export const metadata: Metadata = {
  title: "Sugo Product Company — Fractional Product Leadership",
  description:
    "Fractional product leadership for busy founders—clear decisions and execution without a full-time hire yet.",
  openGraph: {
    title: "Sugo Product Company — Fractional Product Leadership",
    description:
      "Fractional product leadership for busy founders—clear decisions and execution without a full-time hire yet.",
    siteName: "Sugo Product Company",
  },
};

export default function HomePage() {
  return <HomeClient />;
}
