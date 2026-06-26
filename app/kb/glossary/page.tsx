import { NavbarOrchestra } from "@/components/NavbarOrchestra";
import { MegaFooter } from "@/components/MegaFooter";
import { PageHero } from "@/components/PageHero";
import { KBGlossaryClient } from "@/components/KBGlossaryClient";
import { glossaryTerms } from "@/lib/kb-data";

export const dynamic = 'force-static';

export default function GlossaryPage() {
    return (
        <main className="min-h-screen relative flex flex-col bg-zinc-950 text-white selection:bg-emerald-500 selection:text-black">
            <NavbarOrchestra />
            
            <PageHero 
                pretitle="/ Referências Técnicas"
                title="GLOSSÁRIO."
                subtitle="Dicionário semântico e referências rápidas contendo os principais conceitos de inteligência artificial, integrações RAG, protocolo MCP, desenvolvimento Next.js e Core Web Vitals."
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
