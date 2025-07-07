"use client";

import ImageCarousel from "@/components/ImageCarousel";
import Link from "next/link";

export default function HotelProjectPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="w-full pt-24 md:pt-32 px-2 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Image Carousel */}
          <div className="flex flex-col justify-center items-center">
            <ImageCarousel
              images={[
                { src: "/Sobha Towers.jpg", alt: "29k Hotel Project" },
              ]}
              aspect="aspect-[4/3]"
            />
          </div>

          {/* Right: Project Details */}
          <div className="flex flex-col justify-center space-y-10">
            <h1 className="text-5xl font-bold mb-12 text-center md:text-left">Sobha Towers</h1>

            {/* Project Overview */}
            <div>
              <h2 className="text-3xl font-semibold mb-4">Project Overview</h2>
              <p className="text-gray-400 leading-relaxed">
                The 29k Hotel project represents a comprehensive implementation of our smart lighting and automation solutions in a luxury hotel environment. The project showcases our ability to integrate advanced lighting control systems with energy management and guest experience enhancement features.
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-4">
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
          </div>
        </div>
      </div>

      {/* Section: Technical Specifications & Benefits */}
      <section className="px-4 md:px-12 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Technical Specifications */}
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold mb-4">Technical Specifications</h2>
            <div className="grid grid-cols-2 gap-8 text-gray-400">
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="font-semibold">Project Duration:</span>
                  <span className="ml-4">6 months</span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold">Location:</span>
                  <span className="ml-4">Pune, India</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="font-semibold">Lighting Points:</span>
                  <span className="ml-4">1,200+</span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold">Energy Savings:</span>
                  <span className="ml-4">35% reduction</span>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold mb-4">Benefits</h2>
            <ul className="list-disc list-inside text-gray-400 space-y-4">
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
        </div>

        {/* Back Button */}
        <div className="text-center pb-16">
          <Link 
            href="/projects" 
            className="inline-flex items-center bg-blue-600 text-white px-12 py-5 rounded-full hover:bg-blue-700 transition-colors text-xl font-semibold"
          >
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </Link>
        </div>
      </section>
    </main>
  );
}
