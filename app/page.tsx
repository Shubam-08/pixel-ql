import { HeroLamp } from "@/components/HeroLamp";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import Link from "next/link";
import { ScrollButton } from "@/components/ui/scroll-button";

export default function Home() {
  return (
    <>
      <HeroLamp />
      
      {/* Featured Projects Section */}
      <section id="featured-projects" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <ContainerScroll
          titleComponent={
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Our Featured Projects
            </h2>
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
            {/* Project 1 */}
            <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="relative h-64">
                <Image
                  src="/second.jpg"
                  alt="29k Hotel Project"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">29k Hotel, Pune</h3>
                <p className="text-gray-300 mb-4">
                  Advanced GRMS and mood lighting solutions for luxury hospitality.
                </p>
                <Link
                  href="/projects/29k-hotel"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="relative h-64">
                <Image
                  src="/third.jpg"
                  alt="Corporate Office Project"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">Corporate Office</h3>
                <p className="text-gray-300 mb-4">
                  Smart energy management and automation for modern office spaces.
                </p>
                <Link
                  href="/projects/corporate-office"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="relative h-64">
                <Image
                  src="/fourth.jpg"
                  alt="Retail Mall Project"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">Retail Mall</h3>
                <p className="text-gray-300 mb-4">
                  Energy-efficient lighting and automation for retail environments.
                </p>
                <Link
                  href="/projects/retail-mall"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="relative h-64">
                <Image
                  src="/fifth.jpg"
                  alt="Residential Project"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">Residential Complex</h3>
                <p className="text-gray-300 mb-4">
                  Smart home automation and energy management for modern living.
                </p>
                <Link
                  href="/projects/residential-complex"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <ScrollButton />
          </div>
        </ContainerScroll>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900">
        <ContainerScroll
          titleComponent={
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Our Services
            </h2>
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
            {/* Service Boxes */}
            <Link
              href="/services"
              className="group bg-gray-800 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Smart Lighting Solutions</h3>
                <p className="text-gray-400">
                  Advanced lighting control systems for energy efficiency and ambiance.
                </p>
              </div>
            </Link>

            <Link
              href="/services"
              className="group bg-gray-800 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Energy Management Systems</h3>
                <p className="text-gray-400">
                  Comprehensive solutions for monitoring and optimizing energy usage.
                </p>
              </div>
            </Link>

            <Link
              href="/services"
              className="group bg-gray-800 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Automation Solutions</h3>
                <p className="text-gray-400">
                  Intelligent automation for building systems and operations.
                </p>
              </div>
            </Link>

            <Link
              href="/services"
              className="group bg-gray-800 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Lighting Design</h3>
                <p className="text-gray-400">
                  Custom lighting design for ambiance and functionality.
                </p>
              </div>
            </Link>

            <Link
              href="/services"
              className="group bg-gray-800 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Energy Efficiency</h3>
                <p className="text-gray-400">
                  Energy-efficient solutions for reduced energy consumption.
                </p>
              </div>
            </Link>

            <Link
              href="/services"
              className="group bg-gray-800 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Building Automation</h3>
                <p className="text-gray-400">
                  Integrated building automation for efficient operations.
                </p>
              </div>
            </Link>
          </div>
        </ContainerScroll>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today to schedule a consultation
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-100 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
