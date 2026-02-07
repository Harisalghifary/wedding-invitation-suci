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
        className="h-[736px] z-0 absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/bg-opening.png')" }}
        aria-hidden="true"
      />

      <div className="relative z-30 flex flex-col items-center text-center text-cream">
        <h2 className="font-loveLight text-6xl sm:text-6xl md:text-7xl mb-8">
          The wedding of
        </h2>

        {/* Carousel with decorative shapes */}
        <div className="relative mb-12 max-w-[402px] w-full" style={{ aspectRatio: '402/638' }}>


          {/* Hearts */}
          <span className="absolute -top-4 -right-4 text-3xl text-white/70">♥</span>
          <span className="absolute -bottom-4 -left-4 text-2xl text-white/70">♥</span>

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
