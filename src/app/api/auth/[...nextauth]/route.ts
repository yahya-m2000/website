import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { NextAuthOptions } from "next-auth";

// Configure NextAuth
export const authOptions: NextAuthOptions = {
  providers: [
    // Google provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    // GitHub provider
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    // You can add more providers here (e.g., Twitter, Facebook, etc.)
  ],
  // Enable session JWT-based handling
  session: {
    strategy: "jwt", // Uses JSON Web Tokens for session
  },
  // Add callbacks for more control over authentication flow
  callbacks: {
    // Customizing the JWT to include additional user information
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    // Adding the user to the session object
    async session({ session, token }) {
      if (token) {
        session.id = token.id;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin", // Custom sign-in page (optional)
    signOut: "/auth/signout", // Custom sign-out page (optional)
    error: "/auth/error", // Custom error page (optional)
  },
  debug: process.env.NODE_ENV === "development", // Enable debug mode in development
};

// NextAuth handler for the route
export default NextAuth(authOptions);
