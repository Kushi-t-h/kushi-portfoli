'use client';

import React from 'react';
import Link from 'next/link';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { ArrowUp, Heart, Code2 } from 'lucide-react';

export default function Footer() {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2B1F1A] text-[#F7F0E8] border-t border-[#E3D5C5]/20 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between">
          {/* Brand & Identity (6 cols) */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#B5583C] text-white flex items-center justify-center font-serif font-bold text-lg shadow-sm">
                {personal.initials}
              </div>
              <div>
                <p className="font-serif font-bold text-xl leading-tight">
                  {personal.name}
                </p>
                <p className="text-xs font-mono text-[#E3D5C5]/70">
                  {personal.tagline} · CMRIT Bengaluru
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm font-sans text-[#E3D5C5]/80 max-w-md leading-relaxed">
              Designed with a warm earthy aesthetic, architectural rhythm, and verified data from Kushi T H&apos;s academic and project trajectory.
            </p>
          </div>

          {/* Quick Nav & Back to Top (6 cols) */}
          <div className="md:col-span-6 flex flex-col md:items-end justify-between space-y-6">
            <div className="flex flex-wrap gap-4 text-xs font-mono uppercase tracking-wider text-[#E3D5C5]/80">
              <a href="#overview" className="hover:text-[#B5583C] transition-colors">Overview</a>
              <a href="#step-flow" className="hover:text-[#B5583C] transition-colors">Step Flow</a>
              <a href="#expertise" className="hover:text-[#B5583C] transition-colors">Expertise</a>
              <a href="#journey" className="hover:text-[#B5583C] transition-colors">Journey</a>
              <a href="#contact" className="hover:text-[#B5583C] transition-colors">Contact</a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/10 hover:bg-[#6B8F71] text-[#F7F0E8] font-mono text-xs font-semibold uppercase tracking-wider transition-colors border border-white/10"
              aria-label="Scroll back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Micro Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono text-[#E3D5C5]/60">
          <div>
            © 2026 {personal.name}. All verified credentials authentic to CMRIT CV.
          </div>
          <div className="flex items-center gap-2">
            <span>Next.js App Router · Tailwind CSS · TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
