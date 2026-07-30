type Props = {
  index: string;
  title: string;
  subtitle?: string;
};

const SectionTitle = ({ index, title, subtitle }: Props) => (
  <div className="mb-8 border-b border-ink-200 pb-3">
    <div className="flex items-baseline gap-3">
      <span className="font-mono text-xs text-ink-400">{index}</span>
      <h2 className="font-serif text-3xl leading-none text-ink-900">{title}</h2>
    </div>
    {subtitle && (
      <p className="mt-2 font-mono text-xs text-ink-500">{subtitle}</p>
    )}
  </div>
);

export default SectionTitle;
