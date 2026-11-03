import { MessageSquare, CheckCircle2 } from 'lucide-react';
import { SERVICES, createWhatsAppLink, WHATSAPP_DISPLAY_NUMBER } from '../data/portfolioData';

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-black border-b border-neutral-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 mb-3">
              <span>What We Build</span>
              <span aria-hidden="true">·</span>
              <span className="text-neutral-400">Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Tailored Websites for <span className="gold-gradient-text">Every Industry</span>.
            </h2>
          </div>

          <p className="text-sm text-neutral-400 max-w-sm">
            Whether you are launching a new enterprise or upgrading an existing brand, our specialized solutions fit your industry needs.
          </p>
        </div>

        {/* 7 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={`bg-neutral-950 border border-neutral-800/90 rounded-2xl overflow-hidden flex flex-col hover:border-amber-400/50 transition-all duration-300 group shadow-lg ${
                index === 6 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Card Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900 border-b border-neutral-800">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to public asset if needed
                    const target = e.currentTarget;
                    if (!target.src.includes('/assets/images/lockvex_hero_mockup')) {
                      target.src = '/assets/images/lockvex_hero_mockup_1793721008452.jpg';
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                
                {/* Number tag without pill enclosure */}
                <div className="absolute top-3 left-3 text-xs font-mono text-amber-400 bg-black/80 px-2 py-0.5 rounded border border-neutral-800">
                  0{index + 1}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-neutral-400 leading-relaxed mb-5">
                    {service.shortDesc}
                  </p>

                  {/* Feature checklist */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-neutral-900 flex items-center justify-between gap-3">
                  <span className="text-[11px] text-neutral-500 font-mono truncate max-w-[150px]">
                    {service.idealFor}
                  </span>

                  <a
                    href={createWhatsAppLink(`Hello LOCKVEX ⚡, I am interested in building a ${service.title} for my business.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-white bg-neutral-900 border border-neutral-700 hover:bg-amber-400 hover:text-black hover:border-amber-400 transition-all whitespace-nowrap shrink-0 group/btn"
                  >
                    <MessageSquare className="w-3 h-3 text-amber-400 group-hover/btn:text-black transition-colors" />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 text-center">
          <p className="text-xs text-neutral-500 font-mono">
            Need a custom feature not listed above? Contact us directly on WhatsApp at{' '}
            <a 
              href={createWhatsAppLink("Hello LOCKVEX ⚡, I have a custom website project requirement.")}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-400 underline underline-offset-4 hover:text-white"
            >
              {WHATSAPP_DISPLAY_NUMBER}
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
