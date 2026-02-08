import { weddingData } from '../../data/content';

export default function QuranSection() {
  return (
    <section
      id="quran"
      className="relative px-6 overflow-visible"
      style={{
        minHeight: '100vh',
        paddingTop: '80px',
        paddingBottom: '180px',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Bismillah */}
        <div className="text-center" style={{ marginBottom: '138px' }}>
          <img src="/assets/bismillah.png" alt="Bismillah" className="w-25 mx-auto" />
        </div>

        {/* Translation */}
        <div className="max-w-2xl mx-auto mb-16">
          <p className="text-xs sm:text-base text-darkBrown leading-relaxed px-8 mb-8 text-center">
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
        style={{ bottom: '-60px' }}
      >
        <img
          src="/assets/flower_frame.png"
          alt="Flower Frame"
          className="w-full h-auto max-h-[280px] object-cover object-top"
        />
      </div>
    </section>
  );
}

