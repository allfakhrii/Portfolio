import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const getHref = (item) => {
    const hash = `#${item.toLowerCase()}`;
    return isHome ? hash : `/${hash}`;
  };

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled ? 'py-4' : 'py-6'
        }`}
      >
        <div 
          className={`mx-auto transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            scrolled 
              ? 'max-w-4xl mx-4 md:mx-auto px-6 py-3 apple-glass rounded-full' 
              : 'max-w-7xl px-4 sm:px-6 lg:px-8 bg-transparent border border-transparent'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <Link to="/" className="font-heading font-bold text-2xl tracking-tighter text-white">
                Al-Fakhri<span className="text-blue-500">.</span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['Home', 'About', 'Works', 'Arsenal', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={getHref(item)}
                    className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-full text-sm font-medium hover:bg-white/10"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-white transition-colors relative z-[101]"
              >
                <span className="hamburger-box w-[30px] h-[20px] inline-block relative">
                  <span
                    className={`hamburger-inner block absolute top-1/2 mt-[-1px] w-[30px] h-[2px] bg-white rounded transition-all duration-300 ${
                      menuOpen ? 'bg-transparent' : ''
                    }`}
                  >
                    <span
                      className={`content-[''] block absolute w-[30px] h-[2px] bg-white rounded transition-all duration-300 ${
                        menuOpen ? 'top-0 rotate-45' : '-top-2'
                      }`}
                    ></span>
                    <span
                      className={`content-[''] block absolute w-[30px] h-[2px] bg-white rounded transition-all duration-300 ${
                        menuOpen ? 'bottom-0 -rotate-45' : '-bottom-2'
                      }`}
                    ></span>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Fullscreen Overlay */}
        <div
          className={`fixed inset-0 bg-[#09090b]/95 backdrop-blur-xl z-[100] md:hidden transition-opacity duration-300 ${
            menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          } flex flex-col items-center justify-center space-y-8`}
        >
          {/* Background Decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>

          {['Home', 'About', 'Works', 'Arsenal', 'Contact'].map((item, index) => (
            <a
              key={item}
              href={getHref(item)}
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-heading font-bold text-gray-300 hover:text-blue-500 transition-colors"
              style={{
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: menuOpen ? 1 : 0,
                transitionDelay: `${index * 100}ms`
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
