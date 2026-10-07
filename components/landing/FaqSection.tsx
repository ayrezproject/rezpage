'use client';

import { useState } from 'react';
import { ChevronDown, ShieldCheck, Database, CreditCard, Rocket } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { useLanguage } from '@/lib/i18n-context';

export function FaqSection() {
  const { lang } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      icon: ShieldCheck,
      question: lang === 'id' 
        ? 'Bagaimana Rezpage menghubungkan rekening bank tanpa mengekspos kredensial?' 
        : 'How does Rezpage connect to bank accounts without exposing sensitive credentials?',
      answer: lang === 'id'
        ? 'Rezpage menggunakan token read-only terenkripsi via protokol Open Banking institusional berstandar SOC 2 Type II. Sandi atau token perbankan Anda tidak pernah disimpan di server kami dan tidak memiliki izin penarikan dana tanpa otorisasi bertingkat.'
        : 'Rezpage establishes read-only cryptographic connections through institutional Open Banking APIs certified under SOC 2 Type II. Your bank login credentials never touch our servers, and programmatic withdrawals cannot be executed without explicit multi-party approval policies.',
    },
    {
      icon: Database,
      question: lang === 'id'
        ? 'Sistem ERP dan software akuntansi apa saja yang didukung secara natif?'
        : 'Which ERPs and general ledger platforms are supported out of the box?',
      answer: lang === 'id'
        ? 'Rezpage memiliki integrasi dua arah instan dengan QuickBooks Online, NetSuite, Xero, Sage Intacct, dan SAP. Seluruh transaksi, pajak, dan kode departemen dipetakan secara otomatis dengan akurasi 99.98%.'
        : 'Rezpage features native, bi-directional sync with NetSuite, QuickBooks Online, Xero, Sage Intacct, and SAP. All transaction metadata, tax codes, and department cost centers are mapped continuously with 99.98% reconciliation precision.',
    },
    {
      icon: CreditCard,
      question: lang === 'id'
        ? 'Dapatkah kami menerbitkan kartu korporat fisik & virtual dengan batas merchant?'
        : 'Can we issue physical and virtual corporate cards with merchant-level restrictions?',
      answer: lang === 'id'
        ? 'Ya! Anda dapat menerbitkan kartu virtual tanpa batas dalam hitungan detik untuk langganan software atau karyawan baru. Anda dapat mengunci kartu ke merchant tertentu (misal hanya AWS atau Google Cloud) serta menetapkan batas kedaluwarsa otomatis.'
        : 'Yes. You can generate unlimited virtual cards in seconds for specific vendors or project teams. Restrict spend by merchant category (e.g. cloud compute only), set monthly hard limits, and automatically freeze inactive cards.',
    },
    {
      icon: Rocket,
      question: lang === 'id'
        ? 'Berapa lama waktu implementasi dan onboarding untuk uji coba 14 hari?'
        : 'How fast can our finance team onboard during the 14-day free trial?',
      answer: lang === 'id'
        ? 'Kurang dari 5 menit. Tidak membutuhkan tim IT atau perubahan infrastruktur. Cukup tautkan akun pertama Anda, dan model prakiraan runway serta analitik kas langsung tersedia seketika.'
        : 'Under 5 minutes. No custom engineering or IT setup is required. Connect your first primary banking feed, and your live treasury analytics and Monte Carlo runway models populate immediately.',
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
              {lang === 'id' ? 'Pertanyaan Umum' : 'Frequently Asked Questions'}
            </span>
            <h2 className="text-feature-heading text-[#121316] mb-3">
              {lang === 'id' ? 'Pertanyaan yang Kerap Diajukan Tim Finansial' : 'Frequently Asked by Financial Leaders'}
            </h2>
            <p className="text-body-clean max-w-xl mx-auto">
              {lang === 'id'
                ? 'Semua hal yang perlu Anda ketahui mengenai integrasi bank, keamanan data, dan penerbitan kartu.'
                : 'Everything you need to know about security, accounting compatibility, and institutional onboarding.'}
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
