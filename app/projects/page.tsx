"use client";

import Link from "next/link";
import Image from "next/image";
import { ScrollButton } from "@/components/ui/scroll-button";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Sobha Towers",
      image: "/Sobha Towers.jpg",
      description: "Intelligent energy management system with smart lighting and HVAC controls",
      link: "/projects/sobhatowers"
    },
    {
      id: 2,
      title: "Residential Complex, Bangalore",
      image: "/fourth.jpg",
      description: "Smart home automation with integrated lighting and security systems",
      link: "/projects/residentialcomplex"
    },
    {
      id: 3,
      title: "Italian Heritage",
      image: "/project5.png",
      description: "Smart home automation with integrated lighting and security systems",
      link: "/projects/italianheritage"
    },
    {
      id: 4,
      title: "Gujrat Architectural Jewels",
      image: "/project6.png",
      description: "Advanced lighting control and automation system implemented in a luxury hotel setting",
      link: "/projects/gujratjewels"
    },
    {
      id: 5,
      title: "Fashion Showroom, Bangalore",
      image: "/fashionshowroom.png",
      description: "Intelligent energy management system with smart lighting and HVAC controls",
      link: "/projects/fashionshowroom"
    },
    {
      id: 6,
      title: "Commercial Showroom, Bangalore",
      image: "/comercialshowroom.png",
      description: "Smart home automation with integrated lighting and security systems",
      link: "/projects/comercialshowroom"
    },
    {
      id: 7,
      title: "Residential Building, Chennai",
      image: "/building.jpg",
      description: "Energy-efficient lighting and automation solutions for large retail spaces",
      link: "/projects/residentialbuilding"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section id="projects" className="py-20 bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-pink-500 animate-gradient-shimmer">
              Our Projects
            </h1>
            <div className="mx-auto h-1 w-40 rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-pink-400 animate-gradient-shimmer mb-8" />
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real-world implementations of our innovative solutions
            </p>
          </div>

          <div className="columns-1 md:columns-2 gap-6">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={project.link}
                className="group mb-6 block rounded-xl overflow-hidden relative shadow-xl bg-neutral-900 hover:shadow-2xl transition-shadow duration-300 break-inside-avoid"
              >
                <div className="w-full overflow-hidden relative flex">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105 group-hover:shadow-xl"
                    quality={90}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Overlay: Project title on top of image, fades out on hover */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-500 group-hover:opacity-0">
                    <h3
                      className="text-white text-2xl font-extrabold text-center select-none"
                      style={{
                        textShadow: '0 2px 12px rgba(0,0,0,0.85), 0 0px 1px #fff',
                        letterSpacing: '0.03em',
                        WebkitTextStroke: '0.5px #222',
                      }}
                    >
                      {project.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <ScrollButton />
          </div>
        </div>
      </section>
    </main>
  );
}
