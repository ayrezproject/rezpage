'use client';

import { ScrollReveal } from '@/components/ui/scroll-reveal';

export function EditorialSpecs() {
  const specs = [
    {
      label: 'Format Baku',
      value: 'Folio F4 (215 × 330 mm)',
      desc: 'Presisi 54 baris × 15 kolom sesuai matriks kurikulum dinas.',
    },
    {
      label: 'Kompatibilitas File',
      value: 'Microsoft Word (.docx)',
      desc: 'Naskah terbuka tanpa proteksi, siap dicetak langsung.',
    },
    {
      label: 'Cakupan Kurikulum',
      value: 'Fase A hingga Fase F',
      desc: 'Mendukung jenjang SD, SMP, SMA, SMK, dan Madrasah.',
    },
    {
      label: 'Aktivasi Layanan',
      value: 'Instan via QRIS Mayar',
      desc: 'Akun aktif seketika dalam hitungan detik setelah transaksi.',
    },
  ];

  return (
    <section id="specs" className="py-24 bg-white border-t border-border">
      <div className="container mx-auto px-4 max-w-5xl">
        <ScrollReveal animation="fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121316] text-[#c8f53a] text-xs font-bold mb-3">
                Spesifikasi Teknis
              </span>
              <h2 className="text-feature-heading text-[#121316] mb-4">
                Dirancang untuk regulasi dinas. Disempurnakan untuk guru.
              </h2>
            </div>

            <div className="lg:col-span-7">
              <p className="text-body-clean text-base leading-relaxed mb-4">
                Kami menghilangkan friksi teknis dalam penyusunan Rencana Pelaksanaan Pembelajaran Mendalam (RPM). Setiap Tujuan Pembelajaran (TP) dirangkai dengan taksonomi Bloom yang tepat sasaran, memetakan diferensiasi proses, konten, dan produk secara alamiah.
              </p>
              <p className="text-body-clean text-base leading-relaxed">
                Guru tidak lagi perlu begadang merapikan tabel atau khawatir margin dokumen bergeser saat dicetak di kertas F4/Folio sekolah.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Specs Grid: 4 Clean Minimalist Data Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-border">
          {specs.map((item, idx) => (
            <ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
              <div className="space-y-1.5 p-4 rounded-2xl bg-[#f7f8fa] border border-border/50 h-full">
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                  {item.label}
                </span>
                <h4 className="text-base font-bold text-[#121316]">
                  {item.value}
                </h4>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
