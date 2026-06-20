'use client'

import { useEffect, useRef } from 'react'
import { SKILLS } from '@/lib/config'

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const headRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } })
    }, { threshold: 0.1 })
    if (ref.current) io.observe(ref.current)
    if (headRef.current) io.observe(headRef.current)
    return () => io.disconnect()
  }, [])

  const categories = Object.entries(SKILLS)

  return (
    <section id="skills" style={{ padding: 'clamp(80px, 12vw, 160px) var(--gut)', borderTop: '1px solid var(--line)', maxWidth: 'var(--maxw)', margin: '0 auto', width: '100%' }}>

      <div ref={headRef} className="reveal reveal-hidden" style={{ display: 'flex', alignItems: 'baseline', gap: 18, marginBottom: 56 }}>
        <span style={{ fontFamily: 'var(--font-mono-stack)', fontSize: 13, color: 'var(--accent)' }}>03</span>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(30px, 5vw, 46px)', fontWeight: 500, letterSpacing: '-0.03em', color: 'var(--text)' }}>Skills &amp; tools</h2>
      </div>

      <div
        ref={ref}
        className="reveal reveal-hidden skills-table"
        style={{
          borderRadius: 14,
          overflow: 'hidden',
          /* Accent left + neutral other sides - applied on container so border-radius clips cleanly */
          border: '1px solid var(--line-2)',
          borderLeft: '3px solid var(--accent)',
        }}
      >
        {categories.map(([category, skills], i) => (
          <div
            key={category}
            className="skill-row"
            style={{
              display: 'grid',
              gridTemplateColumns: '200px 1fr',
              borderTop: i === 0 ? 'none' : '1px solid var(--line)',
            }}
          >
            {/* Label cell - no own left border; container handles it */}
            <div
              className="skill-label-cell"
              style={{
                padding: '26px 24px',
                borderRight: '1px solid var(--line)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                gap: 6,
              }}
            >
              <h3 style={{
                fontFamily: 'var(--font-mono-stack)',
                fontSize: 11,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--text)',
                fontWeight: 600,
              }}>
                {category}
              </h3>
              <span style={{
                fontFamily: 'var(--font-mono-stack)',
                fontSize: 11,
                color: 'var(--text-3)',
              }}>
                {skills.length} skills
              </span>
            </div>

            {/* Pills cell - inner shadow on right to visually close the row */}
            <div
              className="skill-pills-cell"
              style={{
                padding: '22px 24px',
                background: 'var(--bg)',
                display: 'flex',
                flexWrap: 'wrap',
                gap: 8,
                alignContent: 'flex-start',
              }}
            >
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="skill-pill"
                  style={{
                    fontFamily: 'var(--font-mono-stack)',
                    fontSize: 13,
                    color: 'var(--text-2)',
                    background: 'var(--bg-2)',
                    border: '1px solid var(--line)',
                    borderRadius: 8,
                    padding: '6px 14px',
                    lineHeight: 1.4,
                    transition: 'color 0.2s, border-color 0.2s, background 0.2s',
                    cursor: 'default',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
