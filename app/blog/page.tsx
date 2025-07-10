"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedBackground from "@/components/AnimatedBackground";

const blogPosts = [
  {
    slug: "smartlighting",
    title: "How Smart Lighting Transforms Modern Spaces",
    date: "2025-07-01",
    excerpt:
      "Smart lighting blends technology, comfort, and design into one seamless system. It adapts to your lifestyle—automatically adjusting brightness, color temperature, and scheduling. Discover how it transforms homes, offices, and commercial spaces.",
    image: "/smart-lighting.png",
  },
  {
    slug: "grms",
    title: "GRMS: The Future of Hotel Automation",
    date: "2025-06-20",
    excerpt:
      "Guest Room Management Systems are revolutionizing hospitality. GRMS centralizes lighting, HVAC, curtains, and access control for a luxurious guest experience. Learn how it improves efficiency while enhancing guest satisfaction.",
    image: "/design.png",
  },
  {
    slug: "automation",
    title: "Personalized Automation for Residential Projects",
    date: "2025-06-10",
    excerpt:
      "Smart homes use tailored automation to simplify daily routines—from lighting and climate to security and entertainment. These systems adapt to your lifestyle for comfort, convenience, and peace of mind.",
    image: "/personalized.png",
  },
];

export default function BlogPage() {
  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
      <AnimatedBackground />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Explore Insights & Ideas
        </h1>

        <div className="grid grid-cols-1 gap-12">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-3xl overflow-hidden shadow-xl transition hover:shadow-2xl group"
            >
              {/* IMAGE */}
              <div className="relative h-52 sm:h-64 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>

              {/* TEXT */}
              <div className="p-6 sm:p-8 flex flex-col space-y-4">
                <p className="text-sm text-gray-400">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                <h2 className="text-2xl sm:text-3xl font-semibold text-white group-hover:text-cyan-400 transition">
                  {post.title}
                </h2>
                <p className="text-gray-300 text-justify text-sm sm:text-base">
                  {post.excerpt}
                </p>

                {/* LINK */}
                <div className="pt-4">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-block text-yellow-300 hover:text-yellow-400 font-medium text-sm border border-yellow-400 px-4 py-2 rounded-full transition"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
