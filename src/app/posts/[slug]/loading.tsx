export default function LoadingPost() {
  return (
    <div className="container-nice py-10 animate-pulse">
      <div className="h-5 w-24 rounded bg-black/5 dark:bg-white/10" />
      <div className="h-10 w-3/4 mt-2 rounded bg-black/5 dark:bg-white/10" />
      <div className="aspect-[16/9] mt-6 rounded-2xl bg-black/5 dark:bg-white/10" />
      <div className="max-w-3xl mt-8 space-y-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-4 w-full rounded bg-black/5 dark:bg-white/10" />
        ))}
      </div>
    </div>
  )
}
