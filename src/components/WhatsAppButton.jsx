import { useState } from "react";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {hovered && (
        <div className="bg-gray-900 border border-green-500/30 rounded-2xl p-4 shadow-2xl animate-fade-in max-w-xs">
          <div className="text-white font-bold mb-1">💬 Chat with us!</div>
          <div className="text-gray-400 text-sm mb-3">Singh's Solution Mobile Shop</div>
          <div className="space-y-2">
            <a href="https://wa.me/919671634017?text=Hi%20Singh's%20Solution!%20I%20need%20help." target="_blank" rel="noreferrer"
              className="flex items-center gap-2 text-green-400 text-sm hover:text-green-300 transition-colors">
              📱 Shubham: 96716-34017
            </a>
            <a href="https://wa.me/918684932498?text=Hi%20Singh's%20Solution!%20I%20need%20help." target="_blank" rel="noreferrer"
              className="flex items-center gap-2 text-green-400 text-sm hover:text-green-300 transition-colors">
              📱 Sahil: 86849-32498
            </a>
          </div>
        </div>
      )}

      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-green-500/30 animate-ping" />
        <a
          href="https://wa.me/919671634017?text=Hi%20Singh's%20Solution!%20I'm%20interested%20in%20your%20products."
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="relative wa-btn w-16 h-16 rounded-full flex items-center justify-center text-3xl transition-all duration-300"
          aria-label="WhatsApp"
        >
          💬
        </a>
      </div>
    </div>
  );
}
