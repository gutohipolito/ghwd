import { MetadataRoute } from 'next'

export const dynamic = 'force-static';
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      {
        userAgent: ['GPTBot', 'Claude-Web', 'PerplexityBot', 'Applebot-extended', 'ChatGPT-User'],
        allow: '/',
        disallow: '/private/',
      }
    ],
    sitemap: 'https://ghwd.com.br/sitemap.xml',
  }
}
