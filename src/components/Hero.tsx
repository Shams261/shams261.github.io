import { ArrowDown, ArrowDownToLine, MapPin } from "lucide-react";
import { resumeUrl } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="relative bg-white pb-12 pt-32 sm:pb-16 sm:pt-40">
      <div className="page-container">
        <div className="mb-8 flex flex-wrap items-center gap-3 text-xs sm:text-sm">
          <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-2 font-medium text-green-800"><span className="h-1.5 w-1.5 rounded-full bg-green-600" />Open to full-stack opportunities</span>
          <span className="inline-flex items-center gap-1.5 text-gray-600"><MapPin size={14} aria-hidden="true" />Toronto, Canada</span>
        </div>
        <h1 className="text-[clamp(3.6rem,11vw,9.5rem)] font-bold leading-[0.9] tracking-tighter text-black">
          SHAMS <span className="text-gray-500">TABREZ</span>
        </h1>
        <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div>
            <p className="max-w-2xl text-2xl font-medium leading-snug tracking-tight text-gray-900 sm:text-3xl">Full Stack Software Engineer building reliable SaaS platforms and AI-powered products.</p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">~4 years of experience. Currently building a multi-tenant immigration CRM at 1Visa.io, with a focus on TypeScript, Node.js, PostgreSQL, and dependable delivery.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#experience" className="button-primary">View Experience <ArrowDown size={16} aria-hidden="true" /></a>
              <a href={resumeUrl} download="Shams_Resume.pdf" className="button-secondary">Download Resume <ArrowDownToLine size={16} aria-hidden="true" /></a>
            </div>
          </div>
          <dl className="flex flex-wrap gap-8 border-t border-gray-200 pt-6 lg:content-start lg:border-l lg:border-t-0 lg:pl-10 lg:pt-2">
            {[{ value: "~4", label: "Years experience" }, { value: "MSc", label: "Computer Science" }].map(({ value, label }) => (
              <div key={label}><dt className="text-sm text-gray-600">{label}</dt><dd className="mt-1 text-3xl font-semibold tracking-tight text-black">{value}</dd></div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
