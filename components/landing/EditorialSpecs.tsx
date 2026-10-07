'use client';

import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { useLanguage } from '@/lib/i18n-context';

export function EditorialSpecs() {
  const { lang } = useLanguage();

  const specs = [
    {
      label: lang === 'id' ? 'Kepatuhan & Sertifikasi' : 'Compliance & Audits',
      value: 'SOC 2 Type II & ISO 27001',
      desc: lang === 'id' 
        ? 'Diaudit independen secara berkala dengan pemantauan kepatuhan keamanan 24/7.'
        : 'Independently audited annually with real-time automated posture monitoring.',
    },
    {
      label: lang === 'id' ? 'Enkripsi Data' : 'Data Cryptography',
      value: 'AES-256 GCM & TLS 1.3',
      desc: lang === 'id'
        ? 'Arsitektur zero-knowledge dengan enkripsi penuh in-transit dan at-rest.'
        : 'Zero-knowledge architecture with customer-managed keys (KMS) and end-to-end encryption.',
    },
    {
      label: lang === 'id' ? 'Ketersediaan Sistem' : 'High Availability SLA',
      value: '99.99% Guaranteed Uptime',
      desc: lang === 'id'
        ? 'Redundansi multi-region aktif dengan pemulihan bencana otomatis.'
        : 'Active-active multi-region failover with sub-second disaster recovery protocols.',
    },
    {
      label: lang === 'id' ? 'Throughput Sinkronisasi' : 'Ledger Throughput',
      value: '< 200ms Sync Latency',
      desc: lang === 'id'
        ? 'Pemrosesan data real-time mendukung hingga 100.000+ transaksi harian.'
        : 'High-frequency streaming engine supporting 100,000+ concurrent financial events.',
    },
  ];

  return (
    <section id="specs" className="py-24 bg-white border-t border-border">
      <div className="container mx-auto px-4 max-w-5xl">
        <ScrollReveal animation="fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121316] text-[#c8f53a] text-xs font-bold mb-3">
                {lang === 'id' ? 'Spesifikasi & Keamanan' : 'Security & Trust Infrastructure'}
              </span>
              <h2 className="text-feature-heading text-[#121316] mb-4">
                {lang === 'id' 
                  ? 'Dirancang untuk standar institusional. Diberdayakan untuk kecepatan scaleup.'
                  : 'Engineered for institutional rigor. Built for startup agility.'}
              </h2>
            </div>

            <div className="lg:col-span-7">
              <p className="text-body-clean text-base leading-relaxed mb-4">
                {lang === 'id'
                  ? 'Kami menghapus kompromi antara kecepatan operasional dan keamanan data finansial. Rezpage mematuhi protokol perbankan internasional paling ketat, menjamin integritas pembukuan dan perlindungan aset di seluruh anak perusahaan.'
                  : 'We eliminate the tradeoff between operational velocity and fiduciary security. Rezpage adheres to the world’s strictest banking data protocols, ensuring uninterrupted audit readiness and tamper-proof ledger integrity.'}
              </p>
              <p className="text-body-clean text-base leading-relaxed">
                {lang === 'id'
                  ? 'Dukungan tokenisasi institusi menjaga kredensial bank Anda tetap terisolasi dan tidak pernah disimpan dalam bentuk teks polos.'
                  : 'Hardware-level tokenization ensures your direct banking login credentials are never stored or exposed to external networks.'}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Specs Grid: 4 Clean Minimalist Data Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-border">
          {specs.map((item, idx) => (
            <ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
              <div className="space-y-1.5 p-4 rounded-2xl bg-[#f7f8fa] border border-border/50 h-full">
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                  {item.label}
                </span>
                <h4 className="text-base font-bold text-[#121316]">
                  {item.value}
                </h4>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
