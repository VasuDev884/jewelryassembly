import { PageShell, SectionHeading, Reveal, CTAButton } from '../components/ui';
import { brandAssets } from '../components/data';

export default function AboutPage() {
  return (
    <PageShell>
      <section className="inner-hero">
        <div className="container">
          <span className="eyebrow">About Us</span>
          <h1>Craftsmanship, reliability, and thoughtful production support for jewelry designers.</h1>
          <p>
            JewelryAssembly.com is positioned as a production partner for designers and brands that need handcrafted assembly,
            honest communication, and consistent U.S.-based quality.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <Reveal>
            <div className="text-panel soft-card">
              <h3>Mission</h3>
              <p>
                Help jewelry designers keep their work made and assembled in the USA while protecting quality,
                deadlines, confidentiality, and brand standards.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="text-panel soft-card">
              <h3>What sets the team apart</h3>
              <p>
                Strong attention to detail, quick communication, deadline awareness, sample-driven production,
                and experience supporting brands through seasonal demand and larger runs.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section alt-bg">
        <div className="container split-section">
          <Reveal>
            <div className="image-panel real-image-panel tall-panel">
              <img src={brandAssets.stringWall} alt="Jewelry assortment wall" className="panel-image" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="founder-panel">
              <span className="eyebrow">Founder story</span>
              <h3>From jewelry design roots to a full-service assembly studio</h3>
              <p>
                The brand story reflects deep hands-on category experience, long-term work with designers, and a studio approach built around helping clients scale while keeping quality close to home.
              </p>
              <div className="founder-badge">1997 → 2007 → 2019</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container cta-banner">
          <div>
            <span className="eyebrow">Ready to collaborate?</span>
            <h2>Bring your next jewelry concept to a reliable U.S. production partner.</h2>
          </div>
          <CTAButton to="/quote">Request a Quote</CTAButton>
        </div>
      </section>
    </PageShell>
  );
}
