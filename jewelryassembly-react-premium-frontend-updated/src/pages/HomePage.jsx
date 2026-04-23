import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageShell, SectionHeading, CTAButton, Reveal } from '../components/ui';
import { services, processSteps, stats, testimonials, portfolioItems, brandAssets } from '../components/data';

export default function HomePage() {
  return (
    <PageShell>
      <section className="hero-section">
        <div className="container hero-grid premium-hero-grid">
          <div className="hero-copy">
            <motion.span className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.05 }}>Jewelry Assembly Outsource in the USA</motion.span>
            <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>Luxury-level jewelry production support for designers who care about detail.</motion.h1>
            <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}>
              Bring your concept, materials, image, or sample to a U.S.-based team focused on handcrafted precision,
              confidentiality, reliable turnaround, and consistent quality from first piece to final piece.
            </motion.p>
            <motion.div className="hero-actions" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
              <CTAButton to="/quote">Request a Quote</CTAButton>
              <CTAButton to="/portfolio" secondary>View Portfolio</CTAButton>
            </motion.div>
            <div className="trust-mini">
              <span>Made in the USA</span>
              <span>NDA friendly</span>
              <span>Rush orders available</span>
            </div>
          </div>

          <motion.div className="hero-shot-wrap" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.85 }}>
            <img src={brandAssets.hero} alt="Jewelry assembly showcase" className="hero-shot" />
            <div className="floating-card top-card">
              <span>Handcrafted precision</span>
              <strong>Designer-led quality</strong>
            </div>
            <div className="floating-card bottom-card">
              <span>Trusted production</span>
              <strong>From sample to shipment</strong>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container stats-grid">
          {stats.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.08}>
              <div className="stat-card">
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Services"
            title="A premium production partner for modern jewelry businesses"
            text="Assembly, prototyping, quality control, material planning, rush-order coordination, and shipment support designed for brands that need reliable hands-on execution."
          />
          <div className="card-grid three">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.07}>
                <article className="feature-card">
                  <span className="card-index">0{index + 1}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt-bg">
        <div className="container split-section">
          <Reveal>
            <div className="image-panel real-image-panel tall-panel">
              <img src={brandAssets.assemblyHands} alt="Jewelry assembly workbench" className="panel-image" />
              <div className="image-overlay-copy">
                <span className="eyebrow light">Studio craftsmanship</span>
                <h3>Built for designers who want precision without overseas production stress.</h3>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="text-panel">
              <SectionHeading
                eyebrow="About"
                title="A one-stop handcrafted jewelry partner with room to grow your brand"
                text="The studio positioning centers on consistent workmanship, material support, trusted communication, and giving founders more time to focus on design, growth, and profit."
              />
              <Link to="/about" className="text-link">Explore About Us</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Process"
            title="A clear workflow from sample and materials to finished shipment"
            text="The collaboration model is structured around your references, your specs, and a production plan built to reduce mistakes before volume work begins."
            align="center"
          />
          <div className="timeline-grid">
            {processSteps.map((step, index) => (
              <Reveal key={step} delay={index * 0.06}>
                <div className="timeline-item">
                  <div className="timeline-number">{index + 1}</div>
                  <p>{step}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt-bg">
        <div className="container">
          <SectionHeading
            eyebrow="Portfolio"
            title="Real jewelry and studio imagery from the brand materials you shared"
            text="The front-end now uses your uploaded jewelry images across the showcase so the site feels authentic, premium, and production-led rather than generic."
          />
          <div className="portfolio-grid">
            {portfolioItems.slice(0, 6).map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="portfolio-card">
                  <img src={item.image} alt={item.title} className="portfolio-image" />
                  <span>{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>High-detail work presented in a clean, luxury-inspired B2B format.</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Testimonials"
            title="Trust built through consistency, communication, and detail"
            text="Use these proof points to reinforce confidence for designers and brands evaluating production support."
          />
          <div className="card-grid two larger-gap">
            {testimonials.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.09}>
                <article className="testimonial-card">
                  <p>“{item.quote}”</p>
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.brand}</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
