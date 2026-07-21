"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import ShinyButton from "@/components/reactbits/ShinyButton";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import {
  Award,
  CheckCircle2,
  PhoneCall,
  Sparkles,
  User,
  Mail,
  GraduationCap,
  ArrowRight,
  X,
  FileCheck2,
} from "lucide-react";

export default function AdmissionsSection({
  isOpen,
  onClose,
  onOpen,
}: {
  isOpen?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
}) {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    grade: "Olympiad Wing (Grades 6-10)",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#D4AF37", "#0C2340", "#1E3A8A", "#FFFFFF"],
    });
  };

  const handleOpenModal = () => {
    if (onOpen) {
      onOpen();
    } else if (onClose && !isOpen) {
      // Toggle
    }
  };

  return (
    <>
      {/* Inline Section Call-To-Action */}
      <section id="admissions" className="relative py-24 bg-slate-50 text-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SpotlightCard className="rounded-3xl p-8 sm:p-14 bg-white border border-slate-200 shadow-xl shadow-slate-900/5 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="space-y-4 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-[#B8860B] text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-4 h-4 text-[#B8860B]" />
                <span>Admissions Open 2026 - 2027</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black font-heading text-[#0C2340] tracking-tight leading-tight">
                Begin Your Child&apos;s <span className="text-gradient-gold">Journey of Supremacy</span>
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Limited seats available for top-tier academic batches. Schedule a personal campus tour or submit an online application today.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-700 pt-2">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Merit Scholarships Available</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Interactive Entrance Evaluation</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto shrink-0">
              <ShinyButton
                onClick={handleOpenModal}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#0C2340] to-blue-900 hover:to-[#0C2340] text-white font-extrabold text-base"
              >
                <Award className="w-5 h-5 text-amber-400" />
                <span>Apply Online Now</span>
                <ArrowRight className="w-5 h-5" />
              </ShinyButton>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* Interactive Application Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md p-4 sm:p-6 flex items-center justify-center overflow-y-auto"
            onClick={onClose}
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 max-w-xl w-full relative text-slate-900 shadow-2xl my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button ('X') */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-100 text-slate-500 hover:bg-rose-50 hover:text-rose-600 transition-all cursor-pointer z-20 shadow-sm"
              >
                <X className="w-5 h-5" />
              </button>

              {!submitted ? (
                <div>
                  <div className="flex items-center gap-3 mb-6 pr-10">
                    <div className="w-12 h-12 rounded-2xl bg-[#0C2340] text-amber-400 flex items-center justify-center shadow-md">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#B8860B] uppercase tracking-widest">
                        Academic Session 2026-27
                      </span>
                      <h3 className="text-2xl font-bold font-heading text-[#0C2340]">
                        Online Admission Application
                      </h3>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Student Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          required
                          value={formData.studentName}
                          onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                          placeholder="e.g. Master Aarav Sharma"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#0C2340]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Parent / Guardian Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          required
                          value={formData.parentName}
                          onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                          placeholder="e.g. Dr. Rajesh Sharma"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#0C2340]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                          Contact Phone *
                        </label>
                        <div className="relative">
                          <PhoneCall className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+91 98765 43210"
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#0C2340]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="parent@example.com"
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#0C2340]"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Target Academic Stream *
                      </label>
                      <select
                        value={formData.grade}
                        onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#0C2340]"
                      >
                        <option value="Primary Wing (Grades 1-5)">Primary Wing (Grades 1-5)</option>
                        <option value="Secondary CBSE Wing (Grades 6-10)">Secondary CBSE Wing (Grades 6-10)</option>
                        <option value="Olympiad Wing (Specialized Coaching)">Olympiad Wing (Specialized Coaching)</option>
                        <option value="STEM & Robotics Innovation Wing">STEM & Robotics Innovation Wing</option>
                      </select>
                    </div>

                    <ShinyButton
                      type="submit"
                      className="w-full mt-6 py-3.5 px-6 bg-gradient-to-r from-[#0C2340] to-blue-900 text-white font-extrabold text-base"
                    >
                      <FileCheck2 className="w-5 h-5 text-amber-400" />
                      <span>Submit Application</span>
                    </ShinyButton>
                  </form>
                </div>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-3xl font-extrabold font-heading text-[#0C2340]">
                    Application Received!
                  </h3>

                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Thank you, <span className="text-[#0C2340] font-bold">{formData.parentName}</span>. Our admissions director will review <span className="text-[#0C2340] font-bold">{formData.studentName}</span>&apos;s profile and reach out within 24 hours.
                  </p>

                  <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 text-xs text-slate-600 max-w-sm mx-auto">
                    Reference ID: <span className="font-mono text-[#0C2340] font-bold">KOS-2026-8942</span>
                  </div>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      onClose?.();
                    }}
                    className="mt-6 px-8 py-3 rounded-xl bg-[#0C2340] text-white font-bold text-sm hover:bg-blue-900 transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
