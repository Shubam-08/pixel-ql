"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";

export function ScrollButton() {
  return (
    <Link
      href="/projects"
      className="inline-flex items-center border border-neutral-700 bg-transparent text-neutral-200 px-4 py-2 rounded-lg hover:bg-neutral-800 hover:border-neutral-600 transition-colors text-base font-medium shadow-sm group gap-2"
    >
      <Sparkles className="w-4 h-4 mr-1 text-pink-400 group-hover:text-white transition-colors" />
      <span className="text-base font-medium tracking-wide">
        Explore Our Creations
      </span>
    </Link>
  );
}
