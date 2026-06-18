import { FC, useState, useEffect, useRef } from "react";
import { Film, Palette, Users, ChartLine as LineChart, Share2, Check } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import contentCreationImg from "../assets/images/mj2dmuvmd36h1.png";
import brandingPresenceImg from "../assets/images/81dtgwnjd36h1.png";
import marketingStrategyImg from "../assets/images/marketing_strategy_1781611990916.jpg";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const Services: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const mobileCardsRef = useRef<HTMLDivElement>(null);
  
  // Guard references to manage mechanical click timing safely
  const isSnappingRef = useRef<boolean>(false);
  const activeIndexRef = useRef<number>(0);

  const serviceCategories = [
    {
      id: "content-creation",
      title: "Content Creation",
      tagline: "SCROLL-STOPPING SHORT-FORM CONTENT",
      description: "High-retention visual assets built to capture immediate attention and turn casual watchers into warm customer conversions.",
      icon: <Film className="text-[#EA4812]" size={20} />,
      bulletColor: "text-[#EA4812]",
      image: contentCreationImg,
      items: ["Reels & short video", "Carousel posts", "Static graphics & posters", "Story templates", "Product photography direction", "Video scripting & editing", "Branded content templates", "Festival & occasion posts"]
    },
    {
      id: "branding-presence",
      title: "Branding & Online Presence",
      tagline: "COHESIVE CREATIVE IDENTITY",
      description: "Establish a cohesive identity and editorial digital presence that commands respect across every touchpoint.",
      icon: <Palette className="text-[#8B5CF6]" size={20} />,
      bulletColor: "text-[#8B5CF6]",
      image: brandingPresenceImg,
      items: ["Logo design", "Brand colour palette", "Typography & font kit", "Brand voice & tone guide", "Instagram bio optimisation", "Profile & highlight covers", "Google Business Profile setup", "Cross-platform consistency", "WhatsApp Business setup", "Linktree / link-in-bio setup"]
    },
    {
      id: "influencer-marketing",
      title: "Influencer & Creator Marketing",
      tagline: "ORGANIC SOCIAL PROOF",
      description: "Harness the power of direct-to-audience creator networks with optimized briefs, micro-campaigns, and hyper-targeted seeding.",
      icon: <Users className="text-blue-500" size={20} />,
      bulletColor: "text-blue-500",
      image: contentCreationImg,
      items: ["Creator identification & outreach", "Nano & micro influencer campaigns", "Brief & script preparation", "Campaign coordination", "UGC (user-generated content)", "Product seeding", "Collab reel management", "Performance tracking"]
    },
    {
      id: "marketing-strategy",
      title: "Marketing Strategy & Growth",
      tagline: "DATA-DRIVEN CONVERSION PATHS",
      description: "No vague guesswork. Just hard strategic insights, precise audience profiling, 90-day roadmaps, and organic ad engines.",
      icon: <LineChart className="text-purple-600" size={20} />,
      bulletColor: "text-purple-600",
      image: marketingStrategyImg,
      items: ["Digital presence audit (free)", "Competitor analysis", "Target audience mapping", "90-day content roadmap", "Platform selection strategy", "Growth consulting", "Monthly performance review", "Ad strategy (organic-first)"]
    },
    {
      id: "social-media",
      title: "Social Media Management",
      tagline: "END-TO-END CHANNEL OPTIMISATION",
      description: "Daily production control, proactive follower acquisition, automated post planning, and community engagement mapping.",
      icon: <Share2 className="text-emerald-500" size={20} />,
      bulletColor: "text-emerald-500",
      image: brandingPresenceImg,
      items: ["Account setup & optimisation", "Monthly content calendar", "Consistent posting schedule", "Caption writing & hashtags", "Daily story management", "Comment & DM engagement", "Instagram, Facebook & LinkedIn", "Performance tracking & reporting"]
    }
  ];

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // DESKTOP: High-Accuracy Mechanical Segment Latching System
      mm.add("(min-width: 1024px)", () => {
        const totalSlides = serviceCategories.length;
        const segmentSize = 1 / (totalSlides - 1);

        const mainTrigger = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${totalSlides * 120}vh`, // Increased scroll distance for more intuitive interaction
          pin: containerRef.current,
          scrub: 0.5,
          onUpdate: (self) => {
            setScrollProgress(self.progress);
            if (isSnappingRef.current) return;

            const progress = self.progress;
            
            // Calculate active slice index safely
            const rawIndex = Math.round(progress / segmentSize);
            const targetIndex = Math.min(Math.max(rawIndex, 0), totalSlides - 1);

            if (targetIndex !== activeIndexRef.current) {
              activeIndexRef.current = targetIndex;
              setActiveIndex(targetIndex);

              // Calculate exact target position within the scroll window
              const targetScrollPos = mainTrigger.start + (targetIndex * segmentSize) * (mainTrigger.end - mainTrigger.start);
              
              isSnappingRef.current = true;
              
              // Smooth programmatic jump directly onto the indent target position
              gsap.to(window, {
                scrollTo: { y: targetScrollPos, autoKill: false },
                duration: 0.35,
                ease: "power2.out",
                onComplete: () => {
                  // Buffer timeline lockout to allow fast scroll gesture integration cleanly
                  setTimeout(() => {
                    isSnappingRef.current = false;
                  }, 100);
                }
              });
            }
          }
        });
      });

      // MOBILE: High-Performance Velocity Focused Deck
      mm.add("(max-width: 1023px)", () => {
        if (mobileCardsRef.current) {
          const cards = mobileCardsRef.current.children;
          Array.from(cards).forEach((card) => {
            const cardInner = card.querySelector(".mobile-card-inner");
            const img = card.querySelector(".mobile-card-img");

            gsap.fromTo(cardInner,
              { 
                scale: 0.92, 
                opacity: 0.35, 
                filter: "blur(3px)",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.05)"
              },
              {
                scale: 1,
                opacity: 1,
                filter: "blur(0px)",
                boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.12)",
                scrollTrigger: {
                  trigger: card,
                  start: "top 75%",
                  end: "top 30%",
                  scrub: 0.4,
                  toggleActions: "play reverse play reverse"
                }
              }
            );

            if (img) {
              gsap.fromTo(img,
                { yPercent: -8 },
                {
                  yPercent: 8,
                  ease: "none",
                  scrollTrigger: {
                    trigger: card,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                  }
                }
              );
            }
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Structural Target Card Micro-Animations
  useEffect(() => {
    if (window.innerWidth >= 1024 && cardContainerRef.current) {
      const imgWrap = cardContainerRef.current.querySelector(".card-img-wrap");
      const textItems = cardContainerRef.current.querySelectorAll(".animate-text-item");
      const listItems = cardContainerRef.current.querySelectorAll(".animate-list-item");

      const tl = gsap.timeline({ defaults: { ease: "back.out(1.1)" } });

      tl.fromTo(imgWrap, 
        { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)", scale: 1.04 },
        { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", scale: 1, duration: 0.4 }
      );

      tl.fromTo(textItems,
        { opacity: 0, y: 12, filter: "blur(3px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.25, stagger: 0.02 },
        "-=0.3"
      );

      tl.fromTo(listItems,
        { opacity: 0, scale: 0.97, y: 5 },
        { opacity: 1, scale: 1, y: 0, duration: 0.2, stagger: 0.01 },
        "-=0.2"
      );
    }
  }, [activeIndex]);

  const activeService = serviceCategories[activeIndex];

  return (
    <div
      id="services"
      ref={sectionRef}
      className="relative w-full bg-white border-b border-gray-100 lg:min-h-screen"
    >
      <div className="absolute top-[12%] right-[-5%] w-[400px] h-[400px] rounded-full bg-orange-100/30 mix-blend-multiply filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-[12%] left-[-5%] w-[450px] h-[450px] rounded-full bg-purple-100/20 mix-blend-multiply filter blur-3xl pointer-events-none" />

      <div ref={containerRef} className="lg:h-screen lg:w-full lg:flex lg:items-center py-16 sm:py-24 lg:py-0 overflow-hidden relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

            <div className="lg:col-span-5 space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <h2 className="font-display font-black text-[28px] sm:text-[40px] lg:text-[44px] text-[#0D0B14] leading-[1.1] tracking-tight">
                  Your Full Creative Growth Engine,
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-[#EA4812] italic mt-1 font-black">
                    Under One Bridge.
                  </span>
                </h2>
                <p className="font-sans text-gray-500 text-sm sm:text-base leading-[1.65]">
                  Our end-to-end specialized systems bridge creative production, audience trust, and rigorous multi-channel metrics.
                </p>
              </div>

              <div className="hidden lg:flex flex-col gap-3 border-l border-gray-200 pl-4 py-2 relative">
                <div className="absolute left-0 -translate-x-[1px] top-0 bottom-0 bg-gray-200 w-[2px]" />
                <div
                  className="absolute left-0 -translate-x-[1px] top-0 bg-[#EA4812] w-[2px] transition-all duration-200 ease-out"
                  style={{ height: `${scrollProgress * 100}%` }}
                />

                {serviceCategories.map((service, index) => {
                  const isActive = activeIndex === index;
                  return (
                    <div
                      key={service.id}
                      className="group flex flex-col items-start text-left relative z-10"
                    >
                      <span className={`font-mono text-[8px] font-extrabold tracking-widest uppercase transition-colors duration-300 ${isActive ? "text-[#EA4812]" : "text-gray-400"}`}>
                        DOMAIN 0{index + 1}
                      </span>
                      <span className={`font-display font-black text-xs sm:text-sm transition-colors duration-300 mt-0.5 uppercase tracking-wide ${isActive ? "text-[#0D0B14]" : "text-gray-400"}`}>
                        {service.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-7 relative w-full">

              <div className="hidden lg:block">
                <div 
                  ref={cardContainerRef}
                  className="bg-white border border-purple-200/60 rounded-2xl p-8 shadow-xl min-h-[530px] relative overflow-hidden backdrop-blur-sm"
                >
                  <div className="relative z-10 w-full h-full flex flex-col justify-between">
                    <div>
                      <div className="card-img-wrap overflow-hidden rounded-xl border border-purple-100 mb-6 relative h-44 bg-gray-50">
                        <img
                          src={activeService.image}
                          alt={activeService.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex items-center gap-3 mb-4 animate-text-item">
                        <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
                          {activeService.icon}
                        </div>
                        <span className="font-mono text-[9px] font-black tracking-widest text-[#EA4812] uppercase">
                          {activeService.tagline}
                        </span>
                      </div>

                      <h3 className="animate-text-item font-display font-black text-xl text-[#0D0B14] uppercase tracking-wide mb-3">
                        {activeService.title}
                      </h3>
                      <p className="animate-text-item font-sans text-gray-500 text-sm leading-relaxed mb-6 max-w-xl">
                        {activeService.description}
                      </p>
                    </div>

                    <div className="border-t border-purple-100 pt-5">
                      <h4 className="animate-text-item font-mono text-[9px] font-black tracking-widest text-[#EA4812] uppercase mb-3">
                        SERVICE DELIVERABLES
                      </h4>
                      <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                        {activeService.items.map((item, i) => (
                          <li key={i} className="animate-list-item flex items-start gap-2">
                            <Check size={12} className={`mt-0.5 flex-shrink-0 ${activeService.bulletColor}`} />
                            <span className="font-sans text-[13px] text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>
              </div>

              <div ref={mobileCardsRef} className="lg:hidden flex flex-col gap-10">
                {serviceCategories.map((service, index) => (
                  <div
                    key={service.id}
                    className="w-full relative py-2"
                  >
                    <div className="mobile-card-inner bg-white border border-gray-100 rounded-2xl p-6 transition-shadow will-change-transform overflow-hidden">
                      <div className="overflow-hidden rounded-xl border border-gray-100 mb-5 h-40 relative bg-gray-50">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="mobile-card-img absolute top-0 left-0 w-full h-[120%] object-cover will-change-transform"
                        />
                      </div>

                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center ${service.bulletColor}`}>
                          {service.icon}
                        </div>
                        <span className="font-mono text-[8px] font-black tracking-widest text-[#EA4812] uppercase">
                          DOMAIN 0{index + 1}
                        </span>
                      </div>

                      <h3 className="font-display font-black text-lg text-[#0D0B14] uppercase tracking-wide mb-2">
                        {service.title}
                      </h3>
                      <p className="font-sans text-gray-500 text-sm leading-relaxed mb-5">
                        {service.description}
                      </p>

                      <div className="border-t border-gray-100 pt-4">
                        <h4 className="font-mono text-[8px] font-black tracking-widest text-[#EA4812] uppercase mb-3">
                        SERVICE DELIVERABLES
                        </h4>
                        <ul className="grid grid-cols-2 gap-2">
                          {service.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Check size={12} className={`mt-0.5 flex-shrink-0 ${service.bulletColor}`} />
                              <span className="font-sans text-[12px] text-gray-600">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </div>

    </div>
  );
};
