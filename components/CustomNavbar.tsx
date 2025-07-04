"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export function CustomNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About US", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full bg-black shadow-md z-50">
      <div className="max-w-[1600px] mx-auto px-0 md:px-0 flex justify-between items-center min-h-[120px] py-0">
        {/* Logo */}
        <Link href="/" className="flex items-center">
        <Link href="/" className="flex items-center">
  <Image
    src="/final_QR_PIXEL_logo.png"
    alt="QRPixels Logo"
    width={240}
    height={100}
    className="h-[100px] w-auto object-contain drop-shadow-[0_4px_12px_rgba(0,200,255,0.15)]"
    priority
  />
</Link>

        </Link>

        {/* Nav Links (same as your original) */}
        <div className="hidden md:flex flex-1 justify-center items-end space-x-10 pb-0 pt-4">
          {links.map(({ name, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={name}
                href={href}
                className={`relative text-xs uppercase tracking-wider pt-15 transition-all
                  ${isActive ? "text-blue-400" : "text-gray-300 hover:text-blue-400"}
                `}
              >
                {name}
                <span
                  className={`block h-[2px] bg-blue-400 mx-auto mt-1 transition-all duration-300
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </Link>
            );
          })}
        </div>

        {/* Glowing Call-to-Action Text on the Right */}
        <div className="hidden md:block ml-4 text-shadow-md font-semibold text-blue-400 animate-pulse tracking-wide bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Let’s Design Something Brilliant
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor">
              {isOpen ? (
                <path strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 pb-6">
          {links.map(({ name, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={name}
                href={href}
                className={`block text-sm text-white py-2 hover:text-blue-400 transition-colors ${
                  isActive ? "text-blue-400" : ""
                }`}
              >
                {name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
