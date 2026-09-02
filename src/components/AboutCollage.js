import { personalInfo, experienceIncludes } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

function AboutCollage() {
  return (
    <section id="about" className="section-dark grid-bg">
      <ScrollReveal variant="fade">
        <div className="about-header">
          <p className="eyebrow">About Me</p>
          <h2 className="about-title">
            Developer who ships <em>real products</em>
          </h2>
        </div>
      </ScrollReveal>

      <div className="about-grid">
        <div className="about-left">
          <ScrollReveal variant="zoom">
            <div className="about-photo-wrap">
              <img
                src={personalInfo.photo}
                alt={personalInfo.name}
                className="about-photo"
              />
              <div className="about-avail">
                <span className="about-avail__dot" />
                Open to Work
              </div>
              <div className="about-photo-badge">
                <span className="about-photo-badge__num">{personalInfo.yearsExperience}</span>
                <span className="about-photo-badge__label">Experience</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="up" delay={120}>
            <div className="about-facts">
              {personalInfo.facts.map((fact) => (
                <div key={fact.label} className="about-fact">
                  <span className="about-fact__icon" aria-hidden="true">{fact.icon}</span>
                  <div>
                    <div className="about-fact__label">{fact.label}</div>
                    <div className="about-fact__value">{fact.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <div className="about-right">
          <ScrollReveal variant="up">
            <p className="about-bio">{personalInfo.about}</p>
          </ScrollReveal>

          <ScrollReveal variant="fade" delay={80}>
            <div className="about-divider" />
            <p className="eyebrow" style={{ marginBottom: 16 }}>Core Strengths</p>
            <div className="about-strengths">
              {personalInfo.highlights.map((item) => (
                <div key={item.title} className="about-strength-item">
                  <span className="about-strength-arrow">→</span>
                  <span>
                    <strong style={{ color: 'var(--cream)' }}>{item.title}</strong>
                    {' — '}
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade" delay={160}>
            <div className="about-divider" />
            <p className="eyebrow" style={{ marginBottom: 16 }}>Industries</p>
            <div className="about-domains">
              {experienceIncludes.map((domain) => (
                <span key={domain} className="about-domain-pill">{domain}</span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default AboutCollage;
