"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Compass } from "lucide-react";

const TOTAL_FRAMES = 240;

const getFrameUrl = (index: number) => {
  const paddedIndex = String(index + 1).padStart(6, "0");
  return `/frames/frame_${paddedIndex}.png`;
};

// Simplified main titles only (No badges, subtitles, or extra buttons)
const MAIN_TITLES = [
  { start: 5, end: 50, title: "Kakatiya Olympiad School" },
  { start: 60, end: 110, title: "Where Curiosity Meets Excellence" },
  { start: 120, end: 170, title: "Learning Beyond Classrooms" },
  { start: 180, end: 210, title: "Inspiring Future Leaders" },
  { start: 215, end: 238, title: "Admissions Open 2026-27" },
];

export default function HeroSequence({ onOpenAdmissions }: { onOpenAdmissions?: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particleCanvasRef = useRef<HTMLCanvasElement>(null);

  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);
  const targetFrameRef = useRef<number>(0);
  const animFrameIdRef = useRef<number | null>(null);

  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isPreloaded, setIsPreloaded] = useState(false);
  const [activeTextIndex, setActiveTextIndex] = useState<number | null>(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];
    let isUnlocked = false;

    const safetyTimer = setTimeout(() => {
      if (!isUnlocked) {
        isUnlocked = true;
        setIsPreloaded(true);
      }
    }, 2500);

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);

      const checkProgress = () => {
        loadedCount++;
        const percent = Math.floor((loadedCount / TOTAL_FRAMES) * 100);
        setLoadingProgress(percent);

        if (!isUnlocked && (loadedCount >= 15 || percent >= 10)) {
          isUnlocked = true;
          setIsPreloaded(true);
        }

        if (loadedCount === TOTAL_FRAMES) {
          setIsPreloaded(true);
        }
      };

      img.onload = checkProgress;
      img.onerror = checkProgress;
      images.push(img);
    }
    imagesRef.current = images;

    return () => clearTimeout(safetyTimer);
  }, []);

  const renderFrame = useCallback((frameIdx: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const images = imagesRef.current;
    if (!images || images.length === 0) return;

    let imgToDraw: HTMLImageElement | null = null;
    let idx = Math.min(TOTAL_FRAMES - 1, Math.max(0, frameIdx));

    if (images[idx] && images[idx].complete && images[idx].naturalWidth > 0) {
      imgToDraw = images[idx];
    } else {
      for (let b = idx - 1; b >= 0; b--) {
        if (images[b] && images[b].complete && images[b].naturalWidth > 0) {
          imgToDraw = images[b];
          break;
        }
      }
      if (!imgToDraw) {
        for (let f = idx + 1; f < TOTAL_FRAMES; f++) {
          if (images[f] && images[f].complete && images[f].naturalWidth > 0) {
            imgToDraw = images[f];
            break;
          }
        }
      }
    }

    if (!imgToDraw) return;

    const width = canvas.width;
    const height = canvas.height;

    const imgRatio = imgToDraw.naturalWidth / imgToDraw.naturalHeight;
    const canvasRatio = width / height;

    let drawWidth = width;
    let drawHeight = height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = width / imgRatio;
      offsetY = (height - drawHeight) / 2;
    } else {
      drawWidth = height * imgRatio;
      offsetX = (width - drawWidth) / 2;
    }

    const parallaxX = mouseRef.current.x * 12;
    const parallaxY = mouseRef.current.y * 10;

    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.translate(parallaxX, parallaxY);
    ctx.drawImage(imgToDraw, offsetX - 5, offsetY - 5, drawWidth + 10, drawHeight + 10);
    ctx.restore();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth * dpr;
        canvasRef.current.height = window.innerHeight * dpr;
        renderFrame(Math.round(currentFrameRef.current));
      }
      if (particleCanvasRef.current) {
        particleCanvasRef.current.width = window.innerWidth;
        particleCanvasRef.current.height = window.innerHeight;
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [renderFrame]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollableHeight = rect.height - window.innerHeight;
      const scrolled = -rect.top;

      setHasScrolled(scrolled > 30);

      let progress = Math.max(0, Math.min(1, scrolled / totalScrollableHeight));
      const targetFrame = Math.min(TOTAL_FRAMES - 1, Math.floor(progress * (TOTAL_FRAMES - 1)));
      targetFrameRef.current = targetFrame;

      const activeSeqIndex = MAIN_TITLES.findIndex(
        (seq) => targetFrame >= seq.start && targetFrame <= seq.end
      );
      setActiveTextIndex(activeSeqIndex !== -1 ? activeSeqIndex : null);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let running = true;

    const loop = () => {
      if (!running) return;

      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.01) {
        currentFrameRef.current += diff * 0.18;
      } else {
        currentFrameRef.current = targetFrameRef.current;
      }

      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      const frameToDraw = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.round(currentFrameRef.current))
      );
      renderFrame(frameToDraw);

      animFrameIdRef.current = requestAnimationFrame(loop);
    };

    animFrameIdRef.current = requestAnimationFrame(loop);

    return () => {
      running = false;
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, [renderFrame]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = (e.clientY / window.innerHeight) * 2 - 1;
      mouseRef.current.targetX = normX;
      mouseRef.current.targetY = normY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const normX = (touch.clientX / window.innerWidth) * 2 - 1;
        const normY = (touch.clientY / window.innerHeight) * 2 - 1;
        mouseRef.current.targetX = normX;
        mouseRef.current.targetY = normY;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  useEffect(() => {
    const pCanvas = particleCanvasRef.current;
    if (!pCanvas) return;
    const ctx = pCanvas.getContext("2d");
    if (!ctx) return;

    pCanvas.width = window.innerWidth;
    pCanvas.height = window.innerHeight;

    const isMobile = window.innerWidth < 768;
    const numParticles = isMobile ? 20 : 40;

    const particles = Array.from({ length: numParticles }, () => ({
      x: Math.random() * pCanvas.width,
      y: Math.random() * pCanvas.height,
      radius: Math.random() * 2 + 0.8,
      color: Math.random() > 0.5 ? "rgba(212, 175, 55, " : "rgba(100, 160, 255, ",
      alpha: Math.random() * 0.4 + 0.2,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: -Math.random() * 0.5 - 0.1,
    }));

    let animId: number;
    const animateParticles = () => {
      ctx.clearRect(0, 0, pCanvas.width, pCanvas.height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.y < 0) {
          p.y = pCanvas.height;
          p.x = Math.random() * pCanvas.width;
        }
        if (p.x < 0) p.x = pCanvas.width;
        if (p.x > pCanvas.width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.shadowBlur = isMobile ? 0 : 8;
        ctx.shadowColor = "#D4AF37";
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animId = requestAnimationFrame(animateParticles);
    };

    animateParticles();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div ref={containerRef} id="home" className="relative w-full h-[550vh] bg-slate-950">
      {/* Sticky Viewport */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden touch-pan-y">
        {/* Preloader */}
        <AnimatePresence>
          {!isPreloaded && (
            <motion.div
              exit={{ opacity: 0, transition: { duration: 0.6 } }}
              className="absolute inset-0 z-50 bg-[#0C2340] flex flex-col items-center justify-center p-6 text-white"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-amber-600 p-0.5 animate-spin mb-5 shadow-lg">
                <div className="w-full h-full bg-[#0C2340] rounded-[14px] flex items-center justify-center">
                  <Compass className="w-7 h-7 text-[#D4AF37]" />
                </div>
              </div>

              <h2 className="text-lg sm:text-2xl font-black text-white tracking-wide font-heading text-center">
                KAKATIYA OLYMPIAD SCHOOL
              </h2>
              <p className="text-slate-300 text-xs mt-2 tracking-widest uppercase font-semibold">
                Initializing Hero Experience
              </p>

              <div className="w-48 sm:w-64 h-1.5 bg-slate-800 rounded-full mt-5 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#D4AF37] to-amber-400 transition-all duration-200"
                  style={{ width: `${loadingProgress}%` }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Frame Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover select-none"
        />

        {/* Particle Canvas Layer */}
        <canvas
          ref={particleCanvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
        />

        {/* Background Overlay Tint (0.1 opacity after scroll) */}
        <div
          className={`absolute inset-0 pointer-events-none bg-[#0C2340] transition-opacity duration-700 z-15 ${
            hasScrolled ? "opacity-10" : "opacity-0"
          }`}
        />
        <div className="absolute inset-0 pointer-events-none vignette-overlay z-15" />

        {/* Pure Floating Typography (ONLY Main Heading Text) */}
        <div className="absolute inset-0 z-20 flex items-center justify-center px-4 sm:px-6 pointer-events-none">
          <AnimatePresence mode="wait">
            {activeTextIndex !== null && (
              <motion.div
                key={activeTextIndex}
                initial={{ opacity: 0, y: 30, filter: "blur(12px)", scale: 0.96 }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                exit={{ opacity: 0, y: -30, filter: "blur(12px)", scale: 1.04 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-4xl text-center flex flex-col items-center pointer-events-auto px-4"
              >
                {/* Main Heading Text Only */}
                <h1 className="text-3xl sm:text-6xl md:text-7xl font-black text-white tracking-tight font-heading leading-tight drop-shadow-[0_10px_25px_rgba(0,0,0,0.85)]">
                  {activeTextIndex === 0 ? (
                    <>
                      <span className="block text-gradient-gold-light">KAKATIYA</span>
                      <span className="text-gradient-gold">OLYMPIAD SCHOOL</span>
                    </>
                  ) : (
                    MAIN_TITLES[activeTextIndex].title
                  )}
                </h1>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 pointer-events-none">
          <span className="text-[10px] font-bold tracking-widest text-slate-300 uppercase opacity-90 drop-shadow-md">
            Scroll To Discover Story
          </span>
          <div className="w-5 h-9 rounded-full border-2 border-slate-300/50 p-1 flex justify-center backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="w-1.5 h-2 rounded-full bg-[#D4AF37]"
            />
          </div>
          <ChevronDown className="w-4 h-4 text-slate-300 animate-bounce" />
        </div>
      </div>
    </div>
  );
}
