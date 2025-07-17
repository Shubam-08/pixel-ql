"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, FolderKanban, PenLine, Mail } from "lucide-react";

export default function FloatingMenu() {
  const pathname = usePathname();
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
      {/* Floating toggle button (now visible on all screen sizes) */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: logoVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ pointerEvents: logoVisible ? "auto" : "none" }}
        className="fixed top-4 right-4 z-50"
      >
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="bg-gray-900 text-gray-100 p-3 rounded-full shadow-lg backdrop-blur-lg hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
          style={{
            boxShadow: open
              ? "0 0 24px rgba(156, 163, 175, 0.7)"
              : undefined,
          }}
        >
          {open ? (
            <div className="w-6 h-6 relative">
              <span className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 transform rotate-45" />
              <span className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 transform -rotate-45" />
            </div>
          ) : (
            <div className="flex flex-col justify-between w-6 h-5">
              <span className="w-full h-[2px] bg-gray-100 rounded" />
              <span className="w-full h-[2px] bg-gray-100 rounded" />
              <span className="w-full h-[2px] bg-gray-100 rounded" />
            </div>
          )}
        </button>
      </motion.div>

      {/* Dropdown nav menu (now visible on all screen sizes) */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 right-4 z-40"
          >
            <motion.ul
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              className="flex flex-col gap-2 bg-gray-900 rounded-lg p-3 shadow-xl border border-gray-700 backdrop-blur-md w-[180px] text-sm font-medium"
            >
              {navLinks.map(({ label, href, icon: Icon }) => (
                <motion.li
                  key={href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-lg overflow-hidden group relative"
                >
                  <Link
                    href={href}
                    className={`flex items-center gap-3 px-4 py-2 transition-colors ${
                      pathname === href
                        ? "bg-gray-700 text-gray-200"
                        : "text-gray-300 hover:bg-gray-800 hover:text-gray-100"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    {label}
                    {/* Tooltip on hover */}
                    <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-gray-100 text-gray-900 text-xs px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      {label}
                    </span>
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
