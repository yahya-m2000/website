// app/api/articles/route.ts
import { NextResponse } from "next/server";
import { fetchEntries } from "@/app/lib/contentful";

export async function GET() {
  try {
    const entries = await fetchEntries("article");
    return NextResponse.json(entries);
  } catch (error) {
    console.error("Failed to fetch articles:", error);
    return NextResponse.json(
      { error: "Failed to fetch articles" },
      { status: 500 }
    );
  }
}
