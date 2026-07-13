import React, { useEffect } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import HeaderNav from '../components/HeaderNav';
import Footer from '../components/Footer';
import {
  AboutVisionPage,
  ArticlePage,
  EngagePage,
  HomeVisionPage,
  HowWeWorkPage,
  NotFoundVisionPage,
  PillarVisionPage,
  ProofPage,
  WhatWeDoPage,
} from '../pages/varahi/VisionPages';

const ScrollManager: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (location.hash) {
        const target = document.querySelector(location.hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);

  return null;
};

const RoutedApp: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    document.body.classList.add('vn-body');
    return () => document.body.classList.remove('vn-body');
  }, []);

  return (
    <div className="vn-site">
      <ScrollManager />
      <HeaderNav />

      <main>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            <Routes location={location}>
              <Route path="/" element={<HomeVisionPage />} />
              <Route path="/practice" element={<WhatWeDoPage />} />
              <Route path="/what-we-do" element={<Navigate to="/practice" replace />} />
              <Route path="/sap" element={<PillarVisionPage pillarKey="sap" />} />
              <Route path="/ai" element={<PillarVisionPage pillarKey="ai" />} />
              <Route path="/cx" element={<PillarVisionPage pillarKey="cx" />} />
              <Route path="/agentic" element={<Navigate to="/cx" replace />} />
              <Route path="/approach" element={<HowWeWorkPage />} />
              <Route path="/how-we-work" element={<Navigate to="/approach" replace />} />

              <Route path="/our-thinking" element={<ProofPage />} />
              <Route path="/our-thinking/work/:slug" element={<ArticlePage kind="work" />} />
              <Route path="/our-thinking/insights/:slug" element={<ArticlePage kind="insights" />} />
              <Route path="/proof" element={<Navigate to="/our-thinking" replace />} />
              <Route path="/out-thinking" element={<Navigate to="/our-thinking" replace />} />
              <Route path="/perspectives" element={<Navigate to="/our-thinking" replace />} />
              <Route path="/case-studies" element={<Navigate to="/our-thinking" replace />} />
              <Route path="/resources" element={<Navigate to="/our-thinking" replace />} />
              <Route path="/resources/case-studies" element={<Navigate to="/our-thinking" replace />} />
              <Route path="/resources/blog" element={<Navigate to="/our-thinking" replace />} />

              <Route path="/about" element={<AboutVisionPage />} />
              <Route path="/leadership" element={<Navigate to="/about" replace />} />
              <Route path="/careers" element={<Navigate to="/about" replace />} />
              <Route path="/investor-relations" element={<Navigate to="/about" replace />} />

              <Route path="/engage" element={<EngagePage />} />
              <Route path="/connect-with-us" element={<Navigate to="/engage" replace />} />
              <Route path="/contact" element={<Navigate to="/engage" replace />} />
              <Route path="/contact/*" element={<Navigate to="/engage" replace />} />

              <Route path="/services" element={<Navigate to="/practice" replace />} />
              <Route path="/solutions" element={<Navigate to="/practice" replace />} />
              <Route path="/services/sap-solutions" element={<Navigate to="/sap" replace />} />
              <Route path="/services/upgrade-sap" element={<Navigate to="/sap" replace />} />
              <Route path="/solutions/s4hana" element={<Navigate to="/sap" replace />} />
              <Route path="/solutions/fsm" element={<Navigate to="/sap" replace />} />
              <Route path="/solutions/btp-cpi" element={<Navigate to="/sap" replace />} />
              <Route path="/industries/*" element={<Navigate to="/sap" replace />} />
              <Route path="/services/ai-orchestration" element={<Navigate to="/ai" replace />} />
              <Route path="/services/joule-enablement" element={<Navigate to="/ai" replace />} />
              <Route path="/services/enterprise-cx" element={<Navigate to="/cx" replace />} />

              <Route path="*" element={<NotFoundVisionPage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

const AppRouter: React.FC = () => (
  <Router>
    <RoutedApp />
  </Router>
);

export default AppRouter;
