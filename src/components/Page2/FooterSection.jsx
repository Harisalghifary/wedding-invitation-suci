import { SectionWrapper } from '../shared/SectionWrapper';

export default function FooterSection() {
  return (
    <SectionWrapper id="footer" background="primary" className="pb-8">
      <div className="text-center text-cream">
        {/* Photo collage placeholder */}
        <div className="flex justify-center gap-4 mb-8">
          <div className="w-24 h-32 bg-cream/20 rounded-lg shadow-lg" />
          <div className="w-24 h-32 bg-cream/20 rounded-lg shadow-lg transform translate-y-4" />
          <div className="w-24 h-32 bg-cream/20 rounded-lg shadow-lg" />
        </div>

        {/* Date */}
        <div className="text-5xl font-bold mb-6">14.02.2026</div>

        {/* Thank you message */}
        <p className="text-sm sm:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
          Dari lubuk hati yang terdalam, kami mengucapkan terima kasih karena
          telah menjadi bagian dari hari istimewa kami.
        </p>

        <h3 className="font-loveLight text-5xl mb-8">Terima Kasih</h3>

        {/* Car with ribbon illustration placeholder */}
        <div className="text-6xl mb-8">🚗🎀</div>

        {/* Logo */}
        <img
          src="/assets/logo_ss.png"
          alt="Logo"
          className="w-16 h-16 mx-auto mb-4 opacity-80"
        />

        {/* Copyright */}
        <p className="text-xs text-cream/60">
          © 2026 HARIKITA. ALL RIGHTS RESERVED.
        </p>

        {/* Heart decorations */}
        <div className="flex justify-center gap-4 text-2xl text-cream/30 mt-6">
          <span>♥</span>
          <span>♥</span>
        </div>
      </div>
    </SectionWrapper>
  );
}
