"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/WhyChooseUs";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function WhyUsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navbar />

      <div className="pt-32 pb-16 bg-[#0C2340] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-3">
            <Link href="/" className="hover:underline flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Home
            </Link>
            <span>/</span>
            <span>Why Choose Us</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-heading tracking-tight text-white mb-4">
            Why Visionary Parents <span className="text-gradient-gold">Choose Kakatiya</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            A battle-tested academic ecosystem delivering 100% competitive success and holistic leadership.
          </p>
        </div>
      </div>

      <WhyChooseUs />

      <Footer />
    </div>
  );
}
