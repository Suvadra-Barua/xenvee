import { ReactNode } from "react";

type Props = {
  title: string;
  subtitle?: string;
  action?: ReactNode;
};

const PageHeader = ({ title, subtitle, action }: Props) => (
  <header className="mb-10 flex flex-col gap-4 border-b border-ink-100 pb-6 pt-16 sm:flex-row sm:items-end sm:justify-between md:pt-24">
    <div>
      <h1 className="font-serif text-3xl font-medium leading-tight tracking-tight text-ink-900 md:text-4xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-2 max-w-2xl text-sm text-ink-500">{subtitle}</p>
      )}
    </div>
    {action && <div className="shrink-0">{action}</div>}
  </header>
);

export default PageHeader;
