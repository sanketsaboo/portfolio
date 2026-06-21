import { PERSONAL, SOCIAL, EXPERIENCE, PRODUCTS, SKILLS } from '@/lib/config'

const years = Math.floor(
  (Date.now() - new Date(PERSONAL.careerStart).getTime()) / (1000 * 60 * 60 * 24 * 365.25)
)

function generateLlmsTxt(): string {
  const lines: string[] = []

  // Header
  lines.push(`# ${PERSONAL.name}`)
  lines.push('')
  lines.push(
    `> ${PERSONAL.role} specializing in ${PERSONAL.focus}. Based in ${PERSONAL.location}. ${PERSONAL.bio[0]}`
  )
  lines.push('')

  // About
  lines.push('## About')
  lines.push('')
  lines.push(PERSONAL.bio[1])
  lines.push('')
  lines.push(`- Portfolio: https://sanketsaboo.com`)
  lines.push(`- Location: ${PERSONAL.location}`)
  lines.push(`- Experience: ${years}+ years`)
  lines.push(`- Resume: ${PERSONAL.resumeUrl}`)
  lines.push('')

  // Experience
  lines.push('## Experience')
  lines.push('')
  for (const job of EXPERIENCE) {
    lines.push(`### ${job.company} - ${job.role} (${job.period})`)
    lines.push('')
    for (const h of job.highlights) {
      lines.push(h)
    }
    lines.push('')
    lines.push(`Tech: ${job.tech.join(', ')}`)
    lines.push('')
  }

  // Products
  lines.push('## Products Built')
  lines.push('')
  for (const p of PRODUCTS) {
    lines.push(`- **${p.name}** (${p.company}): ${p.description} ${p.highlights.join(' ')} Role: ${p.role}. ${p.href}`)
  }
  lines.push('')

  // Skills
  lines.push('## Skills')
  lines.push('')
  for (const [category, items] of Object.entries(SKILLS)) {
    lines.push(`${category}: ${items.join(', ')}`)
  }
  lines.push('')

  // Links
  lines.push('## Links')
  lines.push('')
  lines.push(`- GitHub: ${SOCIAL.github}`)
  lines.push(`- LinkedIn: ${SOCIAL.linkedin}`)
  lines.push(`- Twitter/X: ${SOCIAL.twitter}`)
  lines.push(`- Read.cv: ${SOCIAL.readcv}`)
  lines.push('')

  return lines.join('\n')
}

export function GET() {
  return new Response(generateLlmsTxt(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  })
}
