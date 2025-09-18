"use client"

import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      const y = window.scrollY
      setProgress(total > 0 ? Math.min(1, Math.max(0, y / total)) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div className="fixed left-0 right-0 top-0 z-[60] h-1 pointer-events-none">
      <div
        className="h-full bg-brand origin-left"
        style={{ transform: `scaleX(${progress})`, transition: 'transform 80ms linear' }}
      />
    </div>
  )
}
