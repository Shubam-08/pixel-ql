// components/HeaderLogo.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeaderLogo() {
  return (
    <div className="absolute top-3 sm:top-4 md:top-6 left-4 z-50">
      <Link href="/" className="pointer-events-auto" aria-label="Go to homepage">
        <Image
          src="/logonew1.png"
          alt="Company Logo"
          width={85}
          height={40}
          className="object-contain w-[65px] sm:w-[75px] md:w-[85px] h-auto transition-opacity hover:opacity-90"
          priority
        />
      </Link>
    </div>
  );
}
