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
        I decided to pursue my passion for programming. 
        I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. My core stack is{" "}
        <span className="font-medium">
          React, Next.js, and Node.js 
        </span>
        . I am also familiar with Java (Springboot). I am always looking to
        learn new things.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games and watching movies. 
        <span className="italic">I like to watch tutorial videos on YouTube about coding or programming</span>
        . That is my reference for being able to solve coding problems that I might face in the future.
      </p>
    </motion.section>
  );
}
