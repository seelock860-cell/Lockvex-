import { useState, FormEvent } from 'react';
import { MessageSquare, Send, CheckCircle2, Clock, Shield } from 'lucide-react';
import { createWhatsAppLink, WHATSAPP_DISPLAY_NUMBER } from '../data/portfolioData';

export default function Contact() {
  const [fullName, setFullName] = useState('');
  const [clientWhatsApp, setClientWhatsApp] = useState('');
  const [websiteType, setWebsiteType] = useState('Business Website');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const websiteTypes = [
    'Business Website',
    'E-commerce Website',
    'Restaurant Website',
    'Real Estate Website',
    'School Website',
    'Hotel Website',
    'Portfolio Website',
    'Other Custom Website'
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !clientWhatsApp.trim()) return;

    // Construct the formatted WhatsApp message
    const formattedText = 
      `*New Website Project Inquiry — LOCKVEX ⚡*\n\n` +
      `👤 *Name:* ${fullName.trim()}\n` +
      `📱 *Client WhatsApp:* ${clientWhatsApp.trim()}\n` +
      `🌐 *Type of Website:* ${websiteType}\n` +
      `📝 *Project Details:* ${message.trim() || 'Ready to discuss requirements'}`;

    const url = createWhatsAppLink(formattedText);
    
    // Open WhatsApp
    window.open(url, '_blank', 'noopener,noreferrer');
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-black border-b border-neutral-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct WhatsApp Contact Card */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 mb-3">
                <span>Start Your Project</span>
                <span aria-hidden="true">·</span>
                <span className="text-neutral-400">Direct Contact</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Let's Build <span className="gold-gradient-text">Your Website</span>.
              </h2>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                Connect directly with LOCKVEX. We discuss your business needs, plan your ideal website layout, and deliver high performance results.
              </p>
            </div>

            {/* Official WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                Official WhatsApp Channel
              </span>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-neutral-400 block">WhatsApp Number:</span>
                  <span className="text-2xl font-bold font-mono text-white tracking-wide">
                    {WHATSAPP_DISPLAY_NUMBER}
                  </span>
                </div>
              </div>

              <p className="text-xs text-neutral-400 pt-2 border-t border-neutral-900">
                Direct chat with the developer. Fast responses, straightforward consultation, zero spam.
              </p>

              {/* Instant WhatsApp Button */}
              <a
                href={createWhatsAppLink("Hello LOCKVEX ⚡, I would like to get a quote to build a website for my business.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl text-xs uppercase tracking-wider font-bold bg-white text-black hover:bg-amber-400 transition-all shadow-md group"
              >
                <MessageSquare className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
                <span>Open Direct WhatsApp Chat</span>
              </a>
            </div>

            {/* Reassurance points */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs text-neutral-300">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Quick turnaround with fast updates during the build</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-neutral-300">
                <Shield className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Modern, secure, and clean code crafted specifically for your business</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-2">
              Tell Us About Your Website
            </h3>
            <p className="text-xs text-neutral-400 mb-8">
              Fill in the form below and click submit to dispatch your project brief directly to our WhatsApp.
            </p>

            {formSubmitted ? (
              <div className="p-6 rounded-xl bg-black border border-emerald-500/30 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">Inquiry Ready for WhatsApp!</h4>
                <p className="text-xs text-neutral-300 max-w-md mx-auto">
                  Your project brief has been formatted. If your WhatsApp did not open automatically, click the button below:
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href={createWhatsAppLink(`*Website Project Inquiry — LOCKVEX ⚡*\n👤 *Name:* ${fullName}\n📱 *WhatsApp:* ${clientWhatsApp}\n🌐 *Type:* ${websiteType}\n📝 *Details:* ${message}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs uppercase tracking-wider font-bold bg-amber-400 text-black hover:bg-amber-300 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message on WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFullName('');
                      setClientWhatsApp('');
                      setMessage('');
                    }}
                    className="px-4 py-2 text-xs text-neutral-400 hover:text-white"
                  >
                    Reset Form
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                    Full Name <span className="text-amber-400">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3 rounded-lg bg-black border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm transition-colors"
                  />
                </div>

                {/* WhatsApp Number */}
                <div>
                  <label htmlFor="clientWhatsApp" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                    Your WhatsApp Number <span className="text-amber-400">*</span>
                  </label>
                  <input
                    id="clientWhatsApp"
                    type="tel"
                    required
                    value={clientWhatsApp}
                    onChange={(e) => setClientWhatsApp(e.target.value)}
                    placeholder="e.g. 09123456789 or +234..."
                    className="w-full px-4 py-3 rounded-lg bg-black border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm transition-colors"
                  />
                </div>

                {/* Type of Website */}
                <div>
                  <label htmlFor="websiteType" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                    Type of Website <span className="text-amber-400">*</span>
                  </label>
                  <select
                    id="websiteType"
                    value={websiteType}
                    onChange={(e) => setWebsiteType(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-black border border-neutral-800 text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm transition-colors"
                  >
                    {websiteTypes.map((type) => (
                      <option key={type} value={type} className="bg-neutral-900 text-white">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                    Project Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your business, desired features, brand style, or any sample sites you like..."
                    className="w-full px-4 py-3 rounded-lg bg-black border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm transition-colors resize-y"
                  />
                </div>

                {/* Submit & WhatsApp Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-xs uppercase tracking-wider font-extrabold bg-amber-400 text-black hover:bg-amber-300 transition-all shadow-md group cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
                    <span>Send Inquiry to WhatsApp ({WHATSAPP_DISPLAY_NUMBER})</span>
                  </button>

                  <p className="text-[11px] text-neutral-500 text-center mt-3 font-mono">
                    Form seamlessly connects you to WhatsApp with your details prefilled.
                  </p>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
