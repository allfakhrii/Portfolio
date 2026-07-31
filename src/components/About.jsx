import { useRef, useEffect, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';

function AnimatedCounter({ from = 0, to, duration = 2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration: duration,
        ease: "easeOut",
        onUpdate: (value) => setCount(Math.floor(value))
      });
      return () => controls.stop();
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">The Journey So Far.</h2>
          <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-lg text-gray-400 leading-relaxed order-2 lg:order-1"
          >
            <p>
              My journey into technology began at MAN Purbalingga, where my curiosity for how things work first took root. Today, as a <span className="text-white font-medium">Data Science student at Telkom University Purwokerto</span>, I've developed a strong analytical mindset and a deep understanding of logical problem-solving.
            </p>
            <p>
              However, I realized that even the best logic needs a beautiful interface to truly make an impact. That realization led me to dive deep into Full-stack Development and establish <span className="text-blue-500 font-semibold">Landexafy</span>.
            </p>
            <p>
              My team and I focus on helping businesses translate their visions into digital products that are not only aesthetically pleasing but also highly functional and user-centric.
            </p>

            <div className="pt-6 grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-3xl font-heading font-bold text-white mb-2">
                  <AnimatedCounter to={2} />+
                </h4>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Years Experience</p>
              </div>
              <div>
                <h4 className="text-3xl font-heading font-bold text-white mb-2">
                  <AnimatedCounter to={20} />+
                </h4>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Projects Completed</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative max-w-[320px] mx-auto lg:ml-auto group order-1 lg:order-2"
          >
            {/* Profile Image with Organic Shape */}
            <div className="aspect-square glass p-1 relative z-10 overflow-hidden transition-all duration-700 rounded-full hover:rounded-[2rem]">
              <div className="w-full h-full bg-zinc-800 rounded-[inherit] overflow-hidden relative border border-white/5">
                <img src="/pp-cswnprmi.png" alt="Founder's Portrait" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>
            {/* Decorative Ornaments */}
            <div className="absolute top-3 -right-3 w-full h-full border border-blue-500/20 rounded-full -z-10 transition-all duration-700 group-hover:rounded-[2rem]"></div>
            <div className="absolute -bottom-6 left-6 w-3/4 h-3/4 bg-blue-500/10 blur-3xl rounded-full -z-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
