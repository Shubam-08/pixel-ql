// components/HeaderLogo.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeaderLogo() {
  return (
    <div className="absolute top-6 sm:top-[1.625rem] left-4 z-50">
      <Link href="/" className="pointer-events-auto" aria-label="Go to homepage">
        <Image
          src="/logonew1.png" // Make sure this path is correct
          alt="Company Logo"
          width={85}
          height={40}
          className="object-contain w-[70px] sm:w-[85px] h-auto transition-opacity hover:opacity-90"
          priority
        />
      </Link>
    </div>
  );
}
