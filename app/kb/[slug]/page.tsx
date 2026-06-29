import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { KBArticleDetailClient } from '@/components/KBArticleDetailClient';
import { kbArticles } from '@/lib/kb-data';

export const dynamic = 'force-static';

interface PageProps {
    params: Promise<{ slug: string }>;
}

// 1. Gerar caminhos estáticos para build (SSG)
export async function generateStaticParams() {
    return kbArticles.map((article) => ({
        slug: article.slug,
    }));
}

// 2. Gerar metadados SEO dinâmicos por artigo
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const article = kbArticles.find((a) => a.slug === slug);

    if (!article) {
        return {
            title: "Artigo Não Encontrado | GHWD",
        };
    }

    return {
        title: `${article.title} | GHWD KB`,
        description: article.description,
        keywords: article.tags,
        alternates: {
            canonical: `/kb/${slug}`,
        },
        openGraph: {
            title: article.title,
            description: article.description,
            type: 'article',
            url: `https://ghwd.com.br/kb/${slug}`,
            publishedTime: '2026-06-26T00:00:00.000Z',
            authors: ['Gustavo Hipólito'],
            tags: article.tags,
        }
    };
}

export default async function KBArticlePage({ params }: PageProps) {
    const { slug } = await params;
    const article = kbArticles.find((a) => a.slug === slug);

    if (!article) {
        notFound();
    }

    // JSON-LD integrado para GEO e crawlers de IA
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": article.schemaType,
                "@id": `https://ghwd.com.br/kb/${article.slug}#article`,
                "isPartOf": {
                    "@type": "WebPage",
                    "@id": `https://ghwd.com.br/kb/${article.slug}`
                },
                "headline": article.title,
                "description": article.description,
                "inLanguage": "pt-BR",
                "mainEntityOfPage": `https://ghwd.com.br/kb/${article.slug}`,
                "datePublished": "2026-06-26T00:00:00.000Z",
                "dateModified": "2026-06-26T00:00:00.000Z",
                "author": {
                    "@type": "Person",
                    "name": article.author,
                    "jobTitle": article.authorRole,
                    "worksFor": {
                        "@type": "Organization",
                        "name": "GHWD",
                        "url": "https://ghwd.com.br"
                    }
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "GHWD",
                    "url": "https://ghwd.com.br",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://ghwd.com.br/favicon.ico"
                    }
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": `https://ghwd.com.br/kb/${article.slug}#breadcrumb`,
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Início",
                        "item": "https://ghwd.com.br"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Knowledge Base",
                        "item": "https://ghwd.com.br/kb"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": article.title,
                        "item": `https://ghwd.com.br/kb/${article.slug}`
                    }
                ]
            },
            ...(article.faqItems.length > 0 ? [{
                "@type": "FAQPage",
                "@id": `https://ghwd.com.br/kb/${article.slug}#faq`,
                "mainEntity": article.faqItems.map((faq) => ({
                    "@type": "Question",
                    "name": faq.q,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.a
                    }
                }))
            }] : [])
        ]
    };

    return (
        <>
            {/* Injeção semântica JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <KBArticleDetailClient article={article} />
        </>
    );
}
