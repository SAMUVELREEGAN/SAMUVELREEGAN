import { primarySkills, otherSkills } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

function SkillCard({ skill, primary = false }) {
  return (
    <div className={`skill-card ${primary ? 'skill-card--primary' : ''}`} data-cursor-hover>
      <img src={skill.icon} alt="" className="skill-card__icon" aria-hidden="true" />
      <span className="lm2 text-grey300">{skill.name}</span>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="content-block">
      <ScrollReveal>
        <div className="llg text-grey400 pb-2">Skills</div>
        <p className="p1 text-grey300 pb-4">
          Primary expertise in React, React Native, Node.js, Express, MySQL & MongoDB
        </p>
      </ScrollReveal>

      <ScrollReveal delay={80}>
        <h3 className="lm text-grey300 pb-3">Primary Skills</h3>
      </ScrollReveal>
      <div className="skills-grid">
        {primarySkills.map((skill, i) => (
          <ScrollReveal key={skill.name} delay={100 + i * 50}>
            <SkillCard skill={skill} primary />
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={120}>
        <h3 className="lm text-grey300 pb-3 pt-6">Also Proficient In</h3>
      </ScrollReveal>
      <div className="skills-grid">
        {otherSkills.map((skill, i) => (
          <ScrollReveal key={skill.name} delay={140 + i * 40}>
            <SkillCard skill={skill} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

export default Skills;
