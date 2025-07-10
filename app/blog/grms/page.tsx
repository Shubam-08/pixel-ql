"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function GrmsPage() {
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
            GRMS – Smarter Hospitality with Personalized Control
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Discover how Guest Room Management Systems enhance hotel experiences with comfort, control, and energy efficiency.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-20">
          {[
            { icon: "🛏️", title: "Comfort Control", value: "Lighting + HVAC" },
            { icon: "🧑‍💼", title: "Guest Experience", value: "Custom Scenes" },
            { icon: "♻️", title: "Energy Management", value: "30% Savings" },
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

        {/* Content */}
        <div className="space-y-14 text-gray-300 leading-relaxed text-justify">
          <section>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-3">Overview</h2>
            <p>
              GRMS (Guest Room Management Systems) bring intelligent control into hospitality spaces. From lighting and air conditioning to curtain automation and occupancy sensing, GRMS systems provide seamless, centralized control through a touch panel or mobile app. They personalize every guest experience while also enabling backend energy efficiency and housekeeping automation for hotel operators.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-3">Key Features</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Integrated control for lighting, HVAC, curtains</li>
              <li>Room status indicators (Do Not Disturb, Make Up Room)</li>
              <li>Keycard-based energy control</li>
              <li>Central monitoring by facility management</li>
              <li>Seamless guest interface via touch panels</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-3">Benefits</h2>
            <p>
              GRMS improves guest satisfaction while ensuring operational efficiency for hotel management. Personalized settings, automation based on occupancy, and centralized monitoring reduce waste and enhance service delivery, giving hotels a competitive edge in the smart hospitality era.
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
