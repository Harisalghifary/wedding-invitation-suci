import { Button } from '../shared/Button';
import { FaEnvelope } from 'react-icons/fa';

export default function InvitationGuard({ onOpen }) {
  return (
    <div
      className="fixed inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/bg-cover.png')" }}
    >


      {/* Content - All positioned absolutely */}
      <div className="relative z-10 h-full w-full text-cream">

        {/* 1. WEDDING INVITATION - Top Center */}
        <p className="absolute top-20 left-1/2 -translate-x-1/2 font-josefin text-2xl font-bold text-center whitespace-nowrap">
          Wedding Invitation
        </p>

  {/* 2. Suci - Left-Top */}
{/* Moved UP from 28% to 20% */}
<h1 className="absolute top-[20%] left-[10%] font-loveLight text-[90px] sm:text-7xl text-white leading-none z-20">
  Suci
</h1>

{/* 3. & - Center */}
{/* Moved UP from 50% to 32% */}
<p className="absolute top-[32%] left-1/2 -translate-x-1/2 -translate-y-1/2 font-loveLight text-8xl sm:text-5xl text-white z-20">
  &
</p>

{/* 4. Seky - Right-Bottom */}
{/* Moved UP from 58% to 45% */}
<h1 className="absolute top-[45%] right-[10%] font-loveLight text-[90px] sm:text-7xl text-white leading-none z-20">
  Seky
</h1>

        {/* 5. to - Bottom (above button) */}
        <p className="absolute bottom-44 left-1/2 -translate-x-1/2 font-dmSans text-xl whitespace-nowrap">
          To
        </p>
        <p className="absolute bottom-36 left-1/2 -translate-x-1/2 font-dmSans text-xl font-bold whitespace-nowrap">
          Haris dan Rezkita
        </p>

        {/* 6. Open Invitation Button - Bottom Center */}
        <div className="absolute bottom-20 text-sm font-dmSans font-bold left-1/2 -translate-x-1/2">
          <Button onClick={onOpen} icon={FaEnvelope}>
            Open Invitation
          </Button>
        </div>

      </div>
    </div>
  );
}
