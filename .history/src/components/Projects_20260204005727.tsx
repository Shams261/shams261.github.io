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
    <Section
      id="projects"
      title="Featured Projects"
      className="bg-gray-50 dark:bg-gray-900"
    >
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          A curated selection of projects that demonstrate my technical
          expertise and problem-solving abilities.
        </p>
      </motion.div>

      {/* Projects - Large Format */}
      <div className="space-y-32">
        {displayedProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative"
          >
            {/* Project Number & Category */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-6xl font-bold text-gray-200 dark:text-gray-700">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase">
                  {project.title === "InterviewBuddy" ||
                  project.title === "Verity"
                    ? "AI APPLICATION"
                    : project.title === "DevConnect"
                      ? "FULL-STACK PLATFORM"
                      : "ML PROJECT"}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
              </div>
            </div>

            {/* Project Content */}
            <div
              className={`grid ${index % 2 === 0 ? "lg:grid-cols-[1fr,1.2fr]" : "lg:grid-cols-[1.2fr,1fr]"} gap-12 items-center`}
            >
              {/* Text Content */}
              <div
                className={`${index % 2 === 1 ? "lg:order-2" : ""} space-y-6`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub />
                    View on GitHub
                  </motion.a>
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </motion.a>
                  )}
                </div>

                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Enhanced Technology Stack */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image Section - Large Format */}
              <div
                className={`${index % 2 === 1 ? "lg:order-1" : ""} relative`}
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
                    <div className="aspect-[16/10] relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {(project.title === "DevConnect" ||
                        project.title === "InterviewBuddy" ||
                        project.title === "Verity") && (
                        <div className="absolute top-4 right-4">
                          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                            ⭐ Featured
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Optional: Add multiple screenshots like Pawel */}
                    {project.title === "InterviewBuddy" && (
                      <div className="p-6 bg-gray-50 dark:bg-gray-700">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center text-xs text-gray-500">
                            Interview Mode
                          </div>
                          <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center text-xs text-gray-500">
                            AI Feedback
                          </div>
                          <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center text-xs text-gray-500">
                            Resume Analysis
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Enhanced View All Projects Section */}
      <motion.div
        className="mt-24 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Explore All Projects</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Discover my complete collection of projects, experiments, and
              contributions on GitHub
            </p>
            <motion.a
              href="https://github.com/Shams261"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-gray-900 font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="text-xl" />
              <span>View GitHub Profile</span>
              <motion.div
                className="ml-1"
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default Projects;
