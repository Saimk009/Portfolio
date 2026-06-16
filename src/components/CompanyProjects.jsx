import { motion } from 'framer-motion'

const COMPANY_PROJECTS = [
  {
    name: 'BFile',
    type: 'Financial Web App',
    summary:
      'A legacy React financial management platform for customer and financial data workflows.',
    points: [
      'Developed and maintained a legacy React (Class Components) financial management platform handling customer and financial data.',
      'Built interactive dashboards and charts for financial reporting and business insights.',
      'Implemented role-based access control (RBAC) for secure user authorization.',
      'Developed advanced data grids using AG Grid with custom filters, sorting, and data management features.',
      'Utilized Ant Design (AntD) components to create responsive and reusable UI components.',
      'Optimized the application for desktop, tablet, and mobile devices, ensuring a seamless user experience across screen sizes.',
      'Contributed to feature enhancements, bug fixes, and modernization of the existing codebase.',
    ],
  },
  {
    name: 'Box Tracking',
    type: 'Inventory & Storage System',
    summary:
      'A React (Vite)-based system for managing physical storage locations across compounds and sections.',
    points: [
      'Built a React (Vite)-based Box Tracking System for managing physical storage locations across compounds and sections.',
      'Created the complete Figma designs for the Box Tracking application, covering responsive screens and core user flows.',
      'Developed drag-and-drop and box-swapping functionality for visual inventory management.',
      'Implemented batch creation and QR code generation workflows to ensure unique box identification and prevent duplicate records.',
      'Designed location mapping logic (Compound -> Section -> Slot) for efficient box tracking and retrieval.',
      'Added functionality to utilize remaining batch capacity and improve operational efficiency.',
      'Implemented role-based access control (RBAC) and responsive UI for multiple user types.',
    ],
  },
  {
    name: 'KoScan',
    type: 'Document Capture & Processing',
    summary:
      'A Ko-Fax-like enterprise document capture and processing platform with scanner, validation, and export workflows.',
    points: [
      'Developed KoScan, a document capture and processing platform supporting scanning, recognition, verification, validation, PDF generation, and export workflows.',
      'Created the Figma designs for KoScan, defining layouts and interaction flows for complex document-processing screens.',
      'Built project and batch-class management modules with configurable document-processing pipelines.',
      'Integrated physical scanner and web-upload functionality for TIFF-based document ingestion.',
      'Developed document grouping, indexing, and verification features with dynamic, configurable metadata fields.',
      'Implemented queue-based processing, RBAC permissions, and Redis-powered batch locking/status tracking to prevent concurrent processing conflicts.',
      'Built backend-integrated validation and release script configurations to support automated document processing workflows.',
      'Collaborated with cross-functional teams to deliver scalable enterprise document management solutions.',
    ],
  },
  {
    name: 'Acecam',
    type: 'Mobile-Focused Figma Design',
    summary:
      'A mobile-focused design project where the user experience and screen layouts were refined for smaller devices.',
    points: [
      'Created Figma designs for Acecam with a strong focus on mobile usability and responsive screen behavior.',
      'Designed clean mobile layouts, interaction flows, and reusable interface patterns for a smoother user experience.',
      'Collaborated with stakeholders to translate product requirements into practical, developer-ready design screens.',
    ],
  },
  {
    name: 'DMS',
    type: 'Web Figma Design',
    summary:
      'A web-based document management design project focused on structured screens and enterprise workflows.',
    points: [
      'Created Figma designs for the DMS web application, covering core screens and document-management workflows.',
      'Designed structured web layouts for data-heavy interfaces while keeping usability and clarity in focus.',
      'Prepared reusable design patterns to support consistent implementation across the application.',
    ],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

export default function CompanyProjects() {
  return (
    <section id="company-projects" className="relative mx-auto max-w-6xl px-5 py-28 sm:px-8">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="section-label mb-3"
      >
        03 // Company Projects
      </motion.p>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="mb-14 grid gap-6 md:grid-cols-[1fr_320px] md:items-end"
      >
        <div>
          <h2 className="text-3xl font-bold sm:text-5xl">Work At Netlink</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
            Company-wise project experience across finance, inventory tracking, and enterprise
            document processing platforms.
          </p>
        </div>

        <div className="glass relative overflow-hidden rounded-2xl p-5 font-mono">
          <span className="hud-corner hud-tl" />
          <span className="hud-corner hud-br" />
          <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--text-muted)]">
            Netlink Software Group
          </p>
          <p className="mt-2 text-4xl font-bold text-[var(--cyber-blue)] text-glow">
            {COMPANY_PROJECTS.length}
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--text-primary)]">
            Projects Worked On
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={list}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid gap-6"
      >
        {COMPANY_PROJECTS.map((project, index) => (
          <motion.article
            key={project.name}
            variants={fadeUp}
            className="glass glass-hover relative overflow-hidden rounded-2xl p-6 sm:p-7"
          >
            <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--cyber-blue)]">
                  Project 0{index + 1}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[var(--text-primary)]">
                  {project.name}
                </h3>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
                  {project.type}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-[var(--text-muted)]">
                  {project.summary}
                </p>
              </div>

              <ul className="space-y-2.5">
                {project.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-[var(--text-muted)]"
                  >
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rotate-45 bg-[var(--cyber-blue)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
