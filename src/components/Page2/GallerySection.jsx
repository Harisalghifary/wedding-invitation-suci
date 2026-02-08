import { memo, useMemo } from 'react';
import LazyImage from '../shared/LazyImage';

const GallerySection = memo(function GallerySection() {
  // Memoize photos array to prevent recreation on each render
  const photos = useMemo(() => Array.from({ length: 12 }, (_, i) => i + 1), []);

  return (
    <section id="gallery" className="bg-gradient-to-b from-[#E8E1D8] to-primary py-24 px-6 relative">
      {/* Fixed width container - 353px, centered */}
      <div className="mx-auto" style={{ width: '353px' }}>
        {/* 3x4 Grid: 109x171px cells, 13px gaps */}
        <div className="grid grid-cols-3 gap-[13px]">
          {photos.map((num) => (
            <div
              key={num}
              className="w-[109px] h-[171px] overflow-hidden"
            >
              <LazyImage
                src={`/assets/galeri ${num}.png`}
                alt={`Gallery Photo ${num}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom decorations */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-end gap-4 z-10">
        <img
          src="/assets/love_1.gif"
          alt="Love decoration"
          className="w-12 h-12"
        />
        <img
          src="/assets/love_2_dark.gif"
          alt="Love decoration"
          className="w-16 h-16"
        />
      </div>
    </section>
  );
});

export default GallerySection;

