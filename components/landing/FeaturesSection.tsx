'use client';

import Image from 'next/image';
import { ChevronRight, Cpu, Users, FileCheck } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export function FeaturesSection() {
  const features = [
    {
      badge: 'Multi-LLM Engine',
      title: 'Multi-LLM Educational AI Engine (Gemini, DeepSeek & GPT-4o)',
      tagline: 'Kecerdasan Artifisial Tingkat Tinggi yang Memahami Naskah Akademik Indonesia',
      desc: 'Didukung mesin multi-provider dengan auto-failover otomatis. Merumuskan Tujuan Pembelajaran (TP) dan Alur Tujuan Pembelajaran (ATP) dengan taksonomi Bloom yang tepat sasaran tanpa halusinasi.',
      image: '/images/promosi/ai_generator_feature_1791261047986.jpg',
      icon: Cpu,
      footerNote: 'Bahasa Akademis Baku Kemendikbudristek RI',
    },
    {
      badge: 'Pedagogi Berdiferensiasi',
      title: 'Otomasi Pembelajaran Berdiferensiasi & Profil Siswa',
      tagline: 'Wujudkan Pembelajaran yang Berpusat pada Murid Tanpa Ribet',
      desc: 'Otomatis memetakan tingkat kesiapan belajar (scaffolding & pengayaan), 3 gaya belajar (visual, auditori, kinestetik), dan 8 Dimensi Profil Lulusan (DPL 1–8).',
      image: '/images/promosi/differentiated_learning_1791261072471.jpg',
      icon: Users,
      footerNote: 'Profil Lulusan DPL 1–8 Terintegrasi',
    },
    {
      badge: 'Format Baku F4',
      title: 'Ekspor Word (.docx) Format Baku F4 / Folio & Siap Cetak',
      tagline: 'Bebas Stres Mengatur Margin. Sekali Klik, Langsung Print!',
      desc: 'Engine pembuat berkas python-docx berpresisi tinggi mempertahankan matriks resmi 54 baris × 15 kolom, lengkap dengan lembar pengesahan tanda tangan kepala sekolah dan NIP.',
      image: '/images/promosi/f4_export_preview_1791261089569.jpg',
      icon: FileCheck,
      footerNote: '100% Kompatibel Microsoft Word & F4 Folio',
    },
  ];

  return (
    <section id="features" className="py-24 bg-canvas border-t border-border">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121316] text-[#c8f53a] text-xs font-bold mb-3">
                Fitur Unggulan Revolusioner
              </span>
              <h2 className="text-feature-heading text-[#121316]">
                Teknologi yang Bekerja untuk Pendidik.
              </h2>
              <p className="text-body-clean text-sm mt-2 max-w-xl">
                Setiap detail dirancang untuk menyelesaikan beban administrasi dan menghadirkan standar mutu terbaik di ruang kelas.
              </p>
            </div>
            <a
              href="#pricing"
              className="link-highlight text-sm font-semibold shrink-0"
            >
              <span>Lihat paket berlangganan</span>
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </ScrollReveal>

        {/* 3 Feature Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 100} className="h-full">
                <div className="h-full rounded-3xl bg-white border border-border flex flex-col justify-between shadow-xs transition-all duration-300 hover:border-[#121316]/40 hover:shadow-md overflow-hidden group">
                  {/* Image Header with Aspect Ratio */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100 border-b border-border">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-[#121316]/85 backdrop-blur-xs text-[#c8f53a] text-[10px] font-bold px-2.5 py-1 rounded-md">
                      {item.badge}
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">
                        <Icon className="h-3.5 w-3.5 text-[#121316]" />
                        <span>Fitur {idx + 1}</span>
                      </div>
                      <h3 className="text-lg font-bold text-[#121316] tracking-tight mb-2 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs font-medium text-[#121316]/70 italic mb-3">
                        &quot;{item.tagline}&quot;
                      </p>
                      <p className="text-body-clean text-xs leading-relaxed text-neutral-600">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border/60 text-[11px] text-neutral-500 font-semibold flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#c8f53a] border border-[#121316]/20 shrink-0" />
                      <span>{item.footerNote}</span>
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
