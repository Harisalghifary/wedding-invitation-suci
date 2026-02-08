import { motion } from 'framer-motion';
import LazyImage from '../shared/LazyImage';
import { AnimateOnScroll, StaggerOnScroll, MotionChild } from '../shared/motion/MotionWrapper';
import { floatFromLeft, floatFromRight, viewportConfig } from '../shared/motion/variants';

export default function FooterSection() {
    const photos = [
        '/assets/footer_1.png',
        '/assets/footer_2.png',
        '/assets/footer_3.png',
    ];

    return (
        <footer className="bg-primary relative overflow-hidden">

            {/* Love 1 - Top Left */}
            <motion.img
                src="/assets/love_1.gif"
                alt=""
                className="absolute top-20 -left-6 w-[82px] h-[74px] object-cover scale-150 pointer-events-none rotate-[-15deg]"
                loading="lazy"
                decoding="async"
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                variants={floatFromLeft}
                transition={{ delay: 0.2 }}
            />

            {/* Love 2 Dark - Left Center */}
            <motion.img
                src="/assets/love_2.gif"
                alt=""
                className="absolute top-1/2 -translate-y-1/2 -left-8 w-[94px] h-[94px] object-cover scale-150 pointer-events-none"
                loading="lazy"
                decoding="async"
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                variants={floatFromLeft}
                transition={{ delay: 0.3 }}
            />

            {/* Love 2 Dark - Right Center */}
            <motion.img
                src="/assets/love_2.gif"
                alt=""
                className="absolute top-1/4 -translate-y-1/2 -right-8 w-[94px] h-[94px] object-cover scale-x-[-1.50] scale-y-[1.50] pointer-events-none"
                loading="lazy"
                decoding="async"
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                variants={floatFromRight}
                transition={{ delay: 0.4 }}
            />

            {/* Main Footer Content */}
            <div className="pt-16 px-6 relative z-0 drop-shadow-xl">
                {/* Photo Frame Container */}
                <AnimateOnScroll
                    variant="fadeUp"
                    className="bg-[#5B322D] p-5 mx-auto mb-8 rounded-xl"
                    style={{
                        maxWidth: 'fit-content',
                        boxShadow: '7px 10px 25px 2px rgba(0,0,0,0.4)'
                    }}
                >
                    <StaggerOnScroll className="flex flex-col gap-[9px] mb-10">
                        {photos.map((src, i) => (
                            <MotionChild
                                key={i}
                                variant="fadeScale"
                                className="overflow-hidden rounded-xl shadow-lg"
                                style={{ width: '273px', height: '167px' }}
                            >
                                <LazyImage
                                    src={src}
                                    alt={`Wedding Photo ${i + 1}`}
                                    className="w-full h-full object-cover"
                                    style={{ imageRendering: 'auto' }}
                                />
                            </MotionChild>
                        ))}
                    </StaggerOnScroll>

                    {/* Wedding Date */}
                    <p className="font-dmSans text-xl text-white font-black text-center tracking-wide mb-6">
                        14.02.2026
                    </p>
                </AnimateOnScroll>

                {/* Thank You Message */}
                <AnimateOnScroll variant="fadeIn" delay={0.2}>
                    <p className="font-dmSans text-xs text-white text-center max-w-xl mx-auto px-10 mb-8 leading-relaxed">
                        Dari lubuk hati yang terdalam, kami mengucapkan terima kasih karena
                        telah menjadi bagian dari hari istimewa kami.
                    </p>
                </AnimateOnScroll>

                {/* "Terima Kasih" - Passions Conflict Script Font */}
                <AnimateOnScroll variant="fadeScale" delay={0.3}>
                    <h2
                        className="font-passions text-white text-center mb-4 tracking-tight"
                        style={{ fontSize: '80px', lineHeight: '1' }}
                    >
                        Terima Kasih
                    </h2>
                </AnimateOnScroll>

                {/* Car Illustration */}
                <AnimateOnScroll variant="slideFromLeft" delay={0.4} className="flex justify-center -mt-10">
                    <img
                        src="/assets/car.png"
                        alt="Car with Ribbon"
                        style={{ filter: 'invert(1) sepia(0.3) saturate(0.5)' }}
                        className="w-[400px] h-auto mix-blend-exclusion opacity-70"
                    />
                </AnimateOnScroll>

            </div>

            {/* Copyright Bar - Black Background */}
            <div className="bg-black w-full py-3">
                <p
                    className="font-poppins text-white text-center tracking-wide"
                    style={{ fontSize: '8px' }}
                >
                    &copy; 2026 HARIKITA. ALL RIGHTS RESERVED.
                </p>
            </div>
        </footer>
    );
}
