import { motion } from 'framer-motion';
import { ChevronDown, ArrowUpRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-[#090a0f] flex items-center justify-center min-h-[92vh]"
    >
      {/* Dynamic Ambient Glows (Optimized for Retina / GPU Performance) */}
      <div
        className="absolute -top-28 left-1/2 -translate-x-1/2 w-[650px] h-[400px] pointer-events-none opacity-60"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(37, 99, 235, 0.25) 0%, rgba(37, 99, 235, 0.05) 45%, transparent 70%)',
          transform: 'translate3d(0, 0, 0)'
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -left-24 w-[420px] h-[420px] pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle at center, rgba(79, 70, 229, 0.22) 0%, rgba(79, 70, 229, 0.04) 50%, transparent 70%)',
          transform: 'translate3d(0, 0, 0)'
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 -right-20 w-[400px] h-[400px] pointer-events-none opacity-35"
        style={{
          background: 'radial-gradient(circle at center, rgba(56, 189, 248, 0.20) 0%, rgba(56, 189, 248, 0.03) 50%, transparent 70%)',
          transform: 'translate3d(0, 0, 0)'
        }}
        aria-hidden="true"
      />

      {/* Subtle Architectural Grid Lines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '4rem 4rem'
        }}
        aria-hidden="true"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center flex flex-col items-center"
      >
        
        {/* Status Indicator with Radar Ping */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-950/50 border border-blue-500/30 text-xs font-mono text-blue-300 mb-8 shadow-sm backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span>Full Stack Developer @ Landexafy &bull; Data & IT Specialist @ JP & CO</span>
        </motion.div>

        {/* Centered Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold text-white tracking-tight leading-[1.1] mb-8 max-w-4xl"
        >
          Engineering Scalable Web Apps with{' '}
          <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
            Data-Driven Precision.
          </span>
        </motion.h1>

        {/* Centered Value Proposition Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Hi, I'm <strong className="text-white font-semibold">Al-Fakhri</strong>, a Full Stack Developer of <strong className="text-white font-semibold">Landexafy</strong>, Data & IT Specialist of <strong className="text-white font-semibold">JP & CO</strong>, and a Data Science student at Telkom University Purwokerto. I bridge robust backend systems, data analytics, and high-conversion web interfaces.
        </motion.p>

        {/* Centered Dual CTAs with Micro-interactions */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 w-full sm:w-auto"
        >
          <motion.a
            href="#works"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-[0_8px_20px_rgba(37,99,235,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            <span>Explore Selected Works</span>
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-zinc-200 bg-[#141721] hover:bg-[#1a1e2b] hover:text-white border border-white/10 rounded-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Core Competencies Quick Strip with Hover Lift */}
        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12 max-w-2xl w-full"
        >
          <motion.div
            whileHover={{ y: -3 }}
            className="text-center transition-transform"
          >
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-1">Landexafy</span>
            <span className="text-sm font-semibold text-zinc-200">Full Stack Dev</span>
          </motion.div>
          <motion.div
            whileHover={{ y: -3 }}
            className="text-center transition-transform"
          >
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-1">JP & CO</span>
            <span className="text-sm font-semibold text-zinc-200">Data & IT Specialist</span>
          </motion.div>
          <motion.div
            whileHover={{ y: -3 }}
            className="text-center transition-transform"
          >
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-1">Academic</span>
            <span className="text-sm font-semibold text-zinc-200">Data Science Track</span>
          </motion.div>
        </motion.div>

        {/* Floating Scroll Cue */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 6, 0] }}
          transition={{
            opacity: { delay: 1, duration: 1 },
            y: { repeat: Infinity, duration: 2, ease: 'easeInOut' }
          }}
          className="mt-12 inline-flex flex-col items-center gap-1.5 text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer"
          aria-label="Scroll down to About section"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500">Scroll</span>
          <ChevronDown className="w-4 h-4 text-blue-400" />
        </motion.a>

      </motion.div>
    </section>
  );
}
