import { PageShell, SectionHeading, Reveal, CTAButton } from '../components/ui';
import { services, techPackTips } from '../components/data';

export default function ServicesPage() {
  return (
    <PageShell>
      <section className="inner-hero">
        <div className="container">
          <span className="eyebrow">Services</span>
          <h1>Flexible jewelry production services tailored to your specifications.</h1>
          <p>
            The services presentation combines premium design with practical information for designers, retailers,
            wholesalers, and growing jewelry businesses.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container card-grid two">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.08}>
              <article className="service-panel">
                <span className="card-index">0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  <li>Ideal for growing jewelry brands</li>
                  <li>Built around samples, specs, and communication</li>
                  <li>Made to support premium finished presentation</li>
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section alt-bg">
        <div className="container">
          <SectionHeading
            eyebrow="Jewelry Tech Pack"
            title="A stronger tech pack leads to faster, more accurate production"
            text="Use detailed drawings, materials, measurements, labor planning, and timeline thinking to reduce mistakes and keep larger runs consistent."
          />
          <div className="card-grid two">
            {techPackTips.map((tip, index) => (
              <Reveal key={tip} delay={index * 0.08}>
                <article className="feature-card">
                  <h3>Tip {index + 1}</h3>
                  <p>{tip}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta-banner">
          <div>
            <span className="eyebrow">Production partner</span>
            <h2>Need support with assembly, prototypes, rush orders, or repeat runs?</h2>
          </div>
          <CTAButton to="/contact">Talk to the Team</CTAButton>
        </div>
      </section>
    </PageShell>
  );
}
