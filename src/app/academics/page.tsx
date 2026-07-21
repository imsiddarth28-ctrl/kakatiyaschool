"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AcademicsSection from "@/components/AcademicsSection";
import Link from "next/link";
import { ArrowLeft, BookOpen, Trophy, Cpu, Brain, CheckCircle2 } from "lucide-react";

export default function AcademicsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navbar />

      {/* Header */}
      <div className="pt-32 pb-16 bg-[#0C2340] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-3">
            <Link href="/" className="hover:underline flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Home
            </Link>
            <span>/</span>
            <span>Academics</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-heading tracking-tight text-white mb-4">
            Academic <span className="text-gradient-gold">Programs & Curriculum</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            From foundational logic in primary grades to international Olympiad mastery, explore our academic architecture.
          </p>
        </div>
      </div>

      {/* Main Academics Component */}
      <AcademicsSection />

      {/* Detailed Syllabi & Evaluation Info */}
      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 bg-white border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-2xl font-bold font-heading text-[#0C2340]">
            Pedagogical Standards & Exam Evaluation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-600">
            <div className="space-y-3">
              <h3 className="font-bold text-[#0C2340] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B8860B]" />
                Continuous Assessment & Analytics
              </h3>
              <p>Weekly diagnostic tests pinpoint individual strengths and knowledge gaps with AI-assisted performance charts sent directly to parents.</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-[#0C2340] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B8860B]" />
                Olympiad & Foundation Mentorship
              </h3>
              <p>Specialized problem-solving clinics conducted by national medalists focusing on proofs, non-standard algebra, and advanced physical optics.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
