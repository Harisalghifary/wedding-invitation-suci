import { SectionWrapper } from '../shared/SectionWrapper';
import { Button } from '../shared/Button';
import { FaInstagram } from 'react-icons/fa';
import { weddingData } from '../../data/content';

const ProfileCard = ({ person, title, icon }) => (
  <div className="mb-12 text-center">
    <h3 className="font-josefin text-3xl text-cream mb-6 flex items-center justify-center gap-2">
      {title} {icon}
    </h3>

    {/* Photo with decorative frame */}
    <div className="relative inline-block mb-6">
      {/* Ornate corners placeholder */}
      <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-lightBrown" />
      <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-lightBrown" />
      <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-lightBrown" />
      <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-lightBrown" />

      {/* Crown decoration on top */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-3xl">👑</div>

      <div className="w-48 h-64 sm:w-56 sm:h-72 rounded-lg overflow-hidden border-4 border-cream">
        <img
          src={person.photo}
          alt={person.nickname}
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    {/* Name */}
    <h4 className="font-loveLight text-3xl sm:text-4xl text-cream mb-4">
      {person.fullName}
    </h4>

    {/* Instagram */}
    <a
      href={`https://instagram.com/${person.instagram.replace('@', '')}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button variant="secondary" icon={FaInstagram}>
        {person.instagram}
      </Button>
    </a>

    {/* Parents info */}
    <p className="text-cream/90 text-sm sm:text-base mt-6 max-w-md mx-auto leading-relaxed">
      {person.parents}
    </p>
  </div>
);

export default function ProfileSection() {
  return (
    <SectionWrapper id="profile" background="primary">
      {/* Introduction card */}
      <div className="bg-cream rounded-lg p-6 sm:p-8 mb-12 text-center max-w-2xl mx-auto">
        <p className="text-lg sm:text-xl text-darkBrown mb-4 font-semibold">
          Assalamu'alaikum Warahmatullah Wabarakatuh
        </p>
        <p className="text-base text-darkBrown/80">
          Dengan bahagia, kami mengundang Anda untuk menjadi bagian dari pernikahan ini.
        </p>
        <div className="flex justify-center gap-4 mt-4 text-3xl text-primary/30">
          <span>❀</span>
          <span>❀</span>
        </div>
      </div>

      <ProfileCard
        person={weddingData.couple.bride}
        title="The Bride"
        icon="❀"
      />

      <ProfileCard
        person={weddingData.couple.groom}
        title="The Groom"
        icon="✨"
      />

      {/* Suci & Seky card with couple illustration */}
      <div className="bg-cream rounded-lg p-8 text-center max-w-md mx-auto">
        <div className="text-6xl mb-4">💑</div>
        <h3 className="font-loveLight text-4xl text-primary mb-4">Suci & Seky</h3>
        <div className="flex justify-center gap-6 text-3xl text-primary/30">
          <span>💌</span>
          <span>💍</span>
        </div>
      </div>
    </SectionWrapper>
  );
}
