import { FC, useState, useEffect, MouseEvent } from "react";
import { Logo } from "./Logo";
import { Menu, X } from "lucide-react";

export const Navbar: FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mouseNearTop, setMouseNearTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      // Hide navbar when scrolling down, show when scrolling up or near top
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (e: MouseEvent<HTMLElement> | MouseEvent<Document> | globalThis.MouseEvent) => {
      // Show navbar when mouse is within 60px of top
      if (e.clientY <= 60) {
        setMouseNearTop(true);
        setHidden(false);
      } else if (!mobileMenuOpen) {
        setMouseNearTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove as EventListener, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove as EventListener);
    };
  }, [lastScrollY, mobileMenuOpen]);

  const menuItems = [
    { label: "Services", href: "#services" },
    { label: "Results", href: "#results" },
    { label: "Our Process", href: "#process" },
    { label: "Blog", href: "#footer" },
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const isVisible = mouseNearTop || !hidden || mobileMenuOpen;

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
          {/* Brand Logo */}
          <a href="#" className="flex-shrink-0" onClick={(e) => handleNavClick(e, "#")}>
            <Logo size={42} lightText={false} />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="font-sans font-medium text-sm text-[15px] text-gray-700 hover:text-orange-brand transition-colors duration-200 py-2 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-brand transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* CTA Audit button */}
            <a
              href="#audit"
              onClick={(e) => handleNavClick(e, "#audit")}
              className="bg-orange-brand hover:bg-orange-hover text-white font-sans font-bold text-sm tracking-wider uppercase px-5 py-3 rounded shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Free Audit
            </a>
          </div>

          {/* Mobile Menu Button */}
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

      {/* Mobile Sidebar Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="absolute top-full left-0 right-0 glass-nav-light border-b border-gray-200/80 shadow-xl py-6 px-4 flex flex-col gap-4 animate-fadeIn md:hidden"
        >
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="font-sans font-semibold text-lg text-gray-800 hover:text-orange-brand transition-colors px-4 py-2 hover:bg-gray-100/50 rounded-lg"
            >
              {item.label}
            </a>
          ))}
          <hr className="border-gray-200 my-1" />
          <a
            href="#audit"
            onClick={(e) => handleNavClick(e, "#audit")}
            className="bg-orange-brand hover:bg-orange-hover text-white text-center font-sans font-bold tracking-wider uppercase py-3 rounded-lg shadow-md transition-all"
          >
            Free Audit
          </a>
        </div>
      )}
    </nav>
  );
};
