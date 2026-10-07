'use client';

import { useLanguage } from '@/lib/i18n-context';

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

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
            <span className="text-xs text-neutral-400">RPM Kurikulum Merdeka AI</span>
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
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-neutral-500">
          <p>
            {t.footer.copyright.replace('{year}', year.toString())}
          </p>
          <p>
            Indonesia • Rezpage Educational Technology
          </p>
        </div>
      </div>
    </footer>
  );
}
