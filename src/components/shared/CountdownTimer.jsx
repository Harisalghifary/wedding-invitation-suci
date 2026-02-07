import { useCountdown } from '../../hooks/useCountdown';

export const CountdownTimer = ({ targetDate }) => {
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  const CountdownItem = ({ value, label }) => (
    <div className="text-center">
      <div className="font-playfair font-semibold text-4xl text-primary">
        {String(value).padStart(2, '0')}
      </div>
      <div className="font-dmSans text-sm text-primary mt-2">{label}</div>
    </div>
  );

  return (
    <div className="grid grid-cols-4 gap-10 text-center">
      <CountdownItem value={days} label="Hari" />
      <CountdownItem value={hours} label="Jam" />
      <CountdownItem value={minutes} label="Menit" />
      <CountdownItem value={seconds} label="Detik" />
    </div>
  );
};
