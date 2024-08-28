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

export async function fetchEntry(entryId: string) {
  try {
    const entry = await client.getEntry(entryId);
    return entry.fields;
  } catch (error) {
    console.error("Error fetching entry:", error);
    throw error;
  }
}
