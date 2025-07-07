import { HeroLamp } from "@/components/HeroLamp";
import FloatingMenu from "@/components/FloatingMenu";
import GlowingHeading from "@/components/GlowingHeading";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import Link from "next/link";
import { ScrollButton } from "@/components/ui/scroll-button";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <FloatingMenu />
      <HeroLamp />
      
      {/* Featured Projects Section */}
      <section id="featured-projects" className="py-20 bg-gradient-to-b from-gray-900 to-black px-4 sm:px-6 md:px-12">
        {/* Divider */}
        <div className="w-full flex justify-center mb-10">
          <div className="h-1 w-40 rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-pink-400 animate-pulse" />
        </div>
        <ContainerScroll
          titleComponent={
            <GlowingHeading as="h2" className="text-4xl mb-12 text-center">Our Featured Projects</GlowingHeading>
          }
        >
          {/* Animated background for projects section */}
<div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
  <div className="absolute -top-24 left-1/4 w-96 h-96 bg-pink-500/30 blur-3xl rounded-full animate-blob1" />
  <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-500/30 blur-2xl rounded-full animate-blob2" />
  <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-400/20 blur-2xl rounded-full animate-blob3" />
  <div className="noise-overlay absolute inset-0" />
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            

            {/* Project 2 */}
             <Link href="/projects/sobhatowers" className="block">
               <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="relative aspect-[16/9] md:aspect-[2/1] w-full h-80 md:h-96 overflow-hidden">
                  <Image
                    src="/Sobha Towers.jpg"
                    alt="Corporate Office Project"
                    fill
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
                  />
                  <div className="absolute bottom-0 left-0 w-full px-6 py-5 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end justify-between">
                    <h3 className="text-lg md:text-xl font-semibold text-white/90">Sobha Towers</h3>
                  </div>
                </div>
              </div>
            </Link>

             {/* Project 3 */}
             <Link href="/projects/residentialcomplex" className="block">
               <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="relative aspect-[16/9] md:aspect-[2/1] w-full h-80 md:h-96 overflow-hidden">
                  <Image
                    src="/fourth.jpg"
                    alt="Retail Mall Project"
                    fill
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
                  />
                  <div className="absolute bottom-0 left-0 w-full px-6 py-5 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end justify-between">
                    <h3 className="text-lg md:text-xl font-semibold text-white/90">Residential Area</h3>
                  </div>
                </div>
              </div>
            </Link>

            {/* Project 5 */}
            <Link href="/projects/italianheritage" className="block">
              <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="relative aspect-[16/9] md:aspect-[2/1] w-full h-80 md:h-96 overflow-hidden">
                  <Image
                    src="/project5.png"
                    alt="Italian heritage"
                    fill
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
                  />
                  <div className="absolute bottom-0 left-0 w-full px-6 py-5 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end justify-between">
                    <h3 className="text-lg md:text-xl font-semibold text-white/90">Italian heritage</h3>
                  </div>
                </div>
              </div>
            </Link>

            {/* Project 6 */}
            <Link href="/projects/gujratjewels" className="block">
              <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="relative aspect-[16/9] md:aspect-[2/1] w-full h-80 md:h-96 overflow-hidden">
                  <Image
                    src="/project6.png"
                    alt="Gujarat’s Architectural Jewels"
                    fill
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
                  />
                  <div className="absolute bottom-0 left-0 w-full px-6 py-5 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end justify-between">
                    <h3 className="text-lg md:text-xl font-semibold text-white/90">Gujarat’s Architectural Jewels</h3>
                  </div>
                </div>
              </div>
            </Link>
              

   {/* Project 3 */}
             <Link href="/projects/fashionshowroom" className="block">
              <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="relative aspect-[16/9] md:aspect-[2/1] w-full h-80 md:h-96 overflow-hidden">
                  <Image
                    src="/fashionshowroom.png"
                    alt="Retail Mall Project"
                    fill
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
                  />
                  <div className="absolute bottom-0 left-0 w-full px-6 py-5 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end justify-between">
                    <h3 className="text-lg md:text-xl font-semibold text-white/90">Fashion Showroom</h3>
                  </div>
                </div>
              </div>
            </Link>

                   {/* Project 3 */}
            <Link href="/projects/comercialshowroom" className="block">
              <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="relative aspect-[16/9] md:aspect-[2/1] w-full h-80 md:h-96 overflow-hidden">
                  <Image
                    src="/comercialshowroom.png"
                    alt="Retail Mall Project"
                    fill
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
                  />
                  <div className="absolute bottom-0 left-0 w-full px-6 py-5 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end justify-between">
                    <h3 className="text-lg md:text-xl font-semibold text-white/90">Commercial Showroom</h3>
                  </div>
                </div>
              </div>
            </Link>
            
          </div>
          <div className="text-center mt-12">
            <ScrollButton />
          </div>
        </ContainerScroll>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900 px-4 sm:px-6 md:px-12">
        {/* Divider */}
        <div className="w-full flex justify-center mb-10">
          <div className="h-1 w-40 rounded-full bg-gradient-to-r from-pink-500 via-blue-400 to-cyan-400 animate-pulse" />
        </div>
        <ContainerScroll
          titleComponent={
            <GlowingHeading as="h2" className="text-4xl mb-12 text-center">Our Services</GlowingHeading>
          }
        >
          {/* Horizontally scrollable flex on mobile, grid on md+ */}
          {/* Animated background for services section */}
<div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
  <div className="absolute -top-20 left-1/3 w-80 h-80 bg-blue-400/30 blur-3xl rounded-full animate-blob1" />
  <div className="absolute top-2/3 right-0 w-72 h-72 bg-pink-400/30 blur-2xl rounded-full animate-blob2" />
  <div className="noise-overlay absolute inset-0" />
</div>
<div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 md:grid md:grid-cols-2 md:gap-8 md:overflow-visible md:snap-none scrollbar-thin scrollbar-thumb-blue-400/40 scrollbar-track-transparent relative z-10">
            {[
              { icon: '💡', title: 'Smart Lighting Solutions', desc: 'Advanced lighting control systems designed to boost energy efficiency and enhance ambiance in residential, commercial, and industrial spaces.', image: '/smart-lighting.png', },
              { icon: '🤖', title: 'Automation Solutions', desc: 'Intelligent automation systems to control lighting, HVAC, and other electronics, providing convenience, efficiency, and modernity in your building.', image: '/automation.jpg', },
              { icon: '🎨', title: 'Lighting Design', desc: 'Tailor-made lighting layouts that blend beauty with functionality. We craft lighting schemes that fit the architecture and emotion of your spaces.', image: '/design.png', },
              { icon: '✨', title: 'Customized Decorative Lighting', desc: 'From ambient LED setups to feature chandeliers, we create custom solutions that transform your home, office, or retail space into a visual delight.', image: '/decorative.png', },
              { icon: '🏠', title: 'Personalized & Affordable Lighting', desc: 'We deliver lighting plans tailored to your budget and preferences—because good lighting should be accessible to everyone.', image: '/personalized.png', },
              { icon: '🌱', title: 'Energy Efficiency', desc: 'Lighting systems and technologies that significantly reduce energy consumption without compromising brightness or performance.', image: '/efficiency.png', },
            ].map((service, index) => (
               <div
                 key={index}
                 className="relative min-w-[300px] max-w-[90vw] md:min-w-0 md:max-w-none snap-center rounded-3xl overflow-hidden shadow-2xl group backdrop-blur-lg bg-white/10 border border-white/20 hover:border-cyan-400/60 hover:shadow-cyan-400/30 hover:scale-105 hover:brightness-110 transition-all duration-500 flex flex-col justify-end"
                 style={{ backgroundImage: `url('${service.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
               >
                 <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition duration-300" />
                 <div className="relative p-8 min-h-[340px] h-[340px] flex flex-col justify-end items-center aspect-[4/3] md:aspect-square">
                   <span className="text-4xl mb-3 drop-shadow-lg">{service.icon}</span>
                  <h3 className="text-xl font-bold text-white mb-2 text-center drop-shadow-md">{service.title}</h3>
                  <p className="text-gray-200 text-sm leading-relaxed text-center drop-shadow-sm">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ContainerScroll>
      </section>




      {/* Call to Action Section */}
      <section className="py-20 bg-[hsl(221,39%,11%)] px-4 sm:px-6 md:px-12">
        <div className="container mx-auto max-w-4xl">
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
    </main>
  );
}
