"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Award,
  BookOpenCheck,
  CheckCircle2,
  Lightbulb,
  Medal,
  Sparkles,
  Target,
  Users2,
} from "lucide-react";

// Count-up helper component
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000; // ms
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-extrabold font-heading text-amber-400">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const WHY_CHOOSE_ITEMS = [
  {
    icon: Target,
    title: "100% Competitive Results",
    desc: "Unmatched track record in National & International Mathematics, Physics, Chemistry, and Astronomy Olympiads.",
  },
  {
    icon: Users2,
    title: "Expert IITian & PhD Faculty",
    desc: "Learn directly from distinguished educators, former Olympiad winners, and subject experts dedicated to student success.",
  },
  {
    icon: Medal,
    title: "Specialized Olympiad Wing",
    desc: "Targeted problem-solving methodology, deep conceptual proofs, and intensive mock clinic sessions.",
  },
  {
    icon: Lightbulb,
    title: "Smart Ergonomic Classrooms",
    desc: "Clutter-free digital environments designed with eye-care lighting and acoustic optimization for hyper-focused learning.",
  },
  {
    icon: Award,
    title: "International Sports Complex",
    desc: "Nurturing physical stamina, teamwork, and agility with professional coaching across 10+ sports disciplines.",
  },
  {
    icon: BookOpenCheck,
    title: "Co-Curricular & MUN Clubs",
    desc: "Empowering confident leaders through public speaking, Model UN, robotics hackathons, and literary journals.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-28 bg-[#0C2340] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-300 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>The Kakatiya Distinction</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
            Why Visionary Parents <span className="text-gradient-gold">Choose Kakatiya</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            A battle-tested educational ecosystem that combines academic rigor with holistic leadership.
          </p>
        </div>

        {/* Animated Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { label: "Olympiad Medals Won", value: 2500, suffix: "+" },
            { label: "CBSE Board Average", value: 98, suffix: "%" },
            { label: "IIT & AIIMS Selections", value: 450, suffix: "+" },
            { label: "Parent Satisfaction", value: 100, suffix: "%" },
          ].map((stat, sIdx) => (
            <motion.div
              key={sIdx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: sIdx * 0.1 }}
              className="p-6 rounded-2xl glass-card border border-white/10 text-center hover:border-amber-400/40 transition-colors"
            >
              <div className="text-3xl sm:text-5xl mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* 6 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_ITEMS.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl glass-card border border-white/10 hover:border-amber-400/50 transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1A4FA3] to-blue-700 text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-900/30 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-7 h-7 text-amber-300" />
                </div>

                <h3 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>

                <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Kakatiya Gold Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
