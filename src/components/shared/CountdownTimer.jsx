import { useCountdown } from '../../hooks/useCountdown';

export const CountdownTimer = ({ targetDate }) => {
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  const CountdownItem = ({ value, label }) => (
    <div className="text-center">
      <div className="font-ptSerif font-bold text-4xl text-primary">
        {String(value).padStart(2, '0')}
      </div>
      <div className="font-dmSans text-xs text-primary mt-3">{label}</div>
    </div>
  );

  return (
    <div className="grid grid-cols-4 gap-3 text-center h-full items-center">
      <CountdownItem value={days} label="Hari" />
      <CountdownItem value={hours} label="Jam" />
      <CountdownItem value={minutes} label="Menit" />
      <CountdownItem value={seconds} label="Detik" />
    </div>
  );
};
