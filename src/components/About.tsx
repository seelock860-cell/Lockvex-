import { ShieldCheck, Zap, Smartphone, Target } from 'lucide-react';
import { createWhatsAppLink, WHATSAPP_DISPLAY_NUMBER } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: Zap,
      title: "Ultra-Fast Loading",
      description: "Clean modern code and optimized assets guarantee instant page loads, keeping visitors engaged from the first second."
    },
    {
      icon: Smartphone,
      title: "100% Mobile Responsive",
      description: "Every website is crafted mobile-first to look stunning and function seamlessly across smartphones, tablets, laptops, and 4K displays."
    },
    {
      icon: Target,
      title: "Conversion Focused",
      description: "Strategic layouts and direct call-to-actions designed to turn casual visitors into paying clients and WhatsApp inquiries."
    },
    {
      icon: ShieldCheck,
      title: "Personalized Support",
      description: "Direct communication on WhatsApp throughout the design process, ensuring your exact vision is brought to life."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-neutral-950 border-b border-neutral-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 mb-3">
            <span>About The Brand</span>
            <span aria-hidden="true">·</span>
            <span className="text-neutral-400">LOCKVEX ⚡</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Helping Businesses Build a <span className="text-amber-400">Commanding</span> Online Presence.
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            <strong className="text-white">LOCKVEX ⚡</strong> is a dedicated website design and development brand committed to transforming how businesses connect with their customers online. In today’s competitive market, a generic website is not enough — your business deserves a sleek, professional digital presence that reflects quality, builds customer trust, and drives real commercial results.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-black border border-neutral-800/80 hover:border-amber-400/50 p-6 rounded-xl transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-5 group-hover:border-amber-400/40 group-hover:bg-amber-400/10 transition-colors">
                  <Icon className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Brand Mission Callout */}
        <div className="p-8 rounded-2xl bg-black border border-neutral-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Ready to take your business online with confidence?
            </h3>
            <p className="text-sm text-neutral-400">
              Speak directly with LOCKVEX on WhatsApp to discuss your goals, timeline, and design preferences.
            </p>
          </div>

          <a
            href={createWhatsAppLink("Hello LOCKVEX ⚡, I read about your website design services and would like to talk about a project.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs uppercase tracking-wider font-bold bg-white text-black hover:bg-amber-400 transition-all shrink-0"
          >
            <span>Talk on WhatsApp ({WHATSAPP_DISPLAY_NUMBER})</span>
          </a>
        </div>

      </div>
    </section>
  );
}
