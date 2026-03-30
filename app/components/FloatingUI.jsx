"use client";

import { useState, useEffect } from "react";
import { FiArrowUp, FiMessageCircle } from "react-icons/fi";
import ChatWindow from "./ChatWindow";

export default function FloatingUI() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleChatClick = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      {/* Chat Window */}
      <ChatWindow isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      {/* Floating Chat Icon - Left Side */}
      <div className="fixed left-6 bottom-6 z-50 flex flex-col items-center gap-4">
        <button
          onClick={handleChatClick}
          className={`relative group p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 active:scale-95 ${
            isChatOpen
              ? "bg-gradient-to-br from-purple-600 to-blue-600"
              : "bg-gradient-to-br from-teal-300 via-yellow-300 to-pink-300"
          }`}
          aria-label="Open chat"
        >
          <FiMessageCircle
            size={24}
            className={isChatOpen ? "text-white" : "text-gray-900"}
          />
          {!isChatOpen && (
            <span className="absolute -top-2 -right-2 flex items-center justify-center w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full animate-pulse">
              1
            </span>
          )}
          <div className="absolute left-full ml-4 top-1/2 transform -translate-y-1/2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {isChatOpen ? "Close chat" : "Chat with me"}
          </div>
        </button>
      </div>

      {/* Back to Top Button - Right Side */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed right-6 bottom-6 z-50 p-4 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 active:scale-95 animate-fadeInUp"
          aria-label="Back to top"
        >
          <FiArrowUp size={24} />
        </button>
      )}
    </>
  );
}