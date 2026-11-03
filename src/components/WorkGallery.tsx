import { useState } from 'react';
import { Eye, ExternalLink, MessageSquare } from 'lucide-react';
import { PROJECTS, ProjectItem, createWhatsAppLink } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function WorkGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = [
    'All',
    'Business Websites',
    'E-commerce Websites',
    'Restaurant Websites',
    'Real Estate Websites',
    'School Websites',
    'Hotel Websites',
    'Portfolio Websites'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="py-20 md:py-28 bg-neutral-950 border-b border-neutral-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 mb-3">
              <span>Selected Works</span>
              <span aria-hidden="true">·</span>
              <span className="text-neutral-400">Portfolio Gallery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Real Designs for <span className="gold-gradient-text">Real Impact</span>.
            </h2>
          </div>

          <p className="text-sm text-neutral-400 max-w-sm">
            Explore our curated showcase of responsive website builds and concept models. Click any design to launch the interactive live preview.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap shrink-0 transition-all ${
                selectedCategory === cat
                  ? 'bg-amber-400 text-black font-bold shadow-sm'
                  : 'bg-black text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-black border border-neutral-800/90 rounded-2xl overflow-hidden flex flex-col hover:border-amber-400/50 transition-all duration-300 group shadow-lg"
            >
              {/* Screenshot Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900 border-b border-neutral-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                {/* Concept Project Badge - Clear identification without messy pills */}
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm border border-neutral-800 text-[11px] font-mono text-amber-400 px-2.5 py-1 rounded">
                  {project.typeLabel}
                </div>

                {/* Quick overlay preview button */}
                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 backdrop-blur-[2px] transition-opacity cursor-pointer"
                  aria-label={`Preview ${project.title}`}
                >
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black text-xs font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Launch Preview</span>
                  </span>
                </button>
              </div>

              {/* Project Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-neutral-400 font-mono mb-1.5 flex items-center gap-1.5">
                    <span>{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-amber-400">{project.typeLabel}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                    {project.summary}
                  </p>
                </div>

                {/* Action Buttons: View Website + Quick WhatsApp */}
                <div className="pt-4 border-t border-neutral-900 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs uppercase tracking-wider font-bold bg-white text-black hover:bg-neutral-200 transition-all whitespace-nowrap shrink-0 group/view"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>View Website</span>
                  </button>

                  <a
                    href={createWhatsAppLink(`Hello LOCKVEX ⚡, I would like to build a website similar to your project: ${project.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-neutral-300 hover:text-amber-400 border border-neutral-800 hover:border-amber-400/40 transition-colors whitespace-nowrap shrink-0"
                    title="Inquire on WhatsApp"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Project Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
