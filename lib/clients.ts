import clientsData from "./clients.json";

export interface Deliverable {
  title: string;
  type: string;
  date: string;
  url: string;
}

export interface Client {
  slug: string;
  name: string;
  engagementType: string;
  startDate: string;
  status: "active" | "complete";
  notes?: string;
  deliverables: Deliverable[];
}

const clients: Client[] = clientsData as Client[];

export function getClient(slug: string): Client | undefined {
  return clients.find((c) => c.slug === slug);
}

export function getAllClientSlugs(): string[] {
  return clients.map((c) => c.slug);
}
