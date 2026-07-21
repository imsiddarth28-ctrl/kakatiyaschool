"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { useState, FormEvent } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            <span>Contact Us</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-heading tracking-tight text-white mb-4">
            Connect with <span className="text-gradient-gold">Kakatiya Directorate</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            We welcome inquiries from prospective parents, scholars, and educational collaborators.
          </p>
        </div>
      </div>

      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-3xl font-extrabold font-heading text-[#0C2340] mb-4">
                Hyderabad Main Campus
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Visit our state-of-the-art campus to experience our STEM laboratories, smart classrooms, and 10-acre athletic facilities.
              </p>
            </div>

            <div className="space-y-6 text-sm text-slate-700">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0C2340] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0C2340]">Campus Address</h4>
                  <p className="text-slate-600 text-xs mt-1">
                    Kakatiya Olympiad Campus, Prime Knowledge Corridor, Hi-Tech Zone, Hyderabad, Telangana 500081
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#B8860B] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0C2340]">Admission Helpline</h4>
                  <p className="text-slate-600 text-xs mt-1">
                    +91 98765 43210 / +91 040 2345 6789
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0C2340]">Email Directorate</h4>
                  <p className="text-slate-600 text-xs mt-1">
                    admissions@kakatiyaolympiad.edu.in / info@kakatiyaolympiad.edu.in
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0C2340]">Visiting Hours</h4>
                  <p className="text-slate-600 text-xs mt-1">
                    Monday – Saturday: 8:00 AM – 5:30 PM (Sunday by Prior Appointment)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Inquiry Form Column */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold font-heading text-[#0C2340] mb-6">
              Send an Instant Inquiry
            </h3>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#0C2340]"
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
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#0C2340]"
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
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#0C2340]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Inquiry Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Please specify student's current grade and your query..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#0C2340]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#0C2340] hover:bg-blue-900 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <Send className="w-4 h-4 text-amber-400" />
                  <span>Send Inquiry to Directorate</span>
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-[#0C2340]">Inquiry Submitted!</h4>
                <p className="text-slate-600 text-sm max-w-sm mx-auto">
                  Our admissions office has received your query and will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold"
                >
                  Send Another Inquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
