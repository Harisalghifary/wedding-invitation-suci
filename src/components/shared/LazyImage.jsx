import { useState, useEffect, useRef } from 'react';

const PLACEHOLDER = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23F5EFE7"/%3E%3C/svg%3E';

export default function LazyImage({
  src,
  alt,
  className,
  style,
  onError,
  loading,
  decoding,
  ...props
}) {
  const [imageSrc, setImageSrc] = useState(PLACEHOLDER);
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setImageSrc(src);
          observer.unobserve(el);
        }
      },
      { rootMargin: '100px' }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, [src]);

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={className}
      style={{
        ...style,
        opacity: loaded ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }}
      onLoad={() => setLoaded(true)}
      onError={onError}
      loading="lazy"
      decoding="async"
      {...props}
    />
  );
}
