import { getPostBySlug, getPostSlugs } from '@/lib/posts'
import BlogPost from '@/components/BlogPost'

export async function generateStaticParams() {
  const slugs = getPostSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

// Per-post share card, opt-in: only posts with `ogImage` in their front matter override the site default.
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  const fm = post?.frontmatter
  if (!fm?.ogImage) {
    return {}
  }
  const image = fm.ogImage.startsWith('http') ? fm.ogImage : `https://www.biloxistudios.com${fm.ogImage}`
  return {
    title: fm.title,
    description: fm.excerpt,
    openGraph: {
      title: fm.title,
      description: fm.excerpt,
      url: `https://www.biloxistudios.com/blog/${params.slug}`,
      type: 'article',
      images: [{ url: image, width: 1200, height: 630, alt: fm.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fm.title,
      description: fm.excerpt,
      images: [image],
    },
  }
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    return null
  }

  return <BlogPost content={post.content} frontmatter={post.frontmatter} />
}
