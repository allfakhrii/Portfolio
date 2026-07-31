import { useEffect, useState } from 'react';

const logos = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", style: { "--tx": "-210px", "--ty": "-120px", "--tr": "-35deg", "--d": "0.1s" } },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", style: { "--tx": "280px", "--ty": "-180px", "--tr": "45deg", "--d": "0.2s" } },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", style: { "--tx": "-130px", "--ty": "-250px", "--tr": "15deg", "--d": "0.3s" } },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", style: { "--tx": "190px", "--ty": "-210px", "--tr": "-25deg", "--d": "0.15s" } },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg", style: { "--tx": "-40px", "--ty": "-190px", "--tr": "60deg", "--d": "0.25s" } },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", style: { "--tx": "110px", "--ty": "-270px", "--tr": "-15deg", "--d": "0.35s" } },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", style: { "--tx": "-300px", "--ty": "-80px", "--tr": "20deg", "--d": "0.05s" } },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", style: { "--tx": "250px", "--ty": "-60px", "--tr": "-40deg", "--d": "0.4s" } }
];

export default function Preloader() {
  const [burst, setBurst] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // 800ms for burst
    const burstTimer = setTimeout(() => {
      setBurst(true);
    }, 800);

    // 2500ms for loaded
    const loadTimer = setTimeout(() => {
      setLoaded(true);
      document.body.classList.add('loaded'); // Needed for some global CSS if we keep it
    }, 2500);

    return () => {
      clearTimeout(burstTimer);
      clearTimeout(loadTimer);
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
              alt=""
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
