"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ScrollButton } from "@/components/ui/scroll-button";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function ProjectsPage() {
  const yamunaRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (yamunaRef.current) {
      yamunaRef.current.playbackRate = 2.7;
    }
  }, []);

  const projects = [
   
   {
      id: 1,
      title: "Luqta(private place)",
      image: "/luqta2.jpg",
      description: "Energy-efficient lighting and automation solutions for large retail spaces",
      link: "/projects/luqta",
    },

     {
      id: 2,
      title: "Fashion Showroom, Bangalore",
      image: "/fashion3.png",
      description: "Intelligent energy management system with smart lighting and HVAC controls",
      link: "/projects/fashionshowroom",
    },

    {
      id: 3,
      title: "Italian Heritage",
      image: "/project5.png",
      description: "Smart home automation with integrated lighting and security systems",
      link: "/projects/italianheritage",
    },
    {
       id: 4,
      title: "Spatika Hotel, Manipal",
      image: "/spatikahotel.png",
      description: "Energy-efficient lighting and automation solutions for large retail spaces",
      link: "/projects/spatikahotel",
    },
    {
      id: 5,
      title: "Gujrat Architectural Jewels",
      image: "/project6.png",
      description: "Advanced lighting control and automation system implemented in a luxury hotel setting",
      link: "/projects/gujratjewels",
    },

     
     {
      id: 6,
      title: "Sobha Towers",
      image: "/Sobha Towers.jpg",
      description: "Intelligent energy management system with smart lighting and HVAC controls",
      link: "/projects/sobhatowers",
    },
  

    {
      id: 7,
      title: "Residential Building, Chennai",
      image: "/building.jpg",
      description: "Energy-efficient lighting and automation solutions for large retail spaces",
      link: "/projects/residentialbuilding",
    },
     
    {
      id: 8,
      title: "Alian Office",
      image: "/meetingroom.jpg",
      description: "Energy-efficient lighting and automation solutions for large retail spaces",
      link: "/projects/meetingroom",
     },
    
    {
      id: 9,
      title: "Yamuna Sky City",
      video: "/yamunaskycity.mp4",
      description: "Energy-efficient lighting and automation solutions for large retail spaces",
      link: "/projects/yamunaskycity",
    },
   
 {
      id: 10,
      title: "Commercial Showroom, Bangalore",
      image: "/comercialshowroom.png",
      description: "Smart home automation with integrated lighting and security systems",
      link: "/projects/comercialshowroom",
    },
      {
      id: 11,
      title: "Welcare Hospital, Kochi",
      image: "/welcare.jpg",
      description: "Energy-efficient lighting and automation solutions for large retail spaces",
      link: "/projects/welcarehospital",
     },
    {
      id: 12,
      title: "Expo City Masjid",
      image: "/expocity.jpg",
      description: "Energy-efficient lighting and automation solutions for large retail spaces",
      link: "/projects/expocitymasjid",
    },

     {
      id: 13,
      title: "Residential Complex, Bangalore",
      image: "/fourth.jpg",
      description: "Smart home automation with integrated lighting and security systems",
      link: "/projects/residentialcomplex",
    },
    {
      id: 14,
      title: "Muraqqabat",
      image: "/muraqqabat.jpg",
      description: "Energy-efficient lighting and automation solutions for large retail spaces",
      link: "/projects/muraqqabat",
    },
    {
      id: 15,
      title: "Training Institute, Dubai",
      image: "/dubaitrainginstitute.jpg",
      description: "Energy-efficient lighting and automation solutions for large retail spaces",
      link: "/projects/dubaitraininginstitute",
    },
   
      
    {
      id: 16,
      title: "Private villas",
      image: "/privatevilla.png",
      description: "Energy-efficient lighting and automation solutions for large retail spaces",
      link: "/projects/privatevilla",
    },
     
    {
      id: 17,
      title: "Aliha University, Campus",
      image: "/aliha.png",
      description: "Energy-efficient lighting and automation solutions for large retail spaces",
      link: "/projects/aliha",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section id="projects" className="pt-16 sm:pt-32 md:pt-16 pb-10 bg-neutral-950 relative overflow-hidden">
        <AnimatedBackground />

        <div className="container mx-auto px-4">
          <div className="columns-1 md:columns-2 gap-6">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={project.link}
                className="group mb-6 block rounded-xl overflow-hidden relative shadow-xl bg-neutral-900 hover:shadow-2xl transition-transform duration-300 break-inside-avoid transform hover:scale-[1.06]"
              >
                <div className="w-full overflow-hidden relative flex">
                  {project.video ? (
                    <video
                      ref={project.title === "Yamuna Sky City" ? yamunaRef : null}
                      src={project.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-[600px] sm:h-[500px] md:h-[650px] lg:h-[1000px] object-cover transition-transform duration-500"
                    />
                  ) : project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={500}
                      className="w-full h-auto object-cover transition-transform duration-500 "
                      quality={90}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : null}

                  {/* Overlay: Project title */}
                  <div className="absolute bottom-0 left-0 w-full px-6 py-5 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end pointer-events-none transition-opacity duration-500 group-hover:opacity-0">
                    <h3
                      className="text-white text-2xl font-extrabold select-none text-left"
                      style={{
                        textShadow: "0 2px 12px rgba(0,0,0,0.85), 0 0px 1px #fff",
                        letterSpacing: "0.03em",
                        WebkitTextStroke: "0.5px #222",
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
