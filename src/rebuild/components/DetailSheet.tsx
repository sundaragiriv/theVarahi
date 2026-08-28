/**
 * DetailSheet — the click-for-more overlay.
 *
 * Landing pages hold one screen and one promise; the depth opens on purpose
 * instead of being scrolled past. Reused across pages with a different payload
 * each time, which is what lets the pages stop repeating each other.
 *
 * Escape closes it, the veil closes it, focus moves in on open and returns to
 * whatever opened it on close, and the page behind cannot scroll while it is up.
 */
import React, { useCallback, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import '../../styles/detail-sheet.css';

type Props = {
  open: boolean;
  onClose: () => void;
  kicker: string;
  title: string;
  children: React.ReactNode;
};

const DetailSheet: React.FC<Props> = ({ open, onClose, kicker, title, children }) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const restoreTo = useRef<HTMLElement | null>(null);

  const handleKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!open) return;
    restoreTo.current = document.activeElement as HTMLElement;
    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKey);
      restoreTo.current?.focus();
    };
  }, [open, handleKey]);

  return (
    <div
      className={`vn-sheet${open ? ' is-open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
      aria-label={title}
    >
      <button className="vn-sheet__veil" type="button" aria-label="Close" onClick={onClose} tabIndex={open ? 0 : -1} />
      <div className="vn-sheet__panel">
        <div className="vn-sheet__head">
          <div>
            <p className="vn-eyebrow">{kicker}</p>
            <h2>{title}</h2>
          </div>
          <button
            ref={closeRef}
            className="vn-sheet__x"
            type="button"
            onClick={onClose}
            aria-label="Close"
            tabIndex={open ? 0 : -1}
          >
            <X size={17} strokeWidth={1.9} />
          </button>
        </div>
        <div className="vn-sheet__body">{children}</div>
      </div>
    </div>
  );
};

export default DetailSheet;
