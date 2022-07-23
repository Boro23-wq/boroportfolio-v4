import { getMediumPosts } from '@/lib/medium'

export default async (_, res) => {
  const response = await getMediumPosts()
  const { items } = await response.json()

  const posts = items?.slice(0, 5).map((post) => ({
    title: post.title,
    pubDate: post.pubDate,
    description: post.description,
    link: post.link,
    image: post.thumbnail,
    categories: post.categories,
  }))

  return res.status(200).json({ posts })
}
