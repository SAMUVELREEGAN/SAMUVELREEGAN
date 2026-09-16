import { useMemo, useState } from 'react';
import { featuredProjects } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

const FILTERS = ['All', 'Web', 'Mobile'];

function matchesFilter(project, filter) {
  if (filter === 'All') return true;
  if (filter === 'Mobile') return project.category.toLowerCase().includes('mobile');
  return !project.category.toLowerCase().includes('mobile');
}

function ProjectCard({ project, index }) {
  const isLive = project.status === 'Live' && project.link;

  return (
    <ScrollReveal variant="zoom" delay={Math.min(index, 6) * 55}>
      <article className="projects-section__card" data-cursor-hover>
        <div className="projects-section__media">
          <img
            src={project.image}
            alt={project.title}
            className="projects-section__img"
            loading="lazy"
          />
          <div className="projects-section__media-shade" aria-hidden="true" />
          <span
            className={`projects-section__badge projects-section__badge--${
              project.status === 'Live' ? 'live' : 'soon'
            }`}
          >
            {project.status}
          </span>
          <span className="projects-section__index">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <div className="projects-section__body">
          <p className="projects-section__category">{project.category}</p>
          <h3 className="projects-section__title">{project.title}</h3>
          <p className="projects-section__desc">{project.description}</p>

          {project.highlights?.length > 0 && (
            <ul className="projects-section__highlights">
              {project.highlights.slice(0, 3).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}

          <div className="projects-section__tags">
            {project.tags.map((tag) => (
              <span key={tag} className="projects-section__tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="projects-section__footer">
            {isLive ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="projects-section__cta"
                data-cursor-hover
              >
                View Live →
              </a>
            ) : (
              <span className="projects-section__cta projects-section__cta--muted">
                Coming Soon
              </span>
            )}
          </div>
        </div>
      </article>
    </ScrollReveal>
  );
}

function ProjectsSection() {
  const [filter, setFilter] = useState('All');

  const projects = useMemo(
    () => featuredProjects.filter((project) => matchesFilter(project, filter)),
    [filter],
  );

  return (
    <section id="projects" className="section-dark grid-bg projects-section">
      <ScrollReveal variant="fade">
        <header className="projects-section__header">
          <div>
            <p className="eyebrow">Portfolio</p>
            <h2 className="projects-section__heading">Projects</h2>
            <p className="projects-section__sub">
              A dedicated look at shipped products — web platforms and mobile apps built
              with React, Node.js, and React Native.
            </p>
          </div>
          <span className="projects-section__count">
            {String(projects.length).padStart(2, '0')}
          </span>
        </header>
      </ScrollReveal>

      <ScrollReveal variant="up" delay={80}>
        <div className="projects-section__filters" role="tablist" aria-label="Project filters">
          {FILTERS.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={filter === item}
              className={`projects-section__filter ${
                filter === item ? 'projects-section__filter--active' : ''
              }`}
              onClick={() => setFilter(item)}
              data-cursor-hover
            >
              {item}
            </button>
          ))}
        </div>
      </ScrollReveal>

      <div className="projects-section__grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {projects.length === 0 && (
        <p className="projects-section__empty">No projects in this category yet.</p>
      )}
    </section>
  );
}

export default ProjectsSection;
