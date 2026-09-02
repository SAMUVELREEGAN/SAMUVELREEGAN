import { experience, education, expStats, whatIOffer } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

function ExperienceCard({ item, isEducation = false }) {
  return (
    <article className="exp-card">
      <div className={`exp-card__line ${isEducation ? 'exp-card__line--edu' : ''}`} />
      <div className="exp-card__header">
        <div className="exp-card__header-left">
          <h3 className="exp-card__role">{isEducation ? item.degree : item.role}</h3>
          <p className="exp-card__company">
            {isEducation ? `${item.institution}, ${item.location}` : item.company}
          </p>
        </div>
        <div className="exp-card__header-right">
          <span className="exp-card__period">{item.period}</span>
          <span className={`exp-card__type-badge ${isEducation ? 'exp-card__type-badge--edu' : ''}`}>
            {isEducation ? 'Education' : 'Work'}
          </span>
        </div>
      </div>

      {!isEducation && (
        <>
          <p className="exp-card__desc">{item.description}</p>
          {item.highlights && (
            <ul className="exp-card__highlights">
              {item.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          )}
          <div className="exp-card__tags">
            {item.tags.map((tag) => (
              <span key={tag} className="exp-card__tag">{tag}</span>
            ))}
          </div>
        </>
      )}
    </article>
  );
}

function ExperienceTimeline() {
  return (
    <section id="experience" className="section-dark grid-bg">
      <ScrollReveal variant="fade">
        <div className="exp-section-header">
          <div>
            <p className="eyebrow">Career</p>
            <h2 className="exp-section-title">Experience &amp; Education</h2>
          </div>
          <div className="exp-section-stats">
            {expStats.map((stat) => (
              <div key={stat.label} className="exp-stat">
                <span className="exp-stat__num">{stat.num}</span>
                <span className="exp-stat__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <div className="exp-layout">
        <div className="exp-column">
          <ScrollReveal variant="up">
            <p className="exp-column__label">Work Experience</p>
          </ScrollReveal>
          {experience.map((job, i) => (
            <ScrollReveal key={job.id} variant="up" delay={80 + i * 80}>
              <ExperienceCard item={job} />
            </ScrollReveal>
          ))}
        </div>

        <div className="exp-column">
          <ScrollReveal variant="up" delay={60}>
            <p className="exp-column__label">Education</p>
          </ScrollReveal>
          {education.map((edu, i) => (
            <ScrollReveal key={edu.id} variant="up" delay={120 + i * 80}>
              <ExperienceCard item={edu} isEducation />
            </ScrollReveal>
          ))}

          <ScrollReveal variant="zoom" delay={200}>
            <div className="exp-offer-card">
              <h3 className="exp-offer-card__title">What I bring to your team</h3>
              <ul className="exp-offer-list">
                {whatIOffer.map((item) => (
                  <li key={item} className="exp-offer-item">
                    <span className="exp-offer-dot" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default ExperienceTimeline;
