'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Code2, Layout, Database, Cpu, CheckCircle2, Terminal } from 'lucide-react';

export default function SkillsGrid() {
  const { skills } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = useState<number | 'all'>('all');

  const getIcon = (name: string) => {
    switch (name) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-[#B5583C]" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-[#B5583C]" />;
      case 'Database':
        return <Database className="w-5 h-5 text-[#B5583C]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#B5583C]" />;
      default:
        return <Terminal className="w-5 h-5 text-[#B5583C]" />;
    }
  };

  const displayedCategories =
    activeCategory === 'all' ? skills : [skills[activeCategory]];

  return (
    <section
      id="expertise"
      className="py-24 sm:py-32 bg-[#FAF6F0] border-b border-[#E3D5C5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E3D5C5]/60 border border-[#E3D5C5] text-[#B5583C] text-xs font-mono uppercase tracking-widest font-semibold">
            <span>// Technical Capability Matrix</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2B1F1A] font-bold tracking-tight">
            Grounded in systems, data, and algorithmic rigor.
          </h2>

          <p className="text-base sm:text-lg text-[#2B1F1A]/80 font-sans leading-relaxed">
            Proficiencies backed by a 9.13 CGPA at CMRIT, certified coursework from Coursera and NPTEL, and hands-on production codebases.
          </p>

          {/* Interactive Filter Pills */}
          <div className="pt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === 'all'
                  ? 'bg-[#B5583C] text-[#F7F0E8] shadow-sm'
                  : 'bg-white border border-[#E3D5C5] text-[#2B1F1A] hover:border-[#6B8F71]'
              }`}
            >
              All Pillars ({skills.length})
            </button>
            {skills.map((cat, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveCategory(idx)}
                className={`px-4 py-2 rounded-xl font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === idx
                    ? 'bg-[#B5583C] text-[#F7F0E8] shadow-sm'
                    : 'bg-white border border-[#E3D5C5] text-[#2B1F1A] hover:border-[#6B8F71]'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Skills Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedCategories.map((category, catIdx) => (
            <div
              key={catIdx}
              className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#E3D5C5] shadow-sm hover-pop space-y-6"
            >
              <div className="flex items-center justify-between border-b border-[#E3D5C5] pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#F7F0E8] border border-[#E3D5C5]">
                    {getIcon(category.icon)}
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl text-[#2B1F1A]">
                      {category.title}
                    </h3>
                    <p className="text-xs font-sans text-[#2B1F1A]/70">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Individual Skill Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3.5 rounded-2xl bg-[#F7F0E8] border border-[#E3D5C5] hover:border-[#6B8F71] transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-serif font-bold text-sm text-[#2B1F1A]">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-white text-[#B5583C] border border-[#E3D5C5]">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-[11px] font-mono text-[#2B1F1A]/70">
                      {skill.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
