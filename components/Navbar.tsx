'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  FileText, 
  Tag, 
  Menu, 
  X, 
  ChevronRight, 
  Zap, 
  ArrowUpRight 
} from 'lucide-react';
import { useLanguage } from '@/lib/i18n-context';
import { LanguageToggle } from '@/components/LanguageToggle';
import { cn } from '@/lib/utils';

interface NavItem {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  desc?: string;
}

export function Navbar() {
  const { lang } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const navRef = useRef<HTMLDivElement>(null);

  // Scroll detection & active section spy
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18);

      const sections = ['features', 'problem-solution', 'how-it-works', 'specs', 'pricing'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on click outside or escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
      }
    };

    if (mobileOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileOpen]);

  const navItems: NavItem[] = [
    { 
      href: '#features', 
      label: lang === 'id' ? 'Fitur Utama' : 'Features', 
      icon: Sparkles,
      desc: lang === 'id' ? 'Treasury & Kontrol Belanja' : 'Treasury & Spend Controls'
    },
    { 
      href: '#problem-solution', 
      label: lang === 'id' ? 'Solusi' : 'Solution', 
      icon: ShieldCheck,
      desc: lang === 'id' ? 'Spreadsheet vs Real-Time OS' : 'Manual vs Autonomous'
    },
    { 
      href: '#how-it-works', 
      label: lang === 'id' ? 'Cara Kerja' : 'Workflow', 
      icon: Layers,
      desc: lang === 'id' ? 'Integrasi Bank & ERP 3 Menit' : '3-Minute Bank & ERP Sync'
    },
    { 
      href: '#specs', 
      label: lang === 'id' ? 'Keamanan' : 'Security', 
      icon: FileText,
      desc: lang === 'id' ? 'SOC 2 & Enkripsi AES-256' : 'SOC 2 & Bank-Grade APIs'
    },
    { 
      href: '#pricing', 
      label: lang === 'id' ? 'Biaya' : 'Pricing', 
      icon: Tag,
      desc: lang === 'id' ? 'Skala Fleksibel Tanpa Markup' : 'Transparent Tiering'
    },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setMobileOpen(false);
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-3 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none transition-all duration-300">
      <div ref={navRef} className="container mx-auto max-w-5xl pointer-events-auto">
        {/* Floating Capsule Island */}
        <div
          className={cn(
            'rounded-full border border-neutral-200/90 bg-white/90 backdrop-blur-2xl transition-all duration-300',
            'shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.09)]',
            isScrolled ? 'py-1.5 px-3 sm:px-4 shadow-md bg-white/95' : 'py-2 px-3.5 sm:px-5'
          )}
        >
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Left: Brand Identity */}
            <div className="flex items-center gap-2.5">
              <Link 
                href="/" 
                className="flex items-center gap-2 group outline-none"
                aria-label="Rezpage Home"
              >
                {/* Modern Brand Mark Glyph */}
                <div className="h-7 w-7 rounded-lg bg-[#121316] flex items-center justify-center text-[#c8f53a] shadow-xs group-hover:scale-105 group-hover:rotate-3 transition-transform">
                  <Zap className="h-3.5 w-3.5 fill-[#c8f53a]" />
                </div>
                <div className="flex items-center">
                  <span className="text-base sm:text-lg font-black tracking-tight text-[#121316]">
                    Rez<span className="px-1.5 py-0.5 rounded-md bg-[#c8f53a] text-[#121316] text-[11px] font-black inline-block align-middle ml-0.5 group-hover:scale-105 transition-transform">page</span>
                  </span>
                </div>
              </Link>
            </div>

            {/* Center: Nav Items Capsule */}
            <nav 
              className="hidden md:flex items-center gap-1 rounded-full bg-neutral-100/90 p-1 border border-neutral-200/60 shadow-inner"
              aria-label="Main Navigation"
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                const Icon = item.icon;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      'px-3.5 py-1 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 relative',
                      isActive
                        ? 'bg-white text-[#121316] shadow-2xs font-bold scale-[1.02]'
                        : 'text-neutral-600 hover:text-[#121316] hover:bg-white/80'
                    )}
                  >
                    <Icon className={cn('h-3 w-3', isActive ? 'text-[#121316]' : 'text-neutral-400')} />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </nav>

            {/* Right: Actions (Language + High Energy CTA) */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              <LanguageToggle />

              {/* Primary High-Impact CTA */}
              <a
                href="#pricing"
                onClick={(e) => handleNavClick(e, '#pricing')}
                className="group relative overflow-hidden btn-pill-lime text-xs font-extrabold py-1.5 sm:py-2 px-3.5 sm:px-4 shadow-sm flex items-center gap-1.5 hover:scale-[1.03] active:scale-[0.98] transition-all"
              >
                <span className="tracking-tight">{lang === 'id' ? 'Mulai Sekarang' : 'Start Trial'}</span>
                <span className="h-4 w-4 rounded-full bg-[#121316] text-[#c8f53a] flex items-center justify-center text-[10px] font-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  ↗
                </span>
              </a>

              {/* Mobile Menu Hamburger Toggle */}
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden flex items-center justify-center h-8 w-8 rounded-full border border-neutral-200 bg-white hover:bg-neutral-50 text-[#121316] transition-all shadow-2xs"
                aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Island */}
        {mobileOpen && (
          <div className="md:hidden mt-2 p-3.5 rounded-3xl border border-neutral-200/90 bg-white/95 backdrop-blur-2xl shadow-xl space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            {/* Quick Engine Notice */}
            <div className="flex items-center justify-between px-3 py-2 rounded-2xl bg-[#121316] text-white">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#c8f53a] animate-pulse" />
                <span className="text-xs font-bold">SOC 2 Type II Certified</span>
              </div>
              <span className="text-[10px] font-extrabold text-[#c8f53a] bg-white/10 px-2 py-0.5 rounded-full">
                99.99% SLA
              </span>
            </div>

            {/* Mobile Navigation Links */}
            <div className="grid grid-cols-1 gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      'flex items-center justify-between px-3 py-2.5 rounded-2xl transition-all',
                      isActive ? 'bg-neutral-100 font-bold text-[#121316]' : 'hover:bg-neutral-50 text-neutral-700'
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-7 w-7 rounded-xl bg-neutral-100 flex items-center justify-center text-[#121316]">
                        <Icon className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#121316]">
                          {item.label}
                        </div>
                        {item.desc && (
                          <div className="text-[10px] text-neutral-500 font-normal">{item.desc}</div>
                        )}
                      </div>
                    </div>
                    <ChevronRight className="h-3.5 w-3.5 text-neutral-400" />
                  </a>
                );
              })}
            </div>

            {/* Mobile Footer Action */}
            <div className="pt-2 border-t border-neutral-100 flex items-center justify-between gap-2">
              <div className="text-[11px] text-neutral-500">
                Growth Plan: <strong className="text-[#121316]">$49 / mo</strong>
              </div>
              <a
                href="#pricing"
                onClick={(e) => handleNavClick(e, '#pricing')}
                className="btn-pill-lime text-xs font-bold py-1.5 px-3 flex items-center gap-1 shadow-xs"
              >
                <span>{lang === 'id' ? 'Mulai Sekarang' : 'Start Trial'}</span>
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
