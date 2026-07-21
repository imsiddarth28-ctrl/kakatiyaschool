"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import GlareCard from "@/components/reactbits/GlareCard";
import { ArrowLeft, MapPin, Phone, Mail, Clock, Send, Sparkles, Building, Navigation } from "lucide-react";

export default function ContactPage() {
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
            <span>Contact</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-heading tracking-tight text-white mb-4">
            Nizamabad Campus <span className="text-gradient-gold">& Helpline</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Get in touch with our admissions directorate or visit our flagship campus in Nizamabad, Telangana.
          </p>
        </div>
      </div>

      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details with React Bits GlareCards */}
          <div className="lg:col-span-5 space-y-6">
            <GlareCard className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#0C2340] text-amber-400 flex items-center justify-center font-bold">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-heading text-[#0C2340]">Nizamabad Campus Address</h3>
                  <p className="text-slate-600 text-xs mt-0.5">
                    Pragathi Nagar, Nizamabad, Telangana - 503001
                  </p>
                </div>
              </div>
            </GlareCard>

            <GlareCard className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#B8860B] flex items-center justify-center font-bold">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-heading text-[#0C2340]">Admissions Helpline</h3>
                  <p className="text-slate-600 text-xs mt-0.5">
                    +91 8462 234567 / +91 98765 43210
                  </p>
                </div>
              </div>
            </GlareCard>

            <GlareCard className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-800 flex items-center justify-center font-bold">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-heading text-[#0C2340]">Official Email</h3>
                  <p className="text-slate-600 text-xs mt-0.5">
                    admissions.nizamabad@kakatiyaolympiad.edu.in
                  </p>
                </div>
              </div>
            </GlareCard>

            <GlareCard className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-800 flex items-center justify-center font-bold">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-heading text-[#0C2340]">Visiting Hours</h3>
                  <p className="text-slate-600 text-xs mt-0.5">
                    Monday – Saturday: 8:00 AM – 5:30 PM
                  </p>
                </div>
              </div>
            </GlareCard>
          </div>

          {/* Quick Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#B8860B] uppercase tracking-widest">
                  Direct Campus Inquiry
                </span>
                <h2 className="text-3xl font-bold font-heading text-[#0C2340]">
                  Send Message to Nizamabad Admissions
                </h2>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#0C2340]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#0C2340]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="parent@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#0C2340]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Inquiry Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Please specify student class and admission questions for Nizamabad campus..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#0C2340]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#0C2340] to-blue-900 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg hover:bg-blue-900 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4 text-amber-400" />
                  <span>Send Inquiry to Nizamabad Campus</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
