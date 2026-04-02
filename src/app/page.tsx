import { getOpereSanity } from "@/lib/saniti_apis";
import LandingPageClient from "../components/LandingClient";
import { getOpere } from "@/lib/strapiApi";

export default async function LandingPage() {
  const opere = await getOpereSanity({ max: 3 });

  return <LandingPageClient opere={opere} />;
}
