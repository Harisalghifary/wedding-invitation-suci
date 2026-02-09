import { Button } from '../shared/Button';
import { weddingData } from '../../data/content';
import LazyImage from '../shared/LazyImage';
import { AnimateOnScroll, StaggerOnScroll, MotionChild } from '../shared/motion/MotionWrapper';

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
                {/* The Ceremony - Group 1: Title + venue illustration + ring */}
                <StaggerOnScroll className="text-center">
                    <MotionChild variant="fadeUp">
                        <h2 className="font-josefin font-semibold text-4xl text-primary mb-8">
                            The Ceremony
                        </h2>
                    </MotionChild>

                    {/* Venue illustration */}
                    <MotionChild variant="fadeScale" className="relative mb-6">
                        <LazyImage
                            src="/assets/gedung.png"
                            alt="Venue Illustration"
                            className="w-full max-w-lg mx-auto h-auto mix-blend-multiply opacity-90"
                        />
                        {/* Firework left - flipped to point toward center */}
                        <img
                            src="/assets/firework.gif"
                            alt="Firework"
                            className="absolute top-0 left-1/2 w-1/2 h-full object-contain pointer-events-none z-10 scale-x-[-1]"
                            loading="lazy"
                            decoding="async"
                        />
                        {/* Firework right - points toward center */}
                        <img
                            src="/assets/firework.gif"
                            alt="Firework"
                            className="absolute -top-5 right-1/2 w-1/2 h-full object-contain pointer-events-none z-10"
                            loading="lazy"
                            decoding="async"
                        />
                    </MotionChild>

                    {/* Ring icon */}
                    <MotionChild variant="fadeScale" className="mb-4">
                        <img src="/assets/ring.gif" alt="Ring Icon" className="w-[224px] h-[123px] object-cover mx-auto" loading="lazy" decoding="async" />
                    </MotionChild>
                </StaggerOnScroll>

                {/* Group 2: Date + divider + event times */}
                <StaggerOnScroll className="text-center">
                    {/* Wedding Date */}
                    <MotionChild variant="fadeUp">
                        <h3 className="font-dmSans font-black text-[40px] text-primary tracking-tightest drop-shadow-lg mb-6">
                            14 . 02 . 2026
                        </h3>
                    </MotionChild>

                    {/* Divider with Sabtu - circles at edges */}
                    <MotionChild variant="fadeUp" className="flex items-center justify-center gap-4 mb-8">
                        <div className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <div className="w-20 h-px bg-primary" />
                        </div>
                        <span className="font-loveLight text-4xl text-primary">Sabtu</span>
                        <div className="flex items-center">
                            <div className="w-20 h-px bg-primary" />
                            <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                    </MotionChild>

                    {/* Event Times - Two columns */}
                    <MotionChild variant="fadeUp" className="flex justify-center gap-12 mx-auto mb-12">
                        <div className="text-center">
                            <p className="font-loveLight text-[48px] leading-tight text-primary mb-2 drop-shadow-md">
                                {weddingData.event.akad.label}
                            </p>
                            <p className="font-dmSans text-base font-semibold text-primary">
                                {weddingData.event.akad.time}
                            </p>
                        </div>
                        <div className="text-center">
                            <p className="font-loveLight text-[48px] leading-tight text-primary mb-2 drop-shadow-md">
                                {weddingData.event.resepsi.label}
                            </p>
                            <p className="font-dmSans text-base font-semibold text-primary">
                                {weddingData.event.resepsi.time}
                            </p>
                        </div>
                    </MotionChild>
                </StaggerOnScroll>

                {/* Group 3: Venue name + address + maps button */}
                <StaggerOnScroll className="text-center">
                    {/* Venue Name */}
                    <MotionChild variant="fadeUp">
                        <h4 className="font-playfair font-bold text-2xl text-primary mt-8 mb-2 mx-auto px-4">
                            {weddingData.event.venue.name}
                        </h4>
                    </MotionChild>

                    {/* Address */}
                    <MotionChild variant="fadeUp">
                        <p className="font-dmSans text-xs text-primary mb-8">
                            {weddingData.event.venue.address}
                        </p>
                    </MotionChild>

                    {/* Google Maps Button */}
                    <MotionChild variant="fadeUp" className="flex justify-center mb-12">
                        <a href={weddingData.event.venue.mapsUrl} target="_blank" rel="noopener noreferrer">
                            <Button variant="primary" className="!px-4 !py-2 text-sm">
                                <img src="/assets/gmaps.png" alt="Google Maps" className="w-4 h-4 mr-2" />
                                Google Maps
                            </Button>
                        </a>
                    </MotionChild>
                </StaggerOnScroll>

                {/* Group 4: Ballroom Illustration - Layered Stack */}
                <AnimateOnScroll variant="fadeScale" className="my-12 relative">
                    {/* Layer 1: Base venue outline (bottom) */}
                    <LazyImage
                        src="/assets/inside-venue-polos.png"
                        alt="Ballroom Base"
                        className="w-full mix-blend-darken opacity-60 sepia-[0.15]"
                    />

                    {/* Layer 2: Animated decorations (flowers, drapes, tables) */}
                    <img
                        src="/assets/decor_venue.gif"
                        alt="Ballroom Decorations"
                        className="absolute inset-0 w-full h-full object-cover mix-blend-darken opacity-80"
                        loading="lazy"
                        decoding="async"
                    />

                    {/* Layer 3: Couple (pengantin) - centered in circle area */}
                    <img
                        src="/assets/pengantin.png"
                        alt="Bride and Groom"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[18%] h-auto z-10"
                        loading="lazy"
                        decoding="async"
                    />

                    {/* Layer 4: Circle frame (top) - rotated -4deg */}
                    <img
                        src="/assets/circle.gif"
                        alt="Circle Frame"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28%] h-auto z-20 -rotate-[4deg]"
                        loading="lazy"
                        decoding="async"
                    />
                </AnimateOnScroll>

                {/* Dresscode Section */}
                <div className="relative py-10 text-center mb-16">
                    {/* Header with bucket illustration */}
                    <AnimateOnScroll variant="fadeUp" className="relative inline-block mb-8">
                        <h3 className="font-josefin font-semibold text-4xl text-primary mx-auto w-fit">
                            Dresscode
                        </h3>

                    </AnimateOnScroll>
                    <img
                        src="/assets/bucket.png"
                        alt="Bucket decoration"
                        className="absolute -top-4 right-6 w-[140px] h-[144px] object-cover scale-125 rotate-[15deg] pointer-events-none"
                    />

                    {/* Group 5: Color circles - pop in sequentially */}
                    <StaggerOnScroll grid className="flex flex-row justify-center items-start gap-2 mb-6">
                        {dresscodeColors.map((item, index) => (
                            <MotionChild key={index} variant="scalePop" className="flex flex-col items-center">
                                <div
                                    className={`w-12 h-12 rounded-full border-2 ${item.label.includes('white') ? 'border-white' : 'border-transparent'}`}
                                    style={{ backgroundColor: item.color }}
                                />
                                <p className="font-dmSans italic text-xs text-primary mt-2 text-center whitespace-pre-line">
                                    {item.label}
                                </p>
                            </MotionChild>
                        ))}
                    </StaggerOnScroll>


                    {/* Description */}
                    <AnimateOnScroll variant="fadeUp" delay={0.3}>
                        <p className="font-dmSans text-xs text-primary text-center mt-8 px-12">
                            Para tamu mohon berkenan mengenakan warna-warna berikut sebagai dresscode pada hari istimewa kami.
                        </p>
                    </AnimateOnScroll>

                    {/* Attire - bottom-left */}
                    <LazyImage
                        src="/assets/attire.png"
                        alt="Attire"
                        className="absolute -bottom-15 -left-3 w-[151px] h-auto object-cover scale-150"
                    />
                </div>
            </div>
        </section>
    );
}
