import { personalInfo } from '../data/portfolioData';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="content-footer">
      <p className="ls3 text-grey200">© {year} {personalInfo.name}</p>
      <div className="w-layout-hflex gap16">
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="lm2 text-grey200 decor">
          GitHub
        </a>
        <a href={`mailto:${personalInfo.email}`} className="lm2 text-grey200 decor">
          Email
        </a>
      </div>
    </footer>
  );
}

export default Footer;
