import { NavbarOrchestra } from "@/components/NavbarOrchestra";
import { HeroPremium } from "@/components/HeroPremium";
import { ServicesMinimal } from "@/components/ServicesMinimal";
import { SelectedWorks } from "@/components/SelectedWorks";
import { MegaFooter } from "@/components/MegaFooter";
import { DashboardsShowcase } from "@/components/DashboardsShowcase";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://ghwd.com.br/#website",
        "url": "https://ghwd.com.br",
        "name": "GHWD",
        "description": "Desenvolvimento Web, IA e Automação para Empresas",
        "publisher": {
          "@id": "https://ghwd.com.br/#organization"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://ghwd.com.br/#organization",
        "name": "GHWD",
        "alternateName": "Global High-end Web Development",
        "url": "https://ghwd.com.br",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://ghwd.com.br/#logo",
          "url": "https://ghwd.com.br/ghwd-new-logo.png",
          "caption": "GHWD Logo"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "email": "contato@ghwd.com.br",
          "availableLanguage": ["Portuguese", "English", "Spanish"]
        },
        "sameAs": [
          "https://www.linkedin.com/company/ghwd",
          "https://www.instagram.com/ghwd_digital"
        ],
        "description": "Estúdio de engenharia de software de alta performance, automações de processos com IA e design digital especializado."
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://ghwd.com.br/#professional-service",
        "name": "GHWD - Automação, IA e Desenvolvimento Web",
        "image": "https://ghwd.com.br/og-image.png",
        "url": "https://ghwd.com.br",
        "telephone": "+555499999999",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Centro",
          "addressLocality": "Farroupilha",
          "addressRegion": "RS",
          "postalCode": "95180-000",
          "addressCountry": "BR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -29.2249,
          "longitude": -51.3482
        },
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Serra Gaúcha"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Farroupilha"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Rio Grande do Sul"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Brasil"
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen relative flex flex-col justify-between selection:bg-emerald-500 selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NavbarOrchestra />

      <HeroPremium />

      <ServicesMinimal />

      <DashboardsShowcase />

      {/* <SelectedWorks /> */}

      <MegaFooter />
    </main>
  );
}
