"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { NavbarOrchestra } from "@/components/NavbarOrchestra";
import { MegaFooter } from "@/components/MegaFooter";

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
    startColor = "from-emerald-900/10",
    endColor = "to-zinc-950"
}: LegalLayoutProps) {
    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-300 selection:bg-emerald-500 selection:text-black">
            <NavbarOrchestra />

            {/* Hero Section - Reduced Height for Minimalism */}
            <section className="relative h-[45vh] flex items-end justify-start overflow-hidden border-b border-white/5">
                {/* Background Modern Texture */}
                <div className={`absolute inset-0 bg-gradient-to-br ${startColor} ${endColor} z-0`} />
                
                {/* Subtle Grain/Noise instead of Squares */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                
                {/* Animated Radial Glow */}
                <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[80%] bg-emerald-500/10 blur-[120px] rounded-full z-0 animate-pulse" />

                <div className="container mx-auto px-6 md:px-24 relative z-20 pb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-4xl"
                    >
                        <span className="text-emerald-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-4 block">
                            Legal & Compliance
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif font-light text-white mb-6 leading-tight">
                            {title}
                        </h1>
                        <p className="text-lg md:text-xl text-zinc-500 max-w-xl font-light leading-relaxed">
                            {subtitle}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="container mx-auto px-6 md:px-24 py-20 relative z-20">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Meta Sidebar */}
                    <aside className="lg:w-1/4">
                        <div className="sticky top-32 space-y-8">
                            <div className="p-8 border border-white/5 rounded-3xl bg-zinc-900/20 backdrop-blur-xl">
                                <h4 className="text-white text-[10px] font-mono uppercase tracking-[0.2em] mb-6 opacity-50">Document Details</h4>
                                <div className="space-y-6">
                                    <div>
                                        <span className="text-zinc-600 text-[10px] uppercase block mb-2 tracking-widest">Last Updated</span>
                                        <span className="text-zinc-300 font-mono text-xs">{lastUpdated}</span>
                                    </div>
                                    <div>
                                        <span className="text-zinc-600 text-[10px] uppercase block mb-2 tracking-widest">Version</span>
                                        <span className="text-zinc-300 font-mono text-xs">v2.5.0</span>
                                    </div>
                                    <div>
                                        <span className="text-zinc-600 text-[10px] uppercase block mb-2 tracking-widest">Status</span>
                                        <span className="text-emerald-500 font-mono text-[10px] uppercase px-2 py-1 bg-emerald-500/10 rounded inline-block">Active</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="px-4">
                                <p className="text-[11px] text-zinc-600 leading-relaxed font-mono italic">
                                    "Forjando autoridade digital através de conformidade e transparência técnica."
                                </p>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:w-3/4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="prose prose-invert prose-lg max-w-none 
                                prose-headings:font-serif prose-headings:font-light
                                prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:text-white prose-h2:border-b prose-h2:border-white/5 prose-h2:pb-4
                                prose-h3:text-xl prose-h3:text-emerald-500/80 prose-h3:mt-12 prose-h3:mb-4
                                prose-p:text-zinc-400 prose-p:leading-relaxed prose-p:mb-6
                                prose-li:text-zinc-400
                                prose-strong:text-white prose-strong:font-medium
                                prose-a:text-emerald-500 hover:prose-a:text-emerald-400 transition-colors"
                        >
                            {children}
                        </motion.div>
                    </div>
                </div>
            </section>

            <MegaFooter />
        </main>
    );
}

