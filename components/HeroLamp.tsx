"use client";

import { motion } from "framer-motion";
import React from "react";
import { montserrat, dancingScript } from "@/app/fonts";

export function HeroLamp() {
  return (
    <section className="relative w-full max-w-full h-screen overflow-hidden px-2">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/herovideo1new.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Brighter overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "rgba(0,0,0,0.10)",
          backdropFilter: "brightness(1.45) contrast(1.2)",
        }}
      />

      {/* Dark gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/80 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col justify-center items-center text-center h-full px-2 sm:px-4 w-full max-w-full mx-auto">
        {/* Hero Content Container */}
        <div className="relative z-20 h-full w-full px-0 py-0 flex items-end justify-start mb-4">
          <div className="flex flex-col items-start ml-2 sm:ml-2 mt-1">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
              className={`text-[#f8f1e4] text-base sm:text-xl md:text-3xl font-medium leading-snug tracking-tight drop-shadow-[0_3px_24px_rgba(0,0,0,0.85)] bg-black/30 px-0 py-0 rounded-lg max-w-3xl text-left ${dancingScript.className}`}
            >
              Great lighting is music to the eyes,<br />
              relaxation for the mind, and nourishment for the soul.
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
              className={`text-[#f8f1e4] text-base sm:text-xl md:text-3xl font-medium leading-snug tracking-tight drop-shadow-[0_3px_24px_rgba(0,0,0,0.85)] bg-black/30 px-0 py-0 rounded-lg max-w-3xl mt-2 text-left ${dancingScript.className}`}
            >
              That’s exactly what we create at{" "}
              <span className={`bg-gradient-to-r from-blue-400 via-yellow-300 to-cyan-400 bg-clip-text text-transparent animate-pulse drop-shadow-[0_2px_10px_#000] ${montserrat.className}`}>
                QR PIXEL
              </span>
              .
            </motion.h1>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8, ease: "easeInOut" }}
          className="text-sm sm:text-base text-gray-300 mt-4 max-w-sm sm:max-w-md md:max-w-xl px-2"
        >
          Discover intelligent lighting and automation for every space.
        </motion.p>
      </div>
    </section>
  );
}
