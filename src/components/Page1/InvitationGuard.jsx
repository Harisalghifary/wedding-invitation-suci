export default function InvitationGuard({ onOpen }) {
  // Get guest name from URL params
  const params = new URLSearchParams(window.location.search);
  const guestName = params.get('to') || params.get('name') || '';

  return (
    <div
      className="fixed inset-0 bg-cover bg-no-repeat bg-center"
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
        <h1 className="absolute top-[25%] left-[10%] md:left-[25%] font-loveLight text-[90px] sm:text-7xl text-white leading-none z-20">
          Suci
        </h1>

        {/* 3. & - Center */}
        {/* Moved UP from 50% to 32% */}
        <p className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 font-loveLight text-8xl sm:text-5xl text-white z-20">
          &
        </p>

        {/* 4. Seky - Right-Bottom */}
        {/* Moved UP from 58% to 45% */}
        <h1 className="absolute top-[45%] right-[10%] md:right-[25%] font-loveLight text-[90px] sm:text-7xl text-white leading-none z-20">
          Seky
        </h1>

        {/* 5. to - Bottom (above button) */}
        <p className="absolute bottom-44 left-1/2 -translate-x-1/2 font-dmSans text-xl whitespace-nowrap">
          {guestName ? 'To :' : 'To :'}
        </p>
        <p className="absolute bottom-36 left-1/2 -translate-x-1/2 font-dmSans text-xl font-bold whitespace-nowrap">
          {guestName || 'Tamu Undangan'}
        </p>

        {/* 6. Open Invitation Button - Bottom Center */}
        <div className="absolute bottom-20 text-sm font-dmSans font-bold left-1/2 -translate-x-1/2">
          <button
            onClick={onOpen}
            className="px-6 py-3 rounded-full font-dmSans font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl bg-primary text-cream hover:bg-primary/90"
          >
            <img src="/assets/icon_envelop.png" alt="Envelope" className="w-5 h-5 object-contain" />
            Open Invitation
          </button>
        </div>

      </div>
    </div>
  );
}
