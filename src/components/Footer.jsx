const EMAIL = 'ksaim09@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/saimkhan'
const GITHUB = 'https://github.com/saimk09'

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}
function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9h4v12H3zM9 9h3.8v1.71h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9z" />
    </svg>
  )
}
function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.2 3.44 9.61 8.21 11.17.6.11.82-.25.82-.56v-2.2c-3.34.71-4.04-1.58-4.04-1.58-.55-1.36-1.34-1.72-1.34-1.72-1.09-.73.08-.72.08-.72 1.2.08 1.84 1.22 1.84 1.22 1.07 1.8 2.81 1.28 3.5.98.11-.76.42-1.28.76-1.58-2.67-.3-5.47-1.31-5.47-5.83 0-1.29.47-2.34 1.23-3.17-.12-.3-.53-1.51.12-3.15 0 0 1.01-.32 3.3 1.21a11.5 11.5 0 016 0c2.29-1.53 3.3-1.21 3.3-1.21.65 1.64.24 2.85.12 3.15.77.83 1.23 1.88 1.23 3.17 0 4.53-2.81 5.53-5.49 5.82.43.37.81 1.1.81 2.22v3.29c0 .31.22.68.82.56A12.01 12.01 0 0024 12.29C24 5.78 18.63.5 12 .5z" />
    </svg>
  )
}

export default function Footer() {
  const socials = [
    { icon: <MailIcon />, href: `mailto:${EMAIL}`, label: 'Email' },
    { icon: <LinkedInIcon />, href: LINKEDIN, label: 'LinkedIn' },
    { icon: <GitHubIcon />, href: GITHUB, label: 'GitHub' },
  ]

  return (
    <footer className="relative border-t border-[var(--border-glow)] px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 text-center">
        <div className="flex gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              aria-label={s.label}
              data-cursor="hover"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border-glow)] text-[var(--text-muted)] transition-all hover:border-[var(--border-glow-strong)] hover:text-[var(--cyber-blue)]"
            >
              {s.icon}
            </a>
          ))}
        </div>

        <p className="font-mono text-sm tracking-[0.2em] text-[var(--text-primary)]">
          SAIM KHAN <span className="text-[var(--text-muted)]">© 2025</span>
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--text-muted)]">
          Designed &amp; Built by Saim Khan
        </p>
      </div>
    </footer>
  )
}
