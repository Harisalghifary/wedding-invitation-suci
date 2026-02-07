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

      {/* Story Card with Absolutely Positioned Illustrations */}
      <div className="relative px-8 py-10 -mt-18 mb-12 z-10 max-w-2xl mx-auto">

        {/* 1. LEFT-TOP: Chapel */}
  {/* Adjusted: Increased size to w-32 and pulled it further up/left (-top-10 -left-6) */}
  <img
    src="/assets/chapel.png"
    alt="Chapel"
    className="absolute -top-10 -left-6 w-32 h-auto opacity-80 pointer-events-none"
  />

  {/* 2. RIGHT-TOP: Clinking Glasses */}
  {/* Positioned near the title. You might need to tweak 'right-12' depending on your title width */}
  <img
    src="/assets/glass.png" 
    alt="Cheers"
    className="absolute top-6 right-12 w-16 h-auto opacity-80 pointer-events-none"
  />

  {/* 3. RIGHT-BOTTOM: Candles */}
  {/* Positioned to hang off the bottom-right corner */}
  <img
    src="/assets/candle.png"
    alt="Candles"
    className="absolute -bottom-4 -right-4 w-24 h-auto opacity-80 pointer-events-none"
  />

        {/* Header */}
        <h2 className="font-josefin font-semibold text-4xl text-primary text-center mb-6">
          Our Story
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

        <p className="font-dmSans text-xs text-primary leading-relaxed text-justify">
          Seiring berjalannya waktu, perjalanan itu berlanjut hingga hari ini, ketika
          keduanya memantapkan hati untuk melangkah ke tahap yang lebih serius. Dengan
          keyakinan yang tumbuh dari proses panjang, Suci dan Seky memilih untuk mengikat
          janji dalam sebuah ikatan suci, siap melangkah bersama, saling menjaga, dan
          menua dalam doa yang sama.
        </p>
      </div>

      {/* Photo 2 - Mountain/Nature */}
      <div className="w-full ">
        <img
          src="/assets/our_story_carrousel1.png"
          alt="Our Story - Mountain Adventure"
          className="w-full h-auto object-cover"
        />
      </div>


    </section>
  );
}
