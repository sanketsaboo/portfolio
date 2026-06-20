'use client'

import { useState, useEffect, useRef } from 'react'
import { PERSONAL, SOCIAL } from '@/lib/config'

const SOCIAL_LINKS = [
  { label: 'GitHub',   href: SOCIAL.github   },
  { label: 'LinkedIn', href: SOCIAL.linkedin  },
  { label: 'X / Twitter', href: SOCIAL.twitter },
  { label: 'Read.cv',  href: SOCIAL.readcv   },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const refs = useRef<HTMLElement[]>([])

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } })
    }, { threshold: 0.1 })
    refs.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  const ref = (el: HTMLElement | null) => { if (el) refs.current.push(el) }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${PERSONAL.email}`
    }
  }

  return (
    <section id="contact" style={{ padding: 'clamp(80px, 12vw, 160px) var(--gut)', borderTop: '1px solid var(--line)', maxWidth: 'var(--maxw)', margin: '0 auto', width: '100%' }}>

      <div ref={ref} className="reveal reveal-hidden">
        <span style={{ fontFamily: 'var(--font-mono-stack)', fontSize: 13, color: 'var(--accent)' }}>04 - contact</span>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(44px, 8.5vw, 96px)',
          fontWeight: 500,
          letterSpacing: '-0.04em',
          lineHeight: 0.97,
          color: 'var(--text)',
          marginTop: 18,
        }}>
          Let's build<br />something{' '}
          <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>solid</span>.
        </h2>
      </div>

      <p ref={ref} className="reveal reveal-hidden" data-d="1" style={{
        color: 'var(--text-2)',
        fontSize: 'clamp(17px, 2vw, 21px)',
        maxWidth: '44ch',
        marginTop: 24,
      }}>
        Hiring, collaborating, or just want to talk systems? My inbox is open.
      </p>

      <div ref={ref} className="reveal reveal-hidden" data-d="2" style={{ marginTop: 40 }}>
        <button
          onClick={copyEmail}
          className="email-btn"
          aria-label={copied ? 'Email copied!' : 'Copy email address'}
          style={{
            fontFamily: 'var(--font-mono-stack)',
            fontSize: 'clamp(14px, 2vw, 17px)',
            border: '1px solid var(--line-2)',
            borderRadius: 12,
            padding: '15px 22px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 14,
            color: 'var(--text)',
            transition: 'border-color 0.25s, background 0.25s',
            background: 'transparent',
          }}
        >
          {PERSONAL.email}
          <span style={{ fontSize: 11.5, color: copied ? 'var(--accent)' : 'var(--text-3)' }}>
            {copied ? 'copied ✓' : 'click to copy'}
          </span>
        </button>
      </div>

      <div ref={ref} className="reveal reveal-hidden" data-d="3" style={{ display: 'flex', gap: 10, marginTop: 30, flexWrap: 'wrap' }}>
        {SOCIAL_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            style={{
              fontFamily: 'var(--font-mono-stack)', fontSize: 13,
              color: 'var(--text-2)',
              border: '1px solid var(--line)', borderRadius: 10, padding: '10px 16px',
              display: 'inline-flex', alignItems: 'center', gap: 9,
              transition: 'color 0.25s, border-color 0.25s',
            }}
          >
            {label} ↗
          </a>
        ))}
      </div>

    </section>
  )
}
