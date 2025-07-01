"use client";

import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

export function HeroLamp() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/Family Living-All ON.jpg')" }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Hero content */}
      <div className="relative z-20 flex flex-col items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="text-white text-4xl md:text-6xl font-bold"
        >
          Empowering Your Vision with Qlite Architect
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
          className="text-white/90 mt-4 max-w-xl"
        >
         Modernize your space with advanced lighting, sensors, and automation technology — all tailored to your needs.

animations.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8, ease: "easeInOut" }}
          className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
}
