export const GradientWrapper = ({ children }) => {
  return (
    <div className="relative -mt-64 z-20 overflow-visible">
      {/* bg-arrum.png - shared background for Countdown + Quran sections */}
      <div
        className="absolute inset-0 bg-cover bg-top"
        style={{ backgroundImage: "url('/assets/bg-arrum.png')" }}
        aria-hidden="true"
      />

      {/* Top fade: transparent → bg-arrum.png, blends over bg-opening.png */}
      <div
        className="absolute inset-x-0 top-0 h-64 z-[1]"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(183, 142, 133, 0.6) 50%, rgba(183, 142, 133, 0.95) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content - sections inherit this background */}
      <div className="relative z-10 pt-48">
        {children}
      </div>
    </div>
  );
};
