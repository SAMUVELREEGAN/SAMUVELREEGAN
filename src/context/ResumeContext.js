import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import ResumeModal from '../components/ResumeModal';
import { downloadResume as triggerDownload } from '../utils/resume';

const ResumeContext = createContext(null);

export function ResumeProvider({ children }) {
  const [open, setOpen] = useState(false);

  const openResume = useCallback(() => setOpen(true), []);
  const closeResume = useCallback(() => setOpen(false), []);
  const download = useCallback(() => triggerDownload(), []);

  const value = useMemo(
    () => ({ open, openResume, closeResume, downloadResume: download }),
    [open, openResume, closeResume, download],
  );

  return (
    <ResumeContext.Provider value={value}>
      {children}
      <ResumeModal open={open} onClose={closeResume} />
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const ctx = useContext(ResumeContext);
  if (!ctx) throw new Error('useResume must be used within ResumeProvider');
  return ctx;
}
