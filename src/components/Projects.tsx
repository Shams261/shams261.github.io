import Image from "next/image";
import { ArrowUpRight, Github, Plus } from "lucide-react";
import { featuredProjects, moreProjects, type Project } from "@/data/projects";
import SectionHeading from "./SectionHeading";

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="mt-5 flex flex-wrap items-center gap-3">
      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="button-primary" aria-label={`Open ${project.name}${project.signInRequired ? " (sign-in required)" : " demo"} in a new tab`}>{project.signInRequired ? "Open App" : "Live Demo"}<ArrowUpRight size={16} aria-hidden="true" /></a>
      <a href={project.github} target="_blank" rel="noopener noreferrer" className="button-secondary" aria-label={`View ${project.name} code on GitHub`}><Github size={16} aria-hidden="true" />Code</a>
      {project.signInRequired && <span className="text-xs text-gray-600">Sign-in required</span>}
    </div>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.image) return <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-gray-200 bg-white"><Image src={project.image} alt={`${project.name} application screenshot`} fill sizes="(max-width: 1023px) 90vw, 480px" className="object-cover" /></div>;
  return (
    <div className="flex aspect-[16/10] flex-col justify-between overflow-hidden rounded-2xl bg-[#151a16] p-7 text-[#f3f1e7] sm:p-10" aria-label="Silsila — AI productivity platform">
      <span className="text-xs uppercase tracking-[0.2em] text-[#bbc6b4]">AI productivity platform</span>
      <div><p className="text-6xl font-semibold tracking-tighter sm:text-7xl">Silsila<span className="text-[#bcd39c]">.</span></p><p className="mt-3 text-base text-[#d2d8ca]">Plan once. Show up daily.</p></div>
      <p className="border-t border-white/20 pt-4 text-xs uppercase tracking-[0.15em] text-[#bbc6b4]">Routines · Weekly planning · Rumi AI</p>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-space">
      <div className="page-container">
        <SectionHeading first="SELECTED" second="WORK" description="Full-stack platforms and applied AI projects, from the first workflow to the systems behind it." />
        <div className="space-y-6">
          {featuredProjects.map((project, index) => (
            <article key={project.name} className="grid items-center gap-6 rounded-3xl border border-gray-200 bg-[#f7f7f7] p-5 sm:p-8 lg:grid-cols-[1fr_1.2fr] lg:gap-10">
              <ProjectVisual project={project} />
              <div>
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-gray-600"><span aria-hidden="true">0{index + 1} / </span>{project.category}</p>
                <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">{project.name}</h3>
                <p className="mt-2 text-sm font-medium text-gray-700">{project.highlight}</p>
                <p className="mt-4 text-base leading-relaxed text-gray-700">{project.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">{project.technologies.map(tech => <li key={tech} className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-700">{tech}</li>)}</ul>
                <ProjectLinks project={project} />
              </div>
            </article>
          ))}
        </div>
        <details className="group mt-8 rounded-2xl border border-gray-200">
          <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-3 px-6 py-5 font-medium">More projects <span className="flex items-center gap-3 text-gray-600"><span className="text-sm">{moreProjects.length} projects</span><Plus size={18} aria-hidden="true" className="transition-transform group-open:rotate-45" /></span></summary>
          <div className="grid gap-8 border-t border-gray-200 p-6 sm:p-8 lg:grid-cols-3">
            {moreProjects.map(project => <article key={project.name} className="flex flex-col"><p className="text-xs uppercase tracking-wider text-gray-600">{project.category}</p><h3 className="mt-2 text-xl font-semibold">{project.name}</h3><p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">{project.description}</p><ProjectLinks project={project} /></article>)}
          </div>
        </details>
        <a href="https://github.com/Shams261" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-medium underline decoration-gray-300 underline-offset-4">Explore all projects on GitHub <ArrowUpRight size={16} aria-hidden="true" /></a>
      </div>
    </section>
  );
}
