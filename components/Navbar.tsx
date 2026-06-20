'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from '@phosphor-icons/react'
import Magnetic from '@/components/Magnetic'

const NAV_LINKS = [
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills',     href: '#skills'     },
  // { label: 'Writing',    href: '#writing'    },
  { label: 'Contact',    href: '#contact'    },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const isDark = theme !== 'light'

  return (
    <>
      <header
        style={{
          position: 'fixed',
          inset: '0 0 auto 0',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: scrolled ? '12px var(--gut)' : '18px var(--gut)',
          background: scrolled ? 'color-mix(in oklab, var(--bg) 72%, transparent)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px) saturate(1.2)' : 'none',
          borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
          transition: 'padding 0.4s var(--ease), background 0.4s var(--ease), border-color 0.4s var(--ease)',
        }}
        role="banner"
      >
        {/* Logo */}
        <a
          href="#"
          style={{ display: 'flex', alignItems: 'center', gap: 9, fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 19, letterSpacing: '-0.03em' }}
          aria-label="Sanket Saboo - home"
        >
          <svg width="22" height="22" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M 262,98 C 328,98 328,210 200,210 C 72,210 72,322 138,322" stroke="var(--accent)" strokeWidth="70" strokeLinecap="round"/>
          </svg>
          <span style={{ color: 'var(--text)' }}>Sanket Saboo</span>
        </a>

        {/* Desktop nav links */}
        <nav aria-label="Main navigation" className="hidden md:flex" style={{ gap: 4 }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: 'var(--font-mono-stack)',
                fontSize: 13,
                color: 'var(--text-2)',
                padding: '8px 12px',
                borderRadius: 8,
                position: 'relative',
                transition: 'color 0.25s',
              }}
              className="nav-link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {/* Theme toggle */}
          <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            style={{
              width: 38, height: 38,
              borderRadius: 10,
              border: '1px solid var(--line)',
              display: 'grid', placeItems: 'center',
              color: 'var(--text-2)',
              background: 'transparent',
              transition: 'color 0.25s, border-color 0.25s, background 0.25s',
            }}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            suppressHydrationWarning
          >
            {mounted ? (
              isDark ? <Sun size={16} /> : <Moon size={16} />
            ) : <span style={{ width: 16, height: 16 }} />}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
            style={{
              width: 38, height: 38, borderRadius: 10,
              border: '1px solid var(--line)',
              display: 'grid', placeItems: 'center',
              color: 'var(--text-2)',
            }}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <div style={{ position: 'relative', width: 16, height: 12 }}>
              {[
                { top: 0, rotate: open ? '45deg' : '0deg', width: '100%', top2: open ? '50%' : undefined },
                { top: '50%', opacity: open ? 0 : 1, width: '60%' },
                { bottom: 0, rotate: open ? '-45deg' : '0deg', width: '100%' },
              ].map((_, i) => (
                <span key={i} style={{
                  position: 'absolute', left: 0, height: '1.5px',
                  background: 'currentColor', borderRadius: 2,
                  transition: 'all 0.3s',
                  ...(i === 0 ? { top: open ? '50%' : 0, width: '100%', transform: open ? 'translateY(-50%) rotate(45deg)' : 'none' } :
                     i === 1 ? { top: '50%', transform: 'translateY(-50%)', width: '60%', opacity: open ? 0 : 1 } :
                     { bottom: open ? undefined : 0, top: open ? '50%' : undefined, width: '100%', transform: open ? 'translateY(-50%) rotate(-45deg)' : 'none' })
                }} />
              ))}
            </div>
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {open && (
        <div
          className="md:hidden"
          style={{
            position: 'fixed', inset: 0, zIndex: 90,
            background: 'color-mix(in oklab, var(--bg) 97%, transparent)',
            backdropFilter: 'blur(20px)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          }}
          role="dialog" aria-modal="true"
        >
          <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0, width: '100%', padding: '0 32px' }}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.6rem, 7vw, 2.2rem)',
                  fontWeight: 700,
                  color: 'var(--text-3)',
                  letterSpacing: '-0.03em',
                  padding: '4px 0',
                  transition: 'color 0.2s',
                  width: '100%', textAlign: 'center',
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}

    </>
  )
}
