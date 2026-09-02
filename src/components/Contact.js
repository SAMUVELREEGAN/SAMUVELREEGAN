import { personalInfo } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

function Contact() {
  return (
    <section id="contact" className="content-block">
      <ScrollReveal>
        <div className="llg text-grey400 pb-2">Contact</div>
        <p className="p1 text-grey300 pb-4">
          Open to full-time roles, freelance projects, and collaborations
        </p>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className="contact-grid">
          <a href={`mailto:${personalInfo.email}`} className="contact-item border1 borderr16 decor" data-cursor-hover>
            <span className="ls3 text-grey200">Email</span>
            <span className="lm text-grey400 pt-1">{personalInfo.email}</span>
          </a>
          <a
            href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
            className="contact-item border1 borderr16 decor"
            data-cursor-hover
          >
            <span className="ls3 text-grey200">Phone</span>
            <span className="lm text-grey400 pt-1">{personalInfo.phone}</span>
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item border1 borderr16 decor"
            data-cursor-hover
          >
            <span className="ls3 text-grey200">GitHub</span>
            <span className="lm text-grey400 pt-1">@SAMUVELREEGAN</span>
          </a>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <a href={`mailto:${personalInfo.email}`} className="message_btn inline-message decor" data-cursor-hover>
          <div className="w-layout-hflex alignc justifyc gap8 px-4 py-1">
            <span className="labeltxt2 text-white">Send a Message</span>
          </div>
        </a>
      </ScrollReveal>
    </section>
  );
}

export default Contact;
