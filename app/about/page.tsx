"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedBackground from "@/components/AnimatedBackground";
import {
  JourneySection,
  TeamSection,
  ServicesSection,
} from "./Sections";
import { FaConnectdevelop } from "react-icons/fa";

const tabs = [
  { id: "journey", label: "Our Journey" },
  { id: "team", label: "Team" },
  { id: "services", label: "Services" },
];

export default function AboutPage() {
  const [active, setActive] = useState("journey");
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleClick = (id: string) => {
    setActive(id);
    setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden font-sans">
      <AnimatedBackground />

      {/* HERO TOP SECTION */}
      <div className="relative z-10 w-full min-h-screen flex flex-col justify-center items-center px-6 pt-20 pb-10">
        <div className="flex flex-col md:flex-row items-start justify-between max-w-6xl w-full gap-12">
          {/* LEFT: Content */}
          <div className="flex-1 max-w-xl text-neutral-300">
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-3xl md:text-4xl font-semibold text-white">
                Connect with Light
              </h1>
              <FaConnectdevelop className="text-neutral-400 text-4xl shrink-0" />
            </div>

            <p className="text-base md:text-lg leading-relaxed md:leading-loose tracking-wide">
              Lighting is not just an essential design element — it is the soul of a space, shaping its mood, character, and identity. At{" "}
              <span className="font-semibold text-white">QR-Pixel</span>, we explore light as an experience — of style, emotion, and atmosphere — crafting environments that captivate and inspire. By harnessing the power of light, we bring spaces to life in ways that spark meaningful conversations and leave a lasting impression.
            </p>
          </div>

          {/* RIGHT: Tabs */}
          <div className="hidden md:flex flex-col items-center gap-10 pt-4">
            {tabs.map((tab, index) => (
              <React.Fragment key={tab.id}>
                <motion.div
                  onClick={() => handleClick(tab.id)}
                  className={`w-24 h-24 rounded-full flex items-center justify-center text-center cursor-pointer border-2 transition-all duration-300 text-xs md:text-sm font-medium uppercase tracking-wide backdrop-blur-sm ${
                    active === tab.id
                      ? "bg-white text-black shadow-xl scale-105"
                      : "bg-opacity-10 text-white border-gray-500 hover:bg-white hover:text-black"
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  {tab.label}
                </motion.div>

                {index < tabs.length - 1 && (
                  <div className="w-1 h-12 bg-gray-500" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* MOBILE: Horizontal Tabs */}
        <div className="md:hidden w-full mt-10 overflow-x-auto">
          <div className="flex gap-4 justify-center">
            {tabs.map((tab) => (
              <motion.div
                key={tab.id}
                onClick={() => handleClick(tab.id)}
                className={`min-w-[80px] px-4 py-3 rounded-full flex items-center justify-center cursor-pointer border text-xs font-medium uppercase tracking-wide backdrop-blur-sm transition-all ${
                  active === tab.id
                    ? "bg-white text-black shadow-xl scale-105"
                    : "bg-opacity-10 text-white border-gray-500 hover:bg-white hover:text-black"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {tab.label}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION CONTENT */}
      <section
        ref={sectionRef}
        className="relative z-10 px-4 py-16 md:py-24 lg:py-32 bg-gradient-to-b from-black via-[#111111] to-[#1a1a1a]"
      >
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              {active === "journey" && <JourneySection />}
              {active === "team" && <TeamSection />}
              {active === "services" && <ServicesSection />}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
