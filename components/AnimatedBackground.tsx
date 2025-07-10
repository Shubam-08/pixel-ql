"use client";

import { motion } from "framer-motion";
import React from "react";

export default function AnimatedBackground() {
  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Fullscreen animated background */}
      <motion.div
        className="absolute w-full h-full bg-gradient-to-br from-pink-500 via-blue-500 to-yellow-400 opacity-50 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Additional color overlay */}
      <motion.div
        className="absolute w-full h-full bg-gradient-to-tr from-purple-500 via-cyan-400 to-amber-400 opacity-40 blur-[100px]"
        animate={{
          scale: [1.1, 1.3, 1.1],
          rotate: [360, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}
