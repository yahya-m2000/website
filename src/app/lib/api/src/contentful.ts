// lib/contentful.ts
import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

export async function fetchPageContent(contentType: string) {
  try {
    const entries = await client.getEntries({
      content_type: contentType,
      select: [
        "fields.title",
        "fields.subtitle",
        "fields.heroImage",
        "fields.sections",
        "fields.slug",
        "sys.createdAt",
      ],
    });

    return entries.items.map((item: any) => {
      // Refine sections to include only relevant fields
      const refinedSections = item.fields.sections?.map((sectionItem: any) => ({
        title: sectionItem.fields.title,
        subtitle: sectionItem.fields.subtitle,
        body: sectionItem.fields.body,
        callToAction: sectionItem.fields.callToAction
          ? sectionItem.fields.callToAction.sys.id
          : null,
        quote: sectionItem.fields.quote,
        author: sectionItem.fields.author,
        socialLinks: sectionItem.fields.socialLinks
          ? sectionItem.fields.socialLinks.sys.id
          : null,
        image: sectionItem.fields.image
          ? `https:${sectionItem.fields.image.fields.file.url}`
          : null, // Adding the image field to the section if it exists
      }));
      // Get image URLs for images, if they exist
      const imageUrls = item.fields.images
        ? item.fields.images.map(
            (image: any) => `https:${image.fields.file.url}`
          )
        : [];

      return {
        title: item.fields.title,
        subtitle: item.fields.subtitle,
        heroImage: item.fields.heroImage?.fields?.file?.url.startsWith("//")
          ? `https:${item.fields.heroImage.fields.file.url}`
          : item.fields.heroImage?.fields?.file?.url || "",
        date: item.sys.createdAt,
        sections: refinedSections,
        slug: item.fields.slug,
        imageUrls,
      };
    });
  } catch (error) {
    console.error("Error fetching entries:", error);
    return null; // Return null on error
  }
}

export async function fetchInsights(contentType: string) {
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
        "fields.isFeatured",
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
        heroImage: item.fields.heroImage?.fields?.file?.url.startsWith("//")
          ? `https:${item.fields.heroImage.fields.file.url}` // Fix protocol-relative URL
          : item.fields.heroImage?.fields?.file?.url || "",
        date: item.fields.heroImage?.sys?.createdAt ?? "",
        body: item.fields.body,
        images: imageUrls, // Return only image URLs
        slug: item.fields.slug,
        basePath: item.fields.basePath,
        isFeatured: item.fields.isFeatured,
      };
    });
  } catch (error) {
    console.error("Error fetching entries:", error);
    return null; // Return null on error
  }
}

export async function fetchNavigation(contentType: string) {
  try {
    const entries = await client.getEntries({
      content_type: contentType,
      select: ["fields.title", "fields.tabs", "fields.slug"],
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return entries.items.map((item: any) => {
      return {
        title: item.fields.title,
        slug: item.fields.slug,
        tabs: item.fields.tabs,
      };
    });
  } catch (error) {
    console.error("Error fetching entries:", error);
    throw error;
  }
}

export async function fetchFAQS(contentType: string) {
  try {
    const entries = await client.getEntries({
      content_type: contentType,
      select: [
        "fields.question",
        "fields.answer",
        "fields.order",
        "fields.category",
      ],
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return entries.items.map((item: any) => {
      return {
        question: item.fields.question,
        answer: item.fields.answer,
        order: item.fields.order,
        category: item.fields.category,
      };
    });
  } catch (error) {
    console.error("Error fetching entries:", error);
    throw error;
  }
}

export async function fetchInsightBySlug(contentType: string, slug: string) {
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
        "fields.isFeatured",
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
        heroImage: item.fields.heroImage?.fields?.file?.url.startsWith("//")
          ? `https:${item.fields.heroImage.fields.file.url}` // Fix protocol-relative URL
          : item.fields.heroImage?.fields?.file?.url || "",
        date: item.fields.heroImage?.sys?.createdAt ?? "",
        body: item.fields.body,
        images: imageUrls ?? "",
        slug: item.fields.slug,
        basePath: item.fields.basePath,
        isFeatured: item.fields.isFeatured,
      }));
    } else {
      console.log("No entry found with the given slug"); // Log no entry found
      return null; // Return null on error
    }
  } catch (error) {
    console.error("Error fetching entry by slug:", error);
    return null; // Return null on error
  }
}

export async function fetchTextBlockBySlug(contentType: string, slug: string) {
  try {
    console.log(`Fetching entry with slug: ${slug}`); // Log the slug for debugging
    const entries = await client.getEntries({
      content_type: contentType,
      "fields.slug": slug,
      limit: 1,
      select: [
        "fields.title",
        "fields.subtitle",
        "fields.heroImage",
        "fields.body",
        "fields.callToAction",
        "fields.slug",
      ],
    });

    if (entries.items.length > 0) {
      console.log("Entry found:", entries.items[0].fields); // Log the found entry
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return entries.items.map((item: any) => ({
        title: item.fields.title,
        subtitle: item.fields.subtitle,
        heroImage: item.fields.heroImage?.fields?.file?.url.startsWith("//")
          ? `https:${item.fields.heroImage.fields.file.url}` // Fix protocol-relative URL
          : item.fields.heroImage?.fields?.file?.url || "",
        date: item.fields.heroImage?.sys?.createdAt ?? "",
        body: item.fields.body,
        callTOAction: item.fields.callToAction,
        slug: item.fields.slug,
      }));
    } else {
      console.log("No entry found with the given slug"); // Log no entry found
      return null; // Return null on error
    }
  } catch (error) {
    console.error("Error fetching entry by slug:", error);
    return null; // Return null on error
  }
}
