import { FC, useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface CountUpProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

const CountUp: FC<CountUpProps> = ({ end, suffix = "", prefix = "", duration = 1.8 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tempObj = { val: 0 };
            gsap.to(tempObj, {
              val: end,
              duration: duration,
              ease: "power3.out",
              onUpdate: () => {
                setCount(Math.ceil(tempObj.val));
              },
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={elementRef}>{prefix}{count}{suffix}</span>;
};

export const Metrics: FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Use GSAP to stagger and scale the metric items as they enter the screen
    const items = containerRef.current.querySelectorAll(".metric-item");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              items,
              { y: 30, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.12,
                ease: "power3.out",
              }
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const metricStats = [
    { render: () => <CountUp end={50} suffix="+" />, label: "BRANDS GROWING", highlightColor: "text-orange-brand" },
    { render: () => <CountUp end={24} suffix="/7" />, label: "ELITE SUPPORT", highlightColor: "text-cyan-brand" },
    { render: () => <CountUp end={98} suffix="%" />, label: "RETENTION RATE", highlightColor: "text-orange-brand" },
    { render: () => <CountUp end={10} suffix="M+" />, label: "MONTHLY IMPRESSIONS", highlightColor: "text-cyan-brand" },
  ];

  return (
    <section
      ref={containerRef}
      id="metrics-bar"
      className="bg-navy-dark border-y border-navy-hover/80 py-16 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 text-center">
          {metricStats.map((stat, i) => (
            <div
              key={i}
              className="metric-item flex flex-col justify-center items-center px-4 transition-transform duration-300 hover:scale-105"
            >
              <span
                className={`font-display font-black text-4xl sm:text-5xl lg:text-5xl tracking-tighter transition-all duration-300 ${stat.highlightColor}`}
              >
                {stat.render()}
              </span>
              <span className="font-sans font-bold text-xs tracking-widest text-[#94A3B8] uppercase mt-2.5">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
