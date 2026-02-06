import { SectionWrapper } from '../shared/SectionWrapper';
import { FaInstagram } from 'react-icons/fa';
import { weddingData } from '../../data/content';

const ProfileCard = ({ person, title }) => {
  // Split parent info into 2 rows
  const parentLines = person.parents.split(' dari ');
  const line1 = parentLines[0] + ' dari';
  const line2 = parentLines[1];

  return (
    <div className="text-center py-12">
      {/* Title */}
      <h2 className="font-josefin text-3xl font-bold text-cream mb-8">
        {title}
      </h2>

      {/* Photo frame - transparent background, no cream bg */}
      <div className="relative inline-block mb-6">
        {/* Decorative frame borders - white/cream */}
        <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-cream" />
        <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-cream" />
        <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-cream" />
        <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-cream" />

        {/* Crown decoration on top */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-3xl">
          👑
        </div>

        {/* Photo - use couple.gif, NO background */}
        <div className="w-64 h-80 rounded-lg overflow-hidden">
          <img
            src="/assets/carousel-1.png"
            alt={person.nickname}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = person.photo; // Fallback to original photo
            }}
          />
        </div>
      </div>

      {/* Name - Oregano font, text-2xl (25px) */}
      <h3 className="font-oregano text-2xl text-cream mt-6 px-4">
        {person.fullName}
      </h3>

      {/* Instagram button - CENTERED */}
      <div className="flex justify-center mt-4">
        <a
          href={`https://instagram.com/${person.instagram.replace('@', '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-cream text-primary font-dmSans px-6 py-2 rounded-full hover:bg-lightBrown transition-colors"
        >
          <FaInstagram className="w-4 h-4" />
          {person.instagram}
        </a>
      </div>

      {/* Parent description - 2 ROWS */}
      <div className="text-cream font-dmSans text-sm mt-6 px-4 leading-relaxed">
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
      <div className="p-6 sm:p-8 mb-12 text-center max-w-2xl mx-auto">
        <p className="text-xs sm:text-xl text-cream mb-4 font-semibold">
          Assalamu'alaikum Warahmatullah Wabarakatuh
        </p>
        <p className="text-xs text-cream/80">
          Dengan bahagia, kami mengundang Anda untuk menjadi bagian dari pernikahan ini.
        </p>
        <div className="flex justify-center gap-4 mt-4 text-3xl text-primary/30">
          <span>❀</span>
          <span>❀</span>
        </div>
      </div>

      {/* The Bride */}
      <ProfileCard person={weddingData.couple.bride} title="The Bride" />

      {/* The Groom */}
      <ProfileCard person={weddingData.couple.groom} title="The Groom" />

{/* CENTER CONTENT: Increased max-width for better impact */}
  <div className="relative w-full max-w-[450px] flex justify-center items-center">
    
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
