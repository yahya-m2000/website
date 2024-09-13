// lib/contentful.ts
import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

// Function to fetch all entries for a specific content type
export async function fetchEntries(contentType: string) {
  try {
    const entries = await client.getEntries({
      content_type: contentType,
      select: [
        "fields.title",
        "fields.subtitle",
        "fields.author",
        "fields.tags",
        "fields.heroImage",
        "fields.body",
        "fields.images",
        "fields.slug",
        "fields.basePath",
      ],
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return entries.items.map((item: any) => {
      const imageUrls = item.fields.images
        ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
          item.fields.images.map(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (image: any) => `https:${image.fields.file.url}`
          )
        : [];

      return {
        title: item.fields.title,
        subtitle: item.fields.subtitle,
        author: item.fields.author,
        tags: item.fields.tags,
        heroImage: item.fields.heroImage?.fields?.file?.url
          ? `https:${item.fields.heroImage.fields.file.url}`
          : "",
        date: item.fields.heroImage?.sys?.createdAt ?? "",
        body: item.fields.body,
        images: imageUrls, // Return only image URLs
        slug: item.fields.slug,
        basePath: item.fields.basePath,
      };
    });
  } catch (error) {
    console.error("Error fetching entries:", error);
    throw error;
  }
}

export async function fetchEntryBySlug(contentType: string, slug: string) {
  try {
    console.log(`Fetching entry with slug: ${slug}`); // Log the slug for debugging
    const entries = await client.getEntries({
      content_type: contentType,
      "fields.slug": slug,
      limit: 1,
      select: [
        "fields.title",
        "fields.subtitle",
        "fields.author",
        "fields.tags",
        "fields.heroImage",
        "fields.body",
        "fields.images",
        "fields.slug",
        "fields.basePath",
      ],
    });

    if (entries.items.length > 0) {
      const item = entries.items[0];
      const imageUrls = Array.isArray(item.fields.images)
        ? item.fields.images.map(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (image: any) => `https:${image.fields.file.url}`
          )
        : [];
      console.log("Entry found:", entries.items[0].fields); // Log the found entry
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return entries.items.map((item: any) => ({
        title: item.fields.title,
        subtitle: item.fields.subtitle,
        author: item.fields.author,
        tags: item.fields.tags,
        heroImage: item.fields.heroImage?.fields?.file?.url ?? "",
        date: item.fields.heroImage?.sys?.createdAt ?? "",
        body: item.fields.body,
        images: imageUrls ?? "",
        slug: item.fields.slug,
        basePath: item.fields.basePath,
      }));
    } else {
      console.log("No entry found with the given slug"); // Log no entry found
      throw new Error("Entry not found");
    }
  } catch (error) {
    console.error("Error fetching entry by slug:", error);
    throw error;
  }
}
