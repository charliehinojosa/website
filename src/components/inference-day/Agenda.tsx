import agenda from '@/data/inference-day/agenda.json'

// Agenda: a two-column grid per row (time | body). The time column stacks above
// the body on small screens. Rendered as a semantic ordered list.
export default function Agenda() {
  return (
    <section className="id-agenda" id="agenda">
      <div className="id-wrap">
        <p className="id-eyebrow">{agenda.eyebrow}</p>
        <h2 className="id-h2">{agenda.heading}</h2>

        <ol className="id-agenda-list">
          {agenda.sessions.map((s, i) => (
            <li key={i} className="id-agenda-row">
              <div className="id-agenda-time">
                <div className="pst">{s.pst}</div>
                <div className="cet">{s.cet}</div>
              </div>
              <div className="id-agenda-body">
                {s.type && <p className="id-agenda-type">{s.type}</p>}
                <h3 className="id-agenda-title">{s.title}</h3>
                {s.description && <p className="id-agenda-desc">{s.description}</p>}
                <p className="id-agenda-meta">{s.meta}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
