import { SectionWrapper } from '../shared/SectionWrapper';

export default function StorySection() {
  return (
    <SectionWrapper id="story" background="cream">
      <div className="text-center max-w-3xl mx-auto">
        <h3 className="font-josefin text-3xl sm:text-4xl text-primary mb-2">Our Story</h3>
        <div className="text-3xl mb-8">🥂</div>

        {/* First photo */}
        <div className="relative mb-8">
          {/* Floral outlines in corners */}
          <span className="absolute -top-4 -left-4 text-3xl text-primary/30">❀</span>
          <span className="absolute -top-4 -right-4 text-3xl text-primary/30">❀</span>

          <div className="w-full h-64 sm:h-80 rounded-lg overflow-hidden shadow-lg bg-gray-200">
            <img
              src="/assets/story-photo1.jpg"
              alt="Our story"
              className="w-full h-full object-cover"
              onError={(e) => e.target.style.display = 'none'}
            />
          </div>
        </div>

        {/* Story text */}
        <div className="bg-cream p-6 rounded-lg mb-8">
          <p className="text-darkBrown text-base leading-relaxed text-justify mb-4">
            [Placeholder: Kami pertama kali bertemu di kampus pada tahun 2020.
            Awalnya hanya teman biasa, namun seiring waktu kami semakin dekat
            dan menyadari bahwa kami adalah pasangan yang sempurna satu sama lain.]
          </p>
          <p className="text-darkBrown text-base leading-relaxed text-justify">
            [Placeholder: Setelah 4 tahun bersama melewati suka dan duka,
            kami memutuskan untuk melanjutkan hubungan kami ke jenjang yang lebih serius.
            Dan kini, kami siap untuk memulai babak baru kehidupan kami bersama.]
          </p>
        </div>

        {/* Second photo */}
        <div className="relative">
          <span className="absolute -bottom-4 -left-4 text-3xl text-primary/30">❀</span>
          <span className="absolute -bottom-4 -right-4 text-3xl text-primary/30">❀</span>

          <div className="w-full h-64 sm:h-80 rounded-lg overflow-hidden shadow-lg bg-gray-200">
            <img
              src="/assets/story-photo2.jpg"
              alt="Our story continued"
              className="w-full h-full object-cover"
              onError={(e) => e.target.style.display = 'none'}
            />
          </div>
        </div>

        {/* Lantern and candle decorations */}
        <div className="flex justify-center gap-6 text-4xl mt-8 opacity-40">
          <span>🕯️</span>
          <span>🏮</span>
        </div>
      </div>
    </SectionWrapper>
  );
}
