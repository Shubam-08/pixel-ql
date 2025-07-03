"use client";

import { motion } from "framer-motion";
import React from "react";

const team = [
  { name: "Revant Sharma", role: "Founder & CEO" },
  { name: "Jnanasagar", role: "Design Head" },
  { name: "Illayaraja VP", role: "RnD Expert" },
];

const getInitials = (name: string) => {
  const parts = name.trim().split(" ");
  return parts.length === 1 ? parts[0][0] : parts[0][0] + parts[1][0];
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <section className="px-6 md:px-12 lg:px-24 py-20 max-w-7xl mx-auto">
        {/* Hero Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Where Vision Meets Innovation
        </motion.h1>

        {/* Description */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              At <span className="text-blue-400 font-semibold">Qlite</span>, design is not just about aesthetics&mdash;it&rsquo;s about intelligent function. We blend architecture with cutting-edge technologies like GRMS, façade lighting, and LED displays to create environments that inspire and perform.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              From <strong className="text-white">residences to retail</strong>, and from India to the Middle East, our designs fuse cultural context with smart innovation. We don&rsquo;t just build spaces&mdash;we craft smart experiences.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Whether you&rsquo;re planning a luxury villa, a modern office, or a fully-automated commercial space, we walk with you&mdash;from consultation to execution&mdash;with clarity, collaboration, and creativity.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 gap-6 mt-4 text-center">
              {[
                { label: "Smart Projects Delivered", value: "50+" },
                { label: "Countries Served", value: "4+" },
                { label: "Design Possibilities", value: "∞" },
              ].map((item, index) => (
                <div key={index}>
                  <h3 className="text-3xl font-bold text-blue-400">{item.value}</h3>
                  <p className="text-gray-400 text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <section className="mt-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            The Minds Behind Qlite
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl text-center shadow-lg transition"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                  {getInitials(member.name)}
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
