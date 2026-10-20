import EventActions from './EventActions'

// Hero: full-bleed contrail art behind left-aligned content. The wordmark is the
// page's single <h1> and stays real (gradient-clipped) text for accessibility.
export default function EventHero() {
  return (
    <section className="id-hero" id="top">
      <img src="/inference-day/contrail.png" alt="" aria-hidden="true" className="id-hero-art" />

      <div className="id-wrap">
        <div className="id-hero-inner">
          <h1 className="id-wordmark">Inference Day</h1>

          <p className="id-hero-intro">
            <span>Hear where AI infrastructure is going from the engineers building it.</span>
            <span>Inference Day is a free, live virtual event on the future of AI infrastructure.</span>
          </p>

          <p className="id-date">
            <time dateTime="2026-11-05T16:00:00Z">
              November 5, 2026 · 8 a.m. PST / 5 p.m. CET · Virtual
            </time>
          </p>

          <EventActions />
        </div>
      </div>

      <img
        src="/inference-day/lockup.png"
        alt="Hosted by Modelplane · Sponsored by Upbound"
        className="id-hero-lockup"
      />
    </section>
  )
}
