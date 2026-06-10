import { useEffect, useRef } from "react";

const galleryItems = [
  { emoji: "😊", label: "Happy Customer #1", tag: "iPhone 15 Pro" },
  { emoji: "📱", label: "New Arrival", tag: "Samsung Galaxy S25" },
  { emoji: "😄", label: "Happy Customer #2", tag: "OnePlus 13" },
  { emoji: "🛍️", label: "Premium Covers", tag: "Versace & Barbie Collection" },
  { emoji: "🎉", label: "Happy Customer #3", tag: "iPhone 14" },
  { emoji: "🔋", label: "Accessories", tag: "Marshall Speaker" },
  { emoji: "😁", label: "Happy Customer #4", tag: "Vivo V30 Pro" },
  { emoji: "📦", label: "New Stock", tag: "Premium Cases Arrived" },
  { emoji: "🤝", label: "Happy Customer #5", tag: "Samsung A55" },
];

export default function Gallery() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" ref={ref} className="py-24 bg-gray-950 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 text-purple-400 text-sm font-semibold tracking-widest mb-4">
            <div className="w-8 h-px bg-purple-400" />
            HAPPY CUSTOMERS
            <div className="w-8 h-px bg-purple-400" />
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-4">
            Our <span className="text-purple-400" style={{ textShadow: "0 0 20px #a855f7" }}>Gallery</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">Hundreds of happy customers — join the Singh's Solution family!</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`reveal card-3d group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 rounded-2xl overflow-hidden aspect-square flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-500 ${i === 4 ? "md:col-span-1" : ""}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="text-6xl group-hover:scale-125 transition-transform duration-500">{item.emoji}</div>
              <div className="text-center px-4">
                <div className="text-white font-semibold text-sm">{item.label}</div>
                <div className="text-purple-400 text-xs mt-1">{item.tag}</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div className="reveal text-center mt-10">
          <a
            href="https://www.instagram.com/singh_s_soultions"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105"
          >
            <span className="text-xl">📸</span> Follow us on Instagram @singh_s_soultions
          </a>
        </div>
      </div>
    </section>
  );
}
