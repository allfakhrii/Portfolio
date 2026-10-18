import { useEffect, useState } from 'react';

const logos = [
  { name: 'Python', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", style: { "--tx": "-210px", "--ty": "-120px", "--tr": "-35deg", "--d": "0.1s" } },
  { name: 'JavaScript', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", style: { "--tx": "280px", "--ty": "-180px", "--tr": "45deg", "--d": "0.2s" } },
  { name: 'React', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", style: { "--tx": "-130px", "--ty": "-250px", "--tr": "15deg", "--d": "0.3s" } },
  { name: 'Tailwind CSS', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", style: { "--tx": "190px", "--ty": "-210px", "--tr": "-25deg", "--d": "0.15s" } },
  { name: 'Go', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg", style: { "--tx": "-40px", "--ty": "-190px", "--tr": "60deg", "--d": "0.25s" } },
  { name: 'Node.js', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", style: { "--tx": "110px", "--ty": "-270px", "--tr": "-15deg", "--d": "0.35s" } },
  { name: 'PostgreSQL', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", style: { "--tx": "-300px", "--ty": "-80px", "--tr": "20deg", "--d": "0.05s" } },
  { name: 'Docker', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", style: { "--tx": "250px", "--ty": "-60px", "--tr": "-40deg", "--d": "0.4s" } }
];

export default function Preloader() {
  const [burst, setBurst] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // 700ms for logo burst
    const burstTimer = setTimeout(() => {
      setBurst(true);
    }, 700);

    // 2400ms for circle reveal
    const loadTimer = setTimeout(() => {
      setLoaded(true);
      document.body.classList.add('loaded');
    }, 2400);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setLoaded(true);
        document.body.classList.add('loaded');
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(burstTimer);
      clearTimeout(loadTimer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div id="preloader" style={{ pointerEvents: loaded ? 'none' : 'auto' }}>
      <div className="loader-content relative">
        <div id="burst-container" className="absolute inset-0 pointer-events-none flex items-center justify-center">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              className={`burst-logo ${burst ? 'animate-burst' : ''}`}
              style={logo.style}
              alt={logo.name}
            />
          ))}
        </div>

        <div className="loader-text text-white">
          <span>Al-Fakhri</span>
        </div>
        
        <div className="loader-bar-container">
          <div className="loader-bar"></div>
        </div>
      </div>
    </div>
  );
}
