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
    <div className="relative text-center py-4">
      {/* Decorative GIF - top-right corner */}
      <img
        src={isBride ? "/assets/flower.gif" : "/assets/spark.gif"}
        alt="Decoration"
        className="absolute top-8 right-4 w-[107px] h-[107px] object-contain opacity-80 z-20"
        loading="lazy"
        decoding="async"
      />

      {/* Title */}
      <h2 className="font-josefin text-4xl font-semibold text-cream mb-4 mt-16">
        {title}
      </h2>

      {/* Wrapper for photo frame and character decoration */}
      <div className="relative inline-block mb-2">
        {/* Character decoration (bride/groom sketch) */}
        <LazyImage
          src={isBride ? "/assets/bride.gif" : "/assets/groom.gif"}
          alt="Decoration"
          className={`absolute bottom-12 scale-125 w-40 h-auto z-0 brightness-0 invert opacity-80 object-cover 
            ${isBride
              ? '-left-20'
              : '-right-20'
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
      <h3 className="font-oregano text-2xl text-cream">
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
      <div className="text-cream font-dmSans text-[13px] mt-3 px-2 text-center">
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
      <div className="p-6 sm:p-8 text-center max-w-2xl px-4 mx-auto mt-24">
        <p className="text-xs text-cream/80">
          Dengan bahagia, kami mengundang Anda untuk menjadi bagian dari pernikahan ini.
        </p>
      </div>

      {/* The Bride */}
      <ProfileCard person={weddingData.couple.bride} title="The Bride" />

      {/* The Groom */}
      <ProfileCard person={weddingData.couple.groom} title="The Groom" />

      {/* Couple illustration section */}
      <div className="relative w-full max-w-[450px] flex justify-center items-center mx-auto mt-12 drop-shadow-xl">

        <img
        src="/assets/flower.gif"
        alt="Decoration"
        className="absolute top-2 right-0 w-[107px] h-[107px] object-contain scale-150 opacity-80 z-20"
        loading="lazy"
        decoding="async"
      />

      
        {/* Couple GIF */}
        <div className="w-full h-auto">
          <LazyImage
            src="/assets/couple.gif"
            alt="Couple Illustration"
            className="w-full h-auto"
          />
        </div>

        {/* Love decorations - Top-Left over couple */}
        <img
          src="/assets/love_1_pink.gif"
          alt="Love decoration"
          className="absolute top-12 left-12 w-[100px] h-[82px] object-cover z-20 scale-125"
          onError={(e) => e.target.style.display = 'none'}
          loading="lazy"
          decoding="async"
        />
        <img
          src="/assets/love_2_pink.gif"
          alt="Love decoration"
          className="absolute top-12 left-10 w-[80px] h-[80px] object-cover z-20"
          onError={(e) => e.target.style.display = 'none'}
          loading="lazy"
          decoding="async"
        />

        {/* Bottom-left: Envelope */}
        <img
          src="/assets/envelop1.gif"
          alt="Envelope"
          className="absolute -bottom-10 -left-6 w-[133px] h-[185px] rotate-[-10deg] object-cover opacity-90"
          loading="lazy"
          decoding="async"
        />

        {/* Bottom-right: Shoes */}
        <img
          src="/assets/shoes.gif"
          alt="Shoes"
          className="absolute bottom-10 -right-0 w-[193px] h-[193px] object-cover opacity-90 scale-150"
          loading="lazy"
          decoding="async"
        />
      </div>
    </SectionWrapper>
  );
}

