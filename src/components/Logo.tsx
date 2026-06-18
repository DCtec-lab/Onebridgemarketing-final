import { FC } from "react";

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  lightText?: boolean;
}

export const Logo: FC<LogoProps> = ({
  className = "",
  size = 48,
  showText = true,
  lightText = true,
}) => {
  return (
    <div id="ob-logo-wrap" className={`flex items-center gap-3 ${className}`}>
      <svg
        id="ob-logo-svg"
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 transition-transform hover:scale-105 duration-300"
      >
        {/* Upper Orange Arch */}
        <path
          d="M39 125 C 39 50, 161 50, 161 125"
          stroke="#EA4812"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />

        {/* Central Orange Pillar */}
        <path
          d="M96 60 H 104 L 103 145 H 97 Z"
          fill="#EA4812"
          stroke="#EA4812"
          strokeWidth="1"
        />
        <path
          d="M98 62 H 102 L 101 143 H 99 Z"
          fill="#FFB5A0"
          opacity="0.5"
        />

        {/* Suspension Cable Lines (Navy/Ice Blue) */}
        {/* Left Side Cables */}
        <line x1="97" y1="75" x2="48" y2="135" stroke="#1D2D50" strokeWidth="2.5" />
        <line x1="97" y1="90" x2="62" y2="132" stroke="#1D2D50" strokeWidth="2" />
        <line x1="97" y1="105" x2="76" y2="130" stroke="#1D2D50" strokeWidth="1.5" />

        {/* Right Side Cables */}
        <line x1="103" y1="75" x2="152" y2="135" stroke="#1D2D50" strokeWidth="2.5" />
        <line x1="103" y1="90" x2="138" y2="132" stroke="#1D2D50" strokeWidth="2" />
        <line x1="103" y1="105" x2="124" y2="130" stroke="#1D2D50" strokeWidth="1.5" />

        {/* Bottom Curved Foundation Arch (Navy) */}
        <path
          d="M25 140 Q 100 115 175 140"
          stroke="#0A192F"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
        />
        {/* Highlight line on foundation */}
        <path
          d="M40 136 Q 100 117 160 136"
          stroke="#BDF4FF"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.8"
        />
      </svg>

      {showText && (
        <div id="ob-logo-text-container" className="flex flex-col select-none">
          <span
            id="ob-logo-brandname"
            className="font-sans font-extrabold text-[20px] leading-none tracking-tight"
            style={{ color: lightText ? "#FFFFFF" : "#0A192F" }}
          >
            ONE<span style={{ color: "#EA4812" }}>BRIDGE</span>
          </span>
          <div id="ob-logo-sub-row" className="flex items-center gap-1.5 mt-0.5">
            <span className="w-2.5 h-[1.5px] bg-[#EA4812]"></span>
            <span
              id="ob-logo-tagname"
              className="font-sans text-[9px] font-bold tracking-[0.25em] uppercase leading-none"
              style={{ color: lightText ? "#BDF4FF" : "#8892B0" }}
            >
              MARKETING
            </span>
            <span className="w-2.5 h-[1.5px] bg-[#EA4812]"></span>
          </div>
        </div>
      )}
    </div>
  );
};
