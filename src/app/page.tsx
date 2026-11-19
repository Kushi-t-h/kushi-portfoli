import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StepSection from '@/components/StepSection';
import SkillsGrid from '@/components/SkillsGrid';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import Testimonials from '@/components/Testimonials';
import FaqAccordion from '@/components/FaqAccordion';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F7F0E8] text-[#2B1F1A]">
      {/* Sticky Architectural Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* Asymmetrical Hero Section */}
        <Hero />

        {/* Sequential Step-by-Step Photo & Project Flow */}
        <StepSection />

        {/* Technical Capability Matrix */}
        <SkillsGrid />

        {/* Academic Foundations & Campus Leadership */}
        <ExperienceTimeline />

        {/* Collaborator & Mentor Endorsements */}
        <Testimonials />

        {/* Frequently Asked Inquiries */}
        <FaqAccordion />

        {/* Direct Contact & Dispatch Hub */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
