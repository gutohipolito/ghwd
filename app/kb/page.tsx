"use client";

import { NavbarOrchestra } from "@/components/NavbarOrchestra";
import { MegaFooter } from "@/components/MegaFooter";
import { PageHero } from "@/components/PageHero";
import { KBDirectoryClient } from "@/components/KBDirectoryClient";
import { kbArticles } from "@/lib/kb-data";
import { kbArticlesTranslations } from "@/lib/kb-translations";
import { useLanguage } from "@/lib/i18n-context";

export default function KBPage() {
    const { t, language } = useLanguage();

    const isPt = language === 'pt' || language === 'pt-pt';
    const langKey = isPt ? 'pt' : (language === 'es' ? 'es' : 'en');

    const localizedArticles = kbArticles.map((article) => {
        const trans = kbArticlesTranslations[article.slug]?.[langKey];
        if (trans) {
            return {
                ...article,
                title: trans.title,
                description: trans.description,
                category: trans.category,
                tldr: trans.tldr
            };
        }
        return article;
    });

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
                    <KBDirectoryClient articles={localizedArticles} />
                </div>
            </section>

            <MegaFooter />
        </main>
    );
}
