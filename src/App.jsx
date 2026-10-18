import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import { ArrowUp } from 'lucide-react';

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      <Preloader />
      
      <div className="min-h-screen bg-[#090a0f] text-zinc-100 flex flex-col font-sans selection:bg-blue-600/30 selection:text-white">
        <Navbar />
        
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </div>
        
        <footer className="py-12 bg-[#08090d] border-t border-white/[0.06] relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              
              <div className="text-center sm:text-left">
                <p className="font-heading font-bold text-lg text-white mb-1">
                  Al-Fakhri<span className="text-blue-500">.</span>
                </p>
                <p className="text-xs text-zinc-400 font-mono">
                  Full Stack Developer of Landexafy &bull; Data & IT Specialist of JP & CO &bull; Data Science Student
                </p>
              </div>

              <div className="flex items-center gap-6">
                <p className="text-xs text-zinc-400">
                  &copy; {new Date().getFullYear()} Fatih Al-Fakhri Muhammad.
                </p>
                
                <button
                  onClick={scrollToTop}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  aria-label="Scroll back to top of page"
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
