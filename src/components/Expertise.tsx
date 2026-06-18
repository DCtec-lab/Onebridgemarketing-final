import { FC } from "react";
import { Check } from "lucide-react";

export const Expertise: FC = () => {
  return (
    <section id="expertise" className="bg-[#F8F9FA] py-24 sm:py-32 border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left row: copy text & checklist */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-navy-dark leading-tight tracking-tight">
              Expertise Powered by
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-brand to-red-500 italic font-extrabold">
                Humans
              </span>
            </h2>
            <p className="font-sans text-gray-600 text-base sm:text-lg leading-[1.65]">
              Our team doesn't just run ads; we build bridges between your brand and your audience. Real people, real strategy, real growth.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-orange-brand/10 border border-orange-brand/20 flex items-center justify-center text-orange-brand-hover">
                  <Check size={14} className="text-orange-brand" strokeWidth={3} />
                </div>
                <span className="font-sans font-semibold text-gray-700 text-base">
                  Dedicated account managers
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-orange-brand/10 border border-orange-brand/20 flex items-center justify-center text-orange-brand-hover">
                  <Check size={14} className="text-orange-brand" strokeWidth={3} />
                </div>
                <span className="font-sans font-semibold text-gray-700 text-base">
                  Direct communication lines
                </span>
              </div>
            </div>
          </div>

          {/* Right row: Detailed workplace dashboard illustration */}
          <div className="lg:col-span-6 flex justify-center">
            <svg
              id="expertise-illustration-svg"
              width="100%"
              height="100%"
              viewBox="0 0 540 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="max-w-[480px] drop-shadow-lg select-none"
            >
              {/* Soft desk shadow */}
              <ellipse cx="270" cy="360" rx="190" ry="12" fill="#E2E8F0" opacity="0.6" />

              {/* Computer Desk Table wood section */}
              <rect x="60" y="330" width="420" height="15" rx="3" fill="#D8E2ED" />
              <rect x="80" y="345" width="20" height="25" fill="#B0C4DE" />
              <rect x="440" y="345" width="20" height="25" fill="#B0C4DE" />

              {/* Developer chair backrest silhouette */}
              <path d="M375 220 C420 220, 430 330, 420 330 H360 C350 330, 355 220, 375 220 Z" fill="#2A2A2C" />
              <rect x="382" y="315" width="12" height="35" fill="#1A1A1E" />

              {/* Dual monitor desks */}
              {/* Left Monitor (Charts Dashboard) */}
              <rect x="82" y="145" width="160" height="110" rx="6" fill="#0A192F" stroke="#475569" strokeWidth="4" />
              <rect x="88" y="151" width="148" height="92" rx="2" fill="#112240" />
              <path d="M150 255 L145 285 H180 L175 255 Z" fill="#475569" />
              {/* Charts elements Inside Screen 1 */}
              <rect x="94" y="157" width="40" height="25" rx="3" fill="#1D2D50" />
              <circle cx="114" cy="170" r="8" fill="rgba(0,227,253,0.15)" stroke="#00E3FD" strokeWidth="1.5" />
              <path d="M114 170 L118 166" stroke="#00E3FD" strokeWidth="1.5" />

              <rect x="140" y="157" width="90" height="25" rx="3" fill="#1D2D50" />
              {/* Bar charts inside */}
              <rect x="148" y="166" width="6" height="12" fill="#EA4812" rx="1" />
              <rect x="157" y="162" width="6" height="16" fill="#00E3FD" rx="1" />
              <rect x="166" y="168" width="6" height="10" fill="#EA4812" rx="1" />
              <rect x="175" y="160" width="6" height="18" fill="#00E3FD" rx="1" />
              
              {/* Dynamic spline graph below on screen 1 */}
              <path d="M94 225 Q130 195 160 215 T226 200" stroke="#00E3FD" strokeWidth="2.5" fill="none" />
              <circle cx="160" cy="215" r="3" fill="#EA4812" />

              {/* Right Monitor (Social Channels Feedback) */}
              <rect x="250" y="130" width="180" height="125" rx="6" fill="#0A192F" stroke="#475569" strokeWidth="4" />
              <rect x="256" y="136" width="168" height="107" rx="2" fill="#1A1A1E" />
              <path d="M330 255 L325 295 H360 L355 255 Z" fill="#475569" />
              {/* Dashboard inside screen 2 */}
              <rect x="264" y="144" width="70" height="42" rx="3" fill="#112240" />
              {/* Drawing of bridge cables inside the monitor */}
              <path d="M270 178 Q299 155 328 178" stroke="#EA4812" strokeWidth="1.5" fill="none" />
              <line x1="299" y1="155" x2="285" y2="175" stroke="#64748B" strokeWidth="0.8" />
              <line x1="299" y1="155" x2="313" y2="175" stroke="#64748B" strokeWidth="0.8" />
              <text x="299" y="152" fill="#FFFFFF" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">ONE BRIDGE</text>

              <rect x="340" y="144" width="76" height="42" rx="3" fill="#112240" />
              <text x="378" y="156" fill="#00E3FD" fontSize="8" fontWeight="bold" fontFamily="monospace" textAnchor="middle">CTR: +145%</text>
              <text x="378" y="172" fill="#8892B0" fontSize="7" fontFamily="sans-serif" textAnchor="middle">OPTIMAL SCALE</text>

              {/* Bottom feed lines in screen 2 */}
              <line x1="264" y1="202" x2="416" y2="202" stroke="#2D3748" strokeWidth="2" />
              <line x1="264" y1="215" x2="380" y2="215" stroke="#2D3748" strokeWidth="2" />
              <rect x="390" y="210" width="26" height="10" rx="3" fill="#EA4812" />
              <text x="403" y="217" fill="#FFFFFF" fontSize="6" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">LIVE</text>

              {/* Floating Social network badges connected (Reels, FB, IG, LinkedIn) */}
              <g className="float-group" transform="translate(460, 110)">
                <circle cx="16" cy="16" r="14" fill="#0A66C2" />
                <text x="16" y="21" fill="#FFFFFF" fontSize="13" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">in</text>
              </g>
              <g className="float-group" transform="translate(430, 175)">
                <circle cx="14" cy="14" r="12" fill="#E1306C" />
                <rect x="8" y="8" width="12" height="12" rx="3" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
                <circle cx="14" cy="14" r="3" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
              </g>
              <g className="float-group" transform="translate(56, 100)">
                <circle cx="16" cy="16" r="14" fill="#1877F2" />
                <text x="16" y="24" fill="#FFFFFF" fontSize="21" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">f</text>
              </g>

              {/* Desk items (Coffee cup, keyboard) */}
              <ellipse cx="260" cy="326" rx="8" ry="3" fill="#CBD5E1" />
              <rect x="238" y="324" width="44" height="2" fill="#475569" />

              <rect x="100" y="318" width="18" height="12" rx="2" fill="#E2E8F0" />
              <rect x="102" y="322" width="10" height="8" fill="#EA4812" />
              
              {/* Coffee mug */}
              <rect x="300" y="316" width="10" height="14" rx="1" fill="#FEF3C7" />
              <path d="M310 320 Q314 322 310 324" stroke="#FEF3C7" strokeWidth="2" fill="none" />

              {/* Woman / Marketer silhouette sitting down */}
              <g transform="translate(325, 230)">
                {/* Body */}
                <path d="M 12 40 C 13 80, 52 80, 52 100 H 0 Z" fill="#8B5CF6" />
                {/* Hair */}
                <path d="M 32 15 C 15 15, 10 40, 20 48 Q 23 35, 33 35 Q 43 35, 45 48 C 55 40, 50 15, 32 15 Z" fill="#1E1B4B" />
                {/* Face silhouette */}
                <circle cx="32" cy="27" r="11" fill="#FDE047" />
                <path d="M 32 12 C 15 12, 10 37, 20 45" fill="#1E1B4B" />
              </g>
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
};
