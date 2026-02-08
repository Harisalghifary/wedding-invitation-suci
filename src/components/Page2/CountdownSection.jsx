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

      {/* Bird + Logo grouped together */}
      <div className="text-center mt-48">
        <img
          src="/assets/Bird.gif"
          alt="Birds with ribbon"
          className="w-[432px] h-[215px] mx-auto scale-x-[-1]"
          loading="lazy"
          decoding="async"
        />
        <img
          src="/assets/logo_ss.png"
          alt="S Monogram"
          className="w-[124px] h-[124px] mx-auto -mt-20"
        />
      </div>

      {/* Countdown + Save the Date container */}
      <div className="relative max-w-lg mx-auto mb-10">

        {/* Love 1 - Left Side */}
        <img
          src="/assets/love_1.gif"
          alt="Love"
          className="absolute -left-16 top-1/3 -translate-y-1/2 w-20 h-20 z-10"
          onError={(e) => e.target.style.display = 'none'}
          loading="lazy"
          decoding="async"
        />

        {/* Love 2 - Right Side */}
        <img
          src="/assets/love_2.gif"
          alt="Love"
          className="absolute -right-16 top-1/2 w-24 h-24 z-10"
          onError={(e) => e.target.style.display = 'none'}
          loading="lazy"
          decoding="async"
        />

        {/* Ribbon - Top-Right of card */}
        <img
          src="/assets/ribbon.gif"
          alt="Ribbon"
          className="absolute -top-10 -right-4 w-[98px] h-[102px] z-10 object-cover scale-150 rotate-[15deg]"
          onError={(e) => e.target.style.display = 'none'}
          loading="lazy"
          decoding="async"
        />

        {/* Alarm clock - Bottom-Left of card */}
        <img
          src="/assets/alarm.gif"
          alt="Alarm Clock"
          className="absolute left-[calc(50%-154px-56px)] rotate-[-15deg] top-[100px] w-[145px] h-[152px] z-20"
          onError={(e) => e.target.style.display = 'none'}
          loading="lazy"
          decoding="async"
        />

        {/* Countdown Card - 308x144 */}
        <div
          className="mx-auto bg-[#FFFAF2] rounded-2xl relative opacity-84"
          style={{ width: '308px', height: '144px', padding: '20px' }}
        >
          <CountdownTimer targetDate={weddingData.event.date} />
        </div>

        {/* Save the Date button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handleSaveDate}
            className="inline-flex items-center gap-2 bg-primary text-cream font-dmSans font-semibold px-6 py-2.5 rounded-full hover:bg-darkBrown transition-colors text-xs"
          >
            <img
              src="/assets/calendar.svg"
              alt="Calendar"
              className="w-4 h-4 brightness-0 invert"
            />
            Save the Date
          </button>
        </div>
      </div>

      {/* Love decorations - Bottom Right */}
      <img
        src="/assets/love_1_dark.gif"
        alt="Love decoration"
        className="absolute -bottom-12 right-4 w-[112px] h-[117px] object-cover z-20 scale-150"
        onError={(e) => e.target.style.display = 'none'}
        loading="lazy"
        decoding="async"
      />
      <img
        src="/assets/love_2_dark.gif"
        alt="Love decoration"
        className="absolute -bottom-12 right-16 w-[58px] h-[72px] object-cover z-20"
        onError={(e) => e.target.style.display = 'none'}
        loading="lazy"
        decoding="async"
      />

    </SectionWrapper>
  );
}
