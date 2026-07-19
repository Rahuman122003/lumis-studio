"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParallaxBackground from "@/components/ParallaxBackground";
import { blogPosts } from "@/data/blogs";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { motion } from "framer-motion";

export default function BlogIndex() {
  return (
    <>
      <ParallaxBackground />
      <Navbar />

      <main className="min-h-screen pt-32 pb-24">
        {/* Header Block */}
        <section className="container max-w-6xl mx-auto px-6 mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <span className="text-xs font-semibold tracking-wide uppercase text-[#10b981] bg-[#10b981]/10 py-1.5 px-4 rounded-full border border-[#10b981]/20">
              Our Insights
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-none mt-4">
              The Probiz Intelligence Hub
            </h1>
            <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Explore the latest in smart building automation, IoT engineering, sustainability practices, and AI-driven energy management.
            </p>
          </motion.div>
        </section>

        {/* Blog Posts Grid */}
        <section className="container max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-neutral-900 bg-[#0c0c0c]/60 overflow-hidden hover:border-neutral-800/80 transition-all duration-300 shadow-xl"
              >
                <div>
                  {/* Blog Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900 border-b border-neutral-900">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute top-4 left-4 z-10 text-[0.65rem] font-bold uppercase tracking-wider text-black bg-[#10b981] py-1 px-3 rounded-full">
                      {post.category}
                    </span>
                  </div>

                  {/* Blog Meta & Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-neutral-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-lg font-semibold text-white group-hover:text-[#10b981] transition-colors duration-200 line-clamp-2 leading-snug mb-3">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-neutral-400 line-clamp-3 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Bottom metadata / Author */}
                <div className="p-6 pt-0 flex items-center justify-between border-t border-neutral-900/60 mt-auto">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-7 h-7 rounded-full object-cover border border-neutral-800"
                    />
                    <div className="text-left">
                      <p className="text-[0.7rem] font-medium text-neutral-300">
                        {post.author.name}
                      </p>
                      <p className="text-[0.6rem] text-neutral-500">
                        {post.author.role}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-neutral-800 text-neutral-400 group-hover:text-black group-hover:bg-[#10b981] group-hover:border-[#10b981] transition-all duration-300"
                  >
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
