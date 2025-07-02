// components/CustomNavbar.tsx
"use client";


import { Home, FileText, CreditCard, Info } from "lucide-react";
import { AnimeNavBar } from "@/components/ui/anime-navbar";

const items = [
  { name: "Home", href: "/", icon: Home },
  { name: "Services", href: "/services", icon: FileText },
  { name: "Contact", href: "/contact", icon: CreditCard },
  { name: "About", href: "/about", icon: Info },
];

export function CustomNavbar() {
  return <AnimeNavBar items={items} defaultActive="Home" />;
}
