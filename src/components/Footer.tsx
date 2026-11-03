import { MessageSquare, ArrowUp } from 'lucide-react';
import { createWhatsAppLink, WHATSAPP_DISPLAY_NUMBER } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-neutral-900 text-neutral-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center justify-between pb-12 border-b border-neutral-900">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-3">
            <a 
              href="#" 
              className="text-2xl font-extrabold tracking-tight text-white hover:text-amber-400 transition-colors inline-flex items-center gap-1.5"
            >
              <span>LOCKVEX</span>
              <span className="text-amber-400 text-xl">⚡</span>
            </a>
            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              Website design and development brand crafting high-performance, conversion-oriented digital experiences for growing businesses.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-neutral-300">
            <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
            <a href="#services" className="hover:text-amber-400 transition-colors">Services</a>
            <a href="#work" className="hover:text-amber-400 transition-colors">Work</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
          </div>

          {/* WhatsApp Direct */}
          <div className="md:col-span-3 flex flex-col md:items-end gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500">
              WhatsApp Contact
            </span>
            <a
              href={createWhatsAppLink("Hello LOCKVEX ⚡, I would like to inquire about your website design services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold font-mono text-white hover:text-amber-400 transition-colors group"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span>{WHATSAPP_DISPLAY_NUMBER}</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          <p>© {new Date().getFullYear()} LOCKVEX ⚡. All rights reserved. Professional Website Design & Development.</p>
          
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
