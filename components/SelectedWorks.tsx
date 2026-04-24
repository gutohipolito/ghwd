"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n-context";

const projects = [
    {
        id: "01",
        client: "Grendene Global",
        title: "Digital Ecosystem Architecture",
        description: "Replatforming a global footwear giant for 50+ markets.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
        link: "/partners/grendene"
    },
    {
        id: "02",
        client: "Hard Rock Cafe",
        title: "Experience Commerce",
        description: "Digitizing the legendary rock & roll dining experience.",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2670&auto=format&fit=crop",
        link: "/partners/hard-rock"
    },
    {
        id: "03",
        client: "Besni",
        title: "Omnichannel Retail Core",
        description: "Connecting 40+ physical stores with high-velocity e-commerce.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop",
        link: "/partners/besni"
    }
];

export function SelectedWorks() {
    const { t } = useLanguage();

    const translatedProjects = [
        { id: "01", key: "grendene", client: "Grendene Global", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop", link: "/partners/grendene" },
        { id: "02", key: "hardrock", client: "Hard Rock Cafe", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2670&auto=format&fit=crop", link: "/partners/hard-rock" },
        { id: "03", key: "besni", client: "Besni", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop", link: "/partners/besni" }
    ];

    return (
        <section className="py-32 bg-zinc-950 text-white border-t border-white/5">
            <div className="container mx-auto px-6 md:px-24">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <span className="text-emerald-500 font-mono text-xs uppercase tracking-widest mb-4 block">
                            {t('home.selected_works.tag')}
                        </span>
                        <h2 className="font-heading font-black italic uppercase text-5xl md:text-8xl tracking-tighter leading-[0.9]">
                            {t('home.selected_works.title')} <br />
                            <span className="text-zinc-600">{t('home.selected_works.title_italic')}</span>
                        </h2>
                    </div>

                    <Link
                        href="/partners"
                        className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-emerald-500 transition-colors"
                    >
                        {t('home.selected_works.view_archive')}
                        <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                </div>

                {/* Gallery */}
                <div className="flex flex-col gap-24">
                    {translatedProjects.map((project, index) => {
                        const content = t(`home.projects_items.${project.key}`) as any;
                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center"
                            >
                                {/* Image - Alternating Layout */}
                                <div className={`md:col-span-7 relative overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                                    <div className="aspect-[16/9] overflow-hidden relative">
                                        <div className="absolute inset-0 bg-emerald-500/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                                        <Image
                                            src={project.image}
                                            alt={content.title}
                                            width={1280}
                                            height={720}
                                            priority={index === 0}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700 ease-out"
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className={`md:col-span-5 flex flex-col gap-6 ${index % 2 === 1 ? 'md:order-1 md:text-right md:items-end' : ''}`}>
                                    <div className="flex flex-col gap-2">
                                        <span className="text-emerald-500 font-mono text-xs uppercase tracking-widest">
                                            {project.client}
                                        </span>
                                        <h3 className="text-3xl md:text-5xl font-heading font-black italic uppercase tracking-tighter text-white group-hover:text-emerald-500 transition-colors duration-500 leading-none">
                                            {content.title}
                                        </h3>
                                    </div>
                                    <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
                                        {content.desc}
                                    </p>
                                    <Link
                                        href={project.link}
                                        className="inline-flex items-center gap-2 text-white border-b border-white/20 pb-1 hover:border-emerald-500 transition-colors w-fit"
                                    >
                                        {t('home.selected_works.case_study')}
                                        <ArrowUpRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
