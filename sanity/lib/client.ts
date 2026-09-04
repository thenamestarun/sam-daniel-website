import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "ouxg4bbm",
  dataset: "production",
  apiVersion: "2024-01-01",
  // Editorial pages should reflect published Sanity changes without waiting for CDN cache expiry.
  useCdn: false,
});
