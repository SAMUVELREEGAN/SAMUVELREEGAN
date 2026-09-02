import { primarySkills, skillCategories } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

function SkillsGrid() {
  return (
    <section id="skills" className="section-blue skills-editorial grid-bg-blue">
      <ScrollReveal variant="fade">
        <div className="skills-header">
          <p className="eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Tech Stack
          </p>
          <h2 className="skills-heading">
            Code × Design × Performance
          </h2>
          <p className="skills-sub">
            From pixel-perfect interfaces to scalable APIs — the tools I use to ship production-ready products.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal variant="up" delay={80}>
        <p className="skills-section-label">Core Expertise</p>
        <div className="skills-primary-row">
          {primarySkills.map((skill) => (
            <div key={skill.name} className="skill-chip-lg" data-cursor-hover>
              <img src={skill.icon} alt="" className="skill-chip-lg__icon" aria-hidden="true" />
              <span className="skill-chip-lg__name">{skill.name}</span>
              <span className="skill-chip-lg__level">{skill.level}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal variant="up" delay={150}>
        <p className="skills-section-label">Also Proficient In</p>
        <div className="skills-categories">
          {skillCategories.map((category) => (
            <div key={category.label} className="skills-category">
              <p className="skills-category__label">{category.label}</p>
              <div className="skills-category__chips">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-chip-sm" data-cursor-hover>
                    <img src={skill.icon} alt="" className="skill-chip-sm__icon" aria-hidden="true" />
                    <span className="skill-chip-sm__name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}

export default SkillsGrid;
