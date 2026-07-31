import { Code2, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const marqueeLogos = [
  { name: 'Python', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: 'Pandas', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
  { name: 'NumPy', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
  { name: 'Go', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" },
  { name: 'R', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg" },
  { name: 'JS', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: 'React', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: 'Tailwind', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: 'Node.js', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: 'Vite', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
  { name: 'PostgreSQL', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: 'MySQL', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: 'Docker', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: 'Git', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: 'GitHub', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" }
];

export default function Arsenal() {
  return (
    <section id="arsenal" className="pt-24 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">My Arsenal.</h2>
          <p className="text-gray-400 text-lg">The tools and technologies I use to build scalable web solutions.</p>
        </motion.div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 auto-rows-auto md:auto-rows-[320px]">
          
          {/* Big Box 1: Core Full-stack */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-3 glass-card p-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Code2 className="w-32 h-32 text-gray-400" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-center">
              <h3 className="text-3xl font-heading font-bold mb-3 text-white">Core Full-stack</h3>
              <p className="text-gray-400 mb-6 max-w-sm">Building solid foundations with modern JavaScript paradigms and robust backend architectures.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white/5 text-gray-300 border border-white/10 px-4 py-2 rounded-lg text-sm font-medium">JavaScript</span>
                <span className="bg-white/5 text-gray-300 border border-white/10 px-4 py-2 rounded-lg text-sm font-medium">React / Next.js</span>
                <span className="bg-white/5 text-gray-300 border border-white/10 px-4 py-2 rounded-lg text-sm font-medium">Tailwind CSS</span>
              </div>
            </div>
          </motion.div>

          {/* Big Box 2: Core Data Science */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 glass-card p-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Database className="w-32 h-32 text-gray-400" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-center">
              <h3 className="text-3xl font-heading font-bold mb-3 text-white">Core Data Science</h3>
              <p className="text-gray-400 mb-6 max-w-sm">Transforming raw data into actionable insights through robust analysis and high-performance computing.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white/5 text-gray-300 border border-white/10 px-4 py-2 rounded-lg text-sm font-medium">Python (Pandas, Scikit)</span>
                <span className="bg-white/5 text-gray-300 border border-white/10 px-4 py-2 rounded-lg text-sm font-medium">R Language</span>
                <span className="bg-white/5 text-gray-300 border border-white/10 px-4 py-2 rounded-lg text-sm font-medium">Golang</span>
              </div>
            </div>
          </motion.div>

          {/* Marquee: Programming Logos Loop */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-6 mt-6 py-6 overflow-hidden flex w-full"
          >
            <div className="flex w-full group">
              {/* Marquee Content - Double to loop seamlessly */}
              <div className="flex animate-marquee gap-12 items-center pr-12 flex-shrink-0 min-w-full group-hover:[animation-play-state:paused]">
                {marqueeLogos.map((logo, index) => (
                  <img key={index} src={logo.src} alt={logo.name} className="w-16 h-16 opacity-70 hover:opacity-100 transition-opacity" />
                ))}
              </div>
              <div className="flex animate-marquee gap-12 items-center pr-12 flex-shrink-0 min-w-full group-hover:[animation-play-state:paused]">
                {marqueeLogos.map((logo, index) => (
                  <img key={`dup-${index}`} src={logo.src} alt={logo.name} className="w-16 h-16 opacity-70 hover:opacity-100 transition-opacity" />
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
