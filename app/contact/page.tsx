"use client";

import { NavbarOrchestra } from "@/components/NavbarOrchestra";
import { MegaFooter } from "@/components/MegaFooter";
import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { useLanguage } from "@/lib/i18n-context";
import { QualificationForm } from "@/components/QualificationForm";

export default function ContactPage() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen relative flex flex-col bg-zinc-950 text-white selection:bg-emerald-500 selection:text-black overflow-hidden">
            <NavbarOrchestra />

            {/* Background Video - Geometric Particles */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-30 grayscale brightness-50"
                >
                    <source src="https://videos.pexels.com/video-files/3130182/3130182-uhd_2560_1440_30fps.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-zinc-950/40" />
            </div>

            <div className="relative z-10">
                <PageHero
                    pretitle={t('contact.header.tag')}
                    title={t('contact.header.title')}
                    subtitle={t('contact.header.subtitle')}
                />

                <section className="py-24 px-6 md:px-24 relative z-10">
                    <div className="container mx-auto">
                        <QualificationForm />
                    </div>
                </section>
            </div>

            <MegaFooter />
        </main>
    );
}
