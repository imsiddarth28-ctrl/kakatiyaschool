"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Compass,
  Trophy,
  BookOpen,
  Activity,
  Bus,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const FACILITIES_DATA = [
  {
    id: "stem-lab",
    title: "High-Tech STEM & Robotics Center",
    tag: "Engineering & AI",
    description:
      "State-of-the-art laboratory equipped with 3D printers, IoT hardware modules, robotics kits, and high-performance computing stations for student innovation.",
    stats: "30+ Robotics Kits | AI Workstations",
    icon: Compass,
    highlights: ["3D Printing & CAD Studio", "Drone Prototyping", "Python & Microcontrollers"],
  },
  {
    id: "sports-complex",
    title: "Olympic-Standard Sports Arena",
    tag: "Athletic Excellence",
    description:
      "Sprawling 10-acre athletic grounds featuring FIFA-standard synthetic football field, synthetic basketball courts, lawn tennis, badminton arenas, and indoor chess halls.",
    stats: "10-Acre Arena | National Coaches",
    icon: Trophy,
    highlights: ["Professional Athletic Tracks", "Indoor Gymnasium", "Archery & Table Tennis"],
  },
  {
    id: "smart-classrooms",
    title: "Interactive AI-Powered Smart Classrooms",
    tag: "Digital Pedagogy",
    description:
      "Ergonomically designed, climate-controlled classrooms equipped with 4K touch-interactive digital displays, acoustic damping, and ambient eye-care lighting.",
    stats: "50+ Smart Classrooms | 4K Interactive Panels",
    icon: Activity,
    highlights: ["3D Visual Lesson Animations", "Adaptive Quiz Systems", "Ergonomic Seating"],
  },
  {
    id: "observatory",
    title: "Astronomical Observatory & Planetarium",
    tag: "Space Science",
    description:
      "Dedicated sky observation dome equipped with high-aperture motorized telescopes allowing students to observe planetary bodies, deep space nebulae, and lunar topographies.",
    stats: "Motorized Telescopes | Planetarium",
    icon: Sparkles,
    highlights: ["Night Sky Camps", "Stargazing Workshops", "ISRO Outreach Programs"],
  },
  {
    id: "library",
    title: "Digital Knowledge Archival Center",
    tag: "Research Library",
    description:
      "Quiet research sanctuary housing over 15,000 physical volumes, international research journals, and digital kiosks connected to global academic libraries.",
    stats: "15,000+ Volumes | E-Reader Kiosks",
    icon: BookOpen,
    highlights: ["Individual Study Pods", "IEEE Research Kiosks", "Audiobook Kiosks"],
  },
  {
    id: "transport",
    title: "GPS-Tracked Safe Transport Fleet",
    tag: "100% Student Safety",
    description:
      "Fully air-conditioned buses equipped with real-time GPS tracking, speed governors, CCTV surveillance, and trained female attendants for maximum security.",
    stats: "Real-Time App Tracking | Speed Governed",
    icon: Bus,
    highlights: ["Parent Live Tracking App", "Emergency First-Aid Ready", "AC Comfort"],
  },
];

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="relative py-28 bg-slate-50 text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0C2340] text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-[#B8860B]" />
            <span>World-Class Infrastructure</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-heading text-[#0C2340] tracking-tight">
            Designed for <span className="text-gradient-gold">Unbounded Growth</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Immerse in an environment engineered with international standards to nurture physical stamina, scientific exploration, and creative brilliance.
          </p>
        </div>

        {/* Alternating Layout */}
        <div className="space-y-12">
          {FACILITIES_DATA.map((facility, index) => {
            const isEven = index % 2 === 0;
            const IconComp = facility.icon;

            return (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl p-8 sm:p-10 bg-white border border-slate-200 hover:border-[#D4AF37] transition-all shadow-sm ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`lg:col-span-7 space-y-5 ${
                    isEven ? "lg:pr-6" : "lg:order-2 lg:pl-6"
                  }`}
                >
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-[#B8860B] uppercase tracking-widest px-3 py-1 rounded-full bg-amber-50 border border-amber-200">
                    <IconComp className="w-4 h-4 text-[#0C2340]" />
                    <span>{facility.tag}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0C2340]">
                    {facility.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {facility.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {facility.highlights.map((hl, hIdx) => (
                      <span
                        key={hIdx}
                        className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800"
                      >
                        ✓ {hl}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0C2340] tracking-wider">
                      {facility.stats}
                    </span>
                    <button className="p-2.5 rounded-full bg-slate-100 hover:bg-[#0C2340] text-[#0C2340] hover:text-white transition-colors group">
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Right Visual Box */}
                <div
                  className={`lg:col-span-5 h-64 sm:h-80 rounded-2xl bg-[#0C2340] text-white p-8 flex flex-col justify-between relative overflow-hidden shadow-xl ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="absolute -right-10 -bottom-10 opacity-15">
                    <IconComp className="w-60 h-60 text-white" />
                  </div>

                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-amber-400 mb-4">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-slate-300 tracking-widest uppercase">
                      Kakatiya Institutional Standard
                    </span>
                  </div>

                  <div className="relative z-10">
                    <h4 className="text-xl sm:text-2xl font-extrabold font-heading text-white">
                      {facility.title}
                    </h4>
                    <p className="text-xs text-amber-200 mt-1">
                      Certified Safe & Sustainable Campus
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
