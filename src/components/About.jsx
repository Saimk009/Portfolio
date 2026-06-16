import { motion } from 'framer-motion'

const STATS = [
  { key: 'EXPERIENCE', value: '2+ Years' },
  { key: 'STACK', value: 'React / Node / MongoDB' },
  { key: 'EDUCATION', value: 'B.E. CSE — 8.43 CGPA' },
  { key: 'STATUS', value: 'Available for opportunities' },
  { key: 'LOCATION', value: 'Bhopal, M.P., India' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 py-28 sm:px-8">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="section-label mb-3"
      >
        01 // About
      </motion.p>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="mb-14 text-3xl font-bold sm:text-5xl"
      >
        Who I Am
      </motion.h2>

      <div className="grid items-start gap-10 md:grid-cols-2 md:gap-16">
        {/* Bio */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-base leading-relaxed text-[var(--text-primary)]/90 sm:text-lg">
            I'm a Full Stack Developer with hands-on experience building real-world React
            applications. I care about clean code, smooth UX, and shipping things that actually
            work. Currently a Software Engineer at{' '}
            <span className="text-[var(--cyber-blue)]">Netlink Software Group</span>, where I wear
            both developer and designer hats.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {['Clean Code', 'Smooth UX', 'Ship Fast', 'Design + Build'].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--border-glow)] px-4 py-1.5 font-mono text-xs uppercase tracking-[0.15em] text-[var(--text-muted)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Terminal-style stats readout */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="glass glass-hover relative overflow-hidden rounded-2xl p-6 sm:p-7"
        >
          {/* Terminal header bar */}
          <div className="mb-5 flex items-center gap-2 border-b border-[var(--border-glow)] pb-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--cyber-blue)]/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--cyber-blue)]/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--cyber-blue)]/15" />
            <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--text-muted)]">
              system_readout.sh
            </span>
          </div>

          <div className="space-y-3 font-mono text-sm">
            {STATS.map((s, i) => (
              <motion.div
                key={s.key}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.1 }}
                className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-2"
              >
                <span className="text-[var(--cyber-blue)]">&gt; {s.key}:</span>
                <span className="text-[var(--text-primary)]">{s.value}</span>
              </motion.div>
            ))}
            <div className="flex items-center gap-2 pt-2 text-[var(--text-muted)]">
              <span>&gt;</span>
              <span className="inline-block h-4 w-2 animate-pulse bg-[var(--cyber-blue)]" />
            </div>
          </div>

          {/* faint scanline overlay inside the card */}
          <div
            className="pointer-events-none absolute inset-0 opacity-50"
            style={{
              background:
                'repeating-linear-gradient(to bottom, rgba(15,240,252,0.04) 0px, rgba(15,240,252,0.04) 1px, transparent 1px, transparent 5px)',
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}
