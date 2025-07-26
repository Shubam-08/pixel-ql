"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
//import AnimatedBackground from "@/components/Animatedcolour";



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
       {/*<AnimatedBackground />*/}
      
      {/* HERO TOP SECTION */}
      <div className="relative z-10 w-full min-h-screen flex flex-col justify-center items-center px-6 pt-30 pb-10">
        <div className="flex flex-col md:flex-row items-start justify-between max-w-6xl w-full gap-12">
          {/* LEFT: Content */}
       {/* Wrapper */}
<div className="flex flex-col items-start gap-10 max-w-screen-xl mx-auto px-4 py-16 text-neutral-300">

  {/* Text Content - Full Width */}
  <div className="w-full">
    <div className="flex items-center gap-3 mb-4">
      <h1 className="text-3xl md:text-4xl font-semibold text-white">
        Connect with Light
      </h1>
      <FaConnectdevelop className="text-neutral-400 text-4xl shrink-0" />
    </div>

    <p className="text-base md:text-lg leading-relaxed md:leading-loose mb-6">
      Lighting is not just an essential design element — it is the soul of a space, shaping its mood, character, and identity. At{" "}
      <span className="font-semibold text-white">QR-Pixel</span>, we explore light as an experience — of style, emotion, and atmosphere — crafting environments that captivate and inspire.
    </p>

    <p className="text-base md:text-lg leading-relaxed md:leading-loose mb-6">
      We explore light as a dynamic and immersive experience — a blend of style, emotion, and atmosphere — meticulously crafting environments that not only illuminate but also resonate deeply with the people within them.
    </p>

    <p className="text-base md:text-lg leading-relaxed md:leading-loose">
      By harnessing the transformative power of light, we breathe life into spaces — whether residential, commercial, or hospitality — in ways that spark curiosity, ignite imagination, and leave a lasting impression.
    </p>
  </div>

  {/* Image Below Content */}
 
</div>



          {/* RIGHT: Tabs */}
        {/* RIGHT: Tabs */}
<div className="hidden md:flex flex-col gap-10 pt-4 absolute right-18 top-105 transform -translate-y-1/2 z-20">
  {tabs.map((tab, index) => (
    <React.Fragment key={tab.id}>
      <motion.div
        onClick={() => handleClick(tab.id)}
        className={`w-20 h-20 rounded-full flex items-center justify-center text-center cursor-pointer border-2 transition-all duration-300 text-xs font-medium uppercase tracking-wide backdrop-blur-sm ${
          active === tab.id
            ? "bg-white text-black shadow-xl scale-105"
            : "bg-opacity-10 text-white border-gray-500 hover:bg-white hover:text-black"
        }`}
        whileHover={{ scale: 1.08 }}
      >
        {tab.label}
      </motion.div>

      {index < tabs.length - 1 && (
        <div className="w-1 h-10 bg-gray-500 mx-auto" />
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
