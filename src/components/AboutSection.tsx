"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Compass, ShieldCheck, Target, Users, Sparkles, Award } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 bg-slate-50 text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-4"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#B8860B]">
            About Kakatiya Olympiad School
          </span>
        </motion.div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <h2 className="text-3xl sm:text-5xl font-black font-heading text-[#0C2340] tracking-tight leading-tight">
              Architects of <span className="text-gradient-gold">Scientific Genius</span> & Global Leadership
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              At Kakatiya Olympiad School, we don&apos;t just deliver a curriculum—we cultivate critical thinking, scientific curiosity, and academic supremacy. Built specifically for ambitious students, our pedagogy merges CBSE rigor with specialized Olympiad training and state-of-the-art STEM experimentation.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#D4AF37] transition-all">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0C2340] flex items-center justify-center mb-3">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-3xl font-extrabold text-[#0C2340] font-heading">100%</h3>
                <p className="text-xs text-slate-500 font-semibold mt-1">Olympiad & Competitive Success</p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#D4AF37] transition-all">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#B8860B] flex items-center justify-center mb-3">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-3xl font-extrabold text-[#0C2340] font-heading">1:12</h3>
                <p className="text-xs text-slate-500 font-semibold mt-1">Teacher-Student Ratio</p>
              </div>
            </div>

            {/* Checklist */}
            <div className="space-y-3 pt-2">
              {[
                "Integrated CBSE & International Olympiad Curriculum",
                "Dedicated Mentorship by IITian & PhD Scholars",
                "360-Degree Analytical & Problem-Solving Mastery",
                "Personalized Academic Progress Analytics",
              ].map((value, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#B8860B] shrink-0" />
                  <span className="text-slate-700 text-sm font-medium">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column Visual Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl p-8 sm:p-10 bg-[#0C2340] text-white border border-slate-800 shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Compass className="w-36 h-36 text-white" />
              </div>

              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-amber-300 text-xs font-bold">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Educational Philosophy</span>
                </div>

                <blockquote className="text-xl sm:text-2xl font-serif italic text-amber-100/90 leading-snug">
                  &ldquo;Education is not merely the accumulation of facts, but the disciplined training of the mind to solve complex real-world challenges.&rdquo;
                </blockquote>

                <div className="pt-4 border-t border-white/15 flex items-center justify-between">
                  <div>
                    <span className="block text-sm font-bold text-white font-heading">
                      Academic Governing Directorate
                    </span>
                    <span className="block text-xs text-slate-300">
                      Hyderabad Main Campus
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-amber-400">
                    <Award className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">A+ Accredited</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Overlapping Badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 p-4 rounded-2xl bg-white border border-slate-200 shadow-xl flex items-center gap-4 max-w-xs"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0C2340] text-amber-400 font-black text-xl flex items-center justify-center shadow-md">
                25+
              </div>
              <div>
                <p className="text-xs font-bold text-[#0C2340]">Years of Supremacy</p>
                <p className="text-[11px] text-slate-500">Shaping Top Olympiad Winners</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
