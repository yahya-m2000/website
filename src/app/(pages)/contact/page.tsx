import { redirect } from "next/navigation";

export default function RedirectToContact() {
  // This will redirect to the "who-we-are" page when accessing /about
  redirect("/about/contact-us");
  return null;
}
