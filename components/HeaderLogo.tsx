// components/HeaderLogo.tsx
"use client";

import Image from "next/image";

export default function HeaderLogo() {
  return (
    <div className="absolute top-2.5 left-4 z-50">
      <Image
        src="/transparentlogo.png"
        alt="Company Logo"
        width={85}
        height={40}
        className="object-contain"
      />
    </div>
  );
}