import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Knowledge Base | Base de Conhecimento",
    description: "Explore artigos técnicos, guias práticos e documentações detalhadas sobre engenharia de software Next.js, agentes de IA, RAG, protocolo MCP e automações B2B na GHWD.",
    keywords: ["Knowledge Base", "Artigos Técnicos", "Agentes de IA", "Next.js", "RAG", "Model Context Protocol", "Automação de Processos", "GEO", "SEO de IA", "GHWD", "Serra Gaúcha"],
    alternates: {
        canonical: '/kb',
    }
};

export default function KBLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
