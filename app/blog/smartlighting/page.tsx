// app/blog/smartlighting/page.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SmartLightingPage() {
  return (
    <div className="bg-neutral-950 text-gray-200 font-sans">
      <main className="w-full min-h-screen overflow-x-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-20 pb-16 sm:pt-18 sm:pb-20">

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
             <h1 className="text-3xl sm:text-4xl font-semibold leading-snug tracking-tight mb-4 text-white text-center">
              Smart Lighting: Smarter Spaces, Better Living
            </h1>
            <div className="mb-8">
              <Image
                src="/smart-lighting3.png"
                alt="Smart Lighting in Modern Interior"
                width={1200}
                height={500}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
                priority
              />
            </div>
           
            <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto text-center">
              Discover how smart lighting blends technology, design, and comfort to
              create environments that adapt to your lifestyle—bringing efficiency,
              wellness, and modern elegance into every space.
            </p>
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-16 text-base sm:text-lg leading-relaxed text-gray-300">

            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-medium text-white mb-4">
                What is Smart Lighting?
              </h2>
              <p>
                Smart lighting goes beyond the traditional on/off switch. It uses
                automation, sensors, and connected controls to adjust brightness,
                color, and timing—responding naturally to your daily routines.
                From energizing mornings to calm evenings, lighting becomes an
                experience tailored to you.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-medium text-white mb-4">
                Key Benefits of Smart Lighting
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-neutral-900 p-5 rounded-lg">
                  <h3 className="text-lg font-medium text-white mb-2">
                    Energy Efficiency
                  </h3>
                  <p className="text-gray-400">
                    Motion sensors, dimming, and LED technology lower energy
                    consumption while reducing costs.
                  </p>
                </div>
                <div className="bg-neutral-900 p-5 rounded-lg">
                  <h3 className="text-lg font-medium text-white mb-2">
                    Personalized Ambiance
                  </h3>
                  <p className="text-gray-400">
                    Set the mood for work, relaxation, or celebration with custom
                    lighting scenes.
                  </p>
                </div>
                <div className="bg-neutral-900 p-5 rounded-lg">
                  <h3 className="text-lg font-medium text-white mb-2">
                    Health & Wellness
                  </h3>
                  <p className="text-gray-400">
                    Circadian rhythm lighting supports better sleep, focus, and
                    overall well-being.
                  </p>
                </div>
                <div className="bg-neutral-900 p-5 rounded-lg">
                  <h3 className="text-lg font-medium text-white mb-2">
                    Smart Control
                  </h3>
                  <p className="text-gray-400">
                    Manage your lights with voice commands, schedules, or mobile
                    apps from anywhere.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-medium text-white mb-4">
                Why It Matters
              </h2>
              <p>
                Lighting shapes how we live, work, and feel. Smart lighting
                transforms spaces into responsive environments—enhancing comfort,
                promoting sustainability, and creating a modern lifestyle that’s
                both efficient and inspiring.
              </p>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-medium text-white mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <details className="bg-neutral-900 p-5 rounded-lg">
                  <summary className="cursor-pointer font-medium text-gray-200">
                    Does smart lighting save energy?
                  </summary>
                  <p className="mt-2 text-gray-400">
                    Yes. Automation, dimming, and LED efficiency can reduce
                    energy consumption by up to 60%.
                  </p>
                </details>
                <details className="bg-neutral-900 p-5 rounded-lg">
                  <summary className="cursor-pointer font-medium text-gray-200">
                    Can I install smart lighting without rewiring?
                  </summary>
                  <p className="mt-2 text-gray-400">
                    Absolutely. Many smart bulbs and switches fit into existing
                    fixtures, requiring no major electrical changes.
                  </p>
                </details>
              </div>
            </section>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-gray-300 border border-gray-700 rounded-full hover:bg-neutral-800 transition"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
