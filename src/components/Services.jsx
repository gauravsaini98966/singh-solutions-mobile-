import { useEffect, useRef } from "react";

const services = [
  { icon: "🔧", title: "Phone Repairing", desc: "Screen replacement, battery, charging port, speaker & all repairs by expert technicians" },
  { icon: "💰", title: "Buy & Sell Used Phones", desc: "Get best price for your old phone. We buy & sell all brands at fair market value" },
  { icon: "📶", title: "Jio Services", desc: "Official Jio partner — new SIM, plans, postpaid, fiber & VIP number activation" },
  { icon: "💳", title: "0% Finance", desc: "Buy any phone on 0% EMI. Easy monthly installments with minimal documentation" },
  { icon: "🎯", title: "VIP Numbers", desc: "Exclusive VIP & fancy mobile numbers available at competitive prices" },
  { icon: "🚚", title: "Home Delivery", desc: "Get your order delivered to your doorstep anywhere in Hisar" },
];

export default function Services() {
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
    <section id="services" ref={ref} className="py-24 relative" style={{ background: "linear-gradient(180deg, #030712 0%, #0a0a1a 50%, #030712 100%)" }}>
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 text-yellow-400 text-sm font-semibold tracking-widest mb-4">
            <div className="w-8 h-px bg-yellow-400" />
            OUR SERVICES
            <div className="w-8 h-px bg-yellow-400" />
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-4">
            What We <span className="text-yellow-400 neon-gold">Offer</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="reveal group bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-gray-700/50 rounded-2xl p-6 hover:border-yellow-500/40 hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-500 card-3d"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 border border-yellow-500/20">
                {s.icon}
              </div>
              <h3 className="font-orbitron text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="reveal mt-16 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/20 rounded-3xl p-8 text-center neon-border">
          <h3 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-3">
            Need Help? <span className="text-cyan-400">Contact Us Now!</span>
          </h3>
          <p className="text-gray-400 mb-6">Shubham Singh: 96716-34017 | Sahil Singh: 86849-32498</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/919671634017" target="_blank" rel="noreferrer"
              className="wa-btn text-white px-8 py-3 rounded-full font-bold transition-all duration-300">
              💬 WhatsApp: 96716-34017
            </a>
            <a href="tel:+918684932498"
              className="border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-full font-bold hover:bg-cyan-500/10 transition-all duration-300">
              📞 86849-32498
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
