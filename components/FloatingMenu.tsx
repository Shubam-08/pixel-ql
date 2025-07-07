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
        className="fixed top-4 left-4 z-50 flex flex-col items-start pointer-events-none"
        style={{ pointerEvents: 'none' }}
      >
        <Link href="/" className="pointer-events-auto" tabIndex={-1} aria-label="Go to home">
          <div className="flex items-center justify-center">
  <span className="absolute w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm shadow-md border-4 border-black" />
  <Image
    src="/newlogo1.png"
    alt="QR Pixel Logo"
    width={64}
    height={64}
    className="relative w-16 h-16 rounded-full select-none group-hover:scale-110 transition-transform shadow border-4 border-black"
    priority
  />
</div>
        </Link>
      </motion.div>


      {/* Menu Button */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: logoVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ pointerEvents: logoVisible ? 'auto' : 'none' }}
        className="fixed top-0 right-0 sm:top-2 sm:right-2 md:top-8 md:right-8 z-50"
      >
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="bg-black text-white p-3 sm:p-4 m-2 md:m-0 rounded-full shadow-lg backdrop-blur-lg hover:scale-110 focus:outline-none focus:ring-4 focus:ring-yellow-400 transition-all"
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
      </motion.div>

      {/* Animated Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/80 backdrop-blur-lg w-screen h-screen"
          >
            <motion.ul
              initial={{ scale: 0.92, y: 60, opacity: 0 }}
              animate={{ scale: 1.08, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 60, opacity: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              className="flex flex-col gap-8 bg-gradient-to-br from-[#]/80 via-[#]/70 to-[#]/60 rounded-3xl p-4 sm:p-8 md:p-16 shadow-2xl border-2 border-yellow-400/40 backdrop-blur-xl w-full max-w-xs sm:max-w-md md:max-w-lg"
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
  className="flex items-center gap-4 px-6 py-4 md:py-5 text-2xl md:text-3xl font-bold text-gray-900 hover:text-yellow-700 transition-colors bg-[#f5e9da]/30 group-hover:bg-[#f5f5dc]/60 group-hover:shadow-yellow-400/40 focus:outline-none focus:ring-2 focus:ring-yellow-400"
  onClick={() => setOpen(false)}
>
                    <Icon className="w-8 h-8 text-yellow-400 group-hover:text-yellow-500 transition-colors drop-shadow-[0_0_8px_#ffe06699]" />
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