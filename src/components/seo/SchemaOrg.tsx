// components/seo/SchemaOrg.tsx - Composant Schema.org amélioré

import { getLocalBusinessSchema, getWebsiteSchema } from "@/lib/schemas";

interface SchemaOrgProps {
  includeWebsite?: boolean;
}

export function SchemaOrg({ includeWebsite = true }: SchemaOrgProps) {
  const localBusinessSchema = getLocalBusinessSchema();
  const websiteSchema = getWebsiteSchema();

  const schemas = includeWebsite
    ? [localBusinessSchema, websiteSchema]
    : [localBusinessSchema];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
