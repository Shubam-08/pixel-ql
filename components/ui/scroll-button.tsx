"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";

export function ScrollButton() {
  return (
    <Link
      href="/projects"
      className="inline-flex items-center gap-2 px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white/5 backdrop-blur-sm border border-white/10"
    >
      <Sparkles className="w-5 h-5 text-pink-400 animate-pulse" />
      <span className="text-xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wide drop-shadow-sm">
        Explore Our Creations
      </span>
    </Link>
  );
}
