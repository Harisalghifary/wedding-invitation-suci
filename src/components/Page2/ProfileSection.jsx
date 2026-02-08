import { SectionWrapper } from '../shared/SectionWrapper';
import { weddingData } from '../../data/content';
import LazyImage from '../shared/LazyImage';

const ProfileCard = ({ person, title }) => {
  // Split parent info into 2 rows
  const parentLines = person.parents.split(' dari ');
  const line1 = parentLines[0] + ' dari';
  const line2 = parentLines[1];

  const isBride = person.nickname === 'Suci';

  return (
    <div className="relative text-center py-8">
      {/* Decorative GIF - top-right corner */}
      <img
        src={isBride ? "/assets/flower.gif" : "/assets/spark.gif"}
        alt="Decoration"
        className="absolute top-0 right-4 w-16 h-16 object-contain opacity-80 z-20"
        loading="lazy"
        decoding="async"
      />

      {/* Title */}
      <h2 className="font-josefin text-4xl font-semibold text-cream mb-12">
        {title}
      </h2>

      {/* Wrapper for photo frame and character decoration */}
      <div className="relative inline-block mb-6 mt-8">
        {/* Character decoration (bride/groom sketch) */}
        <LazyImage
          src={isBride ? "/assets/bride.gif" : "/assets/groom.gif"}
          alt="Decoration"
          className={`absolute bottom-0 w-40 h-auto z-0 brightness-0 invert opacity-80
            ${isBride
              ? '-left-20'
              : '-right-16'
            }
          `}
        />

        {/* Photo Frame */}
        <div className="relative z-10 w-70 h-auto">
          <LazyImage
            src={`/assets/${person.frameImage}`}
            alt={person.nickname}
            className="w-full h-auto object-contain drop-shadow-xl"
            onError={(e) => {
              e.target.src = person.photo;
            }}
          />
        </div>
      </div>

      {/* Name - Oregano font */}
      <h3 className="font-oregano text-2xl text-cream mt-6">
        {person.fullName}
      </h3>

      {/* Instagram button */}
      <div className="flex justify-center mt-4">
        <a
          href={`https://instagram.com/${person.instagram.replace('@', '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-cream text-black text-xs font-dmSans px-6 py-2 font-bold rounded-full hover:bg-lightBrown transition-colors"
        >
          <img src="/assets/Instagram.png" alt="Instagram" className="w-4 h-4" />
          {person.instagram}
        </a>
      </div>

      {/* Parent description */}
      <div className="text-cream font-dmSans text-[13px] mt-6 px-2 text-center">
        <p>{line1}</p>
        <p>{line2}</p>
      </div>
    </div>
  );
};

export default function ProfileSection() {
  return (
    <SectionWrapper id="profile" background="primary">
      {/* Introduction card */}
      <div className="p-6 sm:p-8 text-center max-w-2xl px-12 mx-auto">
        <p className="text-xs text-cream/80">
          Dengan bahagia, kami mengundang Anda untuk menjadi bagian dari pernikahan ini.
        </p>
      </div>

      {/* The Bride */}
      <ProfileCard person={weddingData.couple.bride} title="The Bride" />

      {/* The Groom */}
      <ProfileCard person={weddingData.couple.groom} title="The Groom" />

      {/* Couple illustration section */}
      <div className="relative w-full max-w-[450px] flex justify-center items-center mx-auto">
        {/* Couple GIF */}
        <div className="w-full h-auto">
          <LazyImage
            src="/assets/couple.gif"
            alt="Couple Illustration"
            className="w-full h-auto"
          />
        </div>

        {/* Bottom-left: Envelope */}
        <img
          src="/assets/envelop1.gif"
          alt="Envelope"
          className="absolute -bottom-8 -left-8 w-20 h-20 object-contain opacity-90"
          loading="lazy"
          decoding="async"
        />

        {/* Bottom-right: Shoes */}
        <img
          src="/assets/shoes.gif"
          alt="Shoes"
          className="absolute -bottom-8 -right-8 w-20 h-20 object-contain opacity-90"
          loading="lazy"
          decoding="async"
        />
      </div>
    </SectionWrapper>
  );
}

