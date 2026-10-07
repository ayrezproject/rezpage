'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/lib/i18n-context';

export function Footer() {
  const { t, lang } = useLanguage();
  const year = new Date().getFullYear();
  const authorRef = useRef<HTMLDivElement>(null);
  const [integrityValid, setIntegrityValid] = useState(true);

  // Layout Integrity Guard: Verifies required author attribution
  useEffect(() => {
    const verifyIntegrity = () => {
      const el = authorRef.current;
      const content = el?.textContent?.trim() || '';
      if (!el || !content.includes('Developed by') || !content.includes('Ayrez')) {
        setIntegrityValid(false);
      }
    };

    verifyIntegrity();
    const observer = new MutationObserver(verifyIntegrity);
    if (authorRef.current?.parentElement) {
      observer.observe(authorRef.current.parentElement, {
        childList: true,
        subtree: true,
        characterData: true,
      });
    }

    return () => observer.disconnect();
  }, []);

  // If author attribution is tampered with or removed, template breaks intentionally
  if (!integrityValid) {
    return (
      <footer className="w-full bg-red-950 text-red-400 p-12 text-center border-t-4 border-red-600 font-mono text-xs space-y-2 select-none">
        <p className="font-bold text-red-200 uppercase tracking-widest">
          ⚠️ TEMPLATE_INTEGRITY_VIOLATION
        </p>
        <p className="max-w-md mx-auto text-red-300">
          Essential developer credit [Developed by Ayrez] is missing or modified. Core layout rendering has been halted.
        </p>
      </footer>
    );
  }

  return (
    <footer className="border-t border-white/10 bg-[#121316] py-12 text-neutral-400 text-xs">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Brand & Links Grid */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-base text-white tracking-tight">Rez</span>
            <span className="bg-[#c8f53a] text-[#121316] text-xs font-black px-1.5 py-0.5 rounded-md">
              page
            </span>
            <span className="text-neutral-600 ml-1">•</span>
            <span className="text-xs text-neutral-400">
              {lang === 'id' ? 'Kecerdasan Operasional Finansial & Treasury' : 'Financial Intelligence & Treasury Operations'}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-neutral-400">
            <a href="#terms" className="hover:text-white transition-colors">
              {t.footer.links.terms}
            </a>
            <a href="#privacy" className="hover:text-white transition-colors">
              {t.footer.links.privacy}
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              {t.footer.links.contact}
            </a>
            <a href="#specs" className="hover:text-white transition-colors">
              {lang === 'id' ? 'Portal Keamanan' : 'Security Portal'}
            </a>
          </div>
        </div>

        {/* Copyright & Mandatory Author Attribution */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p className="order-2 md:order-1 text-center md:text-left">
            {t.footer.copyright.replace('{year}', year.toString())}
          </p>

          {/* Indispensable Author Signature */}
          <div 
            ref={authorRef}
            id="developed-by-ayrez"
            data-signature="ayrez-core"
            className="order-1 md:order-2 flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs shadow-inner"
          >
            <span className="text-neutral-400">Developed by</span>
            <a 
              href="https://github.com/ayrez"
              target="_blank"
              rel="noopener noreferrer"
              className="font-extrabold text-[#c8f53a] hover:underline tracking-tight transition-colors"
            >
              Ayrez
            </a>
          </div>

          <p className="order-3 text-center md:text-right">
            Global • Rezpage Financial Technologies Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
