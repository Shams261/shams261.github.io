interface SectionHeadingProps {
  first: string;
  second: string;
  description?: string;
}

export default function SectionHeading({ first, second, description }: SectionHeadingProps) {
  return (
    <div className="mb-8 sm:mb-12">
      <h2 className="section-title">
        {first} <span className="text-gray-500">{second}</span>
      </h2>
      <div className="mt-6 border-t border-gray-200 pt-5">
        {description && <p className="max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg">{description}</p>}
      </div>
    </div>
  );
}
