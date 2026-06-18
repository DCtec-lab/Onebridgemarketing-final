import { FC, useState } from "react";
import { CaseStudyData } from "../types";
import { Star, Sparkles, CheckCircle, X, ArrowRight, ShieldCheck } from "lucide-react";

export const CaseStudies: FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  
  // Custom states for interactive calculator sliders modeled on the PDFs
  const [encoreCampaignSpend, setEncoreCampaignSpend] = useState<number>(50000); // INR for drop spend
  const [shaygaSareeSpend, setShaygaSareeSpend] = useState<number>(30000); // INR for photoshoot & ad campaign
  const [flamingoFintechSpend, setFlamingoFintechSpend] = useState<number>(60000); // INR for user acquisition

  const studiesData: CaseStudyData[] = [
    {
      id: "encore",
      category: "D2C MUSIC MERCH",
      title: "Encore",
      metric: "8.2x",
      metricLabel: "PROJECTED ROI ON EVENT DROPS",
      quote: '"With Instagram watermarks resolved and event-targeted drops, Encore is primed to touch an 8.2x Campaign ROI."',
      iconName: "music",
      color: "orange",
      expandedDetails: {
        overview: "Encore has a spectacular founder origin story (two friends at a Linkin Park concert realizing Indian fans deserved high-taste merch) and curated artist rosters, but the story is buried and Instagram has conversion leakage. Our brand audit details how uniting cross-channel handles and timing limited drops around major concerts in India will turn traffic into a loyal community.",
        beforeValue: "1.2x ROI",
        afterValue: "8.2x ROI",
        growthPercentage: "+583%",
        timeline: "45 Days",
        kpis: [
          { label: "Projected 'Artist Requests' Leads", value: "14,500+", change: "+400%", trend: "up" },
          { label: "Estimated Campaign Conversion", value: "9.4%", change: "+310%", trend: "up" },
          { label: "Community Growth Vector", value: "18k Fans", change: "+4500%", trend: "up" }
        ],
        channels: [
          { name: "Live Concert Push Ads", percentage: 50, color: "#EA4812" },
          { name: "Nostalgic Short-Form Video", percentage: 30, color: "#00E3FD" },
          { name: "SEO & Search Discovery", percentage: 20, color: "#A855F7" }
        ],
        timelineData: [
          { month: "Day 1", value: 120 },
          { month: "Month 1", value: 4500 },
          { month: "Month 2", value: 18200 }
        ],
        strategySteps: [
          "Elevate the authentic Linkin Park Mumbai origin story above-the-fold with cinematic design.",
          "Resolve the confusing @encore_india watermark inconsistency across Instagram and YouTube.",
          "Leverage peak emotional demand by scheduling exclusive drops exactly when major artists announce Indian tour legs.",
          "Inject social proof ('as worn by') on product layouts to bridge the trust gap before first orders ship."
        ],
        roiMultiplier: 8.2
      }
    },
    {
      id: "shayga",
      category: "ETHNIC MODERN WEAR",
      title: "Shayga",
      metric: "350+",
      metricLabel: "POTENTIAL DM ORDERS",
      quote: '"Drape with stories, not just threads. By establishing highlights and a conversion bridge, Shayga can scale to 350+ orders/month."',
      iconName: "saree",
      color: "cyan",
      expandedDetails: {
        overview: "Shayga has brilliant organic Reel traction but lacks essential conversion infrastructure (no bio links, no highlights, no direct calls-to-action). Our audit presents a clean roadmap to unify lightings under an intentional grid template and establish a frictionless direct message checkout pipeline on WhatsApp.",
        beforeValue: "12 Orders/mo",
        afterValue: "350+ Orders/mo",
        growthPercentage: "+2,816%",
        timeline: "30 Days",
        kpis: [
          { label: "Projected WhatsApp Leads/mo", value: "1,450 Checkouts", change: "+1100%", trend: "up" },
          { label: "Organic Content Save Ratio", value: "8.4%", change: "+380%", trend: "up" },
          { label: "Conversion Lift of Reels", value: "6.2%", change: "+950%", trend: "up" }
        ],
        channels: [
          { name: "UGC & Model Styling Reels", percentage: 60, color: "#00E3FD" },
          { name: "Conversational WhatsApp Funnel", percentage: 25, color: "#EA4812" },
          { name: "Editorial Layout & Shoot Templates", percentage: 15, color: "#A855F7" }
        ],
        timelineData: [
          { month: "Month 1", value: 12 },
          { month: "Month 2", value: 140 },
          { month: "Month 3", value: 350 }
        ],
        strategySteps: [
          "Setup immediate story highlights ('Shop Now', 'Fabrics', 'New In') with direct conversion prompts.",
          "Unify visual aesthetics using a consistent studio backdrop, standard framing angles, and soft studio lighting.",
          "Launch high-value carousel formats offering style recommendations and educational fabric guides.",
          "Add explicit 'DM to Order' or 'Link in Bio' call-to-actions (CTAs) at the tail of every single caption."
        ],
        roiMultiplier: 5.4
      }
    },
    {
      id: "flamingo",
      category: "GEN-Z FINTECH",
      title: "Flamingo Money",
      metric: "92/100",
      metricLabel: "TARGET MOBILE SPEED PROFILE",
      quote: '"By elevating mobile speeds to 90+, fixing multiple typos, and pushing trust badges above fold, Flamingo can unlock massive Gen-Z savings adoption."',
      iconName: "fintech",
      color: "orange",
      expandedDetails: {
        overview: "Flamingo Money targets couples with a clever gamified gold savings niche, but suffers from a slow 60/100 mobile performance and grammatical errors ('Sharing valut', '1 streak'). We formulated a technical optimization guide illustrating how patching speed blockages and displaying trust stamps will elevate Gen-Z installations.",
        beforeValue: "60/100 Speed",
        afterValue: "92/100 Speed",
        growthPercentage: "+53%",
        timeline: "25 Days",
        kpis: [
          { label: "Augmont Trust Badge Click Lift", value: "3.8x", change: "+280%", trend: "up" },
          { label: "Mobile Bounce Rate Reductions", value: "18.4%", change: "-65%", trend: "up" },
          { label: "Projected Waitlist Inundation", value: "8,400 Signups", change: "+450%", trend: "up" }
        ],
        channels: [
          { name: "Payload Optimization of Assets", percentage: 45, color: "#EA4812" },
          { name: "Trust Signals and Copy Cleansing", percentage: 35, color: "#00E3FD" },
          { name: "App Store Pre-launch Growth", percentage: 20, color: "#A855F7" }
        ],
        timelineData: [
          { month: "Week 1", value: 60 },
          { month: "Week 3", value: 78 },
          { month: "Week 6", value: 92 }
        ],
        strategySteps: [
          "Reduce heavy scripts and optimize visual payloads to score 90+ on slow mobile networks.",
          "Clean up spelling errors ('valut' to 'vault' / '1 streak') that compromise financial brand authority.",
          "Reposition the Augmont partner integration badge high up in client hero sections as an instant credibility visual.",
          "Introduce a clear waitlist path with robust social proof callouts (e.g., 'Join 10,000+ Gen-Z Savers')."
        ],
        roiMultiplier: 3.2
      }
    }
  ];

  const handleOpenAudit = (id: string) => {
    setExpandedId(id);
    document.body.style.overflow = "hidden"; // pin body scroll
  };

  const handleCloseAudit = () => {
    setExpandedId(null);
    document.body.style.overflow = "unset"; // restore body scroll
  };

  const activeStudy = studiesData.find(s => s.id === expandedId);

  return (
    <section id="results" className="bg-[#09070F] text-[#FFFFFF] py-24 sm:py-32 relative overflow-hidden">
      {/* Background elegant radial glow representing elite purple/warm brand accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(139,92,246,0.1),rgba(9,7,15,0))]" />
      
      <div className="absolute top-[20%] right-[10%] w-80 h-80 rounded-full bg-purple-600/10 filter blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDuration: "8s" }}></div>
      <div className="absolute bottom-[20%] left-[5%] w-96 h-96 rounded-full bg-[#EA4812]/10 filter blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDuration: "6s" }}></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div id="results-headline-wrap" className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 text-purple-400 px-4 py-2 rounded-full text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Star size={13} fill="#A78BFA" className="animate-pulse" />
            PROACTIVE BRAND AUDITS
          </div>
          <h2 className="font-display font-black text-3.5xl sm:text-5xl text-white leading-tight tracking-tight mb-5">
            Diagnosed Growth Blueprints.
          </h2>
          <p className="font-sans text-gray-400 text-base sm:text-lg leading-relaxed">
            We performed diagnostics on 3 high-potential Indian brands, identifying exact leaks and growth targets. Click any scorecard below to open its dedicated full analysis blueprint.
          </p>
        </div>

        {/* Shortened Dashboard Teaser Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {studiesData.map((study, idx) => {
            const isOrange = study.color === "orange";
            return (
              <div
                key={study.id}
                onClick={() => handleOpenAudit(study.id)}
                className="group cursor-pointer bg-zinc-950/90 border border-zinc-800/80 hover:border-purple-600/60 p-8 rounded-2xl transition-all duration-300 relative flex flex-col justify-between hover:shadow-2xl hover:shadow-purple-900/10 hover:-translate-y-1.5"
              >
                {/* Glow ring backing */}
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-tr from-purple-600 to-[#EA4812] opacity-0 group-hover:opacity-10 blur transition duration-500"></div>

                <div className="space-y-6 relative z-10">
                  {/* Big teaser index number with Montserrat style */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-4xl font-extrabold text-zinc-800 group-hover:text-purple-900/40 transition-colors">
                      0{idx + 1}
                    </span>
                    <span className="font-mono text-[9px] font-bold text-gray-500 bg-zinc-900 border border-zinc-800/60 px-2.5 py-1 rounded">
                      {study.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white group-hover:text-purple-400 transition-colors duration-200">
                      {study.title}
                    </h3>
                    <p className="font-sans text-xs text-gray-400 italic leading-relaxed mt-2 line-clamp-3">
                      {study.quote}
                    </p>
                  </div>
                </div>

                {/* Score Teaser Indicator inside Card block */}
                <div className="pt-6 mt-6 border-t border-zinc-900 flex flex-col gap-3 relative z-10">
                  <div>
                    <div className={`font-display font-black text-3.5xl leading-none ${isOrange ? "text-[#EA4812]" : "text-[#00E3FD]"}`}>
                      {study.metric}
                    </div>
                    <span className="font-mono text-[9px] font-bold tracking-widest text-[#8892B0] uppercase block mt-1">
                      {study.metricLabel.split(" ")[0]} {study.metricLabel.split(" ")[1] || ""}
                    </span>
                  </div>
                  
                  <span className="font-mono text-2xs text-[#EA4812] font-semibold tracking-wider flex items-center gap-1.5 mt-2 group-hover:translate-x-1 transition-transform">
                    INSPECT BLUEPRINT & CALCULATOR
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Immersive Fullscreen Sub-Page Overlay Modal View */}
        {expandedId && activeStudy && (
          <div className="fixed inset-0 z-[9999] bg-[#09070F]/98 overflow-y-auto backdrop-blur-lg transition-all duration-300 flex items-start justify-center p-2 sm:p-4 md:p-8 animate-fadeIn">
            <div className="bg-zinc-950 border border-zinc-900 rounded-xl sm:rounded-2xl w-full max-w-5xl shadow-2xl overflow-hidden relative my-2 sm:my-8 min-h-0">
              
              {/* Header inside overlay page */}
              <div className="sticky top-0 bg-[#0A0710]/95 backdrop-blur border-b border-zinc-900 p-6 flex justify-between items-center z-20">
                <div className="flex items-center gap-3">
                  <span className={`w-2.5 h-2.5 rounded-full ${activeStudy.color === "orange" ? "bg-[#EA4812]" : "bg-purple-500"}`}></span>
                  <div>
                    <span className="font-mono text-[10px] font-bold text-gray-400 tracking-widest uppercase">
                      BRAND DIAGNOSTIC REPORT ({activeStudy.category})
                    </span>
                    <h3 className="font-display font-bold text-lg text-white">
                      {activeStudy.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={handleCloseAudit}
                  className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 text-gray-400 hover:text-white flex items-center justify-center transition-all focus:outline-none"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Sub-page content */}
              <div className="p-6 md:p-10 space-y-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                  
                  {/* Expanded Left: Strategic Overview & Accomplishments */}
                  <div className="lg:col-span-7 space-y-8">
                    <div>
                      <h4 className={`font-mono text-[11px] font-bold tracking-widest uppercase mb-2 ${activeStudy.color === "orange" ? "text-[#EA4812]" : "text-purple-400"}`}>
                        PROJECT OVERVIEW
                      </h4>
                      <p className="font-sans text-gray-300 text-[15px] sm:text-base leading-relaxed">
                        {activeStudy.expandedDetails.overview}
                      </p>
                    </div>

                    {/* Staggered Growth Indicators */}
                    <div className="grid grid-cols-3 gap-4 border-y border-zinc-900 py-6">
                      <div>
                        <div className="text-2xs text-gray-500 font-mono tracking-wider">BEFORE INITIAL</div>
                        <div className="text-lg sm:text-xl font-bold font-display text-gray-400 mt-1 line-through">{activeStudy.expandedDetails.beforeValue}</div>
                      </div>
                      <div>
                        <div className="text-2xs text-gray-500 font-mono tracking-wider">AFTER SCALE</div>
                        <div className="text-lg sm:text-xl font-bold font-display text-white mt-1">{activeStudy.expandedDetails.afterValue}</div>
                      </div>
                      <div>
                        <div className="text-2xs text-gray-500 font-mono tracking-wider">TOTAL SHIFT</div>
                        <div className={`text-lg sm:text-xl font-black font-display mt-1 ${activeStudy.color === "orange" ? "text-[#EA4812]" : "text-purple-400"}`}>
                          {activeStudy.expandedDetails.growthPercentage}
                        </div>
                      </div>
                    </div>

                    {/* Channel Allocation Grid & Legend */}
                    <div className="space-y-4">
                      <h4 className="font-mono text-[11px] font-bold tracking-widest text-[#8892B0] uppercase">
                        TRAFFIC & ACQUISITION SHARE
                      </h4>
                      <div className="h-4 bg-zinc-900 rounded-full overflow-hidden flex">
                        {activeStudy.expandedDetails.channels.map((chan, idx) => (
                          <div
                            key={idx}
                            className="h-full first:rounded-l-full last:rounded-r-full"
                            style={{
                              width: `${chan.percentage}%`,
                              backgroundColor: chan.color,
                            }}
                            title={`${chan.name}: ${chan.percentage}%`}
                          />
                        ))}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {activeStudy.expandedDetails.channels.map((chan, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded" style={{ backgroundColor: chan.color }}></span>
                            <span className="text-2xs text-gray-300 font-sans font-medium">
                              {chan.name} <span className="text-gray-500 font-bold">({chan.percentage}%)</span>
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Executed Strategy Steps */}
                    <div className="space-y-4">
                      <h4 className="font-mono text-[11px] font-bold tracking-widest text-white uppercase flex items-center gap-2">
                        <CheckCircle size={14} className={activeStudy.color === "orange" ? "text-[#EA4812]" : "text-purple-400"} />
                        OUR BRIDGING ACTION STEPS
                      </h4>
                      <ul className="space-y-3">
                        {activeStudy.expandedDetails.strategySteps.map((step, idx) => (
                          <li key={idx} className="flex gap-3 text-sm text-gray-400 font-sans">
                            <span className={`font-mono font-bold ${activeStudy.color === "orange" ? "text-[#EA4812]" : "text-purple-400"}`}>
                              [0{idx + 1}]
                            </span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Expanded Right: Custom Interactive Growth Plotter & Live Return Calculator Forms */}
                  <div className="lg:col-span-5 space-y-8 bg-zinc-900/30 border border-zinc-900 p-6 rounded-xl">
                    
                    {/* Interactive Sparkles header */}
                    <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
                      <div className="flex items-center gap-2">
                        <Sparkles size={16} className={activeStudy.color === "orange" ? "text-[#EA4812]" : "text-purple-400"} />
                        <h4 className="font-display font-bold text-xs tracking-wide text-white uppercase">
                          LIVE PERFORMANCE GRAPH
                        </h4>
                      </div>
                      <span className="font-mono text-[8px] bg-zinc-900 text-gray-400 px-2 py-0.5 rounded leading-none">
                        UPDATED LIVE
                      </span>
                    </div>

                    {/* Interactive SVG Trend Curve */}
                    <div className="relative h-40 border-b border-l border-zinc-900 pb-1 mt-2">
                      {/* Label columns */}
                      <div className="absolute left-2 top-2 text-[9px] font-mono text-zinc-650">SCALE CAP</div>
                      <div className="absolute left-2 bottom-2 text-[9px] font-mono text-zinc-650">START POINT</div>

                      {/* SVG path lines plotting actual scaling */}
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path
                          d="M 5 90 C 35 75, 65 40, 95 10"
                          fill="none"
                          stroke={activeStudy.color === "orange" ? "#EA4812" : "#8B5CF6"}
                          strokeWidth="3.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M 5 90 C 35 75, 65 40, 95 10 L 95 90 Z"
                          fill={activeStudy.color === "orange" ? "rgba(234,72,18,0.04)" : "rgba(139,92,246,0.04)"}
                        />
                        <circle cx="5" cy="90" r="3" fill="#64748B" />
                        <circle cx="35" cy="78" r="3" fill="#64748B" />
                        <circle cx="65" cy="46" r="3" fill="#64748B" />
                        <circle cx="95" cy="10" r="4.5" fill={activeStudy.color === "orange" ? "#EA4812" : "#8B5CF6"} />
                      </svg>

                      {/* Horizon dates */}
                      <div className="flex justify-between text-[8px] font-mono text-gray-500 mt-2">
                        <span>INITIAL</span>
                        <span>WEEK 2</span>
                        <span>WEEK 4</span>
                        <span>PEAK</span>
                      </div>
                    </div>

                    {/* Live Conversion ROI Input Form Slider */}
                    <div className="space-y-4 pt-2">
                      <div className="flex items-center justify-between">
                        <label className="text-[10px] text-gray-400 font-mono tracking-wider uppercase">
                          {activeStudy.id === "encore" && "ESTIMATED CAMPAIGN SPEND (INR)"}
                          {activeStudy.id === "shayga" && "ESTIMATED DIRECT RESPONSE & AUDIO SPEND (INR)"}
                          {activeStudy.id === "flamingo" && "ESTIMATED ONBOARDING CONVERSION SPEND (INR)"}
                        </label>
                        <span className={`font-mono text-xs font-black ${activeStudy.color === "orange" ? "text-[#EA4812]" : "text-purple-400"}`}>
                          {activeStudy.id === "encore" && `₹${encoreCampaignSpend.toLocaleString()}`}
                          {activeStudy.id === "shayga" && `₹${shaygaSareeSpend.toLocaleString()}`}
                          {activeStudy.id === "flamingo" && `₹${flamingoFintechSpend.toLocaleString()}`}
                        </span>
                      </div>

                      {/* Real slider input control */}
                      <input
                        type="range"
                        min={activeStudy.id === "encore" ? 10000 : (activeStudy.id === "shayga" ? 5000 : 15000)}
                        max={activeStudy.id === "encore" ? 200000 : (activeStudy.id === "shayga" ? 150000 : 300000)}
                        step={5000}
                        value={
                          activeStudy.id === "encore" ? encoreCampaignSpend :
                          activeStudy.id === "shayga" ? shaygaSareeSpend : flamingoFintechSpend
                        }
                        onChange={(e) => {
                          const v = parseInt(e.target.value);
                          if (activeStudy.id === "encore") setEncoreCampaignSpend(v);
                          else if (activeStudy.id === "shayga") setShaygaSareeSpend(v);
                          else if (activeStudy.id === "flamingo") setFlamingoFintechSpend(v);
                        }}
                        className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-zinc-800 accent-orange-brand focus:outline-none"
                        style={{
                          accentColor: activeStudy.color === "orange" ? "#EA4812" : "#8B5CF6"
                        }}
                      />

                      {/* Projected returns calculation results based on actual multiplier coeffs */}
                      <div className={`p-4 rounded border flex flex-col justify-center ${
                        activeStudy.color === "orange" ? "bg-orange-brand/5 border-orange-brand/20" : "bg-purple-900/10 border-purple-500/20"
                      }`}>
                        <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">
                          {activeStudy.id === "encore" && "PROJECTED OPTIMIZED CAMPAIGN REVENUE"}
                          {activeStudy.id === "shayga" && "PROJECTED MONTHLY DIRECT SALES VALUE"}
                          {activeStudy.id === "flamingo" && "PROJECTED USER LTV GROWTH VALUE"}
                        </span>
                        <span className={`font-display font-extrabold text-xl mt-1.5 ${activeStudy.color === "orange" ? "text-[#EA4812]" : "text-purple-400"}`}>
                          {activeStudy.id === "encore" && `₹${Math.round(encoreCampaignSpend * activeStudy.expandedDetails.roiMultiplier).toLocaleString()}/drop`}
                          {activeStudy.id === "shayga" && `₹${Math.round(shaygaSareeSpend * activeStudy.expandedDetails.roiMultiplier).toLocaleString()}/mo`}
                          {activeStudy.id === "flamingo" && `₹${Math.round(flamingoFintechSpend * activeStudy.expandedDetails.roiMultiplier).toLocaleString()}/mo`}
                        </span>
                        <p className="text-[10px] text-gray-400 font-sans mt-2.5">
                          *Calculations are modeled from our proprietary data and recommended {activeStudy.expandedDetails.timeline} brand audit optimization strategies.
                        </p>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
              
              {/* Footer action button inside sub-page */}
              <div className="bg-[#0A0710]/95 border-t border-zinc-900 p-6 flex flex-col sm:flex-row sm:justify-between items-center gap-4">
                <div className="flex items-center gap-2 text-xs text-gray-450 font-mono">
                  <ShieldCheck size={14} className="text-emerald-500" />
                  <span>MANUAL AUDIT ANALYSIS COMPILED BY ONEBRIDGE STRATEGISTS</span>
                </div>
                <button
                  onClick={handleCloseAudit}
                  className="bg-orange-brand hover:bg-orange-brand-hover text-white px-6 py-3 rounded-lg text-sm font-sans font-bold flex items-center gap-2 transition-all"
                >
                  Return to Blueprints Map
                  <ArrowRight size={14} />
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
