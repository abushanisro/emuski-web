import { allBlogPosts } from '@/data/blogData'
import { LLMS_BASE } from '@/data/llmsBase'

export const dynamic = 'force-static'

const SITE_URL = 'https://www.emuski.com'

function oneLine(text: string, maxLength: number): string {
  const flat = text.replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim()
  return flat.length > maxLength ? `${flat.slice(0, maxLength - 3).trimEnd()}...` : flat
}

export function GET(): Response {
  const posts = [...allBlogPosts].sort((a, b) => b.publishDate.localeCompare(a.publishDate))
  const entries = posts.map(
    (post) =>
      `- [${oneLine(post.title, 140)}](${SITE_URL}/blog/${post.slug}): ${oneLine(post.metaDescription || post.excerpt, 170)}`
  )
  const body = `${LLMS_BASE}\n\n## Guides and Articles\n\nEngineering, cost and sourcing guides published by EMUSKI, most recent first.\n\n${entries.join('\n')}\n`

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
