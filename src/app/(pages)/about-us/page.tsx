import { redirect } from "next/navigation";

export default function RedirectToWhoWeAre() {
  // This will redirect to the "who-we-are" page when accessing /about
  redirect("/about/who-we-are");
  return null;
}
