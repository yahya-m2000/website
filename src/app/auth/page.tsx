import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/common/authOptions";
import { GetServerSideProps } from "next";
import Image from "next/image";

export default async function AuthPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    // Not signed in
    return <p>Please sign in to continue.</p>;
  }

  return (
    <div>
      <h1>Welcome, {session.user?.name}</h1>
      <p>Email: {session.user?.email}</p>
      <Image
        src={session.user?.image || ""}
        alt={session.user?.name || ""}
        width={100}
        height={100}
      />
    </div>
  );
}
