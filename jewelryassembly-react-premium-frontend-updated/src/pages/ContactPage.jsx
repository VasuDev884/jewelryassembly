import { PageShell, Reveal } from '../components/ui';
import { brandAssets } from '../components/data';

export default function ContactPage() {
  return (
    <PageShell>
      <section className="inner-hero">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1>Get in touch with the jewelry assembly experts.</h1>
          <p>Use the direct contact details below to start a conversation about your next project.</p>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div className="contact-grid compact-grid">
            <Reveal>
              <div className="contact-card">
                <h3>Email Address</h3>
                <p>melinda@jewelryassembly.com</p>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="contact-card">
                <h3>Phone Number</h3>
                <p>(877) 336-3635</p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="contact-card">
                <h3>Business Address</h3>
                <p>253 Route 202, Somers, NY 10589</p>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="contact-card">
                <h3>Business Hours</h3>
                <p>Monday - Friday • 8:00 am - 6:00 pm</p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <div className="image-panel real-image-panel tall-panel">
              <img src={brandAssets.teamMember} alt="Studio team member" className="panel-image" />
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
