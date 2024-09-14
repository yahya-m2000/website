import { authOptions } from "@/lib/common/authOptions";
import NextAuth from "next-auth";

import { NextResponse } from "next/server";

// Define the GET request handler for NextAuth
export async function GET(/* request: Request */) {
  const response = await NextAuth(authOptions);
  return NextResponse.json(response);
}
