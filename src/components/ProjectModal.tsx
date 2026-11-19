'use client';

import React, { useEffect } from 'react';
import { X, CheckCircle, ExternalLink, Layers, ShieldCheck, Zap } from 'lucide-react';
import { GithubIcon } from './Icons';
import { Project } from '@/data/portfolioData';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#2B1F1A]/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#F7F0E8] border-2 border-[#E3D5C5] shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-[#E3D5C5] pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md bg-[#B5583C] text-[#F7F0E8] font-mono text-xs font-bold">
                STEP {project.stepNumber}
              </span>
              <span className="text-xs font-mono text-[#6B8F71] font-semibold">
                {project.status}
              </span>
            </div>
            <h2 id="modal-title" className="font-serif text-2xl sm:text-3xl text-[#2B1F1A] font-bold">
              {project.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl bg-white border border-[#E3D5C5] text-[#2B1F1A] hover:bg-[#B5583C] hover:text-[#F7F0E8] transition-colors"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tagline & Full Description */}
        <div className="space-y-3">
          <p className="font-sans font-medium text-[#B5583C] text-sm sm:text-base">
            {project.tagline}
          </p>
          <p className="font-sans text-sm sm:text-base text-[#2B1F1A]/80 leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Quantified Metrics Grid */}
        <div className="grid grid-cols-3 gap-3">
          {project.metrics.map((metric, i) => (
            <div key={i} className="p-3 rounded-2xl bg-white border border-[#E3D5C5] text-center shadow-xs">
              <div className="font-serif font-bold text-xl text-[#B5583C]">{metric.value}</div>
              <div className="text-[11px] font-mono uppercase text-[#2B1F1A]/70">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Engineering Architecture Highlights */}
        <div className="space-y-3 p-5 rounded-2xl bg-white border border-[#E3D5C5]">
          <h4 className="font-serif text-base font-bold text-[#2B1F1A] flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#B5583C]" />
            <span>Architecture & Implementation Highlights</span>
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm font-sans text-[#2B1F1A]/85">
            {project.architectureHighlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#6B8F71] shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Chips */}
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-[#2B1F1A]/60 block">
            Technologies & Libraries Utilized:
          </span>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-xl bg-white border border-[#E3D5C5] text-[#2B1F1A] font-mono text-xs font-semibold shadow-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="pt-4 border-t border-[#E3D5C5] flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-mono text-[#2B1F1A]/70">
            Role: <strong>{project.role}</strong>
          </span>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2B1F1A] text-white hover:bg-[#6B8F71] font-mono text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Repository</span>
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-[#E3D5C5] text-[#2B1F1A] hover:bg-[#B5583C] hover:text-white font-mono text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
