"use client";

import React from "react";
import { motion } from "framer-motion";

interface ShinyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function ShinyButton({
  children,
  className = "",
  onClick,
  ...props
}: ShinyButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-full font-bold transition-all duration-300 active:scale-95 shadow-md hover:shadow-xl ${className}`}
      {...props}
    >
      {/* Animated Shine Effect */}
      <motion.span
        initial={{ x: "-100%" }}
        animate={{ x: "200%" }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "linear",
          repeatDelay: 1,
        }}
        className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 z-10 pointer-events-none"
      />
      <span className="relative z-20 flex items-center gap-2">{children}</span>
    </button>
  );
}
