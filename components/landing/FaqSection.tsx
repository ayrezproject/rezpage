'use client';

import { useState } from 'react';
import { ChevronDown, ShieldCheck, FileEdit, RefreshCw } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      icon: ShieldCheck,
      question: 'Apakah format RPM ini sah dan sesuai standar pengawas/dinas?',
      answer:
        'Ya, 100% sah! Format mengacu pada struktur baku Kurikulum Merdeka berstandar matriks 54 baris × 15 kolom, mencakup Identitas Modul, Karakteristik Mapel, Profil Peserta Didik, Dimensi Profil Lulusan (DPL 1–8), Desain Pembelajaran Berdiferensiasi, Instrumen Asesmen, hingga Lembar Pengesahan tanda tangan Kepala Sekolah dan NIP.',
    },
    {
      icon: FileEdit,
      question: 'Apakah hasil unduhan bisa diedit kembali di Microsoft Word?',
      answer:
        'Tentu saja! Berkas diunduh dalam format Microsoft Word (.docx) asli tanpa proteksi atau watermark yang mengunci. Anda bebas mengubah nama sekolah, menyesuaikan alur kegiatan, menambahkan logo KOP sekolah, atau membukanya di Microsoft Word, Google Docs, dan WPS Office.',
    },
    {
      icon: RefreshCw,
      question: 'Bagaimana jika kuota atau masa aktif saya habis?',
      answer:
        'Anda dapat melakukan perpanjangan instan langsung melalui menu langganan via Mayar Payment Gateway. Pembayaran mendukung QRIS (semua e-wallet dan m-banking), Virtual Account, dan langsung aktif otomatis dalam 5–15 detik tanpa perlu konfirmasi manual.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-white border-t border-border relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121316] text-[#c8f53a] text-xs font-bold mb-3">
              Pertanyaan Umum
            </span>
            <h2 className="text-feature-heading text-[#121316] mb-3">
              Kerap Ditanyakan Guru & Sekolah
            </h2>
            <p className="text-body-clean max-w-xl mx-auto">
              Semua hal yang perlu Anda ketahui mengenai legalitas format, pengeditan berkas, dan sistem pembayaran.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const Icon = faq.icon;
            return (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 80}>
                <div
                  className="rounded-2xl border border-border bg-white overflow-hidden shadow-2xs transition-colors hover:border-[#121316]/30"
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-xl bg-[#f7f8fa] text-[#121316] flex items-center justify-center shrink-0">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-sm sm:text-base font-bold text-[#121316]">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 text-neutral-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#121316]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-border/40 bg-[#f7f8fa]/50">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
