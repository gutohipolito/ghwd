import { ServiceDetailClient } from "@/components/ServiceDetailClient";
import { servicesData } from "@/lib/services-data";
import { citiesData } from "@/lib/local-data";
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
    const service = servicesData[slug];
    const city = citiesData[citySlug];

    if (!service || !city) return null;

    // Se a cidade for um alias internacional, podemos ajustar o texto para inglês
    const isEnglishService = [
        "web-development",
        "business-automation",
        "artificial-intelligence",
        "integrations",
        "digital-strategy"
    ].includes(slug);

    // Formatação de textos de acordo com o idioma do slug do serviço
    let localizedTitle = "";
    let localizedSubtitle = "";
    let localizedMetaTitle = "";
    let localizedMetaDesc = "";
    let localSectionHtml = "";
    let localizedFaqItems = [];

    if (isEnglishService) {
        // Textos em inglês para SEO local
        localizedTitle = `${service.title} in ${city.name} - ${city.region === 'NYS' ? 'NY' : city.region}`;
        localizedSubtitle = `${service.subtitle} Optimized for businesses in ${city.name} and surrounding region, aligning the ideal technology stack for the local economic context of ${city.businessContext}.`;
        localizedMetaTitle = `${service.title} in ${city.name} | ${city.region === 'NYS' ? 'NY' : city.region} | GHWD`;
        localizedMetaDesc = `Looking for ${service.title.toLowerCase()} in ${city.name}? GHWD designs and develops custom, high-speed websites and software optimized for ${city.businessContext}.`;
        
        localSectionHtml = `
            <h2>Software Engineering & Digital Solutions in ${city.name} - ${city.region}</h2>
            <p>GHWD serves the <strong>${city.name} (${city.country})</strong> market, bringing the same high-performance software engineering and digital design standards applied to global and national enterprises. Understanding the business dynamics of the region, which is highlighted by its <strong>${city.businessContext}</strong>, we build custom systems that align modern stacks (Next.js, React, secure cloud integrations) with local needs for digital scale, automation, and market expansion.</p>
            <p>Our focus is on transforming the digital presence of local industries, e-commerce brands, and startups by implementing lightning-fast web portals and automation workflows that reduce acquisition costs and eliminate operational inefficiencies.</p>
        `;
        
        localizedFaqItems = [
            {
                q: `Does GHWD deliver projects or offer support to companies located in ${city.name}?`,
                a: `Yes, GHWD works with businesses in the ${city.name} region. Our partnership model blends high-velocity remote strategic alignment, agile project management, and on-site visits when required by the project scale, ensuring a global standard of delivery.`
            },
            ...service.faqItems
        ];
    } else {
        // Textos em português para SEO local
        localizedTitle = `${service.title} em ${city.name} - ${city.region}`;
        localizedSubtitle = `${service.subtitle} Otimizado para empresas de ${city.name} e região, integrando a stack ideal para o contexto de ${city.businessContext}.`;
        localizedMetaTitle = `${service.title} em ${city.name} | ${city.region} | GHWD`;
        localizedMetaDesc = `Precisa de ${service.title.toLowerCase()} em ${city.name} (${city.region})? A GHWD projeta e desenvolve sistemas sob medida focados em alta velocidade e conversão para o setor de ${city.businessContext}.`;
        
        localSectionHtml = `
            <h2>Engenharia de Software e Soluções Digitais em ${city.name} - ${city.region}</h2>
            <p>A GHWD atende a região de <strong>${city.name} (${city.state})</strong> trazendo a mesma engenharia de alta performance e excelência digital aplicada a grandes marcas nacionais e globais. Compreendendo o dinamismo econômico local, caracterizado por seu <strong>${city.businessContext}</strong>, projetamos soluções que alinham a stack ideal (Next.js, React, APIs robustas na nuvem) às necessidades locais de competitividade, automação de vendas e expansão de mercado.</p>
            <p>Nosso trabalho é focado em transformar a presença digital de indústrias, comércios e startups locais, implementando páginas ultra-rápidas e automações eficientes que reduzem o custo de captação de clientes e eliminam gargalos manuais operacionais comuns nas operações da Serra Gaúcha e capitais brasileiras.</p>
        `;
        
        localizedFaqItems = [
            {
                q: `A GHWD atende presencialmente ou realiza projetos para empresas em ${city.name}?`,
                a: `Sim. A GHWD atende de forma integrada empresas da região de ${city.name} (${city.state}). Nosso modelo de trabalho combina alinhamento estratégico, reuniões remotas altamente ágeis e visitas técnicas presenciais conforme a necessidade do projeto, garantindo uma entrega com padrão de excelência global.`
            },
            ...service.faqItems
        ];
    }

    const localizedContentHtml = localSectionHtml + service.fullContentHtml;

    return {
        ...service,
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

    return <ServiceDetailClient data={localized} />;
}
