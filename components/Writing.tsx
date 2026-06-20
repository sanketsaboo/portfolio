'use client'

import { useEffect, useRef } from 'react'
import { WRITING } from '@/lib/config'

export default function Writing() {
  const refs = useRef<HTMLElement[]>([])

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } })
    }, { threshold: 0.1 })
    refs.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  const ref = (el: HTMLElement | null) => { if (el) refs.current.push(el) }

  return (
    <section id="writing" style={{ padding: 'clamp(80px, 12vw, 160px) var(--gut)', borderTop: '1px solid var(--line)', maxWidth: 'var(--maxw)', margin: '0 auto', width: '100%' }}>

      <div ref={ref} className="reveal reveal-hidden" style={{ display: 'flex', alignItems: 'baseline', gap: 18, marginBottom: 56 }}>
        <span style={{ fontFamily: 'var(--font-mono-stack)', fontSize: 13, color: 'var(--accent)' }}>04</span>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(30px, 5vw, 46px)', fontWeight: 500, letterSpacing: '-0.03em', color: 'var(--text)' }}>Writing</h2>
      </div>

      <div>
        {WRITING.map((post, i) => (
          <a
            key={post.title}
            ref={ref}
            className="reveal reveal-hidden post-row"
            href={post.href}
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr auto',
              gap: 28,
              alignItems: 'baseline',
              padding: '26px 8px',
              borderTop: '1px solid var(--line)',
              position: 'relative',
              textDecoration: 'none',
              transition: 'padding 0.35s var(--ease)',
            }}
          >
            <span style={{ fontFamily: 'var(--font-mono-stack)', fontSize: 12.5, color: 'var(--text-3)', whiteSpace: 'nowrap' }}>
              {post.date}
            </span>
            <span className="post-title" style={{
              fontSize: 'clamp(19px, 2.4vw, 26px)',
              fontFamily: 'var(--font-heading)',
              letterSpacing: '-0.02em',
              color: 'var(--text)',
              transition: 'color 0.25s',
            }}>
              {post.title}
            </span>
            <span className="post-arrow" style={{
              fontFamily: 'var(--font-mono-stack)', fontSize: 13,
              color: 'var(--accent)',
              opacity: 0, transform: 'translateX(-6px)',
              transition: '0.3s var(--ease)',
            }}>
              read →
            </span>
          </a>
        ))}
        <div style={{ borderTop: '1px solid var(--line)' }} />
      </div>

    </section>
  )
}
