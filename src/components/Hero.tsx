import { ArrowDownRight, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react';
import { createWhatsAppLink, WHATSAPP_DISPLAY_NUMBER } from '../data/portfolioData';
import founderHero from '../assets/images/lockvex_founder_hero.png';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-20 lg:pb-32 bg-black border-b border-neutral-900">
      {/* Subtle background ambient lighting */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none opacity-25 blur-3xl"
        style={{
          background: 'radial-gradient(ellipse at top, rgba(212, 175, 55, 0.3), transparent 70%)'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Brand Tag */}
        <div className="flex items-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded border border-neutral-800 bg-neutral-950 text-xs font-mono tracking-wider uppercase text-neutral-300">
            <span className="font-extrabold text-white">LOCKVEX</span>
            <span className="text-amber-400">⚡</span>
            <span className="text-neutral-600">|</span>
            <span className="text-amber-300 font-medium">Design & Development</span>
          </div>
        </div>

        {/* Hero Grid with Big Picture on the Right Side */}
        <div className="grid grid-cols-12 gap-3.5 sm:gap-6 lg:gap-12 items-center">
          
          {/* Left Column: Headline & Introduction */}
          <div className="col-span-7 sm:col-span-7 lg:col-span-7 flex flex-col justify-center text-left">
            {/* Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] mb-3 sm:mb-6 text-balance">
              We Build <span className="text-white">Professional Websites</span> for{' '}
              <span className="gold-gradient-text">Your Business</span>.
            </h1>

            {/* Short Introduction */}
            <p className="text-xs sm:text-base lg:text-lg text-neutral-300 sm:text-neutral-400 leading-relaxed max-w-xl mb-4 sm:mb-8">
              At <strong className="text-white font-semibold">LOCKVEX ⚡</strong>, we craft fast, elegant, and conversion-focused websites engineered to showcase your brand, captivate your clients, and turn visitors into real paying customers.
            </p>

            {/* Desktop / Tablet Buttons (Hidden on small mobile to place full-width below grid) */}
            <div className="hidden sm:flex flex-row items-center gap-4 mb-8">
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-6 lg:px-7 py-3 lg:py-3.5 rounded-lg text-xs sm:text-sm font-bold bg-white text-black hover:bg-neutral-200 transition-all shadow-md group whitespace-nowrap"
              >
                <span>View My Work</span>
                <ArrowDownRight className="w-4 h-4 text-black group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 lg:px-7 py-3 lg:py-3.5 rounded-lg text-xs sm:text-sm font-bold bg-neutral-900 border border-neutral-700 text-white hover:border-amber-400 hover:text-amber-400 transition-all whitespace-nowrap"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Editorial highlights without pill enclosure (hidden on small mobile for clean density) */}
            <div className="hidden sm:flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-neutral-400 pt-4 border-t border-neutral-900">
              <span className="flex items-center gap-1.5 text-neutral-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Custom Built</span>
              </span>
              <span aria-hidden="true" className="text-neutral-700">·</span>
              <span>100% Mobile Optimized</span>
              <span aria-hidden="true" className="text-neutral-700">·</span>
              <span>Fast Load Speed</span>
              <span aria-hidden="true" className="text-neutral-700">·</span>
              <span className="text-amber-400 font-medium">WhatsApp Support</span>
            </div>
          </div>

          {/* Right Column: BIG Picture on the Right Side */}
          <div className="col-span-5 sm:col-span-5 lg:col-span-5 relative flex justify-center items-center">
            
            {/* Ambient gold glow behind portrait */}
            <div 
              className="absolute -inset-2 rounded-3xl opacity-30 blur-xl pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(245, 158, 11, 0.4) 0%, rgba(212, 175, 55, 0.1) 60%, transparent 80%)'
              }}
              aria-hidden="true"
            />

            {/* Portrait Frame Container */}
            <div className="relative w-full max-w-sm lg:max-w-md aspect-[3/4] rounded-2xl lg:rounded-3xl overflow-hidden border-2 border-neutral-800 bg-neutral-950 p-1 sm:p-1.5 shadow-2xl group transition-all duration-300 hover:border-amber-400/70">
              <div className="relative w-full h-full rounded-xl lg:rounded-2xl overflow-hidden bg-neutral-900">
                <img
                  src={founderHero}
                  alt="LOCKVEX Founder & Lead Web Developer"
                  className="w-full h-full object-cover object-top transform group-hover:scale-[1.03] transition-transform duration-500"
                  loading="eager"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== '/assets/images/lockvex_founder_hero.png') {
                      target.src = '/assets/images/lockvex_founder_hero.png';
                    }
                  }}
                />

                {/* Scrim overlay at the base for typographic legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />

                {/* Founder Info Overlay Card */}
                <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-black/75 backdrop-blur-md border border-neutral-800/90 text-left">
                  <div className="flex items-center justify-between gap-1 mb-0.5">
                    <span className="text-[11px] sm:text-xs font-bold text-white flex items-center gap-1">
                      <span>LOCKVEX</span>
                      <span className="text-amber-400">⚡</span>
                    </span>
                    <span className="flex items-center gap-1 text-[9px] sm:text-[10px] text-emerald-400 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>Online</span>
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-xs text-neutral-300 block truncate">
                    Founder & Lead Developer
                  </span>
                  <a
                    href={createWhatsAppLink("Hello LOCKVEX ⚡, I want to discuss a website project.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[9px] sm:text-[11px] font-mono text-amber-400 hover:text-white transition-colors mt-0.5"
                  >
                    <MessageSquare className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    <span>WhatsApp: {WHATSAPP_DISPLAY_NUMBER}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Subtle decorative gold corner accent on desktop */}
            <div className="absolute -top-3 -right-3 w-10 h-10 lg:w-14 lg:h-14 border-t-2 border-r-2 border-amber-400/50 rounded-tr-2xl pointer-events-none hidden sm:block" />
          </div>

        </div>

        {/* Mobile-Only Action Buttons (Full-Width right below the split on phones) */}
        <div className="flex sm:hidden flex-col gap-2.5 mt-5">
          <a
            href="#work"
            className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-bold bg-white text-black hover:bg-neutral-200 transition-all shadow-md group"
          >
            <span>View My Work</span>
            <ArrowDownRight className="w-4 h-4 text-black group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
          </a>

          <a
            href="#contact"
            className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-bold bg-neutral-900 border border-neutral-700 text-white hover:border-amber-400 hover:text-amber-400 transition-all"
          >
            <span>Contact Me</span>
          </a>

          <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-400 pt-2 border-t border-neutral-900">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
            <span>Fast Turnaround · WhatsApp: {WHATSAPP_DISPLAY_NUMBER}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
