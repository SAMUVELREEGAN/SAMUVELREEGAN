import { processSteps } from '../data/editorialData';
import ScrollReveal from './ScrollReveal';

function ProcessList() {
  return (
    <section id="process" className="section-dark process grid-bg">
      <ScrollReveal variant="fade">
        <p className="eyebrow">What I Build</p>
      </ScrollReveal>
      <ul className="process__list">
        {processSteps.map((step, index) => (
          <ScrollReveal key={step.id} variant="left" delay={index * 55}>
            <li className={`process__item process__item--${step.style}`}>
              <span className="process__label">{step.label}</span>
              <div className="process__item-right">
                <span className="process__num">0{index + 1}</span>
                <span className="process__dot" />
              </div>
            </li>
          </ScrollReveal>
        ))}
      </ul>
    </section>
  );
}

export default ProcessList;
