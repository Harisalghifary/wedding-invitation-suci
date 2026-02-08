import { memo, useMemo } from 'react';

const GallerySection = memo(function GallerySection() {
  // Memoize photos array to prevent recreation on each render
  const photos = useMemo(() => Array.from({ length: 12 }, (_, i) => i + 1), []);

  return (
    <section id="gallery" className="bg-gradient-to-b from-[#E8E1D8] to-primary py-16 px-6">
      {/* Fixed width container - 353px, centered */}
      <div className="mx-auto" style={{ width: '353px' }}>
        {/* 3x4 Grid: 109x171px cells, 13px gaps */}
        <div className="grid grid-cols-3 gap-[13px]">
          {photos.map((num) => (
            <div
              key={num}
              className="w-[109px] h-[171px] overflow-hidden"
            >
              <img
                src={`/assets/galeri ${num}.png`}
                alt={`Gallery Photo ${num}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default GallerySection;

