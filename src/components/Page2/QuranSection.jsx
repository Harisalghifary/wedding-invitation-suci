import { SectionWrapper } from '../shared/SectionWrapper';
import { weddingData } from '../../data/content';

export default function QuranSection() {
  return (
    <SectionWrapper id="quran" background="transparent" className='mb-12'>
      <div className="text-center min-h-91 mx-auto">
        {/* Bismillah */}
        <img src="/assets/bismillah.png" alt="Bismillah" className="w-25 mx-auto mb-34" />

        {/* Translation */}
        <p className="text-xs sm:text-lg text-darkBrown leading-relaxed px-[0.5] mb-2 mt-30 text-center">
          {weddingData.quranVerse.translation}
        </p>

        {/* Citation */}
        <p className="text-xs text-darkBrown font-bold mb-12">
          {weddingData.quranVerse.reference}
        </p>

      </div>
    </SectionWrapper>
  );
}
