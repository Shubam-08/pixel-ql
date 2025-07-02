import { HeroLamp } from "@/components/HeroLamp";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HeroLamp />
      
      {/* Featured Projects Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <ContainerScroll
          titleComponent={
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Our Featured Projects
            </h2>
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
            {/* Project Card */}
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
                  GRMS, mood lighting, and energy automation solutions integrated by Qlite.
                </p>
                <Link
                  href="/projects/29k-hotel"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            {/* Add more project cards here */}
          </div>
        </ContainerScroll>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <ContainerScroll
          titleComponent={
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Services
            </h2>
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
            {/* Service Cards */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Energy Management</h3>
              <p className="text-gray-600 mb-6">
                Advanced energy monitoring and optimization solutions
              </p>
              <Link
                href="/services/energy-management"
                className="text-blue-600 hover:text-blue-700"
              >
                Learn More →
              </Link>
            </div>
            {/* Add more service cards here */}
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
