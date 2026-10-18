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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
