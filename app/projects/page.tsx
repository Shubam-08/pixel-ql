"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ScrollButton } from "@/components/ui/scroll-button";
import { motion } from "framer-motion";

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
      title: "Welcare Hospital, Kochi",
      image: "/welcare.jpg",
      description:
        "Energy-efficient lighting and automation solutions for large retail spaces",
      link: "/projects/welcarehospital",
    },
    {
      id: 2,
      title: "Gujrat Architectural Jewels",
      image: "/project6.png",
      description:
        "Advanced lighting control and automation system implemented in a luxury hotel setting",
      link: "/projects/gujratjewels",
    },
    {
      id: 3,
      title: "Italian Heritage",
      image: "/project5.png",
      description:
        "Smart home automation with integrated lighting and security systems",
      link: "/projects/italianheritage",
    },
    {
      id: 5,
      title: "Luqta(private place)",
      image: "/luqta2.jpg",
      description:
        "Energy-efficient lighting and automation solutions for large retail spaces",
      link: "/projects/luqta",
    },
    
    {
      id: 6,
      title: "Sobha Towers",
      image: "/Sobha Towers.jpg",
      description:
      "Intelligent energy management system with smart lighting and HVAC controls",
      link: "/projects/sobhatowers",
    },
    {
      id: 7,
      title: "Residential Building, Chennai",
      image: "/building.jpg",
      description:
      "Energy-efficient lighting and automation solutions for large retail spaces",
      link: "/projects/residentialbuilding",
    },
    {
      id: 4,
      title: "Yamuna Sky City",
      video: "/yamunaskycity.mp4",
      description:
        "Energy-efficient lighting and automation solutions for large retail spaces",
      link: "/projects/yamunaskycity",
    },
    

    {
      id: 8,
      title: "Commercial Showroom, Bangalore",
      image: "/comercialshowroom.png",
      description:
        "Smart home automation with integrated lighting and security systems",
      link: "/projects/comercialshowroom",
    },

    {
     id: 10,
     title: "Spatika Hotel, Manipal",
     image: "/spatikahotel.png",
     description:
       "Energy-efficient lighting and automation solutions for large retail spaces",
     link: "/projects/spatikahotel",
   },
   
     {
      id: 9,
      title: "Fashion Showroom, Bangalore",
      image: "/fashion3.png",
      description:
        "Intelligent energy management system with smart lighting and HVAC controls",
      link: "/projects/fashionshowroom",
    },
    
   
    {
      id: 11,
      title: "Expo City Masjid",
      image: "/expocity.jpg",
      description:
        "Energy-efficient lighting and automation solutions for large retail spaces",
      link: "/projects/expocitymasjid",
    },
    {
      id: 12,
      title: "Residential Complex, Bangalore",
      image: "/fourth.jpg",
      description:
        "Smart home automation with integrated lighting and security systems",
      link: "/projects/residentialcomplex",
    },
    {
      id: 13,
      title: "Muraqqabat",
      image: "/muraqqabat.jpg",
      description:
        "Energy-efficient lighting and automation solutions for large retail spaces",
      link: "/projects/muraqqabat",
    },
    {
      id: 14,
      title: "Training Institute, Dubai",
      image: "/dubaitrainginstitute.jpg",
      description:
        "Energy-efficient lighting and automation solutions for large retail spaces",
      link: "/projects/dubaitraininginstitute",
    },
    {
      id: 15,
      title: "Private villas",
      image: "/privatevilla.png",
      description:
        "Energy-efficient lighting and automation solutions for large retail spaces",
      link: "/projects/privatevilla",
    },
      
    {
      id: 16,
      title: "Alian Office",
      image: "/meetinghome.jpg",
      description:
        "Energy-efficient lighting and automation solutions for large retail spaces",
      link: "/projects/meetingroom",
    },

    {
      id: 17,
      title: "Aliha University, Campus",
      image: "/aliha.png",
      description:
        "Energy-efficient lighting and automation solutions for large retail spaces",
      link: "/projects/aliha",
    },
  ];

  return (
    <main className="min-h-screen text-white">
     
      {/* Animated Intro Section */}
<motion.section
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="w-full relative overflow-hidden py-14 px-6 bg-black text-white text-center"
>
  {/* Black blobs */}
  <motion.div
    animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
    transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
    className="absolute top-[-120px] left-[25%] w-96 h-96 bg-black rounded-full blur-3xl opacity-40 pointer-events-none z-0"
  />
  <motion.div
    animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
    transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
    className="absolute bottom-[-100px] right-[20%] w-96 h-96 bg-black rounded-full blur-3xl opacity-40 pointer-events-none z-0"
  />

  {/* Heading with staggered character animation */}
  <motion.h2
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }}
  className="text-4xl md:text-4xl font-extrabold relative z-10 text-white"
>
  {"Explore Our Signature Projects".split(" ").map((word, index) => (
    <motion.span
      key={index}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className="inline-block mr-2"
    >
      {word}
    </motion.span>
  ))}
</motion.h2>


  {/* Description fade-in */}
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.3 }}
    viewport={{ once: true }}
    className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto relative z-10"
  >
    Discover how we combine lighting, design, and automation to transform
    spaces into modern masterpieces.
  </motion.p>

  {/* Scroll cue animation */}
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [0, 8, 0] }}
    transition={{ repeat: Infinity, duration: 1.8 }}
    className="mt-14 text-sm text-gray-400 relative z-10"
  >
    ↓ Scroll to Explore
  </motion.div>
</motion.section>



      {/* Project Listing */}
      <section
        id="projects"
        className="pb-10 relative overflow-hidden bg-[rgb(11,4,0)] text-white"
      >
        <div className="container mx-auto px-9 py-10">
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
                      ref={
                        project.title === "Yamuna Sky City"
                          ? yamunaRef
                          : null
                      }
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
                      className="w-full h-auto object-cover transition-transform duration-500"
                      quality={90}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : null}

                  <div className="absolute bottom-0 left-0 w-full px-6 py-5 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end pointer-events-none transition-opacity duration-500 group-hover:opacity-0">
                    <h3
                      className="text-white text-xl  select-none text-left"
                      style={{
                        textShadow:
                          "0 2px 12px rgba(0,0,0,0.85), 0 0px 1px #fff",
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
