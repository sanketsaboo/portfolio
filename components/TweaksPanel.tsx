'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

type Accent     = 'cyan' | 'lime' | 'violet' | 'orange' | 'coral'
type HeadingFont = 'modern' | 'editorial' | 'mono'

const ACCENTS: { id: Accent; css: string }[] = [
  { id: 'cyan',   css: 'oklch(0.80 0.14 195)' },
  { id: 'lime',   css: 'oklch(0.84 0.16 128)' },
  { id: 'violet', css: 'oklch(0.74 0.15 292)' },
  { id: 'orange', css: 'oklch(0.77 0.15 58)'  },
  { id: 'coral',  css: 'oklch(0.72 0.16 24)'  },
]

const FONTS: { id: HeadingFont; label: string }[] = [
  { id: 'modern',    label: 'modern'    },
  { id: 'editorial', label: 'editorial' },
  { id: 'mono',      label: 'mono'      },
]

const S = {
  panel: {
    position: 'fixed' as const, bottom: 80, right: 24, zIndex: 200,
    background: 'var(--surface)', border: '1px solid var(--line-2)',
    borderRadius: 14, width: 240,
    boxShadow: '0 24px 48px -12px oklch(0 0 0 / 0.5)',
    overflow: 'hidden',
  },
  header: {
    padding: '10px 16px', borderBottom: '1px solid var(--line)',
    fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.2em',
    textTransform: 'uppercase' as const, color: 'var(--text-3)',
  },
  body: { padding: 16, display: 'flex', flexDirection: 'column' as const, gap: 18 },
  label: {
    fontFamily: 'JetBrains Mono, monospace', fontSize: 9, letterSpacing: '0.18em',
    textTransform: 'uppercase' as const, color: 'var(--text-3)', marginBottom: 8,
  },
  toggle: {
    position: 'fixed' as const, bottom: 24, right: 24, zIndex: 200,
    width: 40, height: 40, borderRadius: '50%',
    background: 'var(--surface)', border: '1px solid var(--line-2)',
    display: 'grid', placeItems: 'center',
    color: 'var(--text-2)', cursor: 'pointer',
    boxShadow: '0 4px 16px oklch(0 0 0 / 0.3)',
    fontSize: 16,
  },
}

export default function TweaksPanel() {
  const [open, setOpen]       = useState(false)
  const [accent, setAccentS]  = useState<Accent>('cyan')
  const [font, setFontS]      = useState<HeadingFont>('modern')
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme }   = useTheme()

  useEffect(() => {
    setMounted(true)
    const a = (localStorage.getItem('accent')      as Accent)      || 'cyan'
    const f = (localStorage.getItem('headingFont') as HeadingFont) || 'modern'
    setAccentS(a); setFontS(f)
  }, [])

  const applyAccent = (id: Accent) => {
    setAccentS(id)
    document.documentElement.dataset.accent = id
    localStorage.setItem('accent', id)
  }
  const applyFont = (id: HeadingFont) => {
    setFontS(id)
    document.documentElement.dataset.font = id
    localStorage.setItem('headingFont', id)
  }

  if (!mounted) return null

  const isDark = theme !== 'light'

  return (
    <>
      <button onClick={() => setOpen((v) => !v)} style={S.toggle} aria-label="Toggle tweaks">
        {open ? '✕' : '⊞'}
      </button>

      {open && (
        <div style={S.panel}>
          <div style={S.header}>Design tweaks</div>
          <div style={S.body}>

            <div>
              <div style={S.label}>Accent color</div>
              <div style={{ display: 'flex', gap: 8 }}>
                {ACCENTS.map((a) => (
                  <button
                    key={a.id}
                    onClick={() => applyAccent(a.id)}
                    title={a.id}
                    style={{
                      width: 28, height: 28, borderRadius: 8,
                      background: a.css, cursor: 'pointer',
                      border: accent === a.id ? '2px solid var(--text)' : '2px solid transparent',
                      transition: 'transform 0.15s, border-color 0.15s',
                      transform: accent === a.id ? 'scale(1.15)' : 'scale(0.88)',
                    }}
                  />
                ))}
              </div>
            </div>

            <div>
              <div style={S.label}>Heading font</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {FONTS.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => applyFont(f.id)}
                    style={{
                      textAlign: 'left', fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
                      padding: '7px 10px', borderRadius: 8,
                      border: '1px solid transparent',
                      color: font === f.id ? 'var(--accent)' : 'var(--text-2)',
                      background: font === f.id ? 'var(--accent-soft)' : 'transparent',
                      borderColor: font === f.id ? 'var(--accent-border)' : 'transparent',
                      transition: 'all 0.15s', cursor: 'pointer',
                    }}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div style={S.label}>Theme</div>
              <button
                onClick={() => setTheme(isDark ? 'light' : 'dark')}
                style={{
                  fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
                  color: 'var(--text-2)', padding: '7px 10px', borderRadius: 8,
                  border: '1px solid var(--line)', background: 'transparent',
                  cursor: 'pointer', transition: 'all 0.2s',
                }}
              >
                {isDark ? '☀ Light mode' : '☾ Dark mode'}
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  )
}
