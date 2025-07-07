"use client";

import { motion } from "framer-motion";
import React from "react";

export default function AnimatedBackground() {
  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="pointer-events-none fixed inset-0 z-0"
    >
      <div className="absolute -top-40 left-1/2 w-[120vw] h-[80vw] -translate-x-1/2 bg-gradient-to-tr from-blue-400/30 via-yellow-300/30 via-pink-400/30 to-cyan-400/30 blur-[120px] animate-[pulse_8s_ease-in-out_infinite] rounded-full" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/20 via-blue-400/20 to-yellow-300/20 blur-[100px] rounded-full animate-[spin_60s_linear_infinite]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-pink-400/20 via-yellow-300/20 to-blue-400/20 blur-[100px] rounded-full animate-[spin_90s_linear_infinite]" />
    </motion.div>
  );
}
