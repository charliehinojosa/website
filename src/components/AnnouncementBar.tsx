import { useState } from 'react'
import Link from 'next/link'

// Homepage announcement bar for the Inference Day event. Links to the event
// landing page, can be dismissed (remembered per browser), and hides itself once
// the event date has passed so it never needs to be removed by hand.
//
// Rendered client-only (next/dynamic ssr:false in the homepage), so the initial
// visibility is read straight from localStorage/the clock in the useState
// initializer — no effect, and no server/client markup to mismatch.
const EVENT_URL = '/inference-day'
const HIDE_AFTER = new Date('2026-11-06T00:00:00Z') // day after the event
const DISMISS_KEY = 'mp-inference-day-bar'

function shouldShow(): boolean {
  if (Date.now() >= HIDE_AFTER.getTime()) return false
  try {
    return localStorage.getItem(DISMISS_KEY) !== 'dismissed'
  } catch {
    // private mode / blocked storage — treat as not dismissed
    return true
  }
}

export default function AnnouncementBar() {
  const [show, setShow] = useState(shouldShow)

  function dismiss() {
    setShow(false)
    try {
      localStorage.setItem(DISMISS_KEY, 'dismissed')
    } catch {
      // storage unavailable — nothing to persist
    }
  }

  if (!show) return null

  return (
    <aside className="announce" aria-label="Inference Day announcement">
      <Link href={EVENT_URL} className="announce-link">
        <span className="announce-wordmark">Inference Day</span>
        <span className="announce-sep" aria-hidden="true" />
        <span className="announce-tag">Nov 5 · Virtual · Free</span>
        <span className="announce-copy">
          Hear where AI infrastructure is going from the engineers building it.
        </span>
        <span className="announce-cta">Register →</span>
      </Link>
      <button className="announce-close" onClick={dismiss} aria-label="Dismiss announcement">
        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
          <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>
    </aside>
  )
}
