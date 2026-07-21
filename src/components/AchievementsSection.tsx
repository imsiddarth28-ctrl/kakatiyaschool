"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import { Award, Medal, Star, Quote, ChevronLeft, ChevronRight, Sparkles, Trophy } from "lucide-react";

// Interactive 3D Trophy Canvas Component using Three.js
function ThreeTrophyCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 300;
    const height = container.clientHeight || 300;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0.5, 6);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Metallic Gold Materials
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xffc93c,
      metalness: 0.85,
      roughness: 0.2,
      wireframe: false,
    });

    const baseMaterial = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.9,
      roughness: 0.3,
    });

    // Create 3D Trophy Geometry Group
    const trophyGroup = new THREE.Group();

    // Base pedestal
    const baseGeo = new THREE.CylinderGeometry(1.2, 1.5, 0.6, 32);
    const baseMesh = new THREE.Mesh(baseGeo, baseMaterial);
    baseMesh.position.y = -1.8;
    trophyGroup.add(baseMesh);

    // Stem
    const stemGeo = new THREE.CylinderGeometry(0.3, 0.4, 1.2, 32);
    const stemMesh = new THREE.Mesh(stemGeo, goldMaterial);
    stemMesh.position.y = -0.9;
    trophyGroup.add(stemMesh);

    // Cup Body
    const cupGeo = new THREE.CylinderGeometry(1.4, 0.5, 2.0, 32, 1, true);
    const cupMesh = new THREE.Mesh(cupGeo, goldMaterial);
    cupMesh.position.y = 0.5;
    trophyGroup.add(cupMesh);

    // Cup Bottom Cap
    const capGeo = new THREE.SphereGeometry(0.5, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2);
    const capMesh = new THREE.Mesh(capGeo, goldMaterial);
    capMesh.position.y = -0.4;
    capMesh.rotation.x = Math.PI;
    trophyGroup.add(capMesh);

    // Star Top Emblem
    const starShape = new THREE.Shape();
    const points = 5;
    for (let i = 0; i < points * 2; i++) {
      const r = i % 2 === 0 ? 0.6 : 0.25;
      const a = (i / (points * 2)) * Math.PI * 2 - Math.PI / 2;
      const x = Math.cos(a) * r;
      const y = Math.sin(a) * r;
      if (i === 0) starShape.moveTo(x, y);
      else starShape.lineTo(x, y);
    }
    const extrudeSettings = { depth: 0.15, bevelEnabled: true, bevelThickness: 0.05 };
    const starGeo = new THREE.ExtrudeGeometry(starShape, extrudeSettings);
    const starMesh = new THREE.Mesh(starGeo, goldMaterial);
    starMesh.position.set(0, 2.0, 0);
    trophyGroup.add(starMesh);

    scene.add(trophyGroup);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xfff099, 2.0);
    dirLight1.position.set(5, 10, 7);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x3b82f6, 1.5);
    dirLight2.position.set(-5, -5, -5);
    scene.add(dirLight2);

    // Animation Loop
    let animId: number;
    const animate = () => {
      trophyGroup.rotation.y += 0.015;
      trophyGroup.position.y = Math.sin(Date.now() * 0.002) * 0.1;
      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="w-full h-72 sm:h-96 relative" />;
}

const SUCCESS_STORIES = [
  {
    name: "Ananya Reddy",
    rank: "AIR 1 - International Math Olympiad (IMO)",
    year: "2025 Winner",
    quote:
      "The rigorous analytical training and constant mentorship at Kakatiya Olympiad School transformed my problem-solving perspective, giving me the confidence to compete globally.",
    score: "Gold Medalist",
  },
  {
    name: "Vikram Sharma",
    rank: "AIR 4 - National Science Olympiad (NSO)",
    year: "2025 Winner",
    quote:
      "From hands-on STEM robotics labs to deep physics clinic sessions, Kakatiya laid the absolute rock-solid foundation for my academic success.",
    score: "Gold Medalist",
  },
  {
    name: "Kavya Sree",
    rank: "AIR 2 - International Chemistry Olympiad (IChO)",
    year: "2024 Winner",
    quote:
      "The faculty's dedication is unparalleled. They don't just teach for marks; they instill a deep passion for scientific inquiry.",
    score: "Gold Medalist",
  },
];

export default function AchievementsSection() {
  const [activeStory, setActiveStory] = useState(0);

  const nextStory = () => {
    setActiveStory((prev) => (prev + 1) % SUCCESS_STORIES.length);
  };

  const prevStory = () => {
    setActiveStory((prev) => (prev - 1 + SUCCESS_STORIES.length) % SUCCESS_STORIES.length);
  };

  return (
    <section id="achievements" className="relative py-28 bg-slate-950 text-white overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#FFC93C]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-widest">
            <Trophy className="w-4 h-4 text-amber-400 animate-bounce" />
            <span>Hall of Supremacy</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Our Legacy of <span className="text-gradient-gold">Global Victories</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Celebrating our gold medalists, national top-rankers, and visionary young scholars.
          </p>
        </div>

        {/* 3D Showcase & Success Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive 3D Trophy Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 rounded-3xl p-8 glass-card border border-amber-400/30 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl shadow-amber-500/10 text-center"
          >
            <div className="absolute top-4 right-4 flex items-center gap-1.5 text-xs font-bold text-amber-400 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>3D Interactive Trophy</span>
            </div>

            <ThreeTrophyCanvas />

            <h3 className="text-2xl font-bold font-heading text-white mt-2">
              National Olympiad Cup 2025
            </h3>
            <p className="text-xs text-amber-300 font-semibold tracking-wider uppercase mt-1">
              Consecutive #1 Rank School in Region
            </p>
          </motion.div>

          {/* Right Column: Student Success Story Carousel */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
                Student Testimonials & Medals
              </span>

              {/* Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevStory}
                  className="p-2.5 rounded-full bg-slate-900 border border-white/10 hover:border-amber-400 text-slate-300 hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextStory}
                  className="p-2.5 rounded-full bg-slate-900 border border-white/10 hover:border-amber-400 text-slate-300 hover:text-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <motion.div
              key={activeStory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="p-8 rounded-3xl bg-slate-900/90 border border-white/10 relative shadow-xl"
            >
              <Quote className="w-12 h-12 text-amber-400/20 absolute top-6 right-6" />

              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
                <Medal className="w-4 h-4" />
                <span>{SUCCESS_STORIES[activeStory].score}</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-300">{SUCCESS_STORIES[activeStory].year}</span>
              </div>

              <p className="text-lg sm:text-xl text-slate-200 italic font-serif leading-relaxed mb-6">
                &ldquo;{SUCCESS_STORIES[activeStory].quote}&rdquo;
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div>
                  <h4 className="text-xl font-bold font-heading text-white">
                    {SUCCESS_STORIES[activeStory].name}
                  </h4>
                  <p className="text-xs text-amber-300 font-semibold mt-0.5">
                    {SUCCESS_STORIES[activeStory].rank}
                  </p>
                </div>

                <div className="flex text-amber-400 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
