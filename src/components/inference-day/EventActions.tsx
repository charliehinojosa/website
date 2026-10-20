// The Register / Add to calendar button pair, shared by the hero and the
// closing CTA. "Add to calendar" downloads the static .ics; the StreamYard link
// itself is emailed on registration, not shown on the page.
export const ICS_HREF = '/inference-day/inference-day.ics'

export default function EventActions() {
  return (
    <div className="id-hero-actions">
      <a href="#register" className="btn-primary">Register →</a>
      <a href={ICS_HREF} download className="btn-ghost">Add to calendar</a>
    </div>
  )
}
