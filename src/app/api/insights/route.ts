// app/api/insights/route.ts
import { NextResponse } from "next/server";
import { fetchEntries } from "@/lib/contentful";
import { verifyAuth } from "@/lib/verifyAuth";

export async function GET(req: Request) {
  // Verify the user’s JWT
  const authPayload = await verifyAuth(req);

  if (!authPayload) {
    return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
  }

  // If authenticated, fetch and return the entries
  try {
    const entries = await fetchEntries("article");
    return NextResponse.json(entries, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } catch (error) {
    console.error("Failed to fetch articles:", error);
    return NextResponse.json(
      { error: "Failed to fetch articles" },
      { status: 500 }
    );
  }
}
