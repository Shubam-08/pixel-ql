"use client";

import ImageCarousel from "@/components/ImageCarousel";
import Link from "next/link";

export default function DubaiTrainingInstitutePage() {
  return (
    <main className="bg-black text-white">
      <div className="w-full pt-4 md:pt-8 px-2 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* LEFT: Carousel */}
          <div className="w-full flex justify-center items-start py-20 md:px-8">
            <ImageCarousel
              images={[
                { src: "/dubaitrainginstitute.jpg", alt: "Dubai Training Institute 1" },
                { src: "/dubaitrainginstitute1.jpg", alt: "Dubai Training Institute 2" },
                { src: "/dubaitrainginstitute2.jpg", alt: "Dubai Training Institute 3" },
                { src: "/dubaitrainginstitute3.jpg", alt: "Dubai Training Institute 4" },
              ]}
              aspect="aspect-[4/3]"
            />
          </div>

          {/* RIGHT: Content */}
          <div className="w-full flex flex-col justify-start space-y-10 px-6 py-8 md:px-12">
            <h1 className="text-3xl font-bold text-center md:text-left">
              Dubai Training Institute
            </h1>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
              <p className="text-gray-400 leading-relaxed">
                This training facility in the heart of Dubai was transformed into a modern learning environment through our smart lighting and automation systems. Our solution enhances focus, comfort, and energy efficiency in all training areas.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                {[
                  "Automated lighting scenes for classrooms and auditoriums",
                  "Motion-based lighting and HVAC control",
                  "Custom light scheduling for different training programs",
                  "Remote access and management",
                  "Daylight harvesting with dimming features",
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
                  <p><span className="font-semibold">Location:</span> Dubai, UAE</p>
                </div>
                <div className="space-y-2">
                  <p><span className="font-semibold">Training Halls Automated:</span> 8</p>
                  <p><span className="font-semibold">Energy Savings:</span> Up to 50%</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                {[
                  "Optimized learning environment through smart control",
                  "Reduced operational costs",
                  "Enhanced flexibility in space usage",
                  "Environmentally friendly infrastructure",
                  "Ease of future expansion and scalability",
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
