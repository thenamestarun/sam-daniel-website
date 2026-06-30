import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "ouxg4bbm",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});
