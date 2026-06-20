'use client'

import { useEffect, useRef, useState } from 'react'
import { EXPERIENCE } from '@/lib/config'

type Product = { name: string; description: string; href: string }

function ProductTag({ product }: { product: Product }) {
  const [open, setOpen] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout>>()

  const show = () => { clearTimeout(timer.current); setOpen(true) }
  const hide = () => { timer.current = setTimeout(() => setOpen(false), 120) }

  return (
    <div
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      <span
        className="xp-product-chip"
        style={{
          fontFamily: 'var(--font-mono-stack)', fontSize: 11.5,
          color: open ? 'var(--accent)' : 'var(--text-2)',
          border: `1px solid ${open ? 'var(--accent-border)' : 'var(--line)'}`,
          borderRadius: 100,
          padding: '4px 11px',
          cursor: 'default',
          display: 'inline-flex', alignItems: 'center', gap: 5,
          transition: 'color 0.2s, border-color 0.2s, background 0.2s',
          background: open ? 'var(--accent-soft)' : 'transparent',
          userSelect: 'none',
        }}
      >
        {product.name}
        <span style={{ fontSize: 9, opacity: 0.6 }}>↗</span>
      </span>

      {open && (
        <div
          onMouseEnter={show}
          onMouseLeave={hide}
          style={{
            position: 'absolute',
            bottom: 'calc(100% + 8px)',
            left: 0,
            zIndex: 50,
            minWidth: 240,
            maxWidth: 300,
            background: 'var(--surface)',
            border: '1px solid var(--line-2)',
            borderRadius: 12,
            padding: '14px 16px',
            boxShadow: '0 12px 40px oklch(0 0 0 / 0.18)',
          }}
        >
          <div style={{ fontFamily: 'var(--font-mono-stack)', fontSize: 11.5, fontWeight: 600, color: 'var(--text)', marginBottom: 6 }}>
            {product.name}
          </div>
          <div style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6, marginBottom: 12 }}>
            {product.description}
          </div>
          <a
            href={product.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-mono-stack)', fontSize: 11.5,
              color: 'var(--accent)',
              display: 'inline-flex', alignItems: 'center', gap: 5,
              textDecoration: 'none',
            }}
          >
            View product ↗
          </a>
        </div>
      )}
    </div>
  )
}

function CompanyLogo({ company, logoDomain, logoSrc, logoColor }: {
  company: string
  logoDomain?: string
  logoSrc?: string
  logoColor?: string
}) {
  const [failed, setFailed] = useState(false)
  const letter = company[0].toUpperCase()
  const color = logoColor || 'var(--accent)'

  const src = logoSrc || (logoDomain ? `https://logo.clearbit.com/${logoDomain}` : null)

  if (src && !failed) {
    return (
      <img
        src={src}
        alt={`${company} logo`}
        onError={() => setFailed(true)}
        style={{
          width: 44, height: 44, borderRadius: 10,
          objectFit: 'contain',
          background: 'var(--surface)',
          border: '1px solid var(--line)',
          padding: 4,
          flexShrink: 0,
        }}
      />
    )
  }

  return (
    <div style={{
      width: 44, height: 44, borderRadius: 10,
      background: color + '22',
      border: `1px solid ${color}44`,
      display: 'grid', placeItems: 'center',
      fontFamily: 'var(--font-heading)',
      fontSize: 18, fontWeight: 700,
      color,
      flexShrink: 0,
    }}>
      {letter}
    </div>
  )
}

export default function Experience() {
  const refs = useRef<HTMLElement[]>([])

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } })
    }, { threshold: 0.08 })
    refs.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  const ref = (el: HTMLElement | null) => { if (el) refs.current.push(el) }

  return (
    <section id="experience" style={{ padding: 'clamp(80px, 12vw, 160px) var(--gut)', borderTop: '1px solid var(--line)', maxWidth: 'var(--maxw)', margin: '0 auto', width: '100%' }}>

      <div ref={ref} className="reveal reveal-hidden" style={{ display: 'flex', alignItems: 'baseline', gap: 18, marginBottom: 56 }}>
        <span style={{ fontFamily: 'var(--font-mono-stack)', fontSize: 13, color: 'var(--accent)' }}>02</span>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(30px, 5vw, 46px)', fontWeight: 500, letterSpacing: '-0.03em', color: 'var(--text)' }}>Experience</h2>
      </div>

      <div>
        {EXPERIENCE.map((exp) => (
          <div
            key={exp.company}
            ref={ref}
            className="reveal reveal-hidden xp-row"
            style={{
              display: 'grid',
              gridTemplateColumns: '0.7fr 2fr',
              gap: 28,
              padding: '34px 0',
              borderTop: '1px solid var(--line)',
            }}
          >
            {/* Left */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <CompanyLogo
                  company={exp.company}
                  logoDomain={(exp as any).logoDomain}
                  logoSrc={(exp as any).logoSrc}
                  logoColor={exp.logoColor}
                />
                <div>
                  <div style={{ fontFamily: 'var(--font-mono-stack)', fontSize: 13, color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: 7 }}>
                    {exp.current && (
                      <span className="pulse-dot" style={{ width: 6, height: 6, background: 'oklch(0.78 0.17 150)', flexShrink: 0 }} aria-label="Current role" />
                    )}
                    {exp.company}
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono-stack)', fontSize: 11.5, color: 'var(--text-3)', marginTop: 2 }}>{exp.period}</div>
                </div>
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: 19, letterSpacing: '-0.02em', color: 'var(--text)', lineHeight: 1.25 }}>
                {exp.role}
              </div>
            </div>

            {/* Right */}
            <div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16 }}>
                {exp.highlights.map((point, pi) => (
                  <li key={pi} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 15, color: 'color-mix(in oklab, var(--text) 55%, var(--text-2))', lineHeight: 1.65 }}>
                    <span className="xp-bullet-dot" style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--text-3)', flexShrink: 0, marginTop: 8 }} aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, paddingLeft: 16 }}>
                {exp.tech.map((tag) => (
                  <span
                    key={tag}
                    className="xp-tag"
                    style={{
                      fontFamily: 'var(--font-mono-stack)', fontSize: 11.5,
                      color: 'var(--text-2)',
                      border: '1px solid var(--line)', borderRadius: 100,
                      padding: '4px 11px',
                      transition: 'border-color 0.25s, color 0.25s',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Product chips */}
              {(exp as any).products && (
                <div style={{ marginTop: 20, paddingLeft: 16 }}>
                  <span style={{ fontFamily: 'var(--font-mono-stack)', fontSize: 11, color: 'var(--text-3)', letterSpacing: '0.08em', display: 'block', marginBottom: 10 }}>
                    Shipped ·
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {(exp as any).products.map((p: Product) => (
                      <ProductTag key={p.name} product={p} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
        <div style={{ borderTop: '1px solid var(--line)' }} />
      </div>
    </section>
  )
}
