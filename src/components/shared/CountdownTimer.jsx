import { useCountdown } from '../../hooks/useCountdown';

export const CountdownTimer = ({ targetDate }) => {
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  const CountdownBox = ({ value, label }) => (
    <div className="flex flex-col items-center bg-cream rounded-lg p-4 shadow-md">
      <span className="text-3xl sm:text-4xl font-bold text-primary font-josefin">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-xs sm:text-sm text-darkBrown mt-1">{label}</span>
    </div>
  );

  return (
    <div className="grid grid-cols-4 gap-3 sm:gap-4 max-w-lg mx-auto">
      <CountdownBox value={days} label="Hari" />
      <CountdownBox value={hours} label="Jam" />
      <CountdownBox value={minutes} label="Menit" />
      <CountdownBox value={seconds} label="Detik" />
    </div>
  );
};
