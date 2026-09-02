import { useEffect, useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className="primary-nav boderb">
      <div className="container-37 w-layout-hflex alignc justifysb">
        <a href="/" className="brand decor" data-cursor-hover>
          <span className="navbar__logo-mark">S</span>
        </a>

        <div className="search-trigger bg-grey0 borderr12 hide-on-mobile" data-cursor-hover>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="11" cy="11" r="7" stroke="#6C6B77" strokeWidth="1.5" />
            <path d="M16 16l5 5" stroke="#6C6B77" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <p className="lm3 text-grey200">Search</p>
        </div>

        <div className="w-layout-hflex ctas nav-cta">
          <a
            href="https://github.com/SAMUVELREEGAN/"
            target="_blank"
            rel="noopener noreferrer"
            className="submit hide-on-mobile decor"
            data-cursor-hover
          >
            <div className="lm text-white">GitHub</div>
          </a>

          <button
            type="button"
            className={`navbar__toggle ${menuOpen ? 'navbar__toggle--open' : ''} hide-on-desktop`}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="mobile-nav">
          <a href="https://github.com/SAMUVELREEGAN/" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
