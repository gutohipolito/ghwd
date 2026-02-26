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

            {/* Products Grid */}
            <section className="py-32 px-6 md:px-24">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {productMetadata.map((product, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative bg-zinc-900/40 border border-white/5 p-8 rounded-2xl hover:border-emerald-500/30 transition-all duration-300 hover:bg-zinc-900/60 flex flex-col h-full"
                        >
                            {/* Tech Header */}
                            <div className="flex justify-between items-start mb-8 border-b border-white/5 pb-6">
                                <div className="p-3 bg-white/5 rounded-xl text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                                    <product.icon className="w-6 h-6" />
                                </div>
                                <div className="text-right">
                                    <span className="block font-mono text-xs text-zinc-500 uppercase tracking-widest mb-1">{t('products.version_label')}</span>
                                    <span className="font-mono text-sm text-emerald-500">{product.version}</span>
                                </div>
                            </div>

                            {/* Info Used t() here */}
                            <div className="flex-grow">
                                <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 block">
                                    {t(`products.items.${product.id}.type`)}
                                </span>
                                <h3 className="text-2xl font-serif mb-4 group-hover:text-emerald-400 transition-colors">{product.name}</h3>
                                <p className="text-zinc-400 leading-relaxed mb-8 text-sm">
                                    {t(`products.items.${product.id}.description`)}
                                </p>
                            </div>

                            {/* Tech Stack Specs */}
                            <div className="space-y-4">
                                <div className="flex flex-wrap gap-2">
                                    {product.stack.map((tech, tIdx) => (
                                        <span key={tIdx} className="px-2 py-1 bg-white/5 text-[10px] font-mono uppercase tracking-wider text-zinc-400 rounded border border-white/5">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Hover Overlay Link */}
                            <Link href="/contact" className="absolute inset-0 z-10 focus:outline-none" aria-label={`Inquire about ${product.name}`} />
                        </motion.div>
                    ))}
                </div>
            </section>

            <MegaFooter />
        </main>
    );
}
