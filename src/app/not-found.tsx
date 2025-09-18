import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container-nice py-24 text-center">
      <div className="text-xs uppercase tracking-wide text-brand font-semibold">404</div>
      <h1 className="font-display text-4xl mt-1">Page not found</h1>
      <p className="mt-2 text-neutral-600 dark:text-neutral-300">The page you requested doesn’t exist or has moved.</p>
      <Link href="/" className="inline-flex mt-6 items-center justify-center rounded-xl bg-brand text-white px-5 py-3 font-medium hover:opacity-90">Go home</Link>
    </div>
  )
}
