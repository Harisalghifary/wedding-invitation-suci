import { SectionWrapper } from '../shared/SectionWrapper';
import { weddingData } from '../../data/content';

export default function QuranSection() {
  return (
    <SectionWrapper id="quran" background="transparent">
      <div className="text-center max-w-3xl mx-auto">
        {/* Bismillah */}
        <img src="/assets/bismillah.png" alt="Bismillah" className="h-16 mx-auto mb-8" />
 

        {/* Heart decorations in corners */}
        {/* <div className="relative mb-8">
          <span className="absolute -top-4 left-0 text-2xl">♥</span>
          <span className="absolute -top-4 right-0 text-2xl">♥</span>
        </div> */}

        {/* Translation */}
        <p className="text-base sm:text-lg text-darkBrown leading-relaxed mb-6 mt-30 text-justify">
          {weddingData.quranVerse.translation}
        </p>

        {/* Citation */}
        <p className="text-sm text-darkBrown/70 italic mb-12">
          {weddingData.quranVerse.reference}
        </p>

        {/* Hibiscus flower silhouettes placeholder */}
        <div className="flex justify-center gap-8 text-primary/30 text-5xl">
          <span>❀</span>
          <span>❀</span>
        </div>
      </div>
    </SectionWrapper>
  );
}
