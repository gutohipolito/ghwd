"use client";

import { useLanguage } from "@/lib/i18n-context";

export function StructuredData() {
  const { language } = useLanguage();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GHWD",
    "alternateName": "Global High-end Web Development",
    "url": "https://ghwd.com.br",
    "logo": "https://ghwd.com.br/ghwd-new-logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "",
      "contactType": "customer service",
      "availableLanguage": ["Portuguese", "English", "Spanish"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/ghwd",
      "https://www.instagram.com/ghwd_digital"
    ],
    "description": language === 'en' 
      ? "Digital agency specializing in high-performance digital nervous systems, Next.js, and Headless Commerce." 
      : "Agência digital especializada em sistemas nervosos digitais de alta performance, Next.js e Headless Commerce."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
