import { useState, useEffect } from 'react';
import { SectionWrapper } from '../shared/SectionWrapper';

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
    <SectionWrapper id="hero" background="primary" className="relative ">
      {/* Base background - bg-opening.png */}
      <div
        className="h-[850px] w-full aspect-3/4 z-0 absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/bg-opening.png')" }}
        aria-hidden="true"
      />

      <div className="relative z-30 flex flex-col items-center text-center text-cream">
        <h2 className="font-loveLight text-6xl sm:text-6xl md:text-7xl mb-8">
          The wedding of
        </h2>

        {/* Carousel with decorative shapes */}
        <div className="relative mb-12 max-w-[402px] w-full" style={{ aspectRatio: '402/638' }}>

          {/* Love GIF - Top Left (flipped) */}
          <img
            src="/assets/love_1.gif"
            alt="Love decoration"
            className="absolute -left-8 -top-4 w-16 h-16 z-30 scale-x-[-1]"
            loading="lazy"
            decoding="async"
            fetchPriority="low"
          />

          {/* Love GIF - Top Right */}
          <img
            src="/assets/love_1.gif"
            alt="Love decoration"
            className="absolute -right-8 -top-4 w-16 h-16 z-30"
            loading="lazy"
            decoding="async"
            fetchPriority="low"
          />

          {/* Spark GIF - Bottom Left */}
          <img
            src="/assets/spark.gif"
            alt="Spark decoration"
            className="absolute -left-6 -bottom-6 w-14 h-14 z-30"
            loading="lazy"
            decoding="async"
            fetchPriority="low"
          />

          {/* Spark GIF - Bottom Right */}
          <img
            src="/assets/spark.gif"
            alt="Spark decoration"
            className="absolute -right-6 -bottom-6 w-14 h-14 z-30"
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

      </div>
    </SectionWrapper>
  );
}
