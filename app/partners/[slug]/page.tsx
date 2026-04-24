import { CaseStudyClient } from "@/components/CaseStudyClient";

// Static Params for Export
export const dynamic = 'force-static';

export function generateStaticParams() {
    return [
        { slug: 'grendene' },
        { slug: 'hard-rock' },
        { slug: 'besni' }
    ];
}

// Mock Data
const casesData: Record<string, any> = {
    "grendene": {
        title: "E-Commerce Replatforming",
        client: "Grendene Global",
        heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
        challenge: "Grendene needed to unify 50+ international markets under a single, headless commerce architecture without losing local autonomy.",
        solution: "We engineered a composable commerce stack using VTEX IO, enabling rapid deployment of regional storefronts while maintaining a centralized core.",
        metrics: [
            { label: "Performance", value: "+400%" },
            { label: "Markets", value: "50+" },
            { label: "Uptime", value: "99.99%" }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2670&auto=format&fit=crop"
        ],
        next: "hard-rock"
    },
    "hard-rock": {
        title: "Experience Commerce",
        client: "Hard Rock Cafe",
        heroImage: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2670&auto=format&fit=crop",
        challenge: "Digitizing the legendary rock & roll dining experience for a global audience.",
        solution: "A mobile-first loyalty and ordering system that bridges the gap between physical and digital rock culture.",
        metrics: [
            { label: "Engagement", value: "+180%" },
            { label: "Orders", value: "+45%" },
            { label: "Mobile Share", value: "85%" }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2670&auto=format&fit=crop"
        ],
        next: "besni"
    },
    "besni": {
        title: "Omnichannel Retail Core",
        client: "Besni",
        heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop",
        challenge: "Connecting 40+ physical stores with high-velocity e-commerce in a seamless experience.",
        solution: "Implementation of a real-time inventory and unified customer profile across all touchpoints.",
        metrics: [
            { label: "Conversion", value: "+22%" },
            { label: "Omnichannel", value: "100%" },
            { label: "Load Time", value: "0.8s" }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2670&auto=format&fit=crop"
        ],
        next: "grendene"
    }
};

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = casesData[slug] || casesData["grendene"];

    return <CaseStudyClient data={data} />;
}
