"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaEye } from "react-icons/fa";
import { useState } from "react";
const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "InterviewBuddy",
      description:
        "A web app to practice technical interviews with AI. Features multiple interview modes (behavioral, coding/LeetCode, project), PDF resume ingestion, and streaming AI responses. Includes cost controls via rate limiting, caching, and token management.",
      image: "/InterviewBuddy.png",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "OpenAI API",
        "Edge Runtime",
        "PDF.js",
      ],
      github: "https://github.com/Shams261/InterviewBuddy",
      demo: "https://interviewbuddy-ai.vercel.app/",
    },
    {
      title: "Verity",
      description:
        "Verity is an AI-powered platform that helps users understand Canadian public discourse by analyzing millions of Reddit posts. Using advanced RAG (Retrieval-Augmented Generation) technology with Groq's ultra-fast LLM inference,answers backed by real community conversations.",
      image: "/verity.png",
      technologies: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "FastAPI",
        "ChromaDB",
        "Groq API",
        "Gemini API",
        "Hugging Face Spaces",
      ],
      github: "https://github.com/Shams261/Verity",
      demo: "https://verity-sandy-five.vercel.app/",
    },
    {
      title: "DevConnect",
      description:
        "DevConnect is a platform built for developers to connect, collaborate, and build side projects together. Whether you're looking for a co-founder, mentor, or teammate — this is your space.",
      image: "/devtinderImg.png",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "TailwindCSS",
        "Socket.io",
        "OpenAI API",
      ],
      github: "https://github.com/Shams261/DevConnect",
      demo: "https://devtinder.rocks/",
    },
    {
      title: "Text-Generator",
      description:
        "A machine learning project that generates coherent and contextually relevant text based on input data using advanced NLP techniques.",
      image: "/textgeneratorImg.jpg",
      technologies: [
        "Python",
        "NLP",
        "Machine Learning",
        "Jupyter Notebook",
        "HTML",
      ],
      github: "https://github.com/Shams261/Text-Generator",
      demo: null,
    },
    {
      title: "TweetSentimentAnalysis",
      description:
        "Analyzes and classifies the sentiment of tweets as positive or negative, providing insights into public opinion on various topics.",
      image: "/tweetsentimentImg.jpeg",
      technologies: [
        "Python",
        "NLP",
        "Machine Learning",
        "HTML",
        "Data Analysis",
      ],
      github: "https://github.com/Shams261/TweetSentimentAnalysis",
      demo: null,
    },
    {
      title: "Music-Genre-Classification",
      description:
        "Utilizes machine learning algorithms to accurately classify music tracks into their respective genres based on audio features.",
      image: "/musicgenreclassificationImg.png",
      technologies: [
        "Python",
        "Machine Learning",
        "Audio Processing",
        "HTML",
        "CNN",
      ],
      github: "https://github.com/Shams261/Music-Genre-Classification",
      demo: null,
    },
    {
      title: "Weather App",
      description:
        "A web application that provides real-time weather updates and forecasts based on user location.",
      image: "/weatherImg.png",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "API Integration",
        "Responsive Design",
      ],
      github: "https://github.com/Shams261/weather-app.github.io",
      demo: "https://shams261.github.io/weather-app.github.io",
    },
  ];

  // Get featured projects (first 4) or all projects
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <Section id="projects" title="Featured Projects">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 lg:grid-cols-2 gap-6"
      >
        {displayedProjects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 min-h-[320px]"
          >
            {/* Image Section - Compact */}
            <div className="relative h-40 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {(project.title === "DevConnect" ||
                project.title === "InterviewBuddy" ||
                project.title === "Verity") && (
                <div className="absolute top-2 right-2">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold px-2 py-1 rounded-full shadow-md flex items-center gap-1">
                    <span className="text-yellow-800">⭐</span>
                    Featured
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
            </div>

            {/* Content Section - Compact */}
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                {project.description.length > 100
                  ? `${project.description.substring(0, 100)}...`
                  : project.description}
              </p>

              {/* Technologies - Compact */}
              <div className="mb-3">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-medium px-2 py-1 rounded-md border border-indigo-200 dark:border-indigo-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs font-medium px-2 py-1 rounded-md">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons - Compact */}
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="mr-1 text-base" />
                    Code
                  </motion.a>
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt className="mr-1 text-base" />
                      Live
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* See More Projects Button */}
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.a
          href="https://github.com/Shams261"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaEye className="text-lg" />
          <span>View All Projects on GitHub</span>
          <motion.div
            className="ml-1"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.div>
        </motion.a>
      </motion.div>
    </Section>
  );
};

export default Projects;
