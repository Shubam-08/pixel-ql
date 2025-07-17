"use client";

import React from "react";
import Image from "next/image";

// === TEAM DATA ===
const team = [
  {
    name: "Revant Sharma",
    role: "Founder & CEO",
    linkedin: "https://www.linkedin.com/in/revant-sharma-931a22111",
    image: "/revant-modified.jpg",
    bio: "Revant leads innovation at QR Pixel, blending technology with impactful lighting design.",
  },
  {
    name: "Philipose Philip.",
    role: "Director",
    linkedin: "https://www.linkedin.com/in/philipose-p-9443595",
    image: "/philipose img-modified.jpg",
    bio: "Philip brings strategic vision and 25+ years of industry experience to QR Pixel.",
  },
  {
    name: "Yash Raj Kaushik",
    role: "Marketing & Procurement Manager",
    linkedin: "https://www.linkedin.com/in/yashrajk15",
    image: "/yash-modified.jpg",
    bio: "Yash crafts compelling campaigns and builds lasting client relationships.",
  },
  {
    name: "Jnanasagar Kamath",
    role: "Lighting Design Head",
    linkedin: "https://www.linkedin.com/in/jskamath",
    image: "/jnanasagar-modified.jpg",
    bio: "Jnanasagar creates award-winning lighting designs with immersive aesthetics.",
  },
  {
    name: "Illayaraja P",
    role: "Senior R&D - India",
    linkedin: "https://www.linkedin.com/in/illayaraja-p-95b087187",
    image: "/illayaraja-img -modified.jpg",
    bio: "Illayaraja drives innovation through research in smart lighting and automation.",
  },
  {
    name: "Shubam Gupta",
    role: "Jr. R&D - India",
    linkedin: "https://www.linkedin.com/in/shubamgupta02",
    image: "/shubamqr.jpg",
    bio: "Shubam ensures seamless digital integration of lighting control systems.",
  },
  {
    name: "Atharv Sudan",
    role: "Regional Sales UAE",
    linkedin: "https://www.linkedin.com/in",
    image: "/atharv.png",
    bio: "Atharv spearheads sales initiatives, fostering growth and client relationships in the UAE region.",
  },
  {
    name: "Vikas Singh",
    role: "Sr Lighting and Controls Designer UAE",
    linkedin: "https://www.linkedin.com/in",
    image: "/vikas.png",
    bio: "Vikas designs sophisticated lighting and control systems for UAE projects.",
  },
  {
    name: "Prabhu .N",
    role: "Technical Head",
    linkedin: "https://www.linkedin.com/in/prabhu-n-33945622",
    image: "/prabhu.png",
    bio: "Prabhu oversees technical operations, ensuring precision and reliability.",
  },
  {
    name: "Chandrashekhar Narsaiah",
    role: "Accounts",
    linkedin: "https://www.linkedin.com/in",
    image: "/chandrashekhar.png",
    bio: "Chandrashekhar manages financial aspects, ensuring fiscal health.",
  },
  {
    name: "Gopal Manjunatha",
    role: "Commissioning Engineer",
    linkedin: "https://www.linkedin.com/in",
    image: "/gopal.png",
    bio: "Gopal ensures flawless installation and calibration of lighting systems.",
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
    <div
      className="relative max-w-full mx-auto px-4 sm:px-6 md:px-16 lg:px-32 py-16 md:py-24 z-20 overflow-x-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div
        className="relative pl-6 md:pl-20 bg-black bg-opacity-60 backdrop-blur-lg rounded-2xl p-6 md:p-12 shadow-2xl"
        style={{ zIndex: 25 }}
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold mb-16 md:mb-20 bg-gradient-to-r from-pink-500 via-blue-500 to-cyan-500 text-transparent bg-clip-text text-center tracking-wide">
          Our Journey
        </h2>

        {/* Vertical line */}
        <div
          className="absolute left-9 md:left-22 top-28 bottom-4 w-0.5 rounded-full"
          style={{
            background: "linear-gradient(to bottom, #ec4899, #3b82f6, #06b6d4)",
            boxShadow: "0 0 12px rgba(99, 102, 241, 0.7)",
          }}
        />

        {/* Timeline items */}
        {timeline.map((item, idx) => (
          <div
            key={idx}
            className="relative mb-20 md:mb-24 last:mb-0 flex items-start"
          >
            {/* Connector line */}
            <div
              className="absolute left-3 md:left-2 top-5 w-14 md:w-19 h-[2px] rounded"
              style={{
                background:
                  "linear-gradient(to right, #ec4899, #3b82f6, #06b6d4)",
                boxShadow: "0 0 6px rgba(99, 102, 241, 0.6)",
              }}
            />

            {/* Year badge */}
            <span className="absolute left-10 md:left-18 top-0 font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 text-black px-4 md:px-5 py-2 md:py-3 rounded-full text-sm md:text-lg shadow-lg select-none">
              {item.year}
            </span>

            {/* Description */}
            <p className="text-gray-300 ml-32 md:ml-52 text-base md:text-lg max-w-3xl leading-relaxed tracking-wide">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};


export const TeamSection = () => (
  <section className="w-full px-6 py-16 md:py-24 lg:py-28 bg-black text-white">
    <div className="max-w-screen-xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-tight text-white">
        The Minds Behind QR Pixel
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {team.map((member, index) => (
          <div
            key={index}
            className="flex flex-col justify-between p-8 bg-white/5 border border-white/10 rounded-3xl shadow-2xl hover:scale-[1.03] transition-transform duration-300"
          >
            {/* TOP */}
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
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-sm text-gray-300 mb-2">{member.role}</p>

              <p className="text-sm text-gray-400 leading-relaxed min-h-[70px]">
                {member.bio}
              </p>
            </div>

            {/* CONNECT BUTTON */}
            <div className="mt-6 text-center">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm px-4 py-1.5 rounded-full border border-white/20 text-gray-300 hover:text-white hover:border-white transition-all duration-200"
              >
                <span className="font-semibold">Connect</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);





export const ServicesSection = () => {
  const services = [
    { icon: '💡', title: 'Smart Lighting', desc: 'Energy-efficient lighting control systems for ambiance and sustainability.', image: '/smart-lighting.png' },
    { icon: '🤖', title: 'Automation', desc: 'Control lighting, HVAC, and more for comfort and control.', image: '/automation.jpg' },
    { icon: '🎨', title: 'Lighting Design', desc: 'Elegant lighting schemes that blend function and beauty.', image: '/design.png' },
    { icon: '✨', title: 'Decorative Lighting', desc: 'Custom installations that make your spaces shine.', image: '/decorative.png' },
    { icon: '🏠', title: 'Affordable Plans', desc: 'Solutions for every budget without compromising style.', image: '/personalized.png' },
    { icon: '🌱', title: 'Energy Efficiency', desc: 'Modern tech to reduce power usage across systems.', image: '/efficiency.png' },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-blue-400 text-center">Our Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="relative rounded-xl overflow-hidden border border-white/10 shadow-md group">
            <Image
              src={service.image}
              alt={service.title}
              width={400}
              height={240}
              className="w-full h-56 object-cover opacity-80 group-hover:opacity-60"
            />
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/80 transition duration-300 p-4 flex flex-col justify-end">
              <span className="text-2xl">{service.icon}</span>
              <h3 className="text-white text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-300 text-sm">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
