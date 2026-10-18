export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-36 pb-20 md:pt-48 md:pb-28 overflow-hidden bg-[#090a0f] flex items-center justify-center min-h-[90vh]"
    >
      {/* Subtle Architectural Grid Lines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '4rem 4rem'
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center flex flex-col items-center">
        
        {/* Status Indicator */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/20 text-xs font-mono text-blue-300 mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-blue-400"></span>
          <span>Full Stack Developer @ Landexafy &bull; Data & IT Specialist @ JP & CO</span>
        </div>

        {/* Centered Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold text-white tracking-tight leading-[1.1] mb-8 max-w-4xl">
          Engineering Scalable Web Apps with Data-Driven Precision.
        </h1>

        {/* Centered Value Proposition Description */}
        <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-10">
          Hi, I'm <strong className="text-white font-semibold">Al-Fakhri</strong>, a Full Stack Developer of <strong className="text-white font-semibold">Landexafy</strong>, Data & IT Specialist of <strong className="text-white font-semibold">JP & CO</strong>, and a Data Science student at Telkom University Purwokerto. I bridge robust backend systems, data analytics, and high-conversion web interfaces.
        </p>

        {/* Centered Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 w-full sm:w-auto">
          <a
            href="#works"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            Explore Selected Works
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-zinc-200 bg-[#141721] hover:bg-[#1a1e2b] hover:text-white border border-white/10 rounded-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Get in Touch
          </a>
        </div>

        {/* Core Competencies Quick Strip */}
        <div className="pt-8 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12 max-w-2xl w-full">
          <div className="text-center">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-1">Landexafy</span>
            <span className="text-sm font-semibold text-zinc-200">Full Stack Dev</span>
          </div>
          <div className="text-center">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-1">JP & CO</span>
            <span className="text-sm font-semibold text-zinc-200">Data & IT Specialist</span>
          </div>
          <div className="text-center">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-1">Academic</span>
            <span className="text-sm font-semibold text-zinc-200">Data Science Track</span>
          </div>
        </div>

      </div>
    </section>
  );
}
