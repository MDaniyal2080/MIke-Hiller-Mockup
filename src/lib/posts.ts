export type Post = {
  slug: string
  title: string
  category: string
  date: string
  image: string
  excerpt: string
  author: { name: string }
  featured?: boolean
  content: string
}

export const posts: Post[] = [
  {
    slug: 'best-steak-in-dallas',
    title: 'Best Steak in Dallas: 10 Places We Love Right Now',
    category: 'Guides',
    date: '2025-09-09',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=1600&auto=format&fit=crop&q=80',
    excerpt: 'We searched Dallas for perfectly charred crusts and buttery interiors so you don\'t have to.',
    author: { name: 'Editorial' },
    featured: true,
    content: 'From classic steakhouses with deep leather booths to modern rooms with open kitchens, this list covers the best cuts in town. Look for bone-in ribeyes, dry-aged New York strips, and sides that could steal the show.',
  },
  {
    slug: 'neighborhood-pizza-gems',
    title: '7 Neighborhood Pizza Gems Worth Crossing Town For',
    category: 'Eats',
    date: '2025-09-06',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1600&auto=format&fit=crop&q=80',
    excerpt: 'Detroit squares, Neapolitan blistered pies, and cracker-thin tavern style—find your favorite.',
    author: { name: 'Editorial' },
    featured: true,
    content: 'We tested pies across styles and neighborhoods and landed on these seven must-visit spots. Order the margherita for a baseline; then get weird with seasonal specials.',
  },
  {
    slug: 'breakfast-tacos-tour',
    title: 'The Breakfast Tacos Tour: A Morning Ride',
    category: 'Travel',
    date: '2025-09-01',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=1600&auto=format&fit=crop&q=80',
    excerpt: 'From fluffy eggs to crunchy potatoes and smoky salsa—bring napkins.',
    author: { name: 'Editorial' },
    featured: true,
    content: 'Sunrise never tasted better. We mapped an efficient route for a Saturday morning crawl—plan for coffee stops in between.',
  },
  {
    slug: 'weekend-in-austin',
    title: 'A Perfect Weekend in Austin',
    category: 'Travel',
    date: '2025-08-29',
    image: 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=1600&auto=format&fit=crop&q=80',
    excerpt: 'Hot chicken, cold springs, live music, and a sunset view to remember.',
    author: { name: 'Editorial' },
    content: 'From Barton Springs to South Congress, we chart a breezy two-day plan.',
  },
  {
    slug: 'new-opening-modern-greek',
    title: 'New Opening: Modern Greek Elegance Downtown',
    category: 'Openings',
    date: '2025-09-06',
    image: 'https://images.unsplash.com/photo-1559847844-d0c6b4dd3efc?w=1600&auto=format&fit=crop&q=80',
    excerpt: 'A bright room with marble, olive wood, and coastal seafood classics.',
    author: { name: 'Editorial' },
    content: 'A handsome space with a seafood counter and a menu built for sharing.',
  },
  {
    slug: 'cowboys-game-day-food-guide',
    title: 'AT&T Stadium Game Day Food Guide',
    category: 'Guides',
    date: '2025-09-08',
    image: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=1600&auto=format&fit=crop&q=80',
    excerpt: 'From brisket to bananas foster—everything you should eat before kickoff.',
    author: { name: 'Editorial' },
    content: 'We walked the concourses to compile the ultimate playbook.',
  },
  {
    slug: 'mont-midcentury-fort-worth',
    title: 'Midcentury Elegance Meets Modern Fare in Fort Worth',
    category: 'Reviews',
    date: '2025-07-29',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&auto=format&fit=crop&q=80',
    excerpt: 'Warm woods, sculptural lighting, and a view worth toasting.',
    author: { name: 'Editorial' },
    content: 'A supper club vibe with precision cooking and smart cocktails.',
  },
  {
    slug: 'open-fire-vegetables',
    title: 'Open Fire Vegetables, Three Ways',
    category: 'Recipes',
    date: '2025-08-18',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1600&auto=format&fit=crop&q=80',
    excerpt: 'Smoke, char, and contrast — easy techniques for bright dinners.',
    author: { name: 'Editorial' },
    content: 'Use the grill like a seasoning. These recipes maximize texture and acidity.',
  },
]

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug)
}
