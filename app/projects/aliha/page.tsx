"use client";

import ImageCarousel from "@/components/ImageCarousel";
import Link from "next/link";

export default function AlihaUniversityProjectPage() {
  return (
    <main className="bg-black text-white">
      <div className="w-full pt-4 md:pt-8 px-2 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* ==== LEFT: Image Carousel ==== */}
          <div className="w-full flex justify-center items-start py-22 md:px-8">
            <ImageCarousel
              images={[
                { src: "/aliha.png", alt: "Aliha University Plan 1" },
                { src: "/aliha1.png", alt: "Aliha University - Classroom Area" },
                { src: "/aliha2.png", alt: "Aliha University - Lecture Hall" },
                 { src: "/aliha3.png", alt: "Aliha University - Lecture Hall" },
                  { src: "/aliha4.png", alt: "Aliha University - Lecture Hall" },
                   { src: "/aliha5.png", alt: "Aliha University - Lecture Hall" },
              ]}
              aspect="aspect-[4/3]"
            />
          </div>

          {/* ==== RIGHT: Text Section ==== */}
          <div className="w-full flex flex-col justify-start space-y-10 px-6 py-8 md:px-12">
            <h3 className="text-3xl font-bold text-center md:text-left">Aliha University Campus</h3>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
              <p className="text-gray-400 leading-relaxed">
                A state-of-the-art university campus project focused on delivering smart lighting and energy automation across classrooms, labs, libraries, and auditoriums. Designed to create a productive and adaptive learning environment.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                {[
                  "Zone-based lighting control across departments",
                  "Lecture hall ambient light automation",
                  "Daylight and occupancy sensing",
                  "Central dashboard for monitoring and scheduling",
                  "Emergency lighting integration",
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
                  <p><span className="font-semibold">Location:</span> India</p>
                </div>
                <div className="space-y-2">
                  <p><span className="font-semibold">Lighting Points:</span> 2,200+</p>
                  <p><span className="font-semibold">Energy Savings:</span> Up to 50%</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                {[
                  "Enhanced learning atmosphere with adaptive lighting",
                  "Optimized energy consumption across buildings",
                  "Scalable automation for future expansion",
                  "Low maintenance infrastructure",
                  "Supports sustainability goals for green campuses",
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
