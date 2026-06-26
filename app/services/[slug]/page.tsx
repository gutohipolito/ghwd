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
        { slug: 'consultoria-digital' },
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

    return <ServiceDetailClient data={data} />;
}
