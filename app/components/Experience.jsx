"use client";

import { FiBriefcase } from "react-icons/fi";
import ParticleBackground from "./ParticleBackground";

export default function Experience() {
  const stats = [
    { value: "6+", labelTop: "month", labelBottom: "QSpiders, Noida" },
    { value: "3+", labelTop: "completed", labelBottom: "Projects" },
  ];

  return (
    <section
      id="experience"
      className="relative py-24 px-6 bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 transition-colors duration-300 overflow-hidden"
    >
      {/* Particle / animated background */}
      <ParticleBackground />
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-3xl opacity-20 -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-yellow-200 dark:bg-yellow-900/30 rounded-full blur-3xl opacity-20 -bottom-48 -right-48 animate-pulse" style={{ animationDelay: "2s" }}></div>

        {/* Geometric decorative elements */}
        <svg className="absolute w-full h-full opacity-10 dark:opacity-5 animate-updown" viewBox="0 0 1000 1000">
          <circle cx="100" cy="100" r="50" stroke="currentColor" fill="none" className="text-blue-800"/>
          <circle cx="900" cy="200" r="30" stroke="currentColor" fill="none" className="text-yellow-800"/>
          <circle cx="500" cy="800" r="40" stroke="currentColor" fill="none" className="text-blue-800"/>
          <line x1="100" y1="100" x2="500" y2="500" stroke="currentColor" className="text-blue-800"/>
          <line x1="900" y1="200" x2="500" y2="500" stroke="currentColor" className="text-yellow-800"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3">
            <span className="text-3xl">🏆</span>
            Experience
          </h2>
        </div>

        {/* Stats row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full p-1 bg-gradient-to-br from-teal-300 via-yellow-300 to-pink-300 shadow-2xl">
                <div className="w-full h-full rounded-full bg-white dark:bg-slate-800 flex items-center justify-center">
                  <span className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{s.value}</span>
                </div>
              </div>
              <div className="mt-4 text-gray-600 dark:text-gray-300">
                <div className="text-sm uppercase tracking-wide">{s.labelTop}</div>
                <div className="text-lg text-purple-600 dark:text-purple-300 font-semibold">{s.labelBottom}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}