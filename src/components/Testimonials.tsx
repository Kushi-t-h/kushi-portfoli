'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const { testimonials } = PORTFOLIO_DATA;

  return (
    <section
      id="endorsements"
      className="py-24 sm:py-32 bg-[#FAF6F0] border-b border-[#E3D5C5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E3D5C5]/60 border border-[#E3D5C5] text-[#B5583C] text-xs font-mono uppercase tracking-widest font-semibold">
            <span>// Peer & Mentor Perspectives</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2B1F1A] font-bold tracking-tight">
            How collaborators describe working with Kushi.
          </h2>

          <p className="text-base sm:text-lg text-[#2B1F1A]/80 font-sans leading-relaxed">
            Observations from academic project supervisors, 36-hour hackathon teammates, and varsity athletics peers.
          </p>
        </div>

        {/* Testimonials Grid with Hover Pop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-3xl bg-white border-2 border-[#E3D5C5] shadow-sm hover-pop flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-[#F7F0E8] border border-[#E3D5C5] text-[#B5583C] flex items-center justify-center">
                  <Quote className="w-5 h-5" />
                </div>
                <p className="font-serif italic text-base sm:text-lg text-[#2B1F1A] leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#E3D5C5] space-y-1">
                <p className="font-serif font-bold text-base text-[#2B1F1A]">
                  {item.author}
                </p>
                <p className="text-xs font-mono text-[#B5583C] font-semibold">
                  {item.role} · {item.organization}
                </p>
                <span className="inline-block text-[10px] font-mono uppercase tracking-wider text-[#2B1F1A]/60">
                  {item.relationship}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
