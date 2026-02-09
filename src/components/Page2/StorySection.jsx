import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import LazyImage from '../shared/LazyImage';
import { AnimateOnScroll, StaggerOnScroll, MotionChild } from '../shared/motion/MotionWrapper';
import { floatFromLeft, floatFromRight, viewportConfig } from '../shared/motion/variants';

export default function StorySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [topPhotoIndex, setTopPhotoIndex] = useState(0);

  // Top photo dissolve images
  const topPhotos = useMemo(() => [
    '/assets/os-top-1.gif',
    '/assets/os-top-2.gif',
  ], []);

  // Memoize carousel images to prevent recreation
  const carouselImages = useMemo(() =>
    Array.from({ length: 5 }, (_, i) => `/assets/sc-${i + 1}.png`),
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
      {/* Photo 1 - Dissolve transition between two photos (keep CSS transition) */}
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
      <AnimateOnScroll variant="fadeUp" className="relative px-8 py-10 mt-10 mb-12 z-10 max-w-2xl mx-auto">

        {/* 1. LEFT-TOP: Chapel */}
        <motion.div
          className="absolute -top-10 -left-12 w-[170px] h-[196px] pointer-events-none"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={floatFromLeft}
          transition={{ delay: 0.3 }}
        >
          <LazyImage
            src="/assets/chapel.png"
            alt="Chapel"
            className="w-full h-full opacity-80 object-cover scale-125"
          />
        </motion.div>

        {/* 2. RIGHT-TOP: Clinking Glasses */}
        <motion.div
          className="absolute top-6 right-5 w-[131px] h-[120px] pointer-events-none"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={floatFromRight}
          transition={{ delay: 0.4 }}
        >
          <LazyImage
            src="/assets/glass.png"
            alt="Cheers"
            className="w-full h-full object-cover scale-125 opacity-80"
          />
        </motion.div>

        {/* 3. RIGHT-BOTTOM: Candles */}
        <motion.div
          className="absolute -bottom-10 -right-8 w-[127px] h-[160px] pointer-events-none"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={floatFromRight}
          transition={{ delay: 0.5 }}
        >
          <LazyImage
            src="/assets/candle.png"
            alt="Candles"
            className="w-full h-full scale-x-[-1.25] scale-y-[1.25] object-cover opacity-80"
          />
        </motion.div>

        {/* Header + Paragraphs */}
        <StaggerOnScroll>
          <MotionChild variant="fadeUp">
            <h2 className="font-josefin font-semibold text-4xl text-primary text-center mb-6">
              Our Story
            </h2>
          </MotionChild>

          {/* Paragraph 1 */}
          <MotionChild variant="fadeUp">
            <p className="font-dmSans text-xs text-primary leading-relaxed text-justify mb-4 mt-16">
              Kisah ini berawal di masa SMA, ketika pertemuan sederhana tumbuh menjadi
              kebersamaan yang bermakna. Dari hari-hari yang diisi tawa, percakapan ringan,
              hingga dukungan dalam langkah kecil maupun besar, Suci dan Seky belajar mengenal
              satu sama lain dengan tulus. Waktu berjalan, membawa keduanya melalui fase
              pertumbuhan, perubahan, dan pemahaman bahwa kebersamaan bukan sekadar hadir,
              melainkan saling menemani.
            </p>
          </MotionChild>

          <MotionChild variant="fadeUp">
            <p className="font-dmSans text-xs text-primary leading-relaxed text-justify mb-8">
              Seiring berjalannya waktu, perjalanan itu berlanjut hingga hari ini, ketika
              keduanya memantapkan hati untuk melangkah ke tahap yang lebih serius. Dengan
              keyakinan yang tumbuh dari proses panjang, Suci dan Seky memilih untuk mengikat
              janji dalam sebuah ikatan suci, siap melangkah bersama, saling menjaga, dan
              menua dalam doa yang sama.
            </p>
          </MotionChild>
        </StaggerOnScroll>
      </AnimateOnScroll>

      {/* Auto-sliding Carousel */}
      <AnimateOnScroll variant="fadeIn" className="w-full overflow-hidden relative">
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
      </AnimateOnScroll>
    </section>
  );
}
