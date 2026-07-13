import React from 'react';
import { Link } from 'react-router-dom';
import WordMark from '../../components/WordMark';
import { locations } from '../../data/varahiVision';

type FooterLink = { label: string; href: string; external?: boolean };

const footerGroups: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Practice',
    links: [
      { label: 'SAP — Platform', href: '/sap' },
      { label: 'AI — Cognition', href: '/ai' },
      { label: 'CX — Human', href: '/cx' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'The Practice', href: '/practice' },
      { label: 'The Approach', href: '/approach' },
      { label: 'Our Thinking', href: '/our-thinking' },
      { label: 'About', href: '/about' },
    ],
  },
  {
    title: 'Engage',
    links: [
      { label: 'Start a conversation', href: '/engage' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/thevarahi-group', external: true },
      { label: 'YouTube', href: 'https://www.youtube.com/@architectZero-LMS', external: true },
    ],
  },
  {
    title: 'Delivery',
    links: locations.map((place) => ({ label: place, href: '/about' })),
  },
];

const RebuildFooter: React.FC = () => (
  <footer className="vn-footer">
    <div className="vn-container vn-footer__grid">
      <div className="vn-footer__brand">
        <Link to="/" aria-label="Varahi Group home">
          <WordMark variant="group" />
        </Link>
        <p>SAP × AI × CX — engineered as one.</p>
      </div>

      {footerGroups.map((group) => (
        <nav key={group.title} aria-label={`${group.title} footer navigation`}>
          <h2>{group.title}</h2>
          {group.links.map((link) =>
            link.external ? (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ) : (
              <Link key={link.label} to={link.href}>
                {link.label}
              </Link>
            ),
          )}
        </nav>
      ))}
    </div>
    <div className="vn-container vn-footer__bottom">
      <span>© Varahi Group. Varahi is the enterprise practice of Varahi Group.</span>
      <span>No synthetic credibility. No inflated claims.</span>
    </div>
  </footer>
);

export default RebuildFooter;
