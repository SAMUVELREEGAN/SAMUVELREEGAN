import { experience, education } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

function Experience() {
  return (
    <section id="experience" className="content-block">
      <ScrollReveal>
        <div className="llg text-grey400 pb-2">Experience</div>
      </ScrollReveal>

      <div className="experience-stack">
        {experience.map((job, i) => (
          <ScrollReveal key={job.id} delay={80 + i * 80}>
            <article className="experience-card border1 borderr16">
              <div className="w-layout-hflex justifysb alignc flex-wrap gap8">
                <div>
                  <h3 className="lxl2 text-grey400">{job.role}</h3>
                  <p className="lm text-grey200 pt-1">{job.company}</p>
                </div>
                <span className="period-pill">{job.period}</span>
              </div>
              <p className="p1 text-grey300 pt-3">{job.description}</p>
              <div className="w-layout-hflex gap8 flex-wrap pt-3">
                {job.tags.map((tag) => (
                  <span key={tag} className="skill-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </ScrollReveal>
        ))}

        {education.map((edu, i) => (
          <ScrollReveal key={edu.id} delay={200 + i * 80}>
            <article className="experience-card border1 borderr16">
              <div className="w-layout-hflex justifysb alignc flex-wrap gap8">
                <div>
                  <h3 className="lxl2 text-grey400">{edu.degree}</h3>
                  <p className="lm text-grey200 pt-1">
                    {edu.institution}, {edu.location}
                  </p>
                </div>
                <span className="period-pill">{edu.period}</span>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

export default Experience;
