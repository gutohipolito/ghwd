import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ChevronLeft, Calendar, Clock, ArrowLeft, Award, HelpCircle } from 'lucide-react';
import { NavbarOrchestra } from '@/components/NavbarOrchestra';
import { MegaFooter } from '@/components/MegaFooter';
import { PageHero } from '@/components/PageHero';
import { kbArticles } from '@/lib/kb-data';

export const dynamic = 'force-static';

interface PageProps {
    params: Promise<{ slug: string }>;
}

// 1. Gerar caminhos estáticos para build (SSG)
export async function generateStaticParams() {
    return kbArticles.map((article) => ({
        slug: article.slug,
    }));
}

// 2. Gerar metadados SEO dinâmicos por artigo
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const article = kbArticles.find((a) => a.slug === slug);

    if (!article) {
        return {
            title: "Artigo Não Encontrado | GHWD",
        };
    }

    return {
        title: `${article.title} | GHWD KB`,
        description: article.description,
        keywords: article.tags,
        alternates: {
            canonical: `/kb/${slug}`,
        },
        openGraph: {
            title: article.title,
            description: article.description,
            type: 'article',
            url: `https://ghwd.com.br/kb/${slug}`,
            publishedTime: '2026-06-26T00:00:00.000Z',
            authors: ['Gustavo Hipólito'],
            tags: article.tags,
        }
    };
}

export default async function KBArticlePage({ params }: PageProps) {
    const { slug } = await params;
    const article = kbArticles.find((a) => a.slug === slug);

    if (!article) {
        notFound();
    }

    // JSON-LD integrado para GEO e crawlers de IA
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": article.schemaType,
                "@id": `https://ghwd.com.br/kb/${article.slug}#article`,
                "isPartOf": {
                    "@type": "WebPage",
                    "@id": `https://ghwd.com.br/kb/${article.slug}`
                },
                "headline": article.title,
                "description": article.description,
                "inLanguage": "pt-BR",
                "mainEntityOfPage": `https://ghwd.com.br/kb/${article.slug}`,
                "datePublished": "2026-06-26T00:00:00.000Z",
                "dateModified": "2026-06-26T00:00:00.000Z",
                "author": {
                    "@type": "Person",
                    "name": article.author,
                    "jobTitle": article.authorRole,
                    "worksFor": {
                        "@type": "Organization",
                        "name": "GHWD",
                        "url": "https://ghwd.com.br"
                    }
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "GHWD",
                    "url": "https://ghwd.com.br",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://ghwd.com.br/favicon.ico"
                    }
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": `https://ghwd.com.br/kb/${article.slug}#breadcrumb`,
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Início",
                        "item": "https://ghwd.com.br"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Knowledge Base",
                        "item": "https://ghwd.com.br/kb"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": article.title,
                        "item": `https://ghwd.com.br/kb/${article.slug}`
                    }
                ]
            },
            ...(article.faqItems.length > 0 ? [{
                "@type": "FAQPage",
                "@id": `https://ghwd.com.br/kb/${article.slug}#faq`,
                "mainEntity": article.faqItems.map((faq) => ({
                    "@type": "Question",
                    "name": faq.q,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.a
                    }
                }))
            }] : [])
        ]
    };

    return (
        <main className="min-h-screen relative flex flex-col bg-zinc-950 text-white selection:bg-emerald-500 selection:text-black">
            {/* Injeção semântica JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <NavbarOrchestra />

            {/* Cabeçalho do Artigo */}
            <PageHero
                pretitle={`/ ${article.category}`}
                title={article.title}
                titleClassName="text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] font-black italic tracking-tighter break-words"
                subtitle={
                    <div className="flex flex-wrap items-center gap-6 mt-6 text-zinc-500 font-mono text-xs">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-zinc-600" />
                            <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-zinc-600" />
                            <span>{article.readTime} de leitura</span>
                        </div>
                    </div>
                }
                videoClassName="scale-110 opacity-15 brightness-50"
            />

            {/* Corpo do Artigo com Grid Assimétrico */}
            <section className="relative z-30 py-20 px-6 md:px-24 bg-zinc-950">
                <div className="container mx-auto max-w-6xl">
                    
                    {/* Botão de Retorno */}
                    <div className="mb-12">
                        <Link
                            href="/kb"
                            className="inline-flex items-center gap-2 text-zinc-500 hover:text-emerald-400 font-mono text-xs uppercase tracking-widest transition-colors duration-300"
                        >
                            <ChevronLeft className="w-4 h-4" />
                            Voltar para a Base
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        
                        {/* Lado Esquerdo (Sticky): Resumo Rápido para RAG, Autor, Tags */}
                        <aside className="lg:col-span-4 lg:sticky lg:top-32 self-start space-y-8 w-full min-w-0 order-2 lg:order-1">
                            
                            {/* Bloco TL;DR (Foco em GEO / Sumarização por IA) */}
                            <div className="border border-white/5 bg-zinc-900/30 rounded-3xl p-6 backdrop-blur-md space-y-4">
                                <div className="flex items-center gap-2 text-emerald-500 font-mono text-[9px] tracking-widest uppercase">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                    // TL;DR (Resumo Técnico)
                                </div>
                                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                                    {article.tldr}
                                </p>
                            </div>

                            {/* Informações do Autor */}
                            <div className="border-t border-white/10 pt-6 space-y-4">
                                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block">
                                    Autor Técnico
                                </span>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-zinc-900 border border-white/10 rounded-full flex items-center justify-center text-zinc-400 font-bold shrink-0">
                                        GH
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold tracking-tight text-sm flex items-center gap-1">
                                            {article.author}
                                            <Award className="w-3.5 h-3.5 text-emerald-500" />
                                        </h4>
                                        <p className="text-zinc-500 text-[11px] mt-0.5">{article.authorRole}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Tags do Artigo */}
                            <div className="border-t border-white/10 pt-6 space-y-4">
                                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block">
                                    Tópicos Relacionados
                                </span>
                                <div className="flex flex-wrap gap-2">
                                    {article.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-[10px] font-mono text-zinc-400 bg-zinc-900/50 border border-white/5 px-2.5 py-1 rounded-full uppercase"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </aside>

                        {/* Lado Direito: Conteúdo e Seções */}
                        <div className="lg:col-span-8 space-y-16 w-full min-w-0 overflow-hidden order-1 lg:order-2">
                            
                            {/* Renderização de Seções do Artigo */}
                            <div className="space-y-12">
                                {article.sections.map((section, index) => (
                                    <div key={index} className="space-y-4 scroll-mt-24">
                                        <h2 className="font-heading font-black italic uppercase text-2xl md:text-3xl tracking-tight text-white border-b border-white/5 pb-2">
                                            {section.title}
                                        </h2>
                                        <div className="prose prose-invert max-w-none text-zinc-300 leading-relaxed font-light text-base md:text-lg">
                                            {section.content}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Accordion de FAQs do Artigo (Uso de details nativo para máxima velocidade e SEO) */}
                            {article.faqItems.length > 0 && (
                                <div className="border-t border-white/10 pt-12 space-y-8">
                                    <div className="flex items-center gap-3">
                                        <HelpCircle className="w-6 h-6 text-emerald-500" />
                                        <h3 className="font-heading font-black italic uppercase text-2xl tracking-tighter text-white">
                                            Dúvidas Frequentes do Tema
                                        </h3>
                                    </div>

                                    <div className="space-y-4">
                                        {article.faqItems.map((faq, index) => (
                                            <details
                                                key={index}
                                                className="group border border-white/5 bg-zinc-900/10 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer"
                                            >
                                                <summary className="flex items-center justify-between text-left focus:outline-none list-none">
                                                    <h4 className="font-semibold text-white group-hover:text-emerald-400 transition-colors duration-300 text-base md:text-lg pr-4">
                                                        {faq.q}
                                                    </h4>
                                                    <span className="text-zinc-500 group-open:rotate-180 transition-transform duration-300 shrink-0">
                                                        ▼
                                                    </span>
                                                </summary>
                                                <div className="mt-4 text-zinc-400 leading-relaxed text-sm md:text-base font-light border-t border-white/5 pt-4">
                                                    <p>{faq.a}</p>
                                                </div>
                                            </details>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Conclusão / CTA rápido */}
                            <div className="border border-white/5 bg-zinc-900/10 rounded-3xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mt-16">
                                <div className="space-y-2">
                                    <h4 className="font-bold text-lg text-white">Quer implementar IA na sua empresa?</h4>
                                    <p className="text-zinc-400 text-sm font-light">Agende um diagnóstico gratuito e entenda o potencial de automação do seu negócio.</p>
                                </div>
                                <Link
                                    href="/contact"
                                    className="bg-emerald-500 hover:bg-emerald-400 text-black font-mono text-xs uppercase tracking-widest px-6 py-4 rounded-full transition-all duration-300 font-bold shrink-0"
                                >
                                    Falar com Especialista
                                </Link>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <MegaFooter />
        </main>
    );
}
