import { useEffect } from 'react';

export function useParallax(ref, speed = 0.3) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let frameId = null;

    const onScroll = () => {
      if (frameId) return;
      frameId = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight && rect.bottom > 0) {
          const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
          const offset = (progress - 0.5) * speed * 80;
          element.style.transform = `translate3d(0, ${offset}px, 0) scale(${1 + progress * 0.04})`;
        }
        frameId = null;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [ref, speed]);
}
