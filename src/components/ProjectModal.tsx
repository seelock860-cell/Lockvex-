import { useState, useEffect } from 'react';
import { X, ExternalLink, Laptop, Smartphone, Tablet, CheckCircle, MessageSquare } from 'lucide-react';
import { ProjectItem, createWhatsAppLink, WHATSAPP_DISPLAY_NUMBER } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const deviceWidthClass = {
    desktop: 'w-full',
    tablet: 'max-w-[768px]',
    mobile: 'max-w-[390px]'
  }[deviceView];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      
      {/* Modal Dialog */}
      <div 
        className="relative w-full max-w-5xl bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-black/60">
          <div className="flex items-center gap-3">
            <span className="text-amber-400 font-extrabold text-base">LOCKVEX ⚡</span>
            <span className="text-neutral-700">|</span>
            <div className="text-xs text-neutral-400 flex items-center gap-2">
              <span className="text-white font-semibold">{project.title}</span>
              <span aria-hidden="true">·</span>
              <span className="text-amber-400/90">{project.typeLabel}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Viewport switch controls */}
            <div className="hidden sm:flex items-center gap-1 p-1 bg-neutral-900 rounded-lg border border-neutral-800">
              <button
                type="button"
                onClick={() => setDeviceView('desktop')}
                className={`p-1.5 rounded text-xs transition-colors ${
                  deviceView === 'desktop' ? 'bg-amber-400 text-black font-semibold' : 'text-neutral-400 hover:text-white'
                }`}
                title="Desktop View"
              >
                <Laptop className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setDeviceView('tablet')}
                className={`p-1.5 rounded text-xs transition-colors ${
                  deviceView === 'tablet' ? 'bg-amber-400 text-black font-semibold' : 'text-neutral-400 hover:text-white'
                }`}
                title="Tablet View"
              >
                <Tablet className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setDeviceView('mobile')}
                className={`p-1.5 rounded text-xs transition-colors ${
                  deviceView === 'mobile' ? 'bg-amber-400 text-black font-semibold' : 'text-neutral-400 hover:text-white'
                }`}
                title="Mobile View"
              >
                <Smartphone className="w-4 h-4" />
              </button>
            </div>

            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-4 sm:p-8 space-y-8 bg-neutral-950">
          
          {/* Simulated Browser Window / Device Container */}
          <div className="flex justify-center transition-all duration-300">
            <div className={`transition-all duration-300 ${deviceWidthClass}`}>
              <div className="rounded-xl overflow-hidden border border-neutral-800 bg-black shadow-xl">
                {/* Browser top chrome mockup */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-900/90 border-b border-neutral-800 text-xs text-neutral-400 font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                    <span className="ml-2 text-neutral-500 hidden sm:inline">preview.lockvex.dev/{project.id}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-amber-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span>{project.category}</span>
                  </div>
                </div>

                {/* Screenshot Media */}
                <div className="relative aspect-[16/10] bg-neutral-900 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('/assets/images/lockvex_hero_mockup')) {
                        target.src = '/assets/images/lockvex_hero_mockup_1793721008452.jpg';
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="text-xl font-bold">{project.title}</h4>
                    <p className="text-xs text-neutral-300">{project.summary}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-neutral-900">
            <div className="md:col-span-2 space-y-4">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-1">Project Overview</h4>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {project.overview}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">Key Built-In Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                      <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions & Order Callout */}
            <div className="bg-black border border-neutral-800 rounded-xl p-5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-1">Classification</span>
                <span className="text-sm font-semibold text-white block mb-4">
                  {project.typeLabel} ({project.category})
                </span>

                <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-1">Direct Contact</span>
                <span className="text-xs text-amber-400 font-mono block mb-4">
                  WhatsApp: {WHATSAPP_DISPLAY_NUMBER}
                </span>
              </div>

              <div className="space-y-2 pt-2">
                <a
                  href={createWhatsAppLink(`Hello LOCKVEX ⚡, I saw your ${project.title} (${project.typeLabel}) and I want to build a similar website for my business.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs uppercase tracking-wider font-bold bg-amber-400 text-black hover:bg-amber-300 rounded-lg transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-black" />
                  <span>Order Website Like This</span>
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full text-center py-2 text-xs text-neutral-400 hover:text-white transition-colors"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
