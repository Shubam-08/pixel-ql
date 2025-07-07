"use client";

import { motion } from "framer-motion";
import React from "react";
import type { JSX } from "react";

interface GlowingHeadingProps {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  motionProps?: React.ComponentProps<typeof motion.div>;
}

export default function GlowingHeading({
  children,
  as = "h1",
  className = "",
  motionProps = {},
}: GlowingHeadingProps) {
  const HeadingTag = as;
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
      {...motionProps}
      className="inline-block"
    >
      <HeadingTag
        className={`font-bold drop-shadow-[0_3px_24px_rgba(0,0,0,0.85)] bg-black/30 px-2 rounded-lg ${className}`}
      >
        <span className="bg-gradient-to-r from-blue-400 via-yellow-300 to-cyan-400 bg-clip-text text-transparent animate-pulse drop-shadow-[0_2px_10px_#000]">
          {children}
        </span>
      </HeadingTag>
    </motion.div>
  );
}
