// Registration is handled by StreamYard's embedded registration. We keep the
// form card (the eyebrow + "Save your spot" heading in RegisterSection, and the
// fine print below) as the visual wrapper, and drop the custom fields in favour
// of StreamYard's own registration form rendered in the iframe. To point at a
// different broadcast, change STREAMYARD_EMBED_URL.
const STREAMYARD_EMBED_URL = 'https://streamyard.com/watch/4crxFjQ5wd2h?embed=true'

// Registration is handled by Upbound via StreamYard, so the privacy link points
// at Upbound's policy. Open item: confirm the target with Annie.
const PRIVACY_URL = 'https://www.upbound.io/privacy-policy'

export default function RegistrationForm() {
  return (
    <>
      <div className="id-embed">
        <iframe
          src={STREAMYARD_EMBED_URL}
          title="Register for Inference Day"
          allow="autoplay; fullscreen"
          loading="lazy"
        />
      </div>

      <p className="id-form-fine">
        You&rsquo;ll get the StreamYard link and a calendar invite by email. Registration is handled by
        Upbound.{' '}
        <a href={PRIVACY_URL} target="_blank" rel="noopener noreferrer">Privacy policy</a>
      </p>
    </>
  )
}
