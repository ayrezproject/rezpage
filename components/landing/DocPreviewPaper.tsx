'use client';

import { CheckCircle2, ShieldCheck, Building2 } from 'lucide-react';

export function DocPreviewPaper() {

  return (
    <div className="mt-3 rounded-2xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50/50 dark:bg-neutral-900/50 p-2 sm:p-5 shadow-inner">
      <div className="mx-auto max-w-4xl bg-white text-[#121316] p-5 sm:p-10 rounded-xl shadow-lg border border-neutral-200 text-xs sm:text-[13px] leading-relaxed font-sans">
        {/* Document Header Title */}
        <div className="text-center mb-6 pb-4 border-b-2 border-[#121316] space-y-1">
          <div className="flex items-center justify-between text-left text-neutral-500 text-[11px] mb-2">
            <span>Rezpage Financial OS • Enterprise Audit Stream</span>
            <span className="font-mono text-emerald-600 font-bold flex items-center gap-1">
              <CheckCircle2 className="h-3 w-3" /> US GAAP / IFRS Reconciled
            </span>
          </div>

          <h2 className="text-base sm:text-xl font-black uppercase tracking-tight text-[#121316]">
            EXECUTIVE FINANCIAL INTELLIGENCE & AUDIT REPORT
          </h2>
          <h3 className="text-xs sm:text-sm font-bold text-neutral-600">
            Q3 Consolidated Treasury Position & Runway Modeling
          </h3>

          <div className="inline-flex items-center gap-2 mt-1 px-3 py-0.5 rounded-full bg-neutral-100 border border-neutral-300 text-[11px] font-semibold text-neutral-600">
            <span>Period: Q3 FY2026</span>
            <span>•</span>
            <span>Multi-Entity Consolidation (USD, EUR, SGD)</span>
            <span>•</span>
            <span>Audit Status: Passed (0 Exceptions)</span>
          </div>
        </div>

        {/* Section 1: Executive Cash & Treasury Summary */}
        <div className="mb-6">
          <h4 className="font-black text-[#121316] text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Building2 className="h-3.5 w-3.5 text-[#121316]" />
            I. Consolidated Treasury & Liquidity Position
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
            <div className="p-2.5 rounded-lg bg-neutral-50 border border-neutral-200">
              <span className="text-[10px] text-neutral-500 block">Total Liquid Cash</span>
              <span className="text-sm font-black text-[#121316]">$14,820,490</span>
            </div>
            <div className="p-2.5 rounded-lg bg-neutral-50 border border-neutral-200">
              <span className="text-[10px] text-neutral-500 block">High-Yield Yield APY</span>
              <span className="text-sm font-black text-emerald-600">4.85% Annual</span>
            </div>
            <div className="p-2.5 rounded-lg bg-neutral-50 border border-neutral-200">
              <span className="text-[10px] text-neutral-500 block">Net Monthly Burn</span>
              <span className="text-sm font-black text-neutral-800">-$82,400</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#c8f53a]/20 border border-[#c8f53a]/40">
              <span className="text-[10px] text-neutral-700 font-bold block">Runway Horizon</span>
              <span className="text-sm font-black text-[#121316]">34.2 Months</span>
            </div>
          </div>
        </div>

        {/* Section 2: Statement of Operations Table */}
        <div className="mb-6 overflow-x-auto border border-neutral-300 rounded-lg">
          <table className="w-full border-collapse text-left text-xs sm:text-[12.5px]">
            <tbody>
              <tr className="border-b border-neutral-300 bg-neutral-100 font-bold">
                <td colSpan={3} className="p-2 sm:p-2.5 text-[#121316] uppercase tracking-wide">
                  II. CONSOLIDATED STATEMENT OF OPERATIONS (Q3)
                </td>
                <td className="p-2 sm:p-2.5 text-right font-bold text-[#121316]">Variance (QoQ)</td>
              </tr>
              <tr className="border-b border-neutral-200">
                <td className="p-2 sm:p-2.5 font-bold w-1/3 bg-neutral-50/70 border-r border-neutral-200">Gross Operating Revenue</td>
                <td className="p-2 sm:p-2.5 font-bold" colSpan={2}>$4,850,000</td>
                <td className="p-2 sm:p-2.5 text-right font-bold text-emerald-600">+24.2%</td>
              </tr>
              <tr className="border-b border-neutral-200">
                <td className="p-2 sm:p-2.5 font-bold bg-neutral-50/70 border-r border-neutral-200">Cost of Goods Sold (Cloud & APIs)</td>
                <td className="p-2 sm:p-2.5 text-neutral-700" colSpan={2}>-$840,000</td>
                <td className="p-2 sm:p-2.5 text-right text-neutral-600">-2.1%</td>
              </tr>
              <tr className="border-b border-neutral-200 bg-neutral-50/40">
                <td className="p-2 sm:p-2.5 font-black bg-neutral-100/70 border-r border-neutral-200">Gross Profit (82.7% Margin)</td>
                <td className="p-2 sm:p-2.5 font-black text-[#121316]" colSpan={2}>$4,010,000</td>
                <td className="p-2 sm:p-2.5 text-right font-bold text-emerald-600">+28.5%</td>
              </tr>
              <tr className="border-b border-neutral-200">
                <td className="p-2 sm:p-2.5 font-medium bg-neutral-50/70 border-r border-neutral-200">• Research & Development (R&D)</td>
                <td className="p-2 sm:p-2.5 text-neutral-700" colSpan={2}>-$1,580,000</td>
                <td className="p-2 sm:p-2.5 text-right text-neutral-500">Planned</td>
              </tr>
              <tr className="border-b border-neutral-200">
                <td className="p-2 sm:p-2.5 font-medium bg-neutral-50/70 border-r border-neutral-200">• Sales & Marketing (GTM)</td>
                <td className="p-2 sm:p-2.5 text-neutral-700" colSpan={2}>-$1,180,000</td>
                <td className="p-2 sm:p-2.5 text-right text-neutral-500">Optimized</td>
              </tr>
              <tr className="border-b border-neutral-200">
                <td className="p-2 sm:p-2.5 font-medium bg-neutral-50/70 border-r border-neutral-200">• General & Administrative (G&A)</td>
                <td className="p-2 sm:p-2.5 text-neutral-700" colSpan={2}>-$450,000</td>
                <td className="p-2 sm:p-2.5 text-right text-neutral-500">-12.0%</td>
              </tr>
              <tr className="border-b border-neutral-300 bg-[#c8f53a]/15 font-black">
                <td className="p-2.5 text-[#121316] border-r border-neutral-300">Adjusted EBITDA (16.5% Margin)</td>
                <td className="p-2.5 font-black text-[#121316]" colSpan={2}>+$800,000</td>
                <td className="p-2.5 text-right font-black text-emerald-700">+41.2%</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section 3: Spend Governance & Audit Certification */}
        <div className="p-4 rounded-xl border border-neutral-300 bg-neutral-50 space-y-2 text-xs">
          <div className="flex items-center justify-between font-bold text-[#121316]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              Continuous Cryptographic Audit Verification
            </span>
            <span className="font-mono text-[11px] text-neutral-500">Hash: 8b84-f2a9-c148-77e1</span>
          </div>
          <p className="text-neutral-600 text-[11.5px] leading-relaxed">
            All 42,910 quarterly transactions were ingested via read-only bank feeds, matched to OCR receipts, and validated against internal spending limits with 100% automated rule compliance. Reconciled with general ledger in real time.
          </p>
        </div>
      </div>
    </div>
  );
}
