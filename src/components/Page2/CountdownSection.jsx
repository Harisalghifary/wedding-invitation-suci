import { SectionWrapper } from '../shared/SectionWrapper';
import { CountdownTimer } from '../shared/CountdownTimer';
import { weddingData } from '../../data/content';

export default function CountdownSection() {
  const handleSaveDate = () => {
    // Future: Generate .ics calendar file
    alert('Save the Date feature coming soon!');
  };

  return (
    <SectionWrapper id="countdown" background="transparent" className="relative pt-16 px-6">
      {/* S monogram - logo_ss.png */}
      <div className="text-center mb-8">
        <img
          src="/assets/logo_ss.png"
          alt="S Monogram"
          className="w-20 h-20 mx-auto opacity-60"
        />
      </div>

      {/* Countdown card - centered with max-width */}
      <div className="max-w-md mx-auto bg-cream rounded-3xl px-8 py-12 shadow-lg relative">
        {/* Alarm clock GIF - positioned outside bottom-left */}
        <img
          src="/assets/alarm.gif"
          alt="Alarm Clock"
          className="absolute -left-10 -bottom-10 w-20 h-20"
          onError={(e) => e.target.style.display = 'none'}
        />

        {/* Countdown timer */}
        <CountdownTimer targetDate={weddingData.event.date} />
      </div>

      {/* Save the Date button - CENTERED */}
      <div className="flex justify-center mt-8">
        <button
          onClick={handleSaveDate}
          className="inline-flex items-center gap-2 bg-primary text-cream font-dmSans font-medium px-8 py-3 rounded-full hover:bg-darkBrown transition-colors shadow-lg"
        >
          <img
            src="/assets/calendar.png"
            alt="Calendar"
            className="w-5 h-5"
            onError={(e) => e.target.style.display = 'none'}
          />
          Save the Date
        </button>
      </div>

      {/* Heart decorations */}
      <div className="flex justify-center gap-4 text-4xl text-primary/30 mt-8">
        <span>♥</span>
        <span>♥</span>
      </div>
    </SectionWrapper>
  );
}
