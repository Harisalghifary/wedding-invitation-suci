import { SectionWrapper } from '../shared/SectionWrapper';
import { weddingData } from '../../data/content';

export default function GallerySection() {
  return (
    <SectionWrapper id="gallery" background="primary">
      <h3 className="font-josefin text-3xl sm:text-4xl text-cream text-center mb-12">Gallery</h3>

      {/* 3x4 photo grid */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-8">
        {weddingData.gallery.map((photo) => (
          <div
            key={photo.id}
            className="aspect-square overflow-hidden rounded-lg bg-cream/20"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              loading="lazy"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-cream/50">📷</div>';
              }}
            />
          </div>
        ))}
      </div>

      {/* Heart decorations */}
      <div className="flex justify-center gap-4 text-4xl text-cream/30">
        <span>♥</span>
        <span>♥</span>
        <span>♥</span>
      </div>
    </SectionWrapper>
  );
}
