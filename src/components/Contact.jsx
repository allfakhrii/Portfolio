import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const LinkedinIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const GithubIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="pt-12 pb-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-8 md:p-16 text-center flex flex-col items-center gap-12"
        >
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 tracking-tight">
              Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">Impactful.</span>
            </h2>
            <p className="text-xl text-gray-400 mb-0">
              Are you looking for a dedicated developer to bring your digital vision to life? Or perhaps you need a reliable partner for your next web project? My inbox is always open.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full flex flex-wrap justify-center gap-4"
          >
            {/* Contact 1 */}
            <a href="mailto:alfakhri323@gmail.com" className="glass flex items-center gap-4 p-6 bg-white/5 hover:bg-white/10 rounded-2xl transition-all duration-300 group min-w-[200px] flex-1 max-w-[280px]">
              <div className="bg-white/10 p-3 rounded-full text-gray-300 group-hover:text-white group-hover:scale-110 transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-left flex-1">
                <p className="text-sm text-gray-400">Contact</p>
                <p className="text-lg font-medium text-white">Email</p>
              </div>
            </a>

            {/* Contact 2 */}
            <a href="https://www.linkedin.com/in/fatih-al-fakhri-muhammad-8245b3327" target="_blank" rel="noreferrer" className="glass flex items-center gap-4 p-6 bg-white/5 hover:bg-white/10 rounded-2xl transition-all duration-300 group min-w-[200px] flex-1 max-w-[280px]">
              <div className="bg-white/10 p-3 rounded-full text-gray-300 group-hover:text-white group-hover:scale-110 transition-all">
                <LinkedinIcon />
              </div>
              <div className="text-left flex-1">
                <p className="text-sm text-gray-400">Connect on</p>
                <p className="text-lg font-medium text-white">LinkedIn</p>
              </div>
            </a>

            {/* Contact 3 */}
            <a href="https://github.com/alfakhrii" target="_blank" rel="noreferrer" className="glass flex items-center gap-4 p-6 bg-white/5 hover:bg-white/10 rounded-2xl transition-all duration-300 group min-w-[200px] flex-1 max-w-[280px]">
              <div className="bg-white/10 p-3 rounded-full text-gray-300 group-hover:text-white group-hover:scale-110 transition-all">
                <GithubIcon />
              </div>
              <div className="text-left flex-1">
                <p className="text-sm text-gray-400">Explore on</p>
                <p className="text-lg font-medium text-white">GitHub</p>
              </div>
            </a>

            {/* Contact 4 */}
            <a href="https://www.instagram.com/allfakhrii_/" target="_blank" rel="noreferrer" className="glass flex items-center gap-4 p-6 bg-white/5 hover:bg-white/10 rounded-2xl transition-all duration-300 group min-w-[200px] flex-1 max-w-[280px]">
              <div className="bg-white/10 p-3 rounded-full text-gray-300 group-hover:text-white group-hover:scale-110 transition-all">
                <InstagramIcon />
              </div>
              <div className="text-left flex-1">
                <p className="text-sm text-gray-400">Follow on</p>
                <p className="text-lg font-medium text-white">Instagram</p>
              </div>
            </a>

            {/* Contact 5 */}
            <a href="https://open.spotify.com/user/59kr5gnugmapd20a53i93qv5n?si=71564671014e47c6" target="_blank" rel="noreferrer" className="glass flex items-center gap-4 p-6 bg-white/5 hover:bg-white/10 rounded-2xl transition-all duration-300 group min-w-[200px] flex-1 max-w-[280px]">
              <div className="bg-white/10 p-3 rounded-full text-gray-300 group-hover:text-white group-hover:scale-110 transition-all">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.108 17.311c-.2.33-.635.433-.965.233-2.685-1.642-6.064-2.013-10.047-1.103-.377.086-.753-.146-.839-.523-.086-.377.146-.753.523-.839 4.358-.996 8.093-.574 11.095 1.258.33.2.433.635.233.974zm1.404-3.258c-.252.41-.783.542-1.193.29-3.003-1.845-7.582-2.38-11.12-1.303-.46.138-.95-.125-1.088-.585-.138-.46.125-.95.585-1.088 4.093-1.24 9.155-.633 12.52 1.432.41.252.542.783.296 1.154zm.13-3.352c-3.605-2.14-9.553-2.338-13.005-1.26-.554.168-1.144-.153-1.312-.707-.168-.554.153-1.144.707-1.312 3.97-1.205 10.543-.966 14.692 1.498.498.295.66.937.365 1.435-.295.498-.937.66-1.435.365l-.012-.018z" /></svg>
              </div>
              <div className="text-left flex-1">
                <p className="text-sm text-gray-400">Listen on</p>
                <p className="text-lg font-medium text-white">Spotify</p>
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
