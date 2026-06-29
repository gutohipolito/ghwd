"use client";

import { NavbarOrchestra } from "@/components/NavbarOrchestra";
import { MegaFooter } from "@/components/MegaFooter";
import { PageHero } from "@/components/PageHero";
import { ServiceContent } from "@/lib/services-data";
import { servicesTranslations } from "@/lib/kb-translations";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Calendar, Award, ShieldCheck, Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n-context";

export function ServiceDetailClient({ data, slug }: { data: ServiceContent; slug: string }) {
    const { t, language } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // Map language
    const isPt = language === 'pt' || language === 'pt-pt';
    const langKey = isPt ? 'pt' : (language === 'es' ? 'es' : 'en');

    // Slug-to-standard-PT-key mapping
    const slugMap: Record<string, string> = {
        "web-development": "desenvolvimento-web",
        "desenvolvimento-web": "desenvolvimento-web",
        "business-automation": "automacao-empresarial",
        "automacao-empresarial": "automacao-empresarial",
        "artificial-intelligence": "inteligencia-artificial",
        "inteligencia-artificial": "inteligencia-artificial",
        "integrations": "integracoes",
        "integracoes": "integracoes",
        "digital-strategy": "arquitetura-de-projetos",
        "arquitetura-de-projetos": "arquitetura-de-projetos"
    };

    const ptKey = slugMap[slug] || slug;
    const trans = servicesTranslations[ptKey]?.[langKey];
    const localized: ServiceContent = trans ? { ...data, ...trans } : data;

    // Gerador de JSON-LD estático para RAG/SEO/GEO específico de serviço
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": localized.title,
        "description": localized.metaDesc,
        "provider": {
            "@type": "Organization",
            "name": "GHWD",
            "url": "https://ghwd.com.br"
        },
        "areaServed": "BR",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": localized.title,
            "itemListElement": localized.faqItems.map((item, idx) => ({
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
                pretitle={localized.tag}
                title={localized.title + "."}
                subtitle={localized.subtitle}
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
                                    {localized.tldr}
                                </p>
                            </div>

                            {/* Autor & Validação E-E-A-T */}
                            <div className="border-t border-white/10 pt-8 space-y-6">
                                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em] block">
                                    {language === 'en' ? 'Curated by' : (language === 'es' ? 'Curado por' : 'Curadoria de')}
                                </span>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-zinc-900 border border-white/10 rounded-full flex items-center justify-center text-zinc-400 font-bold shrink-0">
                                        GH
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold tracking-tight text-base flex items-center gap-1.5">
                                            {localized.author}
                                            <Award className="w-4 h-4 text-emerald-500 shrink-0" />
                                        </h4>
                                        <p className="text-zinc-500 text-xs mt-0.5">{localized.authorRole}</p>
                                    </div>
                                </div>

                                <div className="space-y-3 pt-2 text-zinc-500 text-xs font-mono">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-zinc-600 shrink-0" />
                                        <span>
                                            {language === 'en' ? 'Last update' : (language === 'es' ? 'Última actualización' : 'Última atualização')}: {localized.lastUpdated}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <ShieldCheck className="w-4 h-4 text-zinc-600 shrink-0" />
                                        <span>
                                            {language === 'en' ? 'Complies with LGPD & WCAG Security' : (language === 'es' ? 'Adecuado a LGPD y Seguridad WCAG' : 'Adequado à LGPD & Segurança WCAG')}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Lado Direito: Texto Longo + Tabela Comparativa + FAQ */}
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
                                dangerouslySetInnerHTML={{ __html: localized.fullContentHtml }}
                            />

                            {/* Tabela Comparativa */}
                            {localized.comparisonRows && localized.comparisonRows.length > 0 && (
                                <div className="space-y-6 pt-8">
                                    <h3 className="font-heading font-black italic uppercase text-2xl md:text-3xl tracking-tighter text-white">
                                        {localized.comparisonTitle}
                                    </h3>
                                    <div className="overflow-x-auto border border-white/10 rounded-xl bg-zinc-900/10">
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="border-b border-white/10 bg-white/[0.02]">
                                                    {localized.comparisonHeaders.map((header, idx) => (
                                                        <th key={idx} className="p-4 text-xs font-mono uppercase text-zinc-500 tracking-wider">
                                                            {header}
                                                        </th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {localized.comparisonRows.map((row, rIdx) => (
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
                            {localized.faqItems && localized.faqItems.length > 0 && (
                                <div className="space-y-6 pt-8 border-t border-white/10">
                                    <h3 className="font-heading font-black italic uppercase text-2xl md:text-3xl tracking-tighter text-white mb-8">
                                        {localized.faqTitle}
                                    </h3>
                                    <div className="space-y-1">
                                        {localized.faqItems.map((item, idx) => {
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
                                                        <span className="text-zinc-500 group-hover:text-white transition-colors shrink-0 pt-1">
                                                            <ChevronDown className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                                                        </span>
                                                    </button>
                                                    <AnimatePresence initial={false}>
                                                        {isOpen && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: "auto", opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                                className="overflow-hidden"
                                                            >
                                                                <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light mt-4 pl-1">
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
