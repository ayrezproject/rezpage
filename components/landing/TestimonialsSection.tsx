'use client';

import { Star, Quote } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { useLanguage } from '@/lib/i18n-context';

export function TestimonialsSection() {
  const { lang } = useLanguage();

  const testimonials = [
    {
      name: 'Marcus Vance',
      role: 'Chief Financial Officer',
      location: 'Lumina Cloud (Series B)',
      initials: 'MV',
      avatarBg: 'bg-[#121316] text-[#c8f53a]',
      content: lang === 'id'
        ? 'Rezpage mengeliminasi 8 hari lembur penutupan buku bulanan kami. Posisi kas multi-valuta kami kini terekonsiliasi otomatis setiap detik, dan laporan dewan direksi siap dalam hitungan menit.'
        : 'Rezpage eliminated our 8-day month-end closing scramble. Our multi-currency cash positions reconcile continuously in real time, and our board audit decks are generated automatically without friction.',
      highlight: lang === 'id' ? 'Tutup Buku Turun dari 8 Hari ke 4 Jam' : 'Closing Time Slashed from 8 Days to 4 Hours',
    },
    {
      name: 'Elena Rostova',
      role: 'VP of Finance',
      location: 'Hyperion Mobility (London)',
      initials: 'ER',
      avatarBg: 'bg-[#c8f53a] text-[#121316]',
      content: lang === 'id'
        ? 'Batas kartu korporat otonom berhasil menyelamatkan lebih dari $140.000 biaya langganan SaaS yang tidak sah hanya pada kuartal pertama. Transparansi belanja tim sangat luar biasa.'
        : 'The autonomous corporate card guardrails saved us over $140,000 in rogue software subscriptions and unapproved SaaS charges in Q1 alone. Absolute peace of mind for our finance leadership.',
      highlight: lang === 'id' ? 'Hemat $140k+ Pengeluaran SaaS Liar' : 'Saved $140k+ in Unauthorized SaaS Renewals',
    },
    {
      name: 'David Chen',
      role: 'Head of Treasury',
      location: 'Nexa Global (San Francisco)',
      initials: 'DC',
      avatarBg: 'bg-neutral-800 text-white',
      content: lang === 'id'
        ? 'Menghubungkan 5 bank operasional dan NetSuite memakan waktu kurang dari 10 menit. Model prediksi runway Monte Carlo sangat presisi dalam mengarungi dinamika pasar.'
        : 'Connecting NetSuite and our 5 global operating bank accounts took under 10 minutes with zero downtime. The Monte Carlo runway forecasting is remarkably accurate for our leadership team.',
      highlight: lang === 'id' ? 'Integrasi ERP Bersih dalam 10 Menit' : '10-Minute Seamless ERP Integration',
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-canvas border-t border-border relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121316] text-[#c8f53a] text-xs font-bold mb-3">
              {lang === 'id' ? 'Validasi Industri' : 'Executive Validation'}
            </span>
            <h2 className="text-feature-heading text-[#121316] mb-3">
              {lang === 'id' ? 'Dipercaya Pemimpin Keuangan Global' : 'Trusted by Modern Finance Leaders Worldwide'}
            </h2>
            <p className="text-body-clean max-w-xl mx-auto">
              {lang === 'id'
                ? 'Dengarkan pengalaman nyata CFO dan VP Finance yang telah memodernisasi treasury dan pembukuan mereka.'
                : 'See how scaling enterprises and tech companies maintain complete financial governance with Rezpage.'}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <ScrollReveal key={idx} animation="fade-up" delay={idx * 100} className="h-full">
              <div className="h-full rounded-3xl border border-border bg-white p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
                <div>
                  {/* Rating Stars & Quote */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                    <Quote className="h-4 w-4 text-neutral-300" />
                  </div>

                  <div className="mb-3">
                    <span className="text-[11px] font-bold text-[#121316] bg-[#c8f53a]/30 px-2 py-0.5 rounded-md inline-block">
                      {item.highlight}
                    </span>
                  </div>

                  <p className="text-xs leading-relaxed text-neutral-600 mb-6 italic">
                    &quot;{item.content}&quot;
                  </p>
                </div>

                <div className="pt-4 border-t border-border/60 flex items-center gap-3">
                  <div className={`h-9 w-9 rounded-full ${item.avatarBg} font-bold text-xs flex items-center justify-center shrink-0`}>
                    {item.initials}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#121316]">{item.name}</h4>
                    <p className="text-[11px] text-neutral-500">{item.role}, {item.location}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
