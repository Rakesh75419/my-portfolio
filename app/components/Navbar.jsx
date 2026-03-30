"use client";

import { useEffect, useState } from "react";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const navLinks = ['Home', 'About', 'Skills', 'Education', 'Projects', 'Experience', 'Contact'];
  const [activeLink, setActiveLink] = useState('Home');

  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode, mounted]);

  if (!mounted) return null;
 return (
  <nav className="fixed w-full top-0 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md z-50 shadow-sm border-b border-gray-200 dark:border-gray-800">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      {/* Logo or Brand Name (clickable -> home) */}
      <a href="#home" className="flex items-center gap-3">
        <div className="w-10 h-10 flex items-center justify-center relative">

            {/*  Smooth Continuous Moving Border */}
            <span className="absolute inset-0 rounded-full border-3 border-purple-500 spin-slow"></span>
            <img
              src="/image/Rakeshlogo.png"
              alt="Avatar"
              className="w-full h-full object-contain dark:invert rounded-full bg-white dark:bg-gray-900 p-[2px]"
            />
          </div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">RAKESH</h1>
      </a>

      {/* Desktop Navigation */}
      <div className="flex items-center gap-8">
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setActiveLink(link)}
              className={`text-sm font-medium transition ${
                activeLink === link
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
              }`}
            >
              {link}
            </a>
          ))}
        </div>
        
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-yellow-400 transition hover:bg-gray-300 dark:hover:bg-gray-700"
        >
          {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white transition hover:bg-gray-300 dark:hover:bg-gray-700"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </div>

    {/* Mobile Navigation Menu */}
    {menuOpen && (
      <div className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-gray-800">
        <div className="px-6 py-4 space-y-3 flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => {
                setMenuOpen(false);
                setActiveLink(link);
              }}
              className={`text-sm font-medium transition py-2 ${
                activeLink === link
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
              }`}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    )}
  </nav>
);

}