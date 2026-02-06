import { Button } from '../shared/Button';
import { FaEnvelope } from 'react-icons/fa';

export default function InvitationGuard({ onOpen }) {
  return (
    <div
      className="fixed inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/bg-cover.png')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-primary/50" />

      {/* Curtain decorations - positioned on sides */}
      <div
        className="absolute left-0 top-0 h-full w-24 sm:w-32 bg-primary/70"
        style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)' }}
      />
      <div
        className="absolute right-0 top-0 h-full w-24 sm:w-32 bg-primary/70"
        style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)' }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-cream px-4">
        <p className="font-josefin text-xs tracking-widest mb-4">WEDDING INVITATION</p>

        <h1 className="font-loveLight text-6xl sm:text-7xl mb-2">Suci</h1>
        <p className="font-loveLight text-4xl sm:text-5xl mb-2">&</p>
        <h1 className="font-loveLight text-6xl sm:text-7xl mb-8">Seky</h1>

        {/* Couple Photo Placeholder */}
        {/* <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-cream mb-6">
          <img
            src="/assets/carousel-1.png"
            alt="Suci & Seky"
            className="w-full h-full object-cover"
          />
        </div> */}

        <p className="font-josefin text-sm mb-12">Kepada: Haris dan Rezkita</p>

        <Button onClick={onOpen} icon={FaEnvelope}>
          Open Invitation
        </Button>
      </div>
    </div>
  );
}
