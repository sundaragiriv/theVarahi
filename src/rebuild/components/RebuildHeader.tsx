import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Linkedin, Menu, X, Youtube } from 'lucide-react';
import WordMark from '../../components/WordMark';
import ThemeToggle from '../../components/ThemeToggle';

// Numbered primary nav — implies a route through an argument, not a menu of services.
const navLinks = [
  { num: '01', label: 'Practice', href: '/practice' },
  { num: '02', label: 'Approach', href: '/approach' },
  { num: '03', label: 'Work', href: '/our-thinking?view=work' },
  { num: '04', label: 'Insights', href: '/our-thinking?view=insights' },
  { num: '05', label: 'About', href: '/about' },
];

// The three layers — shown in the mobile menu.
const layerLinks = [
  { label: 'SAP — Platform', href: '/sap' },
  { label: 'AI — Cognition', href: '/ai' },
  { label: 'CX — Human', href: '/cx' },
];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/thevarahi-group', icon: Linkedin },
  { label: 'YouTube', href: 'https://www.youtube.com/@architectZero-LMS', icon: Youtube },
];

const RebuildHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isPracticeActive = ['/practice', '/sap', '/ai', '/cx'].includes(location.pathname);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header className={`vn-header${isScrolled ? ' is-scrolled' : ''}`}>
      <div className="vn-container vn-header__inner">
        <Link className="vn-brand" to="/" onClick={() => setIsOpen(false)} aria-label="Varahi home">
          <WordMark />
        </Link>

        <nav className="vn-nav" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const isActive = link.href === '/practice' && isPracticeActive;
            return (
              <NavLink key={link.href} to={link.href} className={isActive ? 'active' : undefined}>
                <span className="vn-nav__num">{link.num}</span>
                {link.label}
              </NavLink>
            );
          })}
        </nav>

        <div className="vn-header__actions">
          <Link className="vn-header__cta" to="/engage">
            Talk to us
          </Link>
          <ThemeToggle />
          <div className="vn-header__social" aria-label="Social links">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>
                  <Icon size={16} strokeWidth={1.9} />
                </a>
              );
            })}
          </div>
        </div>

        <button
          className="vn-menu-button"
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      <div className={`vn-mobile-menu${isOpen ? ' is-open' : ''}`}>
        <nav aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <NavLink key={link.href} to={link.href} onClick={() => setIsOpen(false)}>
              <span className="vn-nav__num">{link.num}</span>
              {link.label}
            </NavLink>
          ))}
          {layerLinks.map((link) => (
            <NavLink key={link.href} to={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/engage" onClick={() => setIsOpen(false)}>
            Talk to us
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default RebuildHeader;
