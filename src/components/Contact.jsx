import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const msg = `Hi Singh's Solution!%0AName: ${form.name}%0APhone: ${form.phone}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/919671634017?text=${msg}`, "_blank");
  };

  return (
    <section id="contact" ref={ref} className="py-24 bg-gray-950 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 text-cyan-400 text-sm font-semibold tracking-widest mb-4">
            <div className="w-8 h-px bg-cyan-400" />
            CONTACT US
            <div className="w-8 h-px bg-cyan-400" />
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-4">
            Get In <span className="text-cyan-400 neon-text">Touch</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div className="space-y-6 reveal">
            <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="font-orbitron text-lg font-bold text-white mb-2">Our Location</h3>
              <p className="text-gray-300">Shop No. 11, Old Court Complex,<br />Near Khalsa Petrol Pump,<br />Fawara Chowk, Hisar, Haryana — 125001</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <a href="tel:+919671634017" className="bg-gray-900/80 border border-gray-800 rounded-2xl p-5 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 group">
                <div className="text-2xl mb-2">📞</div>
                <div className="text-xs text-gray-400">Shubham Singh</div>
                <div className="text-cyan-400 font-bold group-hover:neon-text">96716-34017</div>
              </a>
              <a href="tel:+918684932498" className="bg-gray-900/80 border border-gray-800 rounded-2xl p-5 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 group">
                <div className="text-2xl mb-2">📞</div>
                <div className="text-xs text-gray-400">Sahil Singh</div>
                <div className="text-purple-400 font-bold">86849-32498</div>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: "⏰", label: "Mon–Sat", sub: "9 AM – 9 PM" },
                { icon: "⏰", label: "Sunday", sub: "10 AM – 7 PM" },
                { icon: "🗺️", label: "Hisar", sub: "Haryana" },
              ].map((item, i) => (
                <div key={i} className="bg-gray-900/60 border border-gray-800 rounded-xl p-3 text-center">
                  <div className="text-xl mb-1">{item.icon}</div>
                  <div className="text-white text-xs font-semibold">{item.label}</div>
                  <div className="text-gray-400 text-xs">{item.sub}</div>
                </div>
              ))}
            </div>

            <a
              href="https://maps.google.com/?q=Old+Court+Complex+Hisar+Haryana"
              target="_blank"
              rel="noreferrer"
              className="block bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-2xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="h-32 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 flex items-center justify-center gap-3">
                <span className="text-4xl">🗺️</span>
                <div>
                  <div className="text-white font-bold">View on Google Maps</div>
                  <div className="text-cyan-400 text-sm">Old Court Complex, Hisar</div>
                </div>
              </div>
            </a>
          </div>

          {/* WhatsApp Form */}
          <div className="reveal">
            <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-8 neon-border">
              <h3 className="font-orbitron text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-2xl">💬</span> Send WhatsApp Message
              </h3>
              <form onSubmit={handleWhatsApp} className="space-y-4">
                <div>
                  <label className="text-gray-400 text-sm mb-1 block">Your Name</label>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Enter your name"
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-1 block">Phone Number</label>
                  <input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="Enter your phone number"
                    type="tel"
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-1 block">Message / Product Inquiry</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us what you need..."
                    rows={4}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full wa-btn text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300"
                >
                  <span className="text-2xl">💬</span> Send via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
