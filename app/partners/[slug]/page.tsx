import { CaseStudyClient } from "@/components/CaseStudyClient";

// Força a geração estática das páginas de caso (SSG)
export const dynamic = 'force-static';

export function generateStaticParams() {
    return [
        { slug: 'grendene' },
        { slug: 'hard-rock' },
        { slug: 'besni' }
    ];
}

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function CaseStudyPage({ params }: PageProps) {
    const { slug } = await params;
    return <CaseStudyClient slug={slug} />;
}
