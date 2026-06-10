import { useEffect, useRef, useState } from "react";

const testimonials = [
  { name: "Rohit Yadav", rating: 5, text: "Best mobile shop in Hisar! Got my iPhone at the best price with warranty. Shubham bhai is very helpful.", product: "iPhone 15 Pro" },
  { name: "Shubham Gugal", rating: 5, text: "Excellent service! Got a premium Versace cover for my phone. Quality is outstanding. Highly recommended!", product: "Phone Cover" },
  { name: "Rajinder Singh", rating: 5, text: "0% finance scheme is amazing! Bought Samsung Galaxy on easy EMI without any hidden charges. Great experience.", product: "Samsung Galaxy S24" },
  { name: "Amit Kumar", rating: 5, text: "Very genuine products and best prices. Staff is knowledgeable. My go-to shop for all mobile accessories.", product: "Accessories" },
  { name: "Harpreet Kaur", rating: 5, text: "Got my phone repaired at very reasonable price. Work quality is excellent. Fast service, done in 1 hour!", product: "Phone Repair" },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 relative" style={{ background: "linear-gradient(180deg, #030712 0%, #050510 100%)" }}>
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 text-yellow-400 text-sm font-semibold tracking-widest mb-4">
            <div className="w-8 h-px bg-yellow-400" />
            REVIEWS
            <div className="w-8 h-px bg-yellow-400" />
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-4">
            What Customers <span className="text-yellow-400 neon-gold">Say</span>
          </h2>
        </div>

        <div className="reveal relative">
          <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/50 border border-gray-700/50 rounded-3xl p-8 md:p-12 text-center neon-border-gold min-h-64 flex flex-col items-center justify-center">
            <div className="text-yellow-400 text-3xl mb-4">{"★".repeat(testimonials[active].rating)}</div>
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-6 max-w-2xl italic">
              "{testimonials[active].text}"
            </p>
            <div>
              <div className="font-bold text-white text-lg">{testimonials[active].name}</div>
              <div className="text-cyan-400 text-sm">Purchased: {testimonials[active].product}</div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-300 ${i === active ? "bg-yellow-400 w-8 h-3" : "bg-gray-700 w-3 h-3 hover:bg-gray-500"}`}
              />
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="reveal grid grid-cols-3 gap-6 mt-16">
          {[
            { num: "1000+", label: "Phones Sold", icon: "📱" },
            { num: "5000+", label: "Accessories Sold", icon: "🎧" },
            { num: "500+", label: "Phones Repaired", icon: "🔧" },
          ].map((stat, i) => (
            <div key={i} className="text-center bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="font-orbitron text-2xl md:text-3xl font-bold text-cyan-400 neon-text">{stat.num}</div>
              <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
