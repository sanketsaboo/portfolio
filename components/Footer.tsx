'use client'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ borderTop: '1px solid var(--line)', padding: '40px var(--gut)' }}>
      <div className="footer-inner" style={{
        maxWidth: 'var(--maxw)', margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <svg width="20" height="20" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M 262,98 C 328,98 328,210 200,210 C 72,210 72,322 138,322" stroke="var(--text-3)" strokeWidth="70" strokeLinecap="round"/>
          </svg>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12.5, color: 'var(--text-3)' }}>
            © {year} Sanket Saboo · sanketsaboo.com ·{' '}
            <a
              href="/llms.txt"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-3)', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-3)')}
            >
              llms.txt
            </a>
          </span>
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="to-top"
          style={{
            fontFamily: 'JetBrains Mono, monospace', fontSize: 12.5,
            color: 'var(--text-2)', display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'none', border: 'none', cursor: 'pointer',
            transition: 'color 0.25s',
          }}
          aria-label="Scroll back to top"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  )
}
