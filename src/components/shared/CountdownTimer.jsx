import { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCountdown } from '../../hooks/useCountdown';
import { digitRoll } from './motion/variants';

// Animated digit display with roll effect
const AnimatedDigit = memo(({ value }) => (
  <AnimatePresence mode="wait">
    <motion.span
      key={value}
      initial={digitRoll.initial}
      animate={digitRoll.animate}
      exit={digitRoll.exit}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="inline-block"
    >
      {String(value).padStart(2, '0')}
    </motion.span>
  </AnimatePresence>
));

AnimatedDigit.displayName = 'AnimatedDigit';

// Memoized countdown item with animated digit
const CountdownItem = memo(({ value, label }) => (
  <div className="text-center">
    <div className="font-ptSerif font-bold text-4xl text-primary overflow-hidden pt-4 pb-2">
      <AnimatedDigit value={value} />
    </div>
    <div className="font-dmSans text-xs text-primary mt-3">{label}</div>
  </div>
));

CountdownItem.displayName = 'CountdownItem';

export const CountdownTimer = ({ targetDate }) => {
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  return (
    <div className="flex justify-center items-center gap-6 sm:gap-10">
      <CountdownItem value={days} label="Hari" />
      <CountdownItem value={hours} label="Jam" />
      <CountdownItem value={minutes} label="Menit" />
      <CountdownItem value={seconds} label="Detik" />
    </div>
  );
};
