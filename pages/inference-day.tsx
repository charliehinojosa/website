import Seo from '@/components/Seo'
import Footer from '@/components/Footer'
import { SITE_URL } from '@/lib/site'
import EventNav from '@/components/inference-day/EventNav'
import EventHero from '@/components/inference-day/EventHero'
import RegisterSection from '@/components/inference-day/RegisterSection'
import Agenda from '@/components/inference-day/Agenda'
import Speakers from '@/components/inference-day/Speakers'
import ClosingCta from '@/components/inference-day/ClosingCta'
import EventLockup from '@/components/inference-day/EventLockup'

const TITLE = 'Inference Day · November 5, 2026 | Modelplane'
const DESCRIPTION =
  'A free, live virtual event on the future of AI infrastructure. Kelsey Hightower, Viktor Farcic and open source maintainers from NVIDIA, Red Hat, Tetrate, Ericsson, Qualcomm, Dash0 and Upbound.'

// Schema.org Event structured data. Times are expressed in PST (-08:00), matching
// the 8 a.m.–11 a.m. PST / 5 p.m.–8 p.m. CET agenda.
const eventJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'Inference Day',
  description:
    'A free, live virtual event on the future of AI infrastructure.',
  url: `${SITE_URL}/inference-day`,
  startDate: '2026-11-05T08:00:00-08:00',
  endDate: '2026-11-05T11:00:00-08:00',
  eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  isAccessibleForFree: true,
  location: {
    '@type': 'VirtualLocation',
    url: `${SITE_URL}/inference-day`,
  },
  organizer: { '@type': 'Organization', name: 'Modelplane', url: SITE_URL },
  sponsor: { '@type': 'Organization', name: 'Upbound', url: 'https://www.upbound.io' },
  performer: [
    { '@type': 'Person', name: 'Kelsey Hightower' },
    { '@type': 'Person', name: 'Viktor Farcic' },
  ],
}

export default function InferenceDay() {
  const url = `${SITE_URL}/inference-day`

  return (
    <>
      {/* TODO(og-image): render a 1200×630 card (wordmark + date + contrail) and
          pass it as `image`. Until then <Seo> falls back to the generic card. */}
      <Seo title={TITLE} description={DESCRIPTION} url={url}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
        />
      </Seo>

      <div className="id-page">
        <EventNav />
        <main>
          <EventHero />
          <RegisterSection />
          <Agenda />
          <Speakers />
          <ClosingCta />
        </main>
        <EventLockup />
        <Footer />
      </div>
    </>
  )
}
