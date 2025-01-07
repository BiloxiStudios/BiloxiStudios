import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import type { PostMetadata } from '@/lib/posts'

export default async function BlogIndex() {
  const posts = await getAllPosts()

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display text-vapor-yellow mb-8">
          Blog Posts
        </h1>

        <div className="grid gap-8 max-w-5xl mx-auto">
          {posts.map((post) => (
            <Link
              key={post.frontmatter.slug}
              href={`/blog/${post.frontmatter.slug}`}
              className="vapor-card hover:transform hover:scale-[1.02]"
            >
              <article>
                <h2 className="text-2xl font-display text-vapor-pink mb-2">
                  {post.frontmatter.title}
                </h2>
                <div className="text-coastal-sand mb-4">
                  <time>{new Date(post.frontmatter.date).toLocaleDateString()}</time>
                  <span className="mx-2">•</span>
                  <span>{post.frontmatter.author}</span>
                </div>
                <p className="text-coastal-sand">
                  {post.frontmatter.excerpt}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
