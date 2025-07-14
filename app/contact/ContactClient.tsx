"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function ContactClient() {
  const searchParams = useSearchParams();
  const defaultSubject = searchParams.get("subject") || "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: defaultSubject,
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
    <section className="relative z-10 max-w-screen-xl mx-auto py-10 px-2 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-6xl font-bold mb-6 sm:mb-8">Get in Touch</h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-4 sm:mb-6">
          Got a question or something to share? Whether it&apos;s feedback or a blog idea, we&apos;re listening!!
        </p>

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
                  className="w-full pl-4 pr-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
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
                  className="w-full pl-4 pr-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
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
                className="w-full pl-4 pr-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                placeholder="What&apos;s this about?"
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
                className="w-full pl-4 pr-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none"
                placeholder="Tell us more about your blog idea, project, or requirement..."
              />
            </div>

            {success && (
              <p className={`text-center font-medium ${success.includes("success") ? "text-green-500" : "text-red-500"}`}>
                {success}
              </p>
            )}

            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 text-white ${
                  loading ? "bg-gray-700 cursor-not-allowed" : "bg-gradient-to-br from-purple-600 to-pink-500 hover:from-pink-600 hover:to-yellow-400"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>

        {/* Sales Email Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-2">Or reach us directly at:</h2>
          <p className="text-gray-300 text-lg">
            <a
              href="mailto:sales@qr-pixel.com"
              className="text-blue-400 hover:text-blue-500 underline inline-flex items-center gap-2 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              sales@qr-pixel.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
