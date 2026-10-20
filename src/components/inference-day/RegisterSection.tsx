import RegistrationForm from './RegistrationForm'

// About copy (left) + the registration card (right). Stacks below ~1024px with
// the form second.
export default function RegisterSection() {
  return (
    <section className="id-register" id="register">
      <div className="id-wrap id-register-grid">
        <div className="id-about">
          <p className="id-eyebrow">About the event</p>
          <h2 className="id-about-h2">
            The future of AI infrastructure, from the people building it.
          </h2>
          <p>
            Kelsey Hightower opens with a 45-minute fireside chat on where AI infrastructure is
            headed, what platform teams should build now, and which lessons from cloud native still
            apply.
          </p>
          <p>
            From there, open source maintainers, infrastructure leaders, and practitioners working
            with AI in production come together for live conversations about what it actually takes
            to run inference at scale.
          </p>
          <p>
            Viktor Farcic closes the event with Inference 101, bringing the pieces together and
            breaking down what platform engineers need to understand about this emerging
            infrastructure layer.
          </p>
          <p className="id-about-highlight">
            Every session is live. Bring your questions. They&rsquo;ll answer them.
          </p>
        </div>

        <div className="id-form-card">
          <p className="id-eyebrow">Free · Virtual · November 5</p>
          <h3>Save your spot</h3>
          <RegistrationForm />
        </div>
      </div>
    </section>
  )
}
