"use client";
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter, } from "react-icons/fi";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";


export default function Footer() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/RAKESH@CV(2).pdf"; 
    link.download = "RAKESH@CV(2).pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="relative py-12 px-6 bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 transition-colors duration-300 overflow-hidden">
      {/* animated bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-72 h-72 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-3xl opacity-20 -left-40 -top-36 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-yellow-200 dark:bg-yellow-900/30 rounded-full blur-3xl opacity-20 -right-40 -bottom-36 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 - Brand */}
        <div>
         <a href="#home" className="flex items-center gap-2 mb-4">
            <img
              src="/image/rakeshlogo3.png"
              alt="Logo"
              className="w-15 h-15 object-contain transition-transform duration-300 hover:scale-110"
            />
          <h3 className="text-xl font-bold  text-gray-900 dark:text-white">
          <span className="hover:font-bungee hover:scale-110 transition-all duration-300 inline-block">
            Rakesh
          </span>
        </h3>
         </a>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Thank you for visiting my personal portfolio website. Connect with me over socials or download my CV to see detailed experience.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <button onClick={handleDownload} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-700 hover:bg-purple-800 text-white font-semibold transition">
              <FaDownload size={20} /> Download CV
            </button>
          </div>


          <div className="mt-4">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Keep Rising 🚀. Connect with me over live chat!</p>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="flex flex-col items-start md:items-center">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li><a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400">Home</a></li>
            <li><a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a></li>
            <li><a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400">Skills</a></li>
            <li><a href="#education" className="hover:text-blue-600 dark:hover:text-blue-400">Education</a></li>
            <li><a href="#work" className="hover:text-blue-600 dark:hover:text-blue-400">Work</a></li>
            <li><a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400">Experience</a></li>
            <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div className="text-gray-700 dark:text-gray-300">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Contact Info</h4>
          <div className="flex items-center gap-3 mb-2"><FaPhone /> <span>+91 7541963512</span></div>
          <div className="flex items-center gap-3 mb-2"><FaEnvelope /> <span>rakeshkumar06560@gmail.com</span></div>
          <div className="flex items-center gap-3 mb-4"><FaMapMarkerAlt /> <span>Noida Uttar Pradesh</span></div>

          <div className="flex items-center gap-3 text-2xl">
            <a href="https://github.com/Rakesh75419" className="p-2 rounded-full hover:bg-purple-100 dark:hover:bg-purple-800 transition text-gray-800 dark:text-white"><FiGithub /></a>
            <a href="https://www.linkedin.com/in/rakesh-kumar-5631b933a/?trk=public-profile-join-page" className="p-2 rounded-full hover:bg-purple-100 dark:hover:bg-purple-800 transition text-gray-800 dark:text-white"><FiLinkedin /></a>
            <a href="https://www.instagram.com/romieo_rakesh_razz/" className="p-2 rounded-full hover:bg-purple-100 dark:hover:bg-purple-800 transition text-gray-800 dark:text-white"><FiInstagram /></a>
            <a href="https://x.com/RakeshK23760115" className="p-2 rounded-full hover:bg-purple-100 dark:hover:bg-purple-800 transition text-gray-800 dark:text-white"><FiTwitter /></a>
            <a href="https://wa.me/917541963512"target="_blank"rel="noopener noreferrer"><FaWhatsapp size={22} /></a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 mt-8 border-t border-gray-200 dark:border-gray-800 pt-6 text-center text-sm text-gray-600 dark:text-gray-400">
        Designed With ❤️ By Rakesh
      </div>
    </footer>
  );
}