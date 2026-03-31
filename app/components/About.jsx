"use client";

import { FaDownload } from "react-icons/fa6";
import ParticleBackground from "./ParticleBackground";

export default function About() {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
     link.href = '/RAKESH@CV(2).pdf';
     link.download = 'RAKESH@CV(2).pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 transition-colors duration-300 overflow-hidden"
    >
      <ParticleBackground />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-3xl opacity-20 -top-48 -right-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-yellow-200 dark:bg-yellow-900/30 rounded-full blur-3xl opacity-20 -bottom-48 -left-48 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-3 mb-16">
          <span className="text-3xl">👨‍💻</span>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Profile Image */}
          <div className="flex justify-center">
            <img
              src="/image/Focused laptop.png"   
              alt="Profile"
              className="w-144 h-92 rounded-lg object-cover shadow-lg border-4 border-gray-200 dark:border-gray-800 hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Content */}
          <div className="relative">
            <div className="absolute inset-0 w-80 h-80 bg-gray-300 dark:bg-gray-700 rounded-full opacity-20 blur-2xl"></div>

            <div className="relative z-10">
              <h3 className="text-4xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                I'm Rakesh Kumar   
              </h3>

              <p className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-6">
                Full Stack Developer 🚀   
              </p>

              <div className="p-8 mb-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  I am a passionate Full Stack Developer with experience in building modern web applications. I specialize in MERN stack development (MongoDB, Express.js, React, Node.js) and also work with Next.js and Tailwind CSS. I enjoy creating scalable and user-friendly applications with clean UI and efficient backend logic.
                </p>

                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  <span className="font-bold text-purple-600">Location:</span> Noida, India 
                </p>

                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  <span className="font-bold text-purple-600">Email:</span> rakeshkumar06560@gmail.com 
                </p>
              </div>

              {/* Resume Button */}
              <button 
                onClick={handleResumeDownload}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-purple-700 hover:bg-purple-800 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              >
                <FaDownload size={20} />
                <span>Resume</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}