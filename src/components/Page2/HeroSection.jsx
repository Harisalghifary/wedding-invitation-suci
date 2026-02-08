import { useState, useEffect } from 'react';

const photos = [
  '/assets/hero_carrousel1.png',
  '/assets/hero_carrousel2.png',
  '/assets/hero_carrousel3.png',
  '/assets/hero_carrousel4.png',
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative py-16 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Base background - bg-opening.png, extended beyond bounds to hide transparent edges */}
      <div
        className="absolute -inset-8 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/bg-opening.png')" }}
        aria-hidden="true"
      />

      <div className="relative z-30 flex flex-col items-center text-center text-cream max-w-6xl mx-auto">
        <h2 className="font-loveLight text-6xl sm:text-6xl md:text-7xl mb-8">
          The wedding of
        </h2>

        {/* Carousel with decorative shapes */}
        <div className="relative mb-12 max-w-[402px] w-full" style={{ aspectRatio: '402/638' }}>

          {/* Love GIF - Top Left (flipped) */}
          <img
            src="/assets/love_3.gif"
            alt="Love decoration"
            className="absolute -left-4 -top-4 w-[123px] h-[166px] object-contain z-30 scale-x-[-0.5] scale-y-[0.5] saturate-150 contrast-150"
            loading="lazy"
            decoding="async"
            fetchPriority="low"
          />

          {/* Love GIF - Top Right */}
          <img
            src="/assets/love_3.gif"
            alt="Love decoration"
            className="absolute -right-4 top-20 w-[123px] h-[166px] object-contain scale-50 contrast-150 saturate-150 z-30"
            loading="lazy"
            decoding="async"
            fetchPriority="low"
          />

 

          {/* Carousel */}
          <div className="relative w-full h-full z-20 overflow-hidden rounded-lg shadow-2xl">
            {photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Wedding Photo ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
              />
            ))}
          </div>

        </div>
         {/* Spark GIF - Bottom Left */}
          <img
            src="/assets/spark.gif"
            alt="Spark decoration"
            className="absolute -left-6 -bottom-12 w-[107px] h-[107px] scale-75 object-cover z-30"
            loading="lazy"
            decoding="async"
            fetchPriority="low"
          />

          {/* Spark GIF - Bottom Right */}
          <img
            src="/assets/spark.gif"
            alt="Spark decoration"
            className="absolute -right-6 -bottom-0 w-[107px] h-[107px] object-cover scale-75 z-30"
            loading="lazy"
            decoding="async"
            fetchPriority="low"
          />
      </div>
    </section>
  );
}
