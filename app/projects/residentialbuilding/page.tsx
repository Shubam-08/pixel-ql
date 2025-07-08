"use client";

import ImageCarousel from "@/components/ImageCarousel";
import Link from "next/link";

export default function ResidentialProjectPage() {
  return (
    <main className="bg-black text-white">
      <div className="w-full pt-6 md:pt-20 px-2 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* ===== LEFT: Image Carousel ===== */}
          <div className="w-full flex justify-center items-start py-24 md:px-8">
            <ImageCarousel
              images={[
                { src: "/building.jpg", alt: "Residential Building Project" },

              ]}
              aspect="aspect-[4/3]"
            />
          </div>

          {/* ===== RIGHT: Project Details ===== */}
          <div className="w-full flex flex-col justify-start space-y-10 px-6 py-8 md:px-12">
            <h1 className="text-3xl font-bold text-center md:text-left">Residential Building, Bangalore</h1>

            {/* Project Overview */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
              <p className="text-gray-400 leading-relaxed">
                Our smart home automation solution implemented in a modern residential complex in Bangalore. This project showcases how we bring convenience and energy efficiency to everyday living spaces.
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                {[
                  "Smart lighting control for individual apartments",
                  "Energy-efficient lighting for common areas",
                  "Security system integration",
                  "Centralized maintenance monitoring",
                  "Mobile app control for residents",
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
                  <p><span className="font-semibold">Project Duration:</span> 3 months</p>
                  <p><span className="font-semibold">Location:</span> Bangalore, India</p>
                </div>
                <div className="space-y-2">
                  <p><span className="font-semibold">Lighting Points:</span> 500+</p>
                  <p><span className="font-semibold">Energy Savings:</span> 30% reduction</p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                {[
                  "Enhanced resident convenience",
                  "Reduced electricity bills",
                  "Improved security",
                  "Modern living experience",
                  "Easy maintenance",
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
