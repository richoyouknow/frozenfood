import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  // URL dasar website Anda
  const baseUrl = 'https://www.indofrozenfood.web.id'

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Tambahkan halaman lain jika ada
    // {
    //   url: `${baseUrl}/tentang`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ]
}
