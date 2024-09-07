// lib/contentful.ts
import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

export async function fetchEntries(contentType: string) {
  try {
    const entries = await client.getEntries({
      content_type: contentType,
    });
    return entries.items;
  } catch (error) {
    console.error("Error fetching entries:", error);
    throw error;
  }
}

export async function fetchEntryBySlug(contentType: string, slug: string) {
  try {
    const entries = await client.getEntries({
      content_type: contentType,
      "fields.slug": slug,
      limit: 1,
    });
    if (entries.items.length > 0) {
      return entries.items[0].fields;
    } else {
      throw new Error("Entry not found");
    }
  } catch (error) {
    console.error("Error fetching entry by slug:", error);
    throw error;
  }
}
