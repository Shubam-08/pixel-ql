"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaArrowUp } from "react-icons/fa";

// === BackToTopButton Component ===
const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-50 bg-white text-black p-3 rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition duration-300"
      aria-label="Back to Top"
    >
      <FaArrowUp />
    </button>
  );
};

// === TEAM DATA ===
// === TEAM DATA ===
const team = [
  {
    name: "Revant Sharma",
    role: "Founder & CEO",
    linkedin: "https://www.linkedin.com/in/revant-sharma-931a22111",
    image: "/revant-modified.jpg",
  },
  {
    name: "Philipose Philip.",
    role: "Director",
    linkedin: "https://www.linkedin.com/in/philipose-p-9443595",
    image: "/philipose img-modified.jpg",
  },
  {
    name: "Yash Raj Kaushik",
    role: "Marketing & Procurement Manager",
    linkedin: "https://www.linkedin.com/in/yashrajk15",
    image: "/yash-modified.jpg",
  },
  {
    name: "Jnanasagar Kamath",
    role: "Lighting Design Head",
    linkedin: "https://www.linkedin.com/in/jskamath",
    image: "/jnanasagar-modified.jpg",
  },
  {
    name: "Illayaraja P",
    role: "Senior R&D - India",
    linkedin: "https://www.linkedin.com/in/illayaraja-p-95b087187",
    image: "/illayaraja-img -modified.jpg",
  },
  {
    name: "Shubam Gupta",
    role: "Jr. R&D - India",
    linkedin: "https://www.linkedin.com/in/shubamgupta02",
    image: "/shubamqr.jpg",
  },
  {
    name: "Atharv Sudan",
    role: "Regional Sales UAE",
    linkedin: "https://www.linkedin.com/in",
    image: "/atharv.png",
  },
  {
    name: "Vikas Singh",
    role: "Sr Lighting and Controls Designer UAE",
    linkedin: "https://www.linkedin.com/in",
    image: "/vikas.png",
  },
  {
    name: "Prabhu .N",
    role: "Technical Head",
    linkedin: "https://www.linkedin.com/in/prabhu-n-33945622",
    image: "/prabhu.png",
  },
  {
    name: "Chandrashekhar Narsaiah",
    role: "Accounts",
    linkedin: "https://www.linkedin.com/in",
    image: "/chandrashekhar.png",
  },
  {
    name: "Gopal Manjunatha",
    role: "Commissioning Engineer",
    linkedin: "https://www.linkedin.com/in",
    image: "/gopal.png",
  },
];


// === COMPONENTS ===
export const JourneySection = () => {
  const timeline = [
  {
    year: "2018",
    title: "Foundation",
    desc: "QR Pixel began its journey with a bold vision — to transform the future of architectural lighting and smart automation. Built on creativity, precision, and a passion for design, the company set out to reimagine how spaces are illuminated and experienced.",
    icon: "✨",
  },
  {
    year: "2020",
    title: "Expansion",
    desc: "Within just two years, QR Pixel expanded its presence across India. By delivering high-impact lighting solutions to commercial, hospitality, and residential projects, the brand became known for merging aesthetics with intelligence and efficiency.",
    icon: "🚀",
  },
  {
    year: "2022",
    title: "Global Reach",
    desc: "QR Pixel entered the international stage by launching operations in the UAE and the Middle East. With a focus on advanced LED integration and customized automation, our solutions began enhancing world-class developments across Dubai and beyond.",
    icon: "🌍",
  },
  {
    year: "2024",
    title: "Innovation Leader",
    desc: "QR Pixel earned its place as a pioneer in GRMS (Guest Room Management Systems), façade control, and smart automation. By combining design innovation with cutting-edge technology, we continue to set new benchmarks in the world of architectural lighting.",
    icon: "🏆",
  },
];


  return (
    <div className="relative w-full py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-white-400 mb-4 tracking-wider uppercase">
            Our Story
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Journey of <span className="bg-gradient-to-r from-cyan-700 to-yellow-500 text-transparent bg-clip-text">QR Pixel</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-yellow-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
       
          
          {/* Timeline items */}
          <div className="space-y-16 md:space-y-24">
            {timeline.map((item, idx) => (
              <div 
                key={idx}
                className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Year Badge - Visible on all screens */}
                <div className="relative z-10 w-full md:w-1/2 px-4 md:px-8 mb-6 md:mb-0">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-cyan-900 to-navy-700 shadow-lg shadow-cyan-500/20`}>
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-shadow-gray-600">{item.title}</h3>
                  <p className="mt-2 text-gray-400">{item.year}</p>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 px-4 md:px-8">
                  <div className="relative bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-xl hover:bg-white/10 transition-all duration-300">
                    <div className="absolute -top-3 left-6 w-6 h-6 transform rotate-45 bg-white/5 border-l border-t border-white/10"></div>
                    <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Animated elements */}
          <div className="absolute -top-20 -right-20 w-120 h-120 bg-cyan-500/10 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
          <div className="absolute -bottom-20 -left-20 w-222 h-222 bg-blue-500/10 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>
      </div>
      <BackToTopButton />
    </div>
  );
};

export const TeamSection = () => (
  <section className="w-full px-6 py-16 md:py-24 lg:py-0 -mt-21 text-white">
    <div className="max-w-screen-xl mx-auto">
      <h3 className="text-4xl md:text-5xl text-center mb-16 tracking-tight text-white">
        The Minds Behind QR Pixel
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {team.map((member, index) => (
          <div key={index} className="flex flex-col justify-between p-8 bg-white/5 border border-white/10 rounded-3xl shadow-2xl hover:scale-[1.03] transition-transform duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="w-28 h-28 rounded-full overflow-hidden border border-white/20 mb-5 hover:scale-105 transition-transform duration-300">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={112}
                  height={112}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-0">{member.name}</h3>
              <p className="text-sm text-gray-300 mb-0">{member.role}</p>
             
            </div>

            <div className="mt-6 text-center">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                className="inline-block text-sm px-4 py-1.5 rounded-full border border-white/20 text-gray-300 hover:text-white hover:border-white transition-all duration-200">
                <span className="font-semibold">Connect</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>

    <BackToTopButton />
  </section>
);


export const ServicesSection = () => {
  const services = [
    {
      icon: '💡',
      title: 'Lighting Design',
      desc: 'We craft lighting solutions that enhance spatial experience, optimize energy use, and elevate ambiance — blending form with function for every environment.',
      image: '/smart-lighting.png',
    },
    {
      icon: '🤖',
      title: 'Intelligent Automation',
      desc: 'From lighting to climate control, we integrate intelligent systems that adapt to your lifestyle — offering comfort, efficiency, and complete control at your fingertips.',
      image: '/automation.jpg',
    },
    {
      icon: '🎨',
      title: 'Digital Signage',
      desc: 'Create immersive brand moments with high-impact digital signage, designed for clarity, aesthetics, and seamless integration into any architectural space.',
      image: '/design.png',
    },
    {
      icon: '✨',
      title: 'Customize Decorative Lighting',
      desc: 'We design and install bespoke decorative lighting that transforms ordinary spaces into extraordinary experiences — tailored to match your unique style and story.',
      image: '/decorative.png',
    },
  ];

  return (
    <div className="px-4 sm:px-6 py-16 text-white bg-black rounded-3xl">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-white">
        How we can help you?
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden border border-white/10 shadow-md group"
          >
            {/* Service Image */}
            <Image
              src={service.image}
              alt={service.title}
              width={400}
              height={240}
              className="w-full h-56 object-cover transition-opacity duration-300 opacity-60 group-hover:opacity-40"
            />

            {/* Always Visible on Mobile, Hover on Desktop */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4
              bg-black/60 sm:bg-black/50
              opacity-100 sm:opacity-0 sm:group-hover:opacity-100
              transition-opacity duration-300"
            >
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-200">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <BackToTopButton />
    </div>
  );
};


