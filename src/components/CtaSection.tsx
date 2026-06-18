import { FC } from "react";
import { Sparkles, ArrowRight, Lock, Navigation, CircleCheck as CheckCircle } from "lucide-react";

const TALLY_HREF = "#tally-open=684DGe&tally-emoji-text=👋&tally-emoji-animation=wave";

const benefits = [
  "Manual review of your current digital presence",
  "Exact conversion gaps identified",
  "90-day growth roadmap included",
  "Zero commitment required",
];

export const CtaSection: FC = () => {
  return (
    <section id="audit" className="bg-[#09070F] py-24 sm:py-32 relative overflow-hidden">
      {/* Atmospheric gradients */}
      <div className="absolute top-[-30%] left-[30%] w-[600px] h-[600px] rounded-full bg-purple-600/10 filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[10%] w-[450px] h-[450px] rounded-full bg-[#EA4812]/5 filter blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-zinc-950/80 border border-purple-900/40 p-8 sm:p-14 rounded-2xl relative overflow-hidden shadow-2xl">

          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{ backgroundImage: "radial-gradient(#FFFFFF 1px, transparent 1px)", backgroundSize: "16px 16px" }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Copy */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-orange-brand/10 border border-orange-brand/20 text-orange-brand px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase">
                <Navigation size={12} className="rotate-45" />
                GET STARTED
              </div>

              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white leading-[1.1] tracking-tight">
                Ready to{" "}
                <span className="text-orange-brand italic">Be Seen?</span>
              </h2>

              <p className="font-sans text-gray-400 text-base leading-relaxed">
                Stop wondering if your digital marketing is working. Let's build the bridge between your business and your customers.
              </p>

              <ul className="space-y-2.5">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-gray-300 text-sm font-sans">
                    <CheckCircle size={16} className="text-orange-brand flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-2 text-xs text-gray-600 font-mono pt-1">
                <Lock size={12} />
                <span>100% SECURE & PRIVATE · NO CREDIT CARD REQUIRED</span>
              </div>
            </div>

            {/* CTA card */}
            <div className="bg-zinc-900/80 border border-zinc-800/80 p-8 rounded-xl flex flex-col items-center text-center gap-6">
              <div className="w-14 h-14 rounded-full bg-orange-brand/10 border border-orange-brand/20 flex items-center justify-center">
                <Sparkles size={26} className="text-orange-brand" />
              </div>

              <div className="space-y-2">
                <h3 className="font-display font-extrabold text-xl text-white">
                  Request Your Free Audit
                </h3>
                <p className="font-sans text-gray-400 text-sm leading-relaxed">
                  Our team will perform a manual review of your current pipeline and reveal the exact steps to scale your conversions.
                </p>
              </div>

              <a
                href={TALLY_HREF}
                className="w-full group relative bg-[#EA4812] hover:bg-[#F25C2B] text-white font-sans font-extrabold text-sm tracking-wider uppercase px-8 py-4 rounded-xl shadow-xl shadow-[#EA4812]/15 hover:shadow-[#EA4812]/30 transition-all duration-300 flex items-center justify-center gap-3 hover:-translate-y-1 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start With a Free Audit
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>

              <p className="font-mono text-[10px] text-orange-brand/60 tracking-widest uppercase">
                READY TO CONNECT THE BRIDGE
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
