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


      {/* Bottom fade */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 160,
        background: 'linear-gradient(to top, var(--bg), transparent)',
        pointerEvents: 'none', zIndex: 1,
      }} aria-hidden="true" />

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 36, left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        animation: 'fadeUp 1s var(--ease) 0.9s both',
      }} aria-hidden="true">
        <span style={{
          fontFamily: 'var(--font-mono-stack)', fontSize: 9.5,
          letterSpacing: '0.18em', textTransform: 'uppercase',
          color: 'var(--text-3)',
        }}>scroll</span>
        <div className="scroll-line" />
      </div>

      <div style={{
        position: 'relative', zIndex: 2,
        maxWidth: 'var(--maxw)', margin: '0 auto',
        padding: 'clamp(120px, 18vw, 160px) var(--gut) clamp(80px, 10vw, 120px)',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: 'clamp(40px, 6vw, 80px)',
        alignItems: 'center',
      }} className="hero-inner">

        {/* Left column */}
        <div>
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

          {/* Name */}
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
              <span style={{
                background: 'linear-gradient(110deg, var(--text) 40%, var(--accent) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Saboo.
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
                Resume ↗
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Right column — meta */}
        <div style={{
          display: 'flex', flexDirection: 'column', gap: 32,
          borderLeft: '1px solid var(--line)',
          paddingLeft: 'clamp(28px, 4vw, 52px)',
          animation: 'fadeUp 0.9s var(--ease) 0.44s both',
        }} className="hero-meta">
          {META.map((item) => (
            <div key={item.label}>
              <p style={{
                fontFamily: 'var(--font-mono-stack)', fontSize: 11,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'var(--text-3)', marginBottom: 6,
              }}>
                {item.label}
              </p>
              <p style={{ fontSize: 14.5, color: 'var(--text)', lineHeight: 1.4, whiteSpace: 'nowrap' }}>
                {item.value}
              </p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 860px) {
          .hero-inner {
            grid-template-columns: 1fr !important;
          }
          .hero-meta {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 24px 32px !important;
            border-left: none !important;
            border-top: 1px solid var(--line) !important;
            padding-left: 0 !important;
            padding-top: 28px !important;
          }
          .hero-meta p:last-child {
            white-space: normal !important;
          }
        }
        @media (max-width: 400px) {
          .hero-meta {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  )
}
