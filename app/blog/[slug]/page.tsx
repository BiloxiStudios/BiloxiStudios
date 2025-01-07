import { getPostBySlug, getPostSlugs } from '@/lib/posts'
import BlogPost from '@/components/BlogPost'

export async function generateStaticParams() {
  const slugs = getPostSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    return null
  }

  return <BlogPost content={post.content} frontmatter={post.frontmatter} />
}
