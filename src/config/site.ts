export const siteConfig = {
  name: 'Aviary',
  tagline: 'Food • Restos • Travel',
  description:
    'A premium food and travel magazine featuring the best restaurants, experiences, and stories — beautifully designed and lightning fast.',
  url: process.env.NODE_ENV === 'production' ? 'https://your-site.vercel.app' : 'http://localhost:3000',
  twitter: 'https://twitter.com/yourhandle',
  instagram: 'https://instagram.com/yourhandle',
  email: 'hello@example.com',
}

export type SiteConfig = typeof siteConfig
