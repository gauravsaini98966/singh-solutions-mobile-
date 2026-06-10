export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold font-orbitron text-sm">SS</div>
              <div>
                <div className="font-orbitron font-bold text-lg text-white">Singh's Solution</div>
                <div className="text-xs text-gray-400 tracking-widest">MOBILE SHOPEE</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-xs">
              Your Tech, Our Solution! Hisar's most trusted mobile shop for phones, accessories & repairs since years.
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/singh_s_soultions" target="_blank" rel="noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white text-lg hover:scale-110 transition-transform">
                📸
              </a>
              <a href="https://wa.me/919671634017" target="_blank" rel="noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center text-white text-lg hover:scale-110 transition-transform">
                💬
              </a>
              <a href="tel:+919671634017"
                className="w-10 h-10 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center text-white text-lg hover:scale-110 transition-transform">
                📞
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-orbitron font-bold text-white mb-4 text-sm tracking-wider">QUICK LINKS</h4>
            <ul className="space-y-2">
              {["Home", "Products", "Services", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
                    className="text-gray-400 hover:text-cyan-400 text-sm transition-colors"
                  >
                    → {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-orbitron font-bold text-white mb-4 text-sm tracking-wider">CONTACT</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div>📍 Shop No. 11, Old Court Complex, Near Khalsa Petrol Pump, Fawara Chowk, Hisar — 125001</div>
              <div><a href="tel:+919671634017" className="hover:text-cyan-400 transition-colors">📞 96716-34017 (Shubham)</a></div>
              <div><a href="tel:+918684932498" className="hover:text-purple-400 transition-colors">📞 86849-32498 (Sahil)</a></div>
              <div>⏰ Mon–Sun: 9 AM – 9 PM</div>
            </div>
          </div>
        </div>

        <div className="section-divider mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div>© 2025 Singh's Solution Mobile Shopee. All rights reserved.</div>
          <div className="text-center">
            <span className="text-gray-600">Made with ❤️ by </span>
            <a href="tel:+919896642748" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">
              Gaurav — 9896642748
            </a>
          </div>
          <div className="flex gap-4">
            <span className="text-gray-600">Hisar, Haryana</span>
            <span className="text-gray-600">|</span>
            <span className="text-gray-600">India 🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
