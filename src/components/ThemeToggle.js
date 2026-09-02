import { useTheme } from '../context/ThemeContext';

function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className={`theme-toggle ${className}`}
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      data-cursor-hover
    >
      <span className="theme-toggle__track" aria-hidden="true">
        <span className={`theme-toggle__thumb ${isDark ? '' : 'theme-toggle__thumb--light'}`} />
      </span>
      <span className="theme-toggle__label">{isDark ? 'Dark' : 'Light'}</span>
    </button>
  );
}

export default ThemeToggle;
