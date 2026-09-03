"use client";

import React, { use } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogs";
import { ArrowLeft, Calendar, Clock, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { MetalButton } from "@/components/ui/metal-button";

export default function BlogPostDetail({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  // Support both Promise dynamic params (Next 15) and sync params (Next 14)
  const resolvedParams = params instanceof Promise ? use(params) : params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return (
      <>
        <main className="min-h-screen pt-32 pb-24 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-extrabold text-[#111111] mb-4">Post Not Found</h1>
          <p className="text-[#333333] mb-8">
            The article you are looking for does not exist or has been moved.
          </p>
          <MetalButton href="/blog" variant="primary">
            Back to Blog Hub
          </MetalButton>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <main className="min-h-screen pt-32 pb-24">
        <article className="container max-w-4xl mx-auto px-6">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-[#333333] mb-8 select-none">
            <Link href="/" className="hover:text-[#111111] transition-colors">
              Home
            </Link>
            <ChevronRight size={10} />
            <Link href="/blog" className="hover:text-[#111111] transition-colors">
              Blog
            </Link>
            <ChevronRight size={10} />
            <span className="text-[#333333] truncate max-w-[200px] sm:max-w-xs">
              {post.title}
            </span>
          </div>

          {/* Back button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#333333] hover:text-[#111111] transition-colors mb-6"
          >
            <ArrowLeft size={12} /> Back to Insights Hub
          </Link>

          {/* Title Header */}
          <header className="mb-10 space-y-6">
            <span className="inline-block text-[0.65rem] font-bold uppercase tracking-wider text-white bg-[#111111] py-1 px-3.5 rounded-full">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-y border-[#8E8E8E] py-4 mt-6">
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#8E8E8E]"
                />
                <div className="text-left">
                  <p className="text-sm font-semibold text-[#111111]">
                    {post.author.name}
                  </p>
                  <p className="text-xs text-[#333333]">{post.author.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-[#333333]">
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {post.readTime}
                </span>
              </div>
            </div>
          </header>

          {/* Hero Image */}
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl border border-[#8E8E8E] bg-[#E5E5E5] mb-12 shadow-xl">
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Content Block */}
          <div
            className="prose max-w-none text-[#222222] leading-relaxed space-y-6 text-[1.05rem]"
            style={{ fontFamily: "inherit" }}
          >
            {post.content.split("\n\n").map((paragraph, index) => {
              const text = paragraph.trim();
              if (!text) return null;

              // Simple custom parser for markdown headers
              if (text.startsWith("### ")) {
                return (
                  <h3
                    key={index}
                    className="text-xl md:text-2xl font-bold text-[#111111] pt-6 pb-2"
                  >
                    {text.replace("### ", "")}
                  </h3>
                );
              }

              // Simple parser for lists
              if (text.startsWith("- ")) {
                return (
                  <ul key={index} className="list-disc pl-6 space-y-2 py-2">
                    {text.split("\n").map((li, liIdx) => (
                      <li key={liIdx}>
                        {li.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "$1")}
                      </li>
                    ))}
                  </ul>
                );
              }

              // Normal paragraph with italic tagline support
              const isItalic = text.startsWith("*") && text.endsWith("*");
              return (
                <p
                  key={index}
                  style={isItalic ? { fontStyle: "italic", color: "#333333" } : {}}
                >
                  {isItalic ? text.replace(/\*/g, "") : text}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 border-t border-[#8E8E8E] pt-8 mt-12">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-[#333333] bg-[#E5E5E5] border border-[#8E8E8E]/65 py-1 px-3.5 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
