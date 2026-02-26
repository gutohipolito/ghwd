"use client";

import { use } from 'react';
import { NavbarOrchestra } from "@/components/NavbarOrchestra";
import { MegaFooter } from "@/components/MegaFooter";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Mock Data (In a real app, this would be a fetch)
const cases: Record<string, any> = {
    "grendene-global": {
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
        next: "hard-rock-cafe"
    },
    // Fallback for demo purposes
    "default": {
        title: "Digital Transformation",
        client: "Global Enterprise",
        heroImage: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2670&auto=format&fit=crop",
        challenge: "Legacy systems were stifling innovation and slowing down go-to-market strategies.",
        solution: "A complete overhaul of the digital ecosystem, focusing on scalability, security, and user experience.",
        metrics: [
            { label: "Efficiency", value: "+250%" },
            { label: "Cost Red.", value: "-30%" },
            { label: "Revenue", value: "+15%" }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2676&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1555421689-4922d54abb00?q=80&w=2670&auto=format&fit=crop"
        ],
        next: "grendene-global"
    }
};

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = use(params);
    const slug = resolvedParams.slug;
    const data = cases[slug as string] || cases["default"];

    return (
        <main className="min-h-screen relative flex flex-col bg-zinc-950 text-white selection:bg-emerald-500 selection:text-black">
            <NavbarOrchestra />

            {/* Hero */}
            <section className="h-[80vh] relative pt-40 px-6 md:px-24 flex flex-col justify-between pb-12">
                <div className="absolute inset-x-0 top-0 h-full w-full z-0">
                    <Image
                        src={data.heroImage}
                        alt={data.title}
                        fill
                        className="object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
                </div>

                <div className="relative z-10 container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="font-mono text-emerald-500 text-xs uppercase tracking-widest mb-6 block">
                            / {data.client}
                        </span>
                        <h1 className="text-5xl md:text-8xl font-serif font-medium leading-tight max-w-4xl">
                            {data.title}
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Metrics */}
            <section className="py-12 border-y border-white/5 bg-zinc-900/30 backdrop-blur-sm">
                <div className="container mx-auto px-6 md:px-24">
                    <div className="grid grid-cols-3 gap-8 text-center md:text-left">
                        {data.metrics.map((m: any, idx: number) => (
                            <div key={idx}>
                                <div className="text-4xl md:text-6xl font-bold font-serif text-white mb-2">{m.value}</div>
                                <div className="text-xs uppercase tracking-widest text-zinc-500">{m.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story */}
            <section className="py-32 px-6 md:px-24">
                <div className="container mx-auto grid md:grid-cols-2 gap-24">
                    <div>
                        <h2 className="text-xs uppercase tracking-widest text-emerald-500 mb-6 font-mono">The Challenge</h2>
                        <p className="text-2xl md:text-3xl font-serif leading-relaxed text-zinc-200">
                            {data.challenge}
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xs uppercase tracking-widest text-emerald-500 mb-6 font-mono">The Solution</h2>
                        <p className="text-xl text-zinc-400 leading-relaxed text-justify">
                            {data.solution}
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="px-6 md:px-24 pb-32">
                <div className="container mx-auto grid gap-8">
                    {data.gallery.map((img: string, idx: number) => (
                        <div key={idx} className="relative aspect-video w-full overflow-hidden rounded-lg grayscale hover:grayscale-0 transition-all duration-700">
                            <Image
                                src={img}
                                alt="Project Screen"
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Next Project */}
            <section className="py-32 border-t border-white/5 bg-zinc-900/20">
                <div className="container mx-auto px-6 md:px-24 text-center">
                    <span className="text-xs uppercase tracking-widest text-zinc-500 mb-6 block">Next Case Study</span>
                    <Link href={`/cases/${data.next}`} className="inline-flex items-center gap-4 text-4xl md:text-6xl font-serif hover:text-emerald-500 transition-colors group">
                        <span>View Next Project</span>
                        <ArrowRight className="w-12 h-12 group-hover:translate-x-4 transition-transform" />
                    </Link>
                </div>
            </section>

            <MegaFooter />
        </main>
    );
}
