import { FC } from "react";
import { Shield, CircleCheck as CheckCircle, TrendingUp, Users, Target, Zap, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const pillars = [
  { label: "Strategy First", sub: "Every decision starts with your goals.", color: "bg-purple-50 border-purple-200 text-purple-700" },
  { label: "Full Execution", sub: "We don't just advise. We deliver.", color: "bg-amber-50 border-amber-200 text-amber-700" },
  { label: "One Roof", sub: "No juggling vendors ever again.", color: "bg-emerald-50 border-emerald-200 text-emerald-700" },
  { label: "Long-Term Partner", sub: "We grow as you grow.", color: "bg-orange-50 border-orange-200 text-orange-700" },
];

const values = [
  { icon: Shield, label: "Integrity", desc: "Transparent, honest, and accountable in everything we do." },
  { icon: CheckCircle, label: "Consistency", desc: "Showing up for our clients, every single day, without fail." },
  { icon: TrendingUp, label: "Growth Mindset", desc: "Constantly learning, improving, and pushing boundaries." },
  { icon: Users, label: "Client-First", desc: "Every decision we make is in the best interest of your business." },
];

const problems = [
  { num: "01", title: "No Time", desc: "Business owners spend 10–14 hours a day running operations. Social media, content, and branding fall to the bottom of the list." },
  { num: "02", title: "No Strategy", desc: "Posting without a strategy is just noise. Most businesses don't have clear positioning, audience definition, or content direction." },
  { num: "03", title: "No Team", desc: "Hiring a full marketing team is expensive. Most small businesses can't afford a creator, designer, strategist, and manager all at once." },
  { num: "04", title: "No Results", desc: "Money spent on random freelancers or agencies with no accountability leads to frustration, wasted budgets, and zero growth." },
  { num: "05", title: "No Direction", desc: "Most businesses don't know what platforms to focus on, what content works, or how to measure if it's actually working." },
  { num: "06", title: "No Consistency", desc: "Random posting and inconsistent branding don't build an audience. Without consistency, digital presence stays invisible." },
];

const whyUs = [
  { icon: Target, color: "text-purple-600", label: "Business-First Thinking", desc: "Every decision is tied to your actual business goals and growth." },
  { icon: Zap, color: "text-emerald-600", label: "Consistent Execution", desc: "We own the execution completely — the hardest part of digital marketing." },
  { icon: TrendingUp, color: "text-orange-600", label: "Built to Scale", desc: "As your business grows, our systems and team scale with you seamlessly." },
  { icon: Star, color: "text-blue-500", label: "Real Brand Identity", desc: "A brand that feels like you — cohesive, credible, and designed to attract the right clients." },
  { icon: Users, color: "text-purple-600", label: "Long-Term Partnership", desc: "We want to be your go-to growth partner for years to come, not a one-off project." },
];

export const AboutPage: FC = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FA]">

      {/* Hero section */}
      <section className="bg-[#FAF8FC] pt-32 pb-20 border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block font-mono text-xs font-bold tracking-widest uppercase text-orange-brand mb-4">About Us</span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-[#0D0B14] leading-[1.1] tracking-tight mb-6">
                We Are<br />
                <em className="text-transparent bg-clip-text bg-gradient-to-r from-[#EA4812] to-purple-600 not-italic">OneBridge.</em>
              </h1>
              <p className="font-sans text-gray-700 text-lg leading-[1.75] mb-4 font-medium">
                OneBridge Marketing is a done-for-you digital growth and branding company built specifically for small businesses, local brands, and startups in India.
              </p>
              <p className="font-sans text-gray-500 text-base leading-[1.75] mb-4">
                Most business owners are exceptional at what they do but don't have the time, team, or expertise to manage their digital presence consistently. That's the gap we fill.
              </p>
              <p className="font-sans text-gray-500 text-base leading-[1.75] mb-8">
                We step in as your complete digital team — strategy, content, branding, social media, and marketing — all under one roof, with one point of contact.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {pillars.map((p) => (
                  <div key={p.label} className={`rounded-xl border p-4 ${p.color}`}>
                    <div className="font-sans font-semibold text-sm mb-1">{p.label}</div>
                    <div className="font-sans text-xs opacity-80">{p.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual card */}
            <div className="relative">
              <div className="bg-white rounded-2xl border border-gray-200/80 shadow-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="font-mono text-xs text-gray-400 ml-2">your-growth.dashboard</span>
                </div>
                <svg viewBox="0 0 320 180" fill="none" className="w-full" aria-hidden="true">
                  <rect x="0" y="0" width="320" height="180" rx="8" fill="#F9FAFB" />
                  <polyline points="20,140 70,110 120,120 175,75 225,85 280,45" stroke="#EA4812" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="280" cy="45" r="6" fill="#EA4812" />
                  <circle cx="280" cy="45" r="12" fill="#EA4812" fillOpacity="0.15" />
                  <rect x="20" y="20" width="90" height="10" rx="5" fill="#0D0B14" fillOpacity="0.12" />
                  <rect x="20" y="36" width="60" height="7" rx="3.5" fill="#0D0B14" fillOpacity="0.07" />
                  <rect x="220" y="20" width="60" height="28" rx="8" fill="#EA4812" fillOpacity="0.1" />
                  <text x="250" y="40" textAnchor="middle" fill="#EA4812" fontSize="13" fontWeight="700">↑ 4.2×</text>
                </svg>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[["4,200+", "Followers"], ["3.8×", "ROAS"], ["~40%", "Footfall"]].map(([val, lbl]) => (
                    <div key={lbl} className="bg-[#FAF8FC] rounded-xl p-3 text-center border border-gray-100">
                      <div className="font-display font-bold text-lg text-[#0D0B14]">{val}</div>
                      <div className="font-sans text-xs text-gray-500 mt-0.5">{lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Decorative blobs */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-brand/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* What "OneBridge" Means */}
      <section className="bg-[#0D0B14] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block font-mono text-xs font-bold tracking-widest uppercase text-orange-brand mb-4">What "OneBridge" Means</span>
            <blockquote className="font-display font-extrabold text-2xl sm:text-3xl text-white leading-[1.3] mb-4">
              "The name says it all. We are the bridge between your business and its online growth. One team. One strategy. One seamless experience."
            </blockquote>
            <p className="font-sans text-gray-400 text-base leading-relaxed">
              Instead of managing multiple freelancers, agencies, and tools separately, our clients get a single, trusted partner who handles the full picture.
            </p>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Core Values */}
      <section className="bg-white py-20 border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block font-mono text-xs font-bold tracking-widest uppercase text-orange-brand mb-4">Our Foundation</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0D0B14] tracking-tight leading-tight mb-12">
            Vision, Mission &<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-[#EA4812] italic">Core Values</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Vision */}
            <div className="bg-gradient-to-br from-purple-950 to-[#0D0B14] rounded-2xl p-8 border border-purple-900/40">
              <span className="font-mono text-xs font-bold tracking-widest uppercase text-purple-400 mb-4 block">Our Vision</span>
              <blockquote className="font-display font-bold text-xl text-white leading-[1.4] mb-3">
                "To be the most trusted digital growth partner for brands and small businesses across India."
              </blockquote>
              <p className="font-sans text-purple-200/70 text-sm">Not just another agency. A long-term partner invested in your growth.</p>
            </div>
            {/* Mission */}
            <div className="bg-gradient-to-br from-orange-950 to-[#0D0B14] rounded-2xl p-8 border border-orange-900/40">
              <span className="font-mono text-xs font-bold tracking-widest uppercase text-orange-400 mb-4 block">Our Mission</span>
              <blockquote className="font-display font-bold text-xl text-white leading-[1.4] mb-3">
                "To help businesses build a consistent, powerful online identity that drives real growth."
              </blockquote>
              <p className="font-sans text-orange-200/70 text-sm">We execute with strategy, creativity, and consistency. Every single time.</p>
            </div>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="bg-[#FAF8FC] rounded-xl border border-gray-200/80 p-6 hover:border-orange-brand/30 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-orange-brand/10 border border-orange-brand/20 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-orange-brand" />
                </div>
                <h4 className="font-display font-semibold text-base text-[#0D0B14] mb-2">{label}</h4>
                <p className="font-sans text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Most Small Businesses Struggle */}
      <section className="bg-[#FAF8FC] py-20 border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block font-mono text-xs font-bold tracking-widest uppercase text-orange-brand mb-4">The Problem</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0D0B14] tracking-tight leading-tight mb-4">
            Why Most Small Businesses<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EA4812] to-purple-600 italic">Struggle Online</span>
          </h2>
          <p className="font-sans text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl mb-12">
            It's not that small businesses don't care about their online presence. They are simply too busy running their business to do it right.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {problems.map((p) => (
              <div key={p.num} className="bg-white rounded-xl border border-gray-200/80 p-6 hover:border-orange-brand/30 hover:shadow-md transition-all duration-300 group">
                <div className="font-mono text-xs font-bold text-orange-brand/60 mb-3">{p.num}</div>
                <h4 className="font-display font-semibold text-base text-[#0D0B14] mb-2 group-hover:text-orange-brand transition-colors">{p.title}</h4>
                <p className="font-sans text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#0D0B14] rounded-2xl p-6 sm:p-8 text-center">
            <p className="font-display font-bold text-xl sm:text-2xl text-white">
              OneBridge solves every single one of these.{" "}
              <span className="text-orange-brand italic">That's what we were built for.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block font-mono text-xs font-bold tracking-widest uppercase text-orange-brand mb-4">Why Choose Us</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0D0B14] tracking-tight leading-tight mb-4">
            A Partner,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-[#EA4812] italic">Not Just an Agency</span>
          </h2>
          <p className="font-sans text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl mb-12">
            Most agencies handle one piece of your marketing. We handle the whole picture and think like your business depends on it — because it does.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Hero card */}
            <div className="bg-gradient-to-br from-[#0D0B14] to-navy-card rounded-2xl p-8 border border-white/5 flex flex-col justify-between row-span-1 lg:row-span-2">
              <div>
                <span className="inline-block font-mono text-xs font-bold tracking-widest uppercase text-orange-brand mb-4">#1 Reason Clients Stay</span>
                <h3 className="font-display font-bold text-2xl text-white leading-tight mb-4">Everything Under One Roof</h3>
                <p className="font-sans text-gray-400 text-base leading-relaxed">
                  No juggling freelancers, agencies, or tools. One team, one strategy, one point of contact for everything digital — from content to campaigns to brand identity.
                </p>
              </div>
              <Link
                to="/"
                className="mt-8 inline-flex items-center gap-2 bg-orange-brand hover:bg-orange-hover text-white font-sans font-bold text-sm tracking-wider uppercase px-5 py-3 rounded-lg transition-all duration-300 self-start"
              >
                Start Your Audit <ArrowRight size={16} />
              </Link>
            </div>

            {/* Mini cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whyUs.map(({ icon: Icon, color, label, desc }) => (
                <div key={label} className="bg-[#FAF8FC] rounded-xl border border-gray-200/80 p-5 hover:border-orange-brand/30 hover:shadow-md transition-all duration-300">
                  <Icon size={20} className={`${color} mb-3`} />
                  <h4 className="font-display font-semibold text-sm text-[#0D0B14] mb-1.5">{label}</h4>
                  <p className="font-sans text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
