import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function PageShell({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      {children}
    </motion.main>
  );
}

export function SectionHeading({ eyebrow, title, text, align = 'left' }) {
  return (
    <motion.div
      className={`section-heading ${align === 'center' ? 'center' : ''}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={fadeUp}
      custom={0.05}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </motion.div>
  );
}

export function CTAButton({ to, children, secondary = false }) {
  return (
    <Link to={to} className={secondary ? 'btn btn-secondary' : 'btn btn-primary'}>
      {children}
    </Link>
  );
}

export function Reveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={fadeUp}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}
