"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface AnimeNavBarProps {
  items: NavItem[];
  defaultActive?: string;
}

export function AnimeNavBar({ items }: AnimeNavBarProps) {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* ✅ Logo on the left */}
          <div className="text-xl font-bold text-blue-600">QR Pixel</div>

          {/* ✅ Nav Items */}
          <div className="flex space-x-4">
            {items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all",
                    isActive
                      ? "bg-blue-100 text-blue-600"
                      : "text-gray-300 hover:text-blue-400"
                  )}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
