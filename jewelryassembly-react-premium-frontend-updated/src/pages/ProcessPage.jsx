import { PageShell, SectionHeading, Reveal } from '../components/ui';
import { processSteps, brandAssets } from '../components/data';

export default function ProcessPage() {
  return (
    <PageShell>
      <section className="inner-hero">
        <div className="container">
          <span className="eyebrow">Process</span>
          <h1>A production workflow built around clarity, samples, and dependable delivery.</h1>
          <p>
            The process follows the actual company model: submit your references and materials, confirm the sample,
            align timing, then move into production with quality checks and careful shipment.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div className="timeline-grid single-column">
            {processSteps.map((step, index) => (
              <Reveal key={step} delay={index * 0.07}>
                <div className="timeline-item large">
                  <div className="timeline-number">{index + 1}</div>
                  <h3>Step {index + 1}</h3>
                  <p>{step}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <div className="image-panel real-image-panel tall-panel">
              <img src={brandAssets.metalWork} alt="Metal jewelry assembly work" className="panel-image" />
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
