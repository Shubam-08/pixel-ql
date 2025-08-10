"use client";

import Link from "next/link";
import { useRef } from "react";
import ImageCarousel from "@/components/ImageCarousel";

export default function WelcareHospitalPage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.7;
    }
  };

  return (
    <main className="bg-black text-white">
      <div className="w-full pt-8 md:pt-20 px-2 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* LEFT: Video + ImageCarousel Block */}
          <div className="w-full flex flex-col items-center py-12 md:px-8 space-y-8">
            {/* Video */}
            <div className="w-full max-w-2xl aspect-[4/3] rounded-xl overflow-hidden border border-white/10 shadow-lg relative">
              <video
                ref={videoRef}
                src="/welcare.mp4"
                autoPlay
                muted
                loop
                playsInline
                controls
                onLoadedMetadata={handleLoadedMetadata}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image Carousel */}
            <div className="w-full max-w-2xl">
             <ImageCarousel
  images={[
    { src: "/welcare1.jpg", alt: "Before View", label: "Before" },
    { src: "/welcare.jpg", alt: "After View", label: "After" },
  ]}
  aspect="aspect-[4/3]"
/>

            </div>
          </div>

          {/* RIGHT: Content Block */}
          <div className="w-full flex flex-col justify-start space-y-10 px-6 pt-4 md:pt-4 md:px-12">
            <h1 className="text-3xl font-bold text-center md:text-left">Welcare Hospital, Kochi</h1>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
              <p className="text-gray-400 leading-relaxed">
                Welcare Hospital in Kochi embraced modern lighting automation to enhance both patient care and operational efficiency. Through intelligent lighting and integrated automation, we delivered a solution that improves comfort, hygiene, and hospital staff control — ensuring optimal lighting across ICUs, wards, and public areas.
              </p>
              <p className="text-sm mt-4 text-white/60">
                Designed in collaboration with <span className="text-blue-400 font-medium">Qlite</span> and delivered by{" "}
                <span className="text-blue-400 font-medium">QR Pixel</span>.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                {[
                  "Smart corridor and room lighting automation",
                  "Touch-free lighting in ICU & emergency zones",
                  "Time-based and presence-based lighting schedules",
                  "Centralized control for staff with manual override",
                  "Hygiene-sensitive lighting controls in OT areas",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Technical Specifications</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-gray-400">
                <div className="space-y-2">
                  <p><span className="font-semibold">Project Duration:</span> 6 months</p>
                  <p><span className="font-semibold">Location:</span> Kochi, Kerala</p>
                </div>
                <div className="space-y-2">
                  <p><span className="font-semibold">Zones Automated:</span> 50+</p>
                  <p><span className="font-semibold">Energy Savings:</span> Up to 38%</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                {[
                  "Improved patient rest and recovery through ambient control",
                  "Efficient energy use in 24x7 environments",
                  "Minimal maintenance with diagnostics support",
                  "Quick access for doctors and staff to override lighting",
                  "Safer, smarter, and more hygienic environment",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center pt-8">
              <Link
                href="/projects/welcarehospital"
                className="inline-flex items-center border border-neutral-700 bg-transparent text-neutral-200 px-4 py-2 rounded-lg hover:bg-neutral-800 hover:border-neutral-600 transition-colors text-base font-medium shadow-sm group"
              >
                <svg
                  className="w-4 h-4 mr-2 text-neutral-400 group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Top
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
