/**
 * RebuildHeader — fluid, scroll-reactive header.
 *
 * The old header was a full-bleed white bar pinned to the top of every page.
 * This one is transparent over the hero and condenses into a single centred
 * capsule once you scroll — the zoox.com expand/collapse — then lifts away
 * entirely while you keep scrolling down, and drops back the moment you scroll
 * up. Hovering (or tabbing into) the condensed header re-expands it.
 *
 * State lives in one attribute, data-state, read by src/styles/nav-fluid.css.
 * data-compact is the separate "should the labels be collapsed" question:
 * condensed AND not being hovered AND the mobile sheet is shut.
 */
import React, { useCallback, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Linkedin, Menu, X, Youtube } from 'lucide-react';
import WordMark from '../../components/WordMark';
import ThemeToggle from '../../components/ThemeToggle';
import '../../styles/nav-fluid.css';

// Numbered primary nav — implies a route through an argument, not a menu of services.
const navLinks = [
  { num: '01', label: 'Practice', href: '/practice' },
  { num: '02', label: 'Approach', href: '/approach' },
  // Work and Insights were two slots pointing at one page (/our-thinking), split
  // only by a ?view= param the page already exposes as its own tab filter.
  // One destination, one nav item.
  { num: '03', label: 'Work', href: '/our-thinking' },
  { num: '04', label: 'About', href: '/about' },
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

type NavState = 'top' | 'condensed' | 'hidden';

/** Below this we are still "over the hero" and the header stays invisible. */
const TOP_ZONE = 28;
/** Only start hiding on scroll-down once a full screen has gone past. */
const HIDE_AFTER = 460;

const RebuildHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState<NavState>('top');
  const [hovering, setHovering] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const location = useLocation();

  const isPracticeActive = ['/practice', '/sap', '/ai', '/cx'].includes(location.pathname);
  // /our-thinking now covers both case studies and insights, including article routes
  const isWorkActive = location.pathname.startsWith('/our-thinking');

  const isLinkActive = useCallback(
    (href: string) =>
      (href === '/practice' && isPracticeActive) ||
      (href === '/our-thinking' && isWorkActive) ||
      href === location.pathname,
    [isPracticeActive, isWorkActive, location.pathname]
  );

  // The indicator follows the pointer when you are hovering the nav, and falls
  // back to the current route the moment you leave it.
  const activeHref = navLinks.find((l) => isLinkActive(l.href))?.href ?? null;
  const litHref = hovered ?? activeHref;

  useEffect(() => {
    let last = window.scrollY;
    let queued = false;

    const settle = () => {
      queued = false;
      const y = window.scrollY;
      const delta = y - last;
      last = y;

      if (y <= TOP_ZONE) {
        setState('top');
      } else if (delta > 4 && y > HIDE_AFTER) {
        setState('hidden');
      } else if (delta < -4 || y <= HIDE_AFTER) {
        setState('condensed');
      }
    };

    const onScroll = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(settle);
    };

    settle();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // A hovered or open header is never allowed to stay hidden.
  useEffect(() => {
    if ((hovering || isOpen) && state === 'hidden') setState('condensed');
  }, [hovering, isOpen, state]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const compact = state !== 'top' && !hovering && !isOpen;

  return (
    <header
      className="vn-header vn-header--fluid"
      data-state={state}
      data-compact={compact}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false);
        setHovered(null);
      }}
      onFocusCapture={() => setHovering(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) setHovering(false);
      }}
    >
      <div className="vn-container vn-header__inner">
        <Link className="vn-brand" to="/" onClick={() => setIsOpen(false)} aria-label="Varahi home">
          <WordMark />
        </Link>

        <nav className="vn-nav" aria-label="Primary navigation" onMouseLeave={() => setHovered(null)}>
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={isLinkActive(link.href) ? 'active' : undefined}
              onMouseEnter={() => setHovered(link.href)}
              onFocus={() => setHovered(link.href)}
            >
              {litHref === link.href && (
                <motion.span
                  className="vn-nav__pill"
                  layoutId="vn-nav-pill"
                  transition={{ type: 'spring', stiffness: 420, damping: 34, mass: 0.7 }}
                />
              )}
              <span className="vn-nav__num">{link.num}</span>
              {link.label}
            </NavLink>
          ))}
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
