"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { FiSend, FiCheck } from "react-icons/fi";
import Image from "next/image";

interface InputFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

interface TextAreaFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

interface ImageCardProps {
  src: string;
  alt: string;
  title: string;
  address: string[];
  mapLink: string;
}

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
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.id]: e.target.value });

  const handleSubmit = async (e: FormEvent) => {
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
  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;

  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-6 py-9 sm:px-10 lg:px-20 overflow-hidden pb-32">
      <div className="fixed inset-0 -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/contact.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="w-full max-w-screen-xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Got a question or something to share? Whether it’s feedback or a blog idea, we’re listening!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 items-start">
          <motion.div
            className="xl:col-span-2 bg-black/70 backdrop-blur-md rounded-2xl p-6 border border-gray-700 shadow-xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <FiSend className="mr-2 text-purple-400" />
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-10 py-11">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <InputField
                  id="name"
                  label="Full Name"
                  value={form.name}
                  onChange={handleChange}
                />
                <InputField
                  id="email"
                  type="email"
                  label="Email Address"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <InputField
                id="subject"
                label="Subject"
                value={form.subject}
                onChange={handleChange}
              />
              <TextAreaField
                id="message"
                label="Share your blog idea, project, or requirement"
                value={form.message}
                onChange={handleChange}
              />

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3.5 px-6 rounded-xl font-medium text-white transition-all duration-300 flex items-center justify-center space-x-2 ${
                    loading
                      ? "bg-gray-800 cursor-not-allowed"
                      : "bg-black hover:bg-white hover:text-black border border-white shadow-xl hover:shadow-white/30"
                  }`}
                >
                  {loading ? (
                    <Spinner />
                  ) : success ? (
                    <>
                      <FiCheck className="text-xl" /> {success}
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
                    We’ll get back to you within 24 hours
                  </p>
                )}
              </div>
            </form>
          </motion.div>

          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <ImageCard
              src="/burj khalifa.jpg"
              alt="Dubai Office"
              title="Dubai Office"
              address={[
                "Warehouse 123, Al Habtoor Warehouse",
                "Al Qusais Industrial Area 2, Bagadad Street",
                "Dubai, UAE",
              ]}
              mapLink="https://www.google.com/maps?q=QR+Pixel,+Dubai"
            />
            <ImageCard
              src="/vidhan sabha.jpg"
              alt="India Office"
              title="India Office"
              address={[
                "QR Pixel Pvt. Ltd., First Floor, Block-2, KSSIDC Complex",
                "A-202, Indra Nagar, Electronic City Phase I",
                "Bengaluru, Karnataka 560100, India",
              ]}
              mapLink="https://maps.app.goo.gl/zNuAjEVHyN6tV5pR9"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Reusable Components
// ─────────────────────────────────────────────

function InputField({ id, label, value, onChange, type = "text" }: InputFieldProps) {
  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        required
        placeholder=" "
        className="w-full px-5 py-3.5 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-transparent peer focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
      />
      <label
        htmlFor={id}
        className="absolute left-5 -top-2.5 px-1 text-sm text-gray-400 bg-gray-900/90 transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-400"
      >
        {label}
      </label>
    </div>
  );
}

function TextAreaField({ id, label, value, onChange }: TextAreaFieldProps) {
  return (
    <div className="relative">
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        required
        rows={6}
        placeholder=" "
        className="w-full px-5 py-3.5 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-transparent peer focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all resize-none"
      />
      <label
        htmlFor={id}
        className="absolute left-5 -top-2.5 px-1 text-sm text-gray-400 transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-purple-400"
      >
        {label}
      </label>
    </div>
  );
}

function ImageCard({ src, alt, title, address, mapLink }: ImageCardProps) {
  return (
    <div className="relative group rounded-2xl overflow-hidden shadow-xl border border-gray-700 w-full">
      <Image
        src={src}
        alt={alt}
        width={900}
        height={600}
        className="w-full object-cover object-center aspect-[7/6] transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 lg:bg-opacity-70 opacity-65 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-center p-6">
        <p className="text-white text-sm sm:text-base leading-relaxed">
          <span className="font-semibold text-lg">{title}</span>
          <br />
          {address.map((line, idx) => (
            <span key={idx}>
              {line}
              <br />
            </span>
          ))}
          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-blue-400 hover:text-pink-300 transition-colors text-sm"
          >
            View on Map →
          </a>
        </p>
      </div>
    </div>
  );
}

function Spinner() {
  return (
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
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        ></path>
      </svg>
      Sending...
    </>
  );
}
