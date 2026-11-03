import { MessageSquare } from 'lucide-react';
import { createWhatsAppLink, WHATSAPP_DISPLAY_NUMBER } from '../data/portfolioData';

export default function FloatingWhatsApp() {
  return (
    <aside 
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3"
    >
      {/* Tooltip on hover / desktop callout */}
      <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900/95 border border-neutral-800 text-xs text-neutral-200 shadow-xl backdrop-blur-sm pointer-events-none transition-all">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
        <span className="font-semibold text-white">Chat on WhatsApp:</span>
        <span className="font-mono text-amber-400">{WHATSAPP_DISPLAY_NUMBER}</span>
      </div>

      {/* Pumping WhatsApp Action Button */}
      <a
        href={createWhatsAppLink("Hello LOCKVEX ⚡, I am browsing your portfolio and would like to talk about building a website.")}
        target="_blank"
        rel="noopener noreferrer"
        className="animate-pump relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-105 active:scale-95 transition-transform group cursor-pointer focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
        aria-label={`Chat with LOCKVEX on WhatsApp at ${WHATSAPP_DISPLAY_NUMBER}`}
        title={`Chat with LOCKVEX on WhatsApp (${WHATSAPP_DISPLAY_NUMBER})`}
      >
        {/* Real WhatsApp Icon representation */}
        <MessageSquare className="w-7 h-7 fill-white text-white group-hover:scale-110 transition-transform" />

        {/* Small live badge indicator */}
        <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-black border-2 border-[#25D366] flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
        </span>
      </a>
    </aside>
  );
}
