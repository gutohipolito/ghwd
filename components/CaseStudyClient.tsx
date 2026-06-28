"use client";

import { NavbarOrchestra } from "@/components/NavbarOrchestra";
import { MegaFooter } from "@/components/MegaFooter";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n-context";

interface CaseData {
    client: string;
    heroImage: string;
    gallery: string[];
    next: string;
    translations: Record<string, {
        title: string;
        challenge: string;
        solution: string;
        metrics: { label: string; value: string }[];
    }>;
}

const casesDict: Record<string, CaseData> = {
    "grendene": {
        client: "Grendene Global",
        heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2670&auto=format&fit=crop"
        ],
        next: "hard-rock",
        translations: {
            en: {
                title: "E-Commerce Replatforming",
                challenge: "Grendene unified 50+ international markets under a single, headless commerce architecture without losing local autonomy.",
                solution: "We engineered a composable commerce stack using VTEX IO, enabling rapid deployment of regional storefronts while maintaining a centralized core.",
                metrics: [
                    { label: "Performance", value: "+400%" },
                    { label: "Markets", value: "50+" },
                    { label: "Uptime", value: "99.99%" }
                ]
            },
            pt: {
                title: "Migração de Plataforma de E-Commerce",
                challenge: "A Grendene precisava unificar mais de 50 mercados internacionais sob uma única arquitetura de headless commerce, sem perder a autonomia local de cada região.",
                solution: "Desenvolvemos uma infraestrutura de comércio combinável (composable commerce) usando VTEX IO, permitindo a implantação rápida de vitrines regionais enquanto mantemos a gestão operacional centralizada.",
                metrics: [
                    { label: "Performance", value: "+400%" },
                    { label: "Mercados", value: "50+" },
                    { label: "Disponibilidade", value: "99.99%" }
                ]
            },
            "pt-pt": {
                title: "Migração de Plataforma de E-Commerce",
                challenge: "A Grendene precisava de unificar mais de 50 mercados internacionais sob uma única arquitetura de headless commerce, sem perder a autonomia local de cada região.",
                solution: "Desenvolvemos uma infraestrutura de comércio combinável (composable commerce) usando VTEX IO, permitindo a implementação rápida de montras regionais enquanto mantemos a gestão operacional centralizada.",
                metrics: [
                    { label: "Performance", value: "+400%" },
                    { label: "Mercados", value: "50+" },
                    { label: "Disponibilidade", value: "99.99%" }
                ]
            },
            es: {
                title: "Migración de Plataforma de E-Commerce",
                challenge: "Grendene necesitaba unificar más de 50 mercados internacionales bajo una única arquitectura de comercio headless, sin perder la autonomía de sus marcas locales.",
                solution: "Diseñamos una infraestructura de comercio componible utilizando VTEX IO, lo que permitió el despliegue rápido de vitrinas regionales manteniendo un núcleo centralizado.",
                metrics: [
                    { label: "Rendimiento", value: "+400%" },
                    { label: "Mercados", value: "50+" },
                    { label: "Disponibilidad", value: "99.99%" }
                ]
            }
        }
    },
    "hard-rock": {
        client: "Hard Rock Cafe",
        heroImage: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2670&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2670&auto=format&fit=crop"
        ],
        next: "besni",
        translations: {
            en: {
                title: "Experience Commerce",
                challenge: "Digitizing the legendary rock & roll dining experience for a global audience.",
                solution: "A mobile-first loyalty and ordering system that bridges the gap between physical and digital rock culture.",
                metrics: [
                    { label: "Engagement", value: "+180%" },
                    { label: "Orders", value: "+45%" },
                    { label: "Mobile Share", value: "85%" }
                ]
            },
            pt: {
                title: "E-Commerce de Experiência",
                challenge: "Digitalizar a lendária experiência gastronômica do rock & roll para um público global altamente conectado.",
                solution: "Um ecossistema de fidelidade e pedidos focado em mobile-first, estreitando a distância entre a cultura do rock física e a jornada digital.",
                metrics: [
                    { label: "Engajamento", value: "+180%" },
                    { label: "Pedidos", value: "+45%" },
                    { label: "Acesso Mobile", value: "85%" }
                ]
            },
            "pt-pt": {
                title: "Comércio de Experiência",
                challenge: "Digitalizar a lendária experiência gastronómica do rock & roll para um público global altamente conectado.",
                solution: "Um ecossistema de fidelidade e pedidos focado em mobile-first, estreitando a distância entre a cultura do rock física e a jornada digital.",
                metrics: [
                    { label: "Envolvimento", value: "+180%" },
                    { label: "Encomendas", value: "+45%" },
                    { label: "Acesso Mobile", value: "85%" }
                ]
            },
            es: {
                title: "E-Commerce de Experiencia",
                challenge: "Digitalizar la legendaria experiencia gastronómica del rock & roll para una audiencia global altamente conectada.",
                solution: "Un sistema de pedidos y fidelización mobile-first que une la cultura del rock física con la jornada digital.",
                metrics: [
                    { label: "Interacción", value: "+180%" },
                    { label: "Pedidos", value: "+45%" },
                    { label: "Uso Móvil", value: "85%" }
                ]
            }
        }
    },
    "besni": {
        client: "Besni",
        heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2670&auto=format&fit=crop"
        ],
        next: "grendene",
        translations: {
            en: {
                title: "Omnichannel Retail Core",
                challenge: "Connecting 40+ physical stores with high-velocity e-commerce in a seamless experience.",
                solution: "Implementation of a real-time inventory and unified customer profile across all touchpoints.",
                metrics: [
                    { label: "Conversion", value: "+22%" },
                    { label: "Omnichannel", value: "100%" },
                    { label: "Load Time", value: "0.8s" }
                ]
            },
            pt: {
                title: "Núcleo de Varejo Omnichannel",
                challenge: "Conectar mais de 40 lojas físicas ao comércio eletrônico de alta velocidade, criando uma experiência contínua e sem atritos para o cliente.",
                solution: "Implementação de controle de estoque unificado em tempo real e consolidação do perfil do cliente em todos os canais de venda física e digital.",
                metrics: [
                    { label: "Conversão", value: "+22%" },
                    { label: "Omnicanalidade", value: "100%" },
                    { label: "Carregamento", value: "0.8s" }
                ]
            },
            "pt-pt": {
                title: "Núcleo de Retalho Omnichannel",
                challenge: "Ligar mais de 40 lojas físicas ao comércio eletrónico de alta velocidade, criando uma experiência contínua e sem atritos para o cliente.",
                solution: "Implementação de controlo de stock unificado em tempo real e consolidação do perfil do cliente em todos os canais de venda física e digital.",
                metrics: [
                    { label: "Conversão", value: "+22%" },
                    { label: "Omnicanalidade", value: "100%" },
                    { label: "Carregamento", value: "0.8s" }
                ]
            },
            es: {
                title: "Núcleo de Retail Omnicanal",
                challenge: "Conectar más de 40 tiendas físicas con un comercio electrónico de alta velocidad en una experiencia fluida y sin fricciones.",
                solution: "Implementación de un control de inventario unificado en tiempo real y consolidación del perfil de cliente en todos los puntos de contacto.",
                metrics: [
                    { label: "Conversión", value: "+22%" },
                    { label: "Omnicanalidad", value: "100%" },
                    { label: "Carga", value: "0.8s" }
                ]
            }
        }
    }
};

const labels = {
    en: {
        challenge: "The Challenge",
        solution: "The Solution",
        nextCase: "Next Case Study",
        viewNext: "View Next Project"
    },
    pt: {
        challenge: "O Desafio",
        solution: "A Solução",
        nextCase: "Próximo Estudo de Caso",
        viewNext: "Ver Próximo Projeto"
    },
    "pt-pt": {
        challenge: "O Desafio",
        solution: "A Solução",
        nextCase: "Próximo Estudo de Caso",
        viewNext: "Ver Próximo Projeto"
    },
    es: {
        challenge: "El Desafío",
        solution: "La Solución",
        nextCase: "Siguiente Caso de Estudio",
        viewNext: "Ver Siguiente Proyecto"
    }
};

export function CaseStudyClient({ slug }: { slug: string }) {
    const { language } = useLanguage();
    
    // Safely retrieve translations
    const activeLang = (language === "en" || language === "pt" || language === "pt-pt" || language === "es") ? language : "en";
    const caseData = casesDict[slug] || casesDict["grendene"];
    const tCase = caseData.translations[activeLang] || caseData.translations["en"];
    const tLabels = labels[activeLang] || labels["en"];

    return (
        <main className="min-h-screen relative flex flex-col bg-zinc-950 text-white selection:bg-emerald-500 selection:text-black">
            <NavbarOrchestra />

            {/* Hero */}
            <section className="h-[80vh] relative pt-40 px-6 md:px-24 flex flex-col justify-between pb-12">
                <div className="absolute inset-x-0 top-0 h-full w-full z-0">
                    <Image
                        src={caseData.heroImage}
                        alt={tCase.title}
                        fill
                        priority
                        className="object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
                </div>

                <div className="relative z-10 container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="font-mono text-emerald-500 text-xs uppercase tracking-widest mb-6 block">
                            / {caseData.client}
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight max-w-4xl uppercase tracking-tighter">
                            {tCase.title}
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Metrics */}
            <section className="py-12 border-y border-white/5 bg-zinc-900/30 backdrop-blur-sm">
                <div className="container mx-auto px-6 md:px-24">
                    <div className="grid grid-cols-3 gap-8 text-center md:text-left">
                        {tCase.metrics.map((m: any, idx: number) => (
                            <div key={idx}>
                                <div className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white mb-2">{m.value}</div>
                                <div className="text-xs uppercase tracking-widest text-zinc-500">{m.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story */}
            <section className="py-32 px-6 md:px-24">
                <div className="container mx-auto grid md:grid-cols-2 gap-24">
                    <div>
                        <h2 className="text-xs uppercase tracking-widest text-emerald-500 mb-6 font-mono">{tLabels.challenge}</h2>
                        <p className="text-2xl md:text-3xl font-serif leading-relaxed text-zinc-200 font-light">
                            {tCase.challenge}
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xs uppercase tracking-widest text-emerald-500 mb-6 font-mono">{tLabels.solution}</h2>
                        <p className="text-lg text-zinc-400 leading-relaxed text-justify font-light">
                            {tCase.solution}
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="px-6 md:px-24 pb-32">
                <div className="container mx-auto grid gap-8">
                    {caseData.gallery.map((img: string, idx: number) => (
                        <div key={idx} className="relative aspect-video w-full overflow-hidden rounded-lg grayscale hover:grayscale-0 transition-all duration-700">
                            <Image
                                src={img}
                                alt="Project Screen"
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Next Project */}
            <section className="py-32 border-t border-white/5 bg-zinc-900/20">
                <div className="container mx-auto px-6 md:px-24 text-center">
                    <span className="text-xs uppercase tracking-widest text-zinc-500 mb-6 block">{tLabels.nextCase}</span>
                    <Link href={`/partners/${caseData.next}`} className="inline-flex items-center gap-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif hover:text-emerald-500 transition-colors group">
                        <span>{tLabels.viewNext}</span>
                        <ArrowRight className="w-8 h-8 md:w-10 md:h-10 group-hover:translate-x-4 transition-transform text-emerald-500" />
                    </Link>
                </div>
            </section>

            <MegaFooter />
        </main>
    );
}
