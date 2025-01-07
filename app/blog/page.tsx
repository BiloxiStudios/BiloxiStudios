import { getAllPosts } from '@/lib/posts'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogIndex() {
  const posts = getAllPosts()

  return (
    <div className="py-16">
      <header className="mb-16 text-center">
        <h1 className="vapor-text text-5xl font-bold mb-4">Blog</h1>
        <p className="text-coastal-sand text-xl">
          Updates and insights from the Biloxi Studios team
        </p>
      </header>

      <div className="grid gap-8 max-w-5xl mx-auto">
        {posts.map((post) => (
          <Link 
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="vapor-card hover:scale-[1.02] transition-transform duration-300"
          >
            <article className="grid md:grid-cols-4 gap-6">
              {post.coverImage && (
                <div className="md:col-span-1 relative h-48 md:h-full">
                  <Image
                    src={`/content/posts/${post.slug}/${post.coverImage}`}
                    alt={post.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              )}
              <div className={`${post.coverImage ? 'md:col-span-3' : 'md:col-span-4'}`}>
                <h2 className="text-2xl font-display text-vapor-yellow mb-2">
                  {post.title}
                </h2>
                <div className="text-coastal-sand mb-3">
                  <time>{new Date(post.date).toLocaleDateString()}</time>
                  <span className="mx-2">•</span>
                  <span>{post.author}</span>
                </div>
                <p className="text-coastal-sand/80">
                  {post.excerpt}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}
