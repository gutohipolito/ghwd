import { MetadataRoute } from 'next'
import { servicesData } from '@/lib/services-data'
import { citiesData } from '@/lib/local-data'
import { kbArticles } from '@/lib/kb-data'

export const dynamic = 'force-static';
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ghwd.com.br'
  
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/partners`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kb`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kb/glossary`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Adiciona serviços normais dinamicamente (incluindo todos os aliases/idiomas em servicesData)
  const serviceSlugs = Object.keys(servicesData);
  const serviceRoutes = serviceSlugs.map(slug => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Adiciona rotas de SEO local dinamicamente combinando cada serviço com cada cidade/região atendida
  const citySlugs = Object.keys(citiesData);
  const localRoutes: MetadataRoute.Sitemap = [];

  for (const slug of serviceSlugs) {
    for (const city of citySlugs) {
      localRoutes.push({
        url: `${baseUrl}/services/${slug}/${city}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      });
    }
  }

  // Adiciona rotas do Knowledge Base dinamicamente
  const kbRoutes = kbArticles.map(article => ({
    url: `${baseUrl}/kb/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...localRoutes, ...kbRoutes];
}
