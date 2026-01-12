import { client } from "@/sanity/lib/client";
import { Footer } from "./Footer";

async function getFooterData() {
  const query = `*[_type == "footer"][0]`;
  return await client.fetch(query);
}

export async function FooterWrapper() {
  const data = await getFooterData();
  return <Footer data={data} />;
}
