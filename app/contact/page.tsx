"use client";

import { useState } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess("Message sent successfully!");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setSuccess("Failed to send message. Try again later.");
      }
    } catch {
      setSuccess("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen bg-black text-white pt-3 overflow-hidden">
      <AnimatedBackground />

      <section className="relative z-10 max-w-screen-xl mx-auto py-10 px-2 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-6xl font-bold mb-6 sm:mb-8">Get in Touch</h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-4 sm:mb-6">
            We are here to help! Send us a message and we will get back to you as soon as possible.
          </p>

          {/* Form Box */}
          <div className="bg-black/90 backdrop-blur-sm rounded-3xl p-4 md:p-16 shadow-2xl border border-gray-700">
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-300">Subject</label>
                <input
                  type="text"
                  id="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none"
                  placeholder="Tell us more about your needs..."
                />
              </div>

              {success && (
                <p className={`text-center font-medium ${success.includes("success") ? "text-green-500" : "text-red-500"}`}>
                  {success}
                </p>
              )}

              {/* Premium Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className={`relative inline-flex items-center justify-center px-8 py-3 rounded-xl text-sm sm:text-base font-semibold tracking-wide transition-all duration-300 overflow-hidden
                    ${
                      loading
                        ? "bg-gray-700 cursor-not-allowed"
                        : "bg-gradient-to-br from-[#1e1e1e]/70 to-[#2a2a2a]/60 hover:from-purple-700/80 hover:to-pink-600/80"
                    }
                    text-white backdrop-blur-md border border-purple-800/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] group`}
                >
                  {/* Glow Ring */}
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 blur-md opacity-20 group-hover:opacity-40 transition duration-300" />

                  {/* Icon + Text */}
                  <span className="relative z-10 flex items-center gap-2">
                    <svg
                      className={`w-5 h-5 ${loading ? "animate-spin" : "animate-pulse"} text-pink-400 group-hover:text-white`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                    {loading ? "Sending..." : "Send Message"}
                  </span>
                </button>
              </div>
            </form>
          </div>

          <div className="mt-6">
            <h2 className="text-3xl font-semibold mb-4">Or reach us directly at:</h2>
            <p className="text-gray-300 text-xl">
              <a href="mailto:sales@qr-pixel.com" className="hover:text-blue-500 transition-colors duration-300">
                <svg className="inline w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                sales@qr-pixel.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
