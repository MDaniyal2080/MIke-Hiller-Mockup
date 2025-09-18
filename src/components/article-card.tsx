import Image from 'next/image'
import Link from 'next/link'
import type { Post } from '@/lib/posts'
import { toCategorySlug } from '@/lib/categories'

export function ArticleCard({ post }: { post: Post }) {
  return (
    <article className="card card-hover overflow-hidden">
      <Link href={`/posts/${post.slug}`} className="relative block aspect-[16/10]">
        <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
      </Link>
      <div className="p-5">
        <Link href={`/category/${toCategorySlug(post.category)}`} className="text-xs uppercase tracking-wide text-brand font-semibold hover:underline">{post.category}</Link>
        <Link href={`/posts/${post.slug}`} className="mt-2 block font-semibold text-lg leading-snug hover:text-brand">
          {post.title}
        </Link>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 line-clamp-2">{post.excerpt}</p>
        <div className="mt-4 text-xs opacity-70">{new Date(post.date).toLocaleDateString()}</div>
      </div>
    </article>
  )
}
