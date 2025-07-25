"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";


export default function AutomationPage() {
  return (
    <div className="bg-[#111111] text-white font-sans">
      <main className="w-full min-h-screen overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-20 sm:pt-28 sm:pb-24">

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20 px-2"
          >
            <h3 className="text-3xl sm:text-6xl font-semibold leading-tight tracking-tight mb-6 text-white">
              Elegant, Intelligent Living
            </h3>
            <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto">
              Automation that enhances comfort, safety, and seamless control—designed to complement modern living.
            </p>
          </motion.div>

          {/* Informational Sections */}
          <div className="space-y-24 text-gray-300 text-base sm:text-lg leading-relaxed px-2 sm:px-0">

            {/* Section 1 */}
            <section className="flex flex-col md:flex-row gap-10 items-start">
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl sm:text-3xl font-medium mb-4 text-warmWhite border-l-4 border-gray-600 pl-4">
                  What Makes a Home Smart?
                </h2>
                <p className="text-justify">
                  It’s not just about gadgets — it’s about orchestration. Imagine entering a space that responds to you. As evening arrives, lights soften, curtains close, and music begins—without lifting a finger. The thermostat is already at your comfort level.

                  True automation means effortless living. It anticipates your needs, adapts to your routine, and creates a home that flows with you. Whether entertaining or relaxing, lighting, climate, entertainment, and security work in harmony—quietly, intelligently, and beautifully.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <Image
                  src="/automation1.png"
                  alt="Smart Home Overview"
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
                  src="/automation2.png"
                  alt="Key Features"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl sm:text-3xl font-medium mb-4 text-warmWhite border-l-4 border-gray-600 pl-4">
                  Signature Features
                </h2>
                <ul className="list-disc list-inside space-y-2 text-justify text-gray-300">
                  <li>Automated scenes for morning, evening, or entertaining</li>
                  <li>Smart locks, video doorbells, and security zones</li>
                  <li>Climate control with adaptive temperature zones</li>
                  <li>Voice integration with Alexa, Google, or Siri</li>
                  <li>Cloud connectivity for control from anywhere</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section className="flex flex-col md:flex-row gap-10 items-start">
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl sm:text-3xl font-medium mb-4 text-warmWhite border-l-4 border-gray-600 pl-4">
                  Why Invest in Automation?
                </h2>
                <p className="text-justify">
                  From energy efficiency to elevated lifestyle, home automation is becoming the new standard. It increases property value, reduces operating costs, and delivers convenience—discreetly integrated, beautifully designed.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <Image
                  src="/automation.png"
                  alt="Benefits of Home Automation"
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
              href="/blog/automation"
              className="inline-flex items-center gap-3 px-8 py-4 text-base font-medium text-white border border-gray-500 rounded-full hover:bg-gray-800 transition-all"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
