import { SectionWrapper } from '../shared/SectionWrapper';
import { CountdownTimer } from '../shared/CountdownTimer';
import { Button } from '../shared/Button';
import { weddingData } from '../../data/content';

export default function CountdownSection() {
  const handleSaveDate = () => {
    // Future: Generate .ics calendar file
    alert('Save the Date feature coming soon!');
  };

  return (
    <SectionWrapper id="countdown" background="cream">
      <div className="text-center">
        {/* Large S monogram with floral border */}
        <div className="font-loveLight text-7xl text-primary mb-8">S</div>

        <CountdownTimer targetDate={weddingData.event.date} />

        {/* Decorative alarm clock placeholder */}
        <div className="text-6xl my-8">⏰</div>

        <Button onClick={handleSaveDate} variant="primary">
          Save the Date
        </Button>

        {/* Heart decorations */}
        <div className="mt-8 text-4xl space-x-4">
          <span>♥</span>
          <span>♥</span>
        </div>
      </div>
    </SectionWrapper>
  );
}
