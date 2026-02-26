"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n-context";

export function Methodology() {
    const { t } = useLanguage();

    // Type casting for i18n steps
    const methodData = t('services.method') as any;
    const steps = methodData.steps || [];

    return (
        <section className="py-32 bg-zinc-950 text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-6 md:px-24 relative z-10">
                {/* Header */}
                <div className="mb-24 max-w-2xl">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-emerald-500 font-mono text-xs uppercase tracking-widest mb-4 block"
                    >
                        {methodData.tag}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-serif font-medium leading-tight"
                    >
                        {methodData.title}
                    </motion.h2>
                </div>

                {/* Steps List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {steps.map((step: any, idx: number) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            className="group relative flex flex-col gap-6"
                        >
                            <div className="flex items-baseline gap-4">
                                <span className="text-zinc-800 group-hover:text-emerald-500/20 font-mono text-6xl font-bold transition-colors duration-500 leading-none">
                                    {step.id}
                                </span>
                                <h3 className="text-xl font-bold uppercase tracking-wide">
                                    {step.title}
                                </h3>
                            </div>
                            <div className="h-[1px] w-full bg-white/10 group-hover:bg-emerald-500/30 transition-colors duration-500" />
                            <p className="text-zinc-400 leading-relaxed font-light group-hover:text-zinc-300 transition-colors">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
