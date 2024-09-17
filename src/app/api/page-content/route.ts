// app/api/insights/route.ts
import { NextResponse } from "next/server";
import { fetchPageContent } from "@/lib/api/src/contentful";

export async function GET() {
  try {
    const entries = await fetchPageContent("pageContent");
    return NextResponse.json(entries, {
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow all origins
        "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } catch (error) {
    console.error("Failed to fetch navigation:", error);
    return NextResponse.json(
      { error: "Failed to fetch navigation" },
      { status: 500 }
    );
  }
}
