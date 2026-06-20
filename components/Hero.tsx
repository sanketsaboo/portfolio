'use client'

import { useEffect, useRef } from 'react'
import { PERSONAL } from '@/lib/config'
import Magnetic from '@/components/Magnetic'

const years = Math.floor((Date.now() - new Date(PERSONAL.careerStart).getTime()) / (1000 * 60 * 60 * 24 * 365.25))
const experience = `${years}+ years enterprise`

const META = [
  { label: 'Role',       value: PERSONAL.role     },
  { label: 'Based in',  value: PERSONAL.location  },
  { label: 'Experience', value: experience         },
  { label: 'Focus',     value: PERSONAL.focus      },
]

export default function Hero() {
  const revealRefs = useRef<HTMLElement[]>([])

  // Scroll-sentinel for navbar
  useEffect(() => {
    const sentinel = document.getElementById('hero-sentinel')
    return () => { sentinel; }
  }, [])

  return (
    <section style={{ position: 'relative', minHeight: '100dvh', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden' }}>
      <div id="hero-sentinel" style={{ position: 'absolute', top: '80vh', left: 0, width: 1, height: 1 }} aria-hidden="true" />

      {/* Grid texture */}
      <div className="hero-grid" aria-hidden="true" />

      {/* Bottom fade */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 160,
        background: 'linear-gradient(to top, var(--bg), transparent)',
        pointerEvents: 'none', zIndex: 1,
      }} aria-hidden="true" />

      <div style={{
        position: 'relative', zIndex: 2,
        maxWidth: 'var(--maxw)', margin: '0 auto',
        padding: 'clamp(120px, 18vw, 160px) var(--gut) clamp(80px, 10vw, 120px)',
        width: '100%',
      }}>

        {/* Availability pill */}
        <div style={{ marginBottom: 32, animation: 'fadeUp 0.8s var(--ease) 0.05s both' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 9,
            fontFamily: 'var(--font-mono-stack)', fontSize: 12.5,
            color: 'var(--text-2)',
            border: '1px solid var(--line)', borderRadius: 100, padding: '7px 14px',
            background: 'color-mix(in oklab, var(--surface) 60%, transparent)',
          }}>
            <span className="pulse-dot" aria-hidden="true" />
            {PERSONAL.availability}
          </span>
        </div>

        {/* Name - text-clip-rise animation */}
        <h1 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(52px, 11.5vw, 136px)',
          fontWeight: 700,
          lineHeight: 0.9,
          letterSpacing: '-0.045em',
          marginBottom: 'clamp(28px, 4vw, 48px)',
        }}>
          <span className="hero-line">
            <span style={{ color: 'var(--text)' }}>Sanket</span>
          </span>
          <span className="hero-line">
            <span style={{ color: 'var(--text)' }}>
              Saboo<span style={{ color: 'var(--accent)' }}>.</span>
            </span>
          </span>
        </h1>

        {/* Tagline */}
        <p style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 300,
          fontSize: 'clamp(19px, 2.4vw, 26px)',
          color: 'var(--text-2)',
          lineHeight: 1.4,
          maxWidth: '32ch',
          marginBottom: 'clamp(28px, 4vw, 48px)',
          animation: 'fadeUp 0.9s var(--ease) 0.22s both',
        }}>
          {PERSONAL.tagline}
        </p>

        {/* CTAs */}
        <div style={{
          display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center',
          marginBottom: 'clamp(48px, 8vw, 80px)',
          animation: 'fadeUp 0.9s var(--ease) 0.36s both',
        }}>
          <Magnetic>
            <a
              href="#contact"
              style={{
                fontFamily: 'var(--font-mono-stack)', fontSize: 13.5, fontWeight: 600,
                padding: '13px 22px', borderRadius: 12,
                background: 'var(--accent)', color: 'var(--accent-contrast)',
                border: '1px solid var(--accent)',
                display: 'inline-flex', alignItems: 'center', gap: 8,
                transition: 'opacity 0.2s',
              }}
            >
              Let's talk →
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={PERSONAL.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-mono-stack)', fontSize: 13.5,
                padding: '13px 22px', borderRadius: 12,
                border: '1px solid var(--line-2)',
                color: 'var(--text)',
                display: 'inline-flex', alignItems: 'center', gap: 8,
                transition: 'background 0.25s, border-color 0.25s, color 0.25s',
              }}
              className="btn-ghost"
            >
              Résumé ↗
            </a>
          </Magnetic>
        </div>

        {/* 4-column meta row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px 32px',
          borderTop: '1px solid var(--line)',
          paddingTop: 28,
          animation: 'fadeUp 0.9s var(--ease) 0.5s both',
        }} className="meta-row-grid">
          {META.map((item) => (
            <div key={item.label}>
              <p style={{
                fontFamily: 'var(--font-mono-stack)', fontSize: 11.5,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'var(--text-3)', marginBottom: 4,
              }}>
                {item.label}
              </p>
              <p style={{ fontSize: 15, color: 'var(--text)' }}>{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .btn-ghost:hover {
          background: var(--text);
          color: var(--bg);
          border-color: var(--text);
        }
        @media (max-width: 640px) {
          .meta-row-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
