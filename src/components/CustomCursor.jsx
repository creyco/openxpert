import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const trailRef = useRef(null)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    if ('ontouchstart' in window) {
      setIsTouch(true)
      return
    }

    let mouseX = 0, mouseY = 0
    let cursorX = 0, cursorY = 0

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const onHover = (e) => {
      if (cursorRef.current) cursorRef.current.classList.add('scale-150', 'bg-cyan-500/30')
    }

    const offHover = (e) => {
      if (cursorRef.current) cursorRef.current.classList.remove('scale-150', 'bg-cyan-500/30')
    }

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button, input, textarea, [role="button"], .card-hover').forEach(el => {
      el.addEventListener('mouseenter', onHover)
      el.addEventListener('mouseleave', offHover)
    })

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.15
      cursorY += (mouseY - cursorY) * 0.15
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursorX - 12}px, ${cursorY - 12}px)`
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${mouseX - 2}px, ${mouseY - 2}px)`
      }
      requestAnimationFrame(animate)
    }
    animate()

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.querySelectorAll('a, button, input, textarea, [role="button"], .card-hover').forEach(el => {
        el.removeEventListener('mouseenter', onHover)
        el.removeEventListener('mouseleave', offHover)
      })
    }
  }, [])

  if (isTouch) return null

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-6 h-6 rounded-full border-2 border-cyan-500/60 pointer-events-none z-[9999] transition-all duration-200 ease-out"
        style={{ transform: 'translate(0, 0)' }}
      />
      <div
        ref={trailRef}
        className="fixed top-0 left-0 w-1 h-1 rounded-full bg-cyan-500 pointer-events-none z-[9999]"
        style={{ transform: 'translate(0, 0)' }}
      />
    </>
  )
}
