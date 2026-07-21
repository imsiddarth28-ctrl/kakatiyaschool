"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Link from "next/link";
import { ArrowLeft, Award, Sparkles, Target, Compass, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navbar />

      {/* Page Hero Header */}
      <div className="pt-32 pb-16 bg-[#0C2340] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-3">
            <Link href="/" className="hover:underline flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Home
            </Link>
            <span>/</span>
            <span>About Us</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-heading tracking-tight text-white mb-4">
            About <span className="text-gradient-gold">Kakatiya Olympiad School</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Empowering students to achieve extraordinary milestones in science, mathematics, and ethical leadership.
          </p>
        </div>
      </div>

      {/* Detailed Mission, Vision & Values */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0C2340] flex items-center justify-center font-bold">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-[#0C2340]">Our Mission</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              To deliver an unparalleled educational experience that fosters analytical thinking, competitive rigor, and moral integrity in every student.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#B8860B] flex items-center justify-center font-bold">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-[#0C2340]">Our Vision</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              To be globally recognized as the premier institution shaping future Olympiad medalists, scientific pioneers, and transformative leaders.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-[#0C2340]">Core Values</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Curiosity, Intellectual Integrity, Scientific Temperament, Resilience, and Service to Humanity.
            </p>
          </div>
        </div>

        {/* Embedded About Section */}
        <AboutSection />

        {/* Why Choose Us */}
        <WhyChooseUs />
      </div>

      <Footer />
    </div>
  );
}
