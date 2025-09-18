"use client"

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { posts } from '@/lib/posts'

export function SearchDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (o: boolean) => void }) {
  const [query, setQuery] = useState('')

  // Global keyboard shortcuts
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.key === '/' || (e.key.toLowerCase() === 'k' && (e.metaKey || e.ctrlKey))) && !open) {
        e.preventDefault()
        onOpenChange(true)
      } else if (e.key === 'Escape' && open) {
        onOpenChange(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onOpenChange])

  useEffect(() => {
    if (!open) setQuery('')
  }, [open])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return posts.slice(0, 8)
    return posts
      .filter((p) => `${p.title} ${p.excerpt} ${p.category}`.toLowerCase().includes(q))
      .slice(0, 12)
  }, [query])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm" onClick={() => onOpenChange(false)}>
      <div className="container-nice max-w-2xl mx-auto mt-24" onClick={(e) => e.stopPropagation()}>
        <div className="card overflow-hidden">
          <div className="border-b border-black/5 dark:border-white/10 p-3 flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-70"><path d="M10 18a8 8 0 1 1 5.293-14.293A8 8 0 0 1 10 18Zm11 3-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <input
              autoFocus
              placeholder="Search articles, guides, reviews…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none text-sm"
            />
            <button className="text-sm px-2 py-1 rounded-md hover:bg-black/5 dark:hover:bg-white/10" onClick={() => onOpenChange(false)}>Esc</button>
          </div>

          <div className="p-3 grid gap-2">
            {results.length === 0 && (
              <div className="p-6 text-center text-sm opacity-70">No results. Try a different search.</div>
            )}
            {results.map((p) => (
              <Link
                key={p.slug}
                href={`/posts/${p.slug}`}
                className="rounded-xl px-3 py-3 hover:bg-black/5 dark:hover:bg-white/10 transition flex items-start gap-3"
                onClick={() => onOpenChange(false)}
              >
                <div className="text-[10px] uppercase tracking-wide text-brand font-semibold shrink-0 mt-0.5">{p.category}</div>
                <div>
                  <div className="text-sm font-medium leading-snug">{p.title}</div>
                  <div className="text-xs opacity-70 line-clamp-1">{p.excerpt}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
