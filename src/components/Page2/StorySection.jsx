export default function StorySection() {
  return (
    <section id="story" className="bg-cream bg-ceremony-pattern bg-cover bg-center py-0">
      {/* Photo 1 - Dining table */}
      <div className="w-full">
        <img
          src="/assets/our_story_photo.png"
          alt="Our Story - Dining Together"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Story Card - Cream background */}
      <div className="px-8 py-10 -mt-8 relative z-10 max-w-2xl mx-auto">
        {/* Header */}
        <h2 className="font-playfair font-bold text-3xl text-primary text-center mb-6">
          Our Story 🥂
        </h2>

        {/* Paragraph 1 */}
        <p className="font-dmSans text-xs text-primary leading-relaxed text-justify mb-4">
          Kisah ini berawal di masa SMA, ketika pertemuan sederhana tumbuh menjadi
          kebersamaan yang bermakna. Dari hari-hari yang diisi tawa, percakapan ringan,
          hingga dukungan dalam langkah kecil maupun besar, Suci dan Seky belajar mengenal
          satu sama lain dengan tulus. Waktu berjalan, membawa keduanya melalui fase
          pertumbuhan, perubahan, dan pemahaman bahwa kebersamaan bukan sekadar hadir,
          melainkan saling menemani.
        </p>
        
        <p className="font-dmSans text-xs text-primary leading-relaxed text-justify mb-8">
          Seiring berjalannya waktu, perjalanan itu berlanjut hingga hari ini, ketika
          keduanya memantapkan hati untuk melangkah ke tahap yang lebih serius. Dengan
          keyakinan yang tumbuh dari proses panjang, Suci dan Seky memilih untuk mengikat
          janji dalam sebuah ikatan suci, siap melangkah bersama, saling menjaga, dan
          menua dalam doa yang sama.
        </p>
      </div>

      {/* Photo 2 - Mountain/Nature */}
      <div className="w-full">
        <img
          src="/assets/our_story_carrousel1.png"
          alt="Our Story - Mountain Adventure"
          className="w-full h-auto object-cover"
        />
      </div>


    </section>
  );
}
