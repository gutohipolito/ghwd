"use client";

import { NavbarOrchestra } from "@/components/NavbarOrchestra";
import { MegaFooter } from "@/components/MegaFooter";
import { Marquee } from "@/components/ui/Marquee";
import { DissolveGrid } from "@/components/ui/DissolveGrid";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { useLanguage } from "@/lib/i18n-context";

const cases = [
    // ... (keeping the cases array as is for now, as translating data content is more complex and might require data structure changes)
    {
        client: "Grendene Global",
        title: "E-Commerce Replatforming",
        category: "Architecture",
        slug: "grendene-global",
        description: "Migration of a massive multi-brand ecosystem to a headless structure, improving load times by 400% across 50+ global markets.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
        stat: "+400% Perf"
    },
    {
        client: "Hard Rock Cafe",
        title: "Digital Experience Core",
        category: "Experience",
        slug: "hard-rock-cafe",
        description: "Transforming the legendary dining experience with a digital nervous system that connects kitchen, service, and customer loyalty.",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2670&auto=format&fit=crop",
        stat: "Omnichannel"
    },
    {
        client: "Besni",
        title: "Retail Intelligence",
        category: "Data",
        slug: "besni",
        description: "Unifying physical and digital retail data to create a single source of truth for inventory and customer behavior.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop",
        stat: "40+ Stores"
    },
    {
        client: "Cyrela",
        title: "Real Estate Innovation",
        category: "Platform",
        slug: "cyrela",
        description: "A premium digital sales suite for high-end real estate, enabling virtual tours and seamless contract generation.",
        image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2670&auto=format&fit=crop",
        stat: "$2B+ Sales"
    }
];

const regions = [
    {
        name: "São Paulo",
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
        name: "Rio Grande do Sul (Serra)",
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
        ]
    },
    {
        name: "Rio Grande do Sul (Capital & Outros)",
        clients: [
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
        clients: [
            { name: "Prefeitura de Rio Branco", image: "https://ghwd.com.br/lista-clientes/clientes-ghwd-prefeitura-rio-branco.png" },
            { name: "UNIP Acrelândia", image: "https://ghwd.com.br/lista-clientes/clientes-ghwd-unip-acrelandia.png" },
        ]
    }
];

export default function CasesPage() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen relative flex flex-col bg-zinc-950 text-white selection:bg-emerald-500 selection:text-black">
            <NavbarOrchestra />

            <PageHero
                pretitle={t('cases.header.tag')}
                title={t('cases.header.title')}
                subtitle={t('cases.header.subtitle')}
            />

            {/* Editorial Gallery */}
            <section className="py-32 px-6 md:px-24">
                <div className="container mx-auto flex flex-col gap-32">
                    {cases.map((item, idx) => (
                        <div key={idx} className="group grid md:grid-cols-2 gap-12 md:gap-24 items-center">
                            {/* Image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className={`relative aspect-[4/3] overflow-hidden ${idx % 2 === 1 ? 'md:order-2' : ''}`}
                            >
                                <div className="absolute inset-0 bg-emerald-500/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700"
                                />
                                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-4 py-2 border border-white/10 rounded-full">
                                    <span className="text-emerald-400 font-mono text-xs">{item.stat}</span>
                                </div>
                            </motion.div>

                            {/* Content */}
                            <motion.div
                                initial={{ opacity: 0, x: idx % 2 === 0 ? 20 : -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className={`${idx % 2 === 1 ? 'md:order-1 md:text-right' : ''}`}
                            >
                                <span className="text-zinc-500 text-sm font-bold uppercase tracking-widest mb-4 block">
                                    {item.client} — {item.category}
                                </span>
                                <h2 className="text-4xl md:text-5xl font-serif mb-6 group-hover:text-emerald-500 transition-colors duration-500">
                                    {item.title}
                                </h2>
                                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                                    {item.description}
                                </p>
                                <Link
                                    href={`/cases/${item.slug}`}
                                    className={`inline-flex items-center gap-2 border-b border-white/20 pb-1 hover:border-emerald-500 hover:text-emerald-500 transition-colors ${idx % 2 === 1 ? 'flex-row-reverse' : ''}`}
                                >
                                    <span className="uppercase tracking-widest text-xs font-bold">{t('cases.cta.read_case')}</span>
                                    <ArrowUpRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Client Marquees */}
            <section className="py-24 border-t border-white/5 bg-zinc-950">
                <div className="container mx-auto px-6 md:px-24 mb-16">
                    <span className="font-mono text-emerald-500 text-xs uppercase tracking-widest mb-2 block">
                        {t('cases.client_index.tag')}
                    </span>
                    <h3 className="text-3xl font-serif">{t('cases.client_index.title')}</h3>
                </div>

                <div className="space-y-24">
                    {regions.map((region, idx) => (
                        <div key={idx} className="container mx-auto px-6 md:px-24">
                            <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-8 border-l-2 border-emerald-500 pl-4">
                                {region.name}
                            </h4>

                            {region.clients.length <= 4 ? (
                                /* Static Grid for small lists */
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {region.clients.map((client, cIdx) => (
                                        <div key={cIdx} className="relative bg-zinc-900/50 border border-white/5 rounded-2xl flex items-center justify-center p-8 hover:border-emerald-500/30 transition-colors group h-64 w-full">
                                            <div className="relative w-full h-48 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
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
                            ) : (
                                /* Dynamic Dissolve Grid */
                                <DissolveGrid clients={region.clients} interval={5000} />
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <MegaFooter />
        </main>
    );
}
