"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MoveRight, MousePointer2 } from "lucide-react";
import { MouseEvent } from "react";
import { TextScramble } from "@/components/ui/text-scramble";
import { Noise } from "@/components/ui/noise";
import { useLanguage } from "@/lib/i18n-context";

export function HeroModern() {
    const { t } = useLanguage();
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <section
            className="relative min-h-[85vh] flex items-end pb-20 md:pb-32 overflow-hidden bg-transparent group"
            onMouseMove={handleMouseMove}
        >

            {/* --- FLUID BACKGROUND IS NOW GLOBAL --- */}
            {/* Content Container */}
            <div className="container mx-auto px-6 md:px-12 relative z-10">

                <div className="flex flex-col md:flex-row items-end justify-between gap-12">

                    {/* Main Typography - Bottom Left */}
                    <div className="max-w-5xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center gap-4 mb-8"
                        >
                            <div className="h-[2px] w-12 bg-emerald-500"></div>
                            <span className="text-emerald-400 font-mono tracking-[0.2em] uppercase text-xs md:text-sm font-semibold">
                                {t('hero.tagline')}
                            </span>
                        </motion.div>

                        <h1 className="text-6xl md:text-8xl lg:text-[11rem] font-heading font-black leading-[0.8] tracking-tighter text-white mb-8 mix-blend-overlay opacity-90">
                            <span className="block">
                                <TextScramble delay={0.1}>{t('hero.we_build')}</TextScramble>
                            </span>
                            <span className="block text-emerald-500 font-serif italic tracking-normal ml-2 md:ml-4">
                                <TextScramble delay={0.6}>{t('hero.results')}</TextScramble>
                            </span>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 }}
                            className="text-xl md:text-2xl text-zinc-300 max-w-xl font-light leading-relaxed border-l-2 border-white/10 pl-6 backdrop-blur-sm"
                        >
                            {t('hero.description')}
                        </motion.p>
                    </div>

                    {/* Magnetic CTA - Bottom Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.4 }}
                        className="flex flex-col gap-4 w-full md:w-auto pb-4"
                    >
                        <Link
                            href="https://api.whatsapp.com/send?phone=5554999221230"
                            className="group relative flex items-center justify-between gap-6 px-10 py-8 bg-white text-black hover:bg-emerald-400 transition-all duration-500 w-full md:min-w-[320px] overflow-hidden rounded-full"
                        >
                            <div className="absolute inset-0 translate-y-[100%] bg-emerald-400 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0" />

                            <span className="relative z-10 text-lg font-bold tracking-tight group-hover:text-black transition-colors">
                                {t('hero.start_project')}
                            </span>
                            <MoveRight className="relative z-10 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                        </Link>

                        <Link
                            href="/cases"
                            className="group flex items-center justify-between gap-6 px-10 py-8 border border-white/10 text-white hover:bg-white/5 transition-colors w-full md:min-w-[320px] backdrop-blur-md rounded-full"
                        >
                            <span className="text-lg font-medium tracking-tight">{t('hero.view_work')}</span>
                            <ArrowRight className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                        </Link>

                        {/* Scroll Indicator */}
                        <div className="hidden md:flex items-center gap-3 mt-8 opacity-50">
                            <MousePointer2 className="w-4 h-4 text-emerald-400" />
                            <span className="text-xs uppercase tracking-widest text-zinc-500">{t('hero.scroll')}</span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
