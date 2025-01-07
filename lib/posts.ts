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

export interface Post {
  content: string
  frontmatter: PostMetadata
}

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, slug, 'index.md')
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    content,
    frontmatter: {
      slug,
      title: data.title,
      date: data.date,
      author: data.author,
      excerpt: data.excerpt,
      coverImage: data.coverImage,
    },
  }
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = getPostSlugs()
  const posts = await Promise.all(
    slugs.map((slug) => getPostBySlug(slug))
  )
  return posts.sort((post1, post2) => 
    post1.frontmatter.date > post2.frontmatter.date ? -1 : 1
  )
}

export async function getLatestPosts(count: number = 5): Promise<PostMetadata[]> {
  const posts = await getAllPosts()
  return posts
    .slice(0, count)
    .map(post => post.frontmatter)
}
