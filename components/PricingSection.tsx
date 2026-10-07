'use client';

import { useLanguage } from '@/lib/i18n-context';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { Check } from 'lucide-react';
import { toast } from 'sonner';

export function PricingSection() {
  const { lang } = useLanguage();

  const handleStartGrowthTrial = () => {
    toast.success('Redirecting to 14-day instant trial registration...');
    window.open('https://app.rezpage.com/signup', '_blank');
  };

  const handleConsultEnterprise = () => {
    toast.info('Opening enterprise demo scheduling calendar...');
    window.open('https://cal.com/rezpage/enterprise-demo', '_blank');
  };

  return (
    <section id="pricing" className="py-24 bg-canvas border-t border-border">
      <div className="container mx-auto px-4 max-w-5xl">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121316] text-[#c8f53a] text-xs font-bold mb-3">
              {lang === 'id' ? 'Biaya Langganan Transparan' : 'Transparent Pricing Architecture'}
            </span>
            <h2 className="text-feature-heading text-[#121316] mb-3">
              {lang === 'id' ? 'Skala Fleksibel Sesuai Volume Finansial Anda' : 'Predictable Plans Scaled to Your Business'}
            </h2>
            <p className="text-body-clean max-w-xl mx-auto">
              {lang === 'id'
                ? 'Tanpa biaya tersembunyi. Uji coba gratis 14 hari penuh tanpa kartu kredit.'
                : 'Zero hidden transaction markups. Full 14-day risk-free access without requiring a credit card.'}
            </p>
          </div>
        </ScrollReveal>

        {/* 2 Clean Cards with Staggered Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1: Growth Plan (Obsidian Card) */}
          <ScrollReveal animation="fade-up" delay={100} className="h-full">
            <div className="h-full rounded-3xl border border-white/10 bg-[#121316] text-white p-8 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#c8f53a]/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
                    {lang === 'id' ? 'Startup & Scaleup' : 'High-Growth Teams'}
                  </span>
                  <span className="px-3 py-0.5 rounded-full bg-[#c8f53a] text-[#121316] text-xs font-black">
                    {lang === 'id' ? 'Paling Populer' : 'Most Popular'}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white mb-2">
                  Growth Pro
                </h3>
                <p className="text-sm text-neutral-300 mb-6">
                  {lang === 'id'
                    ? 'Platform treasury & spend lengkap untuk tim yang bergerak cepat.'
                    : 'Unified treasury and autonomous spend controls for scaling companies.'}
                </p>

                <div className="mb-6 pb-6 border-b border-white/10">
                  <span className="text-4xl font-black text-white tracking-tight">
                    $49
                  </span>
                  <span className="text-sm text-neutral-400 ml-2">/ month</span>
                  <span className="block text-xs text-[#c8f53a] font-semibold mt-1">
                    {lang === 'id' ? '(Ditagih tahunan • Hemat 20%)' : '(Billed annually • Save 20%)'}
                  </span>
                </div>

                <ul className="space-y-3.5 text-sm text-neutral-200 mb-8">
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-[#c8f53a] shrink-0" />
                    <span>{lang === 'id' ? 'Hingga 5 rekening bank terhubung' : 'Up to 5 global connected bank feeds'}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-[#c8f53a] shrink-0" />
                    <span>{lang === 'id' ? 'Kartu virtual & fisik tanpa batas' : 'Unlimited virtual & physical smart cards'}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-[#c8f53a] shrink-0" />
                    <span>{lang === 'id' ? 'Sinkronisasi sub-detik QuickBooks & Xero' : 'Sub-second QuickBooks & Xero ledger sync'}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-[#c8f53a] shrink-0" />
                    <span>{lang === 'id' ? 'Prakiraan runway Monte Carlo 36 bulan' : '36-month Monte Carlo cash runway modeling'}</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={handleStartGrowthTrial}
                className="btn-pill-lime w-full py-3 text-xs gap-2"
              >
                <span>{lang === 'id' ? 'Mulai Uji Coba 14 Hari — $49/bln' : 'Start 14-Day Free Trial — $49/mo'}</span>
                <span className="h-5 w-5 rounded-full bg-[#121316] text-[#c8f53a] flex items-center justify-center text-[10px]">
                  ↗
                </span>
              </button>
            </div>
          </ScrollReveal>

          {/* Card 2: Enterprise Plan (Crisp White) */}
          <ScrollReveal animation="fade-up" delay={200} className="h-full">
            <div className="h-full rounded-3xl border border-border bg-white p-8 sm:p-10 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block">
                    {lang === 'id' ? 'Multi-Entitas Global' : 'Global Corporations'}
                  </span>
                  <span className="px-3 py-0.5 rounded-full bg-neutral-100 text-neutral-800 text-xs font-bold">
                    Enterprise
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#121316] mb-2">
                  Enterprise Scale
                </h3>
                <p className="text-sm text-neutral-500 mb-6">
                  {lang === 'id'
                    ? 'Kontrol multi-anak-perusahaan dengan integrasi ERP kustom.'
                    : 'Institutional governance with custom multi-subsidiary ERP sync.'}
                </p>

                <div className="mb-6 pb-6 border-b border-border">
                  <span className="text-4xl font-black text-[#121316] tracking-tight">
                    $199
                  </span>
                  <span className="text-sm text-neutral-500 ml-2">/ month</span>
                  <span className="block text-xs text-neutral-500 font-medium mt-1">
                    {lang === 'id' ? '(Volume transaksi tanpa batas)' : '(Unlimited entities & transaction volume)'}
                  </span>
                </div>

                <ul className="space-y-3.5 text-sm text-[#121316] mb-8">
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>{lang === 'id' ? 'Entitas global & rekening tak terbatas' : 'Unlimited entities & multi-currency pools'}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>{lang === 'id' ? 'Integrasi dua arah NetSuite & SAP' : 'Custom NetSuite, Sage & SAP two-way sync'}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>{lang === 'id' ? 'Dedicated Treasury & Compliance Partner' : 'Dedicated Treasury & Compliance Partner'}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>{lang === 'id' ? 'SLA Uptime 99.99% & Audit SOC 2 Tahunan' : '99.99% Uptime SLA & Custom Security Reviews'}</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={handleConsultEnterprise}
                className="btn-pill-obsidian w-full py-3 text-xs"
              >
                {lang === 'id' ? 'Jadwalkan Konsultasi Enterprise' : 'Schedule Institutional Consultation'}
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
