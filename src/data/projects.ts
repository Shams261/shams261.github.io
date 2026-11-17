export interface Project {
  name: string;
  category: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image?: string;
  highlight?: string;
  signInRequired?: boolean;
}

export const featuredProjects: Project[] = [
  {
    name: "Silsila",
    category: "AI Productivity Platform",
    description: "Engineered a productivity platform that auto-plans each week from recurring routines, cutting weekly planning time by an estimated 80%, with Rumi, an AI agent that reads your plan and adjusts it with one-tap undo, plus Google Calendar sync and smart reminders.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Docker", "LLM"],
    github: "https://github.com/Shams261/CareerOs",
    demo: "https://usesilsila.me/",
    highlight: "Routines, weekly planning & AI assistance",
    signInRequired: true,
  },
  {
    name: "Verity",
    category: "RAG Application",
    description: "Built a Python-based RAG application over 2.97M Reddit posts using ChromaDB, semantic retrieval, and LLM orchestration, reducing response latency by 3x through caching and optimized inference pipelines.",
    technologies: ["Python 3", "FastAPI", "RAG", "ChromaDB", "HF Spaces"],
    github: "https://github.com/Shams261/Verity",
    demo: "https://verity-sandy-five.vercel.app/",
    image: "/verity.png",
    highlight: "Hackathon winner · 2.97M posts · 3× faster responses",
  },
  {
    name: "ReviewLens AI",
    category: "AI Application",
    description: "Review intelligence portal that ingests Amazon product reviews and analyzes them through a guardrailed AI chat interface. Features a three-layer scope guard, citation-backed responses, and 291 tests at 94% coverage.",
    technologies: ["React", "TypeScript", "FastAPI", "Groq API"],
    github: "https://github.com/Shams261/ReviewLens-AI",
    demo: "https://review-lens-ai-pi.vercel.app/",
    image: "/ReviewLens.png",
    highlight: "Citation-backed answers · Scope guards",
  },
];

export const moreProjects: Project[] = [
  {
    name: "WealthSimple Compliance AI",
    category: "Independent AI Project",
    description: "Independent regulatory-compliance project for Canadian financial institutions. Extracts obligations from 10 regulatory sources with 25 domain-specific pattern matchers, citation-backed analysis, and a three-tier LLM fallback chain. Not an official Wealthsimple product.",
    technologies: ["Python", "FastAPI", "React", "SQLite"],
    github: "https://github.com/Shams261/wealthsimple-compliance-ai",
    demo: "https://wealthsimple-compliance-ai.onrender.com",
    image: "/WealthSimple.png",
  },
  {
    name: "InterviewBuddy",
    category: "AI Interview Platform",
    description: "Built an AI interview platform using TypeScript serving 200+ users with 1,200+ practice sessions across behavioral, coding, and project modes, achieving 4.7/5 satisfaction.",
    technologies: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS"],
    github: "https://github.com/Shams261/InterviewBuddy",
    demo: "https://interviewbuddy-ai.vercel.app/",
    image: "/InterviewBuddy.png",
  },
  {
    name: "DevConnect",
    category: "Full-Stack Platform",
    description: "Full-stack developer matchmaking platform using OpenAI embeddings and cosine similarity, serving 300+ active users with 78% match acceptance and 99.2% uptime on AWS EC2.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com/Shams261/DevConnect",
    demo: "https://devtinder.rocks/",
    image: "/devConnectImg.png",
  },
];
