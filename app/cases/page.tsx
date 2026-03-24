"use client";

import React, { useState } from "react";
import { BrazilMap } from "@/components/ui/BrazilMap";
import { NavbarOrchestra } from "@/components/NavbarOrchestra";
import { MegaFooter } from "@/components/MegaFooter";
import { motion } from "framer-motion";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { useLanguage } from "@/lib/i18n-context";



const regions = [
    {
        name: "São Paulo",
        siglas: ["SP"],
        cities: [
            {
                name: "São Paulo",
                clients: [
                    { name: "Besni", color: "#eb1c24", image: "https://ghwd.com.br/lista-clientes/cliente-besni-ghwd.png" },
                    { name: "Avery Dennison", color: "#da291c", image: "https://ghwd.com.br/lista-clientes/cliente-avery-dennison-ghwd.png" },
                    { name: "Cris Arcangeli", color: "#e5007e", image: "https://ghwd.com.br/lista-clientes/cliente-cris-arcangeli-ghwd.png" },
                    { name: "Beauty'in", color: "#fe94ca", image: "https://ghwd.com.br/lista-clientes/cliente-beautyin-ghwd.png" },
                    { name: "Trucss", color: "#009fe3", image: "https://ghwd.com.br/lista-clientes/cliente-trucss-ghwd.png" },
                    { name: "Joseph Teperman", color: "#71717a", image: "https://ghwd.com.br/lista-clientes/cliente-joseph-teperman-ghwd.png" },
                    { name: "Vivi Sanches", color: "#00c4cc", image: "https://ghwd.com.br/lista-clientes/cliente-vivi-sanches-ghwd.png" },
                    { name: "Divórcios Já", color: "#2c3e50", image: "https://ghwd.com.br/lista-clientes/cliente-divorciosja-ghwd.png" },
                ]
            }
        ]
    },
    {
        name: "Rio Grande do Sul",
        siglas: ["RS"],
        cities: [
            {
                name: "Farroupilha",
                clients: [
                    { name: "Grendene", color: "#004a99", image: "https://ghwd.com.br/lista-clientes/cliente-grendene-ghwd.png" },
                    { name: "Malacara", color: "#c8a165", image: "https://ghwd.com.br/lista-clientes/cliente-malacara-ghwd.png" },
                    { name: "Dominator", color: "#a855f7", image: "https://ghwd.com.br/lista-clientes/cliente-dominator-ghwd.png" },
                    { name: "Prime Fitness Club", color: "#10b981", image: "https://ghwd.com.br/lista-clientes/cliente-prime-fitness-club-ghwd.png" },
                    { name: "Móveis Unghero", color: "#d97706", image: "https://ghwd.com.br/lista-clientes/cliente-moveis-unghero-ghwd.png" },
                    { name: "Ballare", color: "#ec4899", image: "https://ghwd.com.br/lista-clientes/cliente-ballare-ghwd.png" },
                    { name: "Perfilcomp", color: "#64748b", image: "https://ghwd.com.br/lista-clientes/cliente-perfilcomp-ghwd.png" },
                    { name: "Fachini Extintores", color: "#ef4444", image: "https://ghwd.com.br/lista-clientes/cliente-fachini-extintores-ghwd.png" },
                    { name: "Imobiliária Torre", color: "#3b82f6", image: "https://ghwd.com.br/lista-clientes/cliente-imobiliaria-torre-ghwd.png" },
                    { name: "Feltrin Imóveis", color: "#2563eb", image: "https://ghwd.com.br/lista-clientes/cliente-imobiliaria-feltrin-ghwd.png" },
                    { name: "PoderAuto", color: "#f59e0b", image: "https://ghwd.com.br/lista-clientes/cliente-poder-auto-ghwd.png" },
                    { name: "Kavalek", color: "#1e293b", image: "https://ghwd.com.br/lista-clientes/cliente-kavalek-ghwd.png" },
                    { name: "Horus Odontologia", color: "#06b6d4", image: "https://ghwd.com.br/lista-clientes/cliente-horus-odontologia-ghwd.png" },
                    { name: "Metal Jeta", color: "#71717a", image: "https://ghwd.com.br/lista-clientes/cliente-metal-jeta-ghwd.png" },
                    { name: "Bonacina & Massens", color: "#4f46e5", image: "https://ghwd.com.br/lista-clientes/cliente-bonacina-massens-ghwd.png" },
                    { name: "Márcia Esteticista", color: "#db2777", image: "https://ghwd.com.br/lista-clientes/clientes-ghwd-marcia-esteticista.png" },
                    { name: "Amendoeira Chocolaterie", color: "#78350f", image: "https://ghwd.com.br/lista-clientes/clientes-ghwd-amendoeira.png" },
                    { name: "Verse", color: "#000000", image: "https://ghwd.com.br/lista-clientes/clientes-ghwd-verse.png" },
                    { name: "Arte Dente", color: "#22d3ee", image: "https://ghwd.com.br/lista-clientes/clientes-ghwd-arte-dente.png" },
                    { name: "Guenoa", color: "#15803d", image: "https://ghwd.com.br/lista-clientes/clientes-ghwd-guenoa.png" },
                    { name: "Enfoque Palestrantes", color: "#f97316", image: "https://ghwd.com.br/lista-clientes/clientes-ghwd-enfoque-palestrantes.png" },
                    { name: "Nascimento Pinturas", color: "#6366f1", image: "https://ghwd.com.br/lista-clientes/clientes-ghwd-nascimento-pinturas.png" },
                    { name: "Dra Rosana de Nardi", color: "#8b5cf6", image: "https://ghwd.com.br/lista-clientes/clientes-ghwd-rosana-denardi.png" },
                ]
            },
            {
                name: "Porto Alegre",
                clients: [
                    { name: "Austral Incorporadora", color: "#1e3a8a", image: "https://ghwd.com.br/lista-clientes/clientes-ghwd-austral.png" },
                    { name: "Cyrela", color: "#002d58", image: "https://ghwd.com.br/lista-clientes/clientes-ghwd-cyrela.png" },
                    { name: "By Tinga", color: "#eab308", image: "https://ghwd.com.br/lista-clientes/clientes-ghwd-bytinga.png" },
                ]
            },
            {
                name: "Gramado",
                clients: [
                    { name: "Hard Rock Café Gramado", color: "#ffcc00", image: "https://ghwd.com.br/lista-clientes/clientes-ghwd-hard-rock-cafe-gramado.png" },
                    { name: "SuperCarros", color: "#da291c", image: "https://ghwd.com.br/lista-clientes/clientes-ghwd-supercarros.png" },
                ]
            },
            {
                name: "Bento Gonçalves",
                clients: [
                    { name: "Fasolo", color: "#4b5563", image: "https://ghwd.com.br/lista-clientes/clientes-ghwd-fasolo.png" },
                ]
            }
        ]
    },
    {
        name: "Acre & Nacional",
        siglas: ["AC"],
        cities: [
            {
                name: "Rio Branco",
                clients: [
                    { name: "Prefeitura de Rio Branco", color: "#166534", image: "https://ghwd.com.br/lista-clientes/clientes-ghwd-prefeitura-rio-branco.png" },
                ]
            },
            {
                name: "Acrelândia",
                clients: [
                    { name: "UNIP Acrelândia", color: "#1e3a8a", image: "https://ghwd.com.br/lista-clientes/clientes-ghwd-unip-acrelandia.png" },
                ]
            }
        ]
    }
];

export default function CasesPage() {
    const { t } = useLanguage();
    const [selectedState, setSelectedState] = useState<string | null>(null);

    const activeStates = regions.flatMap((r) => r.siglas);

    const displayedRegions = selectedState
        ? regions.filter((r) => r.siglas.includes(selectedState))
        : regions;

    return (
        <main className="min-h-screen relative flex flex-col bg-zinc-950 text-white selection:bg-emerald-500 selection:text-black">
            <NavbarOrchestra />

            <PageHero
                pretitle={t('cases.header.tag')}
                title={t('cases.header.title')}
                subtitle={t('cases.header.subtitle')}
            />

            {/* Client Ledger & Interactive Map */}
            <section className="py-24 border-t border-white/5 bg-zinc-950">
                <div className="container mx-auto px-6 md:px-24 mb-16">
                    <span className="font-mono text-emerald-500 text-xs uppercase tracking-widest mb-2 block flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        {t('cases.client_index.tag')}
                    </span>
                    <h3 className="text-4xl md:text-5xl font-serif max-w-2xl leading-tight">Nossa Presença Digital pelo Brasil</h3>
                    <p className="text-zinc-400 mt-6 max-w-xl leading-relaxed text-lg">
                        Selecione um dos estados destacados no mapa para ver as marcas e organizações que confiam na GHWD em cada região do país.
                    </p>
                </div>

                <div className="container mx-auto px-6 md:px-24 mb-24">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start transition-all duration-700">
                        {/* Map Column */}
                        <div 
                            className={`relative border border-white/10 rounded-3xl bg-zinc-900/50 overflow-hidden flex flex-col pt-8 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${selectedState ? 'w-full lg:w-5/12' : 'w-full lg:w-8/12 mx-auto min-h-[500px] lg:min-h-[600px]'}`}
                        >
                            <div className={`p-4 flex-grow w-full ${selectedState ? 'h-[400px] md:h-[600px]' : 'h-full min-h-[500px] flex items-center justify-center'}`}>
                                <BrazilMap 
                                    activeStates={activeStates} 
                                    selectedState={selectedState} 
                                    onStateClick={(sigla) => setSelectedState(prev => prev === sigla ? null : sigla)} 
                                />
                            </div>
                        </div>

                        {/* Clients Column */}
                        {selectedState && (
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="w-full lg:w-7/12 space-y-12"
                            >
                                {displayedRegions.map((region, idx) => (
                                    <div key={region.name} className="space-y-16">
                                        <h4 className="text-sm font-mono uppercase tracking-widest text-zinc-400 mb-8 border-l border-emerald-500 pl-4">
                                            {region.name} <span className="text-zinc-600 ml-2">({region.cities.reduce((acc, c) => acc + c.clients.length, 0)} parceiros)</span>
                                        </h4>

                                        {region.cities.map((city, cityIdx) => (
                                            <div key={city.name} className="space-y-6">
                                                {/* City Header */}
                                                <div className="flex items-center gap-4">
                                                    <h5 className="text-xl font-serif text-white/90">{city.name}</h5>
                                                    <div className="h-[1px] flex-grow bg-white/5" />
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {city.clients.map((client, cIdx) => (
                                                        <motion.div
                                                            key={cIdx}
                                                            initial={{ opacity: 0, y: 10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: 0.05 * cIdx + (cityIdx * 0.1), duration: 0.4 }}
                                                            whileHover={{ scale: 1.04, y: -4 }}
                                                            className="group relative p-6 border border-white/5 rounded-2xl bg-zinc-900/40 backdrop-blur-md overflow-hidden flex items-center justify-between transition-all duration-500"
                                                        >
                                                            {/* Fixed Brand Gradient Overlay (half to end) */}
                                                            <div 
                                                                className="absolute inset-0 opacity-15 transition-opacity duration-500 pointer-events-none"
                                                                style={{ 
                                                                    background: `linear-gradient(to right, transparent 50%, ${(client as any).color || '#10b981'} 100%)` 
                                                                }}
                                                            />

                                                            <span className="text-zinc-300 font-medium text-lg relative z-10 transition-colors duration-300 group-hover:text-white">
                                                                {client.name}
                                                            </span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </div>
                </div>
            </section>

            <MegaFooter />
        </main>
    );
}
