"use client";

import { useLanguage } from "@/lib/i18n-context";
import { motion } from "framer-motion";

export function EditorialContent() {
    const { t } = useLanguage();

    const editorial = t('home.editorial') as any;

    if (!editorial || !editorial.sections) return null;

    return (
        <section className="w-full py-32 px-6 md:px-24 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
            <div className="container mx-auto max-w-5xl relative z-10">
                
                {/* Header (Top) */}
                <div className="mb-20 max-w-4xl space-y-6">
                    <span className="font-mono text-emerald-500 text-xs uppercase tracking-[0.3em] block">
                        {editorial.tag}
                    </span>
                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-black italic uppercase tracking-tighter text-white leading-tight">
                        {editorial.title}
                    </h2>
                    <p className="text-zinc-400 text-base md:text-lg font-light leading-relaxed max-w-2xl">
                        {editorial.subtitle}
                    </p>
                </div>

                {/* Content (Below) */}
                <div className="space-y-16 max-w-4xl">
                    {editorial.sections.map((section: any, idx: number) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: idx * 0.05 }}
                            className="group relative border-b border-white/10 pb-16 last:border-b-0 last:pb-0"
                        >
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-black italic uppercase tracking-tight text-white group-hover:text-emerald-400 transition-colors duration-300 mb-6">
                                {section.title}
                            </h3>
                            <p className="text-zinc-400 leading-relaxed font-light text-base md:text-lg select-all">
                                {section.content}
                            </p>
                            
                            {/* Linha de realce animada no Hover */}
                            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-emerald-500 group-hover:w-full transition-all duration-700 ease-out" />
                        </motion.div>
                    ))}
                </div>

            </div>
            
            {/* Elemento gráfico sutil de fundo */}
            <div className="absolute right-[-10%] top-[20%] w-[40%] h-[40%] bg-emerald-500/5 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none" />
        </section>
    );
}
