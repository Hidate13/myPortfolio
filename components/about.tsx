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
      <br />
      <div className="flex justify-center">
        <iframe
          src="https://drive.google.com/file/d/1MXJYwwGTHYXwXEihu6Sh_AyaiVqKpBQV/preview"
          width="440"
          height="240"
          allow="autoplay"
        ></iframe>
      </div>
      <br />
      <div className=" px-5 text-left grid grid-cols-2 justify-center mb-4">
        <div>
          <span className="icon">✔</span> Birthday: June 13, 1992
        </div>
        <div>
          <span className="icon">✔</span> Age: 32
        </div>
        <div>
          <span className="icon">✔</span> Languages: English / Indonesia
        </div>
        <div>
          <span className="icon">✔</span> Degree: BDSE-Software Engineering
        </div>
        <div>
          <span className="icon">✔</span> Email: wahyu.hidate.hidayat@gmail.com
        </div>
        <div>
          <span className="icon">✔</span> City: Surabaya City, INDONESIA
        </div>
      </div>
      <hr/>
      <br/>
      <div className="flex justify-between text-justify">
        <p className="mb-3">
          I committed to pursuing my passion for programming, embarking on a
          coding bootcamp journey to maste{" "}
          <span className="font-medium">full-stack web development</span>. I find
          particular enjoyment in
          <span className="italic">
            {" "}
            the problem-solving facets of programming.
          </span>{" "}
          My primary stack includes{" "}
          <span className="font-medium">React, Next.js, and Node.js</span>. with
          additional proficiency in Java (Springboot). as I am highly motivated to
          expand my knowledge base
        </p>
      </div>
      <p>
        <span className="italic">During my leisure time away from coding, </span>
                      I find enjoyment in playing video games and watching movies.
        <span className="italic">
          {" "}
          Additionally, I frequently engage with tutorial videos on YouTube, 
          particularly those related to coding and programming. 
        </span>
        These tutorials serve as invaluable references, 
        aiding me in resolving potential coding challenges I may encounter in the future.
      </p>

    </motion.section>
  );
}
