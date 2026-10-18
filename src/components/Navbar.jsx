import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'Home', href: 'home' },
  { label: 'About', href: 'about' },
  { label: 'Works', href: 'works' },
  { label: 'Arsenal', href: 'arsenal' },
  { label: 'Contact', href: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (isHome) {
        const sections = ['home', 'about', 'works', 'arsenal', 'contact'];
        const scrollPosition = window.scrollY + 200;

        for (let i = sections.length - 1; i >= 0; i--) {
          const sectionEl = document.getElementById(sections[i]);
          if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  // Dynamic hash or page link
  const getHref = (id) => {
    return isHome ? `#${id}` : `/#${id}`;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <motion.div
          initial={{ y: -25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto px-4 sm:px-6"
        >
          <nav
            aria-label="Main Navigation"
            className={`flex items-center justify-between px-4 sm:px-5 py-2 rounded-2xl transition-all duration-300 ${
              scrolled
                ? 'bg-[#10121a]/90 backdrop-blur-md border border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.5)]'
                : 'bg-[#10121a]/60 backdrop-blur-md border border-white/[0.08] shadow-[0_8px_24px_rgba(0,0,0,0.25)]'
            }`}
          >
            {/* Brand Logo */}
            <Link
              to="/"
              className="group flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg py-1 px-1.5"
              aria-label="Al-Fakhri Home"
            >
              <span className="font-heading font-bold text-lg sm:text-xl tracking-tight text-white group-hover:text-blue-400 transition-colors">
                Al-Fakhri<span className="text-blue-500">.</span>
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full p-1">
              {NAV_ITEMS.map((item) => {
                const isActive = isHome && activeSection === item.href;
                return (
                  <a
                    key={item.href}
                    href={getHref(item.href)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 relative ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-zinc-400 hover:text-white hover:bg-white/[0.06]'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>

            {/* Desktop Right Action */}
            <div className="hidden md:flex items-center">
              <motion.a
                href={getHref('contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                <span>Hire Me</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </motion.a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>
        </motion.div>
      </header>

      {/* Mobile Menu Overlay with AnimatePresence */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#090a0f]/95 backdrop-blur-xl md:hidden flex flex-col justify-between p-6 pt-24"
            aria-hidden={!menuOpen}
          >
            <div className="flex flex-col space-y-2">
              <p className="text-xs uppercase font-mono tracking-widest text-zinc-500 px-3 mb-2">
                Navigation
              </p>
              {NAV_ITEMS.map((item, idx) => {
                const isActive = isHome && activeSection === item.href;
                return (
                  <motion.a
                    key={item.href}
                    href={getHref(item.href)}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-lg font-heading font-medium transition-colors ${
                      isActive
                        ? 'bg-blue-600 text-white'
                        : 'text-zinc-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs font-mono opacity-60">#0{NAV_ITEMS.indexOf(item) + 1}</span>
                  </motion.a>
                );
              })}
            </div>

            {/* Mobile Menu Footer Details */}
            <div className="border-t border-white/10 pt-6 mt-auto">
              <p className="text-xs font-mono text-zinc-400 mb-3">Direct Inquiries</p>
              <a
                href="mailto:alfakhri323@gmail.com"
                className="flex items-center gap-2 text-white font-medium hover:text-blue-400 transition-colors mb-4"
              >
                <Mail className="w-4 h-4 text-blue-500" />
                <span>alfakhri323@gmail.com</span>
              </a>
              <a
                href={getHref('contact')}
                onClick={() => setMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-500 transition-colors"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
