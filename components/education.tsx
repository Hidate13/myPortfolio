"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { educationData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import Image from 'next/image';

export default function Education() {
  const { ref } = useSectionInView("Education");
  const { theme } = useTheme();

  function processDescriptionLine(line: string) {
    // Split the line into segments based on "**"
    const segments = line.split(/(\*\*[^*]+\*\*)/g).map((seg, index) => {
      // Check if the segment is meant to be bold (wrapped in **)
      if (seg.startsWith('**') && seg.endsWith('**')) {
        // Remove the ** and return a <strong> element
        return <strong key={index}>{seg.slice(2, -2)}</strong>;
      }
      // Return the segment as is for non-bold text
      return seg;
    });
  
    return <p>{segments}</p>;
  }
  return (
    <section id="education" ref={ref} className="scroll-mt-28 mb-28 w-9/12">
      <SectionHeading>My Education</SectionHeading>
      <VerticalTimeline lineColor="">
        {educationData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
               {item.logo && <Image  src={item.logo} alt={item.title}  width={277} height={45}/>}
              <p className="font-normal !mt-0">{item.location}</p>
              <ul className="!mt-1 !font-normal text-gray-700 dark:text-white/75 list-disc pl-5">
                {item.description.split('\n').map((line, index) => (
                  <li key={index}>{processDescriptionLine(line)}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
