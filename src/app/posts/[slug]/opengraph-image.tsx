import { ImageResponse } from 'next/og'
import { getPost } from '@/lib/posts'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const runtime = 'edge'

export default async function OG({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  const title = post?.title ?? 'Aviary'

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          background: 'linear-gradient(135deg, #0b0c0e 0%, #1f2937 60%)',
          color: 'white',
          padding: 48,
        }}
      >
        <div style={{ fontSize: 24, opacity: 0.8 }}>Aviary</div>
        <div style={{ fontSize: 54, fontWeight: 800, lineHeight: 1.1 }}>{title}</div>
      </div>
    ),
    { ...size }
  )
}
