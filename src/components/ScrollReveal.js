import { useScrollReveal } from '../hooks/useScrollReveal';

/**
 * variant: 'default' | 'up' | 'left' | 'right' | 'zoom' | 'fade' | 'hero' | 'image'
 */
function ScrollReveal({
  children,
  className = '',
  delay = 0,
  variant = 'default',
  threshold = 0.08,
  rootMargin,
}) {
  const margin = rootMargin ?? (variant === 'image' ? '0px 0px -10% 0px' : '0px 0px -6% 0px');
  const revealThreshold = variant === 'image' ? Math.max(threshold, 0.12) : threshold;
  const [ref, isVisible] = useScrollReveal(revealThreshold, margin);

  return (
    <div
      ref={ref}
      className={`reveal reveal--${variant} ${isVisible ? 'reveal--visible' : ''} ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;
