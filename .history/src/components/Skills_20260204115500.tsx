"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaAws,
  FaJira,
  FaDatabase,
  FaBrain,
  FaLock, // Added for JWT/OAuth
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiJenkins,
  SiHuggingface,
  SiTypescript,
  SiPostgresql,
  SiNginx,
  SiNextdotjs, // Specific icon for Next.js
  SiExpress,   // Specific icon for Express
  SiFastapi,   // Specific icon for FastAPI
  SiSocketdotio, // Better for WebSockets
  SiPostman,    // Specific icon for Postman
  SiLangchain,  // Specific icon for LangChain
} from "react-icons/si";
import { TbApi, TbVectorTriangle } from "react-icons/tb"; // Added for Vector Search

const Skills = () => {
  const skillCategories = [
    {
      number: "01",
      title: "Languages",
      description:
        "Core programming languages I use to build and ship products",
      skills: [
        { name: "Python", icon: <FaPython size={24} /> },
        { name: "JavaScript", icon: <FaJs size={24} /> },
        { name: "TypeScript", icon: <SiTypescript size={24} /> },
        { name: "SQL", icon: <FaDatabase size={24} /> },
        { name: "HTML5", icon: <FaHtml5 size={24} /> },
        { name: "CSS3", icon: <FaCss3Alt size={24} /> },
      ],
    },
    {
      number: "02",
      title: "Frameworks & APIs",
      description:
        "Frameworks and API patterns for building production systems",
      skills: [
        { name: "React.js", icon: <FaReact size={24} /> },
        { name: "Next.js", icon: <SiNextdotjs size={24} /> },
        { name: "Node.js", icon: <FaNodeJs size={24} /> },
        { name: "Express.js", icon: <SiExpress size={24} /> },
        { name: "FastAPI", icon: <SiFastapi size={24} /> },
        { name: "REST APIs", icon: <TbApi size={24} /> },
        { name: "WebSockets", icon: <SiSocketdotio size={24} /> },
        { name: "OAuth", icon: <FaLock size={24} /> },
        { name: "JWT", icon: <FaLock size={24} /> },
      ],
    },
    {
      number: "03",
      title: "Databases & DevOps",
      description: "Datastores and infrastructure for reliability and scale",
      skills: [
        { name: "MongoDB", icon: <SiMongodb size={24} /> },
        { name: "PostgreSQL", icon: <SiPostgresql size={24} /> },
        { name: "MySQL", icon: <SiMysql size={24} /> },
        { name: "ChromaDB", icon: <FaDatabase size={24} /> },
        { name: "AWS (EC2, S3)", icon: <FaAws size={24} /> },
        { name: "Docker", icon: <FaDocker size={24} /> },
        { name: "Nginx", icon: <SiNginx size={24} /> },
        { name: "CI/CD", icon: <SiJenkins size={24} /> },
        { name: "Microservices", icon: <TbApi size={24} /> },
      ],
    },
    {
      number: "04",
      title: "AI/ML & Tooling",
      description: "LLM development plus the tools that keep projects moving",
      skills: [
        { name: "LLMs", icon: <FaBrain size={24} /> },
        { name: "RAG", icon: <SiHuggingface size={24} /> },
        { name: "LangChain", icon: <SiLangchain size={24} /> },
        { name: "Embeddings", icon: <FaBrain size={24} /> },
        { name: "Vector Search", icon: <TbVectorTriangle size={24} /> },
        { name: "Git", icon: <FaGitAlt size={24} /> },
        { name: "GitHub", icon: <FaGithub size={24} /> },
        { name: "Postman", icon: <SiPostman size={24} /> },
        { name: "Agile/Scrum", icon: <FaJira size={24} /> },
      ],
    },
  ];

  // ... rest of your Framer Motion logic and JSX remains exactly the same