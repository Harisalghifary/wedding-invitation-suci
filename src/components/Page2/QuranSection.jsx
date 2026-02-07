import { weddingData } from '../../data/content';

export default function QuranSection() {
  return (
    <section
      id="quran"
      className="relative px-6"
      style={{
        minHeight: '100vh',
        paddingTop: '80px',
        paddingBottom: '120px',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Bismillah */}
        <div className="text-center mb-12">
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

      {/* Flower Frame - Full Width Bottom */}
      <img
        src="/assets/flower_frame.png"
        alt="Flower Frame"
        className="absolute bottom-0 left-0 w-full z-10"
      />
    </section>
  );
}
