export const weddingData = {
  couple: {
    bride: {
      fullName: 'Suci Kayla Febita Ratu Anarbya, S. Tr. A.P.',
      nickname: 'Suci',
      parents: 'Putri pertama dari Bapak Deden Mintaredja Tedja P. R. & Ibu Nina Erytriana',
      instagram: '@sucikaylafebita',
      photo: '/assets/carousel-1.png',
    },
    groom: {
      fullName: 'Seky Prasdhika Pebransha, S. H.',
      nickname: 'Seky',
      parents: 'Putra kedua dari Bapak Suhenda & Ibu Esih Sukaesih',
      instagram: '@prasdhikas',
      photo: '/assets/carousel-1.png',
    },
  },
  event: {
    date: '2026-02-14T15:30:00',
    akad: { time: '15.30 - 17.30', label: 'Akad' },
    resepsi: { time: '19.00 - 21.30', label: 'Resepsi' },
    venue: {
      name: 'Ballroom Grand Tjokro Premiere Bandung',
      address: 'Jl. Cihampelas No. 211-217, Bandung',
      mapsUrl: 'https://maps.google.com/?q=Grand+Tjokro+Premiere+Bandung',
    },
  },
  quranVerse: {
    arabic: 'بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ',
    translation: 'Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.',
    reference: '(QS. Ar-Rum : 21)',
  },
  bankAccounts: [
    {
      id: 1,
      bankName: 'BANK MANDIRI (008)',
      accountNumber: '1310020570638',
      accountName: 'Seky Prasdhika Pebransha',
    },
    {
      id: 2,
      bankName: 'BANK BCA (014)',
      accountNumber: '0860858584',
      accountName: 'Suci Kayla Febita Ratu Anarbya',
    },
  ],
  dressCodeColors: ['broken white', 'light brown', 'rose gold', 'olive', 'wine'],
  gallery: Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    src: `/assets/gallery/${i + 1}.jpg`,
    alt: `Gallery photo ${i + 1}`,
  })),
};
