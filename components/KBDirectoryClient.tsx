"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, BookOpen, Clock, Calendar, ArrowUpRight, ArrowRight } from 'lucide-react';
import { KBArticle, GlossaryTerm } from '@/lib/kb-data';
import { useLanguage } from '@/lib/i18n-context';

interface KBDirectoryClientProps {
    articles: KBArticle[];
}

export function KBDirectoryClient({ articles }: KBDirectoryClientProps) {
    const { language } = useLanguage();
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    // Localização de strings de controle
    const isPt = language === 'pt' || language === 'pt-pt';
    const isEs = language === 'es';

    const textAll = isPt ? "Todos" : (isEs ? "Todos" : "All");
    const textSearchPlaceholder = isPt ? "Buscar artigos técnicos..." : (isEs ? "Buscar artículos técnicos..." : "Search technical articles...");
    const textGlossaryBannerTitle = isPt ? "Glossário Técnico Corporativo" : (isEs ? "Glosario Técnico Corporativo" : "Corporate Technical Glossary");
    const textGlossaryBannerDesc = isPt ? "Precisa de uma definição rápida? Explore nosso dicionário interativo com conceitos de IA, RAG, MCP e engenharia." : (isEs ? "¿Necesita una definición rápida? Explore nuestro glosario con conceitos de IA, RAG, MCP y ingeniería." : "Need a quick definition? Explore our interactive glossary with concepts on AI, RAG, MCP, and web engineering.");
    const textGlossaryButton = isPt ? "Explorar Termos" : (isEs ? "Explorar Términos" : "Explore Terms");
    const textNoArticles = isPt ? "Nenhum artigo encontrado para os filtros selecionados." : (isEs ? "No se encontraron artículos para los filtros seleccionados." : "No articles found for the selected filters.");
    const textReadTime = isPt ? "leitura" : (isEs ? "lectura" : "read");

    // Categorias únicas baseadas nos artigos
    const categories = [
        'All',
        ...Array.from(new Set(articles.map(article => article.category)))
    ];

    // Mapear categoria em inglês para exibir localizado se necessário (aqui mantemos a categoria do artigo)
    const getLocalizedCategory = (cat: string) => {
        if (cat === 'All') return textAll;
        return cat;
    };

    // Filtragem lógica
    const filteredArticles = articles.filter(article => {
        const matchesSearch = 
            article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        
        const matchesCategory = activeCategory === 'All' || article.category === activeCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <div className="space-y-12">
            {/* Barra de busca e Filtros de Categorias */}
            <div className="flex flex-col md:flex-row gap-6 justify-between items-stretch md:items-center border-b border-white/5 pb-8">
                {/* Categorias */}
                <div className="flex flex-wrap gap-2.5 order-2 md:order-1">
                    {categories.map((category) => {
                        const isActive = activeCategory === category;
                        return (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer border ${
                                    isActive 
                                        ? 'bg-emerald-500/10 border-emerald-500/45 text-emerald-400 font-bold shadow-[0_0_15px_rgba(16,185,129,0.1)]' 
                                        : 'bg-zinc-900/30 border-white/5 text-zinc-400 hover:border-white/20 hover:text-white'
                                }`}
                            >
                                {getLocalizedCategory(category)}
                            </button>
                        );
                    })}
                </div>

                {/* Busca */}
                <div className="relative md:w-80 order-1 md:order-2">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder={textSearchPlaceholder}
                        className="w-full bg-zinc-900/40 border border-white/5 focus:border-emerald-500/50 rounded-full py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-zinc-600 focus:outline-none transition-all duration-300 font-light"
                    />
                </div>
            </div>

            {/* Banner do Glossário */}
            <div className="relative group overflow-hidden border border-white/5 bg-zinc-900/20 rounded-3xl p-8 backdrop-blur-md flex flex-col md:flex-row items-start md:items-center justify-between gap-8 transition-all duration-300 hover:border-emerald-500/25">
                {/* Glow decorativo de fundo */}
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-emerald-500/5 rounded-full filter blur-[80px] pointer-events-none group-hover:bg-emerald-500/10 transition-colors duration-500"></div>
                
                <div className="space-y-3 max-w-2xl relative z-10">
                    <div className="flex items-center gap-2 text-emerald-500 font-mono text-[10px] tracking-[0.2em] uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        // Glossary Hub
                    </div>
                    <h3 className="font-heading font-black italic uppercase text-2xl tracking-tighter text-white">
                        {textGlossaryBannerTitle}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed font-light">
                        {textGlossaryBannerDesc}
                    </p>
                </div>

                <Link
                    href="/kb/glossary"
                    className="relative z-10 flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-emerald-500 hover:text-black hover:border-emerald-500 text-white font-mono text-xs uppercase tracking-widest px-6 py-4 rounded-full transition-all duration-300 font-bold shrink-0 self-start md:self-auto group-hover:scale-105"
                >
                    {textGlossaryButton}
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>

            {/* Grid de Artigos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <AnimatePresence mode="popLayout">
                    {filteredArticles.length > 0 ? (
                        filteredArticles.map((article, idx) => (
                            <motion.article
                                key={article.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                                className="group relative border border-white/5 bg-zinc-900/10 hover:bg-zinc-900/30 rounded-3xl p-8 backdrop-blur-md transition-all duration-500 hover:border-emerald-500/30 flex flex-col justify-between min-h-[320px] overflow-hidden"
                            >
                                {/* Card Border Glow em Hover */}
                                <div className="absolute inset-0 border border-emerald-500/0 group-hover:border-emerald-500/10 rounded-3xl transition-all duration-500"></div>

                                <div className="space-y-4 relative z-10">
                                    <div className="flex justify-between items-start">
                                        <span className="text-[10px] font-mono text-emerald-500 border border-emerald-500/20 bg-emerald-500/5 px-2.5 py-1 rounded-full uppercase tracking-wider">
                                            {article.category}
                                        </span>
                                        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 group-hover:border-emerald-500 group-hover:text-emerald-400 bg-zinc-900/50 transition-colors duration-300 shrink-0">
                                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                        </div>
                                    </div>

                                    <Link href={`/kb/${article.slug}`} className="block focus:outline-none">
                                        <h3 className="font-heading font-black italic uppercase text-2xl md:text-3xl tracking-tighter text-white group-hover:text-emerald-400 transition-colors duration-300 line-clamp-2">
                                            {article.title}
                                        </h3>
                                    </Link>

                                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light line-clamp-3">
                                        {article.description}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-8 relative z-10 text-zinc-500 text-xs font-mono">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="w-3.5 h-3.5" />
                                        <span>{article.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Clock className="w-3.5 h-3.5" />
                                        <span>{article.readTime} {textReadTime}</span>
                                    </div>
                                </div>
                            </motion.article>
                        ))
                    ) : (
                        <div className="col-span-1 md:col-span-2 py-16 text-center border border-dashed border-white/10 rounded-3xl">
                            <BookOpen className="w-8 h-8 text-zinc-700 mx-auto mb-4" />
                            <p className="text-zinc-500 text-sm font-light">{textNoArticles}</p>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
