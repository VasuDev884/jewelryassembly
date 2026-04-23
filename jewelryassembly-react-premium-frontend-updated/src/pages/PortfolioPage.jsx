import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageShell, SectionHeading } from '../components/ui';
import { portfolioItems } from '../components/data';

const allTags = ['All', ...new Set(portfolioItems.map((item) => item.tag))];

export default function PortfolioPage() {
  const [active, setActive] = useState('All');

  const filtered = useMemo(
    () => (active === 'All' ? portfolioItems : portfolioItems.filter((item) => item.tag === active)),
    [active],
  );

  return (
    <PageShell>
      <section className="inner-hero">
        <div className="container">
          <span className="eyebrow">Portfolio</span>
          <h1>Real product and studio imagery organized with an animated portfolio filter.</h1>
          <p>
            Use the category chips to sort the collection and show the breadth of components, bracelets,
            custom pieces, process shots, and finished jewelry imagery.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Filter gallery"
            title="Curated from the actual image set you uploaded"
            text="This gallery replaces placeholders with your real materials and includes animated filtering for a more premium, interactive feel."
          />
          <div className="filter-row">
            {allTags.map((tag) => (
              <button key={tag} className={`filter-chip ${active === tag ? 'active' : ''}`} onClick={() => setActive(tag)}>
                {tag}
              </button>
            ))}
          </div>

          <motion.div layout className="portfolio-grid">
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.article
                  layout
                  key={`${active}-${item.title}`}
                  className="portfolio-card tall"
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ duration: 0.35 }}
                >
                  <img src={item.image} alt={item.title} className="portfolio-image portfolio-image-tall" />
                  <span>{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>Presented in a cleaner Apple-meets-luxury layout with soft motion and stronger visual emphasis.</p>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
}
