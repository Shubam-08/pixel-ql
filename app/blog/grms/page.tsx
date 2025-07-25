"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function GrmsPage() {
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
              GRMS – Intelligent Hospitality
            </h3>
            <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto">
              Smart hotel rooms that adapt to guests — delivering luxury, personalization, and operational efficiency.
            </p>
          </motion.div>

          {/* Informational Sections */}
          <div className="space-y-24 text-gray-300 text-base sm:text-lg leading-relaxed px-2 sm:px-0">

            {/* Section 1 */}
            <section className="flex flex-col md:flex-row gap-10 items-start">
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl sm:text-3xl font-medium mb-4 text-warmWhite border-l-4 border-gray-600 pl-4">
                  What is GRMS?
                </h2>
                <p className="text-justify">
                  Guest Room Management Systems (GRMS) form the digital core of today’s hospitality environments.
                  These systems seamlessly integrate lighting, HVAC, curtains, and service indicators — all controlled via in-room panels or mobile devices.
                  <br /><br />
                  For guests, it’s about comfort and customization. For hotels, it means centralized control, improved staff efficiency, and energy savings.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <Image
                  src="/grms1.png"
                  alt="GRMS Overview"
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
                  src="/grms2.png"
                  alt="GRMS Features"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl sm:text-3xl font-medium mb-4 text-warmWhite border-l-4 border-gray-600 pl-4">
                  Key Features
                </h2>
                <ul className="list-disc list-inside space-y-2 text-justify text-gray-300">
                  <li>Unified control for lights, curtains, and climate</li>
                  <li>Do Not Disturb / Make Up Room indicators</li>
                  <li>Energy-saving keycard logic</li>
                  <li>Touch-based service request buttons</li>
                  <li>Remote monitoring and smart reporting</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section className="flex flex-col md:flex-row gap-10 items-start">
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl sm:text-3xl font-medium mb-4 text-warmWhite border-l-4 border-gray-600 pl-4">
                  Why Hotels Choose GRMS
                </h2>
                <p className="text-justify">
                  GRMS enhances guest satisfaction while optimizing operational efficiency. With intuitive scenes,
                  occupancy-based automation, and real-time room status, hotels see energy savings over 30% and a five-star guest experience.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <Image
                  src="/grms.png"
                  alt="GRMS Benefits"
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
              href="/blog/grms"
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
