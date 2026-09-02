import { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

const FORM_ENDPOINT = `https://formsubmit.co/ajax/${personalInfo.email}`;

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' };

function ContactSection() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject || `Portfolio message from ${form.name}`,
          message: form.message,
          _subject: `New portfolio message from ${form.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await res.json();

      if (!res.ok || data.success === false) {
        throw new Error(data.message || 'Failed to send message.');
      }

      setStatus('success');
      setForm(INITIAL_FORM);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Something went wrong. Please try again or email directly.');
    }
  };

  return (
    <section id="contact" className="section-dark contact-editorial grid-bg">
      <ScrollReveal variant="zoom">
        <h2 className="contact-editorial__cta">
          Let&apos;s build something <em>MEANINGFUL</em> together.
        </h2>
      </ScrollReveal>

      <div className="contact-layout">
        <ScrollReveal variant="left" delay={80}>
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <p className="contact-form__label">Send a message</p>

            {/* Honeypot — hidden from users, catches bots */}
            <input
              type="text"
              name="_honey"
              className="contact-form__honey"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <div className="contact-form__row">
              <label className="contact-form__field">
                <span className="contact-form__field-label">Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="contact-form__input"
                  placeholder="Your name"
                  required
                  minLength={2}
                  disabled={status === 'sending'}
                />
              </label>
              <label className="contact-form__field">
                <span className="contact-form__field-label">Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="contact-form__input"
                  placeholder="you@email.com"
                  required
                  disabled={status === 'sending'}
                />
              </label>
            </div>

            <label className="contact-form__field">
              <span className="contact-form__field-label">Subject</span>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="contact-form__input"
                placeholder="Project inquiry, collaboration…"
                disabled={status === 'sending'}
              />
            </label>

            <label className="contact-form__field">
              <span className="contact-form__field-label">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="contact-form__textarea"
                placeholder="Tell me about your project…"
                rows={5}
                required
                minLength={10}
                disabled={status === 'sending'}
              />
            </label>

            <button
              type="submit"
              className="contact-form__submit"
              disabled={status === 'sending'}
              data-cursor-hover
            >
              {status === 'sending' ? 'Sending…' : 'Send Message →'}
            </button>

            {status === 'success' && (
              <p className="contact-form__feedback contact-form__feedback--success" role="status">
                Message sent! I&apos;ll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="contact-form__feedback contact-form__feedback--error" role="alert">
                {errorMsg}
              </p>
            )}
          </form>
        </ScrollReveal>

        <ScrollReveal variant="right" delay={120}>
          <div className="contact-editorial__links">
            <a href={`mailto:${personalInfo.email}`} className="contact-editorial__link" data-cursor-hover>
              <span className="contact-editorial__link-label">Email</span>
              <span className="contact-editorial__link-value">{personalInfo.email}</span>
              <span className="contact-editorial__link-arrow">↗</span>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-editorial__link"
              data-cursor-hover
            >
              <span className="contact-editorial__link-label">GitHub</span>
              <span className="contact-editorial__link-value">@SAMUVELREEGAN</span>
              <span className="contact-editorial__link-arrow">↗</span>
            </a>
            <a
              href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
              className="contact-editorial__link"
              data-cursor-hover
            >
              <span className="contact-editorial__link-label">Phone</span>
              <span className="contact-editorial__link-value">{personalInfo.phone}</span>
              <span className="contact-editorial__link-arrow">↗</span>
            </a>
          </div>
        </ScrollReveal>
      </div>

      <footer className="contact-editorial__footer">
        <span className="contact-editorial__footer-brand">
          {personalInfo.name.split(' ')[0]}.
        </span>
        <span>© {new Date().getFullYear()} {personalInfo.name}</span>
        <span>{personalInfo.location}</span>
      </footer>
    </section>
  );
}

export default ContactSection;
