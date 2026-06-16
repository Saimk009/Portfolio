import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Company Work', href: '#company-projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between px-5 py-4 transition-all duration-300 sm:px-8 ${
          scrolled ? 'glass mt-3 rounded-2xl' : ''
        }`}
        style={scrolled ? { marginLeft: '1rem', marginRight: '1rem' } : {}}
      >
        <a href="#hero" className="group flex items-center gap-2">
          <span
            className="font-mono text-lg font-bold tracking-tight text-glow"
            style={{ color: 'var(--cyber-blue)' }}
          >
            SK
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">
            / dev
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] transition-colors hover:text-[var(--cyber-blue)]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-lg border border-[var(--border-glow)] px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-[var(--cyber-blue)] transition-all hover:border-[var(--border-glow-strong)] hover:shadow-[0_0_18px_rgba(15,240,252,0.25)] md:inline-block"
        >
          Hire Me
        </a>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`block h-px w-6 bg-[var(--cyber-blue)] transition-transform duration-300 ${
              open ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-px w-6 bg-[var(--cyber-blue)] transition-opacity duration-300 ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-px w-6 bg-[var(--cyber-blue)] transition-transform duration-300 ${
              open ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="glass mx-4 mt-2 overflow-hidden rounded-2xl md:hidden"
          >
            {LINKS.map((l) => (
              <li key={l.href} className="border-b border-[var(--border-glow)] last:border-0">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-4 font-mono text-sm uppercase tracking-[0.2em] text-[var(--text-muted)] transition-colors hover:text-[var(--cyber-blue)]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
