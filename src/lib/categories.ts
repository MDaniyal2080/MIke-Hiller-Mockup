import { posts } from '@/lib/posts'

export function toCategorySlug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export const categories = Array.from(new Set(posts.map((p) => p.category))).map((name) => ({
  name,
  slug: toCategorySlug(name),
}))
