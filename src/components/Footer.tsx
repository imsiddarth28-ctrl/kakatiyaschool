"use client";

import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  Heart,
  Globe,
  Video,
  Share2,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export default function Footer({ onOpenAdmissions }: { onOpenAdmissions?: () => void }) {
  return (
    <footer id="contact" className="relative bg-[#0C2340] text-white pt-20 pb-10 overflow-hidden border-t border-[#D4AF37]/30">
      {/* Animated SVG Wave Background */}
      <div className="absolute top-0 left-0 right-0 h-16 opacity-25 pointer-events-none overflow-hidden">
        <svg
          className="w-[200%] h-full animate-wave"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,50 L1200,0 L0,0 Z"
            fill="url(#waveGradient)"
          />
          <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#1E3A8A" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37] to-amber-600 text-slate-950 flex items-center justify-center shadow-lg shadow-amber-500/20">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <span className="block font-black text-xl tracking-tight font-heading text-white">
                  KAKATIYA
                </span>
                <span className="block text-xs font-bold tracking-widest uppercase text-amber-300">
                  Olympiad School
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed font-normal">
              Pioneering international standard STEM education, competitive Olympiad training, and ethical leadership development for the innovators of tomorrow.
            </p>

            <div className="flex items-center gap-3 text-amber-400">
              {[
                { icon: Video, href: "#" },
                { icon: Share2, href: "#" },
                { icon: MessageCircle, href: "#" },
                { icon: Sparkles, href: "#" },
                { icon: Globe, href: "#" },
              ].map((soc, idx) => {
                const IconComp = soc.icon;
                return (
                  <a
                    key={idx}
                    href={soc.href}
                    className="p-2.5 rounded-xl bg-white/10 border border-white/10 hover:border-amber-400 hover:bg-[#1E3A8A] text-slate-200 hover:text-white transition-all"
                  >
                    <IconComp className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-heading">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-300">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Academics", href: "/academics" },
                { name: "Facilities", href: "/facilities" },
                { name: "Why Us", href: "/why-us" },
                { name: "Achievements", href: "/achievements" },
                { name: "Gallery", href: "/gallery" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-amber-300 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500 group-hover:bg-amber-400 transition-colors" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Helpline (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-heading">
              Contact & Helpline
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>Kakatiya Olympiad Campus, Prime Knowledge Corridor, Hyderabad, TS 500081</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+91 98765 43210 / +91 040 2345 6789</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>admissions@kakatiyaolympiad.edu.in</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Mon - Sat: 8:00 AM - 5:30 PM</span>
              </div>
            </div>
          </div>

          {/* Col 4: Location Map Card (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-heading">
              Campus Location
            </h4>
            <div className="rounded-2xl p-4 bg-white/5 border border-white/10 space-y-3 relative overflow-hidden group">
              <div className="h-28 rounded-xl bg-slate-900 border border-white/10 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/40 to-slate-950" />
                <div className="relative z-10 text-center space-y-1">
                  <MapPin className="w-7 h-7 text-amber-400 mx-auto animate-bounce" />
                  <span className="text-[11px] font-bold text-white block">
                    Kakatiya Olympiad Main Campus
                  </span>
                </div>
              </div>

              <button
                onClick={onOpenAdmissions}
                className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md hover:scale-[1.02]"
              >
                <span>Schedule Campus Visit</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Kakatiya Olympiad School. All Rights Reserved.</p>
          <div className="flex items-center gap-1">
            <span>Crafted for Educational Supremacy</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
          </div>
        </div>
      </div>
    </footer>
  );
}
