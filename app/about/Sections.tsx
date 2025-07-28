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
      desc: "QR Pixel was founded with a passion for design and lighting.",
    },
    {
      year: "2020",
      desc: "Expanded to commercial and hospitality design across India.",
    },
    {
      year: "2022",
      desc: "Entered the Middle East market and launched LED integration solutions.",
    },
    {
      year: "2024",
      desc: "Recognized as a leader in GRMS & façade design innovation.",
    },
  ];

  return (
    <div className="relative max-w-full mx-auto px-4 sm:px-6 md:px-16 lg:px-32 py-16 md:py-24 z-20 overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="relative pl-6 md:pl-20 bg-black bg-opacity-60 backdrop-blur-lg rounded-2xl p-6 md:p-12 shadow-2xl" style={{ zIndex: 25 }}>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-16 md:mb-20 bg-gradient-to-r from-pink-500 via-blue-500 to-cyan-500 text-transparent bg-clip-text text-center tracking-wide">
          Our Journey
        </h2>

        <div className="absolute left-9 md:left-22 top-28 bottom-4 w-0.5 rounded-full" style={{
          background: "linear-gradient(to bottom, #ec4899, #3b82f6, #06b6d4)",
          boxShadow: "0 0 12px rgba(99, 102, 241, 0.7)"
        }} />

        {timeline.map((item, idx) => (
          <div key={idx} className="relative mb-20 md:mb-24 last:mb-0 flex items-start">
            <div className="absolute left-3 md:left-2 top-5 w-14 md:w-19 h-[2px] rounded" style={{
              background: "linear-gradient(to right, #ec4899, #3b82f6, #06b6d4)",
              boxShadow: "0 0 6px rgba(99, 102, 241, 0.6)"
            }} />

            <span className="absolute left-10 md:left-18 top-0 font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 text-black px-4 md:px-5 py-2 md:py-3 rounded-full text-sm md:text-lg shadow-lg select-none">
              {item.year}
            </span>

            <p className="text-gray-300 ml-32 md:ml-52 text-base md:text-lg max-w-3xl leading-relaxed tracking-wide">
              {item.desc}
            </p>
          </div>
        ))}
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


