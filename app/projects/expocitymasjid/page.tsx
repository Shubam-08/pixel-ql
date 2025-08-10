"use client";

import ImageCarousel from "@/components/ImageCarousel";
import Link from "next/link";

export default function ExpoCityMasjidProjectPage() {
  return (
    <main className="bg-black text-white">
      <div className="w-full pt-4 md:pt-8 px-2 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* ==== LEFT: Image Carousel ==== */}
          <div className="w-full flex justify-center items-start py-20 md:px-8">
            <ImageCarousel
              images={[
                { src: "/expocity.jpg", alt: "Expo City Masjid Interior" },
                { src: "/expocity1.jpg", alt: "Lighting View" },
                { src: "/expocity2.jpg", alt: "Prayer Hall Ambience" },
              ]}
              aspect="aspect-[4/3]"
            />
          </div>

          {/* ==== RIGHT: Project Details ==== */}
          <div className="w-full flex flex-col justify-start space-y-10 px-6 py-8 md:px-12">
            <h3 className="text-3xl font-bold text-center md:text-left">Expo City Masjid</h3>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
              <p className="text-gray-400 leading-relaxed">
                This sacred space in Expo City was designed with lighting precision and spiritual ambiance in mind.
                Our automation system creates an immersive environment that respects tradition while utilizing modern control systems for efficient, customizable illumination throughout the mosque.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                {[
                  "Ambient and mood lighting for prayer timings",
                  "Motion-sensor based corridor lighting",
                  "Dusk-to-dawn exterior light automation",
                  "Central control for Friday prayer events",
                  "Low-glare LED dome lighting system",
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
                  <p><span className="font-semibold">Project Duration:</span> 3 months</p>
                  <p><span className="font-semibold">Location:</span> Expo City, Dubai</p>
                </div>
                <div className="space-y-2">
                  <p><span className="font-semibold">Lighting Zones:</span> 120+</p>
                  <p><span className="font-semibold">Automation Savings:</span> 30% energy reduction</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                {[
                  "Serene atmosphere for worshippers",
                  "Automatic alignment with prayer schedules",
                  "Reduced energy usage during off-peak hours",
                  "Architectural integrity preserved with lighting design",
                  "System can be adjusted for Ramadan and special events",
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
                href="/projects/expocitymasjid"
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
