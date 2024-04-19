"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <br/>
        <div className="flex justify-center">
        <iframe src="https://drive.google.com/file/d/1MXJYwwGTHYXwXEihu6Sh_AyaiVqKpBQV/preview" width="440" height="240" allow="autoplay"></iframe>
      </div>
      <br/>
      <p className="mb-3">
        I committed to pursuing my passion for programming, embarking on a coding bootcamp journey to maste{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        I find particular enjoyment in<span className="italic"> the problem-solving facets of programming.</span> My core stack is{" "}
        <span className="font-medium">
          React, Next.js, and Node.js 
        </span>
        . with additional proficiency in Java (Springboot). as I am highly motivated to expand my knowledge base
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games and watching movies. 
        <span className="italic"> I like to watch tutorial videos on YouTube about coding or programming</span>
        . That is my reference for being able to solve coding problems that I might face in the future.
      </p>
    </motion.section>
  );
}
