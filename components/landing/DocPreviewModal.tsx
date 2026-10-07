'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { 
  FileText, 
  Download, 
  Printer, 
  Sparkles, 
  CheckCircle2,
  ShieldCheck,
  Lock
} from 'lucide-react';
import { DocPreviewPaper } from './DocPreviewPaper';
import { useLanguage } from '@/lib/i18n-context';

interface DocPreviewModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DocPreviewModal({ open, onOpenChange }: DocPreviewModalProps) {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<'paper' | 'summary'>('paper');

  const handlePrint = () => {
    window.print();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[92vh] overflow-y-auto p-4 sm:p-6 bg-white dark:bg-[#121316] text-[#121316] dark:text-neutral-100">
        <DialogHeader className="border-b border-neutral-200 dark:border-neutral-800 pb-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-[#121316] text-[#c8f53a] flex items-center justify-center font-bold">
                <FileText className="h-4 w-4" />
              </div>
              <div>
                <DialogTitle className="text-base sm:text-lg font-bold text-[#121316] dark:text-white flex items-center gap-2">
                  <span>{lang === 'id' ? 'Laporan Finansial Kuartalan: Q3_Audit_Report.pdf' : 'Quarterly Audit Report: Q3_Financial_Statement.pdf'}</span>
                  <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-[#c8f53a] text-[#121316] text-[10px] font-extrabold uppercase">
                    US GAAP / IFRS
                  </span>
                </DialogTitle>
                <p className="text-[11px] text-neutral-500">
                  Rezpage Multi-Entity Holdings • Consolidated Treasury Position • 0 Reconciliation Errors
                </p>
              </div>
            </div>

            {/* View switcher tabs */}
            <div className="flex items-center gap-1 bg-neutral-100 dark:bg-neutral-800 p-1 rounded-full text-xs">
              <button
                type="button"
                onClick={() => setActiveTab('paper')}
                className={`px-3 py-1 rounded-full transition-all font-semibold ${
                  activeTab === 'paper'
                    ? 'bg-white dark:bg-[#121316] text-[#121316] dark:text-white shadow-2xs'
                    : 'text-neutral-500 hover:text-[#121316]'
                }`}
              >
                {lang === 'id' ? 'Lembar Audit Q3' : 'Audit Statement'}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('summary')}
                className={`px-3 py-1 rounded-full transition-all font-semibold ${
                  activeTab === 'summary'
                    ? 'bg-white dark:bg-[#121316] text-[#121316] dark:text-white shadow-2xs'
                    : 'text-neutral-500 hover:text-[#121316]'
                }`}
              >
                {lang === 'id' ? 'Kepatuhan & Sertifikasi' : 'Governance & Posture'}
              </button>
            </div>
          </div>
          <DialogDescription className="text-xs text-neutral-500 mt-1">
            {lang === 'id'
              ? 'Laporan hasil kompilasi otomatis dari engine rekonsiliasi Rezpage secara real-time, siap diekspor ke dewan direksi dan auditor eksternal.'
              : 'Automated executive statement compiled by the Rezpage continuous reconciliation engine, formatted for board reviews and external auditors.'}
          </DialogDescription>
        </DialogHeader>

        {activeTab === 'paper' ? (
          /* High-Fidelity Paper Page */
          <DocPreviewPaper />
        ) : (
          /* Regulatory & Architecture Summary Tab */
          <div className="mt-3 p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 space-y-4 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-[#121316] dark:text-white font-bold text-sm sm:text-base">
              <Sparkles className="h-4 w-4 text-[#c8f53a]" />
              <span>{lang === 'id' ? 'Verifikasi Standar Tata Kelola Finansial' : 'Institutional Governance & Audit Verification'}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121316]">
                <div className="font-bold text-[#121316] dark:text-white mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>SOC 2 Type II Certified</span>
                </div>
                <p className="text-neutral-500 text-xs">
                  {lang === 'id'
                    ? 'Diaudit oleh kantor akuntan publik independen dengan continuous evidence monitoring.'
                    : 'Audited by independent top-tier CPA firms with continuous cryptographic evidence monitoring.'}
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121316]">
                <div className="font-bold text-[#121316] dark:text-white mb-1 flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-500" />
                  <span>Sub-Second Reconciliation</span>
                </div>
                <p className="text-neutral-500 text-xs">
                  {lang === 'id'
                    ? 'Seluruh mutasi bank dan kartu terpetakan ke chart-of-accounts ERP tanpa intervensi manual.'
                    : 'All multi-currency banking events mapped into general ledger accounts with 99.98% automated precision.'}
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121316]">
                <div className="font-bold text-[#121316] dark:text-white mb-1 flex items-center gap-1.5">
                  <Lock className="h-4 w-4 text-emerald-500" />
                  <span>Zero-Knowledge Tokens</span>
                </div>
                <p className="text-neutral-500 text-xs">
                  {lang === 'id'
                    ? 'Kredensial perbankan dienkripsi menggunakan kunci KMS level hardware (HSM).'
                    : 'Institutional banking credentials isolated behind hardware security modules (HSM) and AES-256 GCM.'}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121316] space-y-2">
              <h4 className="font-bold text-[#121316] dark:text-white">
                {lang === 'id' ? 'Metadata Ringkasan Laporan:' : 'Audit Compilation Metadata:'}
              </h4>
              <ul className="space-y-1 text-xs text-neutral-600 dark:text-neutral-400">
                <li>• <strong>Reporting Group:</strong> Rezpage Global Technologies Inc. & Affiliates</li>
                <li>• <strong>Accounting Framework:</strong> US GAAP / IFRS Standardized</li>
                <li>• <strong>Consolidated Accounts:</strong> JPMorgan Chase, Silicon Valley Bank, Barclays, DBS Singapore</li>
                <li>• <strong>Reconciliation Status:</strong> 42,910 of 42,910 Transactions Matched (100.0%)</li>
                <li>• <strong>Runway Forecast:</strong> 34.2 Months (P95 Monte Carlo Confidence Horizon)</li>
              </ul>
            </div>
          </div>
        )}

        {/* Modal Bottom Actions */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-neutral-200 dark:border-neutral-800 pt-3">
          <p className="text-xs text-neutral-500">
            *Board-ready executive report compiled with tamper-evident cryptographic checksums.
          </p>
          <div className="flex items-center gap-2">
            <button 
              type="button" 
              onClick={handlePrint} 
              className="btn-pill-outline text-xs py-1.5 px-3 flex items-center gap-1.5"
            >
              <Printer className="h-3.5 w-3.5 text-neutral-500" />
              <span>{lang === 'id' ? 'Cetak / Ekspor PDF' : 'Print / Export PDF'}</span>
            </button>
            <button 
              type="button"
              onClick={handlePrint}
              className="btn-pill-obsidian text-xs py-1.5 px-3.5 flex items-center gap-1.5 shadow-xs hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Download className="h-3.5 w-3.5 text-[#c8f53a]" />
              <span>{lang === 'id' ? 'Ekspor Laporan Resmi' : 'Download Executive Report'}</span>
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
