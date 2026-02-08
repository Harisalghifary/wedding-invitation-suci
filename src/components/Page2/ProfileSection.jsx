import { SectionWrapper } from '../shared/SectionWrapper';
import { FaInstagram } from 'react-icons/fa';
import { weddingData } from '../../data/content';

const ProfileCard = ({ person, title }) => {
  // Split parent info into 2 rows
  const parentLines = person.parents.split(' dari ');
  const line1 = parentLines[0] + ' dari';
  const line2 = parentLines[1];

  return (
    <div className="text-center py-8">
      {/* Title */}
      <h2 className="font-josefin text-4xl font-semibold text-cream mb-12">
        {title}
      </h2>

{/* Wrapper: Added mt-8 to give room for the crown at the top */}
<div className="relative inline-block mb-6 mt-8">

{/* DYNAMIC DECORATION (Sketch) */}
  <img 
    // 1. Dynamic Source: uses 'bride.gif' or 'groom.gif' based on nickname
    src={person.nickname === 'Suci' ? "/assets/bride.gif" : "/assets/groom.gif"}
    alt="Decoration"
    
    // 2. Dynamic Position & Style
    className={`absolute bottom-0 w-48 h-auto z-0 brightness-0 invert opacity-80 
      ${person.nickname === 'Suci' 
        ? '-left-28'   // Bride: Peeking from Left
        : '-right-28 scale-x-[-1]' // Groom: Peeking from Right + Flipped horizontally
      }
    `}
  />

  {/* FIX 1: Photo Frame */}
  {/* Removed 'overflow-hidden', 'rounded-lg', and fixed 'h-80' */}
  {/* Added 'relative z-10' to ensure it sits ON TOP of the GIF */}
  <div className="relative z-10 w-70 h-auto">
    <img
      src={`/assets/${person.frameImage}`}
      alt={person.nickname}
      // Changed object-cover to object-contain so the full frame is visible
      className="w-full h-auto object-contain drop-shadow-xl"
      onError={(e) => {
        e.target.src = person.photo; 
      }}
    />
  </div>
</div>
      {/* Name - Oregano font, text-2xl (25px) */}
      <h3 className="font-oregano text-2xl text-cream mt-6">
        {person.fullName}
      </h3>

      {/* Instagram button - CENTERED */}
      <div className="flex justify-center mt-4">
        <a
          href={`https://instagram.com/${person.instagram.replace('@', '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-cream text-black text-xs font-dmSans px-6 py-2 font-bold rounded-full hover:bg-lightBrown transition-colors"
        >
          <FaInstagram className="w-4 h-4" />
          {person.instagram}
        </a>
      </div>

      {/* Parent description - 2 ROWS */}
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
      {/* Introduction card - cream background, rounded */}
      <div className="p-6 sm:p-8 text-center max-w-2xl px-12 mx-auto">
        <p className="text-xs text-cream/80">
          Dengan bahagia, kami mengundang Anda untuk menjadi bagian dari pernikahan ini.
        </p>
      </div>

      {/* The Bride */}
      <ProfileCard person={weddingData.couple.bride} title="The Bride" />

      {/* The Groom */}
      <ProfileCard person={weddingData.couple.groom} title="The Groom" />

{/* CENTER CONTENT: Increased max-width for better impact */}
  <div className="relative w-full max-w-[450px] flex justify-center items-center mx-auto">
    
    <div className="w-full h-auto">
       <img 
         src="/assets/couple.gif" 
         alt="Couple Illustration" 
         className="w-full h-auto" 
       />

    </div>
    {/* Decorative Elements - Adjusted positions to be more visible */}
    <img src="/flower.svg" className="absolute -top-10 -right-8 w-16 opacity-80" alt="" />
    <img src="/envelope.svg" className="absolute -bottom-12 -left-12 w-20 opacity-90" alt="" />
    
  </div>
    </SectionWrapper>
  );
}
