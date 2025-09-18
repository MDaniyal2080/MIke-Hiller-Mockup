import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getPost, posts } from '@/lib/posts'
import type { Metadata } from 'next'
import { ShareButtons } from '@/components/share-buttons'
import { ScrollProgress } from '@/components/scroll-progress'

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug)
  if (!post) return { title: 'Post not found' }
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [`/posts/${post.slug}/opengraph-image`],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [`/posts/${post.slug}/opengraph-image`],
    },
  }
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) return notFound()

  return (
    <article className="container-nice py-8">
      <ScrollProgress />
      <div className="text-xs uppercase tracking-wide text-brand font-semibold">{post.category}</div>
      <h1 className="font-display text-3xl sm:text-4xl mt-1">{post.title}</h1>
      <div className="mt-2 flex items-center justify-between text-sm opacity-80">
        <div>{new Date(post.date).toLocaleDateString()}</div>
        <ShareButtons title={post.title} />
      </div>

      <div className="relative mt-6 aspect-[16/9] card overflow-hidden">
        <Image src={post.image} alt={post.title} fill className="object-cover" sizes="100vw" />
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-3xl mt-8">
        <p>{post.content}</p>
        <p>More details and recommendations coming soon. This starter uses placeholder content. Replace with your editorial or connect a CMS.</p>
      </div>
    </article>
  )
}
