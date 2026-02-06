import { SectionWrapper } from '../shared/SectionWrapper';
import { Button } from '../shared/Button';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { weddingData } from '../../data/content';

export default function EventSection() {
  return (
    <SectionWrapper id="event" background="cream">
      {/* Ceremony Details */}
      <div className="text-center mb-16">
        <h3 className="font-josefin text-3xl sm:text-4xl text-primary mb-8">The Ceremony</h3>

        {/* Venue illustration placeholder */}
        <div className="text-7xl mb-6">🏛️</div>

        {/* Ring icon */}
        <div className="text-5xl mb-6">💍</div>

        {/* Date */}
        <div className="text-5xl sm:text-6xl font-bold text-primary mb-4">14.02.2026</div>
        <div className="font-loveLight text-2xl text-primary mb-8">Sabtu</div>

        {/* Times - Two columns */}
        <div className="grid grid-cols-2 gap-6 max-w-md mx-auto mb-8">
          <div>
            <p className="font-josefin font-semibold text-lg mb-2">{weddingData.event.akad.label}</p>
            <p className="text-darkBrown">{weddingData.event.akad.time}</p>
          </div>
          <div>
            <p className="font-josefin font-semibold text-lg mb-2">{weddingData.event.resepsi.label}</p>
            <p className="text-darkBrown">{weddingData.event.resepsi.time}</p>
          </div>
        </div>

        {/* Venue */}
        <p className="font-josefin font-semibold text-xl mb-2">{weddingData.event.venue.name}</p>
        <p className="text-darkBrown/80 text-sm mb-6 max-w-md mx-auto">{weddingData.event.venue.address}</p>

        <a href={weddingData.event.venue.mapsUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="primary" icon={FaMapMarkedAlt}>
            Google Maps
          </Button>
        </a>
      </div>

      {/* Dresscode Section */}
      <div className="text-center bg-primary/5 rounded-lg p-8">
        <h3 className="font-josefin text-2xl sm:text-3xl text-primary mb-6">
          Dresscode <span className="text-3xl">❀</span>
        </h3>

        {/* Color palette circles */}
        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          <div className="w-12 h-12 rounded-full bg-white border-2 border-gray-300" title="broken white" />
          <div className="w-12 h-12 rounded-full bg-amber-200" title="light brown" />
          <div className="w-12 h-12 rounded-full bg-rose-300" title="rose gold" />
          <div className="w-12 h-12 rounded-full bg-green-600" title="olive" />
          <div className="w-12 h-12 rounded-full bg-red-900" title="wine" />
        </div>

        <p className="text-darkBrown text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Para tamu mohon berkenan mengenakan warna-warna berikut sebagai dresscode pada hari istimewa kami.
        </p>

        {/* Dress & suit icons placeholder */}
        <div className="flex justify-center gap-8 text-5xl mt-6">
          <span>👗</span>
          <span>🤵</span>
        </div>
      </div>
    </SectionWrapper>
  );
}
