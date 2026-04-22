"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n-context";

export default function NotFound() {
    const { t } = useLanguage();
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/");
        }, 3000); // Redireciona após 3 segundos

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <main className="h-screen w-full flex flex-col items-center justify-center bg-zinc-950 text-white selection:bg-emerald-500 selection:text-black overflow-hidden relative">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,black,transparent)] pointer-events-none"></div>

            <section className="relative z-10 flex flex-col items-center justify-center text-center px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-4"
                >
                    <h1 className="text-[12rem] md:text-[18rem] font-heading font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent select-none italic tracking-tighter">
                        404
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-black italic uppercase tracking-tighter mb-4">
                        {t('home.not_found.title')}
                    </h2>
                    <p className="text-zinc-500 mb-8 max-w-sm mx-auto text-lg leading-tight uppercase font-mono tracking-widest">
                        {t('home.not_found.subtitle')}
                    </p>
                    
                    <div className="flex flex-col items-center gap-6">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                            <p className="text-emerald-500/60 text-[10px] font-mono uppercase tracking-[0.3em]">
                                Autoredirect em 3s...
                            </p>
                        </div>

                        <Link
                            href="/"
                            className="px-10 py-4 bg-white text-black font-black italic uppercase tracking-tighter rounded-full hover:bg-emerald-500 hover:text-white transition-all transform hover:scale-105"
                        >
                            {t('home.not_found.back_home')}
                        </Link>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
