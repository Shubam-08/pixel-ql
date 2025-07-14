"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

interface CarouselImage {
  src: string;
  alt: string;
  label?: string; // <-- Add optional label
}

interface ImageCarouselProps {
  images: CarouselImage[];
  aspect?: string;
}

export default function ImageCarousel({ images, aspect = "aspect-[4/3]" }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (images.length <= 1) return;

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3600);
       
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, images.length]);

  const goTo = (idx: number) => setCurrent(idx);
  const goPrev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const goNext = () => setCurrent((prev) => (prev + 1) % images.length);

  return (
    <div className={`relative w-full ${aspect} rounded-2xl overflow-hidden shadow-2xl bg-black/60`}>
      {images.map((img, idx) => (
        <div
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out will-change-opacity ${
            idx === current ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover object-center select-none pointer-events-none transition-transform duration-[2000ms]"
            priority={idx === 0}
            draggable={false}
          />

          {img.label && (
            <div className="absolute top-3 left-1 px-3 py-1 rounded text-sm text-white font-semibold shadow-md z-30">
              {img.label}
            </div>
          )}
        </div>
      ))}

      {images.length > 1 && (
        <>
          <button
            aria-label="Previous Slide"
            onClick={goPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full z-30"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            aria-label="Next Slide"
            onClick={goNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full z-30"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-30">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`w-3 h-3 rounded-full border border-white ${
                  idx === current ? "bg-blue-500" : "bg-white/40"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
