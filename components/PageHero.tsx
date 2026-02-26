"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { MoveDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface PageHeroProps {
    pretitle: string;
    title: React.ReactNode;
    subtitle?: string | React.ReactNode;
    videoSrc?: string;
    videoClassName?: string;
    showVideo?: boolean;
}

export function PageHero({
    pretitle,
    title,
    subtitle,
    videoSrc = "https://videos.pexels.com/video-files/3163534/3163534-uhd_2560_1440_30fps.mp4",
    videoClassName,
    showVideo = true
}: PageHeroProps) {
    const { scrollY } = useScroll();

    // Parallax effects
    const yText = useTransform(scrollY, [0, 500], [0, 100]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);

    return (
        <section className="relative h-[80vh] min-h-[600px] flex flex-col justify-center px-6 md:px-24 pt-20 overflow-hidden bg-zinc-950 text-white border-b border-white/5">

            {/* Background - Video Texture */}
            <div className="absolute inset-0 z-0">
                {showVideo && (
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className={cn(
                            "w-full h-full object-cover mix-blend-screen",
                            !videoClassName?.includes('opacity-') && "opacity-30",
                            !videoClassName?.includes('grayscale') && "grayscale",
                            videoClassName
                        )}
                    >
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/50 to-zinc-950" />
            </div>

            <div className="relative z-10 container mx-auto max-w-5xl">

                {/* Pre-headline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex items-center gap-4 mb-8"
                >
                    <span className="h-[1px] w-12 bg-white/40"></span>
                    <span className="text-emerald-500 font-mono text-xs uppercase tracking-widest">
                        {pretitle}
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    style={{ y: yText }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="font-heading text-5xl md:text-8xl leading-[1.1] font-black tracking-tighter mb-8 uppercase"
                >
                    {title}
                </motion.h1>

                {/* Subtitle */}
                {subtitle && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed"
                    >
                        {typeof subtitle === 'string' ? <p>{subtitle}</p> : subtitle}
                    </motion.div>
                )}

            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-12 left-6 md:left-24 z-20"
            >
                <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 uppercase tracking-widest">
                    <span>Scroll</span>
                    <motion.div
                        animate={{ y: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    >
                        <MoveDown className="w-4 h-4" />
                    </motion.div>
                </div>
            </motion.div>

        </section>
    );
}
