"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ChevronLeft, BookOpen, AlertCircle } from 'lucide-react';
import { GlossaryTerm } from '@/lib/kb-data';
import { useLanguage } from '@/lib/i18n-context';

interface KBGlossaryClientProps {
    terms: GlossaryTerm[];
}

export function KBGlossaryClient({ terms }: KBGlossaryClientProps) {
    const { language } = useLanguage();
    const [searchTerm, setSearchTerm] = useState('');
    const [activeLetter, setActiveLetter] = useState<string | null>(null);

    const isPt = language === 'pt' || language === 'pt-pt';
    const isEs = language === 'es';

    const textSearchPlaceholder = isPt ? "Buscar termo técnico ou definição..." : (isEs ? "Buscar término técnico o definición..." : "Search technical term or definition...");
    const textAllLetters = isPt ? "Todos" : (isEs ? "Todos" : "All");
    const textNoTerms = isPt ? "Nenhum termo técnico localizado para a busca atual." : (isEs ? "Ningún término técnico localizado para la búsqueda actual." : "No technical terms found for the current search.");
    const textGlossaryTitle = isPt ? "Estrutura de Termos" : (isEs ? "Estructura de Términos" : "Terms Structure");
    const textBackToKB = isPt ? "Voltar para o KB" : (isEs ? "Volver al KB" : "Back to KB");

    // Filtragem de termos
    const filteredTerms = terms.filter(item => {
        const matchesSearch = 
            item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.details.toLowerCase().includes(searchTerm.toLowerCase());

        // Extrai a primeira letra alfabética do termo (ignorando espaços ou símbolos se necessário)
        const firstLetter = item.term.charAt(0).toUpperCase();
        const matchesLetter = !activeLetter || firstLetter === activeLetter;

        return matchesSearch && matchesLetter;
    });

    // Letras disponíveis nos termos existentes para o índice rápido
    const alphabet = Array.from(new Set(
        terms.map(item => item.term.charAt(0).toUpperCase())
    )).sort();

    // JSON-LD para os termos definidos (DefinedTermSet)
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "DefinedTermSet",
        "@id": "https://ghwd.com.br/kb/glossary#definedtermset",
        "name": "Glossário Técnico GHWD - IA e Engenharia",
        "description": "Dicionário de termos técnicos contendo conceitos fundamentais sobre inteligência artificial, desenvolvimento Next.js e automação corporativa.",
        "hasDefinedTerm": terms.map((item) => ({
            "@type": "DefinedTerm",
            "name": item.term,
            "description": item.definition,
            "inDefinedTermSet": "https://ghwd.com.br/kb/glossary#definedtermset"
        }))
    };

    return (
        <div className="space-y-12">
            {/* Injeção semântica de Termos para IA */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Cabeçalho de Navegação Rápida */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/5 pb-8">
                <Link
                    href="/kb"
                    className="inline-flex items-center gap-2 text-zinc-500 hover:text-emerald-400 font-mono text-xs uppercase tracking-widest transition-colors duration-300"
                >
                    <ChevronLeft className="w-4 h-4" />
                    {textBackToKB}
                </Link>

                {/* Busca do Glossário */}
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setActiveLetter(null); // Limpa filtro de letra ao buscar
                        }}
                        placeholder={textSearchPlaceholder}
                        className="w-full bg-zinc-900/40 border border-white/5 focus:border-emerald-500/50 rounded-full py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-zinc-600 focus:outline-none transition-all duration-300 font-light"
                    />
                </div>
            </div>

            {/* Índice Alfabético */}
            <div className="flex flex-wrap gap-2 items-center">
                <button
                    onClick={() => setActiveLetter(null)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-colors duration-300 cursor-pointer ${
                        activeLetter === null 
                            ? 'bg-emerald-500/10 border border-emerald-500/35 text-emerald-400 font-bold' 
                            : 'bg-zinc-900/20 border border-white/5 text-zinc-500 hover:border-white/20 hover:text-white'
                    }`}
                >
                    [{textAllLetters}]
                </button>
                {alphabet.map((letter) => {
                    const isActive = activeLetter === letter;
                    return (
                        <button
                            key={letter}
                            onClick={() => setActiveLetter(letter)}
                            className={`w-8 h-8 rounded-lg text-xs font-mono transition-colors duration-300 cursor-pointer flex items-center justify-center border ${
                                isActive 
                                    ? 'bg-emerald-500/10 border-emerald-500/35 text-emerald-400 font-bold' 
                                    : 'bg-zinc-900/20 border-white/5 text-zinc-500 hover:border-white/20 hover:text-white'
                            }`}
                        >
                            {letter}
                        </button>
                    );
                })}
            </div>

            {/* Listagem de Termos */}
            <div className="space-y-6">
                {filteredTerms.length > 0 ? (
                    filteredTerms.map((item) => (
                        <div
                            key={item.term}
                            className="group border border-white/5 hover:border-emerald-500/20 bg-zinc-900/10 rounded-2xl p-6 md:p-8 backdrop-blur-md transition-all duration-300 flex flex-col md:flex-row gap-6 justify-between items-start"
                        >
                            <div className="space-y-3 max-w-2xl">
                                <h3 className="font-heading font-black italic uppercase text-xl md:text-2xl tracking-tight text-white group-hover:text-emerald-400 transition-colors duration-300">
                                    {item.term}
                                </h3>
                                <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-light">
                                    {item.definition}
                                </p>
                                <p className="text-zinc-500 text-xs md:text-sm leading-relaxed font-light border-t border-white/5 pt-3 mt-3">
                                    <span className="text-emerald-500/70 font-mono text-[10px] tracking-wider block mb-1 uppercase">// Detalhe de Engenharia:</span>
                                    {item.details}
                                </p>
                            </div>

                            <span className="font-mono text-zinc-700 text-3xl font-bold group-hover:text-emerald-500/10 transition-colors duration-300 shrink-0 self-end md:self-start">
                                {item.term.charAt(0).toUpperCase()}
                            </span>
                        </div>
                    ))
                ) : (
                    <div className="py-16 text-center border border-dashed border-white/10 rounded-3xl">
                        <AlertCircle className="w-8 h-8 text-zinc-700 mx-auto mb-4" />
                        <p className="text-zinc-500 text-sm font-light">{textNoTerms}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
