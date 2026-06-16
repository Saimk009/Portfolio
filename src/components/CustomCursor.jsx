import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  // Soft spring so the dot trails the pointer like a HUD reticle
  const springConfig = { damping: 28, stiffness: 380, mass: 0.4 }
  const ringX = useSpring(cursorX, springConfig)
  const ringY = useSpring(cursorY, springConfig)

  const [hovering, setHovering] = useState(false)
  // Resolve pointer capability once at mount so we never setState inside the effect
  const [enabled] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches,
  )

  useEffect(() => {
    if (!enabled) return

    const move = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const checkInteractive = (e) => {
      const el = e.target
      const interactive = el.closest?.('a, button, input, textarea, [data-cursor="hover"]')
      setHovering(Boolean(interactive))
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', checkInteractive)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', checkInteractive)
    }
  }, [enabled, cursorX, cursorY])

  if (!enabled) return null

  return (
    <>
      {/* Core dot — snappy, follows pointer exactly */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          width: 8,
          height: 8,
          background: 'var(--cyber-blue)',
          boxShadow: '0 0 12px var(--cyber-blue), 0 0 24px var(--cyber-blue-dim)',
        }}
      />
      {/* Outer ring — trails with spring, grows on interactive elements */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          borderColor: 'var(--cyber-blue)',
        }}
        animate={{
          width: hovering ? 56 : 32,
          height: hovering ? 56 : 32,
          opacity: hovering ? 1 : 0.5,
        }}
        transition={{ type: 'spring', damping: 22, stiffness: 300 }}
      />
    </>
  )
}
