import { useState, useEffect, useMemo, useCallback } from 'react';
import { weddingData } from '../../data/content';
import { supabase } from '../../lib/supabase';
import { debounce } from '../../utils/debounce';

// ─── Wishes Section ─────────────────────────────────────────────────────────

function WishesSection() {
  const [name, setName] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('name') || params.get('to') || '';
  });
  const [message, setMessage] = useState('');
  const [wishes, setWishes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchingWishes, setFetchingWishes] = useState(true);
  const [error, setError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const hasUrlName = (() => {
    const params = new URLSearchParams(window.location.search);
    return !!(params.get('name') || params.get('to'));
  })();

  // Fetch wishes from Supabase
  const fetchWishes = async () => {
    if (!supabase) { setFetchingWishes(false); return; }
    try {
      setFetchingWishes(true);
      const { data, error } = await supabase
        .from('wishes')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(20);

      if (error) throw error;
      setWishes(data || []);
    } catch (err) {
      console.error('Error fetching wishes:', err);
      setError('Gagal memuat ucapan');
    } finally {
      setFetchingWishes(false);
    }
  };

  // Debounced handler for real-time updates (300ms)
  const debouncedAddWish = useMemo(
    () => debounce((newWish) => {
      setWishes((current) => {
        if (current.some((w) => w.id === newWish.id)) return current;
        return [newWish, ...current];
      });
    }, 300),
    []
  );

  // Load wishes on mount + subscribe to real-time updates
  useEffect(() => {
    fetchWishes();

    if (!supabase) return;

    const channel = supabase
      .channel('wishes_realtime')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'wishes' },
        (payload) => {
          debouncedAddWish(payload.new);
        }
      )
      .subscribe();

    return () => {
      debouncedAddWish.cancel();
      supabase.removeChannel(channel);
    };
  }, [debouncedAddWish]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) {
      setError('Mohon isi nama dan ucapan');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setSubmitSuccess(false);

      if (!supabase) throw new Error('Supabase not configured');
      const { error } = await supabase
        .from('wishes')
        .insert([{ name: name.trim(), message: message.trim() }]);

      if (error) throw error;

      setMessage('');
      setSubmitSuccess(true);

      // Force re-fetch to show the new wish immediately
      await fetchWishes();

      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (err) {
      console.error('Error submitting wish:', err);
      setError('Gagal mengirim ucapan. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  // Format relative time
  const formatDate = (dateString) => {
    const diffMs = Date.now() - new Date(dateString).getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Baru saja';
    if (diffMins < 60) return `${diffMins} menit lalu`;
    if (diffHours < 24) return `${diffHours} jam lalu`;
    if (diffDays < 7) return `${diffDays} hari lalu`;

    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <section className="bg-primary px-6">
      {/* Header */}
      <div className="text-center mb-8 relative mx-auto w-fit">
        {/* Love 4 - Left of header */}
        <img
          src="/assets/love_4.png"
          alt="Love"
          className="absolute -left-20 top-0 w-[100px] h-[100px] object-cover z-10 scale-150"
        />
        <div className="flex items-center justify-center gap-3 mb-2 mx-auto w-fit">
          <h2 className="font-josefin font-bold text-4xl text-white">
            Wishes
          </h2>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-2xl mx-auto pt-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name field - always visible, read-only if from URL */}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama Anda"
            readOnly={hasUrlName}
            className="w-full bg-cream rounded-2xl px-6 py-3 font-dmSans text-primary placeholder:text-primary/50 focus:outline-none focus:ring-2 focus:ring-lightBrown read-only:opacity-70"
            disabled={loading}
          />

          {/* Message textarea */}
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tulis ucapan Anda di sini..."
            className="w-full bg-cream rounded-2xl px-6 py-4 min-h-[128px] font-dmSans text-primary placeholder:text-primary/50 resize-y focus:outline-none focus:ring-2 focus:ring-lightBrown"
            disabled={loading}
            maxLength={500}
          />

          {/* Character count */}
          <p className="text-white/60 text-xs text-right">
            {message.length}/500 karakter
          </p>

          {/* Error message */}
          {error && (
            <p className="text-red-300 text-sm font-dmSans">{error}</p>
          )}

          {/* Success message */}
          {submitSuccess && (
            <p className="text-green-300 text-sm font-dmSans animate-fadeIn">
              Ucapan berhasil dikirim!
            </p>
          )}

          {/* Submit button - RIGHT ALIGNED */}
          <div className="flex justify-end relative">
            {/* Love 6 - Left of Submit */}
            <img
              src="/assets/love_6.png"
              alt="Love"
              className="absolute right-12 top-2 w-[56px] h-[53px] object-cover z-10 scale-150"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-[#FFFAF2] opacity-75 text-xs font-dmSans text-black font-bold px-2 py-2 rounded-lg hover:bg-lightBrown/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Mengirim...' : 'Submit'}
            </button>
          </div>
        </form>

        {/* Wishes display - scrollable on brown bg */}
        <div
          className="wishes-scroll mt-8 overflow-y-auto space-y-4"
          style={{ maxHeight: '400px', scrollBehavior: 'smooth' }}
        >
          {fetchingWishes && (
            <p className="text-center font-dmSans text-sm text-white/50">
              Memuat ucapan...
            </p>
          )}

          {!fetchingWishes && wishes.length > 0 && wishes.map((wish) => (
            <div
              key={wish.id}
              className="bg-cream/90 rounded-2xl px-5 py-4 shadow-md animate-fadeIn"
            >
              <div className="flex justify-between items-start mb-1">
                <p className="font-dmSans font-bold text-sm text-primary">
                  {wish.name}
                </p>
                <span className="font-dmSans text-xs text-primary/50 whitespace-nowrap ml-2">
                  {formatDate(wish.created_at)}
                </span>
              </div>
              <p className="font-dmSans text-sm text-primary leading-relaxed">
                {wish.message}
              </p>
            </div>
          ))}

          {!fetchingWishes && wishes.length === 0 && (
            <p className="text-center font-dmSans text-sm text-white/50 py-8">
              Belum ada ucapan. Jadilah yang pertama!
            </p>
          )}
        </div>

        {/* Amplop 3 - bottom-left */}
        <img
          src="/assets/amplop_3.png"
          alt="Envelope"
          className="w-[183px] h-[183px] rotate-[-15deg] object-cover pointer-events-none -mt-8 -ml-10"
        />
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
    <div className="bg-gradient-to-br from-[#764640] to-[#B16C63] rounded-lg p-6 shadow-lg flex justify-between items-center relative">

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
      {/* Gift GIF - Bottom-right (BCA only) */}
      {bank.bankName.includes('BCA') && (
        <img
          src="/assets/gift.gif"
          alt="Gift"
          className="absolute -bottom-16 -right-12 w-[110px] h-[110px] object-cover pointer-events-none z-10"
          loading="lazy"
          decoding="async"
        />
      )}
    </div>
  );
}

function WeddingGiftSection() {
  return (
    <section className="bg-primary pb-16 px-6">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="relative inline-block mb-6 mx-auto">
          <h2 className="font-josefin font-bold text-4xl text-white">
            Wedding Gift
          </h2>
          <img
            src="/assets/amplop_2.gif"
            alt="Envelope"
            className="absolute -top-14 rotate-[30deg] -right-6 w-[75px] h-[75px] object-cover pointer-events-none"
            loading="lazy"
            decoding="async"
          />
        </div>
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
          href="https://docs.google.com/spreadsheets/d/102w_H0DudAhGi6xaASkQu_udtdlBXg-v5bVbF5NUyn0/edit?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-gradient-to-r from-[#FFFAF2] to-[#AA8B87] hover:opacity-90 text-[#764640] text-xs font-bold font-dmSans py-2 transition rounded-lg"
        >
          Daftar Pilihan Hadiah
        </a>

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
