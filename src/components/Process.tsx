import { FC, useState, useLayoutEffect, useRef } from "react";
import { Compass, Calendar, Play, ChartLine as LineChart, Activity, ShieldCheck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Process: FC = () => {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const pinnedSectionRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      num: "PHASE 01",
      title: "Discovery & Audit",
      tagline: "ANALYZING TRAFFIC GAPS",
      description:
        "We dive deep into your brand, audience behavior, and competitor channels to find the precise entry gates and bottlenecks in your current funnel.",
      icon: <Compass size={22} />,
      badge: "24 KPI METRICS AUDITED",
      color: "from-orange-500 to-red-500",
      accentColor: "#EA4812",
      stats: {
        readout: "ACTIVE SYSTEM INVENTORY",
        checkpoint:
          "Conversion funnel bottleneck scan complete. Detected 4 critical leaky drops.",
        metric: "100% Comprehensive Audit",
      },
    },
    {
      num: "PHASE 02",
      title: "High-End Planning",
      tagline: "90-DAY STRATEGIC MAP",
      description:
        "We design a custom architectural blueprint tailored specifically to bridge the exact gaps between your current conversions and your maximum potential.",
      icon: <Calendar size={22} />,
      badge: "90-DAY GROWTH BLUEPRINT",
      color: "from-purple-500 to-indigo-600",
      accentColor: "#8B5CF6",
      stats: {
        readout: "ARCHITECTURAL BLUEPRINT MAP",
        checkpoint:
          "D2C / FinTech performance model established. 90-day action steps aligned.",
        metric: "18+ Multi-Channel Funnels",
      },
    },
    {
      num: "PHASE 03",
      title: "Tactical Execution",
      tagline: "HIGH-ROI CREATIVE ASSETS",
      description:
        "Our world-class line directors and designers launch scroll-stopping short-form content, sleek custom collateral, and premium targeted ads.",
      icon: <Play size={22} />,
      badge: "D2C VIDEO & GRAPHIC DEPLOY",
      color: "from-indigo-500 via-purple-600 to-pink-500",
      accentColor: "#6366F1",
      stats: {
        readout: "CREATIVE PERFORMANCE ENGINE",
        checkpoint:
          "Reels & carousels entering high-retention pool. CTR optimization active.",
        metric: "+145% Average Retargeting CTR",
      },
    },
    {
      num: "PHASE 04",
      title: "Compounded Growth",
      tagline: "LIFETIME VALUE EXPANSION",
      description:
        "No stagnant periods. We run continuous cohort optimizations, performance metrics tracking, and scale scaling engines to keep revenues trending upwards.",
      icon: <LineChart size={22} />,
      badge: "CONVERSION AUTO-OPTIMIZER ON",
      color: "from-yellow-500 to-[#EA4812]",
      accentColor: "#EAB308",
      stats: {
        readout: "REVENUE GROWTH TRACKER",
        checkpoint:
          "Audience cohort optimization finalized. LTV value compounding live.",
        metric: "3.2x Campaign ROI Scale",
      },
    },
  ];

  useLayoutEffect(() => {
    if (!containerRef.current || !pinnedSectionRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // ─── DESKTOP: true sticky pin ───────────────────────────────────────────
      mm.add("(min-width: 1024px)", () => {
        // The outer container is 500vh tall.
        // pinnedSectionRef is 100vh and gets pinned at the top.
        // As the user scrolls through the extra 400vh we map scroll progress → step.
        const pinTrigger = ScrollTrigger.create({
          trigger: containerRef.current,
          pin: pinnedSectionRef.current,
          start: "top top",
          end: "bottom bottom",
          // No scrub – we just want it pinned; step changes are event-driven below.
          invalidateOnRefresh: true,
        });

        // Divide the 400vh extra scroll into 4 equal segments (one per phase).
        // Use a single scrub trigger to map progress → activeStep.
        const stepTrigger = ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // self.progress goes 0 → 1 over the full 500vh container.
            // We want step 0 at 0–0.25, step 1 at 0.25–0.5, etc.
            // Use 4 equal bands but clamp to [0, steps.length-1].
            const raw = Math.floor(self.progress * steps.length);
            const idx = Math.min(raw, steps.length - 1);
            setActiveStepIdx(idx);
          },
        });

        return () => {
          pinTrigger.kill();
          stepTrigger.kill();
        };
      });

      // ─── MOBILE: sticky pin via CSS position:sticky ─────────────────────────
      // We handle this with pure CSS (sticky + scroll-snap-like behaviour).
      // GSAP only handles the active-step highlight by watching each card.
      mm.add("(max-width: 1023px)", () => {
        // Same scrub approach: the outer container is 500vh on mobile too.
        // pinnedSectionRef is sticky (CSS) so it doesn't need GSAP pinning.
        const stepTrigger = ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const raw = Math.floor(self.progress * steps.length);
            const idx = Math.min(raw, steps.length - 1);
            setActiveStepIdx(idx);
          },
        });

        return () => {
          stepTrigger.kill();
        };
      });
    }, containerRef);

    return () => ctx.revert();
  }, [steps.length]);

  const scrollToStep = (idx: number) => {
    const container = containerRef.current;
    if (!container) return;
    // Map step index to a proportional scroll position within the container.
    // containerRect.top + window.scrollY gives absolute top of container.
    const containerTop =
      container.getBoundingClientRect().top + window.scrollY;
    const containerHeight = container.offsetHeight; // 500vh
    // We want idx/steps.length fraction of the extra scroll (beyond 1 viewport).
    const extraScroll = containerHeight - window.innerHeight;
    const targetScroll = containerTop + (idx / steps.length) * extraScroll;
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  const step = steps[activeStepIdx];

  return (
    // Outer track: tall enough to create scroll distance for all 4 phases.
    // 100vh for the pinned panel + 4 × 100vh for phases = 500vh total.
    <div
      id="process"
      ref={containerRef}
      className="relative w-full bg-[#FAF9FC] border-b border-purple-100/30"
      style={{ height: "500vh" }}
    >
      {/* ── Pinned panel ──────────────────────────────────────────────────────── */}
      {/* On desktop  → GSAP ScrollTrigger pins this element.
          On mobile   → CSS position:sticky keeps it in view. */}
      <div
        ref={pinnedSectionRef}
        className="
          w-full overflow-hidden
          lg:h-screen
          /* mobile sticky */
          sticky top-0
          /* desktop: height set by GSAP pin, just give it 100vh */
        "
        style={{ height: "100vh" }}
      >
        <div
          className="
            max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full
            flex flex-col justify-center
            py-4 sm:py-6 lg:py-8
            gap-3 sm:gap-4 lg:gap-4
          "
        >
          {/* ── Header ────────────────────────────────────────────────────────── */}
          <div className="text-left max-w-3xl flex-shrink-0">
            <div className="inline-flex items-center gap-2 text-purple-700 bg-purple-50 border border-purple-100 px-3 py-1.5 rounded-full font-mono font-bold text-[10px] tracking-widest uppercase mb-2 shadow-sm">
              <Activity size={12} className="text-[#EA4812]" />
              THE CONVERSION ARCHITECTURE
            </div>
            <h2 className="font-display font-black text-lg sm:text-2xl lg:text-3xl text-navy-dark leading-none tracking-tight mb-1 uppercase">
              Building Your Direct{" "}
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#EA4812] via-purple-600 to-indigo-600 italic font-black lowercase">
                bridge to market dominance.
              </span>
            </h2>
            <p className="font-sans text-gray-500 text-xs sm:text-sm leading-relaxed hidden sm:block">
              Our proprietary 4-step framework bridges cold viewer traffic into
              loyal, lifetime enterprise consumers.
            </p>
          </div>

          {/* ── Bridge SVG ────────────────────────────────────────────────────── */}
          <div className="w-full bg-white border border-purple-100/60 rounded-xl p-2 sm:p-3 flex-shrink-0 shadow-sm">
            <svg
              viewBox="0 0 1200 220"
              className="w-full h-auto"
              fill="none"
            >
              <defs>
                <linearGradient
                  id="bridgeGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#EA4812" />
                  <stop offset="33%" stopColor="#8B5CF6" />
                  <stop offset="66%" stopColor="#6366F1" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>
              <rect x="80" y="140" width="1040" height="8" fill="#1E1B29" rx="2" />
              {/* Towers */}
              <rect x="140" y="70" width="12" height="70" fill="#EA4812" opacity={activeStepIdx >= 0 ? 1 : 0.3} />
              <rect x="135" y="64" width="22" height="8" fill="#EA4812" opacity={activeStepIdx >= 0 ? 1 : 0.3} />
              <circle cx="146" cy="140" r="8" fill={activeStepIdx === 0 ? "#EA4812" : "#CBD5E1"} />

              <rect x="420" y="45" width="12" height="95" fill="#8B5CF6" opacity={activeStepIdx >= 1 ? 1 : 0.3} />
              <rect x="415" y="39" width="22" height="8" fill="#8B5CF6" opacity={activeStepIdx >= 1 ? 1 : 0.3} />
              <circle cx="426" cy="140" r="8" fill={activeStepIdx === 1 ? "#8B5CF6" : "#CBD5E1"} />

              <rect x="700" y="45" width="12" height="95" fill="#6366F1" opacity={activeStepIdx >= 2 ? 1 : 0.3} />
              <rect x="695" y="39" width="22" height="8" fill="#6366F1" opacity={activeStepIdx >= 2 ? 1 : 0.3} />
              <circle cx="706" cy="140" r="8" fill={activeStepIdx === 2 ? "#6366F1" : "#CBD5E1"} />

              <rect x="980" y="70" width="12" height="70" fill="#10B981" opacity={activeStepIdx >= 3 ? 1 : 0.3} />
              <rect x="975" y="64" width="22" height="8" fill="#10B981" opacity={activeStepIdx >= 3 ? 1 : 0.3} />
              <circle cx="986" cy="140" r="8" fill={activeStepIdx === 3 ? "#10B981" : "#CBD5E1"} />

              {/* Cables */}
              <g stroke="url(#bridgeGrad)" strokeWidth="2" opacity="0.6">
                <path d="M 146 75 Q 286 110 426 47" fill="none" />
                <path d="M 426 47 Q 566 110 706 47" fill="none" />
                <path d="M 706 47 Q 846 110 986 75" fill="none" />
              </g>
              <g stroke="#94A3B8" strokeWidth="1" opacity="0.4">
                {[200, 250, 300, 350, 400].map((x, i) => (
                  <line key={`c1-${i}`} x1={x} y1="108" x2={x} y2="140" />
                ))}
                {[480, 530, 580, 630, 680].map((x, i) => (
                  <line key={`c2-${i}`} x1={x} y1="80" x2={x} y2="140" />
                ))}
                {[760, 810, 860, 910, 960].map((x, i) => (
                  <line key={`c3-${i}`} x1={x} y1="80" x2={x} y2="140" />
                ))}
              </g>
              {/* Animated traffic dots */}
              <circle cx="200" cy="144" r="4" fill="#EA4812" opacity={activeStepIdx >= 0 ? 1 : 0}>
                <animate attributeName="cx" values="150;250;150" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="500" cy="144" r="4" fill="#8B5CF6" opacity={activeStepIdx >= 1 ? 1 : 0}>
                <animate attributeName="cx" values="430;600;430" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="800" cy="144" r="4" fill="#6366F1" opacity={activeStepIdx >= 2 ? 1 : 0}>
                <animate attributeName="cx" values="710;900;710" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="1050" cy="144" r="4" fill="#10B981" opacity={activeStepIdx >= 3 ? 1 : 0}>
                <animate attributeName="cx" values="990;1100;990" dur="3s" repeatCount="indefinite" />
              </circle>
              {/* Phase labels */}
              <g fontFamily="monospace" fontSize="11" fontWeight="bold">
                <text x="146" y="165" fill={activeStepIdx === 0 ? "#EA4812" : "#94A3B8"} textAnchor="middle">DISCOVERY</text>
                <text x="426" y="165" fill={activeStepIdx === 1 ? "#8B5CF6" : "#94A3B8"} textAnchor="middle">PLANNING</text>
                <text x="706" y="165" fill={activeStepIdx === 2 ? "#6366F1" : "#94A3B8"} textAnchor="middle">EXECUTION</text>
                <text x="986" y="165" fill={activeStepIdx === 3 ? "#10B981" : "#94A3B8"} textAnchor="middle">GROWTH</text>
              </g>
              {/* Progress line */}
              <line
                x1="146"
                y1="185"
                x2={146 + activeStepIdx * 280}
                y2="185"
                stroke="url(#bridgeGrad)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle
                cx={146 + activeStepIdx * 280}
                cy="185"
                r="6"
                fill={step.accentColor}
              />
            </svg>
          </div>

          {/* ── Phase card + analytics row ─────────────────────────────────────── */}
          <div className="flex flex-col sm:flex-row gap-3 flex-1 min-h-0">

            {/* Current phase card — gets all remaining vertical space */}
            <div className="flex-1 min-w-0 bg-white border border-purple-600/40 ring-2 ring-purple-600/10 rounded-xl p-4 sm:p-5 flex flex-col justify-between shadow-lg transition-all duration-300 overflow-hidden">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold tracking-widest text-[#EA4812]">
                    {step.num}
                  </span>
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center border bg-gradient-to-tr ${step.color} text-white border-transparent shadow-md`}>
                    {step.icon}
                  </div>
                </div>
                <div>
                  <span className="block font-mono text-[9px] font-black text-[#EA4812] tracking-widest uppercase mb-1">
                    {step.badge}
                  </span>
                  <h3 className="font-display font-black text-base sm:text-lg uppercase tracking-wide text-[#0D0B14] leading-tight">
                    {step.title}
                  </h3>
                  <span className="block font-sans text-[10px] font-bold text-purple-500 tracking-wider uppercase mt-1">
                    {step.tagline}
                  </span>
                </div>
                <p className="font-sans text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Phase nav dots */}
              <div className="pt-3 mt-auto border-t border-purple-50 flex items-center justify-between">
                <div className="flex gap-1.5">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => scrollToStep(i)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        i === activeStepIdx
                          ? "bg-[#EA4812] scale-125"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to phase ${i + 1}`}
                    />
                  ))}
                </div>
                <div className="w-2 h-2 rounded-full bg-[#EA4812] animate-ping" />
              </div>
            </div>

            {/* Analytics pane — compact one-liner strip */}
            <div className="flex-1 min-w-0 bg-zinc-950 rounded-xl border border-zinc-800 p-3 sm:p-5 font-mono flex flex-col justify-between shadow-2xl transition-all duration-300 overflow-hidden">
              
              {/* One-liner status bar */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
                  <span className="text-[9px] text-gray-300 font-bold tracking-wider flex-shrink-0">
                    CONVERSION ANALYTICS ACTIVE
                  </span>
                  <span className="text-[9px] text-zinc-600 mx-1 flex-shrink-0">·</span>
                  <span className="text-[9px] text-[#A78BFA] truncate">{step.stats.readout}</span>
                </div>
                <ShieldCheck size={13} className="text-green-500 flex-shrink-0" />
              </div>

              {/* Checkpoint ghost text — hidden on mobile to save vertical space */}
              <div className="hidden sm:flex flex-1 items-center justify-center py-3 px-2">
                <p className="text-[10px] text-zinc-300 italic text-center leading-relaxed transition-all duration-300">
                  {step.stats.checkpoint}
                </p>
              </div>

              {/* Anticipated outcome */}
              <div className="bg-zinc-900/60 p-2 sm:p-3 rounded-lg border border-zinc-800/40 mt-3 sm:mt-0">
                <div className="text-[9px] text-zinc-500 uppercase tracking-wider mb-1">
                  ANTICIPATED OUTCOME
                </div>
                <div className="text-sm text-amber-400 font-black uppercase transition-all duration-300">
                  {step.stats.metric}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};