import { githubProjects, personalInfo } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

function GitHubSection() {
  return (
    <section id="github" className="content-block">
      <ScrollReveal>
        <div className="llg text-grey400 pb-2">GitHub</div>
        <p className="p1 text-grey300 pb-4">
          Open source on{' '}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="linktext decor"
            data-cursor-hover
          >
            @SAMUVELREEGAN
          </a>
        </p>
      </ScrollReveal>

      <div className="github-grid">
        {githubProjects.map((project, i) => (
          <ScrollReveal key={project.id} delay={60 + i * 50}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="github-card border1 borderr16 decor"
              data-cursor-hover
            >
              <span className="ls3 text-grey200">{project.repo}</span>
              <h3 className="lxl2 text-grey400 pt-2">{project.title}</h3>
              <p className="p1 text-grey300 pt-2">{project.description}</p>
              <div className="w-layout-hflex gap8 flex-wrap pt-3">
                {project.tags.map((tag) => (
                  <span key={tag} className="skill-pill skill-pill--sm">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={300}>
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="submit decor inline-submit"
          data-cursor-hover
        >
          <span className="lm text-white">View All Repositories</span>
        </a>
      </ScrollReveal>
    </section>
  );
}

export default GitHubSection;
