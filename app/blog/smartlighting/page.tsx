// app/blog/smartlighting/page.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SmartLightingPage() {
  return (
    <div className="bg-neutral-950 text-white font-sans">
      <main className="w-full min-h-screen overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-20 sm:pt-28 sm:pb-24">

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20 px-2"
          >
            <h3 className="text-3xl sm:text-6xl font-extrabold leading-tight tracking-tight mb-6 bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 text-transparent bg-clip-text">
              Smart Lighting, Smarter Living
            </h3>
            <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto px-2">
              Discover how intelligent lighting transforms the ambiance, energy, and functionality of every space.
            </p>
          </motion.div>

          {/* Informational Sections */}
          <div className="space-y-24 text-gray-300 text-base sm:text-lg leading-relaxed px-2 sm:px-0">

            {/* Section 1 */}
            <section className="flex flex-col md:flex-row gap-10 items-start">
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl sm:text-3xl font-semibold text-yellow-400 mb-4 border-l-4 border-yellow-500 pl-4">
                  What is Smart Lighting?
                </h2>
                <p className="text-justify">
                  Smart lighting adapts to your rhythm. It automatically adjusts brightness, color temperature, and scenes to match the time of day, your mood, or even your voice command. From homes to commercial buildings, it is a core element of intuitive environments.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <Image
                  src="/smart-lighting3.png"
                  alt="Smart Lighting Overview"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </section>

            {/* Section 2 */}
            <section className="flex flex-col-reverse md:flex-row gap-10 items-start">
              <div className="w-full md:w-1/2">
                <Image
                  src="/smart-lighting2.png"
                  alt="Smart Lighting Features"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl sm:text-3xl font-semibold text-orange-400 mb-4 border-l-4 border-orange-500 pl-4">
                  Signature Features
                </h2>
                <ul className="list-disc list-inside space-y-2 text-justify">
                  <li>Dimmable lighting that adapts to time or mood</li>
                  <li>Scene presets for work, rest, or celebration</li>
                  <li>Energy-efficient LED and motion sensors</li>
                  <li>Color-tunable lights for day-to-night transitions</li>
                  <li>App and voice control from anywhere</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section className="flex flex-col md:flex-row gap-10 items-start">
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl sm:text-3xl font-semibold text-pink-400 mb-4 border-l-4 border-pink-500 pl-4">
                  Why Choose Smart Lighting?
                </h2>
                <p className="text-justify">
                  Beyond convenience, smart lighting promotes well-being. Proper lighting boosts productivity, improves sleep patterns, and lowers energy usage. It’s an essential upgrade for anyone looking to design healthier, more dynamic spaces.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <Image
                  src="/smart-lighting1.png"
                  alt="Lighting Benefits"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-28 px-2">
            <Link
              href="/blog"
              className="inline-flex items-center gap-3 px-8 py-4 text-base font-medium text-white rounded-full bg-gradient-to-r from-yellow-500 to-pink-500 hover:shadow-yellow-400/30 shadow-md hover:scale-105 transition-transform"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
