"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Menu, X, ChevronRight, Award, PhoneCall } from "lucide-react";
import Link from "next/link";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Facilities", href: "/facilities" },
  { name: "Why Us", href: "/why-us" },
  { name: "Achievements", href: "/achievements" },
  { name: "Gallery", href: "/gallery" },
  { name: "Admissions", href: "/admissions" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar({ onOpenAdmissions }: { onOpenAdmissions?: () => void }) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (!isHomePage) {
        setIsScrolled(true);
        return;
      }
      // Fully transparent until user scrolls past 30px
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    if (!isHomePage) {
      setIsScrolled(true);
    } else {
      handleScroll();
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isHomePage && !isScrolled
            ? "py-5 bg-transparent border-b border-transparent text-white"
            : "py-3 bg-white/95 backdrop-blur-xl border-b border-slate-200 text-slate-900 shadow-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            prefetch={true}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 shadow-md ${
                isHomePage && !isScrolled
                  ? "bg-gradient-to-br from-[#D4AF37] to-amber-600 text-slate-950 shadow-amber-500/30 group-hover:scale-105"
                  : "bg-[#0C2340] text-amber-400 shadow-slate-900/10 group-hover:scale-105"
              }`}
            >
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span
                className={`block font-black text-lg sm:text-xl tracking-tight font-heading leading-tight transition-colors ${
                  isHomePage && !isScrolled ? "text-white drop-shadow-md" : "text-[#0C2340]"
                }`}
              >
                KAKATIYA
              </span>
              <span
                className={`block text-[10px] sm:text-xs font-bold tracking-widest uppercase transition-colors ${
                  isHomePage && !isScrolled ? "text-amber-300 drop-shadow-sm" : "text-[#D4AF37]"
                }`}
              >
                Olympiad School
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {NAV_ITEMS.map((item) => {
              const isActive =
                pathname === item.href ||
                (pathname.startsWith(item.href) && item.href !== "/");

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  prefetch={true}
                  className={`relative px-3.5 py-2 text-xs xl:text-sm font-semibold transition-all rounded-full group ${
                    isHomePage && !isScrolled
                      ? isActive
                        ? "text-amber-300 font-black bg-white/20 border border-amber-400/50 shadow-sm"
                        : "text-white hover:text-amber-300 hover:bg-white/10"
                      : isActive
                      ? "text-[#0C2340] font-black bg-slate-100/90 border border-slate-300/60"
                      : "text-slate-700 hover:text-[#0C2340] hover:bg-slate-100/60"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Menu Trigger */}
          <div className="flex items-center gap-3">
            <Link
              href="/admissions"
              prefetch={true}
              className={`hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs xl:text-sm transition-all shadow-lg hover:scale-105 active:scale-95 ${
                isHomePage && !isScrolled
                  ? "bg-gradient-to-r from-[#D4AF37] to-amber-500 text-slate-950 hover:bg-amber-400 shadow-amber-500/30"
                  : "bg-[#0C2340] text-white hover:bg-blue-900 shadow-slate-900/15"
              }`}
            >
              <span>Admissions 2026-27</span>
              <ChevronRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2.5 rounded-xl transition-colors ${
                isHomePage && !isScrolled
                  ? "text-white hover:bg-white/10"
                  : "text-slate-900 hover:bg-slate-100"
              }`}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden bg-slate-950/95 backdrop-blur-2xl pt-24 px-6 pb-10 flex flex-col justify-between overflow-y-auto"
          >
            <div className="space-y-1">
              <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-4 px-3">
                Main Menu & Pages
              </p>
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  prefetch={true}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-slate-200 hover:text-amber-300 hover:bg-white/5 transition-all"
                >
                  <span>{item.name}</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </Link>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-800 space-y-4">
              <Link
                href="/admissions"
                prefetch={true}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#D4AF37] to-amber-500 text-slate-950 font-bold text-base flex items-center justify-center gap-2 shadow-lg"
              >
                <Award className="w-5 h-5" />
                <span>Apply Admissions 2026-27</span>
              </Link>
              <div className="flex items-center justify-center gap-2 text-slate-400 text-xs py-2">
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>Helpline: +91 98765 43210</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
