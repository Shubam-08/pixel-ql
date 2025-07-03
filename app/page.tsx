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
            
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="relative h-64">
                <Image
                  src="/Sobha Towers.jpg"
                  alt="Corporate Office Project"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">Tower from street</h3>
                <p className="text-gray-300 mb-4">
                  Smart energy management and automation for modern office spaces.
                </p>
               
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="relative h-64 w-full">
                <Image
                  src="/fourth.jpg"
                  alt="Retail Mall Project"
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">Retail Mall</h3>
                <p className="text-gray-300 mb-4">
                  Energy-efficient lighting and automation for retail environments.
                </p>
               
              </div>
            </div>


             {/* Project 5 */}
            <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="relative h-64">
                <Image
                  src="/project5.png"
                  alt="Retail Mall Project"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">Italian heritage</h3>
                <p className="text-gray-300 mb-4">
                Merge classic European sensibilities with cutting-edge smart technologies
                </p>
              </div>
            </div>

             
             {/* Project 6 */}
            <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="relative h-64">
                <Image
                  src="/project6.png"
                  alt="Gujarat’s Architectural Jewels"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">Gujarat’s Architectural Jewels</h3>
                <p className="text-gray-300 mb-4">
                Replicate them with modern lighting, materials, and smart systems.
                </p>
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
      <h2 className="text-4xl font-bold text-white mb-16 text-center">
        Our Services
      </h2>
    }
  >
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6 md:px-12">
      {[
        {
          title: 'Smart Lighting Solutions',
          desc: 'Advanced lighting control systems designed to boost energy efficiency and enhance ambiance in residential, commercial, and industrial spaces.',
          image: '/smart-lighting.png',
        },
        {
          title: 'Automation Solutions',
          desc: 'Intelligent automation systems to control lighting, HVAC, and other electronics, providing convenience, efficiency, and modernity in your building.',
          image: '/automation.jpg',
        },
        {
          title: 'Lighting Design',
          desc: 'Tailor-made lighting layouts that blend beauty with functionality. We craft lighting schemes that fit the architecture and emotion of your spaces.',
          image: '/design.png',
        },
        {
          title: 'Customized Decorative Lighting',
          desc: 'From ambient LED setups to feature chandeliers, we create custom solutions that transform your home, office, or retail space into a visual delight.',
          image: '/decorative.png',
        },
        {
          title: 'Personalized & Affordable Lighting',
          desc: 'We deliver lighting plans tailored to your budget and preferences—because good lighting should be accessible to everyone.',
          image: '/personalized.png',
        },
        {
          title: 'Energy Efficiency',
          desc: 'Lighting systems and technologies that significantly reduce energy consumption without compromising brightness or performance.',
          image: '/efficiency.png',
        },
       
       
      ].map((service, index) => (
        <div
          key={index}
          className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500 group"
          style={{
            backgroundImage: `url('${service.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition duration-300" />
          <div className="relative p-8 min-h-[320px] flex flex-col justify-end">
            <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{service.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </ContainerScroll>
</section>



      {/* Call to Action Section */}
      <section className="py-20 bg-[hsl(221,39%,11%)]">
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
