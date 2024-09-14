import { getServerSession } from "next-auth/next";
import { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "@/api/auth/[...nextauth]/route";

export default async function AuthPage(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Fetch the session using getServerSession
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    // Signed in
    console.log("Session", JSON.stringify(session, null, 2));
    return res.status(200).json({ session });
  } else {
    // Not Signed in
    return res.status(401).json({ error: "Not authenticated" });
  }
}
