import { Button } from '../shared/Button';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { weddingData } from '../../data/content';

const dresscodeColors = [
  { color: '#FFFFFF', border: true, label: 'broken\nwhite' },
  { color: '#C8B1A0', border: false, label: 'light\nbrown' },
  { color: '#B6928D', border: false, label: 'rose\ngold' },
  { color: '#768064', border: false, label: 'olive' },
  { color: '#754B4D', border: false, label: 'wine' },
];

export default function EventSection() {
  return (
    <section
      id="event"
      className="relative py-16 px-4 sm:px-6 md:px-8 bg-cream bg-ceremony-pattern bg-cover bg-center"
    >
      <div className="max-w-2xl mx-auto">
        {/* The Ceremony */}
        <div className="text-center">
          <h2 className="font-playfair font-bold text-4xl text-primary mb-8">
            The Ceremony
          </h2>

          {/* Venue illustration */}
          <div className="mb-6">
            <img
              src="/assets/gedung.png"
              alt="Venue Illustration"
              className="w-full max-w-lg mx-auto h-auto"
            />
          </div>

          {/* Ring icon */}
          <div className="mb-4">
            <img src="/assets/ring.gif" alt="Ring Icon" className="w-16 h-16 mx-auto" />
          </div>

          {/* Wedding Date */}
          <h3 className="font-playfair font-bold text-5xl sm:text-6xl text-primary tracking-wider mb-6">
            14 . 02 . 2026
          </h3>

          {/* Divider with Sabtu */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-20 h-px bg-primary" />
            <span className="font-loveLight text-2xl text-primary">Sabtu</span>
            <div className="w-20 h-px bg-primary" />
          </div>

          {/* Event Times - Two columns */}
          <div className="grid grid-cols-2 gap-8 max-w-md mx-auto mb-8">
            <div className="text-center">
              <p className="font-loveLight text-3xl text-primary mb-2">
                {weddingData.event.akad.label}
              </p>
              <p className="font-dmSans text-lg text-primary">
                {weddingData.event.akad.time}
              </p>
            </div>
            <div className="text-center">
              <p className="font-loveLight text-3xl text-primary mb-2">
                {weddingData.event.resepsi.label}
              </p>
              <p className="font-dmSans text-lg text-primary">
                {weddingData.event.resepsi.time}
              </p>
            </div>
          </div>

          {/* Venue Name */}
          <h4 className="font-playfair font-bold text-2xl text-primary mt-8 mb-2">
            {weddingData.event.venue.name}
          </h4>

          {/* Address */}
          <p className="font-dmSans text-base text-primary mb-6">
            {weddingData.event.venue.address}
          </p>

          {/* Google Maps Button */}
          <div className="flex justify-center mb-12">
            <a href={weddingData.event.venue.mapsUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" icon={FaMapMarkedAlt}>
                Google Maps
              </Button>
            </a>
          </div>
        </div>

        {/* Ballroom Illustration */}
        <div className="my-12">
          <img
            src="/assets/decor_venue.gif"
            alt="Ballroom Decoration"
            className="w-full rounded-lg"
          />
        </div>

        {/* Dresscode Section */}
        <div className=" px-8 py-10">
          <h3 className="font-playfair font-bold text-3xl text-primary text-center mb-8">
            Dresscode <span className="text-3xl">❀</span>
          </h3>

          {/* Color circles - 5 in one row */}
          <div className="flex flex-row justify-center items-start gap-4 mb-6">
            {dresscodeColors.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={`w-16 h-16 rounded-full${item.border ? ' border-2 border-primary' : ''}`}
                  style={{ backgroundColor: item.color }}
                />
                <p className="font-dmSans italic text-xs text-primary mt-2 text-center whitespace-pre-line">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="font-dmSans text-sm text-primary text-center leading-relaxed mt-8 px-4">
            Para tamu mohon berkenan mengenakan warna-warna berikut sebagai dresscode pada hari istimewa kami.
          </p>

          {/* Dress & Suit Icons */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <span className="text-4xl">👗</span>
            <span className="text-4xl">🤵</span>
          </div>
        </div>
      </div>
    </section>
  );
}
