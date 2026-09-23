export type FAQItem = { question: string; answer: string }

const FAQ_MARKER = /<h2[^>]*>\s*Frequently Asked Questions\s*<\/h2>/i
const HEADING = /<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi

const NAMED_ENTITIES: Record<string, string> = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'",
  '&apos;': "'",
  '&nbsp;': ' ',
}

function htmlToText(html: string): string {
  return html
    .replace(/<(script|style)[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<\/(p|li|div|h[1-6]|tr)>|<br\s*\/?>/gi, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/&(amp|lt|gt|quot|#39|apos|nbsp);/g, (entity) => NAMED_ENTITIES[entity] ?? entity)
    .replace(/&#(\d+);/g, (_match, code: string) => String.fromCharCode(Number(code)))
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * Parses FAQ question/answer pairs from an HTML string. Works without the DOM so the
 * result is available during server rendering (crawlers and AI bots read the raw HTML).
 * When the post has a "Frequently Asked Questions" section, only that section is used.
 */
export function extractFaqs(html: string): FAQItem[] {
  const markerAt = html.search(FAQ_MARKER)
  const source = markerAt === -1 ? html : html.slice(markerAt)
  const headings = [...source.matchAll(HEADING)]
  const items: FAQItem[] = []

  headings.forEach((match, index) => {
    const level = Number(match[1])
    const question = htmlToText(match[2])
    if (level < 2 || level > 4 || !question.includes('?')) return

    const answerStart = (match.index ?? 0) + match[0].length
    const answerEnd = headings[index + 1]?.index ?? source.length
    const answer = htmlToText(source.slice(answerStart, answerEnd))
    if (answer) items.push({ question, answer })
  })

  return items
}
