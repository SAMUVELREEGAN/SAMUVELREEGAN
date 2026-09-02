import { philosophyText } from '../data/editorialData';
import ScrollReveal from './ScrollReveal';

function Philosophy() {
  const parts = philosophyText.split('Full-Stack Developer');
  return (
    <section className="section-dark philosophy grid-bg">
      <ScrollReveal variant="fade">
        <p className="eyebrow">My Approach</p>
      </ScrollReveal>
      <ScrollReveal variant="up" delay={80}>
        <p className="philosophy__text">
          {parts[0]}
          <span className="philosophy__highlight">Full-Stack Developer</span>
          {parts[1]}
        </p>
      </ScrollReveal>
    </section>
  );
}

export default Philosophy;
