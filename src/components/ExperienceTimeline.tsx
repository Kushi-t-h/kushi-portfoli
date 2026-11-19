'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { GraduationCap, Award, Calendar, CheckCircle, ChevronRight, BookOpen } from 'lucide-react';

export default function ExperienceTimeline() {
  const { education } = PORTFOLIO_DATA;

  return (
    <section
      id="journey"
      className="py-24 sm:py-32 bg-[#F7F0E8] border-b border-[#E3D5C5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E3D5C5]/60 border border-[#E3D5C5] text-[#B5583C] text-xs font-mono uppercase tracking-widest font-semibold">
            <span>// Academic & Leadership Trajectory</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2B1F1A] font-bold tracking-tight">
            Academic foundations and campus leadership.
          </h2>

          <p className="text-base sm:text-lg text-[#2B1F1A]/80 font-sans leading-relaxed">
            Consistently leading in the top academic tier while balancing university sports representation and student hostel administration.
          </p>
        </div>

        {/* Asymmetrical Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 space-y-10 sm:space-y-14 border-l-2 border-[#E3D5C5]">
          {education.map((item, index) => (
            <div key={index} className="relative group">
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-8 h-8 rounded-full bg-[#B5583C] text-white flex items-center justify-center shadow-sm group-hover:bg-[#6B8F71] transition-colors">
                <GraduationCap className="w-4 h-4" />
              </div>

              {/* Milestone Card with Hover Pop */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#E3D5C5] shadow-sm hover-pop space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E3D5C5] pb-4">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#B5583C] font-semibold">
                      {item.period}
                    </span>
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#2B1F1A] mt-1">
                      {item.credential}
                    </h3>
                    <p className="text-sm font-sans text-[#2B1F1A]/80 font-medium">
                      {item.institution}
                    </p>
                  </div>

                  <div className="px-4 py-2 rounded-2xl bg-[#F7F0E8] border border-[#E3D5C5] text-right">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#2B1F1A]/60 block">Performance</span>
                    <span className="font-serif font-bold text-lg text-[#B5583C]">{item.grade}</span>
                  </div>
                </div>

                {/* Details List */}
                <ul className="space-y-2 pt-1 text-sm font-sans text-[#2B1F1A]/85">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#6B8F71] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
