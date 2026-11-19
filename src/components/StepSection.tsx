'use client';

import React, { useState, useEffect, useRef } from 'react';
import { PORTFOLIO_DATA, Project } from '@/data/portfolioData';
import StepCard from './StepCard';
import ProjectModal from './ProjectModal';
import { ArrowDown } from 'lucide-react';

export default function StepSection() {
  const { projects } = PORTFOLIO_DATA;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [visibleSteps, setVisibleSteps] = useState<{ [key: number]: boolean }>({});
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((el, index) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSteps((prev) => ({ ...prev, [index]: true }));
          }
        },
        { threshold: 0.2 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [projects]);

  return (
    <section
      id="step-flow"
      className="relative py-24 sm:py-32 bg-[#F7F0E8] border-b border-[#E3D5C5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E3D5C5]/60 border border-[#E3D5C5] text-[#B5583C] text-xs font-mono uppercase tracking-widest font-semibold">
            <span>// Sequential Photo & Project Flow</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2B1F1A] font-bold tracking-tight">
            Step-by-step engineering progression.
          </h2>

          <p className="text-base sm:text-lg text-[#2B1F1A]/80 font-sans leading-relaxed">
            Follow the chronological sequence of systems engineered by Kushi T H. Each step leads directly into the next, illustrating the progression from cloud cost telemetry to point-of-sale resilience, SQL data pipelines, and sports-forged leadership.
          </p>
        </div>

        {/* Connective Thread & Progressive Steps */}
        <div className="relative space-y-16 lg:space-y-24">
          {/* Subtle vertical spine thread down the center for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-0.5 bg-[#E3D5C5] -translate-x-1/2 pointer-events-none" />

          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                stepRefs.current[index] = el;
              }}
              className="relative"
            >
              <StepCard
                project={project}
                index={index}
                onOpenModal={(proj) => setSelectedProject(proj)}
                isVisible={!!visibleSteps[index]}
              />

              {/* Step Transition Connector Badge (shown between steps) */}
              {index < projects.length - 1 && (
                <div className="hidden lg:flex items-center justify-center my-6">
                  <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-[#E3D5C5] border border-[#E3D5C5] text-[11px] font-mono uppercase tracking-wider text-[#2B1F1A]/70 shadow-xs">
                    <span>Leads into Step 0{index + 2}</span>
                    <ArrowDown className="w-3 h-3 text-[#B5583C]" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
