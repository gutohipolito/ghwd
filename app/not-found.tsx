"use client";

import Link from "next/link";
import { NavbarOrchestra } from "@/components/NavbarOrchestra";
import { MegaFooter } from "@/components/MegaFooter";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n-context";

export default function NotFound() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen relative flex flex-col bg-zinc-950 text-white selection:bg-emerald-500 selection:text-black">
            <NavbarOrchestra />

            <section className="flex-1 flex flex-col items-center justify-center text-center px-4 relative">
                <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,black,transparent)] pointer-events-none"></div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-[10rem] font-heading font-bold leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent select-none">
                        404
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="relative z-10"
                >
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">{t('home.not_found.title')}</h2>
                    <p className="text-zinc-400 mb-8 max-w-md mx-auto">
                        {t('home.not_found.subtitle')}
                    </p>

                    <Link
                        href="/"
                        className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-emerald-500 hover:text-white transition-all inline-block"
                    >
                        {t('home.not_found.back_home')}
                    </Link>
                </motion.div>
            </section>

            <MegaFooter />
        </main>
    );
}
