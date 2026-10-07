'use client';

import { Star, Quote } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Drs. I Wayan Sudarma',
      role: 'Guru Fisika SMK Negeri',
      location: 'Bali',
      initials: 'WS',
      avatarBg: 'bg-[#121316] text-[#c8f53a]',
      content:
        'Dulu saya paling malas kalau sudah masuk awal semester, harus begadang berminggu-minggu buat format RPP/RPM. Sejak pakai RPM Generator AI, 1 bab selesai kurang dari 1 menit dan format tabelnya pas banget di kertas F4. Sangat membantu guru!',
      highlight: 'Selesai Kurang Dari 1 Menit & Pas Kertas F4',
    },
    {
      name: 'Siti Nurhaliza, M.Pd.',
      role: 'Guru Bahasa Indonesia SMA Swasta',
      location: 'Jawa Barat',
      initials: 'SN',
      avatarBg: 'bg-[#c8f53a] text-[#121316]',
      content:
        'Fitur diferensiasinya luar biasa. Asesmen dan rancangan untuk murid visual, auditori, dan kinestetik langsung dijabarkan jelas. Waktu supervisi kepala sekolah, dokumen RPM saya langsung dapat nilai A.',
      highlight: 'Dapat Nilai A Waktu Supervisi Kepala Sekolah',
    },
    {
      name: 'Ahmad Fauzan, S.Pd.I',
      role: 'Guru Madrasah Aliyah',
      location: 'Jawa Timur',
      initials: 'AF',
      avatarBg: 'bg-neutral-800 text-white',
      content:
        'Proses pembayarannya cepat sekali pakai QRIS Mayar, langsung aktif tanpa ribet konfirmasi chat admin. Sangat profesional untuk sebuah platform buatan anak bangsa.',
      highlight: 'Aktivasi QRIS Mayar Super Cepat & Otomatis',
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-canvas border-t border-border relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121316] text-[#c8f53a] text-xs font-bold mb-3">
              Bukti Nyata Kepuasan
            </span>
            <h2 className="text-feature-heading text-[#121316] mb-3">
              Dipercaya Guru di Seluruh Indonesia
            </h2>
            <p className="text-body-clean max-w-xl mx-auto">
              Dengar langsung pengalaman para pendidik yang berhasil memangkas jam lembur administrasi mereka.
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
