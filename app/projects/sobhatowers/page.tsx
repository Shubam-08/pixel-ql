"use client";

import ImageCarousel from "@/components/ImageCarousel";
import Link from "next/link";

export default function HotelProjectPage() {
  return (
    <main className="bg-black text-white">
      <div className="w-full pt-6 md:pt-20 px-2 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* LEFT: Image Carousel */}
          <div className="w-full flex justify-center items-start py-20 md:px-8">
            <ImageCarousel
              images={[
                { src: "/Sobha Towers.jpg", alt: "29k Hotel Project" },
                 { src: "/Sobha Towers1.jpg", alt: "29k Hotel Project" },
                
              ]}
              aspect="aspect-[4/3]"
            />
          </div>

          {/* RIGHT: Project Details */}
          <div className="w-full flex flex-col justify-start space-y-10 px-6 py-8 md:px-12">
            <h1 className="text-3xl font-bold text-center md:text-left">Sobha Towers</h1>

            {/* Project Overview */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
              <p className="text-gray-400 leading-relaxed">
                The 29k Hotel project represents a comprehensive implementation of our smart lighting and automation solutions in a luxury hotel environment. The project showcases our ability to integrate advanced lighting control systems with energy management and guest experience enhancement features.
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                {[
                  "Room-specific lighting scenes for different times of day",
                  "Automated energy optimization based on occupancy",
                  "Guest-friendly lighting controls via mobile app",
                  "Mood lighting for various hotel areas",
                  "Integration with HVAC systems for energy savings"
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

            {/* Technical Specifications */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Technical Specifications</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-gray-400">
                <div className="space-y-2">
                  <p><span className="font-semibold">Project Duration:</span> 6 months</p>
                  <p><span className="font-semibold">Location:</span> Pune, India</p>
                </div>
                <div className="space-y-2">
                  <p><span className="font-semibold">Lighting Points:</span> 1,200+</p>
                  <p><span className="font-semibold">Energy Savings:</span> 35% reduction</p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                {[
                  "Enhanced guest experience through intuitive lighting controls",
                  "Significant energy cost reduction",
                  "Improved maintenance efficiency",
                  "Increased property value through modern amenities",
                  "Compliance with energy efficiency standards"
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

            {/* Back Button */}
            <div className="text-center pt-8">
              <Link
                href="/projects/sobhatowers"
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
