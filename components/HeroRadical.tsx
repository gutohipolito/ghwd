"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n-context";
import { TextScramble } from "@/components/ui/text-scramble";

export function HeroRadical() {
    const { t } = useLanguage();
    const { scrollY } = useScroll();

    // Parallax effects
    const yText = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-black">

            {/* Aggressive Video Texture Background */}
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover grayscale contrast-125 brightness-75 scale-110"
                >
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-texture-of-black-and-white-liquid-30756-large.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80" />
            </div>

            {/* Massive Typography Container - Brutalist Layout */}
            {/* Added padding to prevent clipping and removed container-level mix-blend-mode for performance */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full py-20 pointer-events-none">

                {/* Line 1: WE ENGINEER */}
                <motion.div
                    style={{ y: yText }}
                    className="flex flex-col md:flex-row items-center gap-2 leading-[0.8] will-change-transform mix-blend-difference"
                >
                    <span className="text-[16vw] md:text-[14vw] font-black text-white tracking-tighter select-none">
                        {t('hero.we_build').split(' ')[0] || "WE"}
                    </span>
                </motion.div>

                {/* Line 2: DIGITAL */}
                {/* Increased leading and padding to absolutely prevent clipping */}
                <motion.h1
                    className="text-[20vw] md:text-[22vw] font-black text-white leading-[0.85] tracking-tighter select-none z-20 mix-blend-difference py-2 will-change-transform"
                >
                    <TextScramble delay={0.4}>
                        DIGITAL
                    </TextScramble>
                </motion.h1>

                {/* Line 3: NERVOUS SYSTEMS */}
                <motion.div
                    style={{ y: yText }}
                    className="flex flex-col items-center mt-4 w-full mix-blend-difference will-change-transform"
                >
                    <span className="text-[9vw] md:text-[8vw] font-bold text-white tracking-widest uppercase opacity-90 hover:tracking-[0.2em] transition-all duration-700 select-none">
                        NERVOUS SYSTEMS
                    </span>

                    {/* Description - Brutal Layout */}
                    <div className="max-w-xl text-center mt-12 px-4 mix-blend-normal pointer-events-auto">
                        <p className="text-lg md:text-xl text-zinc-300 font-mono leading-relaxed bg-black/80 backdrop-blur-md p-6 inline-block border border-white/10">
                            {t('hero.description')}
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Radical CTA: Bottom Centered */}
            <motion.div
                style={{ opacity }}
                className="fixed bottom-12 z-40 mix-blend-difference will-change-opacity pointer-events-auto"
            >
                <Link
                    href="https://api.whatsapp.com/send?phone=5554999221230"
                    className="group flex items-center gap-4 bg-white text-black px-10 py-5 rounded-none uppercase font-black text-xl tracking-tighter hover:bg-emerald-500 hover:text-black transition-all duration-300 transform hover:-skew-x-12"
                >
                    <span>{t('nav.start_project')}</span>
                    <MoveRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Link>
            </motion.div>

        </section>
    );
}
