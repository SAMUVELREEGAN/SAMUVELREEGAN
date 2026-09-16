import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { RESUME_URL, downloadResume } from '../utils/resume';

function ResumeModal({ open, onClose }) {
  const closeBtnRef = useRef(null);
  const previouslyFocused = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    previouslyFocused.current = document.activeElement;
    const { style } = document.body;
    const prevOverflow = style.overflow;
    style.overflow = 'hidden';
    document.documentElement.classList.add('resume-viewer-open');

    const focusTimer = window.setTimeout(() => {
      try {
        closeBtnRef.current?.focus({ preventScroll: true });
      } catch {
        /* ignore focus errors */
      }
    }, 40);

    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        onClose();
      }
    };

    window.addEventListener('keydown', onKey, true);

    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener('keydown', onKey, true);
      style.overflow = prevOverflow;
      document.documentElement.classList.remove('resume-viewer-open');

      const el = previouslyFocused.current;
      previouslyFocused.current = null;
      if (el && document.contains(el)) {
        try {
          el.focus({ preventScroll: true });
        } catch {
          /* ignore */
        }
      }
    };
  }, [open, onClose]);

  if (!open || typeof document === 'undefined') return null;

  return createPortal(
    <div
      className="resume-viewer"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-viewer-title"
    >
      <button
        type="button"
        className="resume-viewer__backdrop"
        aria-label="Close resume viewer"
        onClick={onClose}
      />

      <div className="resume-viewer__shell" onClick={(e) => e.stopPropagation()}>
        <header className="resume-viewer__toolbar">
          <div className="resume-viewer__identity">
            <p className="resume-viewer__eyebrow">Full view</p>
            <h2 id="resume-viewer-title" className="resume-viewer__title">
              Samuvel Reegan — Resume
            </h2>
          </div>

          <div className="resume-viewer__controls">
            <button
              type="button"
              className="resume-viewer__btn"
              onClick={downloadResume}
              data-cursor-hover
            >
              Download PDF
            </button>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-viewer__btn"
              data-cursor-hover
            >
              Open in tab ↗
            </a>
            <button
              ref={closeBtnRef}
              type="button"
              className="resume-viewer__close"
              onClick={onClose}
              aria-label="Close resume full view"
              title="Close (Esc)"
              data-cursor-hover
            >
              <span className="resume-viewer__close-icon" aria-hidden="true">
                ✕
              </span>
              <span className="resume-viewer__close-label">Close</span>
            </button>
          </div>
        </header>

        <div className="resume-viewer__stage">
          <iframe
            title="Samuvel Reegan Resume PDF"
            src={`${RESUME_URL}#view=FitH&toolbar=1&navpanes=0`}
            className="resume-viewer__frame"
          />
        </div>

        <footer className="resume-viewer__hint">
          Press <kbd>Esc</kbd> or click <strong>Close</strong> to exit full view
        </footer>
      </div>
    </div>,
    document.body,
  );
}

export default ResumeModal;
