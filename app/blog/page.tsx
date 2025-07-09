import React from "react";
import Image from "next/image";

const blogPosts = [
  {
    title: "How Smart Lighting Transforms Modern Spaces",
    date: "2025-07-01",
    excerpt:
      "Discover the latest trends in smart lighting and how it enhances comfort, efficiency, and aesthetics in contemporary environments. Smart lighting is revolutionizing the way we experience modern spaces by blending technology, comfort, and design into one seamless system. Unlike traditional lighting, smart lighting adapts to your lifestyle—automatically adjusting brightness, color temperature, and even scheduling based on your needs or the time of day. It enhances the aesthetics of homes, offices, and commercial spaces while promoting energy efficiency through motion sensors, timers, and daylight harvesting. Integrated with voice assistants or smartphones, it offers effortless control and personalization. In residential settings, it creates cozy, mood-enhancing environments; in workplaces, it boosts productivity by mimicking natural light patterns. Beyond convenience, smart lighting also improves safety and security with motion-activated features and remote access. Whether you're illuminating a cozy living room or designing an energy-efficient office, smart lighting transforms ordinary spaces into responsive, dynamic, and beautifully lit environments. It’s not just about turning lights on and off—it’s about reimagining how lighting can enhance our daily lives.",
    image: "/smart-lighting.png",
    link: "#",
  },
  {
    title: "GRMS: The Future of Hotel Automation",
    date: "2025-06-20",
    excerpt:
      "Guest Room Management Systems are revolutionizing hospitality. Learn how hotels are boosting guest satisfaction and operational efficiency. GRMS integrates lighting, HVAC, curtains, and access control into one smart interface. Guests enjoy personalized comfort while hotels improve energy savings and service efficiency with real-time data. It's the future of smart, sustainable, and luxurious hospitality.",
    image: "/design.png",
    link: "#",
  },
  {
    title: "Personalized Automation for Residential Projects",
    date: "2025-06-10",
    excerpt:
      "Explore how tailored automation solutions are creating smarter, safer, and more convenient homes. Personalized automation adapts to your lifestyle—automating lighting, climate, entertainment, and security based on your habits. These solutions offer remote access, energy savings, and peace of mind, turning any house into a truly smart home.",
    image: "/personalized.png",
    link: "#",
  },
];

import AnimatedBackground from "@/components/AnimatedBackground";

export default function BlogPage() {
  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
      <AnimatedBackground />
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-8 sm:mb-12">
          Our Blog
        </h1>
        {/* One blog per line */}
        <div className="grid grid-cols-1 gap-6 sm:gap-10">
          {blogPosts.map((post, idx) => (
            <article
              key={idx}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="relative h-40 sm:h-56 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col h-full">
                <h2 className="text-2xl font-semibold text-white mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm mb-4">{post.date}</p>
                <p className="text-gray-300 flex-1 text-justify">
                  {post.excerpt}
                </p>
                <a
                  href={post.link}
                  className="mt-6 inline-block text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}