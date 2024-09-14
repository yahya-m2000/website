import { NextResponse } from "next/server";
import { authOptions } from "@/api/auth/[...nextauth]/route"; // Ensure correct path to auth options
import { getServerSession } from "next-auth/next";

import { fetchEntries } from "@/lib/contentful";

export async function GET(/* req: Request */) {
  const session = await getServerSession(authOptions);

  // If the user is not authenticated, return a 401 Unauthorized response
  if (!session) {
    return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
  }

  try {
    const entries = await fetchEntries("article");
    return NextResponse.json(entries, {
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow all origins
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
