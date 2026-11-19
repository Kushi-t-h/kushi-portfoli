'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, FileText, ArrowUpRight, Compass } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Step Flow', href: '#step-flow' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Journey', href: '#journey' },
    { label: 'Endorsements', href: '#endorsements' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F0E8]/95 backdrop-blur-md border-b border-[#E3D5C5] shadow-sm py-3.5'
          : 'bg-[#F7F0E8] border-b border-[#E3D5C5]/60 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Monogram */}
          <Link
            href="#overview"
            className="flex items-center gap-3.5 group focus-visible:ring-2 focus-visible:ring-[#B5583C] rounded-xl p-1"
            aria-label="Kushi T H - Home"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#B5583C] text-[#F7F0E8] flex items-center justify-center font-serif font-bold text-lg tracking-wider shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#6B8F71]">
              {PORTFOLIO_DATA.personal.initials}
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg tracking-tight text-[#2B1F1A] leading-tight group-hover:text-[#B5583C] transition-colors">
                {PORTFOLIO_DATA.personal.name}
              </span>
              <span className="text-[11px] font-mono tracking-wider uppercase text-[#2B1F1A]/70">
                Data Science & Software
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-xs uppercase tracking-wider font-mono font-medium text-[#2B1F1A]/80 hover:text-[#B5583C] hover:bg-[#E3D5C5]/40 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.personal.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#2B1F1A] bg-[#E3D5C5]/60 hover:bg-[#6B8F71] hover:text-[#F7F0E8] border border-[#E3D5C5] rounded-xl transition-all duration-300 shadow-sm hover-pop"
              aria-label="Download Official Resume PDF"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#F7F0E8] bg-[#B5583C] hover:bg-[#6B8F71] rounded-xl shadow-sm transition-all duration-300 hover-pop"
            >
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#2B1F1A] hover:text-[#B5583C] hover:bg-[#E3D5C5]/40 rounded-xl transition-colors"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-[#E3D5C5] bg-[#F7F0E8]/98 px-6 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 text-sm font-mono tracking-wider uppercase text-[#2B1F1A] hover:text-[#B5583C] hover:bg-[#E3D5C5]/30 rounded-lg transition-colors border-b border-[#E3D5C5]/40"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 flex flex-col gap-2">
            <a
              href={PORTFOLIO_DATA.personal.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-mono uppercase tracking-wider text-[#2B1F1A] bg-[#E3D5C5] hover:bg-[#6B8F71] hover:text-[#F7F0E8] rounded-xl transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-mono uppercase tracking-wider text-[#F7F0E8] bg-[#B5583C] hover:bg-[#6B8F71] rounded-xl transition-colors"
            >
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
