import { motion } from 'framer-motion'

const EXPERIENCE = [
  {
    role: 'Software Engineer',
    company: 'Netlink Software Group',
    period: 'Aug 2025 – Present',
    location: 'Bhopal',
    points: [
      'Working as a Software Engineer across multiple web application projects',
      'Built a new application from scratch; contributed to live ongoing projects',
      'Handling UI/UX design in Figma alongside development responsibilities',
      'Collaborating across teams bridging design and engineering',
    ],
  },
  {
    role: 'Frontend React Intern',
    company: 'Netlink Software Group',
    period: 'Feb 2025 – Jul 2025',
    location: 'Bhopal',
    points: [
      'Contributed to BFile, an internal finance web application',
      'Implemented custom AG Grid tables with advanced filters and funnels',
      'Built multi-step forms and a role-based access control system',
      'Delivered UI/UX enhancements and resolved production bugs',
    ],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-5 py-28 sm:px-8">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="section-label mb-3"
      >
        02 // Experience
      </motion.p>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="mb-16 text-3xl font-bold sm:text-5xl"
      >
        Career Log
      </motion.h2>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute bottom-0 left-[7px] top-2 w-px bg-gradient-to-b from-[var(--cyber-blue)] via-[var(--border-glow)] to-transparent sm:left-[9px]" />

        <div className="space-y-12">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="relative pl-10 sm:pl-14"
            >
              {/* Glowing pulsing dot */}
              <span className="dot-pulse absolute left-0 top-2 h-3.5 w-3.5 rounded-full bg-[var(--cyber-blue)] sm:h-5 sm:w-5" />

              <div className="glass glass-hover rounded-2xl p-6 sm:p-7">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                    {exp.role}{' '}
                    <span className="text-[var(--cyber-blue)]">@ {exp.company}</span>
                  </h3>
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--text-muted)]">
                    {exp.period} | {exp.location}
                  </span>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {exp.points.map((p, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-sm leading-relaxed text-[var(--text-muted)]"
                    >
                      <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rotate-45 bg-[var(--cyber-blue)]" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
