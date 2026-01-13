import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "o4bm1dnu",
  dataset: "production",
  apiVersion: "2024-01-09",
  // Instant updates ke liye niche wali line FALSE rakhein
  useCdn: false, 
});

const builder = imageUrlBuilder(client);
export const urlFor = (source: any) => builder.image(source);