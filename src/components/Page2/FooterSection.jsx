export default function FooterSection() {
  const photos = [
    '/assets/footer_1.png',
    '/assets/footer_2.png',
    '/assets/footer_3.png',
  ];

  return (
    <footer className="bg-primary">
      {/* Main Footer Content */}
      <div className="py-16 px-6">
        {/* Photo Frame Container */}
        <div
          className="bg-[#5B322D] rounded-3xl p-5 mx-auto mb-8"
          style={{ maxWidth: 'fit-content' }}
        >
          <div className="flex flex-col gap-[9px]">
            {photos.map((src, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-lg"
                style={{ width: '273px', height: '167px' }}
              >
                <img
                  src={src}
                  alt={`Wedding Photo ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Wedding Date */}
        <p className="font-dmSans text-xl text-white text-center tracking-wide mb-6">
          14.02.2026
        </p>

        {/* Thank You Message */}
        <p className="font-dmSans text-xs text-white text-center leading-relaxed max-w-xl mx-auto mb-8">
          Dari lubuk hati yang terdalam, kami mengucapkan terima kasih karena
          telah menjadi bagian dari hari istimewa kami.
        </p>

        {/* "Terima Kasih" - Passions Conflict Script Font */}
        <h2
          className="font-passions text-white text-center mb-8"
          style={{ fontSize: '80px', lineHeight: '1' }}
        >
          Terima Kasih
        </h2>

        {/* Car Illustration */}
        <div className="flex justify-center mb-8">
          <img
            src="/assets/logo_ss.png"
            alt="Car with Ribbon"
            className="w-40 h-auto"
          />
        </div>

      </div>

      {/* Copyright Bar - Black Background */}
      <div className="bg-black w-full py-3">
        <p
          className="font-poppins text-white text-center tracking-wide"
          style={{ fontSize: '8px' }}
        >
          © 2026 HARIKITA. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
