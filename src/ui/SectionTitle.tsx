type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow && (
        <span className="mb-3 block font-medium text-primary">
          {eyebrow}
        </span>
      )}

      <h2
        className="
          text-3xl
          font-bold
          tracking-tight
          text-slate-900
          md:text-4xl
        "
      >
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-lg text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}