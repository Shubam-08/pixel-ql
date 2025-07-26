"use client";

import { motion } from "framer-motion";
import React from "react";
import { sora } from "@/app/fonts";
import { useEffect, useRef } from "react";

export function HeroLamp() {

    const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.9; // Adjust as needed
    }
  }, []);

  return (
    <section className="relative w-full max-w-full h-screen overflow-hidden px-2">
      {/* Video Background */}
    <video
      ref={videoRef}
      className="absolute inset-0 w-full h-full object-cover contrast-125 brightness-80"
      src="/herobgvideo.mp4"
      autoPlay
      muted
      loop
      playsInline
    />

      


      {/* Hero Content */}
      <div className="relative z-20 flex flex-col justify-center items-center text-center h-full px-2 sm:px-4 w-full max-w-full mx-auto">
        <div className="relative z-20 h-full w-full px-0 py-0 flex items-end justify-start mb-4">
          <div className="flex flex-col items-start ml-2 sm:ml-2 mt-1">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
              className={`text-[#f8f1e4] text-base sm:text-xl md:text-2xl font-semibold leading-snug tracking-tight drop-shadow-md max-w-3xl text-left ${sora.className}`}
            >
              Great lighting is music to the eyes,<br />
              relaxation for the mind, and nourishment for the soul.
            </motion.h1>

            {/* Subheading */}
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
              className={`text-[#f8f1e4] text-base sm:text-xl md:text-2xl font-semibold leading-snug tracking-tight drop-shadow-md max-w-3xl mt-2 text-left ${sora.className}`}
            >
              That’s exactly what we create at{" "}
              <span className="bg-gradient-to-r from-blue-400 via-yellow-300 to-cyan-400 bg-clip-text text-transparent animate-pulse drop-shadow-[0_2px_10px_#000]">
                QR PIXEL
              </span>
              .
            </motion.h1>
          </div>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8, ease: "easeInOut" }}
          className={`text-sm sm:text-base text-gray-300 mt-4 max-w-sm sm:max-w-md md:max-w-xl px-2 ${sora.className}`}
        >
          Discover intelligent lighting and automation for every space.
        </motion.p>
      </div>
    </section>
  );
}