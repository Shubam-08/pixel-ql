// components/CustomNavbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export function CustomNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">Qlite</Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className={`text-gray-600 hover:text-blue-600 transition-colors ${pathname === '/' ? 'font-semibold' : ''}`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`text-gray-600 hover:text-blue-600 transition-colors ${pathname === '/about' ? 'font-semibold' : ''}`}
            >
              About
            </Link>
            <Link 
              href="/services" 
              className={`text-gray-600 hover:text-blue-600 transition-colors ${pathname === '/services' ? 'font-semibold' : ''}`}
            >
              Services
            </Link>
            <Link 
              href="/projects" 
              className={`text-gray-600 hover:text-blue-600 transition-colors ${pathname === '/projects' ? 'font-semibold' : ''}`}
            >
              Projects
            </Link>
            <Link 
              href="/contact" 
              className={`text-gray-600 hover:text-blue-600 transition-colors ${pathname === '/contact' ? 'font-semibold' : ''}`}
            >
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm p-4">
          <div className="space-y-4">
            <Link 
              href="/" 
              className={`block text-gray-600 hover:text-blue-600 transition-colors ${pathname === '/' ? 'font-semibold' : ''}`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`block text-gray-600 hover:text-blue-600 transition-colors ${pathname === '/about' ? 'font-semibold' : ''}`}
            >
              About
            </Link>
            <Link 
              href="/services" 
              className={`block text-gray-600 hover:text-blue-600 transition-colors ${pathname === '/services' ? 'font-semibold' : ''}`}
            >
              Services
            </Link>
            <Link 
              href="/projects" 
              className={`block text-gray-600 hover:text-blue-600 transition-colors ${pathname === '/projects' ? 'font-semibold' : ''}`}
            >
              Projects
            </Link>
            <Link 
              href="/contact" 
              className={`block text-gray-600 hover:text-blue-600 transition-colors ${pathname === '/contact' ? 'font-semibold' : ''}`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
