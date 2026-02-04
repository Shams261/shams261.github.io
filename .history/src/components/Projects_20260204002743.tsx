"use client";

import Section from "./Section";
import { motion } from "framer-motion";
// import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
const Projects = () => {
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
        "Verity is an AI-powered platform that helps users understand Canadian public discourse by analyzing millions of Reddit posts. Using advanced RAG (Retrieval-Augmented Generation) technology with Groq's ultra-fast LLM inference, it retrieves relevant discussions and generates insightful answers backed by real community conversations.",
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Section id="projects" title="My Projects">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 gap-10"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:z-10 w-full min-h-[400px]"
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              zIndex: 10,
            }}
          >
            <div
              className={`relative ${
                project.title === "InterviewBuddy" ? "h-56" : "h-48"
              } bg-gray-200 dark:bg-gray-600 overflow-hidden`}
            >
              <img
                src={project.image}
                alt={project.title}
                className={`absolute inset-0 w-full h-full transition-transform duration-300 group-hover:scale-110 ${
                  project.title === "InterviewBuddy"
                    ? "object-cover object-top"
                    : "object-cover"
                }`}
              />
              {(project.title === "DevConnect" ||
                project.title === "InterviewBuddy" || project) && (
                <span className="absolute top-3 right-3 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded shadow">
                  ⭐ Featured
                </span>
              )}
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs font-medium px-2.5 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="mr-2" />
                  <span>Code</span>
                </motion.a>
                {project.demo && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    <span>Live Demo</span>
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Projects;
