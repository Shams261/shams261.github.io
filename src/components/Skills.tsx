import SectionHeading from "./SectionHeading";

const categories = [
  { title: "Languages", skills: ["JavaScript", "TypeScript", "Python", "SQL"] },
  { title: "Frontend", skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"] },
  { title: "Backend & Data", skills: ["Node.js", "NestJS", "Express", "FastAPI", "REST APIs", "PostgreSQL", "MySQL", "MongoDB", "Redis"] },
  { title: "Cloud & Delivery", skills: ["AWS", "Docker", "GitHub Actions", "CI/CD", "Git"] },
  { title: "Applied AI", skills: ["LLM Integrations", "AI Agents", "RAG", "Embeddings", "ChromaDB"] },
];

export default function Skills() {
  return (
    <section id="skills" className="section-space">
      <div className="page-container">
        <SectionHeading first="TECH" second="STACK" description="The tools behind my full-stack products, backend systems, and AI applications." />
        <div className="divide-y divide-gray-200">
          {categories.map(category => (
            <div key={category.title} className="grid gap-4 py-6 sm:grid-cols-[200px_1fr]">
              <h3 className="text-lg font-semibold tracking-tight">{category.title}</h3>
              <ul className="flex flex-wrap gap-2">{category.skills.map(skill => <li key={skill} className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-700">{skill}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
