"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface GlareCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlareCard({ children, className = "" }: GlareCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPosition({ x, y });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 ${className}`}
    >
      {/* React Bits Animated Holographic Glare Overlay */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-20"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}% ${position.y}%, rgba(212, 175, 55, 0.25), transparent 60%)`,
        }}
      />

      {/* Shimmer Border Beam */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300 z-10 border border-[#D4AF37]/40"
        style={{ opacity }}
      />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
