"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      number: "01",
      title: "InterviewBuddy",
      description:
        "Built AI interview platform using TypeScript serving 200+ users with 1,200+ practice sessions across behavioral, coding, and project modes, achieving 4.7/5 satisfaction.",
      image: "/InterviewBuddy.png",
      technologies: ["Next.js", "TypeScript", "OpenAI API", "TailwindCSS"],
      github: "https://github.com/Shams261/InterviewBuddy",
      demo: "https://interviewbuddy-ai.vercel.app/",
      metrics: "200+ Users • 1,200+ Sessions",
      category: "AI Application",
    },
    {
      number: "02",
      title: "Verity",
      description:
        "Hackathon Winner - Built a RAG pipeline over 2.97M r/Canada posts using semantic retrieval + ChromaDB to generate grounded, evidence-backed answers. Reduced API response latency by 3x.",
      image: "/verity.png",
      technologies: ["React", "FastAPI", "ChromaDB", "Groq API"],
      github: "https://github.com/Shams261/Verity",
      demo: "https://verity-sandy-five.vercel.app/",
      metrics: "2.97M Posts • 3x Faster",
      category: "AI Application",
      isWinner: true,
    },
    {
      number: "03",
      title: "DevConnect",
      description:
        "Full-stack developer matchmaking platform using OpenAI embeddings + cosine similarity, serving 300+ active users with 78% match acceptance and 99.2% uptime on AWS EC2.",
      image: "/devtinderImg.png",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      github: "https://github.com/Shams261/DevConnect",
      demo: "https://devtinder.rocks/",
      metrics: "300+ Users • 78% Match Rate",
      category: "Full-Stack Platform",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="projects" className="py-16 lg:py-20 bg-white relative">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-16 xl:px-24">
        {/* Header - Large Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 lg:mb-28"
        >
          {/* Large heading */}
          <div className="flex items-end gap-4 lg:gap-6 mb-10">
            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold text-black leading-[0.85] tracking-tighter">
              SELECTED
            </h2>
            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold text-gray-400 leading-[0.85] tracking-tighter">
              WORK
            </h2>
          </div>
          {/* Divider line */}
          <div className="w-full h-px bg-gray-200 mb-10" />
          <p className="text-xl md:text-2xl text-gray-500 max-w-3xl leading-relaxed">
            A selection of projects I’ve shipped, full-stack platforms and AI
            applications built with clean UX, reliable APIs, and scalable
            architecture.
          </p>
        </motion.div>

        {/* Projects Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.01,
                y: -4,
                transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
              }}
              className="group cursor-pointer"
            >
              <div className="bg-[#f5f5f5] rounded-[2rem] lg:rounded-[2.5rem] p-6 lg:p-8 hover:bg-white transition-all duration-500 border border-transparent hover:border-gray-200 hover:shadow-2xl hover:shadow-gray-200/50">
                <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                  {/* Image */}
                  <div className="lg:col-span-5 order-1 lg:order-none">
                    <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl bg-gray-200 aspect-[16/10]">
                      {project.isWinner && (
                        <div className="absolute top-4 left-4 z-10">
                          <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-yellow-400 text-yellow-900 text-xs font-semibold rounded-full shadow-lg">
                            🏆 Hackathon Winner
                          </span>
                        </div>
                      )}
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      {/* Subtle overlay on hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-7 order-2 lg:order-none">
                    <div className="flex items-start gap-6 lg:gap-8">
                      {/* Number */}
                      <span className="text-4xl lg:text-6xl font-bold text-gray-300 group-hover:text-gray-400 transition-colors duration-500 hidden lg:block">
                        {project.number}
                      </span>

                      {/* Details */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm text-gray-500 uppercase tracking-widest">
                            {project.category}
                          </span>
                        </div>

                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-2 group-hover:text-gray-800 transition-colors duration-300 leading-tight">
                          {project.title}
                        </h3>

                        <p className="text-sm lg:text-base text-gray-500 mb-3">
                          {project.metrics}
                        </p>

                        <p className="text-gray-700 leading-relaxed text-base lg:text-lg group-hover:text-gray-900 transition-colors duration-300 mb-5">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="text-sm text-gray-600 bg-white px-3 lg:px-4 py-1.5 lg:py-2 rounded-full border border-gray-200 group-hover:bg-gray-50 group-hover:border-gray-300 transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Links */}
                        <div className="flex items-center gap-3">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition-all duration-300 font-medium"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FaGithub size={14} />
                            Code
                          </a>
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 text-black text-sm rounded-full hover:border-black hover:bg-gray-50 transition-all duration-300"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <FaExternalLinkAlt size={12} />
                              Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 lg:mt-20 text-center"
        >
          <a
            href="https://github.com/Shams261"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300 font-medium"
          >
            <FaGithub size={20} />
            <span>View All Projects on GitHub</span>
            <FaArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
