"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Maximize2, X, Image as ImageIcon } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: "stem" | "sports" | "cultural" | "olympiad";
  aspect: "aspect-square" | "aspect-[4/5]" | "aspect-[16/9]";
  colorGradient: string;
  caption: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "International Math Olympiad Award Ceremony",
    category: "olympiad",
    aspect: "aspect-[4/5]",
    colorGradient: "from-amber-600 to-yellow-800",
    caption: "Student felicitations by eminent scientists & academic directors.",
  },
  {
    id: "g2",
    title: "High-Tech Robotics & AI Hackathon",
    category: "stem",
    aspect: "aspect-square",
    colorGradient: "from-blue-600 to-indigo-900",
    caption: "Students designing autonomous drone models & robotic arms.",
  },
  {
    id: "g3",
    title: "Annual Sports Day Athletics Championship",
    category: "sports",
    aspect: "aspect-[16/9]",
    colorGradient: "from-emerald-600 to-teal-900",
    caption: "Synthetic track sprints & gold medal presentations.",
  },
  {
    id: "g4",
    title: "Astronomy Night & Stargazing Workshop",
    category: "stem",
    aspect: "aspect-[4/5]",
    colorGradient: "from-purple-700 to-slate-900",
    caption: "Observing Saturn's rings with high-power telescopes.",
  },
  {
    id: "g5",
    title: "Model United Nations (MUN) General Assembly",
    category: "cultural",
    aspect: "aspect-square",
    colorGradient: "from-[#1A4FA3] to-slate-900",
    caption: "Diplomatic debate on global climate policies and international law.",
  },
  {
    id: "g6",
    title: "National Science Exhibition Winners",
    category: "olympiad",
    aspect: "aspect-[16/9]",
    colorGradient: "from-amber-500 to-amber-900",
    caption: "Winning 1st Prize for Eco-Friendly Water Purification Model.",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Moments" },
  { id: "olympiad", label: "Olympiad Victories" },
  { id: "stem", label: "STEM & Robotics" },
  { id: "sports", label: "Sports Complex" },
  { id: "cultural", label: "MUN & Arts" },
];

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeFilter === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="relative py-28 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0C2340] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-[#B8860B]" />
            <span>Visual Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-heading text-[#0C2340] tracking-tight">
            Life at <span className="text-gradient-gold">Kakatiya Campus</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            A glimpse into our vibrant ecosystem of scientific discovery, athletic triumphs, and global leadership.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                activeFilter === cat.id
                  ? "bg-[#0C2340] text-white shadow-md"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setActiveItem(item)}
                className={`group relative rounded-3xl ${item.aspect} bg-gradient-to-br ${item.colorGradient} border border-white/10 overflow-hidden cursor-pointer shadow-xl flex flex-col justify-end p-6 hover:scale-[1.02] transition-transform duration-300`}
              >
                {/* Overlay Icon */}
                <div className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-950/60 backdrop-blur-md text-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-4 h-4" />
                </div>

                <div className="relative z-10 space-y-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-300 px-2.5 py-0.5 rounded-md bg-slate-950/60 backdrop-blur-sm inline-block">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold font-heading text-white group-hover:text-amber-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-1">{item.caption}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl p-4 flex items-center justify-center"
            onClick={() => setActiveItem(null)}
          >
            <motion.div
              initial={{ scale: 0.88 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.88 }}
              className="bg-slate-900 border border-slate-700 rounded-3xl max-w-3xl w-full p-6 relative text-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div
                className={`w-full h-80 rounded-2xl bg-gradient-to-br ${activeItem.colorGradient} flex items-center justify-center mb-6 relative overflow-hidden`}
              >
                <ImageIcon className="w-16 h-16 text-white/40" />
              </div>

              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                {activeItem.category}
              </span>
              <h3 className="text-2xl font-bold font-heading text-white mt-1">
                {activeItem.title}
              </h3>
              <p className="text-slate-300 text-sm mt-2">{activeItem.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
