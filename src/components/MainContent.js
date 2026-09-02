import { useEffect, useState } from 'react';
import { useTab } from '../context/TabContext';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import GitHubSection from './GitHubSection';
import Contact from './Contact';
import Footer from './Footer';

function MainContent() {
  const { activeTab } = useTab();
  const [renderedTab, setRenderedTab] = useState(activeTab);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (activeTab === renderedTab) return undefined;

    setFading(true);
    const timer = setTimeout(() => {
      setRenderedTab(activeTab);
      setFading(false);
    }, 280);

    return () => clearTimeout(timer);
  }, [activeTab, renderedTab]);

  const isPortfolio = renderedTab === 'portfolio';

  return (
    <section className="body_content bg-grey0 boderl">
      <div className="preview-content">
        <div className={`content-scroll ${fading ? 'content-scroll--fading' : ''}`}>
          {isPortfolio ? (
            <>
              <Projects />
              <GitHubSection />
            </>
          ) : (
            <>
              <About />
              <Skills />
              <Experience />
              <Contact />
            </>
          )}
          <Footer />
        </div>
      </div>
    </section>
  );
}

export default MainContent;
