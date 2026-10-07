'use client';

import { Sparkles, FileText, ArrowRight, PrinterCheck, MousePointerClick } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Pilih Jenjang & Materi',
      desc: 'Isi nama sekolah, pilih fase/kelas, tentukan bab materi ajar, atau cukup unggah dokumen bahan ajar PDF/Word Anda.',
      time: 'Estimasi: 30 Detik',
      icon: FileText,
      cardStyle: 'bg-[#121316] text-white shadow-md',
      badgeStyle: 'bg-white/10 text-[#c8f53a]',
      iconStyle: 'bg-white/10 text-[#c8f53a]',
      numStyle: 'text-neutral-500',
      descStyle: 'text-neutral-400',
    },
    {
      step: '02',
      title: 'Klik "Generate AI"',
      desc: 'Multi-LLM Engine memformulasikan capaian pembelajaran, diferensiasi 3 gaya belajar, dan asesmen dalam 15 detik.',
      time: 'Estimasi: 15 Detik',
      icon: Sparkles,
      cardStyle: 'bg-[#c8f53a] text-[#121316] shadow-md',
      badgeStyle: 'bg-[#121316] text-white',
      iconStyle: 'bg-black/10 text-[#121316]',
      numStyle: 'text-[#121316]/40',
      descStyle: 'text-[#121316]/80 font-medium',
    },
    {
      step: '03',
      title: 'Download .docx & Print',
      desc: 'Unduh dokumen Word format presisi F4 Folio 54 baris × 15 kolom, langsung tanda tangan dan siap diserahkan ke pengawas dinas.',
      time: 'Estimasi: Instan',
      icon: PrinterCheck,
      cardStyle: 'bg-white text-[#121316] border border-border shadow-xs',
      badgeStyle: 'bg-neutral-100 text-neutral-800',
      iconStyle: 'bg-neutral-100 text-[#121316]',
      numStyle: 'text-neutral-300',
      descStyle: 'text-neutral-500',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white border-t border-border relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121316] text-[#c8f53a] text-xs font-bold mb-3">
              Alur Penggunaan Praktis
            </span>
            <h2 className="text-feature-heading text-[#121316] mb-3">
              Cara Kerja: Hanya 3 Langkah Mudah
            </h2>
            <p className="text-body-clean max-w-2xl mx-auto">
              Dari input bab hingga lembar RPM baku F4 siap cetak, semuanya berjalan otomatis dan selesai dalam sekejap.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 120} className="h-full">
                <div
                  className={`h-full relative rounded-3xl p-7 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 ${item.cardStyle}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-4xl font-black ${item.numStyle}`}>
                        {item.step}
                      </span>
                      <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${item.badgeStyle}`}>
                        {item.time}
                      </span>
                    </div>

                    <div className={`h-12 w-12 rounded-2xl flex items-center justify-center mb-5 ${item.iconStyle}`}>
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="text-lg font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className={`text-xs leading-relaxed ${item.descStyle}`}>
                      {item.desc}
                    </p>
                  </div>

                  {idx < steps.length - 1 && (
                    <div className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 h-7 w-7 rounded-full bg-white border border-border shadow-xs items-center justify-center text-[#121316]">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Quick Summary Banner */}
        <ScrollReveal animation="fade-up" delay={400}>
          <div className="mt-12 p-5 rounded-2xl border border-border bg-[#f7f8fa] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-[#c8f53a] text-[#121316] flex items-center justify-center shrink-0">
                <MousePointerClick className="h-4 w-4" />
              </div>
              <p className="text-xs sm:text-sm font-semibold text-[#121316]">
                Dokumen hasil dapat langsung dibuka di Microsoft Word, Google Docs, atau WPS Office tanpa konversi berbelit.
              </p>
            </div>
            <a
              href="#pricing"
              className="btn-pill-obsidian text-xs py-2 px-4 shrink-0"
            >
              Mulai Sekarang ➔
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
