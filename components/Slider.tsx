"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

const kelvinValues = [2200, 2700, 3000, 4000, 5700, 6500];

export default function Slider() {
  const [kelvin, setKelvin] = useState(2200);

 const getOverlayStyle = (k: number): string => {
    switch (k) {
      case 2200:
        return "bg-[rgba(255,142,30,0.25)]"; // warm amber
      case 2700:
        return "bg-[rgba(255,170,60,0.22)]";
      case 3000:
        return "bg-[rgba(255,190,90,0.18)]";
      case 4000:
        return "bg-[rgba(255,255,240,0.12)]"; // soft white
      case 5700:
        return "bg-[rgba(180,220,255,0.16)]"; // cool daylight
      case 6500:
        return "bg-[rgba(150,210,255,0.18)]"; // crisp daylight
      default:
        return "";
    }
  };
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background image */}
      <Image
        src="/slider.jpg"
        alt="Lighting Mood"
        fill
        priority
        quality={100}
        className="object-cover z-0"
      />

      {/* Overlay */}
      <div
        className={clsx(
          "absolute inset-0 transition-all duration-700 z-10 pointer-events-none",
          getOverlayStyle(kelvin)
        )}
      />

      {/* UI Content */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 text-center w-full px-4">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-light mb-6 drop-shadow-md">
          Adjust the Ambience
        </h2>

        <div className="w-full max-w-2xl mx-auto">
          <input
            type="range"
            min={0}
            max={kelvinValues.length - 1}
            step={1}
            value={kelvinValues.indexOf(kelvin)}
            onChange={(e) => setKelvin(kelvinValues[parseInt(e.target.value)])}
            className="w-full h-2 appearance-none rounded-lg bg-white/30 outline-none transition-all duration-300 accent-white shadow-lg backdrop-blur-md"
          />

          <div className="flex justify-between text-xs sm:text-sm text-white/90 mt-2 font-medium tracking-wide">
            {kelvinValues.map((k) => (
              <span key={k} className="px-1">
                {k}K
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
