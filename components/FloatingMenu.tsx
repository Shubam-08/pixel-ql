"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, FolderKanban, PenLine, Mail } from "lucide-react";

export default function FloatingMenu() {
  const [open, setOpen] = useState(false);
  const [logoVisible, setLogoVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setLogoVisible(window.scrollY <= 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/", icon: Home },
    { label: "About", href: "/about", icon: User },
    { label: "Projects", href: "/projects", icon: FolderKanban },
    { label: "Blog", href: "/blog", icon: PenLine },
    { label: "Contact", href: "/contact", icon: Mail },
  ];

  return (
    <>
      {/* Logo (optional, left-top disappearing) */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: logoVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-4 left-4 z-50 pointer-events-none"
      >
        {/* You can add logo content here if needed */}
      </motion.div>

      {/* Menu Toggle Button */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: logoVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ pointerEvents: logoVisible ? "auto" : "none" }}
        className="fixed top-4 right-4 sm:top-4 sm:right-4 md:top-6 md:right-6 z-50"
      >
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="bg-black text-white p-3 sm:p-4 rounded-full shadow-lg backdrop-blur-lg hover:scale-110 focus:outline-none focus:ring-4 focus:ring-yellow-400 transition-all"
          style={{ boxShadow: open ? "0 0 32px #0ff8" : undefined }}
        >
          {open ? (
            <div className="w-6 h-6 relative">
              <span className="absolute top-1/2 left-0 w-full h-1 bg-white transform rotate-45" />
              <span className="absolute top-1/2 left-0 w-full h-1 bg-white transform -rotate-45" />
            </div>
          ) : (
            <div className="flex flex-col justify-between w-6 h-5">
              <span className="w-full h-[2px] bg-white rounded" />
              <span className="w-full h-[2px] bg-white rounded" />
              <span className="w-full h-[2px] bg-white rounded" />
            </div>
          )}
        </button>
      </motion.div>

      {/* Dropdown Menu (below the icon) */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 right-6 sm:right-8 z-40"
          >
            <motion.ul
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              className="flex flex-col gap-2 bg-black/70 rounded-xl p-3 sm:p-4 shadow-xl border border-yellow-400/30 backdrop-blur-md w-[240px] text-base font-semibold"
            >
              {navLinks.map(({ label, href, icon: Icon }) => (
                <motion.li
                  key={href}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-xl overflow-hidden group"
                >
                  <Link
                    href={href}
                    className="flex items-center gap-4 px-6 py-3 text-xl font-bold text-gray-100 hover:text-yellow-400 transition-colors bg-white/10 hover:bg-white/20"
                    onClick={() => setOpen(false)}
                  >
                    <Icon className="w-6 h-6 text-yellow-400 group-hover:text-yellow-500 transition-colors drop-shadow" />
                    <span>{label}</span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
