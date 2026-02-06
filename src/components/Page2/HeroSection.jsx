import { SectionWrapper } from '../shared/SectionWrapper';

export default function HeroSection() {
  return (
    <SectionWrapper id="hero" background="primary" className="relative pb-40">
      {/* Base background - bg-opening.png */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/bg-opening.png')" }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center text-center text-cream pt-8">
        <h2 className="font-loveLight text-5xl sm:text-6xl md:text-7xl mb-12">
          The wedding of
        </h2>

        {/* Couple photo with geometric background shapes */}
        <div className="relative mb-12">
          {/* Geometric colored shapes */}
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-lightBrown rounded-lg -z-10" />
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-200 rounded-lg -z-10" />

          {/* Main photo */}
          <div className="w-64 h-80 sm:w-80 sm:h-96 rounded-lg overflow-hidden border-4 border-cream shadow-2xl">
            <img
              src="/assets/carousel-1.png"
              alt="Suci & Seky"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Heart decorations */}
          <span className="absolute -top-4 -right-4 text-3xl">♥</span>
          <span className="absolute -bottom-4 -left-4 text-2xl">♥</span>
        </div>

        {/* Bird decoration with ribbon */}
        <div className="mb-8">
          <img
            src="/assets/Bird.gif"
            alt="Birds with ribbon"
            className="w-48 h-auto mx-auto"
          />
        </div>

        {/* Large S monogram */}
        <div className="font-loveLight text-8xl opacity-20 mb-8">S</div>
      </div>
    </SectionWrapper>
  );
}
