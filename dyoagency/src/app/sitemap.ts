export const dynamic = 'force-static';
import { MetadataRoute } from 'next';
import { djs } from '@/data/djs';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dyoagency.com'; // Deine echte Domain hier eintragen

  // Alle Artist-URLs generieren
  const artistUrls = djs.map((dj) => ({
    url: `${baseUrl}/artists/${dj.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    ...artistUrls,
  ];
}