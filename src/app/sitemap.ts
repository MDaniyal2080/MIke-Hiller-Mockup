import type { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'
import { posts } from '@/lib/posts'
import { categories } from '@/lib/categories'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, '')
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/posts`, lastModified: new Date() },
    { url: `${base}/guides`, lastModified: new Date() },
    { url: `${base}/reviews`, lastModified: new Date() },
    { url: `${base}/category`, lastModified: new Date() },
  ]

  const postRoutes = posts.map((p) => ({
    url: `${base}/posts/${p.slug}`,
    lastModified: new Date(p.date),
  }))

  const categoryRoutes = categories.map((c) => ({
    url: `${base}/category/${c.slug}`,
    lastModified: new Date(),
  }))

  return [...staticRoutes, ...postRoutes, ...categoryRoutes]
}
