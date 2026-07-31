import { ExternalLink, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const allProjects = [
  {
    title: "EcoTani: Platform Smart Farming",
    role: "Lead Full-stack Developer & GIS Engineer",
    link: "https://eco-tani.vercel.app",
    desc: "A geospatial-based smart farming platform designed to mitigate the impacts of climate change on agriculture. Integrates interactive maps, spatial analysis, and real-time environmental data.",
    tech: ["React", "Leaflet", "Tailwind", "Geospatial Data"],
  },
  {
    title: "Client Landing Page",
    role: "Lead Full-stack Developer & UX Engineer",
    link: "https://luluthasrie.netlify.app/",
    desc: "Spearheaded the development of a dynamic, high-conversion landing page for a corporate client. Focused on delivering a seamless user experience with responsive design and smooth micro-interactions.",
    tech: ["React", "Tailwind", "Framer Motion"],
  },
  {
    title: "Company Profile",
    role: "Lead Full-stack Developer & UX Engineer",
    link: "https://cantikasejatieyelashes.com/",
    desc: "Designed and developed a modern company profile website. Optimized performance for sub-second load times.",
    tech: ["Next.js", "Tailwind", "TypeScript"],
  },
  {
    title: "Landexafy Official Site",
    role: "Lead Full-stack Developer & UX Engineer",
    link: "https://landexafy.netlify.app/",
    desc: "The official web presence for Landexafy, designed to convert leads and showcase our portfolio of digital products.",
    tech: ["React", "Tailwind", "Vite"],
  },
  {
    title: "Research Project",
    role: "Lead Full-stack Developer & UX Engineer",
    link: "https://seabiru.netlify.app/",
    desc: "Built an interactive web interface for marine research data, prioritizing clean code architecture, maintainability, and seamless data visualization.",
    tech: ["React", "Tailwind", "Data Viz"],
  },
  // Add more past projects here if needed
  {
    title: "E-Commerce Dashboard",
    role: "Full-stack Developer",
    link: "https://munjualin.com",
    desc: "A complex analytics dashboard for e-commerce sellers to track their revenue, visitors, and conversion metrics in real-time.",
    tech: ["React", "Chart.js", "Tailwind"],
  }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen pt-32 pb-24 relative bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-12">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 tracking-tight">
            All <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">Projects.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">A comprehensive list of my work, experiments, and contributions over the years.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[320px]">
          {allProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-card p-8 flex flex-col group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <p className="text-blue-500 text-sm font-mono">{project.role}</p>
                  {project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
                <h3 className="text-2xl font-bold font-heading mb-3 group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 flex-1 text-balance">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
