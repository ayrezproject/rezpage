'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/i18n-context';
import { DocPreviewModal } from '@/components/landing/DocPreviewModal';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { 
  FileText, 
  ShieldCheck, 
  Zap, 
  Lock, 
  Building2, 
  ArrowUpRight, 
  CheckCircle2, 
  TrendingUp, 
  CreditCard
} from 'lucide-react';

export function Hero() {
  const { t, lang } = useLanguage();
  const [docModalOpen, setDocModalOpen] = useState(false);

  const scrollToFeatures = () => {
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
              ⚡ Enterprise Financial Operations • SOC 2 Type II Certified • 99.99% Uptime
            </span>
          </div>

          {/* Product Label */}
          <div className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
            Autonomous Treasury & Cash Flow Intelligence
          </div>

          {/* Hero Display Statement (Rezpage in h1 for Playwright test) */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight max-w-4xl mx-auto mb-4 text-[#121316] leading-[1.12]">
            <span className="block">Rezpage Financial Operations.</span>
            <span className="block text-2xl sm:text-4xl md:text-5xl mt-2 font-extrabold text-[#121316]">
              Autonomous Treasury, Spend Controls & Cash Runway in Real Time.
            </span>
          </h1>

          {/* Bilingual Tagline support */}
          <p className="text-xs sm:text-sm font-semibold text-neutral-500 tracking-wide mb-3">
            {t.hero.tagline}
          </p>

          {/* Body Copy */}
          <p className="text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Consolidate multi-currency bank accounts, automate corporate expense policies, and generate predictive board-ready cash flow forecasts. Close books 5x faster with bank-grade security.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <button
              onClick={scrollToPricing}
              className="btn-pill-lime gap-2 px-6 py-3 text-xs sm:text-sm font-bold shadow-sm"
            >
              <span>{lang === 'id' ? 'Mulai Uji Coba Gratis — Mulai $49/bln' : 'Start Free 14-Day Trial — From $49/mo'}</span>
              <span className="h-5 w-5 rounded-full bg-[#121316] text-[#c8f53a] flex items-center justify-center text-[10px]">
                ↗
              </span>
            </button>

            <button
              onClick={scrollToFeatures}
              className="btn-pill-obsidian px-5 py-3 text-xs sm:text-sm"
            >
              Explore Platform
            </button>

            <button
              onClick={() => setDocModalOpen(true)}
              className="link-highlight ml-1 px-3 py-2 text-xs sm:text-sm font-semibold text-[#121316] hover:text-black flex items-center gap-1.5"
            >
              <FileText className="h-4 w-4 text-[#121316]" />
              <span>{lang === 'id' ? 'Lihat Laporan Q3' : 'View Sample Q3 Report'}</span>
            </button>
          </div>

          {/* Center Product Visual Showcase: Financial Dashboard Mockup */}
          <ScrollReveal animation="fade-up" delay={150}>
            <div className="relative mx-auto max-w-4xl rounded-3xl border border-border bg-[#121316] p-4 sm:p-6 overflow-hidden shadow-2xl text-white">
              {/* Browser Window Header Bar */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-left px-1">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-red-500/80" />
                    <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[11px] font-mono text-neutral-300">
                    <span>https://app.rezpage.com/treasury/dashboard</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <span className="inline-flex items-center gap-1 font-semibold text-[#c8f53a] text-[11px]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#c8f53a]" />
                    Continuous Audit Stream • Active
                  </span>
                  <button
                    onClick={() => setDocModalOpen(true)}
                    className="hidden md:inline-flex items-center gap-1 text-[11px] text-neutral-300 hover:text-white"
                  >
                    <span>Audit Sheet</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </button>
                </div>
              </div>

              {/* Financial Dashboard Interactive Grid Stage */}
              <div className="rounded-2xl bg-[#18191d] border border-white/10 p-4 sm:p-6 text-left space-y-6">
                {/* Metric Cards Header */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-xs text-neutral-400 block mb-1">Total Treasury Cash</span>
                    <div className="flex items-baseline justify-between">
                      <span className="text-2xl font-black text-white">$14,820,490</span>
                      <span className="text-xs font-bold text-emerald-400 flex items-center gap-0.5">
                        <TrendingUp className="h-3 w-3" /> +18.4%
                      </span>
                    </div>
                    <span className="text-[10px] text-neutral-500 mt-1 block">Across 6 Multi-Currency Accounts</span>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-xs text-neutral-400 block mb-1">Burn Rate & Runway</span>
                    <div className="flex items-baseline justify-between">
                      <span className="text-2xl font-black text-[#c8f53a]">34.2 Months</span>
                      <span className="text-xs font-bold text-neutral-300">Net: -$82k/mo</span>
                    </div>
                    <span className="text-[10px] text-neutral-500 mt-1 block">Forecasted with AI Monte Carlo</span>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-xs text-neutral-400 block mb-1">Automated Reconciliation</span>
                    <div className="flex items-baseline justify-between">
                      <span className="text-2xl font-black text-white">99.98%</span>
                      <span className="text-xs font-bold text-[#c8f53a]">0.2s Latency</span>
                    </div>
                    <span className="text-[10px] text-neutral-500 mt-1 block">Synced with NetSuite & Stripe</span>
                  </div>
                </div>

                {/* Simulated Real-Time Transaction Stream */}
                <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <span className="font-bold text-neutral-300 flex items-center gap-2">
                      <CreditCard className="h-3.5 w-3.5 text-[#c8f53a]" />
                      Real-Time Expense Stream & Approval Engine
                    </span>
                    <span className="text-[11px] font-mono text-[#c8f53a] bg-[#c8f53a]/10 px-2 py-0.5 rounded-full">
                      Zero Manual Entry
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="h-7 w-7 rounded-lg bg-[#c8f53a]/20 text-[#c8f53a] flex items-center justify-center font-bold text-[10px]">
                          AWS
                        </div>
                        <div>
                          <span className="font-bold block text-neutral-200">Amazon Web Services • Cloud Compute</span>
                          <span className="text-[10px] text-neutral-500">Auto-Categorized: Infrastructure • Card #4829</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-black text-white block">-$8,420.00</span>
                        <span className="text-[10px] text-emerald-400 font-semibold">Matched & Synced</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="h-7 w-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-[10px]">
                          STR
                        </div>
                        <div>
                          <span className="font-bold block text-neutral-200">Stripe Global Payout Settlement</span>
                          <span className="text-[10px] text-neutral-500">Auto-Sweep: USD Yield Pool • Batch #921</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-black text-[#c8f53a] block">+$142,850.00</span>
                        <span className="text-[10px] text-emerald-400 font-semibold">Auto-Swept (4.85% APY)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Pricing Callout Bar */}
              <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 bg-white/5 border border-white/10 rounded-2xl p-3 sm:px-6 sm:py-3 text-left">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#c8f53a] animate-ping" />
                  <span className="text-xs text-neutral-300">
                    14-Day Full Platform Access: <strong className="text-white">No Credit Card Required</strong>
                  </span>
                </div>
                <button
                  onClick={scrollToPricing}
                  className="btn-pill-lime py-1.5 px-4 text-xs font-bold"
                >
                  Start Instant Setup
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
                <span className="text-xs font-bold text-[#121316] block">SOC 2 Type II</span>
                <span className="text-[11px] text-neutral-500">Independently Audited</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#f7f8fa] border border-border/70">
              <div className="h-8 w-8 rounded-xl bg-white border border-border flex items-center justify-center shrink-0 text-[#121316]">
                <Zap className="h-4 w-4 text-[#121316]" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#121316] block">0.2s Sync</span>
                <span className="text-[11px] text-neutral-500">Continuous Ledger Sync</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#f7f8fa] border border-border/70">
              <div className="h-8 w-8 rounded-xl bg-white border border-border flex items-center justify-center shrink-0 text-[#121316]">
                <Lock className="h-4 w-4 text-[#121316]" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#121316] block">AES-256 GCM</span>
                <span className="text-[11px] text-neutral-500">Military-Grade Encryption</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#f7f8fa] border border-border/70">
              <div className="h-8 w-8 rounded-xl bg-white border border-border flex items-center justify-center shrink-0 text-[#121316]">
                <Building2 className="h-4 w-4 text-[#121316]" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#121316] block">Multi-Entity</span>
                <span className="text-[11px] text-neutral-500">Global Corporate Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Preview Financial Report */}
      <DocPreviewModal
        open={docModalOpen}
        onOpenChange={setDocModalOpen}
      />
    </>
  );
}
