"use client";

import { NavbarOrchestra } from "@/components/NavbarOrchestra";
import { MegaFooter } from "@/components/MegaFooter";
import { motion } from "framer-motion";
import { ArrowUpRight, Box, Cpu, Zap, Layers, BarChart3, Globe } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n-context";
import { useModal } from "@/lib/modal-context";
import { PageHero } from "@/components/PageHero";

const productMetadata = [
    {
        id: "velocity",
        name: "Velocity Core",
        version: "v2.4.0",
        icon: Zap,
        stack: ["Next.js 14", "Turborepo", "GraphQL"],
        tags: ["Commerce", "Performance"]
    },
    {
        id: "synapse",
        name: "Synapse",
        version: "v1.1.2",
        icon: Cpu,
        stack: ["Node.js", "Redis", "BullMQ"],
        tags: ["Backend", "Integration"]
    },
    {
        id: "obsidian",
        name: "Obsidian UI",
        version: "v3.0.0",
        icon: Layers,
        stack: ["React", "Tailwind", "Figma"],
        tags: ["UI", "DX"]
    },
    {
        id: "xray",
        name: "X-Ray",
        version: "Beta",
        icon: BarChart3,
        stack: ["Python", "Lighthouse", "Puppeteer"],
        tags: ["Analytics", "Quality"]
    },
    {
        id: "wholesale",
        name: "Wholesale OS",
        version: "v0.9.5",
        icon: Box,
        stack: ["Next.js", "Postgres", "Prisma"],
        tags: ["B2B", "SaaS"]
    },
    {
        id: "edge",
        name: "Edge Delivery",
        version: "v1.0",
        icon: Globe,
        stack: ["Cloudflare", "Vercel", "AWS"],
        tags: ["Infra", "CDN"]
    }
];

export default function ProductsPage() {
    const { t } = useLanguage();
    const { openModal } = useModal();

    return (
        <main className="min-h-screen relative flex flex-col bg-zinc-950 text-white selection:bg-emerald-500 selection:text-black">
            <NavbarOrchestra />

            {/* Header */}
            <PageHero
                pretitle={t('products.header.tag')}
                title={<>{t('products.header.title_1')} <br /><span className="italic text-zinc-500">{t('products.header.title_2')}</span></>}
                subtitle={t('products.header.description')}
                videoClassName="rotate-180 scale-125"
            />

            {/* Products Section - Blueprint Layout */}
            <section className="py-24 px-6 md:px-24">
                <div className="container mx-auto">
                    <div className="flex flex-col">
                        {productMetadata.map((product, idx) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className={`group relative grid grid-cols-1 lg:grid-cols-12 border-t border-white/10 py-20 gap-12 lg:gap-0 ${idx === productMetadata.length - 1 ? 'border-b' : ''}`}
                            >
                                {/* Industrial ID & Icon */}
                                <div className="lg:col-span-2 flex flex-row lg:flex-col justify-between items-start">
                                    <span className="text-6xl md:text-8xl font-black font-heading text-white/5 group-hover:text-emerald-500/10 transition-colors duration-700 leading-none tabular-nums">
                                        {(idx + 1).toString().padStart(2, '0')}
                                    </span>
                                    <div className="p-4 border border-white/10 group-hover:border-emerald-500/30 transition-colors duration-500 bg-zinc-900/50">
                                        <product.icon className="w-8 h-8 text-emerald-500" />
                                    </div>
                                </div>

                                {/* Core Info */}
                                <div className={`lg:col-span-5 flex flex-col justify-center ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                                    <div className="mb-4 flex items-baseline gap-4">
                                        <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-bold">
                                            {t(`products.items.${product.id}.type`)}
                                        </span>
                                    </div>
                                    <h3 className="text-4xl md:text-6xl font-heading font-black italic uppercase tracking-tightest mb-6 group-hover:text-emerald-500 transition-colors duration-500">
                                        {product.name}
                                    </h3>
                                    <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
                                        {t(`products.items.${product.id}.description`)}
                                    </p>
                                </div>

                                {/* CTA Section (Clean & Impactful) */}
                                <div className={`lg:col-span-5 flex flex-col justify-center ${idx % 2 === 1 ? 'lg:order-1 lg:items-start' : 'lg:items-end'} mt-8 lg:mt-0`}>
                                    <button
                                        onClick={openModal}
                                        className="group relative inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full uppercase font-black text-sm tracking-widest overflow-hidden transition-all duration-300 w-full md:w-auto
                                        before:absolute before:inset-0 before:bg-emerald-500 before:translate-x-[-100%] hover:before:translate-x-0 before:transition-transform before:duration-500 before:ease-[cubic-bezier(0.19,1,0.22,1)]"
                                    >
                                        <span className="relative z-10">{t('nav.start_project')}</span>
                                        <ArrowUpRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </button>
                                </div>

                                {/* Hover Background Effect */}
                                <div className="absolute inset-0 bg-emerald-500/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <MegaFooter />
        </main>
    );
}
