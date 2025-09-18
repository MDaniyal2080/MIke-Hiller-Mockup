import { ArticleCard } from '@/components/article-card'
import { posts } from '@/lib/posts'

export const metadata = { title: 'All Posts' }

export default function PostsPage() {
  return (
    <div className="container-nice py-10">
      <h1 className="font-display text-3xl">All Posts</h1>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <ArticleCard key={p.slug} post={p} />
        ))}
      </div>
    </div>
  )
}
