"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function GalleryPage() {
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
            <span>Gallery</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-heading tracking-tight text-white mb-4">
            Life at <span className="text-gradient-gold">Kakatiya Campus</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            A visual showcase into scientific discovery, athletic triumphs, and global leadership symposia.
          </p>
        </div>
      </div>

      <GallerySection />

      <Footer />
    </div>
  );
}
