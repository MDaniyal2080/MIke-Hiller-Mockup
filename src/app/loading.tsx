export default function Loading() {
  return (
    <div className="container-nice py-10 animate-pulse">
      <div className="h-8 w-48 rounded-lg bg-black/5 dark:bg-white/10" />
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-2xl border border-black/5 dark:border-white/10 overflow-hidden">
            <div className="aspect-[16/10] bg-black/5 dark:bg-white/10" />
            <div className="p-5 space-y-3">
              <div className="h-4 w-24 rounded bg-black/5 dark:bg-white/10" />
              <div className="h-5 w-3/4 rounded bg-black/5 dark:bg-white/10" />
              <div className="h-4 w-full rounded bg-black/5 dark:bg-white/10" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
