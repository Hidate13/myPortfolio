import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import MarryMealImg from "@/public/MarryMeal.png";
import DobuImg from "@/public/Dobu.png";
import HTML from "@/public/icon/html.png";
import Aceadora from "@/public/Aceadora.png";
import Manzanaque from "@/public/Manzanaque.png";
import CSS from "@/public/icon/css.png";
import lithanLogo from "@/public/icon/lithanLong.png";
import NodeIC from "@/public/icon/node.png";
import SpringBIC from "@/public/icon/springboot.png";
import TailWiC from "@/public/icon/tailwind.png";
import REactIC from "@/public/icon/react.png";

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
    logo :"",
    location: "Surabaya, Indonesia",
    description: "Elementary School",
    icon: React.createElement(FaReact),
    date: "1998 - 2004",
  },
  {
    title: "SMP Negeri 8 Surabaya",
    logo :"",
    location: "Surabaya, Indonesia",
    description: "Junior High School",
    icon: React.createElement(FaReact),
    date: "2004 - 2007",
  },
  {
    title: "MAN Amlapura ",
    logo :"",
    location: "Bali, Indonesia",
    description:
      "During my high school years, my academic focus revolved around science, where I engaged enthusiastically in various scientific subjects and activities.",
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
      "When I joined the bootcamp training program, I created a meal on wheel program called Marry Meal",
    tags: ["React", "Next.js", "Spring Boot"],
    imageUrl: MarryMealImg,
    projLink: "https://github.com/Hidate13/marrymeal",
  },
  {
    title: "Dobu Martial Art",
    description:
      "Dobu Martial Art is a website to manage Registration, Training, and competiotion. I was the front-end developer. It has features like filtering.",
    tags: ["HTML", "Javascript", "CSS"],
    imageUrl: DobuImg,
    projLink: "https://github.com/Hidate13/dobu",
  },
  {
    title: "Jumpstart Aceadora",
    description:
      "Jumpstart Aceadora is a website to manage Registration and Content Management System. I was the full stack developer. It has features like Add to cart items.",
    tags: ["HTML", "Javascript", "CSS", "Spring Boot"],
    imageUrl: Aceadora,
    projLink: "https://github.com/Hidate13/CPL-Source-Code-E-Commerce",
  },
  {
    title: "Manazanque",
    description:
      "Manzanque is a website to manage Helpdesk Ticketing. I was the full stack developer. It has features create ticket and manage the helpdesk record.",
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
