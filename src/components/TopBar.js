import { personalInfo, navLinks } from '../data/portfolioData';
import { scrollToSection } from '../utils/scrollToSection';
import ThemeToggle from './ThemeToggle';
import ResumeActions from './ResumeActions';

function TopBar() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    scrollToSection(id);
  };

  const handleHireClick = (e) => {
    e.preventDefault();
    scrollToSection('contact');
  };

  return (
    <header className="topbar">
      <a
        href="#hero"
        className="topbar__brand"
        data-cursor-hover
        onClick={(e) => handleNavClick(e, '#hero')}
      >
        {personalInfo.name.split(' ')[0]}
        <span>.</span>
      </a>

      <nav className="topbar__nav" aria-label="Main navigation">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="topbar__nav-link"
            data-cursor-hover
            onClick={(e) => handleNavClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="topbar__actions">
        <ThemeToggle className="theme-toggle--header" />
        <ResumeActions variant="header" className="hide-mobile" />
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="topbar__btn topbar__btn--ghost topbar__btn--github hide-mobile"
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
