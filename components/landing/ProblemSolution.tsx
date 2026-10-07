'use client';

import { XCircle, Sparkles, Clock, FileSpreadsheet, AlertTriangle, Layers } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { useLanguage } from '@/lib/i18n-context';

export function ProblemSolution() {
  const { lang } = useLanguage();

  const comparisons = [
    {
      icon: Clock,
      painTitle: lang === 'id' ? 'Tutup Buku 7–10 Hari Lambat' : '7–10 Day Month-End Closing Delays',
      painDesc: lang === 'id' 
        ? 'Tim finance membuang waktu mengunduh mutasi bank manual, mencocokkan nota kuitansi yang hilang, dan memperbaiki selisih desimal.'
        : 'Finance teams waste hundreds of hours chasing missing receipt slips, downloading CSV bank feeds, and untangling decimal discrepancies.',
      gainTitle: lang === 'id' ? 'Rekonsiliasi Sub-Detik Otomatis' : 'Sub-Second Continuous Reconciliation',
      gainDesc: lang === 'id'
        ? 'Transaksi terklasifikasi ke chart-of-accounts ERP dalam 200 milidetik. Tutup buku harian tanpa lembur.'
        : 'Transactions are matched, categorized, and synced to your general ledger within 200ms. Continuous real-time book closing.',
    },
    {
      icon: AlertTriangle,
      painTitle: lang === 'id' ? 'Pengeluaran Liar & SaaS Tak Terkontrol' : 'Rogue Card Spend & Unmonitored SaaS',
      painDesc: lang === 'id'
        ? 'Perpanjangan biaya cloud dan software otomatis memotong limit tanpa persetujuan, baru disadari saat tagihan datang.'
        : 'Automatic renewals and hidden subscriptions slip through corporate cards unreviewed, causing avoidable cash drain.',
      gainTitle: lang === 'id' ? 'Kontrol Kartu Otonom Berbasis Aturan' : 'Autonomous Policy-Driven Card Guardrails',
      gainDesc: lang === 'id'
        ? 'Batas ketat per merchant, pembekuan kartu instan, dan alur persetujuan Slack/Teams dengan satu klik.'
        : 'Enforce dynamic limits per vendor, auto-freeze suspicious charges, and trigger 1-click Slack/Teams approval workflows.',
    },
    {
      icon: FileSpreadsheet,
      painTitle: lang === 'id' ? 'Model Runway Spreadsheet Rentan Rusak' : 'Fragile Spreadsheet Runway Projections',
      painDesc: lang === 'id'
        ? 'Rumus Excel yang rentan korupsi data, perkiraan arus kas usang sebelum rapat dewan direksi dimulai.'
        : 'Static spreadsheets with broken VLOOKUPs that become instantly outdated before critical board presentations.',
      gainTitle: lang === 'id' ? 'Simulasi Monte Carlo Real-Time' : 'Live Monte Carlo Runway Forecasting',
      gainDesc: lang === 'id'
        ? 'Prediksi posisi kas 36 bulan ke depan dengan memperhitungkan dinamika piutang, churn, dan payroll secara matematis.'
        : 'Model 36-month cash scenarios incorporating live collections, headcount models, and macroeconomic variables dynamically.',
    },
    {
      icon: Layers,
      painTitle: lang === 'id' ? 'Terfragmentasi di Belasan Portal Bank' : 'Fragmented Multi-Entity Bank Logins',
      painDesc: lang === 'id'
        ? 'Harus login ke banyak internet banking dengan token fisik terpisah untuk mengetahui posisi kas perusahaan.'
        : 'Juggling multiple banking portals, physical security tokens, and disconnected subsidiaries just to check morning liquidity.',
      gainTitle: lang === 'id' ? 'Satu Konsol Treasury Zero-Trust' : 'Unified Zero-Trust Treasury Console',
      gainDesc: lang === 'id'
        ? 'Satu tampilan bersih untuk memantau kas seluruh entitas global, saldo operasional, dan transfer dana internal aman.'
        : 'A single, audited command center showing global liquidity, operating cash, and automated cross-entity sweeps.',
    },
  ];

  return (
    <section id="problem-solution" className="py-24 bg-canvas border-t border-border relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121316] text-[#c8f53a] text-xs font-bold mb-3">
              {lang === 'id' ? 'Komparasi Efisiensi' : 'Operational Contrast'}
            </span>
            <h2 className="text-feature-heading text-[#121316] mb-3">
              {lang === 'id' ? 'Mengapa Perusahaan Modern Beralih ke Rezpage?' : 'Why High-Growth Companies Switch to Rezpage'}
            </h2>
            <p className="text-body-clean max-w-2xl mx-auto">
              {lang === 'id'
                ? 'Bandingkan risiko proses akuntansi manual dengan percepatan operasional finansial modern otonom.'
                : 'Compare legacy manual reconciliation with modern autonomous treasury intelligence.'}
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
              <span>{lang === 'id' ? 'Metode Lama (Spreadsheet & Manual)' : 'Legacy Approach (Manual & Blind)'}</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-2xl bg-[#121316] text-white font-bold text-sm shadow-md">
              <div className="flex items-center gap-3">
                <span className="h-6 w-6 rounded-full bg-[#c8f53a] text-[#121316] flex items-center justify-center shrink-0 font-black text-xs">
                  ✓
                </span>
                <span>{lang === 'id' ? 'Rezpage Financial OS' : 'Rezpage Financial Intelligence'}</span>
              </div>
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#c8f53a] text-[#121316] font-black">
                REAL-TIME
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
                          Autonomous
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
