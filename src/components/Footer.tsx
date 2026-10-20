import Link from 'next/link'
import SocialIcons from '@/components/SocialIcons'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-inner">
          <div className="footer-left">
            <Link href="/" className="footer-logo">
              <img src="/icon-color.svg" alt="Modelplane" height={32} />
            </Link>
            <span className="footer-tagline">Open source control plane for AI models</span>
            <p className="footer-legal">
              © 2026 The Modelplane Authors. Modelplane™ is a trademark.
            </p>
          </div>
          <div className="footer-right">
            <a href="https://docs.modelplane.ai">Docs</a>
            <Link href="/blog">Blog</Link>
            <Link href="/privacy">Privacy</Link>
            <SocialIcons />
          </div>
        </div>
      </div>
    </footer>
  )
}
