"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n-context";

export function DashboardsShowcase() {
    const { t } = useLanguage();

    return (
        <section className="relative py-32 bg-zinc-950 text-white overflow-hidden" id="intelligence">
            <div className="container mx-auto px-6 md:px-24 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Editorial Content */}
                    <div className="flex flex-col gap-10">
                        <div className="text-left">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-white/40 font-mono text-xs uppercase tracking-widest mb-4 block"
                            >
                                {t('home.dashboards.tag')}
                            </motion.span>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="text-4xl md:text-[4.3rem] font-heading font-black italic uppercase tracking-tighter leading-[0.9] mb-8"
                            >
                                {t('home.dashboards.title_1')} <br />
                                <span className="text-zinc-600">{t('home.dashboards.title_2')}</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-zinc-400 text-lg leading-relaxed max-w-md"
                            >
                                {t('home.dashboards.description')}
                            </motion.p>
                        </div>

                        {/* Minimal List */}
                        <div className="flex flex-col gap-8 mt-4">
                            {[
                                t('home.dashboards.feature_1'),
                                t('home.dashboards.feature_2'),
                                t('home.dashboards.feature_3')
                            ].map((feature: any, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                                    className="group flex flex-col gap-2 border-l border-zinc-800 pl-6 hover:border-emerald-500 transition-colors duration-500"
                                >
                                    <h3 className="text-xl font-heading font-black italic uppercase tracking-tighter text-white group-hover:text-emerald-500 transition-colors">{feature.title}</h3>
                                    <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
                                        {feature.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Clean Visual (No Sci-fi) */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative rounded-sm overflow-hidden bg-zinc-900"
                        >
                            {/* Simple clean image */}
                            <img
                                src="/female_ceo_glass_office_imac_1770594417752.png"
                                alt="Analytics Dashboard"
                                className="w-full h-auto object-cover opacity-80 hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0"
                            />

                            {/* Minimal overlay - Just a subtle border */}
                            <div className="absolute inset-0 border border-white/5 pointer-events-none" />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
