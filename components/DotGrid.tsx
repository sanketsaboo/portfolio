'use client'

import { useEffect, useRef } from 'react'

const SPACING = 44
const DOT_RADIUS = 1.2
const GLOW_RADIUS = 132   // ~3 dot spacings
const IDLE_OPACITY = 0.06
const HOVER_OPACITY = 0.5

export default function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let mx = -9999, my = -9999
    let raf: number
    let cols: number, rows: number
    let scaleX = 1, scaleY = 1, offsetLeft = 0, offsetTop = 0

    const getAccentColor = () => {
      return getComputedStyle(document.documentElement)
        .getPropertyValue('--accent').trim() || 'oklch(0.8 0.14 195)'
    }

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
      cols = Math.ceil(canvas.width  / SPACING) + 2
      rows = Math.ceil(canvas.height / SPACING) + 2

      // recalculate scale in case CSS size differs from canvas resolution
      const rect = canvas.getBoundingClientRect()
      scaleX     = canvas.width  / rect.width
      scaleY     = canvas.height / rect.height
      offsetLeft = rect.left
      offsetTop  = rect.top
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const scrollY   = window.scrollY
      const accent    = getAccentColor()
      const isDark    = document.documentElement.dataset.theme !== 'light'
      const baseColor = isDark ? '255,255,255' : '0,0,0'
      const offsetY   = scrollY % SPACING

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * SPACING
          const y = r * SPACING - offsetY

          const dx   = x - mx
          const dy   = y - my
          const dist = Math.sqrt(dx * dx + dy * dy)

          const t       = Math.max(0, 1 - dist / GLOW_RADIUS)
          const opacity = IDLE_OPACITY + (HOVER_OPACITY - IDLE_OPACITY) * t * t

          ctx.beginPath()
          ctx.arc(x, y, DOT_RADIUS + t * 0.8, 0, Math.PI * 2)
          ctx.globalAlpha = opacity
          ctx.fillStyle   = t > 0.05 ? accent : `rgb(${baseColor})`
          ctx.fill()
          ctx.globalAlpha = 1
        }
      }

      raf = requestAnimationFrame(draw)
    }

    const onMouseMove = (e: MouseEvent) => {
      mx = (e.clientX - offsetLeft) * scaleX
      my = (e.clientY - offsetTop)  * scaleY
    }

    const onMouseLeave = () => { mx = -9999; my = -9999 }

    resize()
    window.addEventListener('resize', resize, { passive: true })
    window.addEventListener('mousemove', onMouseMove, { passive: true })
    document.addEventListener('mouseleave', onMouseLeave)
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'block',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
