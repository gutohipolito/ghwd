"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export function FluidBackground() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Opacity transitions
    const heroOpacity = useTransform(smoothProgress, [0, 0.3], [1, 0]);
    const secondLayerOpacity = useTransform(smoothProgress, [0.1, 0.4], [0, 1]);

    return (
        <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none bg-black">

            {/* Layer 1: Hero Network (Visible at top) */}
            <motion.div
                style={{ opacity: heroOpacity }}
                className="absolute inset-0 z-10 will-change-[opacity]"
            >
                <div className="absolute inset-0 bg-black/60 z-10" /> {/* Dimmer */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover scale-105 filter saturate-0 contrast-125 brightness-75 will-change-transform"
                >
                    <source src="https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4" type="video/mp4" />
                </video>
            </motion.div>

            {/* Layer 2: Abstract Flow (Fades in) */}
            <motion.div
                style={{ opacity: secondLayerOpacity }}
                className="absolute inset-0 z-20 will-change-[opacity]"
            >
                <div className="absolute inset-0 bg-emerald-950/80 mix-blend-multiply z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-20" />
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover scale-110 filter blur-xl opacity-40 will-change-transform"
                >
                    {/* Reusing working Hero video but blurred for abstract effect */}
                    <source src="https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4" type="video/mp4" />
                </video>
            </motion.div>

            {/* Global Vignette */}
            <div className="absolute inset-0 z-40 bg-radial-gradient from-transparent to-black/80" />
        </div>
    );
}
