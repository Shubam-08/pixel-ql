"use client";

import Link from "next/link";
import { useRef } from "react";

export default function YamunaSkyCityPage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.7; // Set playback speed to 2.7
    }
  };

  return (
    <main className="bg-black text-white">
      <div className="w-full pt-6 md:pt-20 px-2 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* LEFT: Taller Video Block */}
          <div className="w-full flex justify-center items-start py-6 md:px-8">
            <div className="w-full max-w-2xl h-[500px] md:h-[950px] rounded-xl overflow-hidden border border-white/10 shadow-lg relative">
              <video
                ref={videoRef}
                src="/yamunaskycity.mp4"
                autoPlay
                muted
                loop
                playsInline
                controls
                onLoadedMetadata={handleLoadedMetadata}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT: Project Info */}
          <div className="w-full flex flex-col justify-start space-y-10 px-6 py-8 md:px-12">
            <h1 className="text-3xl font-bold text-center md:text-left">Yamuna Sky City</h1>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
              <p className="text-gray-400 leading-relaxed">
                Yamuna Sky City is a premium residential development where modern lighting and smart automation converge. Designed with sophistication and functionality, this project showcases our capabilities in delivering elegant, energy-efficient, and tech-forward solutions tailored for upscale living.
              </p>
              <p className="text-sm mt-4 text-white/60">
                A big thank you to <span className="text-blue-400 font-medium">Qlite</span> for the opportunity to collaborate on this project — proudly carried forward by <span className="text-blue-400 font-medium">QR Pixel</span>.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                {[
                  "Custom lighting scenes for luxury interiors",
                  "Automated ambient and architectural lighting",
                  "Mobile and voice-controlled automation",
                  "Efficient energy management integrated with lifestyle",
                  "Night-safety and perimeter lighting automation"
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
                  <p><span className="font-semibold">Project Duration:</span> 9 months</p>
                  <p><span className="font-semibold">Location:</span> Yamuna Expressway, India</p>
                </div>
                <div className="space-y-2">
                  <p><span className="font-semibold">Lighting Points:</span> 2,000+</p>
                  <p><span className="font-semibold">Energy Savings:</span> 40% reduction</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                {[
                  "Enhanced luxury lifestyle with smart controls",
                  "Substantial energy efficiency and cost savings",
                  "Low-maintenance systems with smart diagnostics",
                  "Improved resident safety and comfort",
                  "Boosted property value through modern amenities"
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
                href="/projects/yamunaskycity"
                className="inline-flex items-center border border-neutral-700 bg-transparent text-neutral-200 px-4 py-2 rounded-lg hover:bg-neutral-800 hover:border-neutral-600 transition-colors text-base font-medium shadow-sm group"
              >
                <svg className="w-4 h-4 mr-2 text-neutral-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
