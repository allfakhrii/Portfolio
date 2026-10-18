import { GraduationCap, Briefcase, MapPin, Code, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0c0e14] border-t border-white/[0.06] relative scroll-mt-24 overflow-hidden">
      
      {/* Ambient background light */}
      <div
        className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle at center, rgba(37, 99, 235, 0.22) 0%, transparent 70%)',
          transform: 'translate3d(0, 0, 0)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-16 max-w-3xl"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-3">
            01 / Background & Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight mb-4">
            Where Data Analytics Meets Functional Web Engineering.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            A synthesis of algorithmic thinking from Data Science and modern software architecture for production-ready web platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Portrait & Quick Credentials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-[#12141c] border border-white/10 hover:border-blue-500/30 rounded-2xl p-3 shadow-xl transition-colors group"
            >
              <div className="aspect-[4/5] rounded-xl overflow-hidden relative bg-zinc-900 border border-white/5">
                <img
                  src="/pp-cswnprmi.png"
                  alt="Portrait of Fatih Al-Fakhri Muhammad"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
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
            </motion.div>

          </motion.div>

          {/* Right Column: In-depth Journey & Core Principles */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8 text-zinc-300 text-base leading-relaxed"
          >
            
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

            {/* Three Pillar Cards with Hover Lift */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/[0.08]">
              
              <motion.div
                whileHover={{ y: -4, borderColor: 'rgba(59, 130, 246, 0.4)' }}
                className="bg-[#12141c] border border-white/5 rounded-xl p-5 transition-all shadow-md"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-950/60 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-3">
                  <Code className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1.5">Full-Stack Development</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Building modular, maintainable client apps with React and Next.js, backed by structured APIs and clean database models.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -4, borderColor: 'rgba(59, 130, 246, 0.4)' }}
                className="bg-[#12141c] border border-white/5 rounded-xl p-5 transition-all shadow-md"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-950/60 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-3">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1.5">Data & GIS Applications</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Specializing in geospatial visualization (Leaflet/GIS), Python data pipelines, and telemetry dashboards for specialized fields.
                </p>
              </motion.div>

            </div>

            {/* Verified Track Record Strip */}
            <div className="bg-[#12141c] border border-white/5 rounded-xl p-6 grid grid-cols-1 sm:grid-cols-3 gap-6 shadow-lg">
              <motion.div whileHover={{ y: -2 }} className="transition-transform">
                <p className="text-xl font-heading font-bold text-white mb-1">Landexafy</p>
                <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Full Stack Dev</p>
                <span className="text-[11px] text-zinc-500 block mt-1">Web applications & studio</span>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} className="transition-transform">
                <p className="text-xl font-heading font-bold text-white mb-1">JP & CO</p>
                <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Data & IT Specialist</p>
                <span className="text-[11px] text-zinc-500 block mt-1">IT systems & data workflows</span>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} className="transition-transform">
                <p className="text-xl font-heading font-bold text-white mb-1">Telkom Univ</p>
                <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Data Science</p>
                <span className="text-[11px] text-zinc-500 block mt-1">Academic degree track</span>
              </motion.div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
