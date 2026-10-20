import { useEffect, useState } from 'react'

// Event-specific top bar for /inference-day. Separate from the site Nav so the
// links are the on-page anchors rather than the marketing nav. Sticky on a
// midnight background; collapses to a toggle menu on small screens.
const DOCS_URL = 'https://docs.modelplane.ai'

const LINKS = [
  { label: 'Register', href: '#register' },
  { label: 'Agenda', href: '#agenda' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Docs', href: DOCS_URL },
]

export default function EventNav() {
  const [open, setOpen] = useState(false)

  // Close the mobile menu when the hash changes (an anchor link was followed).
  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('hashchange', close)
    return () => window.removeEventListener('hashchange', close)
  }, [])

  return (
    <nav className="id-nav" aria-label="Inference Day">
      <div className="id-wrap id-nav-inner">
        <a href="#top" className="id-nav-logo" aria-label="Modelplane">
          <img src="/logo-inverted.svg" alt="Modelplane" />
        </a>

        <ul className="id-nav-links">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#register" className="btn-primary">Register →</a>
          </li>
        </ul>

        <button
          className="id-nav-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`id-nav-mobile${open ? ' open' : ''}`}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a href="#register" className="btn-primary id-btn-block" onClick={() => setOpen(false)}>Register →</a>
      </div>
    </nav>
  )
}
