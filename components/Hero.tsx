"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TextReveal } from "@/components/ui/text-reveal";

export function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-20 grayscale"
                >
                    <source
                        src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-background-2868-large.mp4"
                        type="video/mp4"
                    />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]"></div>
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="container mx-auto px-4 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
                >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-sm text-zinc-300">
                        Now Accepting Projects (2.0)
                    </span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-8 leading-tight tracking-tighter">
                    <TextReveal words="Beyond Code." className="inline-block" />
                    <br />
                    <span className="text-emerald-400">
                        <TextReveal words="We Build Legacies." className="inline-block" />
                    </span>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10"
                >
                    Agência especializada em transformação digital e e-commerce de alta
                    performance. Nós criamos o futuro da sua marca online.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="flex flex-col md:flex-row gap-4 justify-center items-center"
                >
                    <Link
                        href="https://api.whatsapp.com/send?phone=5554999221230"
                        className="px-8 py-4 bg-emerald-400 text-black font-semibold rounded-full hover:bg-emerald-300 transition-colors shadow-[0_0_20px_-5px_rgba(52,211,153,0.5)]"
                    >
                        Agendar Briefing
                    </Link>
                    <Link
                        href="/partners"
                        className="group flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm"
                    >
                        Explorar Clientes
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
