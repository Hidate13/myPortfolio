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
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Education",
    hash: "#education",
  },
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
      "I decided to switch careers in 2023 by taking courses and programs from Lithan, where I can create several applications while I am undergoing boot camp training.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
] as const;

export const educationData = [
  {
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
  },
  {
    title: "MAN Amlapura ",
    logo :manLogo,
    location: "Bali, Indonesia",
    description:
      "Throughout my high school years, my academic emphasis centered on science, as I enthusiastically participated in diverse scientific subjects and activities.",
    icon: React.createElement(FaReact),
    date: "2007 - 2010 ",
  },
  {
    title: "Lithan Academy",
    logo: lithanLogo,
    location: "11 Eunos Rd 8, Singapore",
    description:
      "I decided to switch careers in 2023 by taking courses **(Bootcamp)** and **(Bachelor's Degree)** programs from Lithan as **a full stack developer**.\n where I can create several applications while I am undergoing boot camp training.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Marry Meal",
    description:
      "Upon joining the bootcamp training program, I developed a meal delivery program named ''Marry Meal''.",
    tags: ["React", "Next.js", "Spring Boot"],
    imageUrl: MarryMealImg,
    projLink: "https://github.com/Hidate13/marrymeal",
  },
  {
    title: "Dobu Martial Art",
    description:
      "I served as the front-end developer for Dobu Martial Art, a website designed to facilitate registration, training, and competition management. Notably, the platform boasts features such as advanced filtering capabilities.",
    tags: ["HTML", "Javascript", "CSS"],
    imageUrl: DobuImg,
    projLink: "https://github.com/Hidate13/dobu",
  },
  {
    title: "Jumpstart Aceadora",
    description:
      "Jumpstart Aceadora is a website tailored for registration and content management system purposes. As the full-stack developer, I oversaw its development. Notably, the platform offers functionalities such as an intuitive 'Add to Cart' feature for managing items..",
    tags: ["HTML", "Javascript", "CSS", "Spring Boot"],
    imageUrl: Aceadora,
    projLink: "https://github.com/Hidate13/CPL-Source-Code-E-Commerce",
  },
  {
    title: "Manazanque",
    description:
      "Manzanque is a comprehensive website designed for helpdesk ticketing management. As the full-stack developer, I spearheaded its development. Key features of the platform include the ability to create tickets and effectively manage helpdesk records.",
    tags: ["HTML", "React.js", "Javascript", "CSS", "Spring Boot"],
    imageUrl: Manzanaque,
    projLink: "https://github.com/Hidate13/manzanque",
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
  { name: "Reading", icon: REactIC },
  { name: "Programming", icon: NodeIC },
  { name: "Movie", icon: TailWiC },
  { name: "Designing", icon: SpringBIC },
] as const;
