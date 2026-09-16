/** Public resume asset (also kept in src for reference). */
export const RESUME_FILE_NAME = 'Samuvel_Resume.pdf';
export const RESUME_URL = `${process.env.PUBLIC_URL || ''}/${RESUME_FILE_NAME}`;
export const RESUME_DOWNLOAD_NAME = 'Samuvel_Reegan_Resume.pdf';

/** Open the resume PDF in a new browser tab. */
export function viewResume() {
  window.open(RESUME_URL, '_blank', 'noopener,noreferrer');
}

/** Trigger a file download of the resume PDF. */
export function downloadResume() {
  const link = document.createElement('a');
  link.href = RESUME_URL;
  link.download = RESUME_DOWNLOAD_NAME;
  link.rel = 'noopener';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
