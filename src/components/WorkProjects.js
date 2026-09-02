import { useState } from 'react';
import { featuredProjects } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

function splitDisplayTitle(title) {
  const words = title.trim().split(/\s+/);
  if (words.length <= 2) return words.join(' ');
  const mid = Math.ceil(words.length / 2);
  return `${words.slice(0, mid).join(' ')}\n${words.slice(mid).join(' ')}`;
}

function ProjectEditorialItem({ project, index }) {
  const [expanded, setExpanded] = useState(false);
  const categoryLine = project.category.toUpperCase();
  const titleLines = splitDisplayTitle(project.title).split('\n');
  const num = String(index + 1).padStart(2, '0');

  return (
    <article className="proj-editorial__item">
      <div className="proj-editorial__stage">
        <ScrollReveal variant="left" delay={index * 60} className="proj-editorial__heading-wrap">
          <div className="proj-editorial__heading">
            <span className="proj-editorial__index">/{num}</span>
            <h3 className="proj-editorial__name">
              <span className="proj-editorial__name-cat">{categoryLine} /</span>
              {titleLines.map((line) => (
                <span key={line}>{line.toUpperCase()}</span>
              ))}
            </h3>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="image" delay={120 + index * 80} className="proj-editorial__visual-wrap">
          <div
            className={`proj-editorial__visual ${expanded ? 'proj-editorial__visual--open' : ''}`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="proj-editorial__img"
              loading="lazy"
            />

            <div className="proj-editorial__panel">
              <div className="proj-editorial__panel-inner">
                <span className={`proj-editorial__status proj-editorial__status--${project.status === 'Live' ? 'live' : 'soon'}`}>
                  {project.status}
                </span>
                <p className="proj-editorial__desc">{project.description}</p>

                {project.highlights && (
                  <ul className="proj-editorial__highlights">
                    {project.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                )}

                <div className="proj-editorial__meta">
                  <div className="proj-editorial__tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="proj-editorial__tag">{tag}</span>
                    ))}
                  </div>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proj-editorial__cta"
                      data-cursor-hover
                    >
                      View Live →
                    </a>
                  ) : (
                    <span className="proj-editorial__cta proj-editorial__cta--muted">Coming Soon</span>
                  )}
                </div>
              </div>
            </div>

            <button
              type="button"
              className="proj-editorial__tap-hint hide-desktop-flex"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              aria-label={expanded ? 'Hide project details' : 'Show project details'}
            >
              {expanded ? 'Close' : 'Details'}
            </button>
          </div>
        </ScrollReveal>
      </div>
    </article>
  );
}

function WorkProjects() {
  return (
    <section id="projects" className="section-dark grid-bg proj-editorial">
      <ScrollReveal variant="fade">
        <div className="proj-editorial__header">
          <p className="eyebrow">Selected Work</p>
          <div className="proj-editorial__header-row">
            <h2 className="proj-editorial__section-title">Projects</h2>
            <span className="proj-section-count">
              {String(featuredProjects.length).padStart(2, '0')}
            </span>
          </div>
          <p className="proj-editorial__hint">Hover the preview to explore each build</p>
        </div>
      </ScrollReveal>

      <div className="proj-editorial__list">
        {featuredProjects.map((project, index) => (
          <ProjectEditorialItem key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

export default WorkProjects;
