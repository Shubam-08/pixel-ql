import { HeroLamp } from "@/components/HeroLamp";
import FloatingMenu from "@/components/FloatingMenu";
import Image from "next/image";
import Link from "next/link";
import { ScrollButton } from "@/components/ui/scroll-button";
import HeaderLogo from "@/components/HeaderLogo";

export default function Home() {
  return (
    <main className="w-full max-w-full overflow-x-hidden bg-[#111111] text-white">
      <HeaderLogo />
      <FloatingMenu />
      <HeroLamp />

      {/* Featured Projects Section */}
      <section
        id="featured-projects"
        className="relative py-14 bg-[#111111] w-full max-w-full px-2 sm:px-4 md:px-8 border-y border-white/10"
      >
        {/* Divider */}
        <div className="w-full flex justify-center mb-10">
          <div className="h-1 w-40 rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-pink-400" />
        </div>
<div className="text-center mb-12">
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
    Our <span className="text-primary">Featured</span> Projects
  </h2>
  <p className="mt-4 text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
    A curated selection of architectural and lighting designs that reflect our passion for detail, creativity, and innovation.
  </p>
</div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 w-full max-w-full">
          {/* Left: Large Vertical Card */}
          <div className="flex flex-col h-auto">
            <Link href="/projects/sobhatowers" className="block flex-1">
              <div className="bg-gray-800 rounded-3xl overflow-hidden shadow-2xl border border-transparent hover:shadow-cyan-400/40 hover:border-cyan-400 hover:brightness-110 hover:-translate-y-2 transition-all duration-300 h-auto flex flex-col">
                <div className="relative w-full aspect-[3/4] md:h-[875px] md:aspect-auto">
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
            <Link href="/projects/luqta" className="block flex-1">
              <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-transparent hover:shadow-cyan-400/40 hover:border-cyan-400 hover:brightness-110 hover:-translate-y-2 transition-all duration-300 h-[340px] md:h-[420px] flex flex-col">
                <div className="relative w-full h-full aspect-[16/9]">
                  <Image
                    src="/luqta2.jpg"
                    alt="Luqta, Private palace"
                    fill
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
                  />
                  <div className="absolute bottom-0 left-0 w-full px-6 py-3 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end">
                    <h3 className="text-lg md:text-xl font-semibold text-white/90">
                      Luqta, Private Palace
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
                    alt="Italian Heritage"
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
    </main>
  );
}
