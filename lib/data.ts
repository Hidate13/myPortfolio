import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import MarryMealImg from "@/public/MarryMeal.png";
import DobuImg from "@/public/Dobu.png";
import HTML from "@/public/icon/html.png";
import Aceadora from "@/public/Aceadora.png";
import Manzanaque from "@/public/Manzanaque.png";
import CSS from "@/public/icon/css.png";
import NodeIC from "@/public/icon/node.png";
import SpringBIC from "@/public/icon/springboot.png";
import TailWiC from "@/public/icon/tailwind.png";
import REactIC from "@/public/icon/react.png";
import lithanLogo from "@/public/icon/lithanLong.png";
import manLogo from "@/public/icon/manLogo.png";
import sdAlKhairiyah from "@/public/icon/sdAlKhairiyah.jpg";
import smp8Sby from "@/public/icon/smp8Sby.jpg";

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
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  /*   {
    title: "Courier Delivery Boy",
    location: "Surabaya, Indonesia",
    description:
      "I worked as a courier for a year and a half to deliver packages for one of the large expedition companies in Indonesia.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  }, */
  {
    title: "Lithan's Learner",
    location: "11 Eunos Rd 8, Singapore",
    description:
      "Decided to switch careers in 2023 and enrolled in Lithan's bootcamp and Bachelor's Degree programs as a full stack developer, creating several applications during boot camp training.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
] as const;

export const educationData = [
  /* {
    title: "SD Al-Khairiyah II ",
    logo : sdAlKhairiyah,
    location: "Surabaya, Indonesia",
    description: "Elementary School",
    icon: React.createElement(FaReact),
    date: "1998 - 2004",
  },
  {
    title: "SMP Negeri 8 Surabaya",
    logo :smp8Sby,
    location: "Surabaya, Indonesia",
    description: "Junior High School",
    icon: React.createElement(FaReact),
    date: "2004 - 2007",
  }, */
  /* {
    title: "MAN Amlapura ",
    logo :manLogo,
    location: "Bali, Indonesia",
    description:
      "Throughout my high school years, my academic emphasis centered on science, as I enthusiastically participated in diverse scientific subjects and activities.",
    icon: React.createElement(FaReact),
    date: "2007 - 2010 ",
  }, */
  {
    title: "Lithan's Learner",
    logo: lithanLogo,
    location: "MAJOR - COMPUTER SIENCE",
    description: "Bachelor's Degree programs.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Marry Meal",
    description:
      " ''Marry Meal'' is an online platform dedicated to meal delivery services. It enables users to conveniently order food and drinks (meal on Wheels) online, while also incorporating a donation system.",
    tags: ["React", "Next.js", "Spring Boot"],
    imageUrl: MarryMealImg,
    projLink: "https://github.com/Hidate13/marrymeal",
    demoLink: "https://marrymeal-production.up.railway.app",
  },
  {
    title: "Dobu Martial Art",
    description:
      " ''Dobu Martial'' Art is a website specifically crafted to streamline registration, training, and competition management processes. One of its standout features is its advanced filtering capabilities, enhancing user experience and efficiency.",
    tags: ["HTML", "Javascript", "CSS"],
    imageUrl: DobuImg,
    projLink: "https://github.com/Hidate13/dobu",
    demoLink: "https://dobu-kappa.vercel.app",
  },
  {
    title: "Jumpstart Aceadora",
    description:
      " ''Jumpstart Aceadora'' is a website tailored for registration and content management system purposes. As the full-stack developer, I oversaw its development. Notably, the platform offers functionalities such as an intuitive 'Add to Cart' feature for managing items.",
    tags: ["HTML", "Javascript", "CSS", "Spring Boot"],
    imageUrl: Aceadora,
    projLink: "https://github.com/Hidate13/CPL-Source-Code-E-Commerce",
    demoLink: "https://cpl-source-code-e-commerce-production.up.railway.app",
  },
  {
    title: "Manazanque",
    description:
      " ''Manzanque'' is a comprehensive website designed for helpdesk ticketing management. As the full-stack developer, I spearheaded its development. Key features of the platform include the ability to create tickets and effectively manage helpdesk records.",
    tags: ["HTML", "React.js", "Javascript", "CSS", "Spring Boot"],
    imageUrl: Manzanaque,
    projLink: "https://github.com/Hidate13/manzanque",
    demoLink: "https://manzanaque-full.vercel.app",
  },
] as const;

export const skillsData = [
  { name: "HTML", icon: HTML },
  { name: "CSS", icon: CSS },
  { name: "React", icon: REactIC },
  { name: "Node.js", icon: NodeIC },
  { name: "Tailwind", icon: TailWiC },
  { name: "Spring Boot", icon: SpringBIC },
] as const;

export const softSkillsData = [
  { name: "Research", icon: HTML },
  { name: "Problem Solving", icon: CSS },
  { name: "Programming", icon: NodeIC },
  { name: "Video Editing", icon: TailWiC },
  { name: "Designing", icon: SpringBIC },
] as const;
