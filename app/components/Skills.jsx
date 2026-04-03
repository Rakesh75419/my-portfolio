import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaMongoDB,


  
} from "react-icons/fa";
import { SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";


export default function Skills() {
  const skills =
   [
     { name: "React.js", icon: <FaReact size={40} />, color: "from-cyan-400 to-blue-500" },

     { name: "Javascript", icon: <SiJavascript size={40} />, color: "from-yellow-400 to-yellow-600" },

     { name: "Tailwind", icon: <SiTailwindcss size={40} />, color: "from-cyan-400 to-cyan-600" },

     { name: "Express.js", icon: <SiExpress />, color: "from-gray-700 to-black" },

     { name: "Git", icon: <FaGitAlt size={40} />, color: "from-orange-500 to-red-500" },

     { name: "Node.js", icon: <FaNodeJs size={40} />, color: "from-green-500 to-green-700" },

     { name: "HTML", icon: <FaHtml5 size={40} />, color: "from-orange-500 to-red-500" },

     { name: "CSS", icon: <FaCss3Alt size={40} />, color: "from-blue-500 to-cyan-500" },
    
     { name: "MongoDB", icon: <SiMongodb size={40} />, color: "from-green-400 to-green-600" },

     { name: "API Integration", icon: "🔌", color: "from-indigo-500 to-blue-600" },

     { name: "Next.js", icon: <SiNextdotjs size={40} />, color: "from-gray-700 to-black" },

     { name: "REST API", icon: "🚀", color: "from-green-500 to-green-700" },

    ];

  return (
    <section
      id="skills"
      className="relative py-24 px-6 bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 transition-colors duration-300 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-3xl opacity-20 -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-yellow-200 dark:bg-yellow-900/30 rounded-full blur-3xl opacity-20 -bottom-48 -right-48 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Geometric decorative elements */}
        <svg className="absolute w-full h-full opacity-10 dark:opacity-5" viewBox="0 0 1000 1000">
          <circle cx="100" cy="100" r="50" stroke="currentColor" fill="none" className="text-blue-400"/>
          <circle cx="900" cy="200" r="30" stroke="currentColor" fill="none" className="text-yellow-400"/>
          <circle cx="500" cy="800" r="40" stroke="currentColor" fill="none" className="text-blue-400"/>
          <line x1="100" y1="100" x2="500" y2="500" stroke="currentColor" className="text-blue-300"/>
          <line x1="900" y1="200" x2="500" y2="500" stroke="currentColor" className="text-yellow-300"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 flex items-center justify-center gap-3">
            <span className="text-3xl">💻</span>
            Skills & Abilities
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative group h-40 rounded-2xl bg-white dark:bg-slate-800/50 backdrop-blur-md border border-gray-200 dark:border-purple-400/30 hover:border-blue-300 dark:hover:border-purple-300/60 overflow-hidden shadow-lg dark:shadow-2xl hover:shadow-xl dark:hover:shadow-purple-500/50 transition-all duration-300 cursor-pointer hover:-translate-y-2"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-500/0 group-hover:to-blue-500/10 dark:group-hover:to-purple-500/20 transition duration-300" />

              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center gap-3 p-4 text-center">
                <div className="text-4xl md:text-5xl text-gray-800 dark:text-white">
                  {typeof skill.icon === 'string' ? skill.icon : skill.icon}
                </div>
                <p className="font-bold text-gray-900 dark:text-white text-sm md:text-base">{skill.name}</p>
              </div>

              {/* Border Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 blur transition duration-300 bg-gradient-to-r ${skill.color}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}