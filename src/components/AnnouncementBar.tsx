import { useEffect, useState } from 'react'

// Homepage announcement bar for the Inference Day event. Links to the event
// landing page, can be dismissed (remembered per browser), and hides itself once
// the event date has passed so it never needs to be removed by hand.
const EVENT_URL = '/inference-day'
const HIDE_AFTER = new Date('2026-11-06T00:00:00Z') // day after the event
const DISMISS_KEY = 'mp-inference-day-bar'

export default function AnnouncementBar() {
  // Start hidden so server and first client render match; reveal after the
  // date/dismissal checks run in the browser.
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (Date.now() >= HIDE_AFTER.getTime()) return
    let dismissed = false
    try {
      dismissed = localStorage.getItem(DISMISS_KEY) === 'dismissed'
    } catch {
      /* private mode / blocked storage — treat as not dismissed */
    }
    if (!dismissed) setShow(true)
  }, [])

  function dismiss() {
    setShow(false)
    try {
      localStorage.setItem(DISMISS_KEY, 'dismissed')
    } catch {
      /* ignore */
    }
  }

  if (!show) return null

  return (
    <aside className="announce" aria-label="Inference Day announcement">
      <a className="announce-link" href={EVENT_URL}>
        <span className="announce-wordmark">Inference Day</span>
        <span className="announce-sep" aria-hidden="true" />
        <span className="announce-tag">Nov 5 · Virtual · Free</span>
        <span className="announce-copy">
          Hear where AI infrastructure is going from the engineers building it.
        </span>
        <span className="announce-cta">Register →</span>
      </a>
      <button className="announce-close" onClick={dismiss} aria-label="Dismiss announcement">
        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
          <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>
    </aside>
  )
}
