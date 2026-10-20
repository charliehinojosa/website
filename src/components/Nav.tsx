import { useState, useEffect } from 'react'
import Link from 'next/link'
import GithubIcon from '@/components/GithubIcon'

const GITHUB_URL = 'https://github.com/modelplaneai/modelplane'
const SLACK_URL = 'https://slack.modelplane.ai'

interface NavProps {
  // Set on pages that render the hero (the homepage).
  hero?: boolean
}

export default function Nav({ hero = false }: NavProps) {
  const [open, setOpen] = useState(false)
  // On the homepage the hero shows its own large wordmark, so we hide the nav
  // logo while the hero is in view (avoids two logos). Once the hero scrolls
  // away, the nav slides in with the logo and stays sticky. Pages without a
  // hero just show the logo normally.
  const [heroInView, setHeroInView] = useState(true)
  const past = !hero || !heroInView

  // Close menu on route/hash change
  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('hashchange', close)
    return () => window.removeEventListener('hashchange', close)
  }, [])

  useEffect(() => {
    if (!hero) return
    const heroEl = document.querySelector('.herox')
    if (!heroEl) return
    const obs = new IntersectionObserver(
      ([entry]) => setHeroInView(entry.isIntersecting),
      { rootMargin: '-64px 0px 0px 0px', threshold: 0 }
    )
    obs.observe(heroEl)
    return () => obs.disconnect()
  }, [hero])

  const navClass = [
    !past ? 'nav--top' : '',
    past && hero ? 'nav--reveal' : '',
  ].filter(Boolean).join(' ')

  return (
    <nav className={navClass}>
      <div className="wrap">
        <Link href="/" className="nav-logo">
          <img src="/icon-color.svg" alt="Modelplane" height={32} />
        </Link>

        <ul className="nav-links">
          <li><a href="https://docs.modelplane.ai">Docs</a></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/manifesto">Manifesto</Link></li>
          <li><a href={SLACK_URL} target="_blank" rel="noopener noreferrer">Slack</a></li>
          <li><Link href="/inference-day" className="nav-event">Inference Day</Link></li>
          <li><a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon /></a></li>
          <li><a href={GITHUB_URL} className="nav-cta-ghost" target="_blank" rel="noopener noreferrer">★ Star the Project</a></li>
          <li><a href="https://docs.modelplane.ai/getting-started/" className="nav-cta">Get started →</a></li>
        </ul>

        <button
          className={`nav-hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <div className="nav-dropdown">
          <a href="https://docs.modelplane.ai" onClick={() => setOpen(false)}>Docs</a>
          <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
          <Link href="/manifesto" onClick={() => setOpen(false)}>Manifesto</Link>
          <a href={SLACK_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Slack</a>
          <Link href="/inference-day" className="nav-event" onClick={() => setOpen(false)}>Inference Day</Link>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub" onClick={() => setOpen(false)}><GithubIcon /></a>
          <a href={GITHUB_URL} className="nav-cta-mobile" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>★ Star the Project</a>
          <a href="https://docs.modelplane.ai/getting-started/" className="nav-cta-mobile" onClick={() => setOpen(false)}>Get started →</a>
        </div>
      )}
    </nav>
  )
}
