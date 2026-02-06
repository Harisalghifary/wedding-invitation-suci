import HeroSection from '../Page2/HeroSection';
import CountdownSection from '../Page2/CountdownSection';
import QuranSection from '../Page2/QuranSection';
import ProfileSection from '../Page2/ProfileSection';
import EventSection from '../Page2/EventSection';
import StorySection from '../Page2/StorySection';
import GallerySection from '../Page2/GallerySection';
import InteractionSection from '../Page2/InteractionSection';
import FooterSection from '../Page2/FooterSection';
import { GradientWrapper } from './GradientWrapper';

export default function MainLayout() {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />

      <GradientWrapper>
        <CountdownSection />
        <QuranSection />
      </GradientWrapper>

      <ProfileSection />
      <EventSection />
      <StorySection />
      <GallerySection />
      <InteractionSection />
      <FooterSection />
    </div>
  );
}
