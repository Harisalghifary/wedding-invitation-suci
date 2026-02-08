import { useState, useEffect, useMemo } from 'react';
import LazyImage from '../shared/LazyImage';

export default function StorySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [topPhotoIndex, setTopPhotoIndex] = useState(0);

  // Top photo dissolve images
  const topPhotos = useMemo(() => [
    '/assets/our_story_1_optimize.gif',
    '/assets/our_story_2_optimize.gif',
  ], []);

  // Memoize carousel images to prevent recreation
  const carouselImages = useMemo(() =>
    Array.from({ length: 5 }, (_, i) => `/assets/story_carrousel${i + 1}.png`),
    []
  );

  // Auto-slide for bottom carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  // Auto-dissolve for top photo
  useEffect(() => {
    const interval = setInterval(() => {
      setTopPhotoIndex((prev) => (prev + 1) % topPhotos.length);
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(interval);
  }, [topPhotos.length]);

  return (
    <section id="story" className="bg-cream bg-ceremony-pattern bg-cover bg-center py-0">
      {/* Photo 1 - Dissolve transition between two photos */}
      <div className="w-full relative">
        {topPhotos.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Our Story ${index + 1}`}
            className={`w-full h-auto object-cover transition-opacity duration-1000 ease-in-out ${index === 0 ? 'relative' : 'absolute inset-0'
              } ${index === topPhotoIndex ? 'opacity-100' : 'opacity-0'}`}
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>

      {/* Story Card with Absolutely Positioned Illustrations */}
      <div className="relative px-8 py-10 -mt-18 mb-12 z-10 max-w-2xl mx-auto">

        {/* 1. LEFT-TOP: Chapel */}
        <LazyImage
          src="/assets/chapel.png"
          alt="Chapel"
          className="absolute -top-10 -left-6 w-32 h-auto opacity-80 pointer-events-none"
        />

        {/* 2. RIGHT-TOP: Clinking Glasses */}
        <LazyImage
          src="/assets/glass.png"
          alt="Cheers"
          className="absolute top-6 right-12 w-16 h-auto opacity-80 pointer-events-none"
        />

        {/* 3. RIGHT-BOTTOM: Candles */}
        <LazyImage
          src="/assets/candle.png"
          alt="Candles"
          className="absolute -bottom-4 -right-4 w-24 h-auto opacity-80 pointer-events-none"
        />

        {/* Header */}
        <h2 className="font-josefin font-semibold text-4xl text-primary text-center mb-6">
          Our Story
        </h2>

        {/* Paragraph 1 */}
        <p className="font-dmSans text-xs text-primary leading-relaxed text-justify mb-4">
          Kisah ini berawal di masa SMA, ketika pertemuan sederhana tumbuh menjadi
          kebersamaan yang bermakna. Dari hari-hari yang diisi tawa, percakapan ringan,
          hingga dukungan dalam langkah kecil maupun besar, Suci dan Seky belajar mengenal
          satu sama lain dengan tulus. Waktu berjalan, membawa keduanya melalui fase
          pertumbuhan, perubahan, dan pemahaman bahwa kebersamaan bukan sekadar hadir,
          melainkan saling menemani.
        </p>

        <p className="font-dmSans text-xs text-primary leading-relaxed text-justify">
          Seiring berjalannya waktu, perjalanan itu berlanjut hingga hari ini, ketika
          keduanya memantapkan hati untuk melangkah ke tahap yang lebih serius. Dengan
          keyakinan yang tumbuh dari proses panjang, Suci dan Seky memilih untuk mengikat
          janji dalam sebuah ikatan suci, siap melangkah bersama, saling menjaga, dan
          menua dalam doa yang sama.
        </p>
      </div>

      {/* Auto-sliding Carousel */}
      <div className="w-full overflow-hidden relative">
        <div
          className="flex transition-transform duration-700 ease-in-out will-change-transform"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carouselImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Story Photo ${index + 1}`}
              className="w-full h-auto object-cover flex-shrink-0"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white w-4' : 'bg-white/50'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

