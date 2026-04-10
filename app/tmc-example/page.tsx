import type { Metadata } from "next";
import TmcExampleClient from "./tmc-example-client";

export const metadata: Metadata = {
  title: "TMC Intelligence — Pre-Interview Product Discovery · Sugo Product Company",
  description:
    "A solo product exploration from discovery through architecture — four product opportunities surfaced from a CEO interview, with a deep dive into portfolio intelligence for the Texas Medical Center.",
};

export default function TmcExamplePage() {
  return <TmcExampleClient />;
}
