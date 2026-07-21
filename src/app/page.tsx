"use client";

import { useState } from "react";
import LenisProvider from "@/components/LenisProvider";
import Navbar from "@/components/Navbar";
import HeroSequence from "@/components/HeroSequence";
import AdmissionsSection from "@/components/AdmissionsSection";
import Footer from "@/components/Footer";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import SplitText from "@/components/reactbits/SplitText";
import AuroraHero from "@/components/reactbits/AuroraHero";
import Link from "next/link";
import {
  BookOpen,
  Building2,
  Trophy,
  Award,
  Image as ImageIcon,
  PhoneCall,
  ArrowRight,
  Sparkles,
  Target,
  Compass,
} from "lucide-react";

const PAGE_DIRECTORY = [
  {
    title: "About Kakatiya",
    subtitle: "Our Vision, Mission & 25+ Years Legacy",
    href: "/about",
    icon: Compass,
    badge: "Directorate & Vision",
  },
  {
    title: "Academic Pathways",
    subtitle: "Primary, Secondary CBSE & Specialized Olympiad",
    href: "/academics",
    icon: BookOpen,
    badge: "Curriculum Blueprint",
  },
  {
    title: "Campus Facilities",
    subtitle: "STEM Labs, 10-Acre Sports & Planetarium",
    href: "/facilities",
    icon: Building2,
    badge: "World-Class Infrastructure",
  },
  {
    title: "Why Choose Us",
    subtitle: "100% Results, IITian Faculty & Mentorship",
    href: "/why-us",
    icon: Target,
    badge: "Proven Distinction",
  },
  {
    title: "Hall of Achievements",
    subtitle: "3D Trophy Showcase & IMO Gold Medalists",
    href: "/achievements",
    icon: Trophy,
    badge: "Global Ranks",
  },
  {
    title: "Campus Gallery",
    subtitle: "STEM Labs, Sports Meets & MUN Symposia",
    href: "/gallery",
    icon: ImageIcon,
    badge: "Visual Showcase",
  },
  {
    title: "Admissions 2026-27",
    subtitle: "Fee Structure, Eligibility & Online Form",
    href: "/admissions",
    icon: Award,
    badge: "Enrollment Open",
  },
  {
    title: "Contact & Helpline",
    subtitle: "Hyderabad Main Campus Address & Inquiry",
    href: "/contact",
    icon: PhoneCall,
    badge: "Direct Helpline",
  },
];

export default function Home() {
  const [admissionsOpen, setAdmissionsOpen] = useState(false);

  return (
    <LenisProvider>
      <div className="relative min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#D4AF37] selection:text-slate-950">
        {/* Navigation Bar */}
        <Navbar onOpenAdmissions={() => setAdmissionsOpen(true)} />

        {/* Hero Storytelling Movie Sequence */}
        <HeroSequence onOpenAdmissions={() => setAdmissionsOpen(true)} />

        {/* Theme Aurora Hero Section After Hero Scroll */}
        <AuroraHero
          title="Kakatiya Olympiad School"
          subtitle="Explore our institutional portals below after experiencing the cinematic storytelling sequence."
        />

        {/* Executive Page Directory Hub with React Bits Spotlight Cards */}
        <section className="py-24 bg-slate-50 text-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0C2340] text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-4 h-4 text-[#B8860B]" />
                <SplitText text="Explore Kakatiya Ecosystem" />
              </div>

              <h2 className="text-3xl sm:text-5xl font-black font-heading text-[#0C2340] tracking-tight">
                Dedicated <span className="text-gradient-gold">Institutional Portals</span>
              </h2>

              <p className="text-slate-600 text-base sm:text-lg">
                Click any portal below to load its dedicated page and explore detailed information.
              </p>
            </div>

            {/* 8 React Bits Spotlight Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PAGE_DIRECTORY.map((portal) => {
                const IconComponent = portal.icon;
                return (
                  <Link key={portal.href} href={portal.href}>
                    <SpotlightCard className="group p-6 rounded-3xl bg-white border border-slate-200 hover:border-[#D4AF37] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full hover:-translate-y-1.5">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 rounded-2xl bg-[#0C2340] text-amber-400 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-[#B8860B] border border-amber-200">
                            {portal.badge}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold font-heading text-[#0C2340] group-hover:text-[#B8860B] transition-colors mb-1">
                          {portal.title}
                        </h3>

                        <p className="text-xs text-slate-500 leading-relaxed mb-6">
                          {portal.subtitle}
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-xs font-bold text-[#0C2340] group-hover:text-[#B8860B] pt-4 border-t border-slate-100">
                        <span>Load Dedicated Page</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </SpotlightCard>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Admissions Modal */}
        <AdmissionsSection
          isOpen={admissionsOpen}
          onClose={() => setAdmissionsOpen(!admissionsOpen)}
        />

        {/* Footer */}
        <Footer onOpenAdmissions={() => setAdmissionsOpen(true)} />
      </div>
    </LenisProvider>
  );
}
