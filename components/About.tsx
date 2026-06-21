'use client'

import { useEffect, useRef } from 'react'
import { PERSONAL } from '@/lib/config'

export default function About() {
  const refs = useRef<HTMLElement[]>([])

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } })
    }, { threshold: 0.12 })
    refs.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  const ref = (el: HTMLElement | null) => { if (el) refs.current.push(el) }

  return (
    <section id="about" style={{ padding: 'clamp(80px, 12vw, 160px) var(--gut)', borderTop: '1px solid var(--line)', maxWidth: 'var(--maxw)', margin: '0 auto', width: '100%' }}>

      <div ref={ref} className="reveal reveal-hidden" style={{ display: 'flex', alignItems: 'baseline', gap: 18, marginBottom: 56 }}>
        <span style={{ fontFamily: 'var(--font-mono-stack)', fontSize: 13, color: 'var(--accent)' }}>01</span>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(30px, 5vw, 46px)', fontWeight: 500, letterSpacing: '-0.03em', color: 'var(--text)' }}>About</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 'clamp(36px, 6vw, 90px)', alignItems: 'start' }} className="about-grid">

        {/* Portrait */}
        <div ref={ref} className="reveal reveal-hidden" style={{
          aspectRatio: '4 / 5', maxWidth: 320,
          borderRadius: 14, border: '1px solid var(--line)',
          overflow: 'hidden',
        }}>
          <img
            src="/portrait.jpeg"
            alt="Sanket Saboo"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
          />
        </div>

        {/* Bio */}
        <div>
          {PERSONAL.bio.map((para, i) => (
            <p
              key={i}
              ref={ref}
              className="reveal reveal-hidden"
              data-d={String(i + 1) as '1' | '2' | '3'}
              style={{
                color: 'var(--text-2)',
                fontSize: 'clamp(17px, 2vw, 21px)',
                lineHeight: 1.6,
                marginBottom: i < PERSONAL.bio.length - 1 ? 22 : 0,
              }}
            >
              {para}
            </p>
          ))}

        </div>
      </div>

    </section>
  )
}
