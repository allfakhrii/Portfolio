import { ArrowRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen relative flex items-center pt-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-blob"></div>
      <div 
        className="absolute bottom-1/4 -right-1/4 w-[400px] h-[400px] bg-emerald-500/20 rounded-full blur-[100px] mix-blend-screen opacity-50 animate-blob"
        style={{ animationDelay: '2s' }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.5 }} // delay until preloader finishes
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/10 mb-6 group cursor-default shadow-lg">
              <span className="relative flex h-3 w-3 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                👋 Hi, I'm Al-Fakhri. Available for work.
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] tracking-tight mb-8 text-white">
              Crafting Digital Experiences That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">Speak</span> for Your Brand.
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              A passionate Full-stack Developer and the Founder of Landexafy. While my background is in Data Science, my true calling lies in transforming complex ideas into scalable, high-performing web applications.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#works" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] group">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white glass-card hover:bg-white/10 rounded-xl transition-all duration-300">
                <Mail className="mr-2 h-5 w-5" />
                Let's Collaborate
              </a>
            </div>
          </motion.div>

          {/* Code Snippet Illusion */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 2.8 }}
            className="flex-1 w-full max-w-lg lg:max-w-none relative"
          >
            <div className="glass-card rounded-2xl p-6 border border-white/10 relative overflow-hidden group shadow-2xl">
              {/* Window Controls */}
              <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors cursor-pointer"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors cursor-pointer"></div>
                </div>
                <div className="text-xs text-gray-500 font-mono">al-fakhri-portfolio/Main.js</div>
              </div>

              {/* Code Snippet */}
              <div className="font-mono text-sm sm:text-base selection:bg-blue-500/30 text-gray-300 overflow-x-auto">
                <div className="flex"><span className="text-gray-600 mr-4 select-none">1</span><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> <span className="text-gray-400">=</span> {'{'}</div>
                <div className="flex"><span className="text-gray-600 mr-4 select-none">2</span><span className="ml-4 text-gray-300">name:</span> <span className="text-green-400">'Al-Fakhri'</span>,</div>
                <div className="flex"><span className="text-gray-600 mr-4 select-none">3</span><span className="ml-4 text-gray-300">role:</span> <span className="text-green-400">'Full-stack Engineer & Data Scientist'</span>,</div>
                <div className="flex"><span className="text-gray-600 mr-4 select-none">4</span><span className="ml-4 text-gray-300">founder:</span> <span className="text-blue-400">true</span>, <span className="text-gray-500">// Landexafy</span></div>
                <div className="flex"><span className="text-gray-600 mr-4 select-none">5</span><span className="ml-4 text-gray-300">skills:</span> [</div>
                <div className="flex"><span className="text-gray-600 mr-4 select-none">6</span><span className="ml-8 text-green-400">'React'</span>, <span className="text-green-400">'Next.js'</span>, <span className="text-green-400">'Tailwind'</span></div>
                <div className="flex"><span className="text-gray-600 mr-4 select-none">7</span><span className="ml-4 text-gray-300">]</span></div>
                <div className="flex"><span className="text-gray-600 mr-4 select-none">8</span><span className="text-gray-300">{'}'}</span>;</div>
                <div className="flex mt-4"><span className="text-gray-600 mr-4 select-none">9</span><span className="text-purple-400">export default</span> <span className="text-blue-400">developer</span>;</div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
