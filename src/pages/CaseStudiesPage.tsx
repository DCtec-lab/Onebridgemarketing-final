import { FC } from "react";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

interface CaseStudy {
  id: string;
  num: string;
  category: string;
  tags: string[];
  headline: string;
  client: string;
  heroStat: string;
  heroLabel: string;
  theme: "jewel" | "cafe" | "skin";
  problem: string;
  strategy: string[];
  execution: string[];
  results: { value: string; label: string; accent?: boolean }[];
  takeaway: string;
  svgPath: React.ReactNode;
}

const cases: CaseStudy[] = [
  {
    id: "case-01",
    num: "01",
    category: "Luxury D2C",
    tags: ["Luxury D2C", "Influencer Marketing", "90 days"],
    headline: "Launching a Luxury Jewellery Brand on Instagram",
    client: "Luxury Jewellery · D2C",
    heroStat: "4,200",
    heroLabel: "Followers from zero",
    theme: "jewel",
    problem: "A new luxury jewellery label with zero digital presence — strong product and aesthetic, but no strategy, content, or audience. Target: urban women 22–35, ₹3K–15K spend online.",
    strategy: [
      "Full Instagram launch: identity, tone, content pillars, influencer seeding",
      "8 micro-creators (30K–150K) across Mumbai, Delhi, Bangalore — gifting only",
      "4 reels + 8 posts/month + daily stories",
    ],
    execution: [
      "Branding kit: logo, palette, bio, highlight covers",
      "Captions, hashtags, influencer briefs — 14 posts/reels from 8 creators",
      "Full DM, story, and comment management",
    ],
    results: [
      { value: "4,200", label: "Followers from zero" },
      { value: "42K", label: "Peak reel reach" },
      { value: "6.2L", label: "Earned impressions" },
      { value: "130+", label: "DM inquiries" },
      { value: "38", label: "Orders converted", accent: true },
    ],
    takeaway: "For a luxury brand with no ad budget, influencer seeding + strong visual identity outperformed paid ads at launch. Trust before conversion.",
    svgPath: (
      <path d="M36 72 L52 48 L68 58 L84 36" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    id: "case-02",
    num: "02",
    category: "F&B",
    tags: ["F&B", "Community", "60 days"],
    headline: "Building a Brand Community for a Homegrown Café",
    client: "Specialty Café · F&B",
    heroStat: "~40%",
    heroLabel: "Footfall increase",
    theme: "cafe",
    problem: "380 followers, inconsistent posting, near-zero engagement — despite a loyal walk-in crowd. Needed a younger audience and online community that drove real footfall.",
    strategy: [
      "Community-first — the café as a character, not a business",
      "Ambience reels, regulars spotlight, menu stories, local artist collabs",
      "12 posts/month + 3 story polls/week · two ₹500 boosted posts",
    ],
    execution: [
      "Brand voice guide: warm, unhurried, slightly literary",
      "Seasonal content calendars · earthy graphic design",
      "Open Mic + Coffee event — 67 registrations via Instagram alone",
    ],
    results: [
      { value: "~40%", label: "Footfall increase" },
      { value: "2,100", label: "Followers (from 380)" },
      { value: "34%", label: "Story engagement" },
      { value: "67", label: "Event sign-ups", accent: true },
      { value: "9K", label: "Avg post reach" },
    ],
    takeaway: "Local businesses don't need viral content — consistent, personality-driven posts that make people feel something beat ad spend every time.",
    svgPath: (
      <>
        <rect x="20" y="50" width="24" height="50" rx="6" fill="currentColor" fillOpacity=".35" />
        <rect x="48" y="35" width="24" height="65" rx="6" fill="currentColor" fillOpacity=".55" />
        <rect x="76" y="22" width="24" height="78" rx="6" fill="currentColor" />
      </>
    ),
  },
  {
    id: "case-03",
    num: "03",
    category: "D2C Skincare",
    tags: ["D2C Skincare", "Meta Ads", "75 days"],
    headline: "Scaling Through Performance Marketing",
    client: "D2C Skincare",
    heroStat: "3.8×",
    heroLabel: "Return on ad spend",
    theme: "skin",
    problem: "6 hero SKUs on Shopify, decent quality, organic traction — but stuck at ₹60K–80K/month revenue. Sporadic Instagram content wasn't converting.",
    strategy: [
      "Organic track: Education-first content — ingredients, skin guides, founder videos",
      "Paid track: Meta ads, women 18–34, Tier 1 · ₹15K/month · A/B tested creatives",
      "Retargeting for non-purchasing site visitors",
    ],
    execution: [
      "4 ad creatives/month · Shopify page optimisation",
      "Weekly CPM, CTR, ROAS, CPA reporting",
      "Top creative: founder UGC reel — 4.2% CTR",
    ],
    results: [
      { value: "3.8×", label: "Return on ad spend" },
      { value: "₹1.35L", label: "Monthly revenue (end)" },
      { value: "₹1.14L", label: "Ad revenue (2 mo)" },
      { value: "+1,800", label: "Organic followers" },
      { value: "₹30K", label: "Total ad spend", accent: true },
    ],
    takeaway: "Performance marketing works when organic content builds credibility first. Ads drove clicks; trust on Instagram and product pages drove purchases.",
    svgPath: (
      <path d="M60 20 A40 40 0 1 1 40 88" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    ),
  },
];

const themeMap = {
  jewel: {
    accent: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-200/60",
    heroBg: "from-purple-950 to-[#0D0B14]",
    dot: "bg-purple-500",
    tag: "bg-purple-100 text-purple-700",
  },
  cafe: {
    accent: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-200/60",
    heroBg: "from-amber-950 to-[#0D0B14]",
    dot: "bg-amber-500",
    tag: "bg-amber-100 text-amber-700",
  },
  skin: {
    accent: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200/60",
    heroBg: "from-emerald-950 to-[#0D0B14]",
    dot: "bg-emerald-500",
    tag: "bg-emerald-100 text-emerald-700",
  },
};

export const CaseStudiesPage: FC = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FA]">

      {/* Hero */}
      <section className="bg-[#0D0B14] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block font-mono text-xs font-bold tracking-widest uppercase text-orange-brand mb-4">Case Study Portfolio · 2024–25</span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white leading-[1.1] tracking-tight mb-4">
            Where Strategy<br />
            <em className="text-transparent bg-clip-text bg-gradient-to-r from-[#EA4812] to-purple-500 not-italic">Meets Results.</em>
          </h1>
          <p className="font-sans text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mb-12">
            Three real-world scenarios — luxury D2C, community brand building, and performance marketing.
          </p>

          {/* Index cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {cases.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-orange-brand/40 rounded-xl p-5 flex items-center gap-4 transition-all duration-300 group"
              >
                <span className="font-mono text-2xl font-bold text-orange-brand/60 group-hover:text-orange-brand transition-colors">{c.num}</span>
                <div className="flex-1 min-w-0">
                  <div className="font-display font-semibold text-sm text-white truncate">{c.client}</div>
                  <div className="font-sans text-xs text-gray-500 mt-0.5">{c.tags[0]} · {c.tags[1]}</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="font-display font-bold text-sm text-orange-brand">{c.heroStat}</div>
                  <div className="font-sans text-xs text-gray-500">{c.heroLabel}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      {cases.map((c, idx) => {
        const t = themeMap[c.theme];
        const isEven = idx % 2 === 0;
        return (
          <section
            key={c.id}
            id={c.id}
            className={`py-20 border-b border-gray-200/60 ${isEven ? "bg-[#FAF8FC]" : "bg-white"}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Case header */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="font-mono text-xs font-bold text-orange-brand/60">Case {c.num}</span>
                {c.tags.map((tag) => (
                  <span key={tag} className={`font-sans text-xs font-medium px-2.5 py-1 rounded-full ${t.tag}`}>{tag}</span>
                ))}
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0D0B14] tracking-tight leading-tight mb-1">{c.headline}</h2>
              <p className="font-sans text-sm text-gray-500 mb-10">{c.client}</p>

              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${!isEven ? "lg:[direction:rtl]" : ""}`}>
                {/* Timeline */}
                <div className={!isEven ? "lg:[direction:ltr]" : ""}>
                  <div className="space-y-6">
                    {[
                      { label: "The Problem", content: c.problem, isList: false },
                      { label: "The Strategy", content: c.strategy, isList: true },
                      { label: "The Execution", content: c.execution, isList: true },
                    ].map(({ label, content, isList }) => (
                      <div key={label} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className={`w-3 h-3 rounded-full ${t.dot} mt-1 flex-shrink-0`} />
                          <div className="w-0.5 bg-gray-200 flex-1 mt-2" />
                        </div>
                        <div className="pb-4 flex-1">
                          <div className={`font-mono text-xs font-bold tracking-widest uppercase ${t.accent} mb-2`}>{label}</div>
                          {isList ? (
                            <ul className="space-y-1.5">
                              {(content as string[]).map((item) => (
                                <li key={item} className="font-sans text-sm text-gray-600 leading-relaxed flex gap-2">
                                  <span className="text-orange-brand mt-1 flex-shrink-0">·</span>
                                  <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="font-sans text-sm text-gray-600 leading-relaxed">{content as string}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Results bento */}
                <div className={!isEven ? "lg:[direction:ltr]" : ""}>
                  <div className={`bg-gradient-to-br ${t.heroBg} rounded-2xl p-6 border border-white/5`}>
                    {/* Hero metric */}
                    <div className="mb-5">
                      <div className="font-display font-extrabold text-5xl text-white mb-1">{c.heroStat}</div>
                      <div className="font-sans text-gray-400 text-sm">{c.heroLabel}</div>
                    </div>
                    {/* Sub-metrics */}
                    <div className="grid grid-cols-2 gap-3">
                      {c.results.slice(1).map(({ value, label, accent }) => (
                        <div
                          key={label}
                          className={`rounded-xl p-4 ${accent ? "bg-orange-brand/20 border border-orange-brand/30" : "bg-white/10 border border-white/10"}`}
                        >
                          <div className={`font-display font-bold text-xl mb-0.5 ${accent ? "text-orange-brand" : "text-white"}`}>{value}</div>
                          <div className="font-sans text-xs text-gray-400">{label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Takeaway */}
                  <div className="mt-4 bg-white rounded-xl border border-gray-200/80 p-5">
                    <div className="flex gap-3">
                      <TrendingUp size={18} className="text-orange-brand flex-shrink-0 mt-0.5" />
                      <p className="font-sans text-sm text-gray-600 leading-relaxed">
                        <strong className="text-[#0D0B14]">Key takeaway:</strong> {c.takeaway}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="bg-[#0D0B14] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white leading-tight tracking-tight mb-4">
            Ready for Results<br />
            <em className="text-orange-brand not-italic">Like These?</em>
          </h2>
          <p className="font-sans text-gray-400 text-base sm:text-lg leading-relaxed max-w-lg mx-auto mb-8">
            Start with a free audit — we'll review your presence and show you what's possible.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-orange-brand hover:bg-orange-hover text-white font-sans font-bold text-sm tracking-wider uppercase px-6 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            Start With a Free Audit <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};
