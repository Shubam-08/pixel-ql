"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AutomationPage() {
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
            Complete Home Automation for Effortless Living
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            From lighting to security—explore how full-scale home automation systems make living smarter, safer, and simpler.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-20">
          {[
            { icon: "🏠", title: "Total Control", value: "All Devices Unified" },
            { icon: "🔐", title: "Safety & Security", value: "24/7 Monitoring" },
            { icon: "🧠", title: "Automation Engine", value: "Rule-based Logic" },
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
              Home automation integrates all aspects of your home—lighting, climate, security, entertainment, and appliances—into a single intuitive system. Using sensors, schedules, and AI-based control, it brings comfort, efficiency, and peace of mind. Whether you&apos;re home or away, automation keeps everything connected and responsive.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-3">Key Features</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Voice and app-based control of all devices</li>
              <li>Smart surveillance with alerts and access logs</li>
              <li>Energy-efficient climate and lighting control</li>
              <li>Custom routines and scenes for daily life</li>
              <li>Remote access from anywhere in the world</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-3">Benefits</h2>
            <p>
              Home automation simplifies your life by reducing manual tasks, enhancing home security, and optimizing energy usage. It offers convenience, saves time, and gives you full control over your living space—whether you&apos;re at home or on the go.
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
