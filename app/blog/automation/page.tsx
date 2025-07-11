"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AutomationPage() {
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
              <h3 className="text-3xl sm:text-6xl font-extrabold leading-tight tracking-tight mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-transparent bg-clip-text">
              Elegant, Intelligent Living
            </h3>
            <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto px-2">
              Automation that elevates the experience of space — crafted for comfort, safety, and seamless control.
            </p>
          </motion.div>

          {/* Informational Sections */}
          <div className="space-y-24 text-gray-300 text-base sm:text-lg leading-relaxed px-2 sm:px-0">

            {/* Section 1 */}
            <section className="flex flex-col md:flex-row gap-10 items-start ">
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl sm:text-3xl font-semibold text-cyan-400 mb-4 border-l-4 border-cyan-500 pl-4">
                  What Makes a Home Smart?
                </h2>
                <p className="text-justify">
                 It’s not just about gadgets — it’s about orchestration. Imagine walking into a space that understands you. As the evening sets in, the lights softly shift to a warm glow, curtains draw themselves closed, and a gentle playlist fills the room — all without lifting a finger. The thermostat adjusts to your preferred comfort level before you even arrive.

True home automation isn’t just about control; it’s about effortless living. It anticipates your needs, adapts to your routine, and creates an environment that flows with your lifestyle. Whether you’re hosting, relaxing, or away from home, every element — lighting, climate, entertainment, and security — works in harmony to make your space more comfortable, intelligent, and beautifully responsive.
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
                <h2 className="text-2xl sm:text-3xl font-semibold text-green-400 mb-4 border-l-4 border-green-500 pl-4">
                  Signature Features
                </h2>
                <ul className="list-disc list-inside space-y-2 text-justify">
                  <li>Automated scenes for morning, evening, or entertaining</li>
                  <li>Smart locks, doorbell cams, and security zones</li>
                  <li>Climate zones with adaptive temperature control</li>
                  <li>Voice integrations with Alexa, Google, or Siri</li>
                  <li>Cloud-connected for access anytime, anywhere</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section className="flex flex-col md:flex-row gap-10 items-start">
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl sm:text-3xl font-semibold text-purple-400 mb-4 border-l-4 border-purple-500 pl-4">
                  Why Invest in Automation?
                </h2>
                <p className="text-justify">
                  From energy savings to an enriched lifestyle, smart technology is the new standard in architectural design. It enhances real estate value, reduces energy bills, and gives you control — beautifully, invisibly, and intelligently.
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
              href="/blog"
              className="inline-flex items-center gap-3 px-8 py-4 text-base font-medium text-white rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-pink-500/30 shadow-md hover:scale-105 transition-transform"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
