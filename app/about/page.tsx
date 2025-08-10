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
          <video
    className="absolute inset-0 w-full h-full object-cover z-0"
    src="/about1.mp4"
    autoPlay
    muted
    loop
    playsInline
  />
      {/* HERO TOP SECTION */}
      <div className="relative z-10 w-full min-h-screen flex flex-col justify-center items-center px-6 pt-30 pb-10">
        <div className="flex flex-col md:flex-row items-start justify-between max-w-6xl w-full gap-12">
          {/* LEFT: Content */}
       {/* Wrapper */}
<div className="flex flex-col items-start gap-10 max-w-screen-xl mx-auto px-4 py-16 text-neutral-300">

  {/* Text Content - Balanced Modern Layout (Moved Upwards) */}
<div className="w-full flex justify-center px-4 md:px-8 lg:px-16 py-10 -mt-32">
  <div className=" rounded-2xl p-6 md:p-10 shadow-xl 
                  max-w-5xl text-white space-y-6">

    {/* Heading */}
    <div className="flex items-center gap-3">
      <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
        Connect with Light
      </h1>
      <FaConnectdevelop className="text-neutral-300 text-3xl shrink-0" />
    </div>

    {/* Paragraphs */}
    <div className="space-y-4 text-base md:text-lg leading-relaxed text-neutral-200">
      <p>
        <strong>At QR-Pixel</strong>, every project is a story brought to life through thoughtful design.  
        We approach each space with care and precision, crafting environments that reflect our clients’ unique vision and narrative.  
        Our design philosophy blends technical expertise with creative sensitivity — resulting in immersive, emotionally resonant spaces where form, function, and feeling exist in harmony.
      </p>

      <p>
        At QR-Pixel, we believe that <strong>light is more than illumination</strong> — it’s an emotional material.  
        It can make a space feel safe, energizing, intimate, or inspiring.  
        It shapes the way we see the world and how we experience every moment within it.
      </p>

      <p>
        Born from the idea that everyone deserves good lighting, our studio has redefined what lighting design means for homes, hospitality, and architectural spaces.  
        We’ve seen firsthand how thoughtful, intentional lighting transforms not just rooms, but lives.
      </p>

      <p>
        Every project begins with <strong>listening</strong> — to you, your lifestyle, your vision, and your needs.  
        We dive deep into understanding the architecture, materials, and mood you want to create.  
        From there, we design layered lighting solutions that are tailored, human-centric, and aesthetically seamless.
      </p>

      <p>
        Our expertise spans over <strong>500 projects worldwide</strong>, blending artistry with technical precision.  
        Whether it’s the soft glow that welcomes you home, the dramatic accent that highlights a treasured artwork, or the subtle wash of light that brings texture to life — each decision is purposeful.
      </p>

      <p>
        At QR-Pixel, we work at the intersection of <strong>design, technology, and emotion</strong>.  
        Our goal is simple: to create lighting experiences that evoke warmth, beauty, and a sense of belonging — lighting that feels as natural and personal as sunlight itself.
      </p>

      <p>
        We don’t just light spaces — we <strong>craft atmospheres</strong>, shape moods, and tell stories through light.
      </p>
    </div>
  </div>
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
