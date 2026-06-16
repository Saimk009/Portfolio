import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL = 'ksaim09@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/saimkhan'
const GITHUB = 'https://github.com/saimk09'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}
function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9h4v12H3zM9 9h3.8v1.71h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9z" />
    </svg>
  )
}
function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.2 3.44 9.61 8.21 11.17.6.11.82-.25.82-.56v-2.2c-3.34.71-4.04-1.58-4.04-1.58-.55-1.36-1.34-1.72-1.34-1.72-1.09-.73.08-.72.08-.72 1.2.08 1.84 1.22 1.84 1.22 1.07 1.8 2.81 1.28 3.5.98.11-.76.42-1.28.76-1.58-2.67-.3-5.47-1.31-5.47-5.83 0-1.29.47-2.34 1.23-3.17-.12-.3-.53-1.51.12-3.15 0 0 1.01-.32 3.3 1.21a11.5 11.5 0 016 0c2.29-1.53 3.3-1.21 3.3-1.21.65 1.64.24 2.85.12 3.15.77.83 1.23 1.88 1.23 3.17 0 4.53-2.81 5.53-5.49 5.82.43.37.81 1.1.81 2.22v3.29c0 .31.22.68.82.56A12.01 12.01 0 0024 12.29C24 5.78 18.63.5 12 .5z" />
    </svg>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // No backend wired — open the user's mail client with a prefilled draft
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'someone'}`)
    const body = encodeURIComponent(`${form.message}\n\nReply to: ${form.email}`)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const fieldClass =
    'w-full rounded-lg border border-[var(--border-glow)] bg-[var(--bg-panel)] px-4 py-3 font-mono text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none transition-all focus:border-[var(--cyber-blue)] focus:shadow-[0_0_18px_rgba(15,240,252,0.25)]'

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-5 py-28 sm:px-8">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="section-label mb-3"
      >
        06 // Contact
      </motion.p>

      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        {/* Left */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl font-bold leading-tight sm:text-6xl">
            Let's build
            <br />
            <span className="text-[var(--cyber-blue)] text-glow">something.</span>
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-[var(--text-muted)]">
            Got a project, a role, or just want to talk shop? Drop a message — the channel is open.
          </p>

          <div className="mt-10 flex gap-4">
            {[
              { icon: <MailIcon />, href: `mailto:${EMAIL}`, label: 'Email' },
              { icon: <LinkedInIcon />, href: LINKEDIN, label: 'LinkedIn' },
              { icon: <GitHubIcon />, href: GITHUB, label: 'GitHub' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                aria-label={s.label}
                data-cursor="hover"
                className="flex h-12 w-12 items-center justify-center rounded-lg border border-[var(--border-glow)] text-[var(--text-muted)] transition-all hover:border-[var(--border-glow-strong)] hover:text-[var(--cyber-blue)] hover:shadow-[0_0_18px_rgba(15,240,252,0.25)]"
              >
                {s.icon}
              </a>
            ))}
          </div>

          <p className="mt-8 font-mono text-xs text-[var(--text-muted)]">
            <span className="text-[var(--cyber-blue)]">&gt;</span> {EMAIL}
          </p>
        </motion.div>

        {/* Right — terminal form */}
        <motion.form
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          onSubmit={handleSubmit}
          className="glass rounded-2xl p-6 sm:p-8"
        >
          <div className="mb-6 flex items-center gap-2 border-b border-[var(--border-glow)] pb-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--cyber-blue)]/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--cyber-blue)]/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--cyber-blue)]/15" />
            <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--text-muted)]">
              new_message.txt
            </span>
          </div>

          <div className="space-y-5">
            <div>
              <label className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--cyber-blue)]">
                &gt; Name
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className={fieldClass}
              />
            </div>
            <div>
              <label className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--cyber-blue)]">
                &gt; Email
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@domain.com"
                className={fieldClass}
              />
            </div>
            <div>
              <label className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--cyber-blue)]">
                &gt; Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Type your message..."
                className={`${fieldClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              data-cursor="hover"
              className="w-full rounded-lg bg-[var(--cyber-blue)] px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[var(--bg-dark)] transition-all hover:shadow-[0_0_28px_rgba(15,240,252,0.5)]"
            >
              {sent ? 'Opening mail client…' : 'Send Transmission'}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
