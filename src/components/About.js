import { personalInfo } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

function About() {
  return (
    <section id="about" className="content-block">
      <ScrollReveal>
        <div className="llg text-grey400 pb-2">About</div>
        <p className="p1 text-grey300 about-copy">{personalInfo.about}</p>
      </ScrollReveal>

      <ScrollReveal delay={120}>
        <ul className="about-list">
          {personalInfo.highlights.map((item) => (
            <li key={item.title} className="p1 text-grey300">
              <strong>{item.title}</strong> — {item.text}
            </li>
          ))}
        </ul>
      </ScrollReveal>
    </section>
  );
}

export default About;
