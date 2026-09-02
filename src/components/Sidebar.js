import { personalInfo, navLinks } from '../data/portfolioData';
import ThemeToggle from './ThemeToggle';

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <button
          type="button"
          className="sidebar-backdrop"
          onClick={onClose}
          aria-label="Close menu"
        />
      )}
      <aside className={`sidebar ${isOpen ? 'sidebar--open' : ''}`} aria-hidden={!isOpen}>
        <a href="#hero" className="sidebar__logo" onClick={onClose} data-cursor-hover>
          {personalInfo.name.split(' ')[0]}.
        </a>

        <nav className="sidebar__nav">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="sidebar__link"
              onClick={onClose}
              data-cursor-hover
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="sidebar__theme">
          <ThemeToggle className="theme-toggle--sidebar" />
        </div>

        <div className="sidebar__social">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar__social-link"
          >
            GitHub
          </a>
          <a href={`mailto:${personalInfo.email}`} className="sidebar__social-link">
            Email
          </a>
          <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`} className="sidebar__social-link">
            Phone
          </a>
        </div>

        <div className="sidebar__location">
          <span className="sidebar__dot" />
          {personalInfo.location}
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
