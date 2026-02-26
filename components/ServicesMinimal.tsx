"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n-context";

const services = [
    {
        id: "01",
        title: "Strategy",
        description: "Market positioning, brand diagnosis, and growth roadmaps.",
        tags: ["Audit", "Planning", "Consulting"],
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: "02",
        title: "Design",
        description: "High-end UI/UX that builds trust and authority.",
        tags: ["UI/UX", "Branding", "Motion"],
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2664&auto=format&fit=crop"
    },
    {
        id: "03",
        title: "Development",
        description: "Robust, scalable engineering for complex platforms.",
        tags: ["Next.js", "App", "Commerce"],
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: "04",
        title: "Growth",
        description: "Performance marketing that converts traffic into revenue.",
        tags: ["Ads", "SEO", "CRO"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2669&auto=format&fit=crop"
    }
];

export function ServicesMinimal() {
    const { t } = useLanguage();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const translatedServices = [
        { id: "01", key: "strategy", tags: ["Audit", "Planning", "Consulting"], image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop" },
        { id: "02", key: "design", tags: ["UI/UX", "Branding", "Motion"], image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2664&auto=format&fit=crop" },
        { id: "03", key: "dev", tags: ["Next.js", "App", "Commerce"], image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2670&auto=format&fit=crop" },
        { id: "04", key: "ai", tags: ["LLM", "Agent", "Automation"], image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2664&auto=format&fit=crop" },
        { id: "05", key: "data", tags: ["Tracking", "Analytics", "ROI"], image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2669&auto=format&fit=crop" },
        { id: "06", key: "growth", tags: ["Ads", "SEO", "CRO"], image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" },
        { id: "07", key: "commerce", tags: ["B2B", "Retail", "Global"], image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop" }
    ];

    return (
        <section className="py-24 bg-zinc-950 text-white" id="services">
            <div className="container mx-auto px-6 md:px-24">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                    <h2 className="font-heading font-black italic uppercase text-5xl md:text-7xl tracking-tighter text-white">
                        {t('home.services.title')}
                    </h2>
                    <Link href="/services" className="hidden md:flex items-center gap-2 border-b border-white/20 pb-1 hover:text-zinc-400 transition-colors">
                        <span className="uppercase tracking-widest text-sm font-bold">{t('home.services.view_inventory')}</span>
                        <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* List */}
                <div className="flex flex-col">
                    {translatedServices.map((service, index) => {
                        const content = t(`home.services_items.${service.key}`) as any;
                        return (
                            <motion.div
                                key={service.id}
                                className="group relative border-t border-white/10 py-12 flex flex-col md:flex-row items-baseline justify-between cursor-pointer transition-colors hover:bg-zinc-900/50 px-4"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Counter */}
                                <span className="font-mono text-xs text-zinc-500 mb-4 md:mb-0 w-24">
                                    {service.id} /
                                </span>

                                {/* Title */}
                                <h3 className="font-heading font-black italic uppercase text-4xl md:text-6xl flex-1 group-hover:translate-x-4 transition-transform duration-300 tracking-tighter">
                                    {content.title}
                                </h3>

                                {/* Description (Visible on Desktop Hover or Mobile) */}
                                <div className="md:w-1/3 mt-4 md:mt-0 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                    <p className="text-zinc-400 mb-4 leading-relaxed">
                                        {content.desc}
                                    </p>
                                    <div className="flex gap-2">
                                        {(content.tags || service.tags).map((tag: string) => (
                                            <span key={tag} className="text-[10px] uppercase font-bold tracking-widest border border-white/10 px-2 py-1 rounded-full text-zinc-400">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Arrow */}
                                <ArrowUpRight className="absolute right-4 top-12 w-6 h-6 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-emerald-500" />
                            </motion.div>
                        );
                    })}
                    <div className="border-t border-white/10"></div>
                </div>

            </div>
        </section>
    );
}
