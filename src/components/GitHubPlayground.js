import { useState } from 'react';
import { githubProjects, personalInfo } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

const GitIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"
    style={{ color: '#555', flexShrink: 0 }}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57
      0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695
      -.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99
      .105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225
      -.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405
      c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225
      0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3
      0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const INITIAL_VISIBLE = 9;

function GitHubPlayground() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? githubProjects : githubProjects.slice(0, INITIAL_VISIBLE);

  return (
    <section id="github" className="section-dark grid-bg">
      <ScrollReveal variant="fade">
        <div className="playground__header">
          <div>
            <p className="eyebrow">Open Source</p>
            <h2 className="playground__heading">My Playground</h2>
            <p className="playground__sub">
              Experiments, learning projects, and open-source repos —{' '}
              <strong>{githubProjects.length}</strong> repositories and counting.
            </p>
          </div>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="playground__profile-link"
            data-cursor-hover
          >
            @SAMUVELREEGAN
          </a>
        </div>
      </ScrollReveal>

      <div className="playground__grid">
        {visibleProjects.map((project, index) => (
          <ScrollReveal key={project.id} variant="zoom" delay={Math.min(index, 8) * 45}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="playground__card"
              data-cursor-hover
            >
              <div className="playground__repo-header">
                <GitIcon />
                <span className="playground__repo">{project.repo}</span>
                {project.lang && (
                  <span className="playground__lang">{project.lang}</span>
                )}
              </div>
              <span className="playground__title">{project.title}</span>
              <span className="playground__desc">{project.description}</span>
              <div className="playground__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="playground__tag">{tag}</span>
                ))}
              </div>
            </a>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal variant="up" delay={200}>
        <div className="playground__actions">
          {!showAll && githubProjects.length > INITIAL_VISIBLE && (
            <button
              type="button"
              className="playground__cta playground__cta--outline"
              onClick={() => setShowAll(true)}
              data-cursor-hover
            >
              Show all {githubProjects.length} repos
            </button>
          )}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="playground__cta"
            data-cursor-hover
          >
            View on GitHub →
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default GitHubPlayground;
