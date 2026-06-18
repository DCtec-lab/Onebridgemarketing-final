import { FC, useState, FormEvent } from "react";
import { Sparkles, ArrowRight, CheckCircle2, Lock, Navigation } from "lucide-react";

export const CtaSection: FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAuditSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!websiteUrl || !emailAddress) return;

    setIsSubmitting(true);
    // Simulate real database submission sequence
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1200);
  };

  return (
    <section id="audit" className="bg-[#09070F] py-28 relative overflow-hidden">
      {/* Decorative radial gradients representing warm purple and orange flows */}
      <div className="absolute top-[-30%] left-[30%] w-[600px] h-[600px] rounded-full bg-purple-600/10 filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[10%] w-[450px] h-[450px] rounded-full bg-[#EA4812]/5 filter blur-3xl pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Container */}
        <div className="bg-zinc-950/80 border border-purple-900/40 p-8 sm:p-14 rounded-2xl relative overflow-hidden shadow-2xl">
          
          {/* Symmetrical grid pattern */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: "radial-gradient(#FFFFFF 1px, transparent 1px)", backgroundSize: "16px 16px" }} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Copy Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-orange-brand/10 border border-orange-brand/20 text-orange-brand px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase mb-2">
                <Navigation size={12} className="rotate-45" />
                GET STARTED
              </div>
              
              <h2 className="font-display font-black text-3.5xl sm:text-5xl text-white leading-[1.1] tracking-tight">
                Ready to <span className="text-orange-brand italic pr-1 font-black">Be Seen?</span>
              </h2>
              
              <p className="font-sans text-gray-400 text-base sm:text-lg leading-relaxed">
                Stop wondering if your digital marketing is working. Let's build the bridge between your business and your customers.
              </p>

              {/* Secure lock metadata */}
              <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                <Lock size={12} className="text-gray-600" />
                <span>100% SECURE & PRIVATE • NO CREDIT CARD REQUIRED</span>
              </div>
            </div>

            {/* Interactive Form Column */}
            <div className="lg:col-span-6">
              {!formSubmitted ? (
                <form
                  onSubmit={handleAuditSubmit}
                  className="bg-zinc-900/80 border border-zinc-800/80 p-6 sm:p-8 rounded-xl space-y-4"
                >
                  <h3 className="font-display font-extrabold text-lg sm:text-xl text-white mb-2">
                    Request Your Free Audit
                  </h3>
                  <p className="font-sans text-xs text-gray-400 leading-normal mb-4">
                    Our team will perform a manual review of your current pipeline and reveal the exact steps to scale your conversions.
                  </p>

                  <div className="space-y-3">
                    {/* Website URL Input */}
                    <div>
                      <label className="block text-[10px] font-mono tracking-widest text-[#8892B0] uppercase mb-1.5">
                        WEBSITE URL
                      </label>
                      <input
                        type="url"
                        required
                        placeholder="https://yourbrand.com"
                        value={websiteUrl}
                        onChange={(e) => setWebsiteUrl(e.target.value)}
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-purple-500 text-gray-200 text-sm px-4 py-3 rounded focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Email address input */}
                    <div>
                      <label className="block text-[10px] font-mono tracking-widest text-[#8892B0] uppercase mb-1.5">
                        BUSINESS EMAIL
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@yourbrand.com"
                        value={emailAddress}
                        onChange={(e) => setEmailAddress(e.target.value)}
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-purple-500 text-gray-200 text-sm px-4 py-3 rounded focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange-brand hover:bg-orange-hover text-white font-sans font-bold text-sm tracking-widest uppercase py-4 rounded shadow-md mt-4 transition-all duration-300 hover:shadow-orange-brand/20 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        Book My Free Audit
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                /* Success Animated Card State */
                <div className="bg-zinc-900 border border-emerald-500/30 p-8 rounded-xl text-center space-y-4 animate-scaleUp">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-2 text-emerald-400">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white">
                    Audit Request Submitted!
                  </h3>
                  <p className="font-sans text-[#8892B0] text-sm leading-relaxed">
                    Thank you! We have received your request for <strong>{websiteUrl.replace(/https?:\/\//, "")}</strong>. A digital growth specialist is performing your manual review. You will receive the breakdown inbox at <strong>{emailAddress}</strong> within 3 business hours.
                  </p>
                  <p className="font-mono text-[10px] text-orange-brand tracking-widest uppercase pt-2">
                    READY TO CONNECT THE BRIDGE
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
