"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";

export function ScrollButton() {
  return (
    <Link
      href="/projects"
      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl shadow-md border border-neutral-700 
                 bg-black/70 backdrop-blur-md text-neutral-200 transition-all duration-300 group 
                 hover:bg-gradient-to-r hover:from-gray-600/60 hover:to-purple-900/30 hover:border-pink-900"
    >
      <Sparkles className="w-5 h-5 text-white-400 group-hover:text-white transition-colors duration-300" />
      <span className="text-base font-semibold tracking-wide">
        Explore Our Creations
      </span>
    </Link>
  );
}
