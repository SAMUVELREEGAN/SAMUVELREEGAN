import { featuredProjects } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

function ProjectCard({ project }) {
  return (
    <ScrollReveal variant="zoom">
      <article className="wop-project">
        <a
          href={project.link || '#'}
          target={project.link ? '_blank' : undefined}
          rel={project.link ? 'noopener noreferrer' : undefined}
          className="wop-project__link decor"
          data-cursor-hover
          onClick={!project.link ? (e) => e.preventDefault() : undefined}
        >
          <div className="wop-project__frame">
            <img src={project.image} alt={project.title} className="wop-project__img" />
            <div className="wop-project__overlay">
              <span className="labeltxt2 text-white">{project.link ? 'View' : project.status}</span>
            </div>
          </div>
        </a>
        <div className="wop-project__meta">
          <div className="w-layout-hflex gap8 alignc">
            <span className="lm3 text-grey200">{project.category}</span>
            {project.status === 'Coming Soon' && (
              <span className="status-pill">{project.status}</span>
            )}
          </div>
          <h3 className="ds text-grey400 pt-2">{project.title}</h3>
          <p className="p1 text-grey300 pt-2">{project.description}</p>
          <div className="w-layout-hflex gap8 flex-wrap pt-3">
            {project.tags.map((tag) => (
              <span key={tag} className="skill-pill">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </ScrollReveal>
  );
}

function Projects() {
  return (
    <section id="projects" className="content-block">
      <ScrollReveal>
        <h2 className="dlg2 text-grey400 portfolio-heading">Portfolio</h2>
      </ScrollReveal>

      <div className="projects-stack">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
