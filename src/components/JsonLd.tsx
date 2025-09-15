// components/JsonLd.tsx
import Script from "next/script"

export function JsonLd({ data }: { data: object }) {
  return (
    <Script
      id={"jsonld-" + Math.random().toString(36).slice(2)}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
