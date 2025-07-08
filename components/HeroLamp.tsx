"use client";

import { motion } from "framer-motion";
import React from "react";
import { playfair } from "@/app/fonts"; // Adjust if your fonts file path is different

export function HeroLamp() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center w-screen overflow-x-hidden"
      style={{ backgroundImage: "url('/homeimage.jpg')", backgroundPosition: 'center', backgroundSize: 'cover' }}
    >
      {/* Brighter image overlay */}
      <div className="absolute inset-0 z-0" style={{ background: "rgba(0,0,0,0.10)", backdropFilter: "brightness(1.45) contrast(1.2)" }} />
      {/* Slightly lighter dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className={`text-white text-3xl md:text-5xl font-semibold tracking-tight drop-shadow-[0_3px_24px_rgba(0,0,0,0.85)] bg-black/30 px-2 rounded-lg ${playfair.className}`}
        >
          Empowering Your Vision with{" "}
          <span className="bg-gradient-to-r from-blue-400 via-yellow-300 to-cyan-400 bg-clip-text text-transparent animate-pulse drop-shadow-[0_2px_10px_#000]">
            QR PIXEL
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8, ease: "easeInOut" }}
          className="text-sm md:text-base text-gray-300 mt-4 max-w-xl"
        >
          Discover intelligent lighting and automation for every space.
        </motion.p>
      </div>
    </section>
  );
}