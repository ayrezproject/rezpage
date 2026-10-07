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
  CheckCircle2 
} from 'lucide-react';
import { DocPreviewPaper } from './DocPreviewPaper';

interface DocPreviewModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DocPreviewModal({ open, onOpenChange }: DocPreviewModalProps) {
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
                  <span>Pratinjau Dokumen Hasil: RPM.docx</span>
                  <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-[#c8f53a] text-[#121316] text-[10px] font-extrabold uppercase">
                    Format Baku F4
                  </span>
                </DialogTitle>
                <p className="text-[11px] text-neutral-500">
                  SMK Negeri 1 Jogonalan • Konsentrasi Keahlian Teknik Komputer & Jaringan • Zainal Mustofa, S.Kom
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
                Lembar Dokumen F4
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
                Ringkasan Regulasi
              </button>
            </div>
          </div>
          <DialogDescription className="text-xs text-neutral-500 mt-1">
            Naskah asli hasil ekspor RPM Generator AI berbasis Microsoft Word (.docx), berstandar format baku 54 baris Kurikulum Merdeka Kemendikbudristek.
          </DialogDescription>
        </DialogHeader>

        {activeTab === 'paper' ? (
          /* High-Fidelity Paper Page (Folio F4 Style Component) */
          <DocPreviewPaper />
        ) : (
          /* Regulatory & Architecture Summary Tab */
          <div className="mt-3 p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 space-y-4 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-[#121316] dark:text-white font-bold text-sm sm:text-base">
              <Sparkles className="h-4 w-4 text-[#c8f53a]" />
              <span>Verifikasi Kesesuaian Standar Dokumen RPM.docx</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121316]">
                <div className="font-bold text-[#121316] dark:text-white mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>54 Baris × 15 Kolom</span>
                </div>
                <p className="text-neutral-500 text-xs">
                  Struktur tabel matriks identik 100% dengan regulasi administrasi pembelajaran Kurikulum Merdeka Kemendikbudristek RI.
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121316]">
                <div className="font-bold text-[#121316] dark:text-white mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Folio F4 (215 × 330 mm)</span>
                </div>
                <p className="text-neutral-500 text-xs">
                  Format tata letak baku kertas Folio F4 yang digunakan pada instansi pendidikan dan pengawas sekolah di Indonesia.
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121316]">
                <div className="font-bold text-[#121316] dark:text-white mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Word .docx Terbuka</span>
                </div>
                <p className="text-neutral-500 text-xs">
                  Dihasilkan tanpa password atau sandi enkripsi, sehingga nama guru, kepala sekolah, dan data lab dapat langsung disunting di Word.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121316] space-y-2">
              <h4 className="font-bold text-[#121316] dark:text-white">Metadata Dokumen Asli yang Dianalisa:</h4>
              <ul className="space-y-1 text-xs text-neutral-600 dark:text-neutral-400">
                <li>• <strong>Berkas Sumber:</strong> <code>RPM.docx</code> (Ukuran: 31 KB)</li>
                <li>• <strong>Satuan Pendidikan:</strong> SMK Negeri 1 Jogonalan</li>
                <li>• <strong>Guru Mata Pelajaran:</strong> Zainal Mustofa, S.Kom</li>
                <li>• <strong>Konsentrasi:</strong> Teknik Komputer dan Jaringan (TKJ) — Materi: Routing Statis MikroTik RouterOS</li>
                <li>• <strong>Status Diferensiasi:</strong> 3 Level Kesiapan (6 / 24 / 6 Siswa) & 3 Modalitas Belajar (14 / 12 / 10 Siswa)</li>
              </ul>
            </div>
          </div>
        )}

        {/* Modal Bottom Actions */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-neutral-200 dark:border-neutral-800 pt-3">
          <p className="text-xs text-neutral-500">
            *Berkas asli siap diunduh dan dibuka langsung di Microsoft Word, LibreOffice, atau Google Docs.
          </p>
          <div className="flex items-center gap-2">
            <button 
              type="button" 
              onClick={handlePrint} 
              className="btn-pill-outline text-xs py-1.5 px-3 flex items-center gap-1.5"
            >
              <Printer className="h-3.5 w-3.5 text-neutral-500" />
              <span>Cetak / Cetak PDF</span>
            </button>
            <a 
              href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/documents/RPM_Contoh_Kurikulum_Merdeka.docx`} 
              download="RPM_SMKN1_Jogonalan_Kurikulum_Merdeka.docx"
              className="btn-pill-obsidian text-xs py-1.5 px-3.5 flex items-center gap-1.5 shadow-xs hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Download className="h-3.5 w-3.5 text-[#c8f53a]" />
              <span>Unduh RPM.docx Asli</span>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
