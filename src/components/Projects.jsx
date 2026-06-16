import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const PROJECTS = [
  {
    name: 'DevFlow',
    tagline: 'Open-source CI/CD Dashboard',
    description: [
      'Unifies GitHub Actions and GitLab CI pipelines into one real-time dashboard.',
      'Visualizes pipeline runs with a DAG interface, streaming build logs, workflow management, and runner monitoring.',
      'Works out of the box with demo data and can switch to real GitHub or GitLab pipelines from Settings.',
      'Keeps tokens inside the browser with no server, accounts, or telemetry.',
      'Free forever, self-hostable, and MIT licensed.',
    ],
    tags: ['React 18', 'TypeScript', 'XState', 'React Flow', 'Zustand', 'CI/CD'],
    live: 'https://saimk09devflow.vercel.app/onboarding',
    span: true,
  },
  {
    name: 'Qkart',
    tagline: 'Full Stack E-commerce',
    description:
      'Full stack shopping app with auth, cart, checkout, address management, and debounced search. Backend uses JWT, Mongoose ODM, and a three-layer architecture (Route-Controller-Service). Tested with Jest.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'REST API', 'Jest'],
    live: 'https://ksqkartfront.netlify.app/',
  },
  {
    name: 'Qtrip',
    tagline: 'Travel Booking Site',
    description:
      'Travel website for browsing cities and booking adventures. Multi-select filters, image carousels, localStorage persistence, and a reservation form via Fetch API.',
    tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'REST API'],
    live: 'https://ksqtripdynamic.netlify.app/',
  },
  {
    name: 'XBoard',
    tagline: 'News Aggregator',
    description:
      'News feed app pulling from Flipboard RSS. Built with Bootstrap components (accordion, carousel, cards), customized to Figma design specs.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Figma', 'DOM'],
    live: 'https://xboardbyks.netlify.app/',
  },
  {
    name: 'XWeatherApp',
    tagline: 'Live Weather',
    description:
      'React weather app with real-time data from a weather API. Displays temperature, humidity, and conditions by location input.',
    tags: ['React', 'API Integration', 'Vercel'],
    live: 'https://weather-xapp.vercel.app/',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17L17 7M17 7H8M17 7V16" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.2 3.44 9.61 8.21 11.17.6.11.82-.25.82-.56v-2.2c-3.34.71-4.04-1.58-4.04-1.58-.55-1.36-1.34-1.72-1.34-1.72-1.09-.73.08-.72.08-.72 1.2.08 1.84 1.22 1.84 1.22 1.07 1.8 2.81 1.28 3.5.98.11-.76.42-1.28.76-1.58-2.67-.3-5.47-1.31-5.47-5.83 0-1.29.47-2.34 1.23-3.17-.12-.3-.53-1.51.12-3.15 0 0 1.01-.32 3.3 1.21a11.5 11.5 0 016 0c2.29-1.53 3.3-1.21 3.3-1.21.65 1.64.24 2.85.12 3.15.77.83 1.23 1.88 1.23 3.17 0 4.53-2.81 5.53-5.49 5.82.43.37.81 1.1.81 2.22v3.29c0 .31.22.68.82.56A12.01 12.01 0 0024 12.29C24 5.78 18.63.5 12 .5z" />
    </svg>
  )
}

function ProjectCard({ project }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { damping: 18, stiffness: 200 })
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { damping: 18, stiffness: 200 })

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.article
      ref={ref}
      variants={fadeUp}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d', transformPerspective: 1000 }}
      className={`glass glass-hover group relative flex flex-col rounded-2xl p-6 sm:p-7 ${
        project.span ? 'md:col-span-2' : ''
      }`}
    >
      <span className="hud-corner hud-tl" />
      <span className="hud-corner hud-br" />

      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-[var(--text-primary)] sm:text-2xl">
            {project.name}
          </h3>
          <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-[var(--cyber-blue)]">
            {project.tagline}
          </p>
        </div>
      </div>

      {Array.isArray(project.description) ? (
        <ul className="mt-4 flex-1 space-y-2 text-sm leading-relaxed text-[var(--text-muted)]">
          {project.description.map((point) => (
            <li key={point} className="flex gap-3">
              <span className="mt-2 block h-1.5 w-1.5 shrink-0 rotate-45 bg-[var(--cyber-blue)]" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
          {project.description}
        </p>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span
            key={t}
            className="rounded border border-[var(--border-glow)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--text-muted)]"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-3">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            data-cursor="hover"
            className="flex items-center gap-2 rounded-lg bg-[var(--cyber-blue)] px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--bg-dark)] transition-all hover:shadow-[0_0_22px_rgba(15,240,252,0.45)]"
          >
            Live Demo <ArrowIcon />
          </a>
        )}
        <a
          href="https://github.com/saimk09"
          target="_blank"
          rel="noreferrer"
          data-cursor="hover"
          className="flex items-center gap-2 rounded-lg border border-[var(--border-glow)] px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--cyber-blue)] transition-all hover:border-[var(--border-glow-strong)] hover:shadow-[0_0_18px_rgba(15,240,252,0.25)]"
        >
          <GitHubIcon /> GitHub
        </a>
      </div>
    </motion.article>
  )
}

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-5 py-28 sm:px-8">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="section-label mb-3"
      >
        05 // Projects
      </motion.p>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="mb-14 text-3xl font-bold sm:text-5xl"
      >
        Selected Work
      </motion.h2>

      <motion.div
        variants={grid}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid gap-6 md:grid-cols-2"
      >
        {PROJECTS.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </motion.div>
    </section>
  )
}
