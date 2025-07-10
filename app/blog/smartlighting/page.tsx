"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function SmartLightingPage() {
  return (
    <main className="bg-black text-white min-h-screen">
   <div className="max-w-6xl mx-auto px-6 sm:px-8 pt-20 pb-16">

        {/* Title & Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            How Smart Lighting Transforms Modern Spaces
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Discover how intelligent lighting adapts to your lifestyle, saves energy,
            and enhances every space it illuminates.
          </p>
        </motion.div>

        {/* Animated Cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-20">
          {[
            { icon: "💡", title: "Energy Savings", value: "Up to 60%" },
            { icon: "📱", title: "Smart Control", value: "App + Voice" },
            { icon: "🎯", title: "Mood Settings", value: "Custom Scenes" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center shadow hover:shadow-xl transition"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h4 className="text-xl font-bold text-white mb-1">{item.value}</h4>
              <p className="text-sm text-gray-400">{item.title}</p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Content */}
        <div className="space-y-14 text-gray-300 leading-relaxed text-justify">
          <section>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-3">Overview</h2>
            <p>
              Smart lighting blends technology, comfort, and design into one seamless system.
              It automatically adjusts brightness, color temperature, and scheduling
              to match your daily rhythm. Whether it’s for ambiance, convenience,
              or efficiency — smart lighting adapts to how you live and work.
    Smart lighting goes beyond aesthetics and convenience—it’s a foundational element in modern architecture
    and smart home design. In residential settings, it elevates comfort by automating ambient transitions
    between morning, afternoon, and night. In commercial environments, it enhances productivity and wellness
    by dynamically adjusting brightness and color tones to reduce eye strain and fatigue. Hotels, retail stores,
    and even hospitals are leveraging smart lighting to improve user experience, reduce operational costs, and
    create adaptive atmospheres. Integration with motion sensors and occupancy data also means lights are only
    on when needed, significantly reducing wastage. The technology scales effortlessly from a single room to
    entire buildings, making it both flexible and future-proof.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-3">Key Features</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Motion and daylight sensing</li>
              <li>Remote access via smartphone apps</li>
              <li>Custom lighting scenes for activities or moods</li>
              <li>Voice integration with Alexa, Google, Siri</li>
              <li>Schedules based on time or occupancy</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-3">Benefits</h2>
            <p>
              Enhance the comfort and security of your home or workspace while reducing energy bills.
              From cozy reading nooks to vibrant kitchen lights — smart systems put you
              in control like never before.
            </p>
          </section>
        </div>

        {/* Back Button */}
        <div className="text-center mt-20">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-yellow-300 border border-yellow-400 rounded-full hover:bg-yellow-400/10 transition"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    </main>
  );
}
