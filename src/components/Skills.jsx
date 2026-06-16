import { motion } from 'framer-motion'

const CATEGORIES = [
  {
    name: 'Frontend',
    items: ['React JS', 'HTML5', 'CSS3', 'Bootstrap', 'Material UI', 'Tailwind', 'jQuery'],
  },
  { name: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs'] },
  { name: 'Database', items: ['MongoDB', 'MySQL'] },
  {
    name: 'Tools',
    items: ['Git', 'Figma', 'Postman', 'VS Code', 'Chrome DevTools', 'Netlify', 'Heroku'],
  },
  {
    name: 'Concepts',
    items: [
      'Debouncing',
      'JWT',
      'Role-Based Access',
      'CRUD',
      'Three-Layer Architecture',
      'Unit Testing (Jest)',
      'TDD',
    ],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const pillContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
}

const pill = {
  hidden: { opacity: 0, scale: 0.85, y: 10 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', damping: 16, stiffness: 220 } },
}

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-5 py-28 sm:px-8">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="section-label mb-3"
      >
        04 // Skills
      </motion.p>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="mb-14 text-3xl font-bold sm:text-5xl"
      >
        Tech Arsenal
      </motion.h2>

      <div className="space-y-10">
        {CATEGORIES.map((cat) => (
          <motion.div
            key={cat.name}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid gap-4 md:grid-cols-[160px_1fr] md:items-start"
          >
            <h3 className="font-mono text-sm uppercase tracking-[0.25em] text-[var(--cyber-blue)]">
              {cat.name}
            </h3>
            <motion.div
              variants={pillContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              {cat.items.map((item) => (
                <motion.span
                  key={item}
                  variants={pill}
                  data-cursor="hover"
                  className="group cursor-none rounded-lg border border-[var(--border-glow)] bg-[var(--glass)] px-4 py-2 font-mono text-xs uppercase tracking-[0.1em] text-[var(--text-primary)]/85 backdrop-blur-sm transition-all hover:border-[var(--border-glow-strong)] hover:text-[var(--cyber-blue)] hover:shadow-[0_0_18px_rgba(15,240,252,0.25)]"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
