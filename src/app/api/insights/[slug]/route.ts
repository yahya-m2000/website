// app/api/insights/[slug]/route.ts
import { NextResponse } from "next/server";
import { fetchEntryBySlug } from "@/lib/contentful";

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const entry = await fetchEntryBySlug("article", params.slug); // Using slug
    return NextResponse.json(entry);
  } catch (error) {
    console.error("Failed to fetch insight:", error);
    return NextResponse.json(
      { error: "Failed to fetch insight" },
      { status: 500 }
    );
  }
}
