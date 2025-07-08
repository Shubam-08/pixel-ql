"use client";

import ImageCarousel from "@/components/ImageCarousel";
import Link from "next/link";

export default function ItalianHeritageProjectPage() {
  return (
    <main className="bg-black text-white">
      <div className="w-full pt-6 md:pt-8 px-2 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* ===== LEFT: Image Carousel ===== */}
          <div className="w-full flex justify-center items-start py-24 md:px-8">
            <ImageCarousel
              images={[
                { src: "/project5.png", alt: "Italian Heritage Project 1" },
                { src: "/italian1.png", alt: "Italian Heritage Project 2" },
                { src: "/italian2.png", alt: "Italian Heritage Project 3" },
              ]}
              aspect="aspect-[4/3]"
            />
          </div>

          {/* ===== RIGHT: Text Section ===== */}
          <div className="w-full flex flex-col justify-start space-y-10 px-6 py-18 md:px-12">
            <h1 className="text-5xl font-bold text-center md:text-left">Italian Heritage, Italy</h1>

            <div>
              <h2 className="text-3xl font-semibold mb-4">Project Overview</h2>
              <p className="text-gray-400 leading-relaxed">
                Our comprehensive lighting automation solution for a historic Italian structure. This project showcases our ability to create dynamic and energy-efficient lighting environments that enhance both aesthetic and functional appeal.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                {[
                  "Dynamic lighting zones for architectural highlights",
                  "Time-based lighting schedules",
                  "Energy-efficient LED integration",
                  "Centralized control system",
                  "Real-time energy monitoring",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-blue-600 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-semibold mb-4">Technical Specifications</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-gray-400">
                <div className="space-y-2">
                  <p><span className="font-semibold">Project Duration:</span> 5 months</p>
                  <p><span className="font-semibold">Location:</span> Italy</p>
                </div>
                <div className="space-y-2">
                  <p><span className="font-semibold">Lighting Points:</span> 1,500+</p>
                  <p><span className="font-semibold">Energy Savings:</span> 45% reduction</p>
                </div>
              </div>
            </div>

            {/* ===== Added Benefits Section ===== */}
            <div>
              <h2 className="text-3xl font-semibold mb-4">Benefits</h2>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                {[
                  "Elevated visual appeal of historical architecture",
                  "Significant reduction in energy consumption",
                  "Improved night-time ambiance for visitors",
                  "Centralized and easy lighting control",
                  "Preservation of heritage aesthetics with modern tech",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-600 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center pt-8">
              <Link
                href="/projects"
                className="inline-flex items-center border border-neutral-700 bg-transparent text-neutral-200 px-4 py-2 rounded-lg hover:bg-neutral-800 hover:border-neutral-600 transition-colors text-base font-medium shadow-sm group"
              >
                <svg className="w-4 h-4 mr-2 text-neutral-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
