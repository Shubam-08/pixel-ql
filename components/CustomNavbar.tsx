// components/CustomNavbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export function CustomNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-blue-600">
            Qlite
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/about" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Services
            </Link>
            <Link 
              href="/projects" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Projects
            </Link>
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg 
              className="h-6 w-6 text-gray-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? 
                <path d="M6 18L18 6M6 6l12 12" /> : 
                <path d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              href="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/projects" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="/contact" 
              className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
