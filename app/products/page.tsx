"use client";

import { NavbarOrchestra } from "@/components/NavbarOrchestra";
import { MegaFooter } from "@/components/MegaFooter";
import { motion } from "framer-motion";
import { ArrowUpRight, Box, Cpu, Zap, Layers, BarChart3, Globe } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n-context";
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
                                        <div className="h-px flex-grow bg-white/5" />
                                        <span className="font-mono text-[10px] text-emerald-500/50">
                                            {product.version}
                                        </span>
                                    </div>
                                    <h3 className="text-4xl md:text-6xl font-heading font-black italic uppercase tracking-tightest mb-6 group-hover:text-emerald-500 transition-colors duration-500">
                                        {product.name}
                                    </h3>
                                    <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
                                        {t(`products.items.${product.id}.description`)}
                                    </p>
                                </div>

                                {/* Tech Schematic (Asymmetric Center/Edge) */}
                                <div className={`lg:col-span-5 flex flex-col justify-center lg:items-end ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                                    <div className="relative w-full max-w-md bg-zinc-900/40 border border-white/5 p-8 group-hover:border-emerald-500/20 transition-all duration-700">
                                        {/* Schematic Corner Accents */}
                                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-emerald-500/50" />
                                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-emerald-500/50" />

                                        <h4 className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-6 flex items-center gap-3">
                                            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                            Active Architecture
                                        </h4>

                                        <div className="grid grid-cols-1 gap-4">
                                            {product.stack.map((tech, tIdx) => (
                                                <div key={tIdx} className="flex items-center gap-4 group/item">
                                                    <span className="font-mono text-[10px] text-zinc-700">L-{tIdx + 1}</span>
                                                    <div className="h-px flex-grow bg-white/5 group-hover/item:bg-emerald-500/20 transition-colors" />
                                                    <span className="font-mono text-xs uppercase tracking-wider text-zinc-400 group-hover/item:text-white transition-colors">
                                                        {tech}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        <Link
                                            href="/contact"
                                            className="mt-10 flex items-center justify-between group/link border border-white/5 hover:border-emerald-500/50 px-6 py-3 transition-all"
                                        >
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 group-hover/link:text-white">Request Deployment</span>
                                            <ArrowUpRight className="w-4 h-4 text-zinc-700 group-hover/link:text-emerald-500 transition-colors" />
                                        </Link>
                                    </div>
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
