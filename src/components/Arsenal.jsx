import { useState } from 'react';
import { Code2, Server, Database, Terminal, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MARQUEE_LOGOS = [
  { name: 'Python', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: 'Pandas', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
  { name: 'NumPy', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
  { name: 'Go', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" },
  { name: 'R', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg" },
  { name: 'JavaScript', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: 'React', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: 'Tailwind CSS', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: 'Node.js', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: 'Vite', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
  { name: 'PostgreSQL', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: 'MySQL', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: 'Docker', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: 'Git', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: 'GitHub', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" }
];

const STACK_DOMAINS = [
  {
    id: 'frontend',
    title: 'Frontend Architecture',
    icon: Code2,
    summary: 'Building responsive, accessible, and sub-second web applications with modern component standards.',
    tools: [
      { name: 'React', role: 'Component-driven UI & SPA architectures', tag: 'Core' },
      { name: 'Next.js', role: 'Server-side rendering & static generation', tag: 'Framework' },
      { name: 'Tailwind CSS', role: 'Utility-first modular design systems', tag: 'Styling' },
      { name: 'Vite', role: 'Next-generation rapid build tooling', tag: 'Tooling' },
      { name: 'TypeScript / JS', role: 'Type-safe scalable application logic', tag: 'Language' },
      { name: 'Leaflet GIS', role: 'Interactive geospatial map layer rendering', tag: 'Mapping' },
    ]
  },
  {
    id: 'backend',
    title: 'Backend & Systems',
    icon: Server,
    summary: 'Designing robust API services, concurrent application logic, and containerized runtime environments.',
    tools: [
      { name: 'Go (Golang)', role: 'High-concurrency systems & microservices', tag: 'Language' },
      { name: 'Node.js / Express', role: 'RESTful API endpoints & asynchronous services', tag: 'Runtime' },
      { name: 'Docker', role: 'Application containerization & isolation', tag: 'DevOps' },
      { name: 'REST & GraphQL', role: 'Contract-first client-server data protocols', tag: 'Protocol' },
    ]
  },
  {
    id: 'data',
    title: 'Data Science & Spatial Analytics',
    icon: Database,
    summary: 'Extracting actionable signals from tabular, geographical, and time-series environmental data.',
    tools: [
      { name: 'Python', role: 'Data manipulation, algorithmic modeling & pipelines', tag: 'Core' },
      { name: 'Pandas & NumPy', role: 'High-performance vector operations & data frames', tag: 'Analysis' },
      { name: 'Scikit-Learn', role: 'Predictive modeling, regression & classification', tag: 'ML' },
      { name: 'R Language', role: 'Statistical hypothesis testing & academic research', tag: 'Statistics' },
      { name: 'GeoPandas & QGIS', role: 'Vector spatial operations, buffer analysis & GIS', tag: 'Spatial' },
    ]
  },
  {
    id: 'storage',
    title: 'Data Storage & Persistence',
    icon: Terminal,
    summary: 'Engineering normalized relational schemas, query optimization, and persistent data integrity.',
    tools: [
      { name: 'PostgreSQL', role: 'Relational data modeling & complex queries', tag: 'SQL' },
      { name: 'MySQL', role: 'Production transaction storage & indexing', tag: 'SQL' },
      { name: 'Supabase', role: 'Serverless PostgreSQL & managed auth systems', tag: 'BaaS' },
      { name: 'Git & GitHub', role: 'Distributed version control & CI/CD workflows', tag: 'Tooling' },
    ]
  }
];

export default function Arsenal() {
  const [activeDomain, setActiveDomain] = useState('all');

  const displayedDomains = activeDomain === 'all'
    ? STACK_DOMAINS
    : STACK_DOMAINS.filter((d) => d.id === activeDomain);

  return (
    <section id="arsenal" className="py-24 bg-[#0c0e14] border-t border-white/[0.06] relative scroll-mt-24 overflow-hidden">
      
      {/* Ambient background light */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(37, 99, 235, 0.15) 0%, transparent 70%)',
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
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-3">
              03 / Technical Arsenal
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight mb-3">
              Technologies & Toolchains.
            </h2>
            <p className="text-zinc-400 text-base max-w-xl leading-relaxed">
              Curated toolchains grouped by practical engineering domain, balanced between computational data science and production web standards.
            </p>
          </div>

          {/* Domain Filter Switcher */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#12141c] p-1.5 rounded-xl border border-white/5 shadow-inner">
            <button
              onClick={() => setActiveDomain('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                activeDomain === 'all'
                  ? 'bg-blue-600 text-white font-medium shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              All Domains
            </button>
            {STACK_DOMAINS.map((domain) => (
              <button
                key={domain.id}
                onClick={() => setActiveDomain(domain.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                  activeDomain === domain.id
                    ? 'bg-blue-600 text-white font-medium shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {domain.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Domain Cards Grid with Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <AnimatePresence mode="popLayout">
            {displayedDomains.map((domain) => {
              const IconComponent = domain.icon;
              return (
                <motion.div
                  key={domain.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  whileHover={{ y: -6 }}
                  className="bg-[#11131a] border border-white/10 hover:border-blue-500/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-lg transition-colors group"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-500/20 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-bold text-white group-hover:text-blue-400 transition-colors">
                          {domain.title}
                        </h3>
                        <span className="text-xs font-mono text-zinc-500">
                          {domain.tools.length} Production Technologies
                        </span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                      {domain.summary}
                    </p>

                    {/* Tool List */}
                    <div className="space-y-3">
                      {domain.tools.map((tool, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-3 rounded-xl bg-[#090a0f] border border-white/5 hover:border-white/10 hover:bg-white/[0.03] transition-all"
                        >
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                            <div>
                              <span className="text-sm font-semibold text-zinc-200 block">
                                {tool.name}
                              </span>
                              <span className="text-xs text-zinc-400">
                                {tool.role}
                              </span>
                            </div>
                          </div>

                          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 border border-white/5 text-zinc-400 flex-shrink-0">
                            {tool.tag}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/[0.06] mt-6 flex items-center justify-between text-xs font-mono text-zinc-500">
                    <span>Telkom University & Landexafy Stack</span>
                    <span className="text-blue-400">Verified Skills</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Continuous Tech Stack Marquee Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-8 border-t border-white/[0.08] relative"
        >
          <div className="text-center mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Continuous Toolchain Marquee
            </span>
          </div>

          <div className="relative overflow-hidden w-full group py-3">
            {/* Left and Right Fade Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#0c0e14] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#0c0e14] to-transparent z-10 pointer-events-none" />

            {/* Seamless Infinite Marquee Track */}
            <div className="flex w-max">
              <div className="flex animate-marquee gap-8 sm:gap-12 items-center pr-8 sm:pr-12 group-hover:[animation-play-state:paused]">
                {MARQUEE_LOGOS.map((logo, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#11131a] border border-white/5 hover:border-white/20 transition-all flex-shrink-0 hover:scale-105"
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                      loading="lazy"
                    />
                    <span className="text-xs sm:text-sm font-mono font-medium text-zinc-300">
                      {logo.name}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex animate-marquee gap-8 sm:gap-12 items-center pr-8 sm:pr-12 group-hover:[animation-play-state:paused]">
                {MARQUEE_LOGOS.map((logo, index) => (
                  <div
                    key={`dup-${index}`}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#11131a] border border-white/5 hover:border-white/20 transition-all flex-shrink-0 hover:scale-105"
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                      loading="lazy"
                    />
                    <span className="text-xs sm:text-sm font-mono font-medium text-zinc-300">
                      {logo.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
