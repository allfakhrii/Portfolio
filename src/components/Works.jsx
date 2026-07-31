import { ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: "EcoTani: Platform Smart Farming",
    role: "Lead Full-stack Developer & GIS Engineer",
    link: "https://eco-tani.vercel.app",
    desc: "A geospatial-based smart farming platform designed to mitigate the impacts of climate change on agriculture. Integrates interactive maps, spatial analysis, and real-time environmental data.",
    tech: ["React", "Leaflet", "Tailwind", "Geospatial Data"],
    colSpan: "md:col-span-2 lg:col-span-2"
  },
  {
    title: "Client Landing Page",
    role: "Lead Full-stack Developer & UX Engineer",
    link: "https://luluthasrie.netlify.app/",
    desc: "Spearheaded the development of a dynamic, high-conversion landing page for a corporate client. Focused on delivering a seamless user experience.",
    tech: ["React", "Tailwind", "Framer Motion"],
    colSpan: ""
  }
];

export default function Works() {
  return (
    <section id="works" className="py-24 relative bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Selected Works.</h2>
            <p className="text-gray-400 text-lg">Showcasing my biggest web projects built for real clients.</p>
          </div>
          <Link 
            to="/portfolio"
            className="inline-flex items-center text-blue-500 hover:text-blue-400 font-medium transition-colors group"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[320px]">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`glass-card p-8 flex flex-col group relative overflow-hidden ${project.colSpan}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <p className="text-blue-500 text-sm font-mono">{project.role}</p>
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
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
    </section>
  );
}
