import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MegaPanelProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const MegaPanel: React.FC<MegaPanelProps> = ({ open, onClose, children }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div 
          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 z-50 w-screen max-w-6xl"
          onMouseLeave={onClose}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <div className="bg-white shadow-2xl border border-gray-100 rounded-lg overflow-hidden">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MegaPanel;