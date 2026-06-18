import { FC, useState, FormEvent, MouseEvent } from "react";
import { Logo } from "./Logo";
import { Instagram, Twitter, Youtube, Send, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer: FC = () => {
  const [newsEmail, setNewsEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!newsEmail) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubscribed(true);
      setNewsEmail("");
    }, 1000);
  };

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
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
            <Logo size={40} lightText={false} />
            <p className="font-sans text-gray-500 text-sm sm:text-[15px] leading-relaxed max-w-sm">
              The creative digital growth partner dedicated to seeing your business thrive in the modern landscape.
            </p>
            
            {/* Social Icons row */}
            <div id="footer-social-row" className="flex items-center gap-4.5 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-gray-50 border border-gray-200 text-gray-600 hover:bg-orange-brand hover:border-orange-brand hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-gray-50 border border-gray-200 text-gray-600 hover:bg-orange-brand hover:border-orange-brand hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Twitter X"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-gray-50 border border-gray-200 text-gray-600 hover:bg-orange-brand hover:border-orange-brand hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="YouTube"
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

          {/* Column 3: Company List (span 2.5) */}
          <div className="lg:col-span-2.5 space-y-5">
            <h4 className="font-mono text-xs font-bold tracking-widest text-[#0A192F] uppercase">
              COMPANY
            </h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about", isPage: true },
                { name: "Case Studies", href: "/case-studies", isPage: true },
                { name: "Our Process", href: "/process", isPage: true },
                { name: "Contact", href: "#audit", isPage: false },
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
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="font-sans text-sm text-gray-500 hover:text-orange-brand transition-colors"
                  >
                    {link.name}
                  </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter Box (span 3) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-mono text-xs font-bold tracking-widest text-[#0A192F] uppercase">
              NEWSLETTER
            </h4>
            <p className="font-sans text-gray-500 text-[13px] leading-relaxed">
              Get growth tips delivered directly to your inbox.
            </p>

            {!subscribed ? (
              <form onSubmit={handleNewsSubmit} className="flex flex-col gap-2">
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={newsEmail}
                  onChange={(e) => setNewsEmail(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-300 text-gray-800 text-sm px-4 py-3 rounded focus:border-orange-brand focus:outline-none focus:bg-white transition-colors"
                />
                
                {/* Custom blue-violet or orange subscriber trigger */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#5D5FEF] hover:bg-[#4B4DCC] text-white font-sans font-bold text-xs tracking-widest uppercase py-3 rounded shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Subscribe
                      <Send size={12} />
                    </>
                  )}
                </button>
              </form>
            ) : (
              /* Subscribed instant feedback */
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-xs flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                <span>Success! You've been subscribed to our tips feed.</span>
              </div>
            )}
          </div>

        </div>

        {/* Subfooter lower credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400">
          <span>
            © {new Date().getFullYear()} ONE BRIDGE MARKETING. ALL RIGHTS RESERVED.
          </span>
          <div className="flex gap-6">
            <a href="#audit" className="hover:text-orange-brand transition-colors">Privacy Policy</a>
            <a href="#audit" className="hover:text-orange-brand transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
