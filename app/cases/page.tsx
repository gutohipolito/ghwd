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
        clients: [
            { name: "Besni", image: "https://ghwd.com.br/lista-clientes/cliente-besni-ghwd.png" },
            { name: "Avery Dennison", image: "https://ghwd.com.br/lista-clientes/cliente-avery-dennison-ghwd.png" },
            { name: "Cris Arcangeli", image: "https://ghwd.com.br/lista-clientes/cliente-cris-arcangeli-ghwd.png" },
            { name: "Beauty'in", image: "https://ghwd.com.br/lista-clientes/cliente-beautyin-ghwd.png" },
            { name: "Trucss", image: "https://ghwd.com.br/lista-clientes/cliente-trucss-ghwd.png" },
            { name: "Joseph Teperman", image: "https://ghwd.com.br/lista-clientes/cliente-joseph-teperman-ghwd.png" },
            { name: "Vivi Sanches", image: "https://ghwd.com.br/lista-clientes/cliente-vivi-sanches-ghwd.png" },
            { name: "Divórcios Já", image: "https://ghwd.com.br/lista-clientes/cliente-divorciosja-ghwd.png" },
        ]
    },
    {
        name: "Rio Grande do Sul",
        siglas: ["RS"],
        clients: [
            { name: "Grendene", image: "https://ghwd.com.br/lista-clientes/cliente-grendene-ghwd.png" },
            { name: "Malacara", image: "https://ghwd.com.br/lista-clientes/cliente-malacara-ghwd.png" },
            { name: "Dominator", image: "https://ghwd.com.br/lista-clientes/cliente-dominator-ghwd.png" },
            { name: "Prime Fitness Club", image: "https://ghwd.com.br/lista-clientes/cliente-prime-fitness-club-ghwd.png" },
            { name: "Móveis Unghero", image: "https://ghwd.com.br/lista-clientes/cliente-moveis-unghero-ghwd.png" },
            { name: "Ballare", image: "https://ghwd.com.br/lista-clientes/cliente-ballare-ghwd.png" },
            { name: "Perfilcomp", image: "https://ghwd.com.br/lista-clientes/cliente-perfilcomp-ghwd.png" },
            { name: "Fachini Extintores", image: "https://ghwd.com.br/lista-clientes/cliente-fachini-extintores-ghwd.png" },
            { name: "Imobiliária Torre", image: "https://ghwd.com.br/lista-clientes/cliente-imobiliaria-torre-ghwd.png" },
            { name: "Feltrin Imóveis", image: "https://ghwd.com.br/lista-clientes/cliente-imobiliaria-feltrin-ghwd.png" },
            { name: "PoderAuto", image: "https://ghwd.com.br/lista-clientes/cliente-poder-auto-ghwd.png" },
            { name: "Kavalek", image: "https://ghwd.com.br/lista-clientes/cliente-kavalek-ghwd.png" },
            { name: "Horus Odontologia", image: "https://ghwd.com.br/lista-clientes/cliente-horus-odontologia-ghwd.png" },
            { name: "Metal Jeta", image: "https://ghwd.com.br/lista-clientes/cliente-metal-jeta-ghwd.png" },
            { name: "Bonacina & Massens", image: "https://ghwd.com.br/lista-clientes/cliente-bonacina-massens-ghwd.png" },
            { name: "Márcia Esteticista", image: "https://ghwd.com.br/lista-clientes/clientes-ghwd-marcia-esteticista.png" },
            { name: "Amendoeira Chocolaterie", image: "https://ghwd.com.br/lista-clientes/clientes-ghwd-amendoeira.png" },
            { name: "Verse", image: "https://ghwd.com.br/lista-clientes/clientes-ghwd-verse.png" },
            { name: "Austral Incorporadora", image: "https://ghwd.com.br/lista-clientes/clientes-ghwd-austral.png" },
            { name: "Arte Dente", image: "https://ghwd.com.br/lista-clientes/clientes-ghwd-arte-dente.png" },
            { name: "Guenoa", image: "https://ghwd.com.br/lista-clientes/clientes-ghwd-guenoa.png" },
            { name: "Cyrela", image: "https://ghwd.com.br/lista-clientes/clientes-ghwd-cyrela.png" },
            { name: "Enfoque Palestrantes", image: "https://ghwd.com.br/lista-clientes/clientes-ghwd-enfoque-palestrantes.png" },
            { name: "By Tinga", image: "https://ghwd.com.br/lista-clientes/clientes-ghwd-bytinga.png" },
            { name: "Fasolo", image: "https://ghwd.com.br/lista-clientes/clientes-ghwd-fasolo.png" },
            { name: "Nascimento Pinturas", image: "https://ghwd.com.br/lista-clientes/clientes-ghwd-nascimento-pinturas.png" },
            { name: "Hard Rock Café Gramado", image: "https://ghwd.com.br/lista-clientes/clientes-ghwd-hard-rock-cafe-gramado.png" },
            { name: "SuperCarros", image: "https://ghwd.com.br/lista-clientes/clientes-ghwd-supercarros.png" },
            { name: "Dra Rosana de Nardi", image: "https://ghwd.com.br/lista-clientes/clientes-ghwd-rosana-denardi.png" },
        ]
    },
    {
        name: "Acre & Nacional",
        siglas: ["AC"],
        clients: [
            { name: "Prefeitura de Rio Branco", image: "https://ghwd.com.br/lista-clientes/clientes-ghwd-prefeitura-rio-branco.png" },
            { name: "UNIP Acrelândia", image: "https://ghwd.com.br/lista-clientes/clientes-ghwd-unip-acrelandia.png" },
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
                    <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                        {/* Map Column */}
                        <div className="lg:col-span-5 relative w-full border border-white/10 rounded-3xl bg-zinc-900/50 overflow-hidden flex flex-col pt-8">
                            <div className="absolute top-6 left-6 z-10 flex gap-4 text-xs font-mono">
                                <button 
                                    onClick={() => setSelectedState(null)} 
                                    className={`px-4 py-2 rounded-full transition-all border ${!selectedState ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-transparent text-zinc-500 border-white/10 hover:border-white/20'}`}
                                >
                                    Brasil Inteiro
                                </button>
                            </div>
                            <div className="p-4 flex-grow w-full h-[400px] md:h-[600px]">
                                <BrazilMap 
                                    activeStates={activeStates} 
                                    selectedState={selectedState} 
                                    onStateClick={setSelectedState} 
                                />
                            </div>
                        </div>

                        {/* Clients Column */}
                        <div className="lg:col-span-7 space-y-16">
                            {displayedRegions.map((region, idx) => (
                                <motion.div 
                                    key={region.name} 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                >
                                    <h4 className="text-sm font-mono uppercase tracking-widest text-zinc-400 mb-8 border-l border-emerald-500 pl-4">
                                        {region.name} <span className="text-zinc-600 ml-2">({region.clients.length} parceiros)</span>
                                    </h4>

                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-t border-l border-white/5 rounded-2xl overflow-hidden bg-white/[0.02]">
                                        {region.clients.map((client, cIdx) => (
                                            <div
                                                key={cIdx}
                                                className="relative flex items-center justify-center p-8 aspect-square border-r border-b border-white/5 group hover:bg-white/5 transition-colors duration-300"
                                            >
                                                <div className="relative w-full h-full opacity-40 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0 mix-blend-screen sm:mix-blend-normal">
                                                    <Image
                                                        src={client.image}
                                                        alt={client.name}
                                                        fill
                                                        className="object-contain"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <MegaFooter />
        </main>
    );
}
