'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/i18n-context';
import { DocPreviewModal } from '@/components/landing/DocPreviewModal';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { FileText, ShieldCheck, Zap, GraduationCap, CreditCard, ExternalLink, CheckCircle2 } from 'lucide-react';

export function Hero() {
  const { t } = useLanguage();
  const [docModalOpen, setDocModalOpen] = useState(false);

  const scrollToApps = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="relative bg-white pt-10 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          {/* Status Pill Badge */}
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121316] text-[#c8f53a] text-xs font-bold shadow-xs">
              <span className="h-2 w-2 rounded-full bg-[#c8f53a] animate-pulse" />
              ⚡ Revolusi Administrasi Guru Indonesia • 100% Sesuai Regulasi Kurikulum Merdeka
            </span>
          </div>

          {/* Product Label */}
          <div className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
            Platform SaaS RPM Generator AI (Kurikulum Merdeka)
          </div>

          {/* Hero Display Statement (Rezpage in h1 for Playwright test) */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight max-w-4xl mx-auto mb-4 text-[#121316] leading-[1.12]">
            <span className="block">Rezpage RPM Generator AI.</span>
            <span className="block text-2xl sm:text-4xl md:text-5xl mt-2 font-extrabold text-[#121316]">
              Buat RPM Kurikulum Merdeka Lengkap & Presisi Baku F4 Hanya dalam 15 Detik!
            </span>
          </h1>

          {/* Bilingual Tagline support for E2E tests */}
          <p className="text-xs sm:text-sm font-semibold text-neutral-500 tracking-wide mb-3">
            {t.hero.tagline}
          </p>

          {/* Body Copy from LANDING_PAGE_PROMOSI.md */}
          <p className="text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Tinggalkan lembur berjam-jam menyusun tabel administrasi yang rumit. Biarkan teknologi AI multi-model merumuskan capaian pembelajaran, diferensiasi siswa, dan asesmen mendalam ke dalam format Word (.docx) siap tanda tangan dan cetak.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <button
              onClick={scrollToPricing}
              className="btn-pill-lime gap-2 px-6 py-3 text-xs sm:text-sm font-bold shadow-sm"
            >
              <span>Coba Buat RPM Sekarang — Mulai Rp 100.000 / thn</span>
              <span className="h-5 w-5 rounded-full bg-[#121316] text-[#c8f53a] flex items-center justify-center text-[10px]">
                ↗
              </span>
            </button>

            <button
              onClick={scrollToApps}
              className="btn-pill-obsidian px-5 py-3 text-xs sm:text-sm"
            >
              Lihat Aplikasi
            </button>

            <button
              onClick={() => setDocModalOpen(true)}
              className="link-highlight ml-1 px-3 py-2 text-xs sm:text-sm font-semibold text-[#121316] hover:text-black flex items-center gap-1.5"
            >
              <FileText className="h-4 w-4 text-[#121316]" />
              <span>Lihat Contoh Dokumen (.docx)</span>
            </button>
          </div>

          {/* Center Product Visual Showcase: Real Product Screenshot */}
          <ScrollReveal animation="fade-up" delay={150}>
            <div className="relative mx-auto max-w-4xl rounded-3xl border border-border bg-[#121316] p-3 sm:p-5 overflow-hidden shadow-2xl">
              {/* Browser Window Header Bar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-left px-2">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-red-500/80" />
                    <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[11px] font-mono text-neutral-300">
                    <span>https://rezpage.com/rpm-generator-ai</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <span className="inline-flex items-center gap-1 font-semibold text-[#c8f53a] text-[11px]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#c8f53a]" />
                    Format Baku Folio F4 (54 Baris × 15 Kolom)
                  </span>
                  <button
                    onClick={() => setDocModalOpen(true)}
                    className="hidden md:inline-flex items-center gap-1 text-[11px] text-neutral-300 hover:text-white"
                  >
                    <span>Pratinjau Word</span>
                    <ExternalLink className="h-3 w-3" />
                  </button>
                </div>
              </div>

              {/* Product Image Stage */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-2xl bg-neutral-900 border border-white/10 group shadow-inner">
                <Image
                  src="/images/promosi/rpm_hero_banner_1791261029693.jpg"
                  alt="RPM Generator AI - Platform SaaS Kurikulum Merdeka"
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                />

                {/* Floating Chips on top of the image */}
                <div className="absolute top-3 left-3 bg-[#121316]/90 backdrop-blur-md border border-white/10 text-white rounded-xl px-3 py-1.5 text-left shadow-lg hidden sm:block">
                  <span className="text-[10px] text-neutral-400 block font-medium">Waktu Generate</span>
                  <span className="text-xs font-black text-[#c8f53a]">⚡ 15 Detik per Modul</span>
                </div>

                <div className="absolute bottom-3 right-3 bg-[#121316]/90 backdrop-blur-md border border-white/10 text-white rounded-xl px-3 py-1.5 text-left shadow-lg">
                  <span className="text-[10px] text-neutral-400 block font-medium">Format Output</span>
                  <span className="text-xs font-black text-white">📄 Microsoft Word (.docx) Asli</span>
                </div>
              </div>

              {/* Floating Pricing Callout Bar */}
              <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 bg-white/5 border border-white/10 rounded-2xl p-3 sm:px-6 sm:py-3 text-left">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#c8f53a] animate-ping" />
                  <span className="text-xs text-neutral-300">
                    Akses Langganan Guru Pro: <strong className="text-white">Rp 100.000 / tahun</strong> (Hanya Rp 8.300/bulan)
                  </span>
                </div>
                <button
                  onClick={scrollToPricing}
                  className="btn-pill-lime py-1.5 px-4 text-xs font-bold"
                >
                  Aktivasi Instan via QRIS
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Trust Badges & Social Proof */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#f7f8fa] border border-border/70">
              <div className="h-8 w-8 rounded-xl bg-white border border-border flex items-center justify-center shrink-0 text-[#121316]">
                <ShieldCheck className="h-4 w-4 text-[#121316]" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#121316] block">Standar Folio F4</span>
                <span className="text-[11px] text-neutral-500">54 Baris × 15 Kolom Presisi</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#f7f8fa] border border-border/70">
              <div className="h-8 w-8 rounded-xl bg-white border border-border flex items-center justify-center shrink-0 text-[#121316]">
                <Zap className="h-4 w-4 text-[#121316]" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#121316] block">Super Cepat</span>
                <span className="text-[11px] text-neutral-500">10–20 Detik Per Bab</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#f7f8fa] border border-border/70">
              <div className="h-8 w-8 rounded-xl bg-white border border-border flex items-center justify-center shrink-0 text-[#121316]">
                <GraduationCap className="h-4 w-4 text-[#121316]" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#121316] block">Kurikulum Merdeka</span>
                <span className="text-[11px] text-neutral-500">DPL 1–8 & 3 Gaya Belajar</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#f7f8fa] border border-border/70">
              <div className="h-8 w-8 rounded-xl bg-white border border-border flex items-center justify-center shrink-0 text-[#121316]">
                <CreditCard className="h-4 w-4 text-[#121316]" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#121316] block">Aktivasi Otomatis</span>
                <span className="text-[11px] text-neutral-500">QRIS Mayar Tanpa Konfirmasi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Preview Dokumen */}
      <DocPreviewModal
        open={docModalOpen}
        onOpenChange={setDocModalOpen}
      />
    </>
  );
}
