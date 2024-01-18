import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import MarryMealImg from "@/public/MarryMeal.png";
import DobuImg from "@/public/Dobu.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [

  {
    title: "Courier",
    location: "Surabaya, Indonesia",
    description:
      "I worked as a courier for 1 and a half years to deliver packages to one of the large expedition companies in Indonesia",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I decided to switch careers in 2023 by taking courses and programs from Lithan, where I can create several applications while I am undergoing bootcamp training.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Marry Meal",
    description:
      "When I joined the bootcamp training program, I created a meal on wheel program called Marry Meal",
    tags: ["React", "Next.js", "Spring Boot"],
    imageUrl: MarryMealImg,
  },
  {
    title: "Dobu Martial Art",
    description:
      "Dobu Martial Art is a website to manage Registration, Training, and competiotion. I was the front-end developer. It has features like filtering.",
    tags: ["HTML", "Javascript", "CSS"],
    imageUrl: DobuImg,
  },
  /* {
    title: "Dobu Martial Art",
    description:
      "Dobu Martial Art is a website to manage Registration, Training, and competiotion. I was the front-end developer. It has features like filtering.",
    tags: ["HTML", "Javascript", "CSS"],
    imageUrl: DobuImg,
  }, */
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Framer Motion",
  "Spring Boot"
] as const;
