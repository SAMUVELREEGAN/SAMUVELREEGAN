import { useResume } from '../context/ResumeContext';

/**
 * View + Download resume controls.
 * @param {'default' | 'compact' | 'hero' | 'header'} variant
 */
function ResumeActions({ variant = 'default', className = '' }) {
  const { openResume, downloadResume } = useResume();

  if (variant === 'header') {
    return (
      <button
        type="button"
        className={`topbar__btn topbar__btn--ghost resume-actions--header ${className}`.trim()}
        onClick={openResume}
        aria-haspopup="dialog"
        data-cursor-hover
      >
        Resume
      </button>
    );
  }

  return (
    <div className={`resume-actions resume-actions--${variant} ${className}`.trim()}>
      <button
        type="button"
        className="resume-actions__btn resume-actions__btn--view"
        onClick={openResume}
        aria-haspopup="dialog"
        data-cursor-hover
      >
        View Resume
      </button>
      <button
        type="button"
        className="resume-actions__btn resume-actions__btn--download"
        onClick={downloadResume}
        data-cursor-hover
      >
        Download
      </button>
    </div>
  );
}

export default ResumeActions;
