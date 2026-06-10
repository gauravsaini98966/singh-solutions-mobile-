import { useState, useEffect } from "react";

const links = ["Home", "Products", "Services", "Gallery", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-gray-950/95 backdrop-blur-md border-b border-cyan-500/20 py-2" : "bg-transparent py-4"
    }`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 bg-cyan-500 rounded-full opacity-20 animate-ping" />
            <div className="relative w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm font-orbitron">SS</div>
          </div>
          <div>
            <div className="font-orbitron font-bold text-lg leading-tight">
              <span className="text-cyan-400">Singh's</span>
              <span className="text-white"> Solution</span>
            </div>
            <div className="text-xs text-gray-400 tracking-widest">MOBILE SHOP</div>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-semibold tracking-wide relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          <a
            href="https://wa.me/919671634017"
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2 rounded-full font-bold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105"
          >
            📞 Call Now
          </a>
        </div>

        {/* Mobile Menu */}
        <button className="md:hidden text-cyan-400 text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-gray-950/98 border-t border-cyan-500/20 px-4 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <button key={link} onClick={() => scrollTo(link)} className="text-gray-300 hover:text-cyan-400 text-left font-semibold py-2 border-b border-gray-800">
              {link}
            </button>
          ))}
          <a href="https://wa.me/919671634017" target="_blank" rel="noreferrer" className="wa-btn text-white px-5 py-3 rounded-full font-bold text-center transition-all duration-300">
            💬 WhatsApp Us
          </a>
        </div>
      )}
    </nav>
  );
}
