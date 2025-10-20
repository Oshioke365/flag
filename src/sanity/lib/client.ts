import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "2v2lyg7l", // your Sanity project ID
  dataset: "production", // your dataset name
  apiVersion: "2025-01-01", // latest date or use 'v2025-01-01'
  useCdn: true, // `false` if you want to fetch fresh data always
});
