"use client";

import { NavbarOrchestra } from "@/components/NavbarOrchestra";
import { MegaFooter } from "@/components/MegaFooter";
import { PageHero } from "@/components/PageHero";
import { KBDirectoryClient } from "@/components/KBDirectoryClient";
import { kbArticles } from "@/lib/kb-data";
import { useLanguage } from "@/lib/i18n-context";

export default function KBPage() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen relative flex flex-col bg-zinc-950 text-white selection:bg-emerald-500 selection:text-black">
            <NavbarOrchestra />
            
            <PageHero 
                pretitle={t('kb.pretitle')}
                title={t('kb.title')}
                subtitle={t('kb.subtitle')}
                videoClassName="scale-110 opacity-20 brightness-50"
            />

            <section className="relative z-30 py-24 px-6 md:px-24 bg-zinc-950">
                <div className="container mx-auto max-w-6xl">
                    <KBDirectoryClient articles={kbArticles} />
                </div>
            </section>

            <MegaFooter />
        </main>
    );
}
