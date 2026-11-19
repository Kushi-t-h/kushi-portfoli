'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowDown, Sparkles, Award, MapPin, Trophy, ShieldCheck, Terminal, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Hero() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section
      id="overview"
      className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden pattern-grid border-b border-[#E3D5C5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Asymmetric Breadcrumb / Status Pill */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#E3D5C5]/60 border border-[#E3D5C5] text-[#2B1F1A] text-xs font-mono uppercase tracking-wider shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#6B8F71] animate-pulse" />
            <span>Open to 2025/2026 Engineering Internships</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#2B1F1A]/70">
            <MapPin className="w-3.5 h-3.5 text-[#B5583C]" />
            <span>CMR Institute of Technology · Bengaluru, India</span>
          </div>
        </div>

        {/* Asymmetrical Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Expressive Headline & Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#B5583C] font-semibold">
                — Engineering Portfolio & Technical Case Studies
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl xl:text-6xl text-[#2B1F1A] leading-[1.12] tracking-tight">
              Engineering rigorous software, from{' '}
              <span className="text-[#B5583C] underline decoration-[#E3D5C5] decoration-wavy decoration-2 underline-offset-8">
                predictive cloud telemetry
              </span>{' '}
              to high-integrity database systems.
            </h1>

            <p className="text-base sm:text-lg text-[#2B1F1A]/80 leading-relaxed max-w-2xl font-sans">
              I am <strong className="font-semibold text-[#2B1F1A]">{personal.name}</strong>, a Computer Science & Data Science engineering student at CMRIT (CGPA 9.13). I bridge algorithmic data architectures with full-stack execution, bringing the discipline of a state-level volleyball captain to production-ready software.
            </p>

            {/* CTAs & Social Links */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#step-flow"
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#B5583C] hover:bg-[#6B8F71] text-[#F7F0E8] font-mono text-xs font-semibold uppercase tracking-wider rounded-2xl shadow-md transition-all duration-300 hover-pop"
              >
                <span>Explore Step Flow</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={personal.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white border-2 border-[#E3D5C5] hover:border-[#6B8F71] text-[#2B1F1A] font-mono text-xs font-semibold uppercase tracking-wider rounded-2xl shadow-sm transition-all duration-300 hover-pop"
              >
                <span>Official Resume</span>
                <ArrowUpRight className="w-4 h-4 text-[#B5583C]" />
              </a>
            </div>

            {/* Micro Badges Strip */}
            <div className="pt-4 flex flex-wrap gap-2 text-[11px] font-mono">
              <span className="px-3 py-1 rounded-lg bg-white/80 border border-[#E3D5C5] text-[#2B1F1A] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B5583C]" /> 13 Pytest Suites Validated
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/80 border border-[#E3D5C5] text-[#2B1F1A] flex items-center gap-1.5">
                <Trophy className="w-3.5 h-3.5 text-[#6B8F71]" /> SIH Hackathon 1st Place
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/80 border border-[#E3D5C5] text-[#2B1F1A] flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#B5583C]" /> 2,000+ Cleaned MySQL Rows
              </span>
            </div>
          </div>

          {/* Right Column: Sculptural Framed Portrait & Live Metric Capsule (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="relative w-full max-w-sm">
              {/* Decorative Earthy Backdrop Card */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#E3D5C5] via-[#E3D5C5]/60 to-[#F7F0E8] border border-[#E3D5C5] transform rotate-1" />

              {/* Main Portrait Card with user-specified hover-pop effect */}
              <div className="relative rounded-3xl bg-white border-2 border-[#E3D5C5] p-3 shadow-xl hover-pop overflow-hidden">
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#E3D5C5]/40">
                  <Image
                    src="/kushi-portrait.jpg"
                    alt="Kushi T H — Computer Science & Data Science Engineer"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                    className="object-cover object-top hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  {/* Subtle Gradient Shade at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B1F1A]/60 via-transparent to-transparent opacity-60" />

                  {/* Overlaid Label on Portrait */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 backdrop-blur-sm border border-[#E3D5C5] shadow-sm">
                    <p className="font-serif font-bold text-sm text-[#2B1F1A]">Kushi T H</p>
                    <p className="text-[11px] font-mono text-[#B5583C]">CMRIT Bengaluru · Class of 2027</p>
                  </div>
                </div>

                {/* Floating Metric Badges attached to card */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-center">
                  <div className="p-2.5 rounded-xl bg-[#F7F0E8] border border-[#E3D5C5]">
                    <span className="block font-serif font-bold text-lg text-[#B5583C]">9.13</span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#2B1F1A]/70">Cumulative CGPA</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#F7F0E8] border border-[#E3D5C5]">
                    <span className="block font-serif font-bold text-lg text-[#6B8F71]">Captain</span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#2B1F1A]/70">CMRIT Volleyball</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Asymmetric Quick-Stats Ribbon */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {personal.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-[#E3D5C5] shadow-sm hover-pop"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-[#2B1F1A]/60 block mb-1">
                {stat.label}
              </span>
              <div className="font-serif text-2xl sm:text-3xl font-bold text-[#B5583C]">
                {stat.value}
              </div>
              <span className="text-[11px] font-mono text-[#6B8F71] font-medium block mt-1">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
