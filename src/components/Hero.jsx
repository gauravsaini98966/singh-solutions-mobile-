import { useEffect, useRef, useState } from "react";

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  size: `${Math.random() * 4 + 2}px`,
  duration: `${Math.random() * 10 + 8}s`,
  delay: `${Math.random() * 8}s`,
}));

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouse = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * -20,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen hero-bg grid-bg flex items-center overflow-hidden">
      {/* Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 pt-24 pb-12 grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Text */}
        <div className="space-y-6 z-10">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold tracking-wider">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            HISAR'S #1 MOBILE SHOP
          </div>

          <h1 className="font-orbitron text-4xl md:text-6xl font-black leading-tight">
            <span className="shimmer">SINGH'S</span>
            <br />
            <span className="text-white neon-text">SOLUTION</span>
            <br />
            <span className="text-gray-400 text-2xl md:text-3xl font-normal">Mobile Shopee</span>
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
            Your Tech, Our Solution! 🚀 Premium mobile phones, accessories, covers & Jio services — all under one roof at <strong className="text-cyan-400">Old Court Complex, Hisar</strong>.
          </p>

          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 bg-gray-800/50 border border-gray-700 px-3 py-2 rounded-lg text-sm">
              <span className="text-green-400">✓</span> 100% Genuine Products
            </div>
            <div className="flex items-center gap-2 bg-gray-800/50 border border-gray-700 px-3 py-2 rounded-lg text-sm">
              <span className="text-green-400">✓</span> 0% Finance Available
            </div>
            <div className="flex items-center gap-2 bg-gray-800/50 border border-gray-700 px-3 py-2 rounded-lg text-sm">
              <span className="text-green-400">✓</span> Best Prices Guaranteed
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/919671634017?text=Hi%20Singh's%20Solution!%20I'm%20interested%20in%20your%20products."
              target="_blank"
              rel="noreferrer"
              className="wa-btn text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 transition-all duration-300"
            >
              💬 WhatsApp Now
            </a>
            <a
              href="tel:+919671634017"
              className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-500/10 transition-all duration-300"
            >
              📞 Call Us
            </a>
          </div>

          <div className="flex gap-6 pt-2">
            <div className="text-center">
              <div className="font-orbitron text-3xl font-bold text-cyan-400 neon-text">1K+</div>
              <div className="text-gray-400 text-sm">Happy Customers</div>
            </div>
            <div className="w-px bg-gray-700" />
            <div className="text-center">
              <div className="font-orbitron text-3xl font-bold text-yellow-400 neon-gold">5★</div>
              <div className="text-gray-400 text-sm">Rating</div>
            </div>
            <div className="w-px bg-gray-700" />
            <div className="text-center">
              <div className="font-orbitron text-3xl font-bold text-purple-400">10+</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
          </div>
        </div>

        {/* 3D Phone Display */}
        <div
          className="relative flex items-center justify-center z-10"
          style={{
            transform: `perspective(1000px) rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg)`,
            transition: "transform 0.1s ease",
          }}
        >
          {/* Outer ring */}
          <div className="absolute w-80 h-80 rounded-full border border-cyan-500/20 animate-spin" style={{ animationDuration: "20s" }} />
          <div className="absolute w-64 h-64 rounded-full border border-yellow-500/20 animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }} />

          {/* Phone mockup */}
          <div className="relative animate-float">
            <div className="w-48 h-96 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl border-2 border-gray-600 shadow-2xl neon-border relative overflow-hidden">
              {/* Screen */}
              <div className="absolute inset-2 bg-gradient-to-b from-cyan-900/50 to-blue-900/50 rounded-2xl overflow-hidden scan-line">
                <div className="p-4 space-y-3">
                  <div className="text-xs text-cyan-400 font-orbitron text-center">Singh's Solution</div>
                  <div className="bg-gray-700/50 rounded-xl h-32 flex items-center justify-center text-4xl">📱</div>
                  <div className="space-y-1">
                    <div className="h-2 bg-cyan-500/30 rounded-full w-3/4" />
                    <div className="h-2 bg-cyan-500/20 rounded-full w-1/2" />
                  </div>
                  <div className="grid grid-cols-3 gap-1">
                    {["🔋","🎧","📷","💻","🎮","🔌"].map((icon,i) => (
                      <div key={i} className="bg-gray-700/50 rounded-lg h-10 flex items-center justify-center text-lg">{icon}</div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-3 bg-gray-950 rounded-full" />
              {/* Home button area */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-gray-600 rounded-full" />
            </div>

            {/* Floating badges */}
            <div className="absolute -right-8 top-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs px-3 py-2 rounded-full font-bold shadow-lg animate-float2">
              iPhone ✓
            </div>
            <div className="absolute -left-10 top-24 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-xs px-3 py-2 rounded-full font-bold shadow-lg animate-float" style={{ animationDelay: "1s" }}>
              Android ✓
            </div>
            <div className="absolute -right-12 bottom-16 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-3 py-2 rounded-full font-bold shadow-lg animate-float2" style={{ animationDelay: "0.5s" }}>
              0% Finance
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 animate-bounce">
        <span className="text-xs tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent" />
      </div>
    </section>
  );
}
