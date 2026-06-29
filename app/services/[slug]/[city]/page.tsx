import { ServiceDetailClient } from "@/components/ServiceDetailClient";
import { servicesData } from "@/lib/services-data";
import { citiesData } from "@/lib/local-data";
import { servicesTranslations, citiesTranslations } from "@/lib/kb-translations";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const dynamic = 'force-static';

export function generateStaticParams() {
    const params: { slug: string; city: string }[] = [];
    const serviceSlugs = Object.keys(servicesData);
    const citySlugs = Object.keys(citiesData);

    for (const slug of serviceSlugs) {
        for (const city of citySlugs) {
            params.push({ slug, city });
        }
    }
    return params;
}

interface PageProps {
    params: Promise<{ slug: string; city: string }>;
}

function getLocalizedData(slug: string, citySlug: string) {
    const slugMap: Record<string, string> = {
        "web-development": "desenvolvimento-web",
        "desenvolvimento-web": "desenvolvimento-web",
        "business-automation": "automacao-empresarial",
        "automacao-empresarial": "automacao-empresarial",
        "artificial-intelligence": "inteligencia-artificial",
        "inteligencia-artificial": "inteligencia-artificial",
        "integrations": "integracoes",
        "integracoes": "integracoes",
        "digital-strategy": "arquitetura-de-projetos",
        "arquitetura-de-projetos": "arquitetura-de-projetos"
    };

    const ptServiceKey = slugMap[slug] || slug;
    const service = servicesData[ptServiceKey];
    
    const cityMap: Record<string, string> = {
        "lisbon": "lisboa",
        "lisboa": "lisboa",
        "new-york": "nova-york",
        "nova-york": "nova-york",
        "madrid-es": "madrid",
        "madrid": "madrid",
        "sao-paulo-br": "sao-paulo",
        "sao-paulo": "sao-paulo"
    };
    const ptCityKey = cityMap[citySlug] || citySlug;
    const city = citiesData[ptCityKey];

    if (!service || !city) return null;

    const isEnglishService = [
        "web-development",
        "business-automation",
        "artificial-intelligence",
        "integrations",
        "digital-strategy"
    ].includes(slug);

    const langKey = isEnglishService ? "en" : "pt";
    
    const serviceTrans = servicesTranslations[ptServiceKey]?.[langKey];
    const localizedService = serviceTrans ? { ...service, ...serviceTrans } : service;

    const cityTrans = citiesTranslations[ptCityKey]?.[langKey];
    const localizedCity = cityTrans ? { ...city, ...cityTrans } : city;

    let localizedTitle = "";
    let localizedSubtitle = "";
    let localizedMetaTitle = "";
    let localizedMetaDesc = "";
    let localSectionHtml = "";
    let localizedFaqItems = [];

    if (isEnglishService) {
        localizedTitle = `${localizedService.title} in ${localizedCity.name} - ${localizedCity.region === 'NYS' ? 'NY' : localizedCity.region}`;
        localizedSubtitle = `${localizedService.subtitle} Optimized for businesses in ${localizedCity.name} and surrounding region, aligning the ideal technology stack for the local economic context of ${localizedCity.businessContext}.`;
        localizedMetaTitle = `${localizedService.title} in ${localizedCity.name} | ${localizedCity.region === 'NYS' ? 'NY' : localizedCity.region} | GHWD`;
        localizedMetaDesc = `Looking for ${localizedService.title.toLowerCase()} in ${localizedCity.name}? GHWD designs and develops custom, high-speed websites and software optimized for ${localizedCity.businessContext}.`;
        
        localSectionHtml = `
            <h2>Software Engineering & Digital Solutions in ${localizedCity.name} - ${localizedCity.region}</h2>
            <p>GHWD serves the <strong>${localizedCity.name} (${localizedCity.country})</strong> market, bringing the same high-performance software engineering and digital design standards applied to global and national enterprises. Understanding the business dynamics of the region, which is highlighted by its <strong>${localizedCity.businessContext}</strong>, we build custom systems that align modern stacks (Next.js, React, secure cloud integrations) with local needs for digital scale, automation, and market expansion.</p>
            <p>Our focus is on transforming the digital presence of local industries, e-commerce brands, and startups by implementing lightning-fast web portals and automation workflows that reduce acquisition costs and eliminate operational inefficiencies.</p>
        `;
        
        localizedFaqItems = [
            {
                q: `Does GHWD deliver projects or offer support to companies located in ${localizedCity.name}?`,
                a: `Yes, GHWD works with businesses in the ${localizedCity.name} region. Our partnership model blends high-velocity remote strategic alignment, agile project management, and on-site visits when required by the project scale, ensuring a global standard of delivery.`
            },
            ...localizedService.faqItems
        ];
    } else {
        localizedTitle = `${localizedService.title} em ${localizedCity.name} - ${localizedCity.region}`;
        localizedSubtitle = `${localizedService.subtitle} Otimizado para empresas de ${localizedCity.name} e região, integrando a stack ideal para o contexto de ${localizedCity.businessContext}.`;
        localizedMetaTitle = `${localizedService.title} em ${localizedCity.name} | ${localizedCity.region} | GHWD`;
        localizedMetaDesc = `Precisa de ${localizedService.title.toLowerCase()} em ${localizedCity.name} (${localizedCity.region})? A GHWD projeta e desenvolve sistemas sob medida focados em alta velocidade e conversão para o setor de ${localizedCity.businessContext}.`;
        
        localSectionHtml = `
            <h2>Engenharia de Software e Soluções Digitais em ${localizedCity.name} - ${localizedCity.region}</h2>
            <p>A GHWD atende a região de <strong>${localizedCity.name} (${localizedCity.country})</strong> trazendo a mesma engenharia de alta performance e excelência digital aplicada a grandes marcas nacionais e globais. Compreendendo o dinamismo econômico local, caracterizado por seu <strong>${localizedCity.businessContext}</strong>, projetamos soluções que alinham a stack ideal (Next.js, React, APIs robustas na nuvem) às necessidades locais de competitividade, automação de vendas e expansão de mercado.</p>
            <p>Nosso trabalho é focado em transformar a presença digital de indústrias, comércios e startups locais, implementando páginas ultra-rápidas e automações eficientes que reduzem o custo de captação de clientes e eliminam gargalos manuais operacionais comuns nas operações da Serra Gaúcha e capitais brasileiras.</p>
        `;
        
        localizedFaqItems = [
            {
                q: `A GHWD atende presencialmente ou realiza projetos para empresas em ${localizedCity.name}?`,
                a: `Sim. A GHWD atende de forma integrada empresas da região de ${city.name} (${city.state}). Nosso modelo de trabalho combina alinhamento estratégico, reuniões remotas altamente ágeis e visitas técnicas presenciais conforme a necessidade do projeto, garantindo uma entrega com padrão de excelência global.`
            },
            ...localizedService.faqItems
        ];
    }

    const localizedContentHtml = localSectionHtml + localizedService.fullContentHtml;

    return {
        ...localizedService,
        title: localizedTitle,
        subtitle: localizedSubtitle,
        metaTitle: localizedMetaTitle,
        metaDesc: localizedMetaDesc,
        faqItems: localizedFaqItems,
        fullContentHtml: localizedContentHtml
    };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug, city } = await params;
    const localized = getLocalizedData(slug, city);

    if (!localized) {
        return {
            title: "Serviço Não Encontrado",
            description: "O serviço ou localização solicitados não foram encontrados."
        };
    }

    const cityObj = citiesData[city];

    return {
        title: localized.metaTitle,
        description: localized.metaDesc,
        keywords: localized.comparisonHeaders.slice(1).concat([
            localized.title, 
            cityObj.name, 
            cityObj.region, 
            "GHWD", 
            "Engenharia de Software Local"
        ]),
        alternates: {
            canonical: `/services/${slug}/${city}`
        }
    };
}

export default async function LocalServiceSlugPage({ params }: PageProps) {
    const { slug, city } = await params;
    const localized = getLocalizedData(slug, city);

    if (!localized) {
        notFound();
    }

    const cityObj = citiesData[city];
    const isEn = [
        "web-development",
        "business-automation",
        "artificial-intelligence",
        "integrations",
        "digital-strategy"
    ].includes(slug);

    const pageUrl = `https://ghwd.com.br/services/${slug}/${city}`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": localized.schemaType || "Service",
                "@id": `${pageUrl}#service`,
                "name": localized.title,
                "description": localized.tldr || localized.metaDesc,
                "provider": {
                    "@type": "ProfessionalService",
                    "@id": "https://ghwd.com.br/#professional-service",
                    "name": "GHWD",
                    "url": "https://ghwd.com.br",
                    "image": "https://ghwd.com.br/og-image.png"
                },
                "areaServed": {
                    "@type": "AdministrativeArea",
                    "name": cityObj.name
                }
            },
            {
                "@type": "ProfessionalService",
                "@id": `${pageUrl}#localbusiness`,
                "name": `GHWD ${cityObj.name} - ${localized.title}`,
                "image": "https://ghwd.com.br/og-image.png",
                "url": pageUrl,
                "telephone": "+555499999999",
                "priceRange": "$$",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": cityObj.name,
                    "addressRegion": cityObj.state || cityObj.region,
                    "addressCountry": cityObj.country === "EUA" ? "US" : (cityObj.country === "Espanha" ? "ES" : (cityObj.country === "Portugal" ? "PT" : "BR"))
                },
                "geo": cityObj.geoCoordinates ? {
                    "@type": "GeoCoordinates",
                    "latitude": cityObj.geoCoordinates.latitude,
                    "longitude": cityObj.geoCoordinates.longitude
                } : undefined,
                "areaServed": {
                    "@type": "AdministrativeArea",
                    "name": cityObj.name
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${pageUrl}#breadcrumb`,
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
                        "name": localized.title.split(" em ")[0].split(" in ")[0],
                        "item": `https://ghwd.com.br/services/${slug}`
                    },
                    {
                        "@type": "ListItem",
                        "position": 4,
                        "name": cityObj.name,
                        "item": pageUrl
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": `${pageUrl}#faq`,
                "mainEntity": localized.faqItems.map((faq) => ({
                    "@type": "Question",
                    "name": faq.q,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.a
                    }
                }))
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ServiceDetailClient data={localized} slug={slug} />
        </>
    );
}
