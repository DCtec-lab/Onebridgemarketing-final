import { FC, useState, useEffect, MouseEvent } from "react";
import { Logo } from "./Logo";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const TALLY_HREF = "#tally-open=684DGe&tally-emoji-text=👋&tally-emoji-animation=wave";

export const Navbar: FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mouseNearTop, setMouseNearTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (e: globalThis.MouseEvent) => {
      if (e.clientY <= 60) {
        setMouseNearTop(true);
        setHidden(false);
      } else if (!mobileMenuOpen) {
        setMouseNearTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [lastScrollY, mobileMenuOpen]);

  const scrollToHash = (hash: string) => {
    setMobileMenuOpen(false);
    if (!isHome) {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleAuditClick = () => {
    window.location.href = TALLY_HREF;
  };

  const isVisible = mouseNearTop || !hidden || mobileMenuOpen;

  const navLinks = [
    { label: "Services", hash: "#services" },
    { label: "Case Studies", path: "/case-studies" },
    { label: "Process", path: "/process" },
    { label: "About", path: "/about" },
  ];

  return (
    <nav
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled
          ? "py-3 glass-nav-light shadow-sm border-b border-gray-200/50"
          : "py-5 bg-transparent"
      }`}
      onMouseEnter={() => setMouseNearTop(true)}
      onMouseLeave={() => !mobileMenuOpen && setMouseNearTop(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <Logo size={42} lightText={false} />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((item) =>
                item.hash ? (
                  <button
                    key={item.label}
                    onClick={() => scrollToHash(item.hash!)}
                    className="font-sans font-medium text-[15px] text-gray-700 hover:text-orange-brand transition-colors duration-200 py-2 relative group bg-transparent border-0 cursor-pointer"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-brand transition-all duration-300 group-hover:w-full" />
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    to={item.path!}
                    className={`font-sans font-medium text-[15px] transition-colors duration-200 py-2 relative group ${
                      location.pathname === item.path ? "text-orange-brand" : "text-gray-700 hover:text-orange-brand"
                    }`}
                  >
                    {item.label}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-orange-brand transition-all duration-300 group-hover:w-full ${
                      location.pathname === item.path ? "w-full" : "w-0"
                    }`} />
                  </Link>
                )
              )}
            </div>

            <button
              onClick={handleAuditClick}
              className="bg-orange-brand hover:bg-orange-hover text-white font-sans font-bold text-sm tracking-wider uppercase px-5 py-3 rounded shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              Free Audit
            </button>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-orange-brand focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 glass-nav-light border-b border-gray-200/80 shadow-xl py-6 px-4 flex flex-col gap-4 animate-fadeIn md:hidden">
          {navLinks.map((item) =>
            item.hash ? (
              <button
                key={item.label}
                onClick={() => scrollToHash(item.hash!)}
                className="font-sans font-semibold text-lg text-gray-800 hover:text-orange-brand transition-colors px-4 py-2 hover:bg-gray-100/50 rounded-lg text-left bg-transparent border-0 cursor-pointer"
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={item.label}
                to={item.path!}
                className={`font-sans font-semibold text-lg transition-colors px-4 py-2 hover:bg-gray-100/50 rounded-lg ${
                  location.pathname === item.path ? "text-orange-brand" : "text-gray-800 hover:text-orange-brand"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
          <hr className="border-gray-200 my-1" />
          <button
            onClick={handleAuditClick}
            className="bg-orange-brand hover:bg-orange-hover text-white text-center font-sans font-bold tracking-wider uppercase py-3 rounded-lg shadow-md transition-all cursor-pointer"
          >
            Free Audit
          </button>
        </div>
      )}
    </nav>
  );
};
