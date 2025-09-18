import { notFound } from 'next/navigation'
import { categories, toCategorySlug } from '@/lib/categories'
import { posts } from '@/lib/posts'
import { ArticleCard } from '@/components/article-card'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const name = categories.find((c) => c.slug === params.slug)?.name
  const title = name ? `${name} — Category` : 'Category'
  return {
    title,
    description: name ? `Stories filed under ${name}.` : 'Category page',
  }
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const name = categories.find((c) => c.slug === params.slug)?.name
  if (!name) return notFound()
  const list = posts.filter((p) => toCategorySlug(p.category) === params.slug)

  return (
    <div className="container-nice py-10">
      <h1 className="font-display text-3xl">{name}</h1>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <ArticleCard key={p.slug} post={p} />
        ))}
      </div>
    </div>
  )
}
