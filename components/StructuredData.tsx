"use client";

import { useLanguage } from "@/lib/i18n-context";

export function StructuredData() {
  const { language } = useLanguage();

  const organizationSchema = {
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
      "availableLanguage": ["Portuguese", "English", "Spanish"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/ghwd",
      "https://www.instagram.com/ghwd_digital"
    ],
    "description": language === 'en' 
      ? "Digital collective specializing in high-performance web development, Next.js, and Headless Commerce." 
      : "Coletivo digital especializado em desenvolvimento web de alta performance, Next.js e Headless Commerce."
  };

  const personSchema = {
    "@type": "Person",
    "@id": "https://ghwd.com.br/#person",
    "name": "Gustavo Hipolito",
    "jobTitle": "Principal Strategist & Founder",
    "worksFor": {
      "@id": "https://ghwd.com.br/#organization"
    },
    "url": "https://ghwd.com.br/about",
    "sameAs": [
      "https://www.linkedin.com/in/gustavohipolito"
    ],
    "description": language === 'en'
      ? "Expert in High-Performance Digital Architecture, Next.js, and Headless Commerce strategy."
      : "Especialista em Arquitetura Digital de Alta Performance, Next.js e estratégia de Headless Commerce."
  };

  const serviceSchema = {
    "@type": "Service",
    "@id": "https://ghwd.com.br/#service",
    "serviceType": language === 'en' ? "High-Performance Web Engineering" : "Engenharia Web de Alta Performance",
    "provider": {
      "@id": "https://ghwd.com.br/#organization"
    },
    "description": language === 'en'
      ? "Engineering robust digital nervous systems using Next.js, design systems, and serverless APIs."
      : "Engenharia de sistemas digitais robustos usando Next.js, design systems e APIs serverless."
  };

  const faqSchema = {
    "@type": "FAQPage",
    "@id": "https://ghwd.com.br/#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": language === 'en' 
          ? "Why choose Next.js for high-performance websites?" 
          : "Por que escolher Next.js para sites de alta performance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": language === 'en'
            ? "Next.js offers static generation (SSG) and server-side rendering (SSR), allowing for instant page loads, excellent Core Web Vitals, and optimal SEO and GEO indexing."
            : "O Next.js oferece geração estática (SSG) e renderização no servidor (SSR), o que permite carregamentos instantâneos, ótimas notas de Core Web Vitals e excelente indexação para SEO e GEO."
        }
      },
      {
        "@type": "Question",
        "name": language === 'en' 
          ? "What is Headless Commerce?" 
          : "O que é Headless Commerce?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": language === 'en'
            ? "Headless commerce decouples the frontend presentation layer from the backend commerce engine, providing maximum performance, security, and design freedom."
            : "Headless commerce separa a camada de apresentação visual (frontend) do motor de e-commerce traseiro (backend), garantindo máxima performance, segurança e liberdade total de design."
        }
      },
      {
        "@type": "Question",
        "name": language === 'en' 
          ? "How does GHWD ensure fast loading times?" 
          : "Como a GHWD garante carregamentos rápidos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": language === 'en'
            ? "By utilizing static exporting, Edge CDN routing, image optimization pipelines, and highly simplified, lightweight DOM architectures."
            : "Utilizando exportação estática, roteamento via Edge CDN, otimização de imagens e arquitetura com DOM leve e simplificado."
        }
      }
    ]
  };

  const graphJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      personSchema,
      serviceSchema,
      faqSchema
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graphJsonLd) }}
    />
  );
}
