"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdmissionsSection from "@/components/AdmissionsSection";
import Link from "next/link";
import { ArrowLeft, Award, CheckCircle2, Calendar, FileText } from "lucide-react";

export default function AdmissionsPage() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navbar onOpenAdmissions={() => setIsModalOpen(true)} />

      <div className="pt-32 pb-16 bg-[#0C2340] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-3">
            <Link href="/" className="hover:underline flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Home
            </Link>
            <span>/</span>
            <span>Admissions</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-heading tracking-tight text-white mb-4">
            Admissions <span className="text-gradient-gold">Portal 2026-27</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Secure your child&apos;s path to world-class scientific, mathematical, and leadership excellence.
          </p>
        </div>
      </div>

      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0C2340] flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="text-xl font-bold font-heading text-[#0C2340]">Step 1: Application</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Submit the online registration form with basic student academic details and target stream selection.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#B8860B] flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="text-xl font-bold font-heading text-[#0C2340]">Step 2: Assessment</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Interactive aptitude assessment evaluating logical reasoning, mathematical foundation, and verbal skills.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="text-xl font-bold font-heading text-[#0C2340]">Step 3: Enrollment</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Personal campus interaction with directorate, document verification, and seat allocation.
            </p>
          </div>
        </div>

        {/* Admissions Form with State Handlers */}
        <AdmissionsSection
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onOpen={() => setIsModalOpen(true)}
        />
      </div>

      <Footer onOpenAdmissions={() => setIsModalOpen(true)} />
    </div>
  );
}
