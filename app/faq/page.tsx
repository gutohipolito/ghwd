"use client";

import { NavbarOrchestra } from "@/components/NavbarOrchestra";
import { MegaFooter } from "@/components/MegaFooter";
import { PageHero } from "@/components/PageHero";
import { useLanguage } from "@/lib/i18n-context";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Calendar, Award, ShieldCheck } from "lucide-react";

export default function FAQPage() {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // Obtém as traduções do FAQ
    const header = t('faq.header') as any || { tag: "/ Inteligência", title: "FAQ.", subtitle: "Perguntas Frequentes" };
    const author = t('faq.author_section') as any || { author_title: "Curado por", author_name: "Gustavo Hipólito", author_role: "Lead Software Architect", last_updated: "Última atualização" };
    const questions = (t('faq.questions') as any[]) || [];

    // Gerador de JSON-LD estático para RAG/SEO/GEO
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": questions.map((item) => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a
            }
        }))
    };

    const toggleQuestion = (idx: number) => {
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

            {/* Topo da página com PageHero ajustado */}
            <PageHero
                pretitle={header.tag}
                title={header.title}
                subtitle={header.subtitle}
                videoClassName="scale-110 opacity-20 brightness-50"
            />

            {/* Conteúdo Principal do FAQ */}
            <section className="relative z-30 py-24 px-6 md:px-24 bg-zinc-950">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                        
                        {/* Lado Esquerdo: E-E-A-T, TL;DR e Dados do Especialista */}
                        <div className="lg:col-span-4 lg:sticky lg:top-32 self-start space-y-10">
                            
                            {/* TL;DR Box (Foco em RAG - Resumo rápido de informações) */}
                            <div className="border border-white/5 bg-zinc-900/30 rounded-2xl p-6 backdrop-blur-md">
                                <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest block mb-3">
                                    // TL;DR / Resumo Rápido
                                </span>
                                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                                    Projetamos sites e sistemas ultra-rápidos sob medida em Next.js com custos transparentes a partir de R$ 4.000 e prazos de 4 a 12 semanas. Todos os sistemas possuem nota máxima em velocidade e conformidade LGPD.
                                </p>
                            </div>

                            {/* Autor & Validação E-E-A-T */}
                            <div className="border-t border-white/10 pt-8 space-y-6">
                                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em] block">
                                    {author.author_title}
                                </span>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-zinc-900 border border-white/10 rounded-full flex items-center justify-center text-zinc-400 font-bold shrink-0">
                                        GH
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold tracking-tight text-base flex items-center gap-1.5">
                                            {author.author_name}
                                            <Award className="w-4 h-4 text-emerald-500 shrink-0" />
                                        </h4>
                                        <p className="text-zinc-500 text-xs mt-0.5">{author.author_role}</p>
                                    </div>
                                </div>

                                <div className="space-y-3 pt-2 text-zinc-500 text-xs font-mono">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-zinc-600 shrink-0" />
                                        <span>{author.last_updated}: Junho de 2026</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <ShieldCheck className="w-4 h-4 text-zinc-600 shrink-0" />
                                        <span>Adequado à LGPD & Segurança WCAG</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Lado Direito: Accordion de Perguntas Otimizado */}
                        <div className="lg:col-span-8 space-y-1">
                            {questions.map((item, idx) => {
                                const isOpen = openIndex === idx;
                                return (
                                    <div
                                        key={idx}
                                        className="border-b border-white/10 last:border-b-0 py-6"
                                    >
                                        <button
                                            onClick={() => toggleQuestion(idx)}
                                            className="w-full flex items-start justify-between text-left group gap-4 cursor-pointer focus:outline-none"
                                            aria-expanded={isOpen}
                                        >
                                            <h3 className="font-heading font-black italic uppercase text-lg md:text-2xl tracking-tighter text-white group-hover:text-emerald-400 transition-colors duration-300">
                                                {item.q}
                                            </h3>
                                            <div className="mt-1 shrink-0 bg-white/5 border border-white/10 p-1.5 rounded-full group-hover:bg-emerald-500 group-hover:text-black transition-colors duration-300">
                                                <ChevronDown
                                                    className={`w-4 h-4 text-zinc-400 group-hover:text-black transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`}
                                                />
                                            </div>
                                        </button>

                                        <AnimatePresence initial={false}>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                                    animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                                                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="text-zinc-400 leading-relaxed font-light text-base md:text-lg">
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
                </div>
            </section>

            <MegaFooter />
        </main>
    );
}
