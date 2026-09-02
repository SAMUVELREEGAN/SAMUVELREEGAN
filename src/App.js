import { ThemeProvider } from './context/ThemeContext';
import CustomCursor from './components/CustomCursor';
import BottomNav from './components/BottomNav';
import TopBar from './components/TopBar';
import HeroSection from './components/HeroSection';
import AboutCollage from './components/AboutCollage';
import Philosophy from './components/Philosophy';
import ProcessList from './components/ProcessList';
import BlueBanner from './components/BlueBanner';
import ExperienceTimeline from './components/ExperienceTimeline';
import WorkProjects from './components/WorkProjects';
import SkillsGrid from './components/SkillsGrid';
import GitHubPlayground from './components/GitHubPlayground';
import ContactSection from './components/ContactSection';
import './App.css';
import './Redesign.css';
import './themes.css';

function App() {
  return (
    <ThemeProvider>
    <div className="portfolio">
      <CustomCursor />
      <BottomNav />
      <div className="main-wrap">
        <TopBar />
        <main className="main-scroll">
          <HeroSection />
          <AboutCollage />
          <Philosophy />
          <ProcessList />
          <BlueBanner />
          <ExperienceTimeline />
          <WorkProjects />
          <SkillsGrid />
          <GitHubPlayground />
          <ContactSection />
        </main>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
