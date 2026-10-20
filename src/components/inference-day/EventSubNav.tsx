// Event sub-nav for the Inference Day landing page. Sits directly below the main
// site <Nav /> and sticks under it, carrying only the on-page jump links plus a
// Register CTA. The "Inference Day" label marks which section of the site you're
// in, since the main nav shows the Modelplane logo. All links are in-page anchors,
// so they stay plain <a> (next/link is for route navigation).
export default function EventSubNav() {
  return (
    <nav className="id-subnav" aria-label="Inference Day sections">
      <div className="id-wrap id-subnav-inner">
        <a href="#top" className="id-subnav-label">Inference Day</a>
        <div className="id-subnav-links">
          <a href="#register">Register</a>
          <a href="#agenda">Agenda</a>
          <a href="#speakers">Speakers</a>
        </div>
        <a href="#register" className="btn-primary id-subnav-cta">Register →</a>
      </div>
    </nav>
  )
}
