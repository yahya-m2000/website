// app/api/insights/[slug]/route.ts
import { NextResponse } from "next/server";
import { fetchEntryBySlug } from "@/lib/contentful";

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    console.log("Fetching insight with slug:", params.slug);
    const entry = await fetchEntryBySlug("article", params.slug);
    console.log("Insight fetched successfully:", entry);
    return NextResponse.json(entry, {
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow all origins
        "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } catch (error) {
    console.error("Failed to fetch insight:", error);
    return NextResponse.json(
      { error: "Failed to fetch insight" },
      { status: 500 }
    );
  }
}
