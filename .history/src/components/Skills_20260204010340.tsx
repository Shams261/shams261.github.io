"use client";

import Section from "./Section";
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
  FaChartBar,
  FaTasks,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiJenkins,
  SiTensorflow,
  SiOpenai,
  SiHuggingface,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const Skills = () => {
  // Skills organized by categories from resume
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: <FaPython size={40} className="text-[#3776AB]" /> },
        { name: "JavaScript", icon: <FaJs size={40} className="text-[#F7DF1E]" /> },
        { name: "TypeScript", icon: <FaJs size={40} className="text-[#3178C6]" /> },
        { name: "SQL", icon: <FaDatabase size={40} className="text-[#336791]" /> },
        { name: "HTML5", icon: <FaHtml5 size={40} className="text-[#E34F26]" /> },
        { name: "CSS3", icon: <FaCss3Alt size={40} className="text-[#1572B6]" /> },
      ]
    },
    {
      title: "Frameworks & Libraries", 
      skills: [
        { name: "React.js", icon: <FaReact size={40} className="text-[#61DAFB]" /> },
        { name: "Next.js", icon: <FaReact size={40} className="text-[#000000] dark:text-white" /> },
        { name: "Node.js", icon: <FaNodeJs size={40} className="text-[#339933]" /> },
        { name: "Express.js", icon: <FaNodeJs size={40} className="text-[#000000] dark:text-white" /> },
        { name: "REST APIs", icon: <TbApi size={40} className="text-gray-600 dark:text-gray-300" /> },
        { name: "WebSockets", icon: <TbApi size={40} className="text-[#FF6B6B]" /> },
      ]
    },
    {
      title: "Databases & Cloud",
      skills: [
        { name: "MongoDB", icon: <SiMongodb size={40} className="text-[#47A248]" /> },
        { name: "MySQL", icon: <SiMysql size={40} className="text-[#4479A1]" /> },
        { name: "AWS EC2", icon: <FaAws size={40} className="text-[#FF9900]" /> },
        { name: "Docker", icon: <FaDocker size={40} className="text-[#2496ED]" /> },
        { name: "GitHub Actions", icon: <FaGithub size={40} className="text-gray-800 dark:text-white" /> },
        { name: "Jenkins", icon: <SiJenkins size={40} className="text-[#D24939]" /> },
      ]
    },
    {
      title: "AI/ML & Tools",
      skills: [
        { name: "LLMs", icon: <FaBrain size={40} className="text-[#3492FF]" /> },
        { name: "RAG", icon: <SiHuggingface size={40} className="text-[#ffd21e]" /> },
        { name: "Git", icon: <FaGitAlt size={40} className="text-[#F05032]" /> },
        { name: "GitHub", icon: <FaGithub size={40} className="text-gray-800 dark:text-white" /> },
        { name: "Postman", icon: <TbApi size={40} className="text-[#FF6C37]" /> },
        { name: "Jira", icon: <FaJira size={40} className="text-[#0052CC]" /> },
      ]
    }
  ];

  return (
    <Section id="skills" title="Technical Skills" className="bg-gray-50 dark:bg-gray-900">
      <div className="space-y-12">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            className="text-center"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8 flex items-center justify-center gap-2">
              <span className="w-12 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500"></span>
              {category.title}
              <span className="w-12 h-[2px] bg-gradient-to-r from-purple-500 to-indigo-500"></span>
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.4, 
                    delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="flex flex-col items-center group"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-4 mb-3 w-20 h-20 flex items-center justify-center group-hover:shadow-xl transition-all duration-300 group-hover:border-indigo-300 dark:group-hover:border-indigo-600">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
        
        {/* Resume Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 border border-indigo-200 dark:border-gray-600"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            <span className="font-semibold">Professional Experience:</span> 2+ years at Accenture with expertise in enterprise SaaS platforms,
            microservices architecture, and AI/ML integration.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            <span className="font-semibold">Methodologies:</span> Agile/Scrum, CI/CD, Test-Driven Development, RESTful API Design
          </p>
        </motion.div>
      </div>
    </Section>
  );
};

export default Skills;
