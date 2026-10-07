'use client';

import { useLanguage } from '@/lib/i18n-context';
import { Globe } from 'lucide-react';

export function LanguageToggle() {
  const { lang, toggle } = useLanguage();

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white hover:bg-neutral-50 px-2.5 py-1 text-xs text-[#121316] transition-all shadow-2xs group"
      aria-label="Toggle language"
    >
      <Globe className="h-3 w-3 text-neutral-400 group-hover:text-[#121316] transition-colors" />
      <span className="font-extrabold text-[11px] tracking-wider">{lang.toUpperCase()}</span>
    </button>
  );
}
