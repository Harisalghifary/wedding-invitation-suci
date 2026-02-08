export const GradientWrapper = ({ children }) => {
  return (
    <div className="relative -mt-64 z-20 overflow-visible">
      {/* bg-arrum.png - shared background for Countdown + Quran sections */}
      <div
        className="absolute inset-0 bg-cover bg-top"
        style={{ backgroundImage: "url('/assets/bg-arrum.png')" }}
        aria-hidden="true"
      />


      {/* Content - sections inherit this background */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
