"use client";

import { motion } from "framer-motion";
import React from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
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
    <main className="min-h-screen bg-black text-white pt-20 relative overflow-hidden">
      <AnimatedBackground />

      <section className="relative z-10 px-6 md:px-12 lg:px-24 py-20 max-w-7xl mx-auto space-y-24">
        
        {/* About + Journey side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* About Description */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-black/80 backdrop-blur-md border border-white/10 rounded-3xl p-10 shadow-2xl"
          >
            <h1 className="text-4xl font-bold mb-6 text-white">About QR Pixel</h1>
            <p className="text-gray-200 mb-4">
              At <span className="font-semibold text-white">QR Pixel</span>, we believe design should inspire, function, and evolve with your lifestyle. Our work fuses contemporary architecture with technologies like GRMS, façade lighting, and LED displays—building environments that are intelligent and expressive.
            </p>
            <p className="text-gray-200 mb-4">
              From <strong className="text-white">residences to retail spaces</strong>, we operate across India and the Middle East—crafting culturally-aware, future-ready spaces. We do not just design buildings—we create experiences through light, automation, and design intelligence.
            </p>
            <p className="text-gray-200">
              Our process is deeply collaborative, client-centric, and built on trust. We guide each project from vision to realization—tailored, transparent, and tech-enabled.
            </p>
          </motion.div>

          {/* Our Journey */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-black/70 border border-white/10 rounded-3xl p-10 shadow-2xl backdrop-blur"
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-blue-400 to-cyan-400 text-transparent bg-clip-text">
              Our Journey
            </h2>
            <ul className="text-gray-300 space-y-3">
              <li>• <span className="text-blue-400 font-semibold">2018</span> — QR Pixel was founded with a passion for design and lighting.</li>
              <li>• <span className="text-blue-400 font-semibold">2020</span> — Expanded to commercial and hospitality design across India.</li>
              <li>• <span className="text-blue-400 font-semibold">2022</span> — Entered the Middle East market and launched LED integration solutions.</li>
              <li>• <span className="text-blue-400 font-semibold">2024</span> — Recognized as a leader in GRMS & façade design innovation.</li>
            </ul>
          </motion.div>
        </div>

        {/* Team */}
        <section>
          <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-900 via-pink-900 to-cyan-900 bg-clip-text text-transparent">
            The Minds Behind QR Pixel
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-gray-800 backdrop-blur-md p-6 rounded-2xl text-center border border-white/10 hover:shadow-blue-500/20 transition duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center text-white text-2xl font-bold">
                  {getInitials(member.name)}
                </div>
                <h3 className="text-white text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-300">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {[ 
            { label: "Years of Innovation", value: "6+" },
            { label: "Smart Projects Delivered", value: "50+" },
            { label: "Countries Served", value: "4+" },
            { label: "Design Possibilities", value: "∞" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-black backdrop-blur-md rounded-xl p-6 border border-blue-400/20 shadow-md"
            >
              <h3 className="text-3xl font-bold text-blue-400">{item.value}</h3>
              <p className="text-gray-300 text-sm mt-1">{item.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Our Services */}
        <section>
          <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-pink-400 via-blue-400 to-cyan-400 text-transparent bg-clip-text">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              { icon: '💡', title: 'Smart Lighting', desc: 'Energy-efficient lighting control systems for ambiance and sustainability.', image: '/smart-lighting.png' },
              { icon: '🤖', title: 'Automation', desc: 'Control lighting, HVAC, and more for comfort and control.', image: '/automation.jpg' },
              { icon: '🎨', title: 'Lighting Design', desc: 'Elegant lighting schemes that blend function and beauty.', image: '/design.png' },
              { icon: '✨', title: 'Decorative Lighting', desc: 'Custom installations that make your spaces shine.', image: '/decorative.png' },
              { icon: '🏠', title: 'Affordable Plans', desc: 'Solutions for every budget without compromising style.', image: '/personalized.png' },
              { icon: '🌱', title: 'Energy Efficiency', desc: 'Modern tech to reduce power usage across systems.', image: '/efficiency.png' },
            ].map((service, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl group shadow-xl border border-white/10"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover opacity-80 group-hover:opacity-60 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition duration-300 flex flex-col items-center justify-end p-6">
                  <span className="text-4xl mb-2">{service.icon}</span>
                  <h3 className="text-xl font-semibold text-white mb-1">{service.title}</h3>
                  <p className="text-gray-300 text-sm text-center">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
