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
      {/* Soft main glow - baby pink & cyan focused */}
      <div className="absolute -top-40 left-1/2 w-[120vw] h-[80vw] -translate-x-1/2 bg-gradient-to-tr from-pink-600 via-cyan-600 via-pink-600 to-blue-200/15 blur-[120px] animate-[pulse_8s_ease-in-out_infinite] rounded-full" />

      {/* Top-right glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-br from-cyan-200/15 via-pink-100/15 to-sky-200/15 blur-[100px] rounded-full animate-[spin_60s_linear_infinite]" />

      {/* Bottom-left glow */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-pink-400 via-cyan-300 to-blue-300 blur-[100px] rounded-full animate-[spin_90s_linear_infinite]" />
    </motion.div>
  );
}
