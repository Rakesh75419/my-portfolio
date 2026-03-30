"use client";

import { useState } from "react";
import { FiHeadphones } from "react-icons/fi";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");
    const [message, setMessage] = useState("");

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("");
        setMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus("success");
                setMessage("Message sent successfully! 🚀");
                setForm({ name: "", email: "", phone: "", message: "" });
                setTimeout(() => setMessage(""), 5000);
            } else {
                setStatus("error");
                setMessage(`Error: ${data.error} ${data.details ? `- ${data.details}` : ""}`);
                console.error("Send error details:", data);
                setTimeout(() => setMessage(""), 8000);
            }
        } catch (error) {
            setStatus("error");
            setMessage("Failed to send message. Please try again.");
            console.error("Error:", error);
            setTimeout(() => setMessage(""), 8000);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="relative py-12 px-6 bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 transition-colors duration-300 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute w-96 h-96 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-3xl opacity-20 -top-48 -left-48 animate-pulse"></div>
                <div className="absolute w-96 h-96 bg-yellow-200 dark:bg-yellow-900/30 rounded-full blur-3xl opacity-20 -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '2s' }}></div>
                <svg className="absolute w-full h-full opacity-10 dark:opacity-5 animate-updown" viewBox="0 0 1000 1000">
                    <circle cx="100" cy="100" r="50" stroke="currentColor" fill="none" className="text-blue-600"/>
                    <circle cx="900" cy="200" r="30" stroke="currentColor" fill="none" className="text-yellow-600"/>
                    <circle cx="500" cy="800" r="40" stroke="currentColor" fill="none" className="text-blue-600"/>
                    <line x1="100" y1="100" x2="500" y2="500" stroke="currentColor" className="text-blue-600"/>
                    <line x1="900" y1="200" x2="500" y2="500" stroke="currentColor" className="text-yellow-600"/>
                </svg>
            </div>

            <div className="mb-2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-3">
                   <span className="text-3xl">🎧</span> Get In Touch
                </h2>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="bg-white dark:bg-slate-800/50 rounded-3xl shadow-2xl overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-0 items-center">
                        {/* Left illustration (larger) */}
                        <div className="flex items-center justify-center bg-transparent">
                            <img src="/image/contact.png" alt="Contact illustration" className="w-72 md:w-96 lg:w-[500px] rounded-lg object-cover" />
                        </div>

                        {/* Right form area */}
                        <div className="p-6 md:p-10">
                            <div className="text-center mb-6">
                                <p className="text-gray-600 dark:text-gray-300 mt-2">Have a project or want to say hi? Fill out the form and I'll get back to you.</p>
                            </div>


                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
                                        <input name="name" value={form.name} onChange={handleChange} required placeholder="Your Name" className="p-3 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-black focus:outline-none focus:ring-2 focus:ring-purple-500 w-full" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Your Email</label>
                                        <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="Your Email" className="p-3 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-black focus:outline-none focus:ring-2 focus:ring-purple-500 w-full" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Phone (optional)</label>
                                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="p-3 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-black focus:outline-none focus:ring-2 focus:ring-purple-500 w-full" />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Your Message</label>
                                    <textarea name="message" rows={6} value={form.message} onChange={handleChange} required placeholder="Your Message" className="p-3 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-black focus:outline-none focus:ring-2 focus:ring-purple-500 w-full" />
                                </div>

                                <div className="flex items-center justify-between">
                                    <div />
                                    <div className="flex items-center gap-4">
                                        <button type="button" onClick={() => { setForm({ name: '', email: '', phone: '', message: '' }); }} className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200">Reset</button>
                                        <button type="submit" disabled={loading} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-700 hover:bg-purple-800 disabled:bg-gray-400 text-white font-semibold transition-shadow shadow-lg">
                                            {loading ? "Sending..." : "Send Message"}
                                        </button>
                                    </div>
                                </div>
                                {/* Status Message */}
                                {message && (
                                <div className={`mb-6 p-4 rounded-lg border transition-all duration-300 ${
                                    status === "success"
                                        ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200"
                                        : "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200"
                                }`}>
                                    <div className="flex items-center gap-2">
                                        <span className="text-lg">
                                            {status === "success" ? "✉️" : "❌"}
                                        </span>
                                        <p className="text-sm font-medium">{message}</p>
                                    </div>
                                </div>
                            )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}