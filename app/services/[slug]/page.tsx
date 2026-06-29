import { ServiceDetailClient } from "@/components/ServiceDetailClient";
import { servicesData } from "@/lib/services-data";
import { notFound } from "next/navigation";

// Força a geração estática das páginas de serviço (SSG)
export const dynamic = 'force-static';

export function generateStaticParams() {
    return [
        { slug: 'desenvolvimento-web' },
        { slug: 'web-development' },
        { slug: 'automacao-empresarial' },
        { slug: 'business-automation' },
        { slug: 'inteligencia-artificial' },
        { slug: 'artificial-intelligence' },
        { slug: 'integracoes' },
        { slug: 'integrations' },
        { slug: 'arquitetura-de-projetos' },
        { slug: 'digital-strategy' }
    ];
}

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function ServiceSlugPage({ params }: PageProps) {
    const { slug } = await params;
    const data = servicesData[slug];

    if (!data) {
        notFound();
    }

    const isEn = [
        "web-development",
        "business-automation",
        "artificial-intelligence",
        "integrations",
        "digital-strategy"
    ].includes(slug);

    const serviceUrl = `https://ghwd.com.br/services/${slug}`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": data.schemaType || "Service",
                "@id": `${serviceUrl}#service`,
                "name": data.title,
                "description": data.tldr || data.metaDesc,
                "provider": {
                    "@type": "ProfessionalService",
                    "@id": "https://ghwd.com.br/#professional-service",
                    "name": "GHWD",
                    "url": "https://ghwd.com.br",
                    "image": "https://ghwd.com.br/og-image.png"
                },
                "areaServed": {
                    "@type": "AdministrativeArea",
                    "name": isEn ? "Global" : "Brasil"
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${serviceUrl}#breadcrumb`,
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": isEn ? "Home" : "Início",
                        "item": "https://ghwd.com.br"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": isEn ? "Services" : "Serviços",
                        "item": "https://ghwd.com.br/services"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": data.title,
                        "item": serviceUrl
                    }
                ]
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ServiceDetailClient data={data} />
        </>
    );
}
