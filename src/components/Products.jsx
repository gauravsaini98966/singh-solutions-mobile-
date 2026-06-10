import { useEffect, useRef } from "react";

const categories = [
  {
    icon: "🍎",
    title: "iPhone",
    desc: "Latest Apple iPhones — new & refurbished with warranty",
    tag: "Premium",
    tagColor: "from-gray-400 to-gray-600",
    items: ["iPhone 16 Pro Max", "iPhone 15 Series", "iPhone 14 Series", "All models available"],
    glow: "cyan",
  },
  {
    icon: "🤖",
    title: "Android Phones",
    desc: "Samsung, OnePlus, Vivo, Oppo, Realme & all top brands",
    tag: "Bestseller",
    tagColor: "from-green-500 to-emerald-600",
    items: ["Samsung Galaxy", "OnePlus Series", "Vivo / Oppo", "Budget to Flagship"],
    glow: "purple",
  },
  {
    icon: "🛡️",
    title: "Phone Covers",
    desc: "Designer, premium & branded covers for all models",
    tag: "Trending",
    tagColor: "from-pink-500 to-rose-600",
    items: ["Versace / Barbie / RCB", "Nimmi Premium Covers", "Punjabi Designs", "Fashion Cases"],
    glow: "pink",
  },
  {
    icon: "🎧",
    title: "Accessories",
    desc: "Earphones, chargers, power banks, cables & more",
    tag: "Variety",
    tagColor: "from-blue-500 to-indigo-600",
    items: ["Marshall Speakers", "Power Banks", "Earbuds / Headphones", "Smartwatches"],
    glow: "blue",
  },
  {
    icon: "🔒",
    title: "Screen Guards",
    desc: "Tempered glass & privacy guards for all devices",
    tag: "Essential",
    tagColor: "from-yellow-500 to-amber-600",
    items: ["Tempered Glass", "Privacy Guard", "Matte Finish", "Anti-Blue Light"],
    glow: "yellow",
  },
  {
    icon: "📶",
    title: "Jio Services",
    desc: "New SIM, recharge, plans & all Jio services",
    tag: "Official",
    tagColor: "from-blue-600 to-blue-800",
    items: ["New SIM Activation", "Postpaid Plans", "Fiber Connection", "VIP Numbers"],
    glow: "blue",
  },
];

const glowColors = {
  cyan: "hover:shadow-cyan-500/30 hover:border-cyan-500/50",
  purple: "hover:shadow-purple-500/30 hover:border-purple-500/50",
  pink: "hover:shadow-pink-500/30 hover:border-pink-500/50",
  blue: "hover:shadow-blue-500/30 hover:border-blue-500/50",
  yellow: "hover:shadow-yellow-500/30 hover:border-yellow-500/50",
};

export default function Products() {
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
    <section id="products" ref={ref} className="py-24 relative bg-gray-950">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 text-cyan-400 text-sm font-semibold tracking-widest mb-4">
            <div className="w-8 h-px bg-cyan-400" />
            OUR PRODUCTS
            <div className="w-8 h-px bg-cyan-400" />
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-4">
            Everything You <span className="text-cyan-400 neon-text">Need</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From the latest iPhones to budget Androids, premium accessories to Jio services — we've got it all.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className={`reveal card-3d bg-gray-900/80 border border-gray-800 rounded-2xl p-6 group cursor-pointer hover:shadow-2xl transition-all duration-500 ${glowColors[cat.glow]}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl group-hover:scale-110 transition-transform duration-300">{cat.icon}</div>
                <span className={`bg-gradient-to-r ${cat.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                  {cat.tag}
                </span>
              </div>
              <h3 className="font-orbitron text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{cat.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{cat.desc}</p>
              <ul className="space-y-1">
                {cat.items.map((item, j) => (
                  <li key={j} className="text-gray-300 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/919671634017?text=Hi!%20I'm%20interested%20in%20${encodeURIComponent(cat.title)}`}
                target="_blank"
                rel="noreferrer"
                className="mt-5 w-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 text-cyan-400 py-2.5 rounded-xl font-semibold text-sm hover:bg-cyan-500/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                💬 Enquire on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
