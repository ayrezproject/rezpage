'use client';

import { useLanguage } from '@/lib/i18n-context';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { Check } from 'lucide-react';
import { toast } from 'sonner';

export function PricingSection() {
  const { t } = useLanguage();

  const handleCheckoutGuruPro = () => {
    toast.success('Membuka gerbang pembayaran QRIS Mayar untuk Paket Guru Pro...');
    window.open('https://mayar.id', '_blank');
  };

  const handleConsultSales = () => {
    const waUrl = 'https://wa.me/?text=Halo%20Tim%20Sales%20RPM%20Generator%20AI,%20kami%20tertarik%20dengan%20Paket%20Sekolah.';
    window.open(waUrl, '_blank');
  };

  return (
    <section id="pricing" className="py-24 bg-canvas border-t border-border">
      <div className="container mx-auto px-4 max-w-5xl">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121316] text-[#c8f53a] text-xs font-bold mb-3">
              Pilihan Paket Berlangganan
            </span>
            <h2 className="text-feature-heading text-[#121316] mb-3">
              {t.pricing.title}
            </h2>
            <p className="text-body-clean max-w-xl mx-auto">
              Akses instan tanpa komitmen rumit. Aktif seketika via pembayaran QRIS resmi.
            </p>
          </div>
        </ScrollReveal>

        {/* 2 Clean Cards with Staggered Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1: Guru Pro (Obsidian) */}
          <ScrollReveal animation="fade-up" delay={100} className="h-full">
            <div className="h-full rounded-3xl border border-white/10 bg-[#121316] text-white p-8 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#c8f53a]/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
                    Guru Mandiri
                  </span>
                  <span className="px-3 py-0.5 rounded-full bg-[#c8f53a] text-[#121316] text-xs font-black">
                    Paling Populer
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white mb-2">
                  Paket Guru Pro
                </h3>
                <p className="text-sm text-neutral-300 mb-6">
                  Pilihan utama ribuan guru cerdas di seluruh Indonesia.
                </p>

                <div className="mb-6 pb-6 border-b border-white/10">
                  <span className="text-4xl font-black text-white tracking-tight">
                    Rp 100.000
                  </span>
                  <span className="text-sm text-neutral-400 ml-2">/ tahun</span>
                  <span className="block text-xs text-[#c8f53a] font-semibold mt-1">
                    (Kurang dari Rp 300 / hari)
                  </span>
                </div>

                <ul className="space-y-3.5 text-sm text-neutral-200 mb-8">
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-[#c8f53a] shrink-0" />
                    <span>Susun modul ajar F4 tanpa batas</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-[#c8f53a] shrink-0" />
                    <span>Format baku 54 baris × 15 kolom Folio</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-[#c8f53a] shrink-0" />
                    <span>Unduh dokumen Word (.docx) siap cetak</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-[#c8f53a] shrink-0" />
                    <span>Diferensiasi & profil DPL 1–8 otomatis</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={handleCheckoutGuruPro}
                className="btn-pill-lime w-full py-3 text-xs gap-2"
              >
                <span>Langganan Sekarang — Rp 100.000</span>
                <span className="h-5 w-5 rounded-full bg-[#121316] text-[#c8f53a] flex items-center justify-center text-[10px]">
                  ↗
                </span>
              </button>
            </div>
          </ScrollReveal>

          {/* Card 2: Lisensi Sekolah (Crisp White) */}
          <ScrollReveal animation="fade-up" delay={200} className="h-full">
            <div className="h-full rounded-3xl border border-border bg-white p-8 sm:p-10 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block">
                    Institusi & MGMP
                  </span>
                  <span className="px-3 py-0.5 rounded-full bg-neutral-100 text-neutral-800 text-xs font-bold">
                    Lisensi Lembaga
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#121316] mb-2">
                  Paket Sekolah
                </h3>
                <p className="text-sm text-neutral-500 mb-6">
                  Solusi terintegrasi untuk seluruh dewan guru dalam satu naungan.
                </p>

                <div className="mb-6 pb-6 border-b border-border">
                  <span className="text-4xl font-black text-[#121316] tracking-tight">
                    Rp 950.000
                  </span>
                  <span className="text-sm text-neutral-500 ml-2">/ tahun</span>
                  <span className="block text-xs text-neutral-500 font-medium mt-1">
                    (Hingga 50 akun guru aktif)
                  </span>
                </div>

                <ul className="space-y-3.5 text-sm text-[#121316] mb-8">
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Akses kolektif seluruh dewan guru</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Format kop surat dan logo dinas kustom</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Fasilitas invoice resmi untuk dana BOS</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Pendampingan teknis dan workshop daring</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={handleConsultSales}
                className="btn-pill-obsidian w-full py-3 text-xs"
              >
                Hubungi Konsultan Sekolah
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
