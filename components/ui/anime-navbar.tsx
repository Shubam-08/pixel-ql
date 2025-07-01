"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface AnimeNavBarProps {
  items: NavItem[];
  defaultActive?: string;
}

export function AnimeNavBar({ items, defaultActive }: AnimeNavBarProps) {
  const pathname = usePathname();
  const [active, setActive] = useState<string>(defaultActive || "");

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* ✅ Logo image only, aligned left */}
<div>
  <img src="/qllogo.jpg" alt="Qlite Logo" className="h-17 w-auto" />
</div>

          {/* ✅ Nav Items on the right */}
          <div className="flex space-x-4">
            {items.map((item) => {
              const isActive = active === item.name || pathname === item.href;
              return (
                <button
                  key={item.name}
                  onClick={() => setActive(item.name)}
                  className={cn(
                    "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all",
                    isActive
                      ? "bg-blue-100 text-blue-600"
                      : "text-gray-300 hover:text-blue-400"
                  )}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
