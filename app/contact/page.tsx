"use client";

import { NavbarOrchestra } from "@/components/NavbarOrchestra";
import { MegaFooter } from "@/components/MegaFooter";
import { QualificationForm } from "@/components/QualificationForm";
import { useLanguage } from "@/lib/i18n-context";
import { motion } from "framer-motion";

export default function ContactPage() {
    const { language } = useLanguage();

    const isPt = language === 'pt' || language === 'pt-pt';
    const homeTitle = isPt ? "Início" : "Home";
    const contactTitle = language === 'en' ? "Contact" : (language === 'es' ? "Contacto" : (language === 'pt-pt' ? "Contacto" : "Contato"));

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://ghwd.com.br/contact#breadcrumb",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": homeTitle,
                "item": "https://ghwd.com.br"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": contactTitle,
                "item": "https://ghwd.com.br/contact"
            }
        ]
    };

    return (
        <main className="min-h-screen relative flex flex-col bg-zinc-950 text-white selection:bg-emerald-500 selection:text-black">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <NavbarOrchestra />

            {/* Background Video (Same as Hero) */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-20 grayscale brightness-75 contrast-125"
                >
                    <source src="https://videos.pexels.com/video-files/3163534/3163534-uhd_2560_1440_30fps.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950" />
            </div>

            <section className="relative z-10 pt-40 pb-20 px-6 md:px-24 flex-grow">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12 text-center"
                    >
                        <span className="text-emerald-500 font-mono text-xs uppercase tracking-widest mb-4 block">/ Contact</span>
                        <h1 className="text-5xl md:text-7xl font-heading font-black italic uppercase tracking-tighter leading-none mb-6">
                            Start your <span className="text-zinc-500">evolution</span>
                        </h1>
                    </motion.div>

                    <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl">
                        <QualificationForm />
                    </div>
                </div>
            </section>

            <MegaFooter />
        </main>
    );
}
