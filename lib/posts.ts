import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface PostMetadata {
  slug: string
  title: string
  date: string
  author: string
  excerpt: string
  coverImage?: string
}

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = path.join(postsDirectory, realSlug, 'index.md')
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug: realSlug,
    title: data.title,
    date: data.date,
    author: data.author,
    excerpt: data.excerpt,
    coverImage: data.coverImage,
    content,
  }
}

export function getAllPosts() {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

export function getLatestPosts(count: number = 5): PostMetadata[] {
  const posts = getAllPosts()
  return posts.slice(0, count).map(({ slug, title, date, author, excerpt, coverImage }) => ({
    slug,
    title,
    date,
    author,
    excerpt,
    coverImage,
  }))
}
