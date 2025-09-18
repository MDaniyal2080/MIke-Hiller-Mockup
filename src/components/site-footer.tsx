"use client"

import Link from 'next/link'
import { siteConfig } from '@/config/site'

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-black/5 dark:border-white/10">
      <div className="container-nice py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-brand to-orange-400 shadow-soft" />
            <span className="font-display text-xl tracking-tight">{siteConfig.name}</span>
          </div>
          <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-300 max-w-sm">
            {siteConfig.description}
          </p>
          <div className="mt-4 flex items-center gap-4 text-sm">
            <a href={siteConfig.twitter} className="hover:text-brand" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href={siteConfig.instagram} className="hover:text-brand" target="_blank" rel="noopener noreferrer">Instagram</a>
            <Link href={`mailto:${siteConfig.email}`} className="hover:text-brand">Email</Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-brand">Home</Link></li>
            <li><Link href="/guides" className="hover:text-brand">Guides</Link></li>
            <li><Link href="/reviews" className="hover:text-brand">Reviews</Link></li>
            <li><Link href="/posts" className="hover:text-brand">All posts</Link></li>
          </ul>
        </div>

        <div className="card p-5">
          <h4 className="font-semibold">Subscribe</h4>
          <p className="text-sm opacity-80 mt-1">Get the best new openings and travel tips, weekly.</p>
          <form className="mt-4 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3" onSubmit={(e) => e.preventDefault()}>
            <input type="email" required placeholder="you@example.com" className="rounded-xl border p-3 bg-white/70 dark:bg-white/10 border-black/10 dark:border-white/10" />
            <button className="rounded-xl bg-brand text-white px-5 py-3 font-medium hover:opacity-90">Join</button>
          </form>
          <p className="mt-2 text-xs opacity-70">We respect your privacy. Unsubscribe anytime.</p>
        </div>
      </div>
      <div className="border-t border-black/5 dark:border-white/10 py-6 text-center text-xs opacity-70">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  )
}
