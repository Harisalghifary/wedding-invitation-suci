import { useState } from 'react';
import { weddingData } from '../../data/content';

// ─── Wishes Section ─────────────────────────────────────────────────────────

function WishesSection() {
  const [name, setName] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('name') || '';
  });
  const [message, setMessage] = useState('');
  const [wishes, setWishes] = useState(() => {
    const saved = localStorage.getItem('weddingWishes');
    return saved ? JSON.parse(saved) : [];
  });

  const hasUrlName = !!new URLSearchParams(window.location.search).get('name');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newWish = {
      name: name.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString(),
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);
    localStorage.setItem('weddingWishes', JSON.stringify(updated));
    setMessage('');
  };

  return (
    <section className="bg-primary py-16 px-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="text-white text-3xl">💝</span>
          <h2 className="font-josefin font-bold text-4xl text-white">
            Wishes
          </h2>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit}>
          {/* Name field - hidden if from URL */}
          {!hasUrlName && (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama Anda"
              className="w-full bg-cream rounded-lg px-6 py-3 mb-4 font-dmSans text-primary focus:outline-none focus:ring-2 focus:ring-lightBrown"
            />
          )}

          {/* Message textarea */}
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tulis ucapan Anda di sini..."
            className="w-full bg-cream rounded-lg px-6 py-4 min-h-[128px] font-dmSans text-primary resize-y focus:outline-none focus:ring-2 focus:ring-lightBrown"
          />

          {/* Submit button - RIGHT ALIGNED */}
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="bg-[#FFFAF2] opacity-75 text-xs font-dmSans text-primary font-medium px-2 py-2 rounded-lg hover:bg-lightBrown/90 transition"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Recent wishes display */}
        <div className="bg-cream rounded-lg px-6 py-6 mt-8 max-h-96 overflow-y-auto">
          {wishes.length > 0 ? (
            wishes.slice(0, 10).map((wish, index) => (
              <div
                key={index}
                className="bg-white rounded-xl px-4 py-3 mb-3 shadow-sm last:mb-0"
              >
                <p className="font-dmSans font-bold text-sm text-primary mb-1">
                  {wish.name}
                </p>
                <p className="font-dmSans text-sm text-primary leading-relaxed">
                  {wish.message}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center font-dmSans text-sm text-primary opacity-50">
              Belum ada ucapan
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── Wedding Gift Section ───────────────────────────────────────────────────

function BankCard({ bank }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(bank.accountNumber).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
  <div className="bg-gradient-to-br from-[#764640] to-[#B16C63] rounded-lg p-6 shadow-lg flex justify-between items-center">
    {/* Left Side: Text Information */}
    <div className="flex flex-col text-left">
      <h3 className="font-josefin font-bold text-xs text-white mb-4 uppercase tracking-wide">
        {bank.bankName}
      </h3>

      {/* Account Number Section */}
      <div className="mb-3">
        <p className="font-dmSans text-[10px] text-white/80">
          Nomor rekening
        </p>
        <p className="font-dmSans text-xs text-white tracking-widest">
          {bank.accountNumber}
        </p>
      </div>

      {/* Account Name Section */}
      <div>
        <p className="font-dmSans text-[10px] text-white/80">
          Nama akun
        </p>
        <p className="font-dmSans text-xs text-white font-medium">
          {bank.accountName}
        </p>
      </div>
    </div>

    {/* Right Side: Icon Button */}
    <button
      onClick={handleCopy}
      className="flex-shrink-0 ml-2 hover:scale-105 transition-transform duration-200"
      aria-label="Copy Account Number"
    >
      <img
        src="/assets/money-transfer.svg"
        alt="Copy Icon"
        // Increased size (w-16) to match the large icon in your design reference
        className="w-17 h-17 object-contain opacity-90"
      />
    </button>
  </div>
);
}

function WeddingGiftSection() {
  return (
    <section className="bg-primary py-16 px-6">
      {/* Header */}
      <div className="text-center mb-6">
        <span className="text-white text-4xl block mb-2">🎁</span>
        <h2 className="font-josefin font-bold text-4xl text-white mb-6">
          Wedding Gift
        </h2>
        <p className="font-dmSans text-xs text-white leading-relaxed max-w-2xl mx-auto">
          Kehadiran Anda di acara pernikahan kami adalah hadiah terindah. Namun,
          jika Anda ingin memberikan hadiah, kami menyediakan amplop digital.
        </p>
      </div>

      {/* Bank Cards */}
      <div className="max-w-2xl mx-auto space-y-6 mt-8">
        {weddingData.bankAccounts.map((bank) => (
          <BankCard key={bank.id} bank={bank} />
        ))}
      </div>

      {/* Gift Registry Link */}
      <div className="text-center mt-12 max-w-2xl mx-auto">
        <p className="font-dmSans text-xs text-white leading-relaxed mb-6">
          Selain amplop digital, kami juga menyediakan daftar hadiah yang dapat
          dipilih untuk mempermudah Anda.
        </p>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-gradient-to-r from-[#FFFAF2] to-[#AA8B87] hover:opacity-90 text-[#764640] text-xs font-dmSans py-2 transition rounded-lg"
        >
          Daftar Pilihan Hadiah
        </a>

        <div className="mt-8">
          <span className="text-white text-5xl">🎁</span>
        </div>
      </div>
    </section>
  );
}

// ─── Combined Export ────────────────────────────────────────────────────────

export default function InteractionSection() {
  return (
    <>
      <WishesSection />
      <WeddingGiftSection />
    </>
  );
}
