import Image from 'next/image'
import type { PostMetadata } from '@/lib/posts'

interface BlogPostProps {
  content: string
  frontmatter: PostMetadata
}

export default function BlogPost({ content, frontmatter }: BlogPostProps) {
  return (
    <article className="vapor-card max-w-4xl mx-auto my-8">
      {frontmatter.coverImage && (
        <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image
            src={`/images/posts/${frontmatter.slug}/${frontmatter.coverImage}`}
            alt={frontmatter.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
      
      <div className="prose prose-lg prose-invert max-w-none">
        <h1 className="vapor-text text-4xl mb-4">{frontmatter.title}</h1>
        <div className="flex gap-4 text-coastal-sand mb-8">
          <span>{frontmatter.author}</span>
          <span>•</span>
          <time>{new Date(frontmatter.date).toLocaleDateString()}</time>
        </div>
        <div className="markdown-content" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </article>
  )
} 