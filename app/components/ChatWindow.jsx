"use client";

import { useState, useRef, useEffect } from "react";
import { FiX, FiSend } from "react-icons/fi";

export default function ChatWindow({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi there! 👋 I'm Rakesh, a Full Stack Developer. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [visitorInfo, setVisitorInfo] = useState({ name: "", email: "" });
  const [showInfoForm, setShowInfoForm] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // If first message and no visitor info, ask for it
    if (messages.length === 1 && !visitorInfo.name) {
      setShowInfoForm(true);
      return;
    }

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const messageToSend = inputValue;
    setInputValue("");
    setIsLoading(true);

    try {
      // Send message to your email
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: messageToSend,
          visitorName: visitorInfo.name,
          visitorEmail: visitorInfo.email,
        }),
      });

      if (response.ok) {
        // Show confirmation that message was sent
        const confirmationMessage = {
          id: messages.length + 2,
          text: "Thanks for your message! I've received it and will get back to you soon. 📧",
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, confirmationMessage]);
      } else {
        // Show error message
        const errorMessage = {
          id: messages.length + 2,
          text: "Sorry, there was an issue sending your message. Please try the contact form instead.",
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, errorMessage]);
      }
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage = {
        id: messages.length + 2,
        text: "Connection error. Please use the contact form to reach me.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-28 left-6 z-50 w-80 h-96 rounded-3xl shadow-2xl overflow-hidden flex flex-col bg-white dark:bg-slate-800 animate-fadeInUp">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center">
            <span className="text-lg">💬</span>
          </div>
          <div>
            <h3 className="text-white font-semibold">Rakesh</h3>
            <p className="text-xs text-purple-100">Online</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Close chat"
        >
          <FiX size={20} className="text-white" />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-slate-900">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-2xl ${
                msg.sender === "user"
                  ? "bg-purple-600 text-white rounded-br-none"
                  : "bg-gray-200 dark:bg-slate-700 text-gray-900 dark:text-white rounded-bl-none"
              }`}
            >
              <p className="text-sm">{msg.text}</p>
              <p
                className={`text-xs mt-1 ${
                  msg.sender === "user"
                    ? "text-purple-100"
                    : "text-gray-500 dark:text-gray-400"
                }`}
              >
                {msg.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-200 dark:bg-slate-700 px-4 py-3 rounded-2xl rounded-bl-none">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Visitor Info Form */}
      {showInfoForm && (
        <div className="border-t border-gray-200 dark:border-slate-700 p-4 bg-blue-50 dark:bg-slate-700">
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
            Before we chat, could you tell me your name and email? (optional)
          </p>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Your name"
              value={visitorInfo.name}
              onChange={(e) => setVisitorInfo(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-3 py-2 text-sm rounded-md bg-white dark:bg-slate-600 border border-gray-200 dark:border-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your email (optional)"
              value={visitorInfo.email}
              onChange={(e) => setVisitorInfo(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-3 py-2 text-sm rounded-md bg-white dark:bg-slate-600 border border-gray-200 dark:border-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setShowInfoForm(false);
                  // Now send the original message
                  if (inputValue.trim()) {
                    handleSendMessage({ preventDefault: () => {} });
                  }
                }}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md transition-colors"
              >
                Continue
              </button>
              <button
                onClick={() => setShowInfoForm(false)}
                className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white text-sm rounded-md transition-colors"
              >
                Skip
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Input Area */}
      <form
        onSubmit={handleSendMessage}
        className="border-t border-gray-200 dark:border-slate-700 p-4 bg-white dark:bg-slate-800"
      >
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={showInfoForm ? "Please fill the form above first..." : "Type a message..."}
            disabled={showInfoForm}
            className="flex-1 px-4 py-2 rounded-full bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-500 dark:placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <button
            type="submit"
            disabled={isLoading || showInfoForm}
            className="p-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Send message"
          >
            <FiSend size={18} />
          </button>
        </div>
      </form>
    </div>
  );
}