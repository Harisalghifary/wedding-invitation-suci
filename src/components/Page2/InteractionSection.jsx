import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { SectionWrapper } from '../shared/SectionWrapper';
import { FaCopy, FaCheck } from 'react-icons/fa';
import { weddingData } from '../../data/content';

const BankCard = ({ bank }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(bank.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gradient-to-br from-lightBrown to-amber-700 rounded-lg p-6 shadow-lg text-cream">
      <p className="text-sm font-semibold mb-3">{bank.bankName}</p>
      <p className="font-mono text-xl font-bold mb-2">{bank.accountNumber}</p>
      <p className="text-sm mb-4">{bank.accountName}</p>

      <button
        onClick={handleCopy}
        className="w-full bg-cream/20 hover:bg-cream/30 text-cream py-2 rounded-lg
                   flex items-center justify-center gap-2 transition-colors"
      >
        {copied ? <FaCheck /> : <FaCopy />}
        {copied ? 'Copied!' : 'Copy Account Number'}
      </button>
    </div>
  );
};

export default function InteractionSection() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    // Store in localStorage for now
    const wishes = JSON.parse(localStorage.getItem('wishes') || '[]');
    wishes.push({ ...data, timestamp: new Date().toISOString() });
    localStorage.setItem('wishes', JSON.stringify(wishes));

    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <SectionWrapper id="interaction" background="primary">
      {/* Wishes Form */}
      <div className="max-w-md mx-auto mb-16">
        <h3 className="font-loveLight text-4xl text-center mb-2 text-cream">Wishes</h3>
        <div className="text-center text-4xl mb-6">💝</div>

        {submitted && (
          <div className="bg-green-500 text-white p-3 rounded-lg mb-4 text-center">
            Terima kasih atas ucapan Anda!
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Nama Anda"
              className={`w-full px-4 py-3 rounded-lg bg-cream text-darkBrown
                         focus:outline-none focus:ring-2 focus:ring-lightBrown
                         ${errors.name ? 'ring-2 ring-red-500' : ''}`}
              {...register('name', { required: 'Nama wajib diisi', minLength: 2 })}
            />
            {errors.name && <p className="text-red-300 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <textarea
              placeholder="Tulis ucapan Anda di sini..."
              rows={4}
              className={`w-full px-4 py-3 rounded-lg bg-cream text-darkBrown resize-none
                         focus:outline-none focus:ring-2 focus:ring-lightBrown
                         ${errors.message ? 'ring-2 ring-red-500' : ''}`}
              {...register('message', { required: 'Ucapan wajib diisi', minLength: 10 })}
            />
            {errors.message && <p className="text-red-300 text-sm mt-1">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-lightBrown hover:bg-lightBrown/90 text-cream py-3 rounded-lg
                       font-josefin font-semibold transition-colors shadow-lg"
          >
            Kirim Ucapan
          </button>
        </form>

        <div className="flex justify-center gap-4 text-3xl text-cream/30 mt-6">
          <span>💌</span>
        </div>
      </div>

      {/* Wedding Gift Section */}
      <div className="max-w-2xl mx-auto">
        <h3 className="font-loveLight text-4xl text-center mb-2 text-cream">Wedding Gift</h3>
        <div className="text-center text-4xl mb-6">🎁</div>

        <p className="text-cream text-center mb-8 text-sm sm:text-base leading-relaxed">
          Kehadiran Anda di acara pernikahan kami adalah hadiah terindah.
          Namun, jika Anda ingin memberikan hadiah, kami menyediakan amplop digital.
        </p>

        {/* Bank Cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {weddingData.bankAccounts.map((bank) => (
            <BankCard key={bank.id} bank={bank} />
          ))}
        </div>

        <p className="text-cream/80 text-center text-sm">
          Selain amplop digital, kami juga menyediakan daftar hadiah yang dapat dipilih untuk mempermudah Anda.
        </p>

        <div className="text-center mt-6 text-5xl">🎁</div>
      </div>
    </SectionWrapper>
  );
}
