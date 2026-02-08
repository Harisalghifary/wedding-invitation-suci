import { Button } from '../shared/Button';
import { weddingData } from '../../data/content';
import LazyImage from '../shared/LazyImage';

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
          <h2 className="font-josefin font-semibold text-4xl text-primary mb-8">
            The Ceremony
          </h2>

          {/* Venue illustration */}
          <div className="mb-6 ">
            <LazyImage
              src="/assets/gedung.png"
              alt="Venue Illustration"
              className="w-full max-w-lg mx-auto h-auto mix-blend-multiply opacity-90"
            />
          </div>

          {/* Ring icon */}
          <div className="mb-4">
            <img src="/assets/ring.gif" alt="Ring Icon" className="w-[224px] h-[123px] object-cover mx-auto" />
          </div>

          {/* Wedding Date */}
          <h3 className="font-dmSans font-black text-[40px] sm:text-6xl text-primary tracking-tightest drop-shadow-lg mb-6">
            14 . 02 . 2026
          </h3>

          {/* Divider with Sabtu - circles at edges */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <div className="w-20 h-px bg-primary" />
            </div>
            <span className="font-loveLight text-4xl text-primary">Sabtu</span>
            <div className="flex items-center">
              <div className="w-20 h-px bg-primary" />
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>
          </div>

          {/* Event Times - Two columns */}
          <div className="flex justify-center gap-12 mx-auto mb-12">
            <div className="text-center">
              <p className="font-loveLight text-[48px] leading-tight text-primary mb-2">
                {weddingData.event.akad.label}
              </p>
              <p className="font-dmSans text-base font-semibold text-primary">
                {weddingData.event.akad.time}
              </p>
            </div>
            <div className="text-center">
              <p className="font-loveLight text-[48px] leading-tight text-primary mb-2">
                {weddingData.event.resepsi.label}
              </p>
              <p className="font-dmSans text-base font-semibold text-primary">
                {weddingData.event.resepsi.time}
              </p>
            </div>
          </div>

          {/* Venue Name */}
          <h4 className="font-playfair font-bold text-2xl text-primary mt-8 mb-2 mx-auto px-4">
            {weddingData.event.venue.name}
          </h4>

          {/* Address */}
          <p className="font-dmSans text-xs text-primary mb-8">
            {weddingData.event.venue.address}
          </p>

          {/* Google Maps Button */}
          <div className="flex justify-center mb-12">
            <a href={weddingData.event.venue.mapsUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" className="!px-4 !py-2 text-sm">
                <img src="/assets/gmaps.png" alt="Google Maps" className="w-4 h-4 mr-2" />
                Google Maps
              </Button>
            </a>
          </div>
        </div>

        {/* Ballroom Illustration */}
        <div className="my-12 mix-blend-multiply opacity-70">
          <LazyImage
            src="/assets/inside_venue_white.gif"
            alt="Ballroom Decoration"
            className="w-full rounded-lg"
          />
        </div>

        {/* Dresscode Section */}
        <div className=" px-8 py-10">
          {/* Header with bucket illustration */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <h3 className="font-josefin font-semibold text-4xl text-primary text-center">
              Dresscode
            </h3>
            <img
              src="/assets/bucket.png"
              alt="Bucket decoration"
              className="w-12 h-12 object-contain"
            />
          </div>

          {/* Color circles - 5 in one row */}
          <div className="flex flex-row justify-center items-start gap-2 mb-6">
            {dresscodeColors.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 rounded-full border-2 ${item.label.includes('white') ? 'border-white' : 'border-transparent'}`}
                  style={{ backgroundColor: item.color }}
                />
                <p className="font-dmSans italic text-xs text-primary mt-2 text-center whitespace-pre-line">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="font-dmSans text-xs text-primary text-center mt-8 px-4">
            Para tamu mohon berkenan mengenakan warna-warna berikut sebagai dresscode pada hari istimewa kami.
          </p>

          {/* Dress & Suit Icons */}
          <div className="flex justify-center items-end gap-6 mt-6">
            <LazyImage
              src="/assets/attire.png"
              alt="Attire"
              className="w-24 h-auto object-contain"
            />
            <img
              src="/assets/shoes_dark.gif"
              alt="Shoes"
              className="w-16 h-16 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
