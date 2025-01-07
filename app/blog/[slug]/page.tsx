import { getPostBySlug, getAllPosts } from '@/lib/posts'
import Image from 'next/image'
import Link from 'next/link'

interface PostParams {
  params: {
    slug: string
  }
}

// Generate static pages for all posts
export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function Post({ params }: PostParams) {
  const post = getPostBySlug(params.slug)

  return (
    <article className="py-16">
      <div className="vapor-card max-w-4xl mx-auto">
        {/* Post Header */}
        <header className="mb-8">
          <Link href="/blog" className="coastal-link mb-4 inline-block">
            ← Back to all posts
          </Link>
          <h1 className="vapor-text text-4xl font-bold mb-4">{post.title}</h1>
          <div className="text-coastal-sand mb-4">
            <time>{new Date(post.date).toLocaleDateString()}</time>
            <span className="mx-2">•</span>
            <span>{post.author}</span>
          </div>
          {post.coverImage && (
            <div className="relative h-64 mb-8">
              <Image
                src={`/content/posts/${params.slug}/${post.coverImage}`}
                alt={post.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          )}
        </header>

        {/* Post Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          {/* Note: In a real implementation, we'd use a markdown renderer here */}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
    </article>
  )
}
