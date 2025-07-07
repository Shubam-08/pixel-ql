"use client";

import ImageCarousel from "@/components/ImageCarousel";
import Link from "next/link";

export default function ResidentialProjectPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-12 text-center">
              Residential Complex, Bangalore
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Left: Image Carousel */}
           {/* Left: Image Carousel */}
<div className="w-full h-full">
  <div className="w-full h-full">
    <ImageCarousel
      images={[
        { src: "/fourth.jpg", alt: "Residential Complex Project" },
      ]}
      aspect="aspect-[21/9]"
    />
  </div>
</div>


              {/* Right: Project Details */}
              <div className="space-y-8">
                {/* Overview */}
                <div>
                  <h2 className="text-3xl font-semibold mb-4">Project Overview</h2>
                  <p className="text-gray-400 leading-relaxed">
                    Our smart home automation solution implemented in a modern residential complex in Bangalore. This project showcases how we bring convenience and energy efficiency to everyday living spaces.
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-4">
                    {[
                      "Smart lighting control for individual apartments",
                      "Energy-efficient lighting for common areas",
                      "Security system integration",
                      "Centralized maintenance monitoring",
                      "Mobile app control for residents"
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Specs and Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              {/* Technical Specifications */}
              <div className="space-y-8">
                <h2 className="text-3xl font-semibold mb-4">Technical Specifications</h2>
                <div className="grid grid-cols-2 gap-8 text-gray-400">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="font-semibold">Project Duration:</span>
                      <span className="ml-4">3 months</span>
                    </div>
                    <div className="flex items-start">
                      <span className="font-semibold">Location:</span>
                      <span className="ml-4">Bangalore, India</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="font-semibold">Lighting Points:</span>
                      <span className="ml-4">500+</span>
                    </div>
                    <div className="flex items-start">
                      <span className="font-semibold">Energy Savings:</span>
                      <span className="ml-4">30% reduction</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-8">
                <h2 className="text-3xl font-semibold mb-4">Benefits</h2>
                <ul className="list-disc list-inside text-gray-400 space-y-4">
                  {[
                    "Enhanced resident convenience",
                    "Reduced electricity bills",
                    "Improved security",
                    "Modern living experience",
                    "Easy maintenance"
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Back Button */}
            <div className="text-center">
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
          </div>
        </div>
      </section>
    </main>
  );
}
