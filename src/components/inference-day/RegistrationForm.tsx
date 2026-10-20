import { useState, type FormEvent } from 'react'

// TODO(upbound-form): the registration backend is not final. As of Oct 19, Upbound
// plans to use StreamYard's embedded registration (an iframe). If that is the final
// route, replace the fields below with the embed inside this same card (eyebrow +
// heading above it, fine print below). If Upbound uses its own marketing form
// (HubSpot/Marketo) instead, point REGISTRATION_ENDPOINT at it or mount the embed.
// The endpoint is isolated here so only this constant changes.
const REGISTRATION_ENDPOINT = process.env.NEXT_PUBLIC_REGISTRATION_ENDPOINT || ''

// Registration is handled by Upbound, so the privacy link points at Upbound's
// policy. Open item: confirm the target with Annie (Upbound vs the site /privacy).
const PRIVACY_URL = 'https://www.upbound.io/privacy-policy'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const FIELDS = [
  { name: 'firstName', label: 'First name', placeholder: 'Ada', type: 'text', autoComplete: 'given-name', full: false },
  { name: 'lastName', label: 'Last name', placeholder: 'Lovelace', type: 'text', autoComplete: 'family-name', full: false },
  { name: 'email', label: 'Work email', placeholder: 'you@company.com', type: 'email', autoComplete: 'email', full: true },
  { name: 'company', label: 'Company', placeholder: 'Company', type: 'text', autoComplete: 'organization', full: true },
  { name: 'jobTitle', label: 'Job title', placeholder: 'Platform engineer', type: 'text', autoComplete: 'organization-title', full: true },
] as const

export default function RegistrationForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')

    // Until the backend is wired up, accept the submission optimistically so the
    // success state is reachable. Once REGISTRATION_ENDPOINT is set, POST to it.
    if (!REGISTRATION_ENDPOINT) {
      setStatus('success')
      return
    }

    try {
      const form = e.currentTarget
      const payload = Object.fromEntries(new FormData(form).entries())
      const res = await fetch(REGISTRATION_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="id-form-success" aria-live="polite">
        <h3>You&rsquo;re registered.</h3>
        <p>Check your inbox for the StreamYard link and a calendar invite.</p>
      </div>
    )
  }

  return (
    <form className="id-form" onSubmit={handleSubmit} noValidate={false}>
      <div className="id-form-grid">
        {FIELDS.map((f) => (
          <div key={f.name} className={`id-field${f.full ? ' id-field--full' : ''}`}>
            <label htmlFor={`id-${f.name}`}>{f.label}</label>
            <input
              id={`id-${f.name}`}
              name={f.name}
              type={f.type}
              placeholder={f.placeholder}
              autoComplete={f.autoComplete}
              required
            />
          </div>
        ))}
      </div>

      <button type="submit" className="btn-primary id-btn-block id-form-submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Registering…' : 'Register →'}
      </button>

      {status === 'error' && (
        <p className="id-form-status id-form-status--error" aria-live="polite" role="alert">
          Something went wrong. Please try again, or email info@modelplane.ai.
        </p>
      )}

      <p className="id-form-fine">
        You&rsquo;ll get the StreamYard link and a calendar invite by email. Registration is handled by
        Upbound.{' '}
        <a href={PRIVACY_URL} target="_blank" rel="noopener noreferrer">Privacy policy</a>
      </p>
    </form>
  )
}
