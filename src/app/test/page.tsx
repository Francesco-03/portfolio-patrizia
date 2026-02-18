import { fetchOpere } from "@/lib/strapi";
import { getOpere } from "@/lib/strapiApi";

export default async function Test() {
  const opere = await fetchOpere();
  console.log(opere);
  return <>Funziona:</>;
}
