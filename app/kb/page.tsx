import { NavbarOrchestra } from "@/components/NavbarOrchestra";
import { MegaFooter } from "@/components/MegaFooter";
import { PageHero } from "@/components/PageHero";
import { KBDirectoryClient } from "@/components/KBDirectoryClient";
import { kbArticles } from "@/lib/kb-data";

export const dynamic = 'force-static';

export default function KBPage() {
    return (
        <main className="min-h-screen relative flex flex-col bg-zinc-950 text-white selection:bg-emerald-500 selection:text-black">
            <NavbarOrchestra />
            
            <PageHero 
                pretitle="/ Centro de IA e Engenharia"
                title="KB."
                subtitle="Artigos técnicos, guias de engenharia e referências detalhadas sobre inteligência artificial corporativa, RAG, protocolo MCP e automações B2B."
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
