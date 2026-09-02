import { personalInfo } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

function HeroSection() {
  return (
    <section id="hero" className="hero-editorial">
      {/* Orange top bar */}
      <div className="hero-editorial__stripe">
        <span className="hero-editorial__stripe-label">
          {personalInfo.role} · {personalInfo.location}
        </span>
        <span className="hero-editorial__stripe-status">
          <span className="hero-editorial__stripe-dot" />
          Available for new projects
        </span>
      </div>

      {/* Big name + aside */}
      <div className="hero-editorial__body">
        <ScrollReveal variant="hero" threshold={0.01}>
          <h1 className="hero-editorial__title">
            {personalInfo.name.split(' ')[0]}
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={220} variant="right" threshold={0.01}>
          <div className="hero-editorial__aside">
            <p className="hero-editorial__role">
              <strong>Full-Stack Developer</strong> — building scalable
              web &amp; mobile products with React, Node.js &amp; React Native.
            </p>
            <div className="hero-editorial__ctas">
              <a href="#projects" className="hero-cta-primary" data-cursor-hover>
                See My Work →
              </a>
              <a href={`mailto:${personalInfo.email}`} className="hero-cta-secondary" data-cursor-hover>
                Let's Talk
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Stats strip */}
      <div className="hero-editorial__stats">
        {[
          { num: '3+', label: 'Years Experience' },
          { num: '10+', label: 'Projects Built' },
          { num: '5',  label: 'Live Products' },
          { num: '2',  label: 'Companies' },
        ].map((s, i) => (
          <ScrollReveal key={s.label} delay={i * 70} threshold={0.01} className="hero-stat">
            <div className="hero-stat__num">{s.num}</div>
            <div className="hero-stat__label">{s.label}</div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
