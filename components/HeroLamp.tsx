"use client";

import { motion } from "framer-motion";
import React from "react";
import { playfair } from "@/app/fonts";
// path to your font setup

export function HeroLamp() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/first.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className={`text-white text-4xl md:text-6xl font-medium tracking-tight ${playfair.className}`}
        >
          Empowering Your Vision with{" "}
          <span className="bg-gradient-to-r from-blue-400 via-yellow-300 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            QR PIXEL
          </span>
        </motion.h1>

       

        <motion.p
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8, ease: "easeInOut" }}
          className="text-sm text-gray-300 mt-4"
        >
          Discover intelligent lighting and automation for every space.
        </motion.p>
      </div>
    </section>
  );
}
