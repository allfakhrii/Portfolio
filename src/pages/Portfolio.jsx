import { useState, useEffect } from 'react';
import { ExternalLink, ArrowLeft, Search, ArrowUpRight, X, Check, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const ALL_PROJECTS = [
  {
    id: 'jpandco',
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
  },
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

const CATEGORIES = ['All', 'Full-stack & Web', 'Data & Geospatial', 'Client Solutions'];

export default function Portfolio() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const filteredProjects = ALL_PROJECTS.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All' || project.category === selectedCategory;
    const matchesQuery =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#090a0f] text-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors mb-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
        >
          <ArrowLeft className="w-4 h-4 text-blue-400" />
          <span>Return to Overview</span>
        </Link>

        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-2">
            Engineering Archive
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white tracking-tight mb-4">
            Production Works & Applications.
          </h1>
          <p className="text-zinc-400 text-base leading-relaxed">
            A comprehensive catalog of deployed software, geospatial platforms, and client web solutions authored by Al-Fakhri.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/[0.06]">
          
          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white font-semibold shadow-sm'
                    : 'bg-[#11131a] text-zinc-400 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by technology or name..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#11131a] border border-white/10 text-xs text-white placeholder-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white text-xs"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Results Count & Grid */}
        <div className="mb-6 flex items-center justify-between text-xs font-mono text-zinc-500">
          <span>Showing {filteredProjects.length} of {ALL_PROJECTS.length} projects</span>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center bg-[#11131a] border border-white/5 rounded-2xl p-8">
            <p className="text-lg font-heading font-semibold text-white mb-2">No projects matched your criteria</p>
            <p className="text-xs text-zinc-400 mb-6">Try clearing the search query or switching categories.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-5 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-[#11131a] border border-white/10 hover:border-blue-500/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-blue-950/50 text-blue-300 border border-blue-500/20">
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

                  <h2 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h2>

                  <p className="text-xs font-mono text-zinc-400 mb-3">
                    Role: {project.role}
                  </p>

                  <p className="text-sm text-zinc-300 leading-relaxed mb-6 line-clamp-3">
                    {project.desc}
                  </p>
                </div>

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
                      Inspect Specs
                    </button>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 rounded-lg bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/30 text-xs font-semibold transition-all inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      <span>Live Site</span>
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
          aria-labelledby="modal-archive-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#12141c] border border-white/10 rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10 mb-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400 block mb-1">
                  {selectedProject.category}
                </span>
                <h3 id="modal-archive-title" className="text-2xl font-heading font-bold text-white">
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
    </div>
  );
}
