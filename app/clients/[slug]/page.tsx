import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getClient, getAllClientSlugs } from "@/lib/clients";
import ClientWorkspace from "./client-workspace";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllClientSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const client = getClient(slug);
  if (!client) return { title: "Not Found" };
  return {
    title: `${client.name} — Client Workspace · Sugo Product Company`,
    robots: { index: false, follow: false },
  };
}

export default async function ClientWorkspacePage({ params }: Props) {
  const { slug } = await params;
  const client = getClient(slug);
  if (!client) notFound();

  return <ClientWorkspace client={client} />;
}
