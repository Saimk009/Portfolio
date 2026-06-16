# SAIM KHAN — Portfolio

A futuristic / cyberpunk personal portfolio for Saim Khan, Full Stack Developer. Cyber-blue on deep black, glassmorphism cards, animated grid background, custom glowing cursor, and scroll-based reveals.

## Tech Stack

- **React + Vite**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **Framer Motion** for animations
- Custom components only — no UI component libraries
- Fonts: `Space Grotesk` + `Share Tech Mono` (Google Fonts)

## Getting Started

```bash
npm install
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build to /dist
npm run preview  # preview the production build
npm run lint     # run eslint
```

## Structure

```
src/
  components/
    Navbar.jsx        Fixed glass nav + mobile menu
    Hero.jsx          Staggered name reveal, typewriter, CTAs, HUD corners
    About.jsx         Bio + terminal-style system readout stats
    Experience.jsx    Animated vertical timeline with pulsing dots
    Skills.jsx        Categorized glowing tag pills (stagger in)
    Projects.jsx      Bento grid with hover tilt + glow
    Contact.jsx       Terminal-styled form + social links
    Footer.jsx        Minimal credit + social icons
    CustomCursor.jsx  Glowing blue dot following the mouse
  App.jsx
  index.css           Global styles, CSS variables, animated background
  main.jsx
```

## Customization

All colors live as CSS variables in [`src/index.css`](src/index.css): `--cyber-blue`, `--bg-dark`, `--glass`, `--border-glow`, etc.

### Things to fill in

- **Resume**: the Hero "Download Resume" button links to `/resume.pdf`. Drop your PDF into the `public/` folder as `resume.pdf`.
- **Social links**: update `LINKEDIN` and `GITHUB` constants in `Contact.jsx` and `Footer.jsx`, and the GitHub URL in `Projects.jsx`, with your real profile URLs. Email is set to `ksaim09@gmail.com`.
- **Contact form**: currently opens the visitor's mail client via `mailto:`. Wire it to a backend or a service like Formspree/EmailJS if you want server-side delivery.
