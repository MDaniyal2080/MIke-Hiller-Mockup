# Aviary — Premium Next.js Magazine

A premium, responsive food and travel magazine built with Next.js 14, TypeScript, and Tailwind CSS. Features beautiful bento grid layouts, dark mode, search, categories, and SEO optimization.

## 🚀 Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/premium-magazine)

## ✨ Features

- **Premium Design**: Bento grid hero, elegant article cards, polished typography
- **Search & Navigation**: Global search with keyboard shortcuts, category system  
- **Interactive**: Share buttons, scroll progress, dark mode toggle
- **SEO Optimized**: Sitemap, robots.txt, Open Graph images, structured metadata
- **Performance**: Next.js 14 App Router, optimized images, static generation

## 🛠 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # React components
├── lib/                 # Utilities and data
└── config/             # Site configuration
```

## 🎨 Customization

1. **Branding**: Edit `src/config/site.ts`
2. **Content**: Replace posts in `src/lib/posts.ts`
3. **Colors**: Update Tailwind config in `tailwind.config.ts`
4. **Fonts**: Modify imports in `src/app/layout.tsx`

## 🚀 Deployment

**Vercel (Recommended)**:
1. Connect your Git repository to Vercel
2. Update `src/config/site.ts` with your domain
3. Deploy automatically on every push

**Other Platforms**:
```bash
npm run build
# Upload .next folder to your hosting provider
```

## 📝 Environment Variables

Update the production URL in `src/config/site.ts`:
```typescript
url: 'https://your-site.vercel.app'
```

## 🤝 Contributing

This is a starter template. Customize it for your needs!

## 📄 License

MIT License
