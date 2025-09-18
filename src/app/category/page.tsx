import Link from 'next/link'
import { categories } from '@/lib/categories'

export const metadata = { title: 'Categories' }

export default function CategoryIndexPage() {
  return (
    <div className="container-nice py-10">
      <h1 className="font-display text-3xl">Categories</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {categories.map((c) => (
          <Link key={c.slug} href={`/category/${c.slug}`} className="card p-5 hover:-translate-y-1 transition-transform">
            <div className="text-xs uppercase tracking-wide text-brand font-semibold">Category</div>
            <div className="font-semibold text-lg">{c.name}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
