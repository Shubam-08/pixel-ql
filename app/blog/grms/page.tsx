// app/blog/grms/page.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function GrmsPage() {
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
            <h3 className="text-3xl sm:text-6xl font-extrabold leading-tight tracking-tight mb-6 bg-gradient-to-r from-cyan-400 via-teal-400 to-green-300 text-transparent bg-clip-text">
              GRMS – Intelligent Hospitality
            </h3>
            <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto px-2">
              Smart hotel rooms that adapt to guests — delivering luxury, personalization, and operational efficiency.
            </p>
          </motion.div>

          {/* Informational Sections */}
          <div className="space-y-24 text-gray-300 text-base sm:text-lg leading-relaxed px-2 sm:px-0">

            {/* Section 1 */}
            <section className="flex flex-col md:flex-row gap-10 items-start">
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl sm:text-3xl font-semibold text-teal-400 mb-4 border-l-4 border-teal-500 pl-4">
                  What is GRMS?
                </h2>
                <p className="text-justify">
                  Guest Room Management Systems (GRMS) are the technological backbone of modern hospitality experiences. These systems seamlessly integrate lighting, HVAC, curtains, and service indicators — all controlled from sleek in-room touch panels or mobile devices.
                  <br /><br />
                  For guests, it&apos;s about luxury and personalization. For hoteliers, it&apos;s about energy efficiency, staff automation, and centralized control.
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
                <h2 className="text-2xl sm:text-3xl font-semibold text-green-400 mb-4 border-l-4 border-green-500 pl-4">
                  Key Features
                </h2>
                <ul className="list-disc list-inside space-y-2 text-justify">
                  <li>Integrated control for lighting, climate, curtains</li>
                  <li>Do Not Disturb / Make Up Room indicators</li>
                  <li>Keycard energy-saving logic</li>
                  <li>Service request buttons and automation</li>
                  <li>Remote monitoring and management</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section className="flex flex-col md:flex-row gap-10 items-start">
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl sm:text-3xl font-semibold text-yellow-400 mb-4 border-l-4 border-yellow-500 pl-4">
                  Why Hotels Choose GRMS
                </h2>
                <p className="text-justify">
                  GRMS improves guest comfort and increases operational efficiency. With customizable scenes, occupancy-based automation, and real-time status visibility, hotels can reduce energy consumption by over 30% and elevate the guest experience to five-star standards.
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
              href="/blog"
              className="inline-flex items-center gap-3 px-8 py-4 text-base font-medium text-white rounded-full bg-gradient-to-r from-cyan-600 to-green-500 hover:shadow-green-500/30 shadow-md hover:scale-105 transition-transform"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
