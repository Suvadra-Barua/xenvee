import SectionTitle from "@/components/custom/SectionTitle";
import publications from "@/app/data/publications";
import { FiArrowUpRight } from "react-icons/fi";

const highlight = (authors: string, target?: string) => {
  if (!target) return authors;
  const parts = authors.split(target);
  return parts.map((p, i) => (
    <span key={i}>
      {p}
      {i < parts.length - 1 && (
        <span className="font-medium text-ink-900 underline underline-offset-2">
          {target}
        </span>
      )}
    </span>
  ));
};

const Publications = ({ hideTitle = false }: { hideTitle?: boolean }) => {
  return (
    <section id="publications" className="scroll-mt-20 pt-2">
      {!hideTitle && <SectionTitle title="Publications" />}

      <ol className="border-t border-ink-100">
        {publications.map((pub, i) => (
          <li
            key={pub.title}
            className="grid grid-cols-[32px_1fr] gap-3 border-b border-ink-100 py-5 sm:grid-cols-[40px_1fr]"
          >
            <span className="font-mono text-xs text-ink-400">
              [{String(publications.length - i).padStart(2, "0")}]
            </span>
            <div className="min-w-0">
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="text-[15px] leading-snug text-ink-900">
                  {pub.title}
                </h3>
                {pub.status === "under-review" && (
                  <span className="rounded-full border border-accent px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                    Under review
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-ink-600">
                {highlight(pub.authors, pub.highlightAuthor)}
              </p>
              <p className="mt-0.5 text-sm italic text-ink-500">
                {pub.venue}, {pub.year}
              </p>
              {pub.note && (
                <p className="mt-2 text-sm text-ink-600">{pub.note}</p>
              )}
              {pub.links && pub.links.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-3">
                  {pub.links.map((l) => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs text-ink-600 hover:text-accent"
                    >
                      {l.label}
                      <FiArrowUpRight size={12} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Publications;
