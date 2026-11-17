import { ArrowUpRight } from "lucide-react";
import { resumeUrl } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="section-space">
      <div className="page-container">
        <div className="grid gap-10 rounded-[2rem] bg-[#0a0a0a] p-6 text-white sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-12">
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-gray-400">About my work</p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">From product idea<br /><span className="text-gray-400">to dependable software.</span></h2>
            <p className="mt-5 max-w-lg leading-relaxed text-gray-300">I work across the stack: shaping APIs and data models, building clear user experiences, and making delivery reliable. My recent work brings together workflow automation, multi-tenant systems, and practical AI.</p>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex min-h-11 items-center gap-2 font-medium underline decoration-gray-500 underline-offset-4 hover:decoration-white">View full resume <ArrowUpRight size={18} aria-hidden="true" /><span className="sr-only"> (PDF, opens in a new tab)</span></a>
          </div>
          <div>
            <h3 className="mb-5 text-sm font-medium uppercase tracking-[0.15em] text-gray-400">Education</h3>
            <div className="space-y-6">
              <div className="border-t border-gray-700 pt-5"><p className="text-xl font-medium">Master of Science in Computer Science</p><p className="mt-2 text-gray-300">Lakehead University</p><p className="mt-1 text-sm text-gray-400">Sept 2023 – Aug 2024</p></div>
              <div className="border-t border-gray-700 pt-5"><p className="text-xl font-medium">Bachelor of Technology in Information Technology</p><p className="mt-2 text-gray-300">DIATM</p><p className="mt-1 text-sm text-gray-400">Aug 2017 – July 2021</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
