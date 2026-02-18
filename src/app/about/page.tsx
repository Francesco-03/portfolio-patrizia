import qs from "qs";

export type Bio = string;
async function getBiografia(): Promise<Bio> {
  const baseUrl =
    process.env.NEXT_PUBLIC_STRAPI_API_URL ?? "http://localhost:1337";
  const path = "/api/biografia";

  const url = new URL(path, baseUrl);

  url.search = qs.stringify({
    fields: ["Biografia"],
  });

  const res = await fetch(url);
  const json = await res.json();
  const bio = json.data.Biografia;
  return bio;
}

export default async function Home() {
  // const res = await getBiografia();

  return <></>;
}
