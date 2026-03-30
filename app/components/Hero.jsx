"use client";

import { useState, useEffect } from "react";
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import ParticleBackground from "./ParticleBackground";

export default function Hero() {
  const roles = [
    "Frontend Development",
    "Web Development",
    "Web Designer",
    "UI/UX Designer",
  ];

  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [hoverDirection, setHoverDirection] = useState(null);

  // typing/deleting effect
  useEffect(() => {
    let timeout;
    const fullText = roles[currentRole];

    if (!isDeleting) {
      if (displayText !== fullText) {
        timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        }, 150);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 1000);
      }
    } else {
      if (displayText !== "") {
        timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length - 1));
        }, 75);
      } else {
        setIsDeleting(false);
        setCurrentRole((i) => (i + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  // Handle avatar hover direction
  const handleAvatarHover = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const width = rect.width;
    const height = rect.height;

    // Calculate which side is hovered
    const leftDist = x;
    const rightDist = width - x;
    const topDist = y;
    const bottomDist = height - y;

    const minDist = Math.min(leftDist, rightDist, topDist, bottomDist);

    if (minDist === leftDist) {
      setHoverDirection("left");
    } else if (minDist === rightDist) {
      setHoverDirection("right");
    } else if (minDist === topDist) {
      setHoverDirection("top");
    } else {
      setHoverDirection("bottom");
    }
  };

  const handleAvatarLeave = () => {
    setHoverDirection(null);
  };

  return (
    <section id="home" className="relative min-h-screen pt-24 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950">
      {/* Particle / animated background */}
      <ParticleBackground />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated circles and shapes */}
        <div className="absolute w-96 h-96 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-3xl opacity-20 -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-yellow-200 dark:bg-yellow-900/30 rounded-full blur-3xl opacity-20 -bottom-48 -right-48 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Geometric decorative elements */}
        <svg className="absolute w-full h-full opacity-10 dark:opacity-5 animate-updown" viewBox="0 0 1000 1000">
          <circle cx="100" cy="100" r="50" stroke="currentColor" fill="none" className="text-blue-600"/>
          <circle cx="900" cy="200" r="30" stroke="currentColor" fill="none" className="text-yellow-600"/>
          <circle cx="500" cy="800" r="40" stroke="currentColor" fill="none" className="text-blue-600"/>
          <line x1="100" y1="100" x2="500" y2="500" stroke="currentColor" className="text-blue-600"/>
          <line x1="900" y1="200" x2="500" y2="500" stroke="currentColor" className="text-yellow-600"/>
        </svg>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-120px)]">
          {/* Left Side - Text Content */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <h1 className="text-6xl md:text-7xl font-bold text-black dark:text-white mb-2">
                Hi There, <span className="text-6xl">👋</span>
              </h1>
              <div className="flex items-center gap-3">
                <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
                  I'm <span>Rakesh </span><span className="text-orange-500 dark:bg-gradient-to-br dark:from-teal-300 dark:via-yellow-300 dark:to-pink-300 dark:bg-clip-text dark:text-transparent">Kumar</span>
                </h2>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-2">
              I Am Into <span className="font-semibold text-red-800 dark:text-red-400">{displayText}|</span>
            </p>

            {/* About Me Button */}
            <button className="inline-flex items-center gap-2 w-fit px-6 py-3 mt-6 rounded-full bg-purple-700 hover:bg-purple-800 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
              <a href="#about">About Me</a>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>


            <div className="mt-4 text-md text-gray-600 dark:text-gray-300">Let's Connect with me</div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://www.linkedin.com/in/rakesh-kumar-5631b933a/?skipRedirect=true"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 transition-all duration-300"
              >
                <FiLinkedin size={24} />
              </a>
               <a
                href="https://www.instagram.com/romieo_rakesh_razz/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 transition-all duration-300"
              >
                <FiInstagram size={24} />
              </a>
              <a
                href="https://x.com/RakeshK23760115"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 transition-all duration-300"
              >
                <FiTwitter size={24} />
              </a>
              <a
                href="https://github.com/Rakesh75419"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 transition-all duration-300"
              >
                <FiGithub size={24} />
              </a>
            </div>
          </div>

          {/* Right Side - Avatar */}
          <div className="flex justify-center items-center">
            <div
              className={`avatar-container relative flex justify-center items-center transition-all duration-700 ${hoverDirection === "left" ? "fade-from-right" : ""} ${hoverDirection === "right" ? "fade-from-left" : ""} ${hoverDirection === "top" ? "fade-from-bottom" : ""} ${hoverDirection === "bottom" ? "fade-from-top" : ""}`}
              onMouseMove={handleAvatarHover}
              onMouseLeave={handleAvatarLeave}
            >
              {/* Gradient ring around avatar (teal → yellow → pink) */}
              <div className="relative w-80 h-80 flex items-center justify-center">

                {/* Glow effect */}
                <div className="absolute w-full h-full rounded-full 
                  bg-purple-800  blur-2xl opacity-70 animate-pulse">
                </div>

                {/* Border */}
                <div className="relative w-80 h-80 rounded-full p-[3px] 
                  bg-gradient-to-br from-purple-600 via-pink-500 to-purple-700">

                  {/* Image */}
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src="/image/RakeshP1.jpeg"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}