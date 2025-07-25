"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react"; // Icon library, can be replaced

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white shadow-xl transition-all hover:scale-110 hover:bg-white/20"
      aria-label="Back to Top"
    >
      <ChevronUp className="w-6 h-6 animate-bounce-slow" />
    </button>
  );
};

export default BackToTopButton;
