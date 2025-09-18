import { HeroBento } from '@/components/hero-bento'
import { ArticleCard } from '@/components/article-card'
import { posts } from '@/lib/posts'

export default function HomePage() {
  const featured = posts.filter((p) => p.featured).slice(0, 4)
  const latest = posts

  return (
    <div>
      {/* Hero */}
      <HeroBento featured={featured} />

      {/* Latest */}
      <section className="container-nice mt-12">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-2xl sm:text-3xl">Latest stories</h2>
          <a href="/posts" className="text-sm hover:text-brand">View all</a>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((p) => (
            <ArticleCard key={p.slug} post={p} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-nice mt-16">
        <div className="card p-8 text-center">
          <h3 className="font-display text-2xl">Where to eat right now</h3>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">Our hand-picked list of essential restaurants updated monthly.</p>
          <a href="#" className="inline-flex mt-4 items-center justify-center rounded-xl bg-brand text-white px-6 py-3 font-medium hover:opacity-90">See the list</a>
        </div>
      </section>
    </div>
  )
}
