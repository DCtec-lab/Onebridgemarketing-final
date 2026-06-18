import { FC, useEffect, useRef, useState, MouseEvent } from "react";
import { ArrowRight, Trophy, Flame } from "lucide-react";

export default function App() {
  return (
    <div className="bg-[#FAF9FC] text-[#0D0B14] min-h-screen font-sans overflow-hidden selection:bg-[#EA4812]/10 selection:text-[#EA4812] transition-colors duration-300">
      <Hero />
    </div>
  );
}

export const Hero: FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const ambientLightRef = useRef<HTMLDivElement | null>(null);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [tiltStyle, setTiltStyle] = useState<string>("perspective(1500px) rotateX(0deg) rotateY(0deg) scale(1)");

  useEffect(() => {
    let ctx: any = null;
    let script: HTMLScriptElement | null = null;

    const initAnimations = (gsapInstance: any) => {
      ctx = gsapInstance.context(() => {
        const tl = gsapInstance.timeline({ defaults: { ease: "power4.out" } });

        // Typography Entrance sequence with safe, clean offsets
        tl.fromTo("#hero-heading", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.2 }, 0.2)
          .fromTo("#hero-description", { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 1 }, 0.5)
          .fromTo(".hero-trust-badge", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.8, stagger: 0.15, ease: "back.out(2)" }, 0.7)
          .fromTo(".hero-cta-button", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 }, 0.9);

        // Solid Bridge Deck animation sequence
        tl.fromTo(".bridge-bg-grid", { opacity: 0, scale: 0.95 }, { opacity: 0.15, scale: 1, duration: 2 }, 0.3)
          .fromTo(".sun-source", { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 1.5, ease: "back.out(1.5)" }, 0.5)
          .fromTo(".bridge-deck-3d", { scaleX: 0, transformOrigin: "center" }, { scaleX: 1, duration: 1.8, ease: "elastic.out(1, 0.75)" }, 0.8)

          // Towers Assembly (Guaranteed visibility with strict transforms)
          .fromTo(".tower-1", { opacity: 0, y: 140 }, { opacity: 1, y: 0, duration: 1.6, ease: "back.out(1.2)" }, 1.0)
          .fromTo(".tower-2", { opacity: 0, y: 140 }, { opacity: 1, y: 0, duration: 1.6, ease: "back.out(1.2)" }, 1.2)

          // Metallic structural cables
          .fromTo(".bridge-cable-main-3d", { strokeDashoffset: 1200, strokeDasharray: 1200 }, { strokeDashoffset: 0, duration: 2, ease: "power3.inOut" }, 1.4)
          .fromTo(".bridge-cable-vert-3d", { scaleY: 0, transformOrigin: "top" }, { scaleY: 1, duration: 1.2, stagger: { each: 0.03, from: "center" }, ease: "back.out(1.2)" }, 1.6)
          .fromTo(".ambient-spotlight", { opacity: 0, scale: 0.8 }, { opacity: 0.45, scale: 1, duration: 2.5, ease: "sine.out" }, 1.5);

        // Persistent pulsing strobe micro-animations
        gsapInstance.to(".pulsing-tower-light", {
          opacity: 0.8,
          scale: 1.4,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });

        // Fiber optic bridge edge glow
        gsapInstance.to("#neonDeckGlow filter feGaussianBlur", {
          attr: { stdDeviation: 8 },
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });

        // Scattered ambient micro-leads
        gsapInstance.to(".cold-lead-drift", {
          x: "random(-12, 12)",
          y: "random(-15, 15)",
          rotation: "random(-20, 20)",
          duration: "random(4, 6)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: { each: 0.3 }
        });

        const totalParticles = 6;
        for (let i = 0; i < totalParticles; i++) {
          const pId = `#custom-particle-${i}`;
          const delay = i * 2.2;

          const particleTl = gsapInstance.timeline({ repeat: -1, delay: delay });

          particleTl.to(pId, {
            duration: 7,
            ease: "power1.inOut",
            onStart: () => {
              gsapInstance.set(pId, { visibility: "visible" });
            },
            onUpdate: function () {
              const t = this.progress();

              // Plotting coordinates across the isometric projection plane
              const x = 110 + (910 - 110) * t;
              const y = 330 - Math.sin(t * Math.PI) * 28 + (205 - 330) * t;

              gsapInstance.set(pId, { x, y });

              // Dynamic Customer Conversion Morphs
              const coldIcon = document.querySelector(`${pId} .part-cold`);
              const engagedIcon = document.querySelector(`${pId} .part-engaged`);
              const hotIcon = document.querySelector(`${pId} .part-hot`);
              const glowRing = document.querySelector(`${pId} .part-glow`);

              if (t < 0.3) {
                gsapInstance.set(coldIcon, { opacity: 1 - (t / 0.3) });
                gsapInstance.set(engagedIcon, { opacity: (t / 0.3) });
                gsapInstance.set(hotIcon, { opacity: 0 });
                gsapInstance.set(glowRing, { opacity: t * 0.4, stroke: "#8B5CF6" });
              } else if (t >= 0.3 && t < 0.75) {
                const factor = (t - 0.3) / 0.45;
                gsapInstance.set(coldIcon, { opacity: 0 });
                gsapInstance.set(engagedIcon, { opacity: 1 - factor });
                gsapInstance.set(hotIcon, { opacity: factor });
                gsapInstance.set(glowRing, { opacity: 0.4 + (factor * 0.4), stroke: `url(#gGlow)` });
              } else {
                const factor = (t - 0.75) / 0.25;
                gsapInstance.set(coldIcon, { opacity: 0 });
                gsapInstance.set(engagedIcon, { opacity: 0 });
                gsapInstance.set(hotIcon, { opacity: 1 - factor });
                gsapInstance.set(glowRing, { opacity: (1 - factor) * 0.8, stroke: "#EA4812" });
              }
            }
          });
        }
      });
    };

    if ((window as any).gsap) {
      initAnimations((window as any).gsap);
    } else {
      script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
      script.async = true;
      script.onload = () => {
        if ((window as any).gsap) {
          initAnimations((window as any).gsap);
        }
      };
      document.body.appendChild(script);
    }

    return () => {
      if (ctx) ctx.revert();
      if (script && document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !svgRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setTiltStyle(`perspective(1500px) rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 7).toFixed(2)}deg) scale(1.02)`);
    setMousePos({ x, y });

    if (ambientLightRef.current && (window as any).gsap) {
      const parentRect = containerRef.current.getBoundingClientRect();
      const relativeX = e.clientX - parentRect.left;
      const relativeY = e.clientY - parentRect.top;
      (window as any).gsap.to(ambientLightRef.current, {
        x: relativeX - 250,
        y: relativeY - 250,
        duration: 0.6,
        ease: "power2.out"
      });
    }
  };

  const handleMouseLeave = () => {
    setTiltStyle("perspective(1500px) rotateX(0deg) rotateY(0deg) scale(1)");
    setMousePos({ x: 0, y: 0 });
    if (ambientLightRef.current && (window as any).gsap) {
      (window as any).gsap.to(ambientLightRef.current, { x: "50%", y: "40%", duration: 1.2, ease: "power3.out" });
    }
  };

  const handleCtaClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      /* 
        FIX: Removed 'items-center' to prevent the flex container from clipping the top 
        of the content when it exceeds the viewport height. Added 'my-auto' to the 
        inner container to maintain vertical centering on large screens while 
        respecting the top padding on mobile.
      */
      className="relative w-full bg-[#FAF8FC] pt-24 pb-0 sm:pt-28 md:pt-28 lg:pt-28 lg:pb-0 flex justify-center overflow-hidden transition-colors duration-300 z-10"
    >
      {/* Immersive Warm Atmospheric Light Theme Grid Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-purple-200/40 filter blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#EA4812]/5 filter blur-[150px]" />
        <div className="absolute top-[25%] right-[10%] w-[350px] h-[350px] rounded-full bg-indigo-100/30 filter blur-[120px]" />
      </div>

      {/* FIX: Added 'my-auto' to guarantee the top padding is respected when content overflows */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full relative z-20 my-auto">
        
        {/* FIX: Removed 'items-center' so the invisible spacer can stretch the left column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Content Column */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6 sm:space-y-8 relative z-30">
            
            {/* Invisible spacer to clear the fixed navbar */}
            <div className="w-full h-4 sm:h-6 flex-shrink-0 pointer-events-none select-none" aria-hidden="true" />

            <h1
              id="hero-heading"
              style={{ fontSize: "clamp(2.5rem, 1rem + 5.5vw, 3.25rem)", lineHeight: 1.0 }}
              className="font-display font-extrabold text-[#0D0B14] tracking-tight w-full break-words"
            >
              Your Business
              <br />
              <span
                style={{ lineHeight: 1.15 }}
                className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-[#EA4812] italic pr-2 font-extrabold lowercase"
              >
                deserves
              </span>
              <br />
              To Be Seen.
            </h1>

            <p
              id="hero-description"
              className="font-sans text-gray-600 text-sm sm:text-base md:text-lg leading-[1.6] sm:leading-[1.7] max-w-xl"
            >
              We are an elite creative growth partner. We marry breathtaking depth of design, social conversion kinetics, and high-fidelity traffic architecture to craft the direct bridge between brand noise and customer loyalty.
            </p>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-1 text-xs sm:text-sm text-gray-700">
              <div className="hero-trust-badge flex items-center gap-2 font-sans font-semibold bg-black/[0.02] backdrop-blur-md px-3.5 py-2 rounded-lg border border-black/[0.06]">
                <Trophy size={15} className="text-[#EA4812]" />
                <span>Top Rated Growth Agency</span>
              </div>
              <div className="hero-trust-badge flex items-center gap-2 font-sans font-semibold bg-black/[0.02] backdrop-blur-md px-3.5 py-2 rounded-lg border border-black/[0.06]">
                <Flame size={15} className="text-purple-600" />
                <span>Enterprise D2C Specialists</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-2">
              <button
                onClick={() => handleCtaClick("#audit")}
                className="hero-cta-button group relative bg-[#EA4812] hover:bg-[#F25C2B] text-white font-sans font-extrabold text-xs sm:text-sm tracking-wider uppercase px-6 sm:px-8 py-4 sm:py-5 rounded-xl shadow-xl shadow-[#EA4812]/15 hover:shadow-[#EA4812]/30 transition-all duration-300 flex items-center justify-center gap-3 hover:-translate-y-1 cursor-pointer overflow-hidden border border-white/10"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Start With a Free Audit
                  <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>

              <button
                onClick={() => handleCtaClick("#services")}
                className="hero-cta-button border-2 border-black/10 hover:border-[#EA4812] text-gray-800 hover:bg-black/[0.02] font-sans font-bold text-xs sm:text-sm tracking-wider uppercase px-6 sm:px-8 py-4 sm:py-5 rounded-xl transition-all duration-300 flex items-center justify-center cursor-pointer hover:-translate-y-1"
              >
                View Services
              </button>
            </div>
          </div>

          {/* Premium 3D Isometric Bridge Display Column */}
          <div className="lg:col-span-6 flex justify-center items-center relative pt-4 lg:pt-0 w-full z-20">

            {/* Background Parallax Light Mesh Elements */}
            <div
              style={{
                transform: `translate3d(${mousePos.x * -25}px, ${mousePos.y * -25}px, 0)`,
                transition: "transform 0.2s ease-out"
              }}
              className="absolute top-1/4 left-1/4 w-[120%] h-[120%] rounded-full bg-gradient-to-tr from-purple-500/5 via-indigo-400/0 to-[#EA4812]/5 pointer-events-none filter blur-3xl z-0"
            />

            <div
              id="hero-artwork-frame"
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-[760px] cursor-crosshair z-10"
            >
              <div
                style={{
                  transform: tiltStyle,
                  transition: "transform 0.5s cubic-bezier(0.1, 0.8, 0.2, 1)"
                }}
                className="relative group w-full"
              >
                {/* Advanced Multi-layered Outer Shadow optimized for Light Theme */}
                <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-tr from-purple-400/5 via-[#EA4812]/5 to-orange-400/5 opacity-60 group-hover:opacity-90 blur-xl transition duration-1000" />

                {/* The "Glass-Morphic Cyber Deck" Container (Sophisticated light-glass variant) */}
                <div className="relative bg-white/75 backdrop-blur-2xl p-3 sm:p-6 md:p-8 rounded-[2.5rem] border border-black/[0.06] shadow-3xl shadow-purple-950/5 overflow-hidden min-h-[320px] sm:min-h-[440px] md:min-h-[520px]">

                  {/* Soft Warm Champagne Spotlight Effect tracking user cursor */}
                  <div
                    ref={ambientLightRef}
                    className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-amber-200/15 via-orange-200/10 to-transparent pointer-events-none filter blur-3xl mix-blend-multiply opacity-80 transition-opacity duration-300"
                    style={{ left: "50%", top: "40%", transform: "translate(-50%, -50%)" }}
                  />

                  <div className="relative w-full h-full flex items-center justify-center">

                    <svg
                      ref={svgRef}
                      className="w-full h-full overflow-visible"
                      viewBox="0 0 1000 500"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <defs>
                        {/* Brushed structural steel and platinum tower gradients */}
                        <linearGradient id="metallicSteel" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#818CF8" />
                          <stop offset="35%" stopColor="#4F46E5" />
                          <stop offset="70%" stopColor="#6366F1" />
                          <stop offset="100%" stopColor="#1E293B" />
                        </linearGradient>

                        {/* Gold & Copper Warm Architectural Cables */}
                        <linearGradient id="goldCopper" x1="0%" y1="100%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#C2410C" />
                          <stop offset="50%" stopColor="#EA4812" />
                          <stop offset="80%" stopColor="#F97316" />
                          <stop offset="100%" stopColor="#FBBF24" />
                        </linearGradient>

                        {/* Ceramic White & Chrome Deck Surface Gradient */}
                        <linearGradient id="metallicDeck" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#E2E8F0" stopOpacity="0.95" />
                          <stop offset="25%" stopColor="#F1F5F9" stopOpacity="0.98" />
                          <stop offset="50%" stopColor="#EA4812" stopOpacity="0.3" />
                          <stop offset="75%" stopColor="#EEF2F6" stopOpacity="0.98" />
                          <stop offset="100%" stopColor="#E2E8F0" stopOpacity="0.95" />
                        </linearGradient>

                        <linearGradient id="gGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#8B5CF6" />
                          <stop offset="50%" stopColor="#EC4899" />
                          <stop offset="100%" stopColor="#EA4812" />
                        </linearGradient>

                        {/* Custom Radial Gradient for 3D pearlescent spheres */}
                        <radialGradient id="pearlGrad" cx="35%" cy="35%" r="65%">
                          <stop offset="0%" stopColor="#FFFFFF" />
                          <stop offset="60%" stopColor="#E2E8F0" />
                          <stop offset="100%" stopColor="#94A3B8" />
                        </radialGradient>

                        {/* Fine, high-contrast light theme occlusion shadow filters */}
                        <filter id="deckShadow" x="-10%" y="-10%" width="120%" height="130%">
                          <feDropShadow dx="0" dy="12" stdDeviation="8" floodColor="#0F172A" floodOpacity="0.08" />
                        </filter>

                        <filter id="towerShadow" x="-25%" y="-10%" width="150%" height="120%">
                          <feDropShadow dx="8" dy="10" stdDeviation="6" floodColor="#0F172A" floodOpacity="0.06" />
                        </filter>

                        {/* Soft optical fiber bloom filter */}
                        <filter id="neonDeckGlow" x="-20%" y="-20%" width="140%" height="140%">
                          <feGaussianBlur stdDeviation="6" result="blur1" />
                          <feGaussianBlur stdDeviation="10" result="blur2" />
                          <feMerge>
                            <feMergeNode in="blur2" />
                            <feMergeNode in="blur1" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>

                        <filter id="intenseSunGlow" x="-50%" y="-50%" width="200%" height="200%">
                          <feGaussianBlur stdDeviation="14" result="blur" />
                          <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>

                      {/* --- LIGHTING: Background Warm Gold Sun Source --- */}
                      <g className="sun-source" transform="translate(520, 110)">
                        <circle cx="0" cy="0" r="80" fill="url(#goldCopper)" opacity="0.08" filter="url(#intenseSunGlow)" />
                        <circle cx="0" cy="0" r="25" fill="#FFFFFF" opacity="0.4" filter="url(#intenseSunGlow)" />
                        <circle cx="0" cy="0" r="3" fill="#FFFFFF" opacity="0.95" />
                      </g>

                      {/* --- 3D Grid: Crisp, Light-contrast Perspective Lines --- */}
                      <g
                        className="bridge-bg-grid"
                        opacity="0.15"
                        stroke="#94A3B8"
                        strokeWidth="0.75"
                        style={{
                          transform: `translate3d(${mousePos.x * -18}px, ${mousePos.y * -18}px, 0)`,
                          transition: "transform 0.1s ease-out",
                          filter: "blur(0.5px)"
                        }}
                      >
                        {/* Horizontal perspective steps */}
                        <line x1="0" y1="200" x2="1000" y2="200" strokeWidth="0.5" />
                        <line x1="0" y1="250" x2="1000" y2="250" strokeWidth="0.5" />
                        <line x1="0" y1="310" x2="1000" y2="310" />
                        <line x1="0" y1="380" x2="1000" y2="380" strokeWidth="1.2" />
                        <line x1="0" y1="460" x2="1000" y2="460" strokeWidth="2.0" />
                        {/* Converging vanishing lines to focal sun core */}
                        <line x1="500" y1="110" x2="-200" y2="500" />
                        <line x1="500" y1="110" x2="150" y2="500" />
                        <line x1="500" y1="110" x2="500" y2="500" />
                        <line x1="500" y1="110" x2="850" y2="500" />
                        <line x1="500" y1="110" x2="1200" y2="500" />
                      </g>

                      {/* --- LEFT SIDE: Scattered 3D Pearlescent Lead Drifts --- */}
                      <g
                        className="cold-lead-scatters"
                        style={{
                          transform: `translate3d(${mousePos.x * -10}px, ${mousePos.y * -10}px, 0)`,
                          transition: "transform 0.2s ease-out"
                        }}
                      >
                        <g className="cold-lead-drift" transform="translate(60, 380)">
                          <circle cx="0" cy="0" r="14" fill="url(#pearlGrad)" stroke="#CBD5E1" strokeWidth="1" filter="url(#deckShadow)" />
                          <circle cx="0" cy="0" r="4" fill="#64748B" />
                        </g>
                        <g className="cold-lead-drift" transform="translate(100, 310)">
                          <circle cx="0" cy="0" r="11" fill="url(#pearlGrad)" stroke="#CBD5E1" strokeWidth="1" filter="url(#deckShadow)" />
                          <circle cx="0" cy="0" r="3.5" fill="#64748B" />
                        </g>
                        <g className="cold-lead-drift" transform="translate(40, 260)">
                          <circle cx="0" cy="0" r="8" fill="url(#pearlGrad)" stroke="#E2E8F0" strokeWidth="1" />
                          <circle cx="0" cy="0" r="2.5" fill="#94A3B8" />
                        </g>
                      </g>

                      {/* --- THE ISOMETRIC 3D BRIDGE STRUCTURE --- */}
                      <g
                        id="isometric-bridge-assembly"
                        style={{
                          transform: `translate3d(${mousePos.x * 5}px, ${mousePos.y * 5}px, 0)`,
                          transition: "transform 0.3s cubic-bezier(0.1, 0.8, 0.2, 1)"
                        }}
                      >
                        {/* 1. UNDER-DECK COLD OCCLUSION SHADOW (True 3D anchor) */}
                        <path
                          d="M 110,332 L 910,207"
                          fill="none"
                          stroke="#0F172A"
                          strokeWidth="16"
                          filter="url(#deckShadow)"
                          opacity="0.18"
                          className="bridge-deck-3d"
                        />

                        {/* 2. FIBER RAIL ENERGY BLOOM */}
                        <path
                          d="M 110,336 L 910,211"
                          fill="none"
                          stroke="url(#gGlow)"
                          strokeWidth="20"
                          filter="url(#neonDeckGlow)"
                          opacity="0.22"
                          className="bridge-deck-3d"
                        />

                        {/* 3. BRIDGE STRUCTURE: BACK MAIN CABLE PLANE */}
                        <g opacity="0.3">
                          <path d="M 110,210 Q 215,160 320,110" fill="none" stroke="url(#metallicSteel)" strokeWidth="1.5" className="bridge-cable-main-3d" />
                          <path d="M 320,110 Q 520,280 720,70" fill="none" stroke="url(#metallicSteel)" strokeWidth="1.5" className="bridge-cable-main-3d" />
                          <path d="M 720,70 Q 815,130 910,190" fill="none" stroke="url(#metallicSteel)" strokeWidth="1.5" className="bridge-cable-main-3d" />
                        </g>

                        {/* 4. BRIDGE ROADWAY DECK (Reflective Light-Slab) */}
                        <g className="bridge-deck-3d">
                          {/* Dark structural roadway core depth face */}
                          <path d="M 110,330 L 110,336 L 910,211 L 910,205 Z" fill="#94A3B8" />

                          {/* Polished Satin Light Slab Surface */}
                          <path d="M 110,330 L 910,205 L 910,201 L 110,326 Z" fill="url(#metallicDeck)" />

                          {/* Fine glass-rail crisp paths */}
                          <path d="M 110,326 L 910,201" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.8" />
                          <path d="M 110,330 L 910,205" fill="none" stroke="url(#gGlow)" strokeWidth="1.5" opacity="0.65" />

                          {/* High-definition white structural isometric cross rails */}
                          <g opacity="0.5" stroke="#FFFFFF" strokeWidth="1">
                            {[0.08, 0.16, 0.24, 0.32, 0.4, 0.48, 0.56, 0.64, 0.72, 0.8, 0.88, 0.96].map((ratio, idx) => {
                              const x = 110 + (910 - 110) * ratio;
                              const y = 330 + (205 - 330) * ratio;
                              return (
                                <line key={idx} x1={x} y1={y} x2={x} y2={y - 5} />
                              );
                            })}
                          </g>
                        </g>

                        {/* 5. COLD METALLIC SUSPENSION HANGERS */}
                        <g className="bridge-cable-vert-3d" opacity="0.35" stroke="url(#metallicSteel)" strokeWidth="1.2">
                          <line x1="170" y1="185" x2="170" y2="321" />
                          <line x1="230" y1="155" x2="230" y2="311" />
                          <line x1="290" y1="125" x2="290" y2="302" />

                          <line x1="380" y1="135" x2="380" y2="288" />
                          <line x1="440" y1="175" x2="440" y2="279" />
                          <line x1="500" y1="195" x2="500" y2="269" />
                          <line x1="560" y1="190" x2="560" y2="260" />
                          <line x1="620" y1="160" x2="620" y2="251" />
                          <line x1="680" y1="115" x2="680" y2="242" />

                          <line x1="770" y1="100" x2="770" y2="227" />
                          <line x1="830" y1="135" x2="830" y2="218" />
                          <line x1="890" y1="175" x2="890" y2="208" />
                        </g>

                        {/* 6. STRUCTURAL PILLAR TOWER 1 (Satin-grey with soft shadows - Optimized for cross-browser visibility) */}
                        <g className="tower-1" filter="url(#towerShadow)">
                          {/* Inner dark core back face */}
                          <path d="M 314,302 L 314,110 L 324,105 L 324,300 Z" fill="#1E293B" />
                          {/* Front polished platinum alloy column */}
                          <path d="M 334,295 L 334,80 L 348,75 L 348,293 Z" fill="url(#metallicSteel)" />
                          {/* Architectural structural strut braces */}
                          <g className="tower-1-cross" opacity="0.9">
                            <path d="M 324,130 L 334,145 L 334,152 L 324,137 Z" fill="#EA4812" />
                            <path d="M 334,130 L 324,145 L 324,152 L 334,137 Z" fill="#818CF8" />
                            <rect x="323" y="180" width="12" height="4" fill="url(#goldCopper)" />
                          </g>
                          {/* Bright navigation cap strobe */}
                          <circle cx="341" cy="76" r="5" fill="#EA4812" className="pulsing-tower-light" filter="url(#intenseSunGlow)" />
                        </g>

                        {/* 7. STRUCTURAL PILLAR TOWER 2 */}
                        <g className="tower-2" filter="url(#towerShadow)">
                          {/* Inner back column core */}
                          <path d="M 708,241 L 708,60 L 718,55 L 718,239 Z" fill="#1E293B" />
                          {/* Front polished platinum column */}
                          <path d="M 728,234 L 728,30 L 742,25 L 742,232 Z" fill="url(#metallicSteel)" />
                          {/* Structural braces */}
                          <g className="tower-2-cross" opacity="0.9">
                            <path d="M 718,85 L 728,100 L 728,107 L 718,92 Z" fill="#EA4812" />
                            <path d="M 728,85 L 718,100 L 718,107 L 728,92 Z" fill="#818CF8" />
                            <rect x="717" y="130" width="12" height="4" fill="url(#goldCopper)" />
                          </g>
                          {/* Strobe */}
                          <circle cx="735" cy="26" r="5" fill="#EA4812" className="pulsing-tower-light" filter="url(#intenseSunGlow)" />
                        </g>

                        {/* 8. GOLD-COPPER ARCHITECTURAL FOREGROUND CABLES */}
                        <g opacity="0.95">
                          <path d="M 110,230 Q 225,155 341,76" fill="none" stroke="url(#goldCopper)" strokeWidth="3" className="bridge-cable-main-3d" />
                          <path d="M 341,76 Q 538,245 735,26" fill="none" stroke="url(#goldCopper)" strokeWidth="3" className="bridge-cable-main-3d" />
                          <path d="M 735,26 Q 822,108 910,205" fill="none" stroke="url(#goldCopper)" strokeWidth="3" className="bridge-cable-main-3d" />
                        </g>
                      </g>

                      {/* --- THE CONVERSION ROADWAY MORPH PARTICLES --- */}
                      <g id="flow-particles-container">
                        {[0, 1, 2, 3, 4, 5].map((idx) => (
                          <g
                            key={idx}
                            id={`custom-particle-${idx}`}
                            style={{ visibility: "hidden" }}
                          >
                            {/* Fluid Ambient Active Shadow Ring */}
                            <circle cx="0" cy="0" r="16" fill="none" className="part-glow" strokeWidth="2.5" filter="url(#neonDeckGlow)" opacity="0" />

                            {/* Phase 1: Cold (Soft Pearlescent Lead sphere) */}
                            <g className="part-cold">
                              <circle cx="0" cy="0" r="7" fill="url(#pearlGrad)" stroke="#CBD5E1" strokeWidth="0.5" />
                              <circle cx="0" cy="0" r="2.5" fill="#64748B" />
                            </g>

                            {/* Phase 2: Engaged (Deep Purple faceted vector star) */}
                            <g className="part-engaged" opacity="0">
                              <path
                                d="M0,-8 L2,-2 L8,0 L2,2 L0,8 L-2,2 L-8,0 L-2,-2 Z"
                                fill="#7C3AED"
                                filter="url(#neonDeckGlow)"
                              />
                            </g>

                            {/* Phase 3: Hot Converted Customer (Vibrant faceted copper & gold diamond) */}
                            <g className="part-hot" opacity="0">
                              <polygon points="-8,4 0,-8 8,4 0,8" fill="#FBBF24" />
                              <polygon points="-8,4 0,-8 0,8" fill="#EA4812" />
                              <circle cx="0" cy="0" r="2.5" fill="#FFFFFF" />
                            </g>
                          </g>
                        ))}
                      </g>

                    </svg>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};