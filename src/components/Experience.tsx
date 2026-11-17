import { experiences } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="section-space" aria-label="Work history">
      <div className="page-container">
        <SectionHeading first="WORK" second="HISTORY" description="~4 years building and shipping software, with a focus on reliable backend systems, full-stack products, and practical AI applications." />
        <div className="space-y-5">
          {experiences.map((experience, index) => (
            <article key={experience.company} className="rounded-3xl border border-gray-200 bg-[#f7f7f7] p-6 sm:p-8 lg:p-10">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-12">
                <div>
                  <div className="mb-4 flex items-center gap-3 text-sm text-gray-500">
                    <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                    {index === 0 && <span className="rounded-full border border-gray-300 bg-white px-3 py-1 text-xs font-medium text-gray-700">Current role</span>}
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl">{experience.title}</h3>
                  <p className="mt-2 text-lg font-medium text-gray-700">{experience.company}</p>
                  <p className="mt-3 text-sm text-gray-600">{experience.period}</p>
                </div>
                <ul className="list-disc space-y-4 pl-5 text-base leading-relaxed text-gray-700 marker:text-gray-400">
                  {experience.bullets.map(({ label, text }) => (
                    <li key={label} className="pl-1"><strong className="font-semibold text-gray-950">{label}:</strong> {text}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
