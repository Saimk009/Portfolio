import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const ROLES = ['Full Stack Developer', 'React Engineer', 'UI/UX Enthusiast', 'Problem Solver']
const NAME = 'SAIM KHAN'

function Typewriter() {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = ROLES[index]
    let timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), 1600)
    } else if (deleting && text === '') {
      timeout = setTimeout(() => {
        setDeleting(false)
        setIndex((i) => (i + 1) % ROLES.length)
      }, 400)
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1),
          )
        },
        deleting ? 45 : 85,
      )
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, index])

  return (
    <span className="font-mono text-[var(--cyber-blue)] text-glow">
      {text}
      <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-[var(--cyber-blue)] align-middle" style={{ height: '1em' }} />
    </span>
  )
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.2 },
  },
}

const letter = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', damping: 14, stiffness: 180 },
  },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pt-24 sm:px-8"
    >
      {/* HUD corner brackets framing the viewport */}
      <span className="hud-corner hud-tl" style={{ top: '6rem', left: '1.5rem' }} />
      <span className="hud-corner hud-tr" style={{ top: '6rem', right: '1.5rem' }} />
      <span className="hud-corner hud-bl" style={{ bottom: '2rem', left: '1.5rem' }} />
      <span className="hud-corner hud-br" style={{ bottom: '2rem', right: '1.5rem' }} />

      {/* Floating HUD readout — top left */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute left-8 top-32 hidden font-mono text-[10px] uppercase leading-relaxed tracking-[0.2em] text-[var(--text-muted)] lg:block"
      >
        <div>SYS // ONLINE</div>
        <div>LOC // 23.25°N 77.41°E</div>
        <div className="text-[var(--cyber-blue)]">STATUS // READY</div>
      </motion.div>

      {/* Floating HUD readout — bottom right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-12 right-8 hidden text-right font-mono text-[10px] uppercase leading-relaxed tracking-[0.2em] text-[var(--text-muted)] lg:block"
      >
        <div>BUILD // v2025</div>
        <div>STACK // MERN</div>
        <div className="text-[var(--cyber-blue)]">SCROLL ↓</div>
      </motion.div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-label mb-6"
        >
          // Full Stack Developer
        </motion.p>

        {/* Staggered letter reveal of name */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-wrap justify-center text-5xl font-bold leading-none sm:text-7xl md:text-8xl"
          aria-label={NAME}
        >
          {NAME.split('').map((char, i) => (
            <motion.span
              key={i}
              variants={letter}
              className={char === ' ' ? 'w-4 sm:w-8' : 'text-glow'}
              style={char !== ' ' ? { color: 'var(--text-primary)' } : {}}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Typewriter subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-6 h-8 text-lg sm:text-2xl"
        >
          <Typewriter />
        </motion.div>

        {/* Bio line */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="mt-6 max-w-xl text-sm leading-relaxed text-[var(--text-muted)] sm:text-base"
        >
          Building digital experiences from Bhopal, India — one component at a time.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="group relative overflow-hidden rounded-lg bg-[var(--cyber-blue)] px-7 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[var(--bg-dark)] transition-all hover:shadow-[0_0_28px_rgba(15,240,252,0.5)]"
          >
            View Work
          </a>
          <a
            href="/resume.pdf"
            download
            className="rounded-lg border border-[var(--border-glow)] px-7 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[var(--cyber-blue)] transition-all hover:border-[var(--border-glow-strong)] hover:shadow-[0_0_22px_rgba(15,240,252,0.3)]"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-[var(--border-glow)] px-7 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] transition-all hover:border-[var(--border-glow-strong)] hover:text-[var(--cyber-blue)]"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  )
}
