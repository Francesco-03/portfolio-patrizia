import LandingPageClient from "../components/LandingClient";
import { getOpere } from "@/lib/strapiApi";

export default async function LandingPage() {
  const opere = await getOpere({ max: 3 });

  return <LandingPageClient opere={opere} />;
}
