"use client";

import Image from "next/image";
import Link from "next/link";

export default function RetailProjectPage() {
  return (
    <main className="bg-black text-white">
      {/* Responsive Gallery Grid for Project Images */}
      <div className="w-full pt-24 md:pt-32 px-2 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
            <Image
              src="/fashionshowroom.png"
              alt="Retail Mall Project 1"
              fill
              className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
            <Image
              src="/fashion1.png"
              alt="Retail Mall Project 2"
              fill
              className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
          <div className="relative w-full max-w-3xl h-[400px] mx-auto rounded-2xl overflow-hidden shadow-2xl group">
  <Image
    src="/fashion2.png"
    alt="Retail Mall Project 3"
    fill
    className="object-cover object-center transition-transform duration-300 group-hover:scale-105 rounded-2xl"
    priority
  />
</div>

              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
            <Image
              src="/fashion3.png"
              alt="Retail Mall Project 1"
              fill
              className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
        </div>
      </div>

      {/* Text Section */}
      <section className="bg-gradient-to-b from-black to-gray-900 py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-16">
          <h1 className="text-5xl font-bold text-center">Fashion Showroom</h1>

          {/* Project Overview */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">Project Overview</h2>
            <p className="text-gray-400 leading-relaxed">
              Our comprehensive lighting automation solution for a major retail mall in Chennai. This project showcases our ability to create dynamic and energy-efficient lighting environments that enhance customer experience and operational efficiency.
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              {[
                "Dynamic lighting zones for different store areas",
                "Time-based lighting schedules",
                "Energy-efficient LED lighting",
                "Centralized control system",
                "Real-time energy monitoring"
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

          {/* Technical Specs */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">Technical Specifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-gray-400">
              <div className="space-y-2">
                <p><span className="font-semibold">Project Duration:</span> 5 months</p>
                <p><span className="font-semibold">Location:</span> Chennai, India</p>
              </div>
              <div className="space-y-2">
                <p><span className="font-semibold">Lighting Points:</span> 1,500+</p>
                <p><span className="font-semibold">Energy Savings:</span> 45% reduction</p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">Benefits</h2>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              {[
                "Enhanced customer experience through dynamic lighting",
                "Significant energy cost reduction",
                "Improved store visibility and ambiance",
                "Easy maintenance and monitoring",
                "Modern retail environment"
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
              className="inline-flex items-center bg-blue-600 text-white px-12 py-4 rounded-full hover:bg-blue-700 transition-colors text-lg font-semibold"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
