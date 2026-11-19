'use client';

import React from 'react';
import { ExternalLink, CheckCircle2, ChevronRight, Layers, Terminal, Sparkles, Activity, ShieldAlert, Database, Trophy } from 'lucide-react';
import { Project } from '@/data/portfolioData';

interface StepCardProps {
  project: Project;
  index: number;
  onOpenModal: (project: Project) => void;
  isVisible: boolean;
}

export default function StepCard({ project, index, onOpenModal, isVisible }: StepCardProps) {
  const isAlternate = index % 2 === 1;

  // Custom visual simulations for each project step
  const renderVisualMockup = (type: Project['visualType']) => {
    switch (type) {
      case 'cloud':
        return (
          <div className="w-full h-full p-4 sm:p-6 bg-[#2B1F1A] text-[#F7F0E8] rounded-2xl flex flex-col justify-between font-mono text-xs shadow-inner">
            <div className="flex items-center justify-between border-b border-[#E3D5C5]/20 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B5583C]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#D9A441]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#6B8F71]" />
                <span className="text-[11px] text-[#E3D5C5]/70 ml-2">cloudfinops-core.py</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-[#6B8F71]/30 text-[#6B8F71] text-[10px] font-bold">13/13 Pytest Pass</span>
            </div>

            <div className="py-4 space-y-2">
              <div className="text-[#E3D5C5]/50 text-[10px] uppercase tracking-wider">// Statistical Anomaly Detection Loop</div>
              <div className="text-[#6B8F71] font-semibold">$ pytest test_finops_telemetry.py</div>
              <div className="text-white/90">
                [OK] test_3sigma_anomaly_flagging ... <span className="text-[#6B8F71]">PASSED</span>
              </div>
              <div className="text-white/90">
                [OK] test_llm_token_variance ... <span className="text-[#6B8F71]">PASSED</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/40 border border-[#E3D5C5]/10 mt-2">
                <div className="flex justify-between text-[11px] text-[#E3D5C5]/90 mb-1">
                  <span>AWS us-east-1 Outlier</span>
                  <span className="text-[#B5583C] font-bold">+28.4% (Anomaly)</span>
                </div>
                <div className="w-full h-1.5 bg-[#E3D5C5]/20 rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-[#B5583C] rounded-full" />
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-[#E3D5C5]/20 flex items-center justify-between text-[10px] text-[#E3D5C5]/60">
              <span>Engine: Streamlit + SQLite</span>
              <span className="text-[#6B8F71]">Idle Waste Flagged: 15%</span>
            </div>
          </div>
        );

      case 'pos':
        return (
          <div className="w-full h-full p-4 sm:p-6 bg-white border-2 border-[#E3D5C5] rounded-2xl flex flex-col justify-between font-sans text-xs shadow-sm">
            <div className="flex items-center justify-between border-b border-[#E3D5C5] pb-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-[#B5583C] text-white flex items-center justify-center font-bold text-[10px]">RX</div>
                <span className="font-serif font-bold text-sm text-[#2B1F1A]">Smart Pharmacy Terminal</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-[#B5583C]/10 text-[#B5583C] font-mono text-[10px] font-bold">100+ Medicines</span>
            </div>

            <div className="py-3 space-y-2 font-mono">
              <div className="p-2.5 rounded-xl bg-[#F7F0E8] border border-[#E3D5C5] flex items-center justify-between">
                <div>
                  <p className="font-bold text-[#2B1F1A] text-xs">Amoxicillin 500mg (Batch #A92)</p>
                  <p className="text-[10px] text-[#6B8F71]">Stock: 142 units · Expiry: Nov 2027</p>
                </div>
                <span className="font-bold text-[#B5583C]">$18.50</span>
              </div>

              <div className="p-2.5 rounded-xl bg-[#B5583C]/5 border border-[#B5583C]/30 flex items-center justify-between">
                <div>
                  <p className="font-bold text-[#2B1F1A] text-xs">Paracetamol 650mg (Batch #P14)</p>
                  <p className="text-[10px] text-[#B5583C] flex items-center gap-1 font-semibold">
                    <ShieldAlert className="w-3 h-3" /> Expiry Approaching (&lt;30d)
                  </p>
                </div>
                <span className="font-bold text-[#2B1F1A]">$4.20</span>
              </div>
            </div>

            <div className="pt-2 border-t border-[#E3D5C5] flex items-center justify-between text-[11px] font-mono">
              <span className="text-[#2B1F1A]/70">Barcode Auto-Scan: &lt;100ms</span>
              <span className="text-[#6B8F71] font-bold">Manual Entry: -60%</span>
            </div>
          </div>
        );

      case 'sql':
        return (
          <div className="w-full h-full p-4 sm:p-6 bg-[#2B1F1A] text-[#F7F0E8] rounded-2xl flex flex-col justify-between font-mono text-xs shadow-inner">
            <div className="flex items-center justify-between border-b border-[#E3D5C5]/20 pb-3">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-[#B5583C]" />
                <span className="text-[11px] text-[#E3D5C5]/80 font-bold">MySQL Layoffs Cleansing</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-[#6B8F71]/30 text-[#6B8F71] text-[10px]">2,000+ Rows Purged</span>
            </div>

            <div className="py-3 space-y-1.5 text-[11px] text-[#E3D5C5]/90">
              <div className="text-[#6B8F71]">-- Step 1: Window Partition Ranking</div>
              <div className="bg-black/50 p-2.5 rounded-lg border border-[#E3D5C5]/10 overflow-x-auto text-[10px] leading-relaxed">
                <span className="text-[#B5583C]">WITH</span> duplicate_cte <span className="text-[#B5583C]">AS</span> (<br />
                &nbsp;&nbsp;<span className="text-[#B5583C]">SELECT</span> *, <span className="text-[#B5583C]">ROW_NUMBER() OVER</span>(<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#B5583C]">PARTITION BY</span> company, location, date<br />
                &nbsp;&nbsp;) <span className="text-[#B5583C]">as</span> row_num <span className="text-[#B5583C]">FROM</span> layoffs_raw<br />
                )<br />
                <span className="text-[#B5583C]">DELETE FROM</span> duplicate_cte <span className="text-[#B5583C]">WHERE</span> row_num &gt; 1;
              </div>
            </div>

            <div className="pt-2 border-t border-[#E3D5C5]/20 flex items-center justify-between text-[10px] text-[#E3D5C5]/60">
              <span>Standardization: Harmonized Nulls</span>
              <span className="text-[#6B8F71]">Execution: &lt; 80ms</span>
            </div>
          </div>
        );

      case 'leadership':
        return (
          <div className="w-full h-full p-4 sm:p-6 bg-gradient-to-br from-white to-[#F7F0E8] border-2 border-[#E3D5C5] rounded-2xl flex flex-col justify-between font-sans text-xs shadow-sm">
            <div className="flex items-center justify-between border-b border-[#E3D5C5] pb-3">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-[#B5583C]" />
                <span className="font-serif font-bold text-sm text-[#2B1F1A]">CMRIT Athletic & Innovation Honors</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-[#6B8F71]/15 text-[#6B8F71] font-mono text-[10px] font-bold">1st Place SIH</span>
            </div>

            <div className="py-3 space-y-2">
              <div className="p-3 rounded-xl bg-white border border-[#E3D5C5] shadow-xs">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-serif font-bold text-[#B5583C] text-sm">CMRIT Volleyball Captain</span>
                  <span className="font-mono text-[10px] text-[#2B1F1A]/60">Inter-Collegiate VTU</span>
                </div>
                <p className="text-[11px] text-[#2B1F1A]/80 font-sans">
                  Steering squad coordination, match tactical setups, and team resilience under tight tournament sets.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white border border-[#E3D5C5] shadow-xs">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-serif font-bold text-[#6B8F71] text-sm">Hostel Secretary (2025–26)</span>
                  <span className="font-mono text-[10px] text-[#2B1F1A]/60">Campus Governance</span>
                </div>
                <p className="text-[11px] text-[#2B1F1A]/80 font-sans">
                  Representing 300+ resident students, budgeting recreational facilities and dispute resolution.
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-[#E3D5C5] flex items-center justify-between text-[11px] font-mono">
              <span className="text-[#2B1F1A]/70">SIH 2025: 36h Sprint</span>
              <span className="text-[#B5583C] font-bold">Internal Champion</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div
      className={`relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border-2 border-[#E3D5C5] transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } hover-pop-subtle`}
    >
      {/* Narrative Section (6 cols) */}
      <div
        className={`lg:col-span-6 space-y-4 ${
          isAlternate ? 'lg:order-2' : 'lg:order-1'
        }`}
      >
        {/* Step Number Badge */}
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-[#B5583C] text-[#F7F0E8] font-mono text-sm font-bold shadow-sm">
            {project.stepNumber}
          </span>
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#B5583C] font-semibold">
            — Step {index + 1} of 4
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-2xl sm:text-3xl text-[#2B1F1A] font-bold leading-tight">
          {project.title}
        </h3>

        {/* Short Caption */}
        <p className="text-sm sm:text-base text-[#2B1F1A]/80 font-sans leading-relaxed">
          {project.shortCaption}
        </p>

        {/* Metrics Row */}
        <div className="grid grid-cols-3 gap-2 pt-2">
          {project.metrics.map((metric, i) => (
            <div key={i} className="p-2.5 rounded-xl bg-[#F7F0E8] border border-[#E3D5C5] text-center">
              <div className="font-serif font-bold text-base text-[#B5583C]">{metric.value}</div>
              <div className="text-[10px] font-mono uppercase text-[#2B1F1A]/70">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg bg-[#E3D5C5]/50 text-[#2B1F1A] font-mono text-[11px] font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <div className="pt-3">
          <button
            type="button"
            onClick={() => onOpenModal(project)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2B1F1A] text-[#F7F0E8] hover:bg-[#6B8F71] font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm hover-pop"
          >
            <span>View Case Study</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Visual Simulation Card with User-Specified Hover Pop (6 cols) */}
      <div
        className={`lg:col-span-6 h-full min-h-[320px] ${
          isAlternate ? 'lg:order-1' : 'lg:order-2'
        }`}
      >
        <div className="w-full h-full rounded-2xl overflow-hidden hover-pop">
          {renderVisualMockup(project.visualType)}
        </div>
      </div>
    </div>
  );
}
