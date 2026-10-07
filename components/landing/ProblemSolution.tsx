'use client';

import { XCircle, Sparkles, Clock, FileSpreadsheet, Users, HeartHandshake } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export function ProblemSolution() {
  const comparisons = [
    {
      icon: Clock,
      painTitle: '4–6 Jam per Modul',
      painDesc: 'Habis waktu hanya untuk copy-paste silabus dan menyelaraskan baris tabel yang berantakan.',
      gainTitle: '15 Detik Selesai',
      gainDesc: 'Masukkan nama materi atau upload modul, dokumen utuh langsung terisi sempurna.',
    },
    {
      icon: FileSpreadsheet,
      painTitle: 'Format Rusak saat Dicetak',
      painDesc: 'Margin tabel bergeser, header terpotong saat diprint ke kertas F4/Folio.',
      gainTitle: 'Presisi 100% Standar Dinas',
      gainDesc: 'Format baku matriks Folio F4 54 baris × 15 kolom, langsung print tanpa edit ulang.',
    },
    {
      icon: Users,
      painTitle: 'Pusing Membagi Diferensiasi Siswa',
      painDesc: 'Bingung membedakan tugas untuk siswa belum siap, visual, atau kinestetik.',
      gainTitle: 'Diferensiasi Otomatis Terpetakan',
      gainDesc: 'AI merinci scaffolding untuk siswa belum siap, pengayaan, dan panduan visual/auditori/kinestetik.',
    },
    {
      icon: HeartHandshake,
      painTitle: 'Kelelahan Administrasi (Burnout)',
      painDesc: 'Pulang mengajar masih harus lembur administrasi sampai larut malam.',
      gainTitle: 'Fokus Penuh pada Mengajar',
      gainDesc: 'Waktu luang Anda kembali untuk keluarga, pengembangan diri, dan interaksi hangat bersama murid.',
    },
  ];

  return (
    <section id="problem-solution" className="py-24 bg-canvas border-t border-border relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121316] text-[#c8f53a] text-xs font-bold mb-3">
              Komparasi Efisiensi
            </span>
            <h2 className="text-feature-heading text-[#121316] mb-3">
              Mengapa Guru Beralih ke RPM Generator AI?
            </h2>
            <p className="text-body-clean max-w-2xl mx-auto">
              Bandingkan betapa beratnya cara lama menyusun administrasi dibandingkan percepatan instan bersama teknologi AI multi-model.
            </p>
          </div>
        </ScrollReveal>

        {/* Comparison Header */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-border text-neutral-700 font-bold text-sm shadow-2xs">
              <span className="h-6 w-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                <XCircle className="h-4 w-4" />
              </span>
              <span>Cara Lama (Manual & Menyita Waktu)</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-2xl bg-[#121316] text-white font-bold text-sm shadow-md">
              <div className="flex items-center gap-3">
                <span className="h-6 w-6 rounded-full bg-[#c8f53a] text-[#121316] flex items-center justify-center shrink-0 font-black text-xs">
                  ✓
                </span>
                <span>Cara Baru bersama RPM Generator AI</span>
              </div>
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#c8f53a] text-[#121316] font-black">
                15 DETIK
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Comparison Cards */}
        <div className="space-y-4">
          {comparisons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={idx} animation="fade-up" delay={150 + idx * 80}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-3xl border border-border bg-white p-4 sm:p-5 shadow-xs transition-colors hover:border-[#121316]/30">
                  {/* Pain Point */}
                  <div className="flex gap-4 p-4 rounded-2xl bg-[#f7f8fa] border border-border/60">
                    <div className="mt-1 h-9 w-9 rounded-xl bg-neutral-200 text-neutral-600 flex items-center justify-center shrink-0">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#121316] mb-1 text-sm">
                        {item.painTitle}
                      </h3>
                      <p className="text-xs text-neutral-500 leading-relaxed">
                        {item.painDesc}
                      </p>
                    </div>
                  </div>

                  {/* Solution Gain with Electric Lime accent */}
                  <div className="flex gap-4 p-4 rounded-2xl bg-[#c8f53a]/10 border border-[#c8f53a]/40">
                    <div className="mt-1 h-9 w-9 rounded-xl bg-[#c8f53a] text-[#121316] flex items-center justify-center shrink-0 shadow-xs">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-[#121316] text-sm">
                          {item.gainTitle}
                        </h3>
                        <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#c8f53a] text-[#121316] font-bold">
                          Otomatis
                        </span>
                      </div>
                      <p className="text-xs text-neutral-600 leading-relaxed">
                        {item.gainDesc}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
