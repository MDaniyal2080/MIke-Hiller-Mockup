"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from '@/components/theme-toggle'
import { siteConfig } from '@/config/site'
import { useState } from 'react'
import { SearchDialog } from '@/components/search-dialog'
import type { Route } from 'next'

const nav = [
  { name: 'Home', href: '/' },
  { name: 'Guides', href: '/guides' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Posts', href: '/posts' },
  { name: 'Categories', href: '/category' },
] satisfies { name: string; href: Route }[]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <>
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-[#0b0c0e]/70 border-b border-black/5 dark:border-white/10">
      <div className="container-nice h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-black/5 dark:hover:bg-white/10" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            <svg width="22" height="22" viewBox="0 0 24 24" className="fill-current"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
          <Link href="/" className="group flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-brand to-orange-400 shadow-soft" />
            <span className="font-display text-xl tracking-tight">
              {siteConfig.name}
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map(item => (
            <Link key={item.href} href={item.href} className={`text-sm font-medium transition-colors hover:text-brand ${pathname === item.href ? 'text-brand' : 'text-neutral-600 dark:text-neutral-300'}`}>
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <SearchButton onOpen={() => setSearchOpen(true)} />
          <ThemeToggle />
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 dark:border-white/10">
          <div className="container-nice py-3 grid gap-2">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="py-2 text-sm" onClick={() => setOpen(false)}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
    <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  )
}

function SearchButton({ onOpen }: { onOpen: () => void }) {
  return (
    <button onClick={onOpen} className="hidden sm:inline-flex items-center gap-2 text-sm rounded-full border border-black/10 dark:border-white/10 px-3 py-1.5 hover:bg-black/5 dark:hover:bg-white/10 transition">
      <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-70"><path d="M10 18a8 8 0 1 1 5.293-14.293A8 8 0 0 1 10 18Zm11 3-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      <span className="opacity-80">Search</span>
      <kbd className="ml-2 hidden md:inline-block select-none rounded-md border bg-white/60 dark:bg-white/10 px-1.5 py-0.5 text-xs text-neutral-500 dark:text-neutral-300">/</kbd>
    </button>
  )
}
