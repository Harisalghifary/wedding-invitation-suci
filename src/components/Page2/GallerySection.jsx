import { memo, useMemo } from 'react';
import LazyImage from '../shared/LazyImage';
import { AnimateOnScroll, StaggerOnScroll, MotionChild } from '../shared/motion/MotionWrapper';

const GallerySection = memo(function GallerySection() {
  // Memoize photos array to prevent recreation on each render
  const photos = useMemo(() => Array.from({ length: 12 }, (_, i) => i + 1), []);

  return (
    <section id="gallery" className="bg-gradient-to-b from-[#E8E1D8] to-primary pt-24 px-6 relative">
      {/* Responsive container - max 353px, shrinks on small screens */}
      <div className="mx-auto w-full max-w-[353px]">
        {/* 3-column responsive grid with proportional gaps */}
        <StaggerOnScroll grid className="grid grid-cols-3 gap-[3%]">
          {photos.map((num) => (
            <MotionChild
              key={num}
              variant="fadeScale"
              className="aspect-[109/171] overflow-hidden drop-shadow-md"
            >
              <LazyImage
                src={`/assets/gallery-${num}.png`}
                alt={`Gallery Photo ${num}`}
                className="w-full h-full object-cover"
              />
            </MotionChild>
          ))}
        </StaggerOnScroll>
      </div>

      {/* Bottom decorations - normal flow, centered */}
      <AnimateOnScroll variant="fadeUp" delay={0.3} className="flex items-end justify-center gap-4 mt-8">
        <img
          src="/assets/love_2.gif"
          alt="Love decoration"
          className="w-[140px] h-[136px] scale-x-[-1] object-cover"
          loading="lazy"
          decoding="async"
        />
        <img
          src="/assets/love_1.gif"
          alt="Love decoration"
          className="w-[156px] h-[156px] object-cover"
          loading="lazy"
          decoding="async"
        />
      </AnimateOnScroll>
    </section>
  );
});

export default GallerySection;
