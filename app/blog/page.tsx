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
      "Smart lighting blends technology, comfort, and design into one seamless system. It adapts to your lifestyle—automatically adjusting brightness, color temperature, and scheduling.",
    image: "/smart-lighting1.png",
  },
  {
    slug: "grms",
    title: "GRMS: The Future of Hotel Automation",
    date: "2025-06-20",
    excerpt:
      "Guest Room Management Systems are revolutionizing hospitality. GRMS centralizes lighting, HVAC, curtains, and access control for a luxurious guest experience.",
    image: "/grms.png",
  },
  {
    slug: "automation",
    title: "Personalized Automation for Residential Projects",
    date: "2025-06-10",
    excerpt:
      "Smart homes use tailored automation to simplify daily routines—from lighting and climate to security and entertainment. These systems adapt to your lifestyle.",
    image: "/automation.png",
  },
];

export default function BlogPage() {
  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
      <AnimatedBackground />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10 bg-white text-transparent bg-clip-text tracking-tight drop-shadow-sm">
          Explore Insights & Ideas
        </h1>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.015] transition-transform duration-300 ease-in-out flex flex-col"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>

              <div className="p-6 flex flex-col flex-1 space-y-3 text-left">
                <p className="text-sm text-gray-400">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                <h2 className="text-xl font-semibold text-white">{post.title}</h2>
                <p className="text-gray-300 text-sm leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <div className="pt-2">
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

        {/* Submit Blog Idea CTA */}
        <div className="relative z-20 mb-16 text-center bg-[#edd8d8] py-10 px-6 rounded-xl shadow-xl max-w-3xl mx-auto top-7">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4">
            Have a blog idea you&apos;d like to share?
          </h2>
          <p className="text-gray-700 mb-6">
            We&apos;re always looking for fresh perspectives and topics. Drop us a line — and if we love it, we’ll feature your blog on our website and social media! 🚀
          </p>

          <Link
            href="/contact?subject=Blog%20Idea"
            className="inline-block font-bold text-black px-6 py-3 rounded-md shadow-md transition-transform duration-300 hover:scale-117"
            style={{
              background: "linear-gradient(to right, #fff200, #ffdd00)",
              border: "2px solid",
              borderColor: "#FFD700",
            }}
          >
            Submit Blog Idea
          </Link>
        </div>
      </div>
    </section>
  );
}
