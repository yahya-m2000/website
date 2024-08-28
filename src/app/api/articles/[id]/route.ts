// app/api/articles/[id]/route.ts
import { NextResponse } from "next/server";
import { fetchEntry } from "@/app/lib/contentful";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const entry = await fetchEntry(params.id);
    return NextResponse.json(entry);
  } catch (error) {
    console.error("Failed to fetch article:", error);
    return NextResponse.json(
      { error: "Failed to fetch article" },
      { status: 500 }
    );
  }
}
