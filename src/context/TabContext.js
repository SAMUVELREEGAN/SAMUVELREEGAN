import { createContext, useContext, useEffect, useState } from 'react';

const TabContext = createContext(null);

export function TabProvider({ children }) {
  const [activeTab, setActiveTab] = useState('portfolio');
  const [introOpen, setIntroOpen] = useState(true);

  const openProfile = () => {
    setActiveTab('profile');
    setIntroOpen(true);
  };

  const openPortfolio = () => {
    setActiveTab('portfolio');
    setIntroOpen(false);
  };

  const closeIntro = () => setIntroOpen(false);

  useEffect(() => {
    document.body.style.overflow = introOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [introOpen]);

  return (
    <TabContext.Provider
      value={{ activeTab, setActiveTab, introOpen, openProfile, openPortfolio, closeIntro }}
    >
      {children}
    </TabContext.Provider>
  );
}

export function useTab() {
  const ctx = useContext(TabContext);
  if (!ctx) throw new Error('useTab must be used within TabProvider');
  return ctx;
}
