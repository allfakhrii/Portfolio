import { useState, useEffect } from 'react';
import { ExternalLink, ArrowUpRight, X, Check, Globe, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const FEATURED_PROJECTS = [
  {
    id: 'jpandco',
    badge: 'Flagship 01',
    title: 'JP & CO: Business & Management Consulting',
    category: 'Client Solutions',
    role: 'Data & IT Specialist / Full-stack Developer',
    link: 'https://www.jpandco.id',
    desc: 'Official web platform and corporate presence for JP & CO Business & Management Consulting. Features refined editorial aesthetics, structured consulting advisory catalogs, and responsive inquiry funnels.',
    architecture: 'Engineered with React, Tailwind CSS, Plus Jakarta Sans and Cinzel typography. Prioritizes rapid client-side routing, localized asset delivery, and executive brand presentation.',
    keyFeatures: [
      'Corporate advisory practice areas and consulting portfolio',
      'High-conversion business inquiry routing system',
      'Refined editorial typography and sub-second asset delivery'
    ],
    tech: ['React', 'Tailwind CSS', 'Vite', 'Corporate Web']
  },
  {
    id: 'dataslayer',
    badge: 'Flagship 02',
    title: 'DATA SLAYER 4.0: National Competition Platform',
    category: 'Full-stack & Web',
    role: 'Lead Web Developer & Systems Architect',
    link: 'https://data-slayer.com',
    desc: 'Official web platform for DATA SLAYER 4.0, a premier national Machine Learning Competition (MLC) and Data Analytics Competition (DAC) hosted by HMSD Telkom University Purwokerto.',
    architecture: 'Developed with React and Tailwind CSS, featuring custom responsive layout structures, competition guidelines distribution, timeline schedules, and registration gateways.',
    keyFeatures: [
      'National competition registration and participant portal',
      'Interactive event schedule, timeline, and guidebook access',
      'Thematic cyber-visual layout optimized for high participant traffic'
    ],
    tech: ['React', 'Tailwind CSS', 'Vite', 'Competition Portal']
  }
];

const OTHER_PROJECTS = [
  {
    id: 'ecotani',
    title: 'EcoTani: Smart Farming & GIS Platform',
    category: 'Data & Geospatial',
    role: 'Lead Full-stack & GIS Engineer',
    link: 'https://eco-tani.vercel.app',
    desc: 'Geospatial smart farming platform designed to mitigate climate change risks for agricultural stakeholders. Features interactive spatial mapping, soil and weather analysis, and live environmental indices.',
    architecture: 'Built with React, Leaflet for custom spatial GeoJSON layers, and Tailwind CSS. Employs responsive client-side routing and optimized vector layer caching for sub-second map interactions.',
    keyFeatures: [
      'Interactive spatial boundary inspection using Leaflet GIS',
      'Real-time weather & telemetry data integration',
      'Agricultural climate risk advisory interface'
    ],
    tech: ['React', 'Leaflet GIS', 'Tailwind CSS', 'GeoJSON']
  },
  {
    id: 'landexafy',
    title: 'Landexafy Studio Official Platform',
    category: 'Full-stack & Web',
    role: 'Founder & Full-stack Engineer',
    link: 'https://landexafy.netlify.app/',
    desc: 'The official digital web presence for Landexafy. Built to convert inbound leads, present design engineering services, and showcase client case studies with sub-second performance.',
    architecture: 'Engineered on Vite and React with custom fluid layout primitives, accessible navigation mechanics, and high-conversion landing structure.',
    keyFeatures: [
      'High-performance 98+ Lighthouse score architecture',
      'Accessible micro-interactions and structured service offerings',
      'Integrated lead inquiry and communication flows'
    ],
    tech: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion']
  },
  {
    id: 'luluthasrie',
    title: 'Lulut Hasrie Corporate Portfolio',
    category: 'Client Solutions',
    role: 'Lead Full-stack Developer',
    link: 'https://luluthasrie.netlify.app/',
    desc: 'High-conversion personal branding and portfolio website engineered for an executive client. Focused on delivering a polished narrative, responsive typography, and tactile interactions.',
    architecture: 'Custom React application with streamlined viewport transitions, optimized image delivery, and cross-browser consistency.',
    keyFeatures: [
      'Dynamic testimonial and career milestones layout',
      'Tailored corporate aesthetic with dark editorial styling',
      'Sub-second page load times across mobile devices'
    ],
    tech: ['React', 'Tailwind CSS', 'Micro-interactions']
  },
  {
    id: 'cantikasejati',
    title: 'Cantika Sejati Eyelashes Profile',
    category: 'Client Solutions',
    role: 'Lead Full-stack Developer',
    link: 'https://cantikasejatieyelashes.com/',
    desc: 'Official company profile and product catalog for an established beauty manufacturer, highlighting export-grade product specifications and corporate credibility.',
    architecture: 'Developed with Next.js and TypeScript, prioritizing server-side rendering for search engine optimization and rapid regional distribution.',
    keyFeatures: [
      'Structured catalog display with localized asset caching',
      'Export inquiries and wholesale contact routing',
      'Fully responsive mobile and tablet layouts'
    ],
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript']
  },
  {
    id: 'seabiru',
    title: 'Sea Biru Marine Research Interface',
    category: 'Data & Geospatial',
    role: 'Lead Full-stack & UX Engineer',
    link: 'https://seabiru.netlify.app/',
    desc: 'Interactive web platform for oceanographic research data, prioritizing clean code architecture, rapid dataset filtering, and seamless time-series visualization.',
    architecture: 'React frontend connected to environmental dataset structures with client-side tabular filtering and spatial coordinate previews.',
    keyFeatures: [
      'Oceanographic research metric displays and charts',
      'Clean tabular data views with zero layout shifts',
      'Academic research documentation structure'
    ],
    tech: ['React', 'Data Viz', 'Tailwind CSS', 'Geodata']
  },
  {
    id: 'munjualin',
    title: 'Munjualin Commerce Analytics Dashboard',
    category: 'Full-stack & Web',
    role: 'Full-stack Developer',
    link: 'https://munjualin.com',
    desc: 'Comprehensive analytical dashboard providing e-commerce merchants with real-time insight into order velocity, customer conversion, and inventory health.',
    architecture: 'Component-driven dashboard architecture featuring Chart.js integrations, modular state handlers, and role-based data views.',
    keyFeatures: [
      'Real-time revenue and conversion tracking charts',
      'Filterable transaction ledger with status states',
      'Compact mobile-responsive metric summary cards'
    ],
    tech: ['React', 'Chart.js', 'Tailwind CSS']
  }
];

export default function Works() {
  const [showMore, setShowMore] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section id="works" className="py-24 bg-[#090a0f] border-t border-white/[0.06] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-3">
              02 / Featured Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight mb-3">
              Selected Works & Platforms.
            </h2>
            <p className="text-zinc-400 text-base max-w-xl leading-relaxed">
              Flagship production applications and high-impact web platforms engineered for corporate consulting, national competitions, and data systems.
            </p>
          </div>

          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-zinc-300 hover:text-white transition-all self-start md:self-end focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <span>View Full Archive</span>
            <ArrowUpRight className="w-4 h-4 text-blue-400" />
          </Link>
        </div>

        {/* 2 Featured / Flagship Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {FEATURED_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="relative bg-gradient-to-b from-[#131622] to-[#0c0d14] border border-white/10 hover:border-blue-500/40 rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 group shadow-[0_12px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_16px_50px_rgba(37,99,235,0.12)]"
            >
              <div>
                {/* Card Top Meta */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-blue-600/20 text-blue-300 border border-blue-500/30 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-blue-400" />
                      {project.badge}
                    </span>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 text-zinc-400 border border-white/5">
                      {project.category}
                    </span>
                  </div>
                  
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    aria-label={`Open live site for ${project.title}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-2 group-hover:text-blue-400 transition-colors leading-tight">
                  {project.title}
                </h3>

                <p className="text-xs font-mono text-blue-400/90 mb-4">
                  Role: {project.role}
                </p>

                <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                  {project.desc}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2.5 mb-8 bg-black/25 rounded-2xl p-4 border border-white/5">
                  {project.keyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <Check className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions & Tech Chips */}
              <div className="pt-6 border-t border-white/[0.08] mt-auto">
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-zinc-400 border border-white/[0.06]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-zinc-200 hover:text-white transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    Architecture & Details
                  </button>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 shadow-sm"
                  >
                    <span>Live App</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Action Controls: Show/Hide Other Projects & Full Archive */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono uppercase tracking-wider text-zinc-300 hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <span>{showMore ? 'Hide Other Projects' : `Show Other Projects (${OTHER_PROJECTS.length})`}</span>
            {showMore ? (
              <ChevronUp className="w-4 h-4 text-blue-400" />
            ) : (
              <ChevronDown className="w-4 h-4 text-blue-400" />
            )}
          </button>

          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/30 text-xs font-mono uppercase tracking-wider text-blue-400 hover:text-blue-300 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <span>View Full Archive</span>
            <ArrowUpRight className="w-4 h-4 text-blue-400" />
          </Link>
        </div>

        {/* Hidden Projects (Smoothly Revealed When showMore is True) */}
        {showMore && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 pt-10 border-t border-white/[0.08] animate-fadeIn">
            {OTHER_PROJECTS.map((project) => (
              <div
                key={project.id}
                className="bg-[#11131a] border border-white/10 hover:border-blue-500/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group shadow-lg"
              >
                <div>
                  {/* Card Top Meta */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-zinc-300 border border-white/10">
                      {project.category}
                    </span>
                    
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                      aria-label={`Visit ${project.title} live site`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs font-mono text-zinc-400 mb-3">
                    Role: {project.role}
                  </p>

                  <p className="text-sm text-zinc-300 leading-relaxed mb-6 line-clamp-3">
                    {project.desc}
                  </p>
                </div>

                {/* Card Footer Actions & Tech Chips */}
                <div className="pt-4 border-t border-white/[0.06] mt-4">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-400 border border-white/[0.06]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-zinc-200 hover:text-white transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      Architecture & Details
                    </button>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 rounded-lg bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/30 text-xs font-semibold transition-all inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      <span>Live App</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#12141c] border border-white/10 rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10 mb-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400 block mb-1">
                  {selectedProject.category}
                </span>
                <h3 id="modal-project-title" className="text-2xl font-heading font-bold text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-xs font-mono text-zinc-400 mt-1">
                  Role: {selectedProject.role}
                </p>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-6 text-sm text-zinc-300">
              <div>
                <h4 className="text-xs font-mono uppercase text-zinc-400 mb-2">Project Overview</h4>
                <p className="leading-relaxed">{selectedProject.desc}</p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-zinc-400 mb-2">Engineering & Architecture</h4>
                <p className="leading-relaxed">{selectedProject.architecture}</p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-zinc-400 mb-2">Key Highlights</h4>
                <ul className="space-y-2">
                  {selectedProject.keyFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-zinc-300">
                      <Check className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-zinc-400 mb-2">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono px-3 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-6 border-t border-white/10 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono text-zinc-500">
                Verified Production Deployment
              </span>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <Globe className="w-4 h-4" />
                <span>Visit Live Application</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
