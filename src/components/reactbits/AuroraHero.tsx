"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface AuroraHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  showSwitch?: boolean;
}

export function AuroraHero({
  title = "Kakatiya Olympiad School",
  subtitle = "Empowering Next-Gen Leaders & Olympiad Champions",
  className,
  ...props
}: AuroraHeroProps) {

  const filterImageHref = "data:image/svg+xml," + encodeURIComponent(`
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1' color-interpolation-filters='sRGB'>
      <g>
        <rect width='1' height='1' fill='black' />
        <rect width='1' height='1' fill='url(#gold)' style='mix-blend-mode:screen' />
        <rect width='1' height='1' fill='url(#blue)' style='mix-blend-mode:screen' />
        <rect width='1' height='1' fill='url(#navy)' style='mix-blend-mode:screen' />
      </g>
      <defs>
        <radialGradient id='gold' cx='0' cy='0' r='1' >
          <stop stop-color='#D4AF37' />
          <stop stop-color='#D4AF37' offset='1' stop-opacity='0' />
        </radialGradient>
        <radialGradient id='blue' cx='1' cy='0' r='1' >
          <stop stop-color='#1E3A8A' />
          <stop stop-color='#1E3A8A' offset='1' stop-opacity='0' />
        </radialGradient>
        <radialGradient id='navy' cx='0' cy='1' r='1' >
          <stop stop-color='#0C2340' />
          <stop stop-color='#0C2340' offset='1' stop-opacity='0' />
        </radialGradient>
      </defs>
    </svg>
  `);

  return (
    <section
      className={cn("aurora-hero-wrapper w-full min-h-[400px] py-20 relative overflow-hidden bg-[#070D1E] text-white", className)}
      {...props}
    >
      <style>{`
        .aurora-hero-wrapper {
          --stripe-color: #070D1E;
          --bg-filter: blur(14px) opacity(65%) saturate(180%);
          font-family: var(--font-heading), sans-serif;
        }
        @keyframes smoothBg {
          from { background-position: 50% 50%, 50% 50%; }
          to { background-position: 350% 50%, 350% 50%; }
        }
        .aurora-hero-bg {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          --stripes: repeating-linear-gradient(
            100deg, 
            var(--stripe-color) 0%, 
            var(--stripe-color) 7%, 
            transparent 10%, 
            transparent 12%, 
            var(--stripe-color) 16%
          );
          --rainbow: repeating-linear-gradient(
            100deg, 
            #070D1E 10%, 
            #C5A059 15%, 
            #1C2D42 20%, 
            #A48038 25%, 
            #0B132B 30%
          );
          background-image: var(--stripes), var(--rainbow);
          background-size: 300%, 200%;
          background-position: 50% 50%, 50% 50%;
          filter: var(--bg-filter);
          mask-image: radial-gradient(ellipse at 100% 0%, black 50%, transparent 80%);
          -webkit-mask-image: radial-gradient(ellipse at 100% 0%, black 50%, transparent 80%);
        }
        .aurora-hero-bg::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image: var(--stripes), var(--rainbow);
          background-size: 200%, 100%;
          animation: smoothBg 40s linear infinite;
          mix-blend-mode: overlay;
        }
        .aurora-content {
          position: relative;
          z-index: 10;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-center: center;
          gap: 1.25rem;
          text-align: center;
          padding: 2rem 1rem;
        }
      `}</style>

      <div className="aurora-hero-bg"></div>

      <div className="aurora-content">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#D4AF37]/50 text-[#D4AF37] text-xs font-black uppercase tracking-widest backdrop-blur-md shadow-lg">
          <span>Institutional Flagship Portal</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight text-white drop-shadow-xl max-w-4xl leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="text-slate-200 text-sm sm:text-lg max-w-2xl font-medium drop-shadow-md">
            {subtitle}
          </p>
        )}
      </div>

      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        colorInterpolationFilters="sRGB"
        style={{ position: "absolute", opacity: 0, height: 0, width: 0, pointerEvents: "none" }}
        aria-hidden="true"
        focusable="false"
      >
        <filter id="fluted" primitiveUnits="objectBoundingBox">
          <feImage
            x="0"
            y="0"
            result="image_0"
            crossOrigin="anonymous"
            href={filterImageHref}
            preserveAspectRatio="none meet"
            width=".03"
            height="1"
          />
          <feTile in="image_0" result="tile_0" />
          <feGaussianBlur stdDeviation=".0001" edgeMode="none" in="tile_0" result="bar_smoothness" x="0" y="0" />
          <feDisplacementMap scale=".08" xChannelSelector="R" yChannelSelector="G" in="SourceGraphic" in2="bar_smoothness" result="displacement_0" />
        </filter>
      </svg>
    </section>
  );
}

export default AuroraHero;
