"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Home, User, FolderKanban, PenLine, Mail } from 'lucide-react';


export default function FloatingMenu() {
  const [open, setOpen] = useState(false);
  const [logoVisible, setLogoVisible] = useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setLogoVisible(false);
      } else {
        setLogoVisible(true);
      }
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
  ]; // Services REMOVED from menu

  return (
    <>
      {/* Logo - top-left, disappears on scroll */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: logoVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-8 left-8 z-50 flex flex-col items-start pointer-events-none"
        style={{ pointerEvents: 'none' }}
      >
        <Link href="/" className="pointer-events-auto" tabIndex={-1} aria-label="Go to home">
          <div
            className="rounded-2xl border-4 border-blue-400/40 bg-white/10 shadow-xl group transition-all hover:shadow-blue-400/50"
          >
            <Image
              src="/final_QR_PIXEL_logo.png"
              alt="QR Pixel Logo"
              width={90}
              height={90}
              className="w-[60px] md:w-[90px] h-auto select-none group-hover:scale-105 transition-transform"
              style={{ filter: "drop-shadow(0 0 16px #00eaffbb)" }}
              priority
            />
          </div>
        </Link>
      </motion.div>


      {/* Menu Button */}
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="fixed md:top-8 md:right-8 md:left-auto md:translate-x-0 top-24 left-1/2 -translate-x-1/2 z-50 bg-black text-white p-4 rounded-full shadow-lg backdrop-blur-lg hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-400 transition-all"
        style={{ boxShadow: open ? "0 0 32px #0ff8" : undefined }}
      >
        {open ? (
          // ❌ White Cross Icon
          <div className="w-6 h-6 relative">
            <span className="absolute top-1/2 left-0 w-full h-1 bg-white transform rotate-45"></span>
            <span className="absolute top-1/2 left-0 w-full h-1 bg-white transform -rotate-45"></span>
          </div>
        ) : (
          // 🍔 Hamburger Icon
          <div className="flex flex-col justify-between w-6 h-5">
            <span className="w-full h-[2px] bg-white rounded" />
            <span className="w-full h-[2px] bg-white rounded" />
            <span className="w-full h-[2px] bg-white rounded" />
          </div>
        )}
      </button>

      {/* Animated Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 backdrop-blur-lg"
          >
            <motion.ul
              initial={{ scale: 0.92, y: 60, opacity: 0 }}
              animate={{ scale: 1.08, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 60, opacity: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              className="flex flex-col gap-8 bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-3xl p-8 md:p-16 shadow-2xl border-2 border-blue-400/30 min-w-[320px] md:min-w-[420px] max-w-[96vw]"
            >
              {navLinks.map(({ label, href, icon: Icon }) => (
                <motion.li
                  key={href}
                  whileHover={{ scale: 1.08, boxShadow: "0 0 24px #0ff8" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="rounded-xl overflow-hidden group"
                >
                  <Link
                    href={href}
                    className="flex items-center gap-4 px-6 py-4 md:py-5 text-2xl md:text-3xl font-bold text-white hover:text-cyan-300 transition-colors bg-gradient-to-r from-blue-900/40 via-gray-900/70 to-pink-900/40 group-hover:bg-gray-800/80 group-hover:shadow-lg neon-border focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onClick={() => setOpen(false)}
                  >
                    <Icon className="w-8 h-8 text-cyan-400 group-hover:text-pink-400 transition-colors drop-shadow-[0_0_8px_#00eaff77]" />
                    <span className="drop-shadow-[0_2px_8px_#00eaff77]">{label}</span>
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
