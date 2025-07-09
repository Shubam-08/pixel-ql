// components/HeaderLogo.tsx
"use client";

import Image from "next/image";

export default function HeaderLogo() {
  return (
    <div className="absolute top-6 sm:top-6.5 left-4 z-50">
      <Image
        src="/logonew1.png"
        alt="Company Logo"
        width={85}
        height={40}
        className="object-contain w-[70px] sm:w-[85px] h-auto"
      />
    </div>
  );
}




