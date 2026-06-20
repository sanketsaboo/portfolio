'use client'

import { useEffect, useRef } from 'react'
import { PRODUCTS } from '@/lib/config'
import { ArrowUpRight } from '@phosphor-icons/react'

export default function Products() {
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
    <section id="products" style={{ padding: 'clamp(80px, 12vw, 160px) var(--gut)', borderTop: '1px solid var(--line)', maxWidth: 'var(--maxw)', margin: '0 auto', width: '100%' }}>

      <div ref={ref} className="reveal reveal-hidden" style={{ display: 'flex', alignItems: 'baseline', gap: 18, marginBottom: 16 }}>
        <span style={{ fontFamily: 'var(--font-mono-stack)', fontSize: 13, color: 'var(--accent)' }}>04</span>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(30px, 5vw, 46px)', fontWeight: 500, letterSpacing: '-0.03em', color: 'var(--text)' }}>Products</h2>
      </div>

      <p ref={ref} className="reveal reveal-hidden" style={{ color: 'var(--text-3)', fontFamily: 'var(--font-mono-stack)', fontSize: 13, marginBottom: 52 }}>
        Production products I built or contributed to at IDfy · Privy
      </p>

      <div className="products-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--line)', border: '1px solid var(--line-2)', borderRadius: 14, overflow: 'hidden' }}>
        {PRODUCTS.map((product, i) => (
          <a
            key={product.name}
            ref={ref}
            href={product.href}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal reveal-hidden product-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '32px 30px',
              background: 'var(--bg)',
              textDecoration: 'none',
              transition: 'background 0.25s',
              position: 'relative',
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(18px, 2vw, 22px)', fontWeight: 500, color: 'var(--text)', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                  {product.name}
                </div>
                <div style={{ fontFamily: 'var(--font-mono-stack)', fontSize: 11, color: 'var(--text-3)', marginTop: 5, letterSpacing: '0.06em' }}>
                  {product.company}
                </div>
              </div>
              <ArrowUpRight size={18} style={{ color: 'var(--text-3)', flexShrink: 0, marginTop: 3, transition: 'color 0.2s, transform 0.2s' }} className="product-arrow" />
            </div>

            {/* Description */}
            <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.65, marginBottom: 20 }}>
              {product.description}
            </p>

            {/* Highlights */}
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24, flex: 1 }}>
              {product.highlights.map((h) => (
                <li key={h} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: 'var(--text-3)', lineHeight: 1.5 }}>
                  <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0, marginTop: 6 }} />
                  {h}
                </li>
              ))}
            </ul>

            {/* Role badge */}
            <div style={{
              display: 'inline-flex',
              alignSelf: 'flex-start',
              fontFamily: 'var(--font-mono-stack)',
              fontSize: 11,
              color: 'var(--accent)',
              background: 'var(--accent-soft)',
              border: '1px solid var(--accent-border)',
              borderRadius: 6,
              padding: '4px 10px',
              letterSpacing: '0.04em',
            }}>
              {product.role}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
