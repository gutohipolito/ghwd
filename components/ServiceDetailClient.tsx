"use client";

import { NavbarOrchestra } from "@/components/NavbarOrchestra";
import { MegaFooter } from "@/components/MegaFooter";
import { PageHero } from "@/components/PageHero";
import { ServiceContent } from "@/lib/services-data";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Calendar, Award, ShieldCheck, Check } from "lucide-react";

export function ServiceDetailClient({ data }: { data: ServiceContent }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // Gerador de JSON-LD estático para RAG/SEO/GEO específico de serviço
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": data.title,
        "description": data.metaDesc,
        "provider": {
            "@type": "Organization",
            "name": "GHWD",
            "url": "https://ghwd.com.br"
        },
        "areaServed": "BR",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": data.title,
            "itemListElement": data.faqItems.map((item, idx) => ({
                "@type": "Question",
                "name": item.q,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.a
                }
            }))
        }
    };

    const toggleFaq = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <main className="min-h-screen relative flex flex-col bg-zinc-950 text-white selection:bg-emerald-500 selection:text-black">
            {/* Injeção Semântica JSON-LD no Head para GEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <NavbarOrchestra />

            {/* Topo do Hub do Serviço */}
            <PageHero
                pretitle={data.tag}
                title={data.title + "."}
                subtitle={data.subtitle}
                videoClassName="scale-110 opacity-20 brightness-50"
            />

            {/* Conteúdo Rico e Otimizado */}
            <section className="relative z-30 py-24 px-6 md:px-24 bg-zinc-950">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                        
                        {/* Lado Esquerdo: E-E-A-T, TL;DR RAG e Autor */}
                        <div className="lg:col-span-4 lg:sticky lg:top-32 self-start space-y-10">
                            
                            {/* TL;DR Box (Foco em RAG - Resumo rápido de informações) */}
                            <div className="border border-white/5 bg-zinc-900/30 rounded-2xl p-6 backdrop-blur-md">
                                <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest block mb-3">
                                    // TL;DR / Resumo Rápido
                                </span>
                                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                                    {data.tldr}
                                </p>
                            </div>

                            {/* Autor & Validação E-E-A-T */}
                            <div className="border-t border-white/10 pt-8 space-y-6">
                                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em] block">
                                    Curado por
                                </span>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-zinc-900 border border-white/10 rounded-full flex items-center justify-center text-zinc-400 font-bold shrink-0">
                                        GH
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold tracking-tight text-base flex items-center gap-1.5">
                                            {data.author}
                                            <Award className="w-4 h-4 text-emerald-500 shrink-0" />
                                        </h4>
                                        <p className="text-zinc-500 text-xs mt-0.5">{data.authorRole}</p>
                                    </div>
                                </div>

                                <div className="space-y-3 pt-2 text-zinc-500 text-xs font-mono">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-zinc-600 shrink-0" />
                                        <span>Última atualização: {data.lastUpdated}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <ShieldCheck className="w-4 h-4 text-zinc-600 shrink-0" />
                                        <span>Adequado à LGPD & Segurança WCAG</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Lado Direito: Texto Longo (800-1200 palavras) + Tabela Comparativa + FAQ */}
                        <div className="lg:col-span-8 space-y-16">
                            
                            {/* Texto Principal */}
                            <article 
                                className="prose prose-invert max-w-none text-zinc-400 font-light leading-relaxed text-base md:text-lg space-y-6 
                                           prose-headings:font-heading prose-headings:font-black prose-headings:italic prose-headings:uppercase prose-headings:tracking-tighter prose-headings:text-white
                                           prose-h2:text-3xl prose-h2:mt-12 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-3
                                           prose-h3:text-xl prose-h3:mt-8
                                           prose-strong:text-white prose-strong:font-semibold
                                           prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
                                           prose-li:marker:text-emerald-500"
                                dangerouslySetInnerHTML={{ __html: data.fullContentHtml }}
                            />

                            {/* Tabela Comparativa (Excelente para GEO / Robôs de IA) */}
                            {data.comparisonRows && data.comparisonRows.length > 0 && (
                                <div className="space-y-6 pt-8">
                                    <h3 className="font-heading font-black italic uppercase text-2xl md:text-3xl tracking-tighter text-white">
                                        {data.comparisonTitle}
                                    </h3>
                                    <div className="overflow-x-auto border border-white/10 rounded-xl bg-zinc-900/10">
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="border-b border-white/10 bg-white/[0.02]">
                                                    {data.comparisonHeaders.map((header, idx) => (
                                                        <th key={idx} className="p-4 text-xs font-mono uppercase text-zinc-500 tracking-wider">
                                                            {header}
                                                        </th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data.comparisonRows.map((row, rIdx) => (
                                                    <tr key={rIdx} className="border-b border-white/5 last:border-b-0 hover:bg-white/[0.01] transition-colors">
                                                        {row.map((cell, cIdx) => (
                                                            <td key={cIdx} className={`p-4 text-sm ${cIdx === 0 ? "font-bold text-white font-mono" : "text-zinc-400"} ${cIdx === 1 ? "text-emerald-400 font-medium" : ""}`}>
                                                                {cell}
                                                            </td>
                                                        ))}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}

                            {/* FAQ Acordeão de Serviço */}
                            {data.faqItems && data.faqItems.length > 0 && (
                                <div className="space-y-6 pt-8 border-t border-white/10">
                                    <h3 className="font-heading font-black italic uppercase text-2xl md:text-3xl tracking-tighter text-white mb-8">
                                        {data.faqTitle}
                                    </h3>
                                    <div className="space-y-1">
                                        {data.faqItems.map((item, idx) => {
                                            const isOpen = openIndex === idx;
                                            return (
                                                <div
                                                    key={idx}
                                                    className="border-b border-white/10 last:border-b-0 py-6"
                                                >
                                                    <button
                                                        onClick={() => toggleFaq(idx)}
                                                        className="w-full flex items-start justify-between text-left group gap-4 cursor-pointer focus:outline-none"
                                                        aria-expanded={isOpen}
                                                    >
                                                        <h4 className="font-heading font-black italic uppercase text-lg md:text-xl tracking-tighter text-white group-hover:text-emerald-400 transition-colors duration-300">
                                                            {item.q}
                                                        </h4>
                                                        <div className="mt-1 shrink-0 bg-white/5 border border-white/10 p-1 rounded-full group-hover:bg-emerald-500 group-hover:text-black transition-colors duration-300">
                                                            <ChevronDown
                                                                className={`w-3.5 h-3.5 text-zinc-400 group-hover:text-black transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`}
                                                            />
                                                        </div>
                                                    </button>

                                                    <AnimatePresence initial={false}>
                                                        {isOpen && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                                                animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                                                                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                                className="overflow-hidden"
                                                            >
                                                                <p className="text-zinc-400 leading-relaxed font-light text-sm md:text-base">
                                                                    {item.a}
                                                                </p>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </section>

            <MegaFooter />
        </main>
    );
}
