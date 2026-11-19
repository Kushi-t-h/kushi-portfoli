'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Mail, Phone, Copy, Check, Send, FileText, ArrowUpRight, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';

export default function ContactSection() {
  const { personal } = PORTFOLIO_DATA;
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-[#FAF6F0] pattern-grid"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E3D5C5]/60 border border-[#E3D5C5] text-[#B5583C] text-xs font-mono uppercase tracking-widest font-semibold">
            <span>// Contact & Availability Hub</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2B1F1A] font-bold tracking-tight">
            Initiate a conversation or explore an internship.
          </h2>

          <p className="text-base sm:text-lg text-[#2B1F1A]/80 font-sans leading-relaxed">
            I am actively discussing 2025/2026 software engineering internships, co-ops, and data engineering positions. Reach out directly or dispatch a note below.
          </p>
        </div>

        {/* Asymmetrical Grid: Contact Cards + Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Communication Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email Card */}
            <div className="p-6 rounded-3xl bg-white border-2 border-[#E3D5C5] shadow-sm hover-pop space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#F7F0E8] border border-[#E3D5C5] text-[#B5583C]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#2B1F1A]/60 block">Direct Email</span>
                    <a
                      href={`mailto:${personal.email}`}
                      className="font-serif font-bold text-base text-[#2B1F1A] hover:text-[#B5583C] transition-colors"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(personal.email, 'email')}
                  className="p-2.5 rounded-xl bg-[#F7F0E8] border border-[#E3D5C5] text-[#2B1F1A] hover:bg-[#6B8F71] hover:text-white transition-colors"
                  aria-label="Copy Email to Clipboard"
                >
                  {copiedType === 'email' ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copiedType === 'email' && (
                <p className="text-xs font-mono text-[#6B8F71] font-semibold animate-in fade-in">
                  ✓ Email copied to clipboard!
                </p>
              )}
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-3xl bg-white border-2 border-[#E3D5C5] shadow-sm hover-pop space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#F7F0E8] border border-[#E3D5C5] text-[#B5583C]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#2B1F1A]/60 block">Direct Telephone</span>
                    <a
                      href={`tel:${personal.phone}`}
                      className="font-serif font-bold text-base text-[#2B1F1A] hover:text-[#B5583C] transition-colors"
                    >
                      {personal.phoneFormatted}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(personal.phone, 'phone')}
                  className="p-2.5 rounded-xl bg-[#F7F0E8] border border-[#E3D5C5] text-[#2B1F1A] hover:bg-[#6B8F71] hover:text-white transition-colors"
                  aria-label="Copy Phone Number to Clipboard"
                >
                  {copiedType === 'phone' ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copiedType === 'phone' && (
                <p className="text-xs font-mono text-[#6B8F71] font-semibold animate-in fade-in">
                  ✓ Phone number copied to clipboard!
                </p>
              )}
            </div>

            {/* Social & Code Profiles */}
            <div className="p-6 rounded-3xl bg-white border-2 border-[#E3D5C5] shadow-sm hover-pop space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#2B1F1A]/70 font-semibold block">
                Technical & Professional Profiles
              </span>

              <div className="grid grid-cols-3 gap-2">
                <a
                  href={personal.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-[#F7F0E8] border border-[#E3D5C5] text-center hover:border-[#6B8F71] hover:bg-white transition-colors group"
                >
                  <GithubIcon className="w-5 h-5 mx-auto text-[#2B1F1A] group-hover:text-[#B5583C] mb-1" />
                  <span className="text-[11px] font-mono font-semibold block text-[#2B1F1A]">GitHub</span>
                </a>

                <a
                  href={personal.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-[#F7F0E8] border border-[#E3D5C5] text-center hover:border-[#6B8F71] hover:bg-white transition-colors group"
                >
                  <LinkedinIcon className="w-5 h-5 mx-auto text-[#2B1F1A] group-hover:text-[#B5583C] mb-1" />
                  <span className="text-[11px] font-mono font-semibold block text-[#2B1F1A]">LinkedIn</span>
                </a>

                <a
                  href={personal.links.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-[#F7F0E8] border border-[#E3D5C5] text-center hover:border-[#6B8F71] hover:bg-white transition-colors group"
                >
                  <LeetcodeIcon className="w-5 h-5 mx-auto text-[#2B1F1A] group-hover:text-[#B5583C] mb-1" />
                  <span className="text-[11px] font-mono font-semibold block text-[#2B1F1A]">LeetCode</span>
                </a>
              </div>
            </div>

            {/* Resume Callout Banner */}
            <div className="p-6 rounded-3xl bg-[#B5583C] text-white shadow-md flex items-center justify-between">
              <div className="space-y-1">
                <p className="font-serif font-bold text-lg">Official 2-Page CV</p>
                <p className="text-xs font-sans text-white/80">Includes academic grades, coursework & awards</p>
              </div>
              <a
                href={personal.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-white text-[#B5583C] hover:bg-[#F7F0E8] font-mono text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 shadow-sm transition-transform hover:scale-105"
              >
                <FileText className="w-4 h-4" />
                <span>PDF</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Dispatch Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-[#E3D5C5] shadow-lg hover-pop-subtle space-y-6">
              <div className="space-y-1">
                <h3 className="font-serif text-2xl font-bold text-[#2B1F1A]">
                  Dispatch a Direct Note
                </h3>
                <p className="text-sm font-sans text-[#2B1F1A]/70">
                  Feel free to send inquiry messages regarding open roles, technical discussions, or collaboration.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-[#F7F0E8] border-2 border-[#6B8F71] text-center space-y-3 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#6B8F71] text-white mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif font-bold text-xl text-[#2B1F1A]">Message Transmitted!</h4>
                  <p className="text-sm font-sans text-[#2B1F1A]/80 max-w-md mx-auto">
                    Thank you for reaching out. Kushi T H will receive your correspondence and reply promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#2B1F1A]/80 mb-2 font-semibold">
                      Your Name / Organization
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Ramesh / Acme Engineering"
                      className="w-full px-4 py-3 rounded-2xl bg-[#F7F0E8] border border-[#E3D5C5] text-[#2B1F1A] placeholder-[#2B1F1A]/40 text-sm font-sans focus:outline-none focus:border-[#B5583C] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#2B1F1A]/80 mb-2 font-semibold">
                      Your Contact Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. hiring@company.com"
                      className="w-full px-4 py-3 rounded-2xl bg-[#F7F0E8] border border-[#E3D5C5] text-[#2B1F1A] placeholder-[#2B1F1A]/40 text-sm font-sans focus:outline-none focus:border-[#B5583C] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#2B1F1A]/80 mb-2 font-semibold">
                      Message / Project Scope
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details regarding your team, the internship scope, or tech stack..."
                      className="w-full px-4 py-3 rounded-2xl bg-[#F7F0E8] border border-[#E3D5C5] text-[#2B1F1A] placeholder-[#2B1F1A]/40 text-sm font-sans focus:outline-none focus:border-[#B5583C] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-[#B5583C] hover:bg-[#6B8F71] text-[#F7F0E8] font-mono text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-md transition-all duration-300 hover-pop"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmit Correspondence</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
