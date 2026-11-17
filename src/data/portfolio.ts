export interface ExperienceEntry {
  title: string;
  company: string;
  period: string;
  bullets: { label: string; text: string }[];
}

// Experience wording matches the supplied Shams_Resume.pdf.
export const experiences: ExperienceEntry[] = [
  {
    "title": "Full Stack Software Engineer",
    "company": "1Visa.io",
    "period": "Apr 2026 – Present",
    "bullets": [
      {
        "label": "Immigration CRM Platform",
        "text": "Reduced manual lead-handling time by an estimated 80% by building a multi-tenant CRM automating webhook lead capture, de-duplication, assignment, questionnaires and document collection."
      },
      {
        "label": "Data Integrity",
        "text": "Prevented duplicate and conflicting writes with PostgreSQL transactions, fixed-order row locks, version checks and idempotency keys; implemented a transactional outbox with retries and lease recovery; shipped 70+ additive-only migrations."
      },
      {
        "label": "AI-Assisted Delivery",
        "text": "Designed a process where AI agents implement under my architecture and every change passes an independent audit and mutation testing, catching cross-tenant access, fault-isolation and time-zone bugs before merge."
      },
      {
        "label": "CI/CD & Releases",
        "text": "Cut CI feedback from about 25 to 14 minutes with parallel GitHub Actions jobs and 3 end-to-end shards; enforced container scanning and image-verification gates; shipped 20+ feature-flagged packages with zero production rollbacks."
      }
    ]
  },
  {
    "title": "Software Engineer",
    "company": "AdvantageClub.ai",
    "period": "Mar 2025 – Apr 2026",
    "bullets": [
      {
        "label": "OCR Bill Processing",
        "text": "Built Python OCR pipelines with Tesseract and OpenCV (noise reduction, format normalization) for digital and manual expense bills, reducing manual verification effort by 60%."
      },
      {
        "label": "Fraud Detection",
        "text": "Lowered erroneous approvals by 35% with rule-based checks that flag tampered claims (duplicates, metadata mismatches, invalid formats) before admin approval, on a platform serving 2000+ employees."
      },
      {
        "label": "Reimbursement System",
        "text": "Designed Node.js/Express APIs and React workflows for claim submission, validation and multi-tier approval routing, reducing claim processing time by 40%."
      }
    ]
  },
  {
    "title": "Software Engineer",
    "company": "Accenture",
    "period": "Sept 2021 – Aug 2023",
    "bullets": [
      {
        "label": "Configuration Platform",
        "text": "Re-architected a shared configuration service across 12+ modules with server-side caching and leaner REST APIs, delivering a 30% performance gain, sub-200ms responses and 20% fewer support tickets."
      },
      {
        "label": "API & Database Optimization",
        "text": "Optimized analytics REST APIs and SQL queries through query tuning and indexing, improving data retrieval by 40% and enabling real-time reporting."
      }
    ]
  }
];

export const resumeUrl = "/Shams_Resume.pdf";
export const navigation = [
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
];
