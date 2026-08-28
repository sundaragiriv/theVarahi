/**
 * OneTeam — the redraw.
 *
 * The old block was three dashed arrows pointing at a dot labelled ONE TEAM,
 * and it ran on nine pages. It is now one block, on one page, and it is not
 * made of lines.
 *
 * Three filled plates from the same four-fold family as the rest of the site,
 * rotated 0/30/60 about a shared centre. Where all three overlap the colour
 * accumulates into a single dense core — the argument is the overlap itself,
 * so nothing has to be labelled or pointed at. They settle into register once,
 * when you first scroll to them, and then hold.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import '../../styles/one-team.css';

/** Where each plate starts before it settles: rotation offset and drift. */
const PLATES = [
  { hue: 'accent', from: { rotate: -34, x: -26, y: -18 }, to: { rotate: 0, x: 0, y: 0 } },
  { hue: 'violet', from: { rotate: 62, x: 24, y: 20 }, to: { rotate: 30, x: 0, y: 0 } },
  { hue: 'gold', from: { rotate: 22, x: 18, y: -24 }, to: { rotate: 60, x: 0, y: 0 } },
] as const;

const OneTeam: React.FC = () => {
  const reduce = useReducedMotion();

  return (
    <section className="vn-oneteam">
      <div className="vn-container vn-oneteam__grid">
        <div className="vn-oneteam__mark" aria-hidden="true">
          {PLATES.map((plate, i) => (
            <motion.span
              key={plate.hue}
              className={`vn-oneteam__plate vn-oneteam__plate--${plate.hue}`}
              initial={reduce ? false : { ...plate.from, opacity: 0 }}
              whileInView={{ ...plate.to, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.15, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] }}
            />
          ))}
        </div>

        <div className="vn-oneteam__copy">
          <p className="vn-eyebrow">One team</p>
          <h2>
            Three disciplines, one backlog, one number to call when it breaks.
          </h2>
          <p>
            The seams between vendors are where enterprise programmes fail. We do not hand you
            three plans to reconcile — the platform work, the cognition layer and the customer
            journey land together, under the architect who scoped them.
          </p>
          <Link className="vn-oneteam__cta" to="/engage">
            Start a conversation
            <ArrowRight size={17} strokeWidth={1.8} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OneTeam;
