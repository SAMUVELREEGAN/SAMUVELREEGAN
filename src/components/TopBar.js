import { personalInfo, navLinks } from '../data/portfolioData';
import { scrollToSection } from '../utils/scrollToSection';
import ThemeToggle from './ThemeToggle';

function TopBar() {
  const handleHireClick = (e) => {
    e.preventDefault();
    scrollToSection('contact');
  };

  return (
    <header className="topbar">
      <a href="#hero" className="topbar__brand" data-cursor-hover>
        {personalInfo.name.split(' ')[0]}.
      </a>

      <nav className="topbar__nav" aria-label="Main navigation">
        {navLinks.map(link => (
          <a key={link.href} href={link.href} className="topbar__nav-link" data-cursor-hover>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="topbar__spacer" />

      <div className="topbar__actions">
        <ThemeToggle />
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="topbar__btn topbar__btn--ghost hide-mobile"
          data-cursor-hover
        >
          GitHub
        </a>
        <a
          href="#contact"
          className="topbar__btn topbar__btn--fill topbar__btn--hire"
          data-cursor-hover
          onClick={handleHireClick}
        >
          Hire Me
        </a>
      </div>
    </header>
  );
}

export default TopBar;
