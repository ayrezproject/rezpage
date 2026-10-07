'use client';

import Image from 'next/image';
import { ChevronRight, DollarSign, CreditCard, LineChart } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { useLanguage } from '@/lib/i18n-context';

export function FeaturesSection() {
  const { lang } = useLanguage();

  const features = [
    {
      badge: lang === 'id' ? 'Treasury Global' : 'Global Treasury',
      title: lang === 'id' ? 'Manajemen Multi-Valuta & Rekonsiliasi Otomatis' : 'Multi-Currency Treasury & Continuous Reconciliation',
      tagline: lang === 'id' ? 'Visibilitas Kas Global Real-Time di Seluruh Entitas' : 'Real-time multi-entity cash visibility across all operating banks',
      desc: lang === 'id' 
        ? 'Konsolidasikan rekening USD, EUR, GBP, IDR, dan SGD dalam satu dasbor. Algoritma auto-sweep memindahkan saldo idle ke rekening imbal hasil tinggi secara otomatis.'
        : 'Consolidate USD, EUR, GBP, IDR, and SGD accounts into a unified ledger. Intelligent auto-sweep protocols maximize yield while maintaining sub-second liquidity.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
      icon: DollarSign,
      footerNote: lang === 'id' ? 'Sinkronisasi Otomatis 0.2 Detik' : 'Sub-Second 0.2s API Sync',
    },
    {
      badge: lang === 'id' ? 'Kartu & Pengeluaran' : 'Spend Governance',
      title: lang === 'id' ? 'Kartu Korporat Pintar & Kebijakan Belanja Otonom' : 'Autonomous Corporate Cards & Policy-Driven Approvals',
      tagline: lang === 'id' ? 'Hentikan Pengeluaran Liar Sebelum Terjadi' : 'Eliminate out-of-policy expenses before transactions settle',
      desc: lang === 'id'
        ? 'Terbitkan kartu virtual dan fisik dengan batas dinamis per divisi atau vendor. Kuitansi dicocokkan otomatis via AI OCR tanpa entri data manual.'
        : 'Issue virtual and physical corporate cards with merchant-level limits. Receipts are automatically matched and OCR-extracted with zero manual paperwork.',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop',
      icon: CreditCard,
      footerNote: lang === 'id' ? 'Kepatuhan Belanja 100% Terjaga' : '100% Policy Compliance Guaranteed',
    },
    {
      badge: lang === 'id' ? 'Proyeksi Runway' : 'Predictive Runway',
      title: lang === 'id' ? 'Prakiraan Arus Kas AI & Deteksi Anomali Pengeluaran' : 'AI-Driven Cash Flow Forecasting & Anomaly Alerts',
      tagline: lang === 'id' ? 'Laporan Dewan Direksi Siap Pakai Kapan Saja' : 'Board-ready runway modeling with Monte Carlo simulations',
      desc: lang === 'id'
        ? 'Simulasikan skenario hiring, ekspansi pasar, dan pelunasan piutang secara matematis. Dapatkan peringatan instan jika ada lonjakan biaya server atau SaaS yang tidak wajar.'
        : 'Model headcount expansion, revenue churn, and tax obligations under various macro scenarios. Detect unusual vendor billing spikes instantly before month-end.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
      icon: LineChart,
      footerNote: lang === 'id' ? 'Model Monte Carlo Akurat 99.4%' : '99.4% Forecast Precision',
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
                {lang === 'id' ? 'Arsitektur Finansial Modern' : 'Core Financial Architecture'}
              </span>
              <h2 className="text-feature-heading text-[#121316]">
                {lang === 'id' ? 'Kecerdasan yang Bekerja untuk Tim Finance.' : 'Intelligence Built for Financial Leaders.'}
              </h2>
              <p className="text-body-clean text-sm mt-2 max-w-xl">
                {lang === 'id'
                  ? 'Setiap modul dirancang untuk menyingkirkan gesekan administrasi dan memberikan kepastian neraca real-time.'
                  : 'Engineered to eliminate closing friction, stop unauthorized burn, and provide single-source financial truth.'}
              </p>
            </div>
            <a
              href="#pricing"
              className="link-highlight text-sm font-semibold shrink-0"
            >
              <span>{lang === 'id' ? 'Lihat opsi paket' : 'View pricing tiers'}</span>
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
                      sizes="(max-width: 768px) 100vw, 33vw"
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
                        <span>{lang === 'id' ? `Modul ${idx + 1}` : `Module 0${idx + 1}`}</span>
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
