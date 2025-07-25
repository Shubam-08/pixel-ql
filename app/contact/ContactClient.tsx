"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiSend, FiCheck } from "react-icons/fi";

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

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section className="relative z-10 max-w-8xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r bg-white mb-4">
          Get in Touch
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Got a question or something to share? Whether it&apos;s feedback or a blog idea, we&apos;re listening!!
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <FiSend className="mr-2 text-purple-400" />
            Send us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-transparent peer focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 -top-2.5 px-1 text-sm text-gray-400 bg-gray-900/80 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-400"
                >
                  Full Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-transparent peer focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 -top-2.5 px-1 text-sm text-gray-400 bg-gray-900/80 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-400"
                >
                  Email Address
                </label>
              </div>
            </div>

            <div className="relative">
              <input
                type="text"
                id="subject"
                value={form.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-transparent peer focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                placeholder=" "
              />
              <label
                htmlFor="subject"
                className="absolute left-4 -top-2.5 px-1 text-sm text-gray-400 bg-gray-900/80 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-400"
              >
                Subject
              </label>
            </div>

            <div className="relative">
              <textarea
                id="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-transparent peer focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all resize-none"
                placeholder=" "
              />
             <label
  htmlFor="message"
  className="absolute left-4 -top-2.5 px-1 text-sm text-gray-400 transition-all duration-200 
             peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 
             peer-focus:-top-5 peer-focus:text-sm peer-focus:text-purple-400"
>
  Share your blog idea, project, or requirement
</label>

            </div>

            <div className="pt-2">
              <button
  type="submit"
  disabled={loading}
  className={`w-full py-3.5 px-6 rounded-xl font-medium text-white transition-all duration-300
    ${loading
      ? "bg-gray-800 cursor-not-allowed"
      : "bg-black hover:bg-white hover:text-black border border-white shadow-xl hover:shadow-white/30"}
    flex items-center justify-center space-x-2`}
>
  {loading ? (
    <>
      <svg
        className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth={4}
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      Sending...
    </>
  ) : success ? (
    <>
      <FiCheck className="text-xl" />
      {success}
    </>
  ) : (
    <>
      <FiSend className="text-lg" />
      <span>Send Message</span>
    </>
  )}
</button>


              {!success && (
                <p className="mt-3 text-center text-sm text-gray-400">
                  We&apos;ll get back to you within 24 hours
                </p>
              )}
            </div>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Contact Card */}
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <FiMail className="mr-2 text-blue-900" />
              Contact Information
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-gray-800/50 p-3 rounded-lg text-blue-400">
                  <FiMail className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-400">Email</h3>
                  <a
                    href="mailto:sales@qr-pixel.com"
                    className="text-lg font-medium text-white hover:text-pink-400 transition-colors"
                  >
                    sales@qr-pixel.com
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-700/50">
               

                <div className="space-y-6">
                  {/* India Office */}
                  <div className="bg-gray-800/30 rounded-xl p-5 border border-gray-700/50 hover:border-pink-500/30 transition-all group">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-gray-800/50 p-2.5 rounded-lg text-blue-400 group-hover:bg-pink-500/20 transition-colors">
                        <FiMapPin className="h-5 w-5" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-white">India Office</h4>
                        <p className="mt-1 text-gray-300 leading-relaxed">
                          QR Pixel Pvt. Ltd.
                          <br />
                          First Floor, Block -2, KSSIDC Complex,<br />
                           A-202, Indra Nagar, Electronic City Phase I,<br /> Electronic City, Karnataka 560100 <br />
                           Bengaluru, India
                        </p>
                        <a
                          href="https://maps.app.goo.gl/zNuAjEVHyN6tV5pR9"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center text-sm font-medium text-blue-400 hover:text-pink-300 transition-colors"
                        >
                          View on Map
                          <svg
                            className="ml-1.5 h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Dubai Office */}
                  <div className="bg-gray-800/30 rounded-xl p-5 border border-gray-700/50 hover:border-pink-500/30 transition-all group">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-gray-800/50 p-2.5 rounded-lg text-blue-400 group-hover:bg-pink-500/20 transition-colors">
                        <FiMapPin className="h-5 w-5" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-white">Dubai Office</h4>
                        <p className="mt-1 text-gray-300 leading-relaxed">
                         Warehouse 123.
                        Al habtoor warehouse <br /> 
                        Al qusais industrial area 2 <br />
                        Bagadad street <br /> 
                        DUABI UAE
                        </p>
                        <a
                          href="https://www.google.com/maps?q=QR+Pixel,+Dubai"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center text-sm font-medium text-blue-400 hover:text-pink-300 transition-colors"
                        >
                          View on Map
                          <svg
                            className="ml-1.5 h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              
            </div>
          </div>

          
        </motion.div>
      </div>
    </section>
  );
}
