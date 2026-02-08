import { lazy, Suspense } from 'react';
import ErrorBoundary from '../shared/ErrorBoundary';
import HeroSection from '../Page2/HeroSection';
import { GradientWrapper } from './GradientWrapper';
import LazySection from '../shared/LazySection';

// Lazy load below-the-fold sections for reduced initial bundle
const CountdownSection = lazy(() => import('../Page2/CountdownSection'));
const QuranSection = lazy(() => import('../Page2/QuranSection'));
const ProfileSection = lazy(() => import('../Page2/ProfileSection'));
const EventSection = lazy(() => import('../Page2/EventSection'));
const StorySection = lazy(() => import('../Page2/StorySection'));
const GallerySection = lazy(() => import('../Page2/GallerySection'));
const InteractionSection = lazy(() => import('../Page2/InteractionSection'));
const FooterSection = lazy(() => import('../Page2/FooterSection'));

// Minimal skeleton fallback
const SectionSkeleton = ({ minHeight = '50vh' }) => (
  <div 
    className="animate-pulse bg-primary/10" 
    style={{ minHeight }} 
    aria-label="Loading section..."
  />
);

export default function MainLayout() {
  return (
    <ErrorBoundary>
    <div className="w-full overflow-x-hidden bg-primary">
      {/* Hero loads immediately for fast FCP */}
      <HeroSection />

      <GradientWrapper>
        <LazySection minHeight="100vh">
          <Suspense fallback={<SectionSkeleton minHeight="50vh" />}>
            <CountdownSection />
          </Suspense>
        </LazySection>
        <LazySection minHeight="100vh">
          <Suspense fallback={<SectionSkeleton minHeight="50vh" />}>
            <QuranSection />
          </Suspense>
        </LazySection>
      </GradientWrapper>

      <LazySection minHeight="80vh">
        <Suspense fallback={<SectionSkeleton minHeight="80vh" />}>
          <ProfileSection />
        </Suspense>
      </LazySection>

      <LazySection minHeight="80vh">
        <Suspense fallback={<SectionSkeleton minHeight="80vh" />}>
          <EventSection />
        </Suspense>
      </LazySection>

      <LazySection minHeight="60vh">
        <Suspense fallback={<SectionSkeleton minHeight="60vh" />}>
          <StorySection />
        </Suspense>
      </LazySection>

      <LazySection minHeight="60vh">
        <Suspense fallback={<SectionSkeleton minHeight="60vh" />}>
          <GallerySection />
        </Suspense>
      </LazySection>

      <LazySection minHeight="80vh">
        <Suspense fallback={<SectionSkeleton minHeight="80vh" />}>
          <InteractionSection />
        </Suspense>
      </LazySection>

      <LazySection minHeight="60vh">
        <Suspense fallback={<SectionSkeleton minHeight="60vh" />}>
          <FooterSection />
        </Suspense>
      </LazySection>
    </div>
    </ErrorBoundary>
  );
}

