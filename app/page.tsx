import { HeroLamp } from "@/components/HeroLamp";
import FloatingMenu from "@/components/FloatingMenu";
import GlowingHeading from "@/components/GlowingHeading";

import Image from "next/image";
import Link from "next/link";
import { ScrollButton } from "@/components/ui/scroll-button";

export default function Home() {
  return (
    <main className="overflow-x-hidden w-full max-w-full">
      <FloatingMenu />
      <HeroLamp />

      {/* Featured Projects Section */}
      <section
        id="featured-projects"
        className="relative py-14 bg-gradient-to-b from-gray-900 to-black w-full max-w-full px-2 sm:px-4 md:px-8 overflow-x-hidden"
      >
        {/* Divider */}
        <div className="w-full flex justify-center mb-10">
          <div className="h-1 w-40 rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-pink-400 animate-pulse" />
        </div>

        {/* Animated Background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 w-full max-w-full overflow-x-hidden"
        >
          <div className="absolute -top-24 left-1/4 w-96 h-96 bg-pink-500/30 blur-3xl rounded-full animate-blob1" />
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-500/30 blur-2xl rounded-full animate-blob2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-400/20 blur-2xl rounded-full animate-blob3" />
          <div className="noise-overlay absolute inset-0" />
        </div>

        <GlowingHeading as="h2" className="text-4xl mb-12 text-center">
          Our Featured Projects
        </GlowingHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 w-full max-w-full">
          {/* Left: Large Vertical Card */}
          <div className="flex flex-col h-auto">
            <Link href="/projects/sobhatowers" className="block flex-1">
              <div className="bg-gray-800 rounded-3xl overflow-hidden shadow-2xl border border-transparent hover:shadow-cyan-400/40 hover:border-cyan-400 hover:brightness-110 hover:-translate-y-2 transition-all duration-300 h-auto flex flex-col">
                <div className="relative w-full aspect-[3/4] md:h-[700px] md:aspect-auto">
                  <Image
                    src="/Sobha Towers.jpg"
                    alt="Corporate Office Project"
                    fill
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
                  />
                  <div className="absolute bottom-0 left-0 w-full px-6 py-5 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end">
                    <h3 className="text-xl md:text-2xl font-semibold text-white/90">
                      Sobha Towers
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Right: Two Stacked Cards */}
          <div className="flex flex-col gap-10 justify-center h-auto">
            <Link href="/projects/residentialcomplex" className="block flex-1">
              <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-transparent hover:shadow-cyan-400/40 hover:border-cyan-400 hover:brightness-110 hover:-translate-y-2 transition-all duration-300 h-[340px] md:h-[420px] flex flex-col">
                <div className="relative w-full h-full aspect-[16/9]">
                  <Image
                    src="/fourth.jpg"
                    alt="Residential Area"
                    fill
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
                  />
                  <div className="absolute bottom-0 left-0 w-full px-6 py-3 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end">
                    <h3 className="text-lg md:text-xl font-semibold text-white/90">
                      Residential Area
                    </h3>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/projects/italianheritage" className="block flex-1">
              <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-transparent hover:shadow-cyan-400/40 hover:border-cyan-400 hover:brightness-110 hover:-translate-y-2 transition-all duration-300 h-[340px] md:h-[420px] flex flex-col">
                <div className="relative w-full h-full aspect-[16/9]">
                  <Image
                    src="/project5.png"
                    alt="Italian heritage"
                    fill
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
                  />
                  <div className="absolute bottom-0 left-0 w-full px-6 py-3 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end">
                    <h3 className="text-lg md:text-xl font-semibold text-white/90">
                      Italian Heritage
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="text-center mt-6">
          <ScrollButton />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8 bg-[hsl(221,39%,11%)] px-2 sm:px-4 md:px-6">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-white mb-3">
              Ready to Transform Your Space?
            </h2>
            <p className="text-base text-white/80 mb-4">
              Contact us today to schedule a consultation
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-100 transition-colors text-base"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
