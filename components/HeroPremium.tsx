"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MoveDown } from "lucide-react";
import { useLanguage } from "@/lib/i18n-context";

export function HeroPremium() {
    const { t, language } = useLanguage();
    const { scrollY } = useScroll();

    // Smooth, slow parallax
    const yText = useTransform(scrollY, [0, 500], [0, 100]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);

    return (
        <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-24 pt-20 overflow-hidden bg-zinc-950 text-white">

            {/* Background - Clean & Premium */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="https://images.pexels.com/videos/3163534/pictures/preview-0.jpg"
                    className="w-full h-full object-cover opacity-50 grayscale"
                >
                    <source src="https://videos.pexels.com/video-files/3163534/3163534-uhd_2560_1440_30fps.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay for text contrast */}
            </div>

            <div className="relative z-10 max-w-5xl">

                {/* Pre-headline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex items-center gap-4 mb-8"
                >
                    <span className="h-[1px] w-12 bg-white/40"></span>
                    <span className="text-white/60 font-sans text-sm tracking-[0.2em] uppercase">
                        {t('hero.tagline')}
                    </span>
                </motion.div>

                {/* Headline - Editorial Serif */}
                <motion.h1
                    style={{ y: yText }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="font-heading font-black italic uppercase text-5xl md:text-8xl leading-[0.9] tracking-tighter mb-12"
                >
                    <span dangerouslySetInnerHTML={{ __html: t('hero.headline_html') }} />
                </motion.h1>

                {/* Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col md:flex-row gap-6 items-start"
                >
                    <Link
                        href="https://api.whatsapp.com/send?phone=5554999221230"
                        className="group flex items-center gap-4 text-white text-lg tracking-wide hover:ml-4 transition-all duration-300"
                    >
                        <span className="border-b border-white pb-1 group-hover:border-emerald-500 transition-colors">{t('hero.start_project')}</span>
                        <ArrowRight className="w-5 h-5 group-hover:text-emerald-500 transition-colors" />
                    </Link>
                </motion.div>

            </div>

            {/* Bottom Indicator Removed as requested */}

        </section>
    );
}
