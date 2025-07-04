"use client";

import { motion } from "framer-motion";
import React from "react";


const team = [
  { name: "Revant Sharma", role: "Founder & CEO", linkedin: "https://www.linkedin.com/in/revant-sharma-qlite/" },
  { name: "Philipose P.", role: "Director", linkedin: "https://www.linkedin.com/in/illayaraja-vp/" },
  { name: "Yash Raj Kaushik", role: "Marketing Head", linkedin: "https://www.linkedin.com/in/illayaraja-vp/" },
  { name: "Jnanasagar", role: "Design Head", linkedin: "https://www.linkedin.com/in/jnanasagar/" },
  { name: "Illayaraja VP", role: "RnD Expert", linkedin: "https://www.linkedin.com/in/illayaraja-vp/" },
  { name: "Shubam Gupta", role: "Digital Expertise", linkedin: "https://www.linkedin.com/in/illayaraja-vp/" },
];

const getInitials = (name: string) => {
  const parts = name.trim().split(" ");
  return parts.length === 1 ? parts[0][0] : parts[0][0] + parts[1][0];
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-20 relative overflow-x-hidden">
      {/* Animated Gradient Background Blobs */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none fixed inset-0 z-0"
      >
        <div className="absolute -top-40 left-1/2 w-[120vw] h-[80vw] -translate-x-1/2 bg-gradient-to-tr from-blue-700/20 via-pink-500/10 to-cyan-400/20 blur-3xl animate-pulse rounded-full" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-700/10 blur-2xl rounded-full animate-[spin_30s_linear_infinite]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-pink-500/20 to-blue-700/10 blur-2xl rounded-full animate-[spin_50s_linear_infinite]" />
      </motion.div>

      <section className="relative z-10 px-6 md:px-12 lg:px-24 py-20 max-w-7xl mx-auto">
        {/* Description Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-blue-400/10 shadow-lg"
          >
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              At <span className="text-blue-400 font-semibold ">QR Pixel</span>, we believe design should inspire, function, and evolve with your lifestyle. Our work fuses contemporary architecture with technologies like GRMS, façade lighting, and LED displays—building environments that are intelligent and expressive.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              From <strong className="text-white">residences to retail spaces</strong>, we operate across India and the Middle East—crafting culturally-aware, future-ready spaces. We don&apos;t just design buildings—we create experiences through light, automation, and design intelligence.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our process is deeply collaborative, client-centric, and built on trust. We guide each project from vision to realization—tailored, transparent, and tech-enabled.
            </p>
          </motion.div>



        {/* Timeline Section (Optional) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-r from-gray-800/80 to-gray-900/90 rounded-3xl p-10 mb-20 shadow-2xl border border-blue-400/10 overflow-hidden"
        >
          {/* Parallax/floating neon blob */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0.7 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="absolute -top-10 -left-10 w-48 h-48 bg-gradient-to-tr from-blue-500/30 via-cyan-400/20 to-pink-400/30 blur-2xl rounded-full z-0 animate-pulse"
          />
          <h2 className="text-2xl font-semibold mb-6 relative z-10 bg-gradient-to-r from-blue-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_2px_16px_#00eaff44]">Our Journey</h2>
          <ul className="text-gray-400 space-y-4 relative z-10">
            <motion.li initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: 0.5 }} viewport={{ once: true }}><span className="text-blue-400 font-bold">2018</span> — Qlite was founded with a passion for design and lighting.</motion.li>
            <motion.li initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.5 }} viewport={{ once: true }}><span className="text-blue-400 font-bold">2020</span> — Expanded to commercial and hospitality design across India.</motion.li>
            <motion.li initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.5 }} viewport={{ once: true }}><span className="text-blue-400 font-bold">2022</span> — Entered the Middle East market and launched LED integration solutions.</motion.li>
            <motion.li initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.5 }} viewport={{ once: true }}><span className="text-blue-400 font-bold">2024</span> — Recognized as a leader in GRMS & façade design innovation.</motion.li>
          </ul>
        </motion.div>


        
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-6 mt-4 text-center">
              {[
                { label: "Years of Innovation", value: "6+" },
                { label: "Smart Projects Delivered", value: "50+" },
                { label: "Countries Served", value: "4+" },
                { label: "Design Possibilities", value: "∞" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.7 }}
                  viewport={{ once: true }}
                  className="rounded-xl bg-white/10 border border-blue-400/10 shadow-lg p-6 m-2 backdrop-blur-md hover:scale-105 hover:shadow-blue-400/30 transition-all"
                >
                  <h3 className="text-3xl font-bold text-blue-400 drop-shadow-[0_0_8px_#00eaff77] animate-pulse">{item.value}</h3>
                  <p className="text-gray-400 text-sm">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Timeline Section */}
        {/* (unchanged code can go here) */}

        {/* Team Section */}
        <section className="mt-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_2px_16px_#00eaff44]"
          >
            The Minds Behind QR Pixel
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx, duration: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.07, boxShadow: "0 0 24px #00eaff55" }}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 p-8 rounded-2xl text-center shadow-xl border border-blue-400/10 transition relative overflow-hidden group"
              >
                <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 text-white flex items-center justify-center text-2xl font-extrabold shadow-lg border-2 border-blue-400/40 group-hover:scale-110 transition">
                  {getInitials(member.name)}
                </div>
                <h3 className="text-lg font-semibold mb-1 text-blue-200 group-hover:text-white transition">{member.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Our Services Section - visually enhanced, moved from homepage */}
        <section className="mt-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-pink-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_2px_32px_#00eaff77]">
            Our Services
          </h2>
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 md:grid md:grid-cols-2 md:gap-8 md:overflow-visible md:snap-none scrollbar-thin scrollbar-thumb-blue-400/40 scrollbar-track-transparent">
            {[
              { icon: '💡', title: 'Smart Lighting Solutions', desc: 'Advanced lighting control systems designed to boost energy efficiency and enhance ambiance in residential, commercial, and industrial spaces.', image: '/smart-lighting.png', },
              { icon: '🤖', title: 'Automation Solutions', desc: 'Intelligent automation systems to control lighting, HVAC, and other electronics, providing convenience, efficiency, and modernity in your building.', image: '/automation.jpg', },
              { icon: '🎨', title: 'Lighting Design', desc: 'Tailor-made lighting layouts that blend beauty with functionality. We craft lighting schemes that fit the architecture and emotion of your spaces.', image: '/design.png', },
              { icon: '✨', title: 'Customized Decorative Lighting', desc: 'From ambient LED setups to feature chandeliers, we create custom solutions that transform your home, office, or retail space into a visual delight.', image: '/decorative.png', },
              { icon: '🏠', title: 'Personalized & Affordable Lighting', desc: 'We deliver lighting plans tailored to your budget and preferences—because good lighting should be accessible to everyone.', image: '/personalized.png', },
              { icon: '🌱', title: 'Energy Efficiency', desc: 'Lighting systems and technologies that significantly reduce energy consumption without compromising brightness or performance.', image: '/efficiency.png', },
            ].map((service, index) => (
              <div
                key={index}
                className="relative min-w-[300px] max-w-[90vw] md:min-w-0 md:max-w-none snap-center rounded-3xl overflow-hidden shadow-2xl group backdrop-blur-lg bg-white/10 border border-blue-400/30 hover:bg-white/20 hover:shadow-blue-400/40 transition-all duration-500 flex flex-col justify-end"
                style={{ backgroundImage: `url('${service.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition duration-300" />
                <div className="relative p-8 min-h-[260px] flex flex-col justify-end items-center">
                  <span className="text-4xl mb-3 drop-shadow-lg">{service.icon}</span>
                  <h3 className="text-xl font-bold text-white mb-2 text-center drop-shadow-md">{service.title}</h3>
                  <p className="text-gray-200 text-sm leading-relaxed text-center drop-shadow-sm">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
