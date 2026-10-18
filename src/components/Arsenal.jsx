import { useState } from 'react';
import { Code2, Server, Database, Terminal, CheckCircle } from 'lucide-react';

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
    summary: 'Designing structured REST APIs, database schemas, and dependable micro-services.',
    tools: [
      { name: 'Node.js', role: 'Asynchronous event-driven server runtimes', tag: 'Runtime' },
      { name: 'Go (Golang)', role: 'High-performance concurrent backend routines', tag: 'Language' },
      { name: 'PostgreSQL', role: 'Relational data modeling & complex queries', tag: 'Database' },
      { name: 'MySQL', role: 'Structured relational storage & optimization', tag: 'Database' },
      { name: 'RESTful APIs', role: 'JSON HTTP endpoints with validation', tag: 'Protocol' },
    ]
  },
  {
    id: 'datascience',
    title: 'Data Science & Spatial Analytics',
    icon: Database,
    summary: 'Computational data analysis, machine learning workflows, and geospatial manipulation from academic rigor.',
    tools: [
      { name: 'Python', role: 'Data science scripting, automation & modeling', tag: 'Language' },
      { name: 'Pandas & NumPy', role: 'Matrix operations & tabular data wrangling', tag: 'Data Prep' },
      { name: 'Scikit-Learn', role: 'Predictive modeling & classification algorithms', tag: 'Machine Learning' },
      { name: 'R Language', role: 'Statistical analysis and quantitative reporting', tag: 'Statistics' },
      { name: 'GeoJSON / GIS', role: 'Spatial feature manipulation & coordinate data', tag: 'Geodata' },
    ]
  },
  {
    id: 'devops',
    title: 'DevOps & Workflow',
    icon: Terminal,
    summary: 'Standardized version control, containerized environments, and cloud deployment pipelines.',
    tools: [
      { name: 'Git & GitHub', role: 'Version control, branching & code review', tag: 'VCS' },
      { name: 'Docker', role: 'Isolated containerization for services', tag: 'Containers' },
      { name: 'Vercel / Netlify', role: 'Edge deployment & CI/CD pipeline routing', tag: 'Cloud' },
      { name: 'Figma', role: 'Interface wireframing & component specs', tag: 'Design' },
    ]
  }
];

export default function Arsenal() {
  const [activeDomain, setActiveDomain] = useState('all');

  const displayedDomains = activeDomain === 'all'
    ? STACK_DOMAINS
    : STACK_DOMAINS.filter((d) => d.id === activeDomain);

  return (
    <section id="arsenal" className="py-24 bg-[#0c0e14] border-t border-white/[0.06] relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
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
          <div className="flex flex-wrap items-center gap-1.5 bg-[#12141c] p-1.5 rounded-xl border border-white/5">
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
        </div>

        {/* Domain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {displayedDomains.map((domain) => {
            const IconComponent = domain.icon;
            return (
              <div
                key={domain.id}
                className="bg-[#11131a] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold text-white">
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
                        className="flex items-center justify-between p-3 rounded-xl bg-[#090a0f] border border-white/5 hover:border-white/10 transition-colors"
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
              </div>
            );
          })}
        </div>

        {/* Continuous Tech Stack Marquee Strip */}
        <div className="pt-8 border-t border-white/[0.08] relative">
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
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#11131a] border border-white/5 hover:border-white/20 transition-all flex-shrink-0"
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
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#11131a] border border-white/5 hover:border-white/20 transition-all flex-shrink-0"
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
        </div>

      </div>
    </section>
  );
}
