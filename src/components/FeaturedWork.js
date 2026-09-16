import { featuredProjects } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

function getTitleLines(title) {
  const upper = title.toUpperCase();
  const words = upper.split(/\s+/);
  if (words.length <= 2) return [upper];
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(' '), words.slice(mid).join(' ')];
}

function FeaturedItem({ project, index }) {
  const num = String(index + 1).padStart(2, '0');
  const titleLines = getTitleLines(project.title);
  const isEven = index % 2 === 1;

  return (
    <ScrollReveal variant="image" delay={index * 80}>
      <article className={`proj-editorial__item ${isEven ? 'proj-editorial__item--alt' : ''}`}>
        <div className="proj-editorial__card">
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
                <span
                  className={`proj-editorial__status proj-editorial__status--${
                    project.status === 'Live' ? 'live' : 'soon'
                  }`}
                >
                  {project.status}
                </span>
                <span className="proj-editorial__panel-num">/{num}</span>
              </div>
              <p className="proj-editorial__desc">{project.description}</p>
              <div className="proj-editorial__meta">
                <div className="proj-editorial__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="proj-editorial__tag">
                      {tag}
                    </span>
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

/** Editorial showcase of top featured products (separate from Projects grid). */
function FeaturedWork() {
  const showcase = featuredProjects.slice(0, 3);

  return (
    <section id="featured" className="section-dark grid-bg proj-editorial">
      <ScrollReveal variant="fade">
        <header className="proj-editorial__header">
          <p className="eyebrow">Featured</p>
          <div className="proj-editorial__header-row">
            <h2 className="proj-editorial__section-title">Selected Work</h2>
            <a href="#projects" className="proj-section-count" data-cursor-hover>
              All →
            </a>
          </div>
        </header>
      </ScrollReveal>

      <div className="proj-editorial__list">
        {showcase.map((project, index) => (
          <FeaturedItem key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedWork;
