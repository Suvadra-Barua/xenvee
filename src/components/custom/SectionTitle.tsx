type Props = {
  index?: string;
  title: string;
  subtitle?: string;
};

const SectionTitle = ({ index, title, subtitle }: Props) => (
  <div className="mb-5">
    <div className="flex items-baseline gap-3">
      {index && (
        <span className="font-mono text-xs text-ink-400">{index}</span>
      )}
      <h2 className="font-serif text-xl font-medium leading-none tracking-tight text-ink-900 md:text-2xl">
        {title}
      </h2>
    </div>
    {subtitle && (
      <p className={`mt-1.5 text-sm text-ink-500 ${index ? "ml-8" : ""}`}>
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionTitle;
