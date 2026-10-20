import EventActions from './EventActions'

// Closing CTA: the wordmark again, a one-line reminder, the date, and the same
// two buttons as the hero, over the contrail art anchored to the bottom.
export default function ClosingCta() {
  return (
    <section className="id-cta">
      <img src="/inference-day/contrail.png" alt="" aria-hidden="true" className="id-cta-art" />

      <div className="id-wrap id-cta-inner">
        <h2 className="id-wordmark">Inference Day</h2>
        <p className="id-cta-line">Every session is live. Bring your questions.</p>
        <p className="id-date">
          <time dateTime="2026-11-05T16:00:00Z">
            November 5, 2026 · 8 a.m. PST / 5 p.m. CET · Virtual
          </time>
        </p>
        <div className="id-cta-actions">
          <EventActions />
        </div>
      </div>
    </section>
  )
}
