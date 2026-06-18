import { FC } from "react";
import { Search, ChartBar as BarChart2, Compass, Rocket, RefreshCcw, Globe, Heart, Users, Activity, Phone, LayoutGrid, Eye, DollarSign, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  { num: "01", icon: Search, label: "Discovery", desc: "We deep-dive into your business, goals, target audience, competition, and current online presence." },
  { num: "02", icon: BarChart2, label: "Analysis", desc: "We audit your digital footprint, identify gaps, missed opportunities, and quick wins available right now." },
  { num: "03", icon: Compass, label: "Strategy", desc: "We build a customised content, branding, and digital strategy tailored to your business and goals." },
  { num: "04", icon: Rocket, label: "Execution", desc: "We take full ownership of delivery — creating content, managing platforms, running campaigns, and maintaining consistency every single day." },
  { num: "05", icon: RefreshCcw, label: "Review & Optimise", desc: "We track performance, review results with you, and continuously improve the strategy over time." },
];

const metrics = [
  { icon: Globe, label: "Reach & Impressions", desc: "How many people see your content and brand across all platforms each month." },
  { icon: Heart, label: "Engagement Rate", desc: "Likes, comments, shares, and saves that show how well your content resonates." },
  { icon: Users, label: "Follower Growth", desc: "Steady organic audience growth — a signal of increasing brand authority." },
  { icon: Activity, label: "Website Traffic", desc: "Monthly visitors, sessions, and page views driven from your digital activity." },
  { icon: Phone, label: "Lead Generation", desc: "Direct inquiries, form fills, and contact requests from your digital presence." },
  { icon: LayoutGrid, label: "Content Performance", desc: "Which formats and topics perform best, informing ongoing strategy." },
  { icon: Eye, label: "Brand Visibility", desc: "Search visibility, profile visits, and share of voice in your niche or market." },
  { icon: DollarSign, label: "Campaign ROI", desc: "Clear reporting on return from every paid campaign and promotion." },
];

const quarters = [
  { q: "Q1", name: "Foundation", desc: "Brand identity, profile optimisation, content strategy established. First content pieces go live. Audience discovery begins." },
  { q: "Q2", name: "Momentum", desc: "Content consistency builds. Engagement increases. Organic reach expands. First inbound inquiries arrive." },
  { q: "Q3", name: "Acceleration", desc: "Audience trust is established. Campaigns begin converting. Lead flow increases. Brand becomes recognisable." },
  { q: "Q4", name: "Compounding", desc: "Results compound. Organic reach is strong. Digital presence actively contributes to revenue. Brand equity is measurable." },
];

const outcomes = [
  "More inbound inquiries from ideal customers",
  "Higher average order or service value",
  "Improved customer trust and retention",
  "Reduced dependence on word-of-mouth alone",
  "Competitive positioning in your local or niche market",
  "A brand asset that grows in value over time",
];

export const ProcessPage: FC = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FA]">

      {/* Hero */}
      <section className="bg-[#FAF8FC] pt-32 pb-20 border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-block font-mono text-xs font-bold tracking-widest uppercase text-orange-brand mb-4">Our Process</span>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-[#0D0B14] leading-[1.1] tracking-tight mb-6">
                From Discovery<br />
                <em className="text-transparent bg-clip-text bg-gradient-to-r from-[#EA4812] to-purple-600 not-italic">to Consistent Growth</em>
              </h1>
              <p className="font-sans text-gray-600 text-base sm:text-lg leading-[1.75]">
                We don't start by posting content. We start by deeply understanding your business and then build everything around what will actually move the needle.
              </p>
            </div>

            {/* Decorative flowchart */}
            <div className="hidden lg:block">
              <div className="bg-white rounded-2xl border border-gray-200/80 shadow-xl p-8">
                <div className="space-y-3">
                  {steps.map(({ num, label }, i) => (
                    <div key={num} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-orange-brand/10 border border-orange-brand/20 flex items-center justify-center flex-shrink-0">
                        <span className="font-mono text-xs font-bold text-orange-brand">{num}</span>
                      </div>
                      <div className="flex-1 h-9 bg-[#FAF8FC] rounded-lg border border-gray-100 flex items-center px-3">
                        <span className="font-sans text-sm font-medium text-[#0D0B14]">{label}</span>
                      </div>
                      {i < steps.length - 1 && (
                        <div className="absolute" />
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-gray-100 flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-xs text-gray-400">Systematic. Intentional. Results-driven.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="bg-white py-20 border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-12">
            {steps.map(({ num, icon: Icon, label, desc }) => (
              <div key={num} className="bg-[#FAF8FC] rounded-xl border border-gray-200/80 p-6 hover:border-orange-brand/30 hover:shadow-md transition-all duration-300 group relative">
                <div className="font-mono text-xs font-bold text-orange-brand/50 mb-3">{num}</div>
                <div className="w-10 h-10 rounded-xl bg-orange-brand/10 border border-orange-brand/20 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-orange-brand" />
                </div>
                <h3 className="font-display font-semibold text-base text-[#0D0B14] mb-2 group-hover:text-orange-brand transition-colors">{label}</h3>
                <p className="font-sans text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Pull quote */}
          <div className="bg-gradient-to-br from-[#0D0B14] to-navy-card rounded-2xl p-8 border border-white/5">
            <blockquote className="font-display font-bold text-lg sm:text-xl text-white leading-[1.5] text-center max-w-3xl mx-auto">
              "We don't just post content randomly. Every piece of content, every campaign, every decision is intentional and tied directly to building a stronger business for our clients."
            </blockquote>
            <p className="text-center font-mono text-xs text-orange-brand mt-4 tracking-widest uppercase">— OneBridge Marketing</p>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="bg-[#FAF8FC] py-20 border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block font-mono text-xs font-bold tracking-widest uppercase text-orange-brand mb-4">Success Metrics</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0D0B14] tracking-tight leading-tight mb-4">
            How We Measure<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-[#EA4812] italic">Your Growth</span>
          </h2>
          <p className="font-sans text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl mb-12">
            At OneBridge, we don't just deliver content. We deliver results. Here is exactly what we track, report, and optimise to ensure your investment is always working hard.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Big stat */}
            <div className="lg:col-span-3 bg-[#0D0B14] rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[220px]">
              <div className="font-display font-extrabold text-6xl text-orange-brand mb-2">8</div>
              <div className="font-sans text-gray-300 text-sm leading-relaxed">Key metrics tracked & reported to every client monthly</div>
              <div className="mt-4 w-12 h-0.5 bg-orange-brand/40 rounded-full" />
            </div>

            {/* Metrics grid */}
            <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {metrics.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="bg-white rounded-xl border border-gray-200/80 p-5 flex gap-4 hover:border-orange-brand/30 hover:shadow-md transition-all duration-300">
                  <div className="w-9 h-9 rounded-lg bg-orange-brand/10 border border-orange-brand/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-orange-brand" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-sm text-[#0D0B14] mb-1">{label}</h4>
                    <p className="font-sans text-xs text-gray-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="font-sans text-gray-400 text-sm text-center mt-8">
            All metrics are reviewed monthly in a transparent performance report shared with every client.
          </p>
        </div>
      </section>

      {/* Growth Timeline */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block font-mono text-xs font-bold tracking-widest uppercase text-orange-brand mb-4">Growth Impact</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0D0B14] tracking-tight leading-tight mb-4">
            What Growth Looks Like<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EA4812] to-purple-600 italic">Quarter by Quarter</span>
          </h2>
          <p className="font-sans text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl mb-12">
            A consistent, well-executed digital strategy doesn't just build visibility. It directly contributes to business growth and profitability over time.
          </p>

          {/* Timeline progress bar */}
          <div className="relative mb-4">
            <div className="h-1 bg-gray-100 rounded-full w-full" />
            <div className="h-1 bg-gradient-to-r from-[#EA4812] via-purple-500 to-emerald-500 rounded-full w-full absolute top-0 left-0" />
            <div className="grid grid-cols-4 mt-2">
              {quarters.map(({ q }) => (
                <div key={q} className="flex justify-center">
                  <div className="w-3 h-3 rounded-full bg-orange-brand border-2 border-white shadow-sm -mt-5" />
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {quarters.map(({ q, name, desc }, i) => (
              <div
                key={q}
                className="bg-[#FAF8FC] rounded-xl border border-gray-200/80 p-6 hover:border-orange-brand/30 hover:shadow-md transition-all duration-300"
                style={{ opacity: 0.65 + i * 0.12 }}
              >
                <div className="font-mono text-xs font-bold text-orange-brand/60 mb-2">{q}</div>
                <h3 className="font-display font-semibold text-base text-[#0D0B14] mb-2">{name}</h3>
                <p className="font-sans text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Outcomes pills */}
          <div className="bg-gradient-to-br from-[#0D0B14] to-navy-card rounded-2xl p-8 border border-white/5">
            <h3 className="font-display font-semibold text-base text-white mb-5">Key Business Outcomes of a Strong Digital Presence</h3>
            <div className="flex flex-wrap gap-3">
              {outcomes.map((o) => (
                <span key={o} className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-gray-300 text-xs font-sans px-4 py-2 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-brand flex-shrink-0" />
                  {o}
                </span>
              ))}
            </div>
            <p className="font-sans text-gray-500 text-xs mt-5">
              Timelines vary by industry and starting point. OneBridge tracks every step of your growth journey.
            </p>
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-orange-brand hover:bg-orange-hover text-white font-sans font-bold text-sm tracking-wider uppercase px-6 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Start With a Free Audit <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
