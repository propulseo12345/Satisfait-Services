import { client } from "@/sanity/lib/client";
import { ContactPageContent } from "./ContactPageContent";

async function getContactPageData() {
  const query = `*[_type == "contactPage"][0]`;
  return await client.fetch(query);
}

export default async function ContactPage() {
  const data = await getContactPageData();
  return <ContactPageContent data={data} />;
}
