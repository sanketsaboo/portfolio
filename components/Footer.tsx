'use client'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ borderTop: '1px solid var(--line)', padding: '40px var(--gut)' }}>
      <div style={{
        maxWidth: 'var(--maxw)', margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, flexWrap: 'wrap',
      }}>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12.5, color: 'var(--text-3)' }}>
          © {year} Sanket Saboo · sanketsaboo.com
        </span>
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
