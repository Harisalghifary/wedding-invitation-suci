import { useState, useEffect, useRef } from 'react';

export default function LazySection({ children, minHeight = '50vh' }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1  // Trigger when 10% visible
      }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  return (
    <div ref={ref}>
      {isVisible ? children : <div style={{ minHeight }} aria-hidden="true" />}
    </div>
  );
}

