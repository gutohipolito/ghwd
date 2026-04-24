"use client";

import { NavbarOrchestra } from "@/components/NavbarOrchestra";
import { MegaFooter } from "@/components/MegaFooter";
import { motion } from "framer-motion";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { useLanguage } from "@/lib/i18n-context";

const leaders = [
    {
        name: "Gustavo Hipolito",
        role: "Principal / Strategy",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop" // Placeholder: Replace with real photo later
    },
    {
        name: "Creative Team",
        role: "Design & Motion",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
    }
];

export default function AboutPage() {
    const { t, language } = useLanguage();

    return (
        <main className="min-h-screen relative flex flex-col bg-zinc-950 text-white selection:bg-emerald-500 selection:text-black">
            <NavbarOrchestra />

            {/* Header / Manifesto */}
            <PageHero
                pretitle={t('about.header.tag')}
                title={t('about.header.title')}
                showVideo={true}
                videoSrc="/videos/green-earth.mp4"
                videoClassName="opacity-80 !grayscale-0 saturate-150"
            />

            {/* Mission Statement / Introduction */}
            <section className="w-full py-20 bg-zinc-950">
                <div className="container mx-auto px-6 md:px-24">
                    <div className="flex flex-col gap-8 text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-4xl mx-auto text-center">
                    <div className="flex flex-col gap-8 text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-4xl mx-auto text-center">
                        <p dangerouslySetInnerHTML={{ __html: t('about.header.mission_p1') }} />
                        <p dangerouslySetInnerHTML={{ __html: t('about.header.mission_p2') }} />
                        <p dangerouslySetInnerHTML={{ __html: t('about.header.mission_p3') }} />
                    </div>
                    </div>
                </div>
            </section>
            {/* Digital Core Section */}
            <section className="w-full py-32 relative overflow-hidden bg-zinc-950 border-t border-white/5">
                <div className="container mx-auto px-6 md:px-24 relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <span className="text-emerald-500 font-mono text-sm tracking-[0.3em] uppercase mb-6 block">
                                {t('about.header.vision_tag')}
                            </span>
                            <h2 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter mb-8 leading-none">
                                {t('about.header.vision_title')}
                            </h2>
                            <div className="flex flex-col gap-6 text-xl text-zinc-300 font-light max-w-xl">
                                <p>{t('about.header.vision_p1')}</p>
                                <p>{t('about.header.vision_p2')}</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 0.5 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="grid grid-cols-2 gap-8"
                        >
                            <div className="border-l border-white/20 pl-6 py-4">
                                <span className="block text-2xl font-serif text-white mb-2">SP</span>
                                <span className="text-xs font-mono uppercase text-zinc-500">São Paulo</span>
                            </div>
                            <div className="border-l border-white/20 pl-6 py-4">
                                <span className="block text-2xl font-serif text-white mb-2">NY</span>
                                <span className="text-xs font-mono uppercase text-zinc-500">New York</span>
                            </div>
                            <div className="border-l border-white/20 pl-6 py-4">
                                <span className="block text-2xl font-serif text-white mb-2">LIS</span>
                                <span className="text-xs font-mono uppercase text-zinc-500">Lisbon</span>
                            </div>
                            <div className="border-l border-white/20 pl-6 py-4">
                                <span className="block text-2xl font-serif text-white mb-2">EST</span>
                                <span className="text-xs font-mono uppercase text-zinc-500">Estonia</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <MegaFooter />
        </main >
    );
}
