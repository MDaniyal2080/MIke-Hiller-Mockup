import Image from 'next/image'
import Link from 'next/link'
import type { Post } from '@/lib/posts'
import { toCategorySlug } from '@/lib/categories'

export function HeroBento({ featured }: { featured: Post[] }) {
  const [main, ...rest] = featured

  return (
    <section className="container-nice pt-10">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-7 card card-hover overflow-hidden relative">
          <Link href={`/posts/${main.slug}`} className="relative block aspect-[16/10]">
            <Image src={main.image} alt={main.title} fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 60vw" />
          </Link>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 p-6 text-white">
            <Link href={`/category/${toCategorySlug(main.category)}`} className="text-xs uppercase tracking-wide opacity-90 hover:underline">{main.category}</Link>
            <Link href={`/posts/${main.slug}`} className="block mt-1">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl leading-tight drop-shadow-[0_1px_0_rgba(0,0,0,.5)] hover:opacity-90">{main.title}</h2>
            </Link>
          </div>
        </div>

        <div className="col-span-12 md:col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
          {rest.map((p) => (
            <div key={p.slug} className="card card-hover overflow-hidden relative">
              <Link href={`/posts/${p.slug}`} className="relative block aspect-[16/10]">
                <Image src={p.image} alt={p.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
              </Link>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 p-4 text-white">
                <Link href={`/category/${toCategorySlug(p.category)}`} className="text-[10px] uppercase tracking-wide opacity-90 hover:underline">{p.category}</Link>
                <Link href={`/posts/${p.slug}`} className="block">
                  <h3 className="font-semibold leading-snug hover:opacity-90">{p.title}</h3>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
