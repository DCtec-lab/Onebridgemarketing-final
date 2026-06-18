import { FC, MouseEvent } from "react";
import { Logo } from "./Logo";
import { Instagram, Twitter, Youtube, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const TALLY_HREF = "#tally-open=684DGe&tally-emoji-text=👋&tally-emoji-animation=wave";

export const Footer: FC = () => {
  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#") && !href.includes("tally")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <footer id="footer" className="bg-[#FFFFFF] border-t border-gray-200/80 pt-20 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-gray-100">
          
          {/* Column 1: Brand & Description (span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/">
              <Logo size={40} lightText={false} />
            </Link>
            <p className="font-sans text-gray-500 text-sm sm:text-[15px] leading-relaxed max-w-sm">
              The creative digital growth partner dedicated to seeing your business thrive in the modern landscape.
            </p>
            
            {/* Social Icons row */}
            <div id="footer-social-row" className="flex items-center gap-4.5 pt-2">
              <a
                href="https://www.instagram.com/onebridgemarketing"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-gray-50 border border-gray-200 text-gray-600 hover:bg-orange-brand hover:border-orange-brand hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/onebridge-marketing/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-gray-50 border border-gray-200 text-gray-600 hover:bg-orange-brand hover:border-orange-brand hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://www.facebook.com/people/Onebridge-Marketing/61590292896746/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-gray-50 border border-gray-200 text-gray-600 hover:bg-orange-brand hover:border-orange-brand hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Services List (span 2.5) */}
          <div className="lg:col-span-2.5 space-y-5">
            <h4 className="font-mono text-xs font-bold tracking-widest text-[#0A192F] uppercase">
              SERVICES
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Social Media", href: "#services" },
                { name: "Content Creation", href: "#services" },
                { name: "Meta & Google Ads", href: "#services" },
                { name: "Email Marketing", href: "#services" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="font-sans text-sm text-gray-500 hover:text-orange-brand transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company (span 2.5) */}
          <div className="lg:col-span-2.5 space-y-5">
            <h4 className="font-mono text-xs font-bold tracking-widest text-[#0A192F] uppercase">
              COMPANY
            </h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about", isPage: true },
                { name: "Case Studies", href: "/case-studies", isPage: true },
                { name: "Our Process", href: "/process", isPage: true },
                { name: "Contact", href: TALLY_HREF, isPage: false },
              ].map((link, idx) => (
                <li key={idx}>
                  {link.isPage ? (
                    <Link
                      to={link.href}
                      className="font-sans text-sm text-gray-500 hover:text-orange-brand transition-colors"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="font-sans text-sm text-gray-500 hover:text-orange-brand transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: CTA (span 3) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-mono text-xs font-bold tracking-widest text-[#0A192F] uppercase">
              GET STARTED
            </h4>
            <p className="font-sans text-sm text-gray-500 leading-relaxed">
              Ready to grow your brand? Get a free digital audit and see exactly where your biggest opportunities are.
            </p>
            <a
              href={TALLY_HREF}
              className="inline-flex items-center gap-2 bg-orange-brand hover:bg-orange-hover text-white font-sans font-bold text-sm tracking-wider uppercase px-5 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Free Audit <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8">
          <p className="font-sans text-xs text-gray-400 text-center sm:text-left">
            © 2026 OneBridge Marketing. All rights reserved.
          </p>
          <p className="font-mono text-xs text-gray-400 tracking-widest uppercase">
            Done-For-You Digital Growth
          </p>
        </div>
      </div>
    </footer>
  );
};