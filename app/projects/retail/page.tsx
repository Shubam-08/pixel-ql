"use client";

import Image from "next/image";
import Link from "next/link";

export default function RetailProjectPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-12 text-center">Retail Mall, Chennai</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="aspect-[4/3] relative">
                <Image 
                  src="/fifth.jpg" 
                  alt="Retail Mall Project" 
                  fill 
                  className="object-cover rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300" 
                />
              </div>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-semibold mb-4">Project Overview</h2>
                  <p className="text-gray-400 leading-relaxed">
                    Our comprehensive lighting automation solution for a major retail mall in Chennai. This project showcases our ability to create dynamic and energy-efficient lighting environments that enhance customer experience and operational efficiency.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-4">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Dynamic lighting zones for different store areas</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Time-based lighting schedules</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Energy-efficient LED lighting</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Centralized control system</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Real-time energy monitoring</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="space-y-8">
                <h2 className="text-3xl font-semibold mb-4">Technical Specifications</h2>
                <div className="grid grid-cols-2 gap-8 text-gray-400">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="font-semibold">Project Duration:</span>
                      <span className="ml-4">5 months</span>
                    </div>
                    <div className="flex items-start">
                      <span className="font-semibold">Location:</span>
                      <span className="ml-4">Chennai, India</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="font-semibold">Lighting Points:</span>
                      <span className="ml-4">1,500+</span>
                    </div>
                    <div className="flex items-start">
                      <span className="font-semibold">Energy Savings:</span>
                      <span className="ml-4">45% reduction</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <h2 className="text-3xl font-semibold mb-4">Benefits</h2>
                <ul className="list-disc list-inside text-gray-400 space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Enhanced customer experience through dynamic lighting</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Significant energy cost reduction</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Improved store visibility and ambiance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Easy maintenance and monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Modern retail environment</span>
                  </li>
                </ul>
              </div>
            </div>

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
