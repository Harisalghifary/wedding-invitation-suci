import { useState, useEffect, useRef } from 'react';

const calculateTimeLeft = (targetMs, nowMs) => {
  const difference = targetMs - nowMs;

  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return { days: 0, hours: 0, minutes: 0, seconds: 0 };
};

export const useCountdown = (targetDate) => {
  const targetMs = +new Date(targetDate);
  const [timeLeft, setTimeLeft] = useState(() => 
    calculateTimeLeft(targetMs, Date.now())
  );
  const lastSecondRef = useRef(-1);

  useEffect(() => {
    let frameId;

    const tick = () => {
      const now = Date.now();
      const diff = targetMs - now;
      const currentSecond = Math.floor(diff / 1000);

      // Only update state when second changes (not every frame)
      if (currentSecond !== lastSecondRef.current) {
        lastSecondRef.current = currentSecond;
        setTimeLeft(calculateTimeLeft(targetMs, now));
      }

      if (diff > 0) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [targetMs]);

  return timeLeft;
};

