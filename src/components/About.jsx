import { GraduationCap, Briefcase, MapPin, Code, Cpu } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0c0e14] border-t border-white/[0.06] relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-3">
            01 / Background & Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight mb-4">
            Where Data Analytics Meets Functional Web Engineering.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            A synthesis of algorithmic thinking from Data Science and modern software architecture for production-ready web platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Portrait & Quick Credentials */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="bg-[#12141c] border border-white/10 rounded-2xl p-3 shadow-xl">
              <div className="aspect-[4/5] rounded-xl overflow-hidden relative bg-zinc-900 border border-white/5">
                <img
                  src="/pp-cswnprmi.png"
                  alt="Portrait of Fatih Al-Fakhri Muhammad"
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-transparent to-transparent opacity-80 pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <p className="text-xs font-mono uppercase tracking-wider text-blue-400">Full-stack & Data</p>
                  <p className="text-lg font-heading font-bold text-white">Fatih Al-Fakhri Muhammad</p>
                </div>
              </div>

              {/* Verified Identity Tags */}
              <div className="mt-4 px-2 space-y-2">
                <div className="flex items-center gap-2.5 text-xs text-zinc-300 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                  <span>Purwokerto & Purbalingga, Central Java, Indonesia</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-zinc-300 font-mono">
                  <Briefcase className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                  <span>Full Stack Developer, Landexafy</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-zinc-300 font-mono">
                  <Briefcase className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                  <span>Data & IT Specialist, JP & CO</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-zinc-300 font-mono">
                  <GraduationCap className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                  <span>Data Science, Telkom University Purwokerto</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: In-depth Journey & Core Principles */}
          <div className="lg:col-span-7 space-y-8 text-zinc-300 text-base leading-relaxed">
            
            <div className="space-y-4">
              <h3 className="text-xl font-heading font-semibold text-white">
                The Journey from Logic to Interface
              </h3>
              <p>
                My passion for computing took shape at MAN Purbalingga, where exploring algorithms first opened the door to technology. As a <span className="text-white font-medium">Data Science student at Telkom University Purwokerto</span>, I have spent years training my analytical intuition: statistical modeling, computational data structures, and spatial geometry.
              </p>
              <p>
                However, data and raw logic without an intuitive interface remain invisible to the people who need them most. That realization pushed me into Full-stack Engineering: transforming complex datasets, API architectures, and business workflows into fast, accessible, and dependable digital products.
              </p>
              <p>
                Currently, I contribute as a <span className="text-white font-medium">Full Stack Developer at Landexafy</span> and a <span className="text-white font-medium">Data & IT Specialist at JP & CO</span>, bridging real-world IT infrastructure, analytics pipelines, and production web systems for commercial and research applications.
              </p>
            </div>

            {/* Three Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/[0.08]">
              
              <div className="bg-[#12141c] border border-white/5 rounded-xl p-5">
                <div className="w-8 h-8 rounded-lg bg-blue-950/60 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-3">
                  <Code className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1.5">Full-Stack Development</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Building modular, maintainable client apps with React and Next.js, backed by structured APIs and clean database models.
                </p>
              </div>

              <div className="bg-[#12141c] border border-white/5 rounded-xl p-5">
                <div className="w-8 h-8 rounded-lg bg-blue-950/60 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-3">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1.5">Data & GIS Applications</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Specializing in geospatial visualization (Leaflet/GIS), Python data pipelines, and telemetry dashboards for specialized fields.
                </p>
              </div>

            </div>

            {/* Verified Track Record Strip */}
            <div className="bg-[#12141c] border border-white/5 rounded-xl p-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <p className="text-xl font-heading font-bold text-white mb-1">Landexafy</p>
                <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Full Stack Dev</p>
                <span className="text-[11px] text-zinc-500 block mt-1">Web applications & studio</span>
              </div>
              <div>
                <p className="text-xl font-heading font-bold text-white mb-1">JP & CO</p>
                <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Data & IT Specialist</p>
                <span className="text-[11px] text-zinc-500 block mt-1">IT systems & data workflows</span>
              </div>
              <div>
                <p className="text-xl font-heading font-bold text-white mb-1">Telkom Univ</p>
                <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Data Science</p>
                <span className="text-[11px] text-zinc-500 block mt-1">Academic degree track</span>
              </div>
              <div>
                <p className="text-xl font-heading font-bold text-white mb-1">8+ Apps</p>
                <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Live In Production</p>
                <span className="text-[11px] text-zinc-500 block mt-1">Client & research projects</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
