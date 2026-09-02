import { useEffect, useRef, useState } from 'react';

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isTestEnv = process.env.NODE_ENV === 'test';
    if (isTouchDevice || isTestEnv) return;

    setVisible(true);
    document.body.classList.add('custom-cursor-active');

    let animationId = null;

    const animate = () => {
      ringPosRef.current.x += (mouseRef.current.x - ringPosRef.current.x) * 0.14;
      ringPosRef.current.y += (mouseRef.current.y - ringPosRef.current.y) * 0.14;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseRef.current.x}px, ${mouseRef.current.y}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPosRef.current.x}px, ${ringPosRef.current.y}px)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    const onMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseOver = (e) => {
      const target = e.target.closest('a, button, [data-cursor-hover]');
      setHovering(!!target);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      if (animationId) cancelAnimationFrame(animationId);
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className={`cursor-ring ${hovering ? 'cursor-ring--hover' : ''}`} />
    </>
  );
}

export default CustomCursor;
