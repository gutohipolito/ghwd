"use client";

import { NavbarOrchestra } from "@/components/NavbarOrchestra";
import { MegaFooter } from "@/components/MegaFooter";
import { PageHero } from "@/components/PageHero";
import { KBGlossaryClient } from "@/components/KBGlossaryClient";
import { glossaryTerms } from "@/lib/kb-data";
import { useLanguage } from "@/lib/i18n-context";

export default function GlossaryPage() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen relative flex flex-col bg-zinc-950 text-white selection:bg-emerald-500 selection:text-black">
            <NavbarOrchestra />
            
            <PageHero 
                pretitle={t('glossary.pretitle')}
                title={t('glossary.title')}
                subtitle={t('glossary.subtitle')}
                videoClassName="scale-110 opacity-20 brightness-50"
            />

            <section className="relative z-30 py-24 px-6 md:px-24 bg-zinc-950">
                <div className="container mx-auto max-w-6xl">
                    <KBGlossaryClient terms={glossaryTerms} />
                </div>
            </section>

            <MegaFooter />
        </main>
    );
}
