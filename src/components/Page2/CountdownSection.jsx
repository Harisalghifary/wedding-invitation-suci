import { SectionWrapper } from '../shared/SectionWrapper';
import { CountdownTimer } from '../shared/CountdownTimer';
import { weddingData } from '../../data/content';

const formatDateForGoogle = (dateString) => {
  return new Date(dateString).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
};

const formatDateForICS = (dateString) => {
  return new Date(dateString).toISOString().replace(/[-:]/g, '').split('.')[0];
};

const openGoogleCalendar = (event) => {
  const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}&dates=${formatDateForGoogle(event.startDate)}/${formatDateForGoogle(event.endDate)}`;
  window.open(googleUrl, '_blank');
};

const downloadICSFile = (event) => {
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Wedding Invitation//EN',
    'BEGIN:VEVENT',
    `UID:${Date.now()}@wedding-suci-seky.com`,
    `DTSTAMP:${formatDateForICS(new Date().toISOString())}`,
    `DTSTART:${formatDateForICS(event.startDate)}`,
    `DTEND:${formatDateForICS(event.endDate)}`,
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description}`,
    `LOCATION:${event.location}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'wedding-suci-seky.ics';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function CountdownSection() {
  const handleSaveDate = () => {
    const eventDetails = {
      title: 'Wedding of Suci & Seky',
      description: 'You are invited to the wedding celebration of Suci Kayla Febita Ratu Anarbya and Seky Prasdhika Pebransha',
      location: weddingData.event.venue.name + ', ' + weddingData.event.venue.address,
      startDate: '2026-02-14T15:30:00',
      endDate: '2026-02-14T21:30:00',
    };

    const isAppleDevice = /iPhone|iPad|iPod|Macintosh/.test(navigator.userAgent);

    if (isAppleDevice) {
      downloadICSFile(eventDetails);
    } else {
      openGoogleCalendar(eventDetails);
    }
  };

  return (
    <SectionWrapper id="countdown" background="transparent" className="relative pt-16 px-6 mb-50">

      {/* Bird decoration with ribbon - FLIPPED horizontally */}
      <div className="text-center mb-8">
        <img
          src="/assets/Bird.gif"
          alt="Birds with ribbon"
          className="w-[432px] h-[215px] mx-auto scale-x-[-1]"
        />
      </div>

      {/* S monogram - LARGER */}
      <div className="text-center mb-12">
        <img
          src="/assets/logo_ss.png"
          alt="S Monogram"
          className="w-40 h-40 mx-auto"
        />
      </div>

      {/* Countdown with Love GIFs */}
      <div className="relative max-w-lg mx-auto mb-10">

        {/* Love 1 - Left Side */}
        <img
          src="/assets/love_1.gif"
          alt="Love"
          className="absolute -left-16 top-1/2 -translate-y-1/2 w-20 h-20 z-10"
          onError={(e) => e.target.style.display = 'none'}
        />

        {/* Love 2 - Right Side */}
        <img
          src="/assets/love_2.gif"
          alt="Love"
          className="absolute -right-16 bottom-0 w-24 h-24 z-10"
          onError={(e) => e.target.style.display = 'none'}
        />

        {/* Countdown Card - 308x144 */}
        <div
          className="mx-auto bg-[#FFFAF2] rounded-2xl relative opacity-84"
          style={{ width: '308px', height: '144px', padding: '20px' }}
        >
          {/* Ribbon - Top-Right */}
          <img
            src="/assets/ribbon.gif"
            alt="Ribbon"
            className="absolute -top-4 -right-4 w-[98px] h-[102px] z-10"
            onError={(e) => e.target.style.display = 'none'}
          />

          {/* Alarm clock GIF - Bottom-Left */}
          <img
            src="/assets/alarm.gif"
            alt="Alarm Clock"
            className="absolute -left-14 rotate-[-15deg] -bottom-16 w-[145px] h-[152px] z-20"
            onError={(e) => e.target.style.display = 'none'}
          />

          {/* Countdown timer */}
          <CountdownTimer targetDate={weddingData.event.date} />
        </div>
      </div>

      {/* Save the Date button - SMALLER */}
      <div className="flex justify-center">
        <button
          onClick={handleSaveDate}
          className="inline-flex items-center gap-2 bg-primary text-cream font-dmSans font-medium px-6 py-2.5 rounded-full hover:bg-darkBrown transition-colors shadow-lg text-sm"
        >
          <img
            src="/assets/calendar.svg"
            alt="Calendar"
            className="w-4 h-4 brightness-0 invert"
          />
          Save the Date
        </button>
      </div>

    </SectionWrapper>
  );
}
