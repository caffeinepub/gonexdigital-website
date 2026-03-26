import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#0B0F1A]/95 backdrop-blur-md border-b border-white/5 shadow-lg"
          : "bg-[#0B0F1A]/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          data-ocid="nav.link"
          className="flex items-center gap-2 group"
        >
          <img
            src="/assets/uploads/untitled_design_8_-removebg-preview-picsart-aiimageenhancer-019d2b3a-9901-72fc-bd80-e0792a57c575-1.png"
            alt="Gonexdigital Logo"
            className="h-10 w-auto object-contain"
          />
          <span className="text-white font-bold text-lg tracking-tight">
            Gonexdigital
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid="nav.link"
              className="text-[#A7B2C8] hover:text-white text-sm font-semibold transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="https://tally.so/r/44LKKA"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="nav.primary_button"
            className="btn-gradient text-white text-sm font-bold px-6 py-2.5 rounded-full tracking-wide"
          >
            Start Your Project
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          <div className="w-6 h-0.5 bg-white mb-1.5" />
          <div className="w-6 h-0.5 bg-white mb-1.5" />
          <div className="w-6 h-0.5 bg-white" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0B0F1A]/98 border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid="nav.link"
              className="text-[#A7B2C8] hover:text-white text-sm font-semibold tracking-wide"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://tally.so/r/44LKKA"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="nav.primary_button"
            className="btn-gradient text-white text-sm font-bold px-6 py-2.5 rounded-full text-center tracking-wide"
          >
            Start Your Project
          </a>
        </div>
      )}
    </nav>
  );
}
