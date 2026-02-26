"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n-context";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ServicesCTA() {
    const { t } = useLanguage();
    const ctaData = t('services.services_cta') as any;

    return (
        <section className="py-24 bg-zinc-950 text-white border-t border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-24 relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto gap-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="text-5xl md:text-8xl font-heading font-black leading-[0.9] tracking-tighter uppercase"
                    >
                        {ctaData.title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl"
                    >
                        {ctaData.subtitle}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Link
                            href="/contact"
                            className="group flex items-center gap-4 text-white text-lg tracking-[0.2em] uppercase font-bold hover:gap-6 transition-all duration-300"
                        >
                            <span className="border-b-2 border-emerald-500 pb-2 group-hover:border-white transition-colors">
                                {ctaData.button}
                            </span>
                            <ArrowRight className="w-6 h-6 text-emerald-500 group-hover:text-white transition-colors" />
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Dynamic Background Effect */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)]" />
            </div>
        </section>
    );
}
