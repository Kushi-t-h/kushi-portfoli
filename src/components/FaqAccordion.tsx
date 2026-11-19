'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { ChevronDown, HelpCircle, CheckCircle } from 'lucide-react';

export default function FaqAccordion() {
  const { faq } = PORTFOLIO_DATA;
  const [openId, setOpenId] = useState<string | null>(faq[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="py-24 sm:py-32 bg-[#F7F0E8] border-b border-[#E3D5C5]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E3D5C5]/60 border border-[#E3D5C5] text-[#B5583C] text-xs font-mono uppercase tracking-widest font-semibold">
            <span>// Common Inquiries</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2B1F1A] font-bold tracking-tight">
            Frequently asked questions.
          </h2>

          <p className="text-base sm:text-lg text-[#2B1F1A]/80 font-sans leading-relaxed">
            Essential answers regarding availability, engineering background, and internship timelines.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faq.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="rounded-3xl bg-white border-2 border-[#E3D5C5] overflow-hidden transition-all duration-300 hover-pop-subtle"
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5583C]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-md bg-[#F7F0E8] border border-[#E3D5C5] text-[10px] font-mono uppercase tracking-wider text-[#B5583C] font-semibold">
                      {item.tag}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2B1F1A]">
                      {item.question}
                    </h3>
                  </div>

                  <div
                    className={`p-2 rounded-xl bg-[#F7F0E8] border border-[#E3D5C5] text-[#2B1F1A] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#B5583C] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    className="px-6 pb-6 sm:px-7 sm:pb-7 pt-1 text-sm sm:text-base font-sans text-[#2B1F1A]/85 leading-relaxed border-t border-[#E3D5C5]/60 animate-in fade-in duration-200"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
