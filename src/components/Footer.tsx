import React from 'react';
import { Link } from 'react-router-dom';
import WordMark from './WordMark';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white py-8 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div>
            <WordMark size="sm" theme="dark" className="mb-2" />
            <p className="text-text-muted text-sm">Enterprise SAP & CX solutions since 2009.</p>
            <div className="flex gap-4 text-xs mt-2">
              <div>
                <div className="text-emerald-400 font-bold">36+</div>
                <div className="text-text-muted">Projects</div>
              </div>
              <div>
                <div className="text-emerald-400 font-bold">23</div>
                <div className="text-text-muted">Years</div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3 text-text-inverse">Links</h3>
            <div className="space-y-1 text-sm">
              <Link to="/about" className="block text-text-muted hover:text-accent-400 transition-colors">About</Link>
              <Link to="/solutions" className="block text-text-muted hover:text-accent-400 transition-colors">Solutions</Link>
              <Link to="/resources/case-studies" className="block text-text-muted hover:text-accent-400 transition-colors">Case Studies</Link>
              <Link to="/resources" className="block text-text-muted hover:text-accent-400 transition-colors">Resources</Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3 text-text-inverse">Contact</h3>
            <div className="text-sm text-text-muted space-y-1">
              <div>Cary, NC USA</div>
              <div>Hyderabad, India</div>
              <Link to="/contact" className="text-accent-400 hover:text-accent-300 transition-colors font-medium">
                Get Started 
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border-dark pt-4 text-center text-xs text-text-muted">
           2025 Varahi Enterprise Solutions. All rights reserved. *Results may vary based on project scope.
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
