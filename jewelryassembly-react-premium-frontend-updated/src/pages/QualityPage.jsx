import { PageShell, SectionHeading, Reveal } from '../components/ui';
import { qaPoints, resourcePanels, brandAssets } from '../components/data';

export default function QualityPage() {
  return (
    <PageShell>
      <section className="inner-hero">
        <div className="container">
          <span className="eyebrow">Quality Assurance</span>
          <h1>Production control built around consistency, communication, and trust.</h1>
          <p>
            This page helps reduce buyer hesitation by showing how specs, samples, timing, and handling are managed before and during production.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split-section quality-layout">
          <Reveal>
            <div className="image-panel real-image-panel tall-panel">
              <img src={brandAssets.wireHands} alt="Fine jewelry hand work" className="panel-image" />
            </div>
          </Reveal>
          <div className="card-grid two">
            {qaPoints.map((point, index) => (
              <Reveal key={point} delay={index * 0.06}>
                <article className="feature-card qa-card">
                  <h3>{point}</h3>
                  <p>
                    A quality-first process helps protect your collection, your timeline, and your brand presentation.
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt-bg">
        <div className="container">
          <SectionHeading eyebrow="Resources" title="Key production policies" text="The pricing, lead-time, shipping, and payment information below has been added into the front-end so important details are available without hunting through source text." />
          <div className="card-grid two">
            {resourcePanels.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="soft-card">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
