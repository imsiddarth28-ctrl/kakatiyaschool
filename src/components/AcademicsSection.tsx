"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Cpu,
  Trophy,
  Brain,
  Globe2,
  Atom,
  ArrowRight,
  CheckCircle2,
  X,
  Sparkles,
} from "lucide-react";

interface AcademicProgram {
  id: string;
  title: string;
  category: string;
  icon: typeof BookOpen;
  description: string;
  badge: string;
  features: string[];
  curriculumHighlights: string[];
}

const ACADEMIC_PROGRAMS: AcademicProgram[] = [
  {
    id: "primary",
    title: "Primary Wing",
    category: "Grades 1 - 5",
    icon: Brain,
    badge: "Foundational Genius",
    description:
      "Nurturing natural curiosity, logical reasoning, mental math, and experiential learning in young minds.",
    features: [
      "Activity-based Conceptual Learning",
      "Abacus & Mental Mathematics",
      "Interactive Storytelling & Phonics",
      "Early Science Discovery Labs",
    ],
    curriculumHighlights: [
      "Singapore Math Problem Solving Pedagogy",
      "Multilingual Language Foundation",
      "Green Projects & Nature Inquiry",
      "Art Integrated Workshops",
    ],
  },
  {
    id: "secondary",
    title: "Secondary CBSE Wing",
    category: "Grades 6 - 10",
    icon: BookOpen,
    badge: "CBSE & Science Mastery",
    description:
      "Comprehensive CBSE curriculum combined with advanced analytical problem-solving and conceptual clarity.",
    features: [
      "Rigorous Board Exam Preparation",
      "Physics, Chemistry & Biology Labs",
      "IIT-JEE & NEET Foundation Modules",
      "Structured Competitive Assessment",
    ],
    curriculumHighlights: [
      "NCERT Exemplar & Reference Mastery",
      "Weekly Mock Tests & Performance Analytics",
      "Personalized Academic Mentorship",
      "Scientific Research Paper Projects",
    ],
  },
  {
    id: "olympiad",
    title: "Specialized Olympiad Wing",
    category: "Specialized Coaching",
    icon: Trophy,
    badge: "National & Int'l Ranks",
    description:
      "Elite coaching for RMO, INMO, NSO, IMO, Homi Bhabha, and International Mathematical & Science Olympiads.",
    features: [
      "Mentorship by Olympiad Medalists",
      "Advanced Higher Mathematics & Physics",
      "Complex Proofs & Problem Solving",
      "National Level Mock Olympiad Clinics",
    ],
    curriculumHighlights: [
      "Combinatorics, Number Theory & Geometry",
      "Physical & Organic Chemistry Specialization",
      "Astronomy & Astrophysics Olympiad Modules",
      "Exclusive One-on-One Problem Clinics",
    ],
  },
  {
    id: "stem",
    title: "STEM & Robotics Innovation",
    category: "Next-Gen Engineering",
    icon: Cpu,
    badge: "Hands-on Tech",
    description:
      "Empowering students to design, code, build robotics models, AI algorithms, and IoT hardware prototypes.",
    features: [
      "Arduino & Microcontroller Workstations",
      "Python & Block-Based Programming",
      "3D Printing & CAD Design Studio",
      "Automation & Sensor Engineering",
    ],
    curriculumHighlights: [
      "Robotics League Competition Preparation",
      "Artificial Intelligence Basics",
      "Embedded Microcontroller Projects",
      "Annual Innovation & Tech Expo",
    ],
  },
  {
    id: "digital",
    title: "Smart Digital Pedagogy",
    category: "Smart Campus",
    icon: Atom,
    badge: "AI-Driven",
    description:
      "Interactive 4K digital displays, adaptive learning portals, and 3D simulation modules for deeper understanding.",
    features: [
      "Interactive 4K Smart Classrooms",
      "Student Portal & AI Tutor Assistant",
      "Digital Library with 50,000+ E-books",
      "Virtual Science Simulation Labs",
    ],
    curriculumHighlights: [
      "Real-Time Parent Analytics Dashboard",
      "Adaptive Difficulty Quiz Engine",
      "Instant Doubt Resolution Clinics",
      "Flipped Classroom Model",
    ],
  },
  {
    id: "language",
    title: "Oratory & Leadership",
    category: "Holistic Growth",
    icon: Globe2,
    badge: "Global Diplomacy",
    description:
      "Developing persuasive public speaking, debate, Model United Nations (MUN), and global diplomatic skills.",
    features: [
      "Model United Nations (MUN) Club",
      "Toastmasters Junior Orator Program",
      "Creative Writing & Journalism",
      "Debating Societies &MUN Symposia",
    ],
    curriculumHighlights: [
      "Annual Inter-School Parliamentary Debate",
      "Foreign Language Workshops (German, French)",
      "Editorial & Campus Magazine Publishing",
      "Social Impact Leadership Projects",
    ],
  },
];

export default function AcademicsSection() {
  const [selectedProgram, setSelectedProgram] = useState<AcademicProgram | null>(null);

  return (
    <section id="academics" className="relative py-28 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0C2340] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-[#B8860B]" />
            <span>Academic Pathways</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-heading text-[#0C2340] tracking-tight">
            Comprehensive <span className="text-gradient-gold">Academic Ecosystem</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Formulated to bridge foundational schooling with competitive mastery, ensuring every student reaches their highest intellectual potential.
          </p>
        </div>

        {/* 6 Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ACADEMIC_PROGRAMS.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-3xl p-8 bg-slate-50 border border-slate-200 hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 hover:shadow-xl shadow-slate-900/5"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#0C2340] text-amber-400 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-[#B8860B]">
                      {program.badge}
                    </span>
                  </div>

                  <span className="text-xs font-bold text-[#0C2340] uppercase tracking-widest">
                    {program.category}
                  </span>

                  <h3 className="text-2xl font-bold font-heading text-[#0C2340] mt-1 mb-3 group-hover:text-[#B8860B] transition-colors">
                    {program.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {program.description}
                  </p>

                  <div className="space-y-2.5 mb-8">
                    {program.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#B8860B] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProgram(program)}
                  className="w-full py-3 px-5 rounded-2xl bg-white hover:bg-[#0C2340] text-[#0C2340] hover:text-white font-bold text-xs flex items-center justify-center gap-2 border border-slate-300 transition-all shadow-sm"
                >
                  <span>Explore Blueprint</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Program Detail Modal */}
      <AnimatePresence>
        {selectedProgram && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md p-4 sm:p-6 flex items-center justify-center overflow-y-auto"
            onClick={() => setSelectedProgram(null)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl relative text-slate-900 my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProgram(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#0C2340] text-amber-400 flex items-center justify-center shadow-md">
                  <selectedProgram.icon className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#B8860B] uppercase tracking-widest">
                    {selectedProgram.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0C2340]">
                    {selectedProgram.title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                {selectedProgram.description}
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0C2340] mb-3">
                    Core Learning Objectives
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProgram.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 p-3 rounded-xl bg-slate-50 border border-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#B8860B] mb-3">
                    Curriculum Highlights & Pedagogy
                  </h4>
                  <div className="space-y-2">
                    {selectedProgram.curriculumHighlights.map((hl, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0C2340]" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 flex justify-end">
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="px-6 py-2.5 rounded-xl bg-[#0C2340] hover:bg-blue-900 text-white font-bold text-sm transition-colors"
                >
                  Close Blueprint
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
