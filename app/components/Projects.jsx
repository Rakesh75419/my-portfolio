import { FiFolder } from "react-icons/fi";
import ParticleBackground from "./ParticleBackground";

export default function Projects() {
  // add video/gif path and live URL for each project
  const projects = [
    {
      title: "Quick-mart-Grocery-shop",
      media: "/videos/QuickMart.mp4",
      live: "https://quick-mart-grocery-shop.vercel.app/"
    },
    {
      title: "Weather Forecast Application",
      media: "/videos/WeatherForecastApp.mp4",
      live: "",
    },
    {
      title: "Amazon Clone UI Design",
      media: "/videos/Amazon Clone.mp4",
      live: "",
    },
   
 
  
  ];

  return (
    <section
      id="projects"
      className="relative py-24 px-6 bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 transition-colors duration-300 overflow-hidden"
    >
      {/* animated background */}
      <ParticleBackground />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-3xl opacity-20 -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-yellow-200 dark:bg-yellow-900/30 rounded-full blur-3xl opacity-20 -bottom-48 -right-48 animate-pulse" style={{animationDelay:'2s'}}></div>
        <svg className="absolute w-full h-full opacity-10 dark:opacity-5 animate-updown" viewBox="0 0 1000 1000">
          <circle cx="100" cy="100" r="50" stroke="currentColor" fill="none" className="text-blue-600"/>
          <circle cx="900" cy="200" r="30" stroke="currentColor" fill="none" className="text-yellow-600"/>
          <circle cx="500" cy="800" r="40" stroke="currentColor" fill="none" className="text-blue-600"/>
          <line x1="100" y1="100" x2="500" y2="500" stroke="currentColor" className="text-blue-600"/>
          <line x1="900" y1="200" x2="500" y2="500" stroke="currentColor" className="text-yellow-600"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 flex items-center justify-center gap-3">
            <span className="text-3xl">🗄️</span>
            Projects Made
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, idx) => (
            <a
              key={idx}
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group rounded-2xl overflow-hidden shadow-lg dark:shadow-2xl hover:shadow-xl dark:hover:shadow-purple-500/50 transition-shadow duration-300"
            >
              {/* show gif/video if available */}
              <div className="w-full h-56 animate-fade-in group-hover:scale-105 transition-transform duration-300">
                {p.media ? (
                  (() => {
                    const lower = p.media.toLowerCase();
                    if (lower.endsWith('.gif') || lower.endsWith('.png') || lower.endsWith('.jpg') || lower.endsWith('.jpeg')) {
                      return <img src={p.media} alt={p.title} className="w-full h-full object-cover" />;
                    }
                    // treat mp4/webm/ogg as video and autoplay muted for silent autoplay
                    if (lower.endsWith('.mp4') || lower.endsWith('.webm') || lower.endsWith('.ogg')) {
                      const type = lower.endsWith('.mp4') ? 'video/mp4' : lower.endsWith('.webm') ? 'video/webm' : 'video/ogg';
                      return (
                        <video className="w-full h-full object-cover" autoPlay muted loop playsInline preload="auto" disablePictureInPicture>
                          <source src={p.media} type={type} />
                        </video>
                      );
                    }
                    return null;
                  })()
                ) : null}
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300"></div>
              <div className="relative p-6 bg-white dark:bg-slate-800">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Click to visit
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}