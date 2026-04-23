import { PageShell, SectionHeading, Reveal } from '../components/ui';
import { privacyPolicy, ndaHighlights } from '../components/data';
import privacyShot from '../assets/gallery/privacy-shot.png';

export default function PrivacyPage() {
  return (
    <PageShell>
      <section className="inner-hero">
        <div className="container">
          <span className="eyebrow">Privacy Policy</span>
          <h1>Confidentiality is treated as a core part of the production relationship.</h1>
          <p>
            The privacy and nondisclosure content you shared is now built into the front-end as a dedicated page.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <Reveal>
            <div className="soft-card privacy-card">
              <SectionHeading title="Privacy Policy" text={privacyPolicy} />
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="image-panel real-image-panel tall-panel">
              <img src={privacyShot} alt="Privacy policy screenshot" className="panel-image contain-image" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section alt-bg">
        <div className="container">
          <SectionHeading eyebrow="Nondisclosure" title="Confidentiality agreement highlights" text="This simplified section turns the NDA language into an easier-to-scan front-end presentation." />
          <div className="card-grid two">
            {ndaHighlights.map((point, index) => (
              <Reveal key={point} delay={index * 0.08}>
                <article className="soft-card">
                  <h3>Point {index + 1}</h3>
                  <p>{point}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
