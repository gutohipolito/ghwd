"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface LegalLayoutProps {
    title: string;
    subtitle: string;
    lastUpdated: string;
    children: ReactNode;
    startColor?: string;
    endColor?: string;
}

export function LegalLayout({
    title,
    subtitle,
    lastUpdated,
    children,
    startColor = "from-emerald-900/20",
    endColor = "to-black"
}: LegalLayoutProps) {
    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-300 selection:bg-emerald-500 selection:text-black">

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                {/* Background Gradient/Image Placeholder */}
                <div className={`absolute inset-0 bg-gradient-to-b ${startColor} ${endColor} z-0`} />

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-10"></div>

                <div className="container mx-auto px-6 md:px-24 relative z-20 pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "outExpo" }}
                        className="max-w-4xl"
                    >
                        <span className="text-emerald-500 font-mono text-xs uppercase tracking-widest mb-6 block border-l-2 border-emerald-500 pl-4">
                            Jurídico & Compliance
                        </span>
                        <h1 className="text-6xl md:text-8xl font-heading font-black italic uppercase tracking-tighter text-white mb-8 leading-[0.9]">
                            {title}
                        </h1>
                        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl font-light">
                            {subtitle}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="container mx-auto px-6 md:px-24 py-24 relative z-20">
                <div className="flex flex-col md:flex-row gap-12">
                    {/* Meta Sidebar */}
                    <aside className="md:w-1/4">
                        <div className="sticky top-32 p-6 border border-white/5 rounded-2xl bg-white/5 backdrop-blur-sm">
                            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4">Meta Informação</h4>
                            <div className="space-y-4">
                                <div>
                                    <span className="text-zinc-500 text-xs uppercase block mb-1">Última Atualização</span>
                                    <span className="text-zinc-300 font-mono text-sm">{lastUpdated}</span>
                                </div>
                                <div>
                                    <span className="text-zinc-500 text-xs uppercase block mb-1">Versão</span>
                                    <span className="text-zinc-300 font-mono text-sm">2.4.0-LEGAL</span>
                                </div>
                                <div>
                                    <span className="text-zinc-500 text-xs uppercase block mb-1">Status</span>
                                    <span className="text-emerald-500 font-mono text-xs uppercase px-2 py-1 bg-emerald-500/10 rounded inline-block">Vigente</span>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="md:w-3/4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="prose prose-invert prose-lg max-w-none 
                                prose-headings:font-heading prose-headings:uppercase prose-headings:italic prose-headings:font-bold
                                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-white
                                prose-h3:text-xl prose-h3:text-emerald-500/80 prose-h3:font-mono prose-h3:tracking-wider prose-h3:uppercase
                                prose-p:text-zinc-400 prose-p:leading-relaxed
                                prose-li:text-zinc-400
                                prose-strong:text-white prose-strong:font-bold
                                prose-a:text-emerald-500 hover:prose-a:text-emerald-400 transition-colors"
                        >
                            {children}
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
