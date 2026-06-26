import { servicesData } from "@/lib/services-data";
import type { Metadata } from "next";

interface LayoutProps {
    children: React.ReactNode;
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const data = servicesData[slug];

    if (!data) {
        return {
            title: "Serviço Não Encontrado",
            description: "O serviço que você está procurando não existe."
        };
    }

    return {
        title: data.metaTitle,
        description: data.metaDesc,
        keywords: data.comparisonHeaders.slice(1).concat([data.title, "GHWD", "Engenharia de Software"]),
        alternates: {
            canonical: `/services/${slug}`
        }
    };
}

export default function ServiceSlugLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
