import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQ | Perguntas Frequentes",
    description: "Encontre respostas detalhadas sobre engenharia de software de alta performance, prazos de entrega, custos de projetos e conformidade com LGPD na GHWD.",
    keywords: ["FAQ GHWD", "Perguntas Frequentes Next.js", "Custos Desenvolvimento Web", "Prazos Desenvolvimento de Software", "Segurança LGPD", "Ecosystem Velocity"],
    alternates: {
        canonical: '/faq',
    }
};

export default function FAQLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
