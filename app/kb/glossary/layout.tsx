import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Glossário Técnico de IA, RAG, MCP e Engenharia | GHWD",
    description: "Explore definições diretas, claras e precisas sobre Inteligência Artificial corporativa, RAG, protocolo MCP, desenvolvimento Next.js e Core Web Vitals no Glossário da GHWD.",
    keywords: ["Glossário de IA", "Dicionário Técnico", "Definição RAG", "Definição MCP", "Next.js", "Core Web Vitals", "LCP", "INP", "LGPD", "GHWD"],
    alternates: {
        canonical: '/kb/glossary',
    }
};

export default function GlossaryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
