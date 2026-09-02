import ScrollReveal from './ScrollReveal';

function BlueBanner() {
  return (
    <section className="section-blue blue-banner grid-bg-blue">
      <ScrollReveal variant="zoom">
        <p className="blue-banner__text">
          <strong>3+ years</strong> of building full-stack products while
          navigating the beautiful mess of real-world software —
          from web platforms to mobile apps.
        </p>
      </ScrollReveal>
    </section>
  );
}

export default BlueBanner;
