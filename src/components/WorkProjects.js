import { useState } from 'react';
import { featuredProjects } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

function getTitleLines(title) {
  const upper = title.toUpperCase();
  const words = upper.split(/\s+/);
  if (words.length <= 2) return [upper];
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(' '), words.slice(mid).join(' ')];
}

function ProjectEditorialItem({ project, index }) {
  const [expanded, setExpanded] = useState(false);
  const num = String(index + 1).padStart(2, '0');
  const titleLines = getTitleLines(project.title);
  const isEven = index % 2 === 1;

  return (
    <ScrollReveal variant="image" delay={index * 100}>
      <article className={`proj-editorial__item ${isEven ? 'proj-editorial__item--alt' : ''}`}>
        <div className={`proj-editorial__card ${expanded ? 'proj-editorial__card--open' : ''}`}>
          <div className="proj-editorial__frame">
            <img
              src={project.image}
              alt={project.title}
              className="proj-editorial__img"
              loading="lazy"
            />
            <div className="proj-editorial__shine" aria-hidden="true" />

            <div className="proj-editorial__panel">
              <div className="proj-editorial__panel-top">
                <span className={`proj-editorial__status proj-editorial__status--${project.status === 'Live' ? 'live' : 'soon'}`}>
                  {project.status}
                </span>
                <span className="proj-editorial__panel-num">/{num}</span>
              </div>
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

            <button
              type="button"
              className="proj-editorial__tap hide-desktop-flex"
              onClick={(e) => {
                e.stopPropagation();
                setExpanded((v) => !v);
              }}
              aria-expanded={expanded}
            >
              {expanded ? 'Close' : 'Details'}
            </button>
          </div>

          <div className="proj-editorial__caption">
            <p className="proj-editorial__caption-cat">{project.category.toUpperCase()} /</p>
            <h3 className="proj-editorial__caption-title">
              {titleLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h3>
          </div>
        </div>
      </article>
    </ScrollReveal>
  );
}

function WorkProjects() {
  return (
    <section id="projects" className="section-dark grid-bg proj-editorial">
      <ScrollReveal variant="fade">
        <header className="proj-editorial__header">
          <p className="eyebrow">Selected Work</p>
          <div className="proj-editorial__header-row">
            <h2 className="proj-editorial__section-title">Projects</h2>
            <span className="proj-section-count">
              {String(featuredProjects.length).padStart(2, '0')}
            </span>
          </div>
        </header>
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
