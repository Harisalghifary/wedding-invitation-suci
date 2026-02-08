import { weddingData } from '../../data/content';

export default function QuranSection() {
  return (
    <section
      id="quran"
      className="relative px-6 overflow-visible"
      style={{
        paddingTop: '80px',
        paddingBottom: '200px',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Bismillah */}
        <div className="text-center" style={{ marginBottom: '138px' }}>
          <img src="/assets/bismillah.png" alt="Bismillah" className="w-25 mx-auto" />
        </div>

        {/* Translation */}
        <div className="max-w-2xl mx-auto mb-16">
          <p className="text-xs sm:text-base text-darkBrown mb-4 text-center">
            {weddingData.quranVerse.translation}
          </p>

          {/* Citation */}
          <p className="text-xs text-darkBrown font-bold text-center">
            {weddingData.quranVerse.reference}
          </p>
        </div>
      </div>

      {/* Flower Frame - stretched at bottom, overflows into next section */}
      <div
        className="absolute left-0 right-0 z-10"
        style={{ bottom: '-120px' }}
      >
        {/* Mobile: scale-150 stretched look */}
        <img
          src="/assets/flower_frame.png"
          alt="Flower Frame"
          className="w-full h-[460px] object-cover object-top scale-150 md:hidden"
        />
        {/* Desktop: centered with max-width, no scale */}
        <img
          src="/assets/flower_frame.png"
          alt="Flower Frame"
          className="hidden md:block w-full max-w-4xl mx-auto h-[400px] object-contain"
        />
      </div>
    </section>
  );
}

