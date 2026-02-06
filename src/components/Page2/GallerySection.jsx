const photos = Array.from({ length: 12 }, (_, i) => i + 1);

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-primary py-16 px-6">
      {/* Fixed width container - 353px, centered */}
      <div className="mx-auto" style={{ width: '353px' }}>
        {/* 3x4 Grid: 109x171px cells, 13px gaps */}
        <div className="grid grid-cols-3 gap-[13px]">
          {photos.map((num) => (
            <div
              key={num}
              className="w-[109px] h-[171px] overflow-hidden rounded-lg"
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

      {/* Heart decorations */}
      <div className="flex justify-center gap-4 mt-12">
        <span className="text-cream text-4xl">♥</span>
        <span className="text-cream text-5xl">♥</span>
        <span className="text-cream text-4xl">♥</span>
      </div>
    </section>
  );
}
